// components/PortableText.tsx
import { PortableText as PortableTextComponent } from "@portabletext/react";
import type { PortableTextReactComponents } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

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
    // Add a fallback for undefined block types
    undefined: ({ value }) => {
      // Silent handling of undefined blocks
      return null;
    },
    // Default handler for any other unknown block types
    _fallback: ({ value }) => {
      // If in development, log the unknown type
      if (process.env.NODE_ENV === "development") {
        console.log("Unknown block type:", value?._type, value);
      }

      // Try to render any text content if available
      if (value?.children) {
        return (
          <p className="my-4 text-base">
            {value.children.map((child, i) => child.text || "").join("")}
          </p>
        );
      }

      return null;
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
    // Add a default handler for any unknown block style
    _unknown: ({ children }) => <p className="my-4 text-base">{children}</p>,
  },
  marks: {
    // Handle different text marks (inline styles)
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
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

/**
 * Converts various input types to PortableText format
 */
function normalizeToPortableText(value: any): any[] {
  // If already an array, clean it
  if (Array.isArray(value)) {
    return value.filter((item) => item !== null && item !== undefined);
  }

  // Handle string input - convert to a PortableText block
  if (typeof value === "string") {
    return [
      {
        _type: "block",
        _key: "string-" + Date.now(),
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "span-" + Date.now(),
            text: value,
            marks: [],
          },
        ],
      },
    ];
  }

  // Handle objects (single block)
  if (value && typeof value === "object") {
    return [value];
  }

  // Default to empty array for null/undefined/unsupported types
  return [];
}

// Create the exported PortableText component
export function PortableText({ value }: { value: any }) {
  // Handle empty content gracefully
  if (!value) {
    return null;
  }

  try {
    // Normalize any input type to valid PortableText format
    const normalizedValue = normalizeToPortableText(value);

    // If we end up with an empty array after normalization
    if (normalizedValue.length === 0) {
      return null;
    }

    return (
      <PortableTextComponent value={normalizedValue} components={components} />
    );
  } catch (error) {
    // Gracefully handle errors in production
    console.error("Error rendering PortableText:", error);

    // In development, show error details
    if (process.env.NODE_ENV === "development") {
      return (
        <div className="my-4 rounded border border-red-200 p-4 text-red-500">
          <p className="font-bold">PortableText Error:</p>
          <p>{error instanceof Error ? error.message : "Unknown error"}</p>
          <p className="mt-2 text-sm">
            Value type: {typeof value} {Array.isArray(value) ? "(array)" : ""}
          </p>
        </div>
      );
    }

    // In production, render simple message or try to render as text if possible
    if (typeof value === "string") {
      return <p className="my-4 text-base">{value}</p>;
    }

    return <p className="my-4 text-base">Content currently unavailable</p>;
  }
}
