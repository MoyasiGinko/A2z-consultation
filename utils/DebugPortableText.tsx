// components/DebugPortableText.tsx
import { useState } from "react";
import { PortableText as PortableTextComponent } from "@portabletext/react";
import type { PortableTextReactComponents } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

// Enhanced component with debugging capabilities
export function DebugPortableText({ value }: { value: any }) {
  const [showDebug, setShowDebug] = useState(false);
  const [showRaw, setShowRaw] = useState(false);

  // Define custom components for different block types
  const components: Partial<PortableTextReactComponents> = {
    types: {
      image: ({ value }) => {
        if (!value?.asset?._ref) {
          return null;
        }
        return (
          <div className="relative my-6 h-96 w-full">
            <Image
              src={urlFor(value).url()}
              alt={value.alt || ""}
              fill
              className="rounded-lg object-cover"
            />
          </div>
        );
      },
      // Add handlers for all potential block types in your schema
      // Default handler for unknown block types
      _fallback: ({ value }) => {
        console.log("Fallback handler for block:", value);
        return (
          <div className="my-2 rounded border border-yellow-300 bg-yellow-50 p-2">
            <p className="text-xs text-yellow-800">
              Unknown block type: {value._type || "undefined"}
            </p>
            {value.children && (
              <div className="mt-1">
                {value.children.map((child: any, i: number) => (
                  <span key={i}>{child.text}</span>
                ))}
              </div>
            )}
          </div>
        );
      },
    },
    block: {
      // Handle different block styles
      h1: ({ children }) => (
        <h1 className="my-4 text-4xl font-bold">{children}</h1>
      ),
      h2: ({ children }) => (
        <h2 className="my-3 text-3xl font-bold">{children}</h2>
      ),
      h3: ({ children }) => (
        <h3 className="my-3 text-2xl font-bold">{children}</h3>
      ),
      h4: ({ children }) => (
        <h4 className="my-2 text-xl font-bold">{children}</h4>
      ),
      normal: ({ children }) => <p className="my-4 text-base">{children}</p>,
      blockquote: ({ children }) => (
        <blockquote className="my-4 border-l-4 border-gray-500 pl-4 italic">
          {children}
        </blockquote>
      ),
    },
    marks: {
      // Handle different text marks (inline styles)
      strong: ({ children }) => (
        <strong className="font-bold">{children}</strong>
      ),
      em: ({ children }) => <em className="italic">{children}</em>,
      code: ({ children }) => (
        <code className="rounded bg-gray-100 p-1">{children}</code>
      ),
      link: ({ value, children }) => {
        const target = (value?.href || "").startsWith("http")
          ? "_blank"
          : undefined;
        return (
          <a
            href={value?.href}
            target={target}
            rel={target === "_blank" ? "noopener noreferrer" : undefined}
            className="text-blue-600 hover:underline"
          >
            {children}
          </a>
        );
      },
    },
    list: {
      bullet: ({ children }) => (
        <ul className="my-4 list-disc pl-5">{children}</ul>
      ),
      number: ({ children }) => (
        <ol className="my-4 list-decimal pl-5">{children}</ol>
      ),
    },
    listItem: {
      bullet: ({ children }) => <li className="my-1">{children}</li>,
      number: ({ children }) => <li className="my-1">{children}</li>,
    },
  };

  if (!value) {
    return <div className="text-red-500">Missing PortableText content</div>;
  }

  // Check if value is an array (as expected by PortableText)
  const isValidPortableText = Array.isArray(value);

  // Calculate content type issues
  const blocksWithoutType = Array.isArray(value)
    ? value.filter((block) => !block._type).length
    : 0;

  const unknownTypes = Array.isArray(value)
    ? [
        ...new Set(
          value.filter((block) => block._type).map((block) => block._type),
        ),
      ]
    : [];

  return (
    <div className="relative">
      {/* Debug toggle button */}
      <div className="absolute -top-8 right-0 flex space-x-2">
        <button
          onClick={() => setShowDebug(!showDebug)}
          className="rounded bg-blue-100 px-2 py-1 text-xs hover:bg-blue-200"
        >
          {showDebug ? "Hide Debug" : "Debug"}
        </button>
        <button
          onClick={() => setShowRaw(!showRaw)}
          className="rounded bg-gray-100 px-2 py-1 text-xs hover:bg-gray-200"
        >
          {showRaw ? "Hide Raw" : "Raw"}
        </button>
      </div>

      {/* Debug panel */}
      {showDebug && (
        <div className="mb-4 rounded border border-blue-300 bg-blue-50 p-3 text-sm">
          <h3 className="mb-1 font-bold">PortableText Debug Info:</h3>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              Valid structure:{" "}
              <span
                className={
                  isValidPortableText ? "text-green-600" : "text-red-600"
                }
              >
                {isValidPortableText ? "Yes" : "No - expected an array"}
              </span>
            </li>
            <li>Total blocks: {Array.isArray(value) ? value.length : "N/A"}</li>
            <li>Blocks missing type: {blocksWithoutType}</li>
            <li>
              Block types found:{" "}
              {unknownTypes.length ? unknownTypes.join(", ") : "None"}
            </li>
          </ul>
        </div>
      )}

      {/* Raw data view */}
      {showRaw && (
        <div className="mb-4 rounded border border-gray-300 bg-gray-50 p-3">
          <h3 className="mb-1 font-bold">Raw Content:</h3>
          <pre className="max-h-60 overflow-auto text-xs">
            {JSON.stringify(value, null, 2)}
          </pre>
        </div>
      )}

      {/* Actual PortableText rendering */}
      <div className="portable-text-content">
        {isValidPortableText ? (
          <PortableTextComponent value={value} components={components} />
        ) : (
          <div className="rounded border border-red-300 bg-red-50 p-3">
            <p className="text-red-600">
              Invalid PortableText structure. Expected an array of blocks.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
