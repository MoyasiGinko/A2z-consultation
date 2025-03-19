"use client";
import React, { useState, useRef, useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
  bgColor: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  content,
  bgColor,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isClosing, setIsClosing] = useState(false);

  // Handle smooth closing animation
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 200);
  };

  // Close modal when clicking outside
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    };

    // Close on escape key press
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen && !isClosing) return null;

  return (
    <>
      {/* Custom styles for hiding scrollbar */}
      <style jsx global>{`
        .modal-scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .modal-scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Backdrop with enhanced fade - now using fixed position with pointer-events */}
      <div
        className="pointer-events-auto fixed inset-0 bg-black"
        style={{
          zIndex: 9999,
          opacity: isClosing ? 0 : 0.6,
          transition: isClosing
            ? "opacity 0.2s ease-out"
            : "opacity 0.3s ease-in",
          pointerEvents: "auto",
        }}
        onClick={handleClose}
      />

      {/* Modal container - fixed position to not affect page layout */}
      <div
        className="pointer-events-none fixed left-0 top-0 flex h-full w-full items-center justify-center p-4 sm:p-6"
        style={{ zIndex: 10000 }}
      >
        {/* Modal content with enhanced animations and hidden scrollbar */}
        <div
          ref={modalRef}
          className={`${bgColor} modal-scrollbar-hide pointer-events-auto max-h-[90vh] overflow-auto rounded-lg shadow-2xl`}
          style={{
            opacity: isClosing ? 0 : 1,
            transform: isClosing
              ? "scale(0.95) translateY(10px)"
              : "scale(1) translateY(0)",
            transition: isClosing
              ? "transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1)"
              : "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            width: "95%",
            maxWidth: "550px",
          }}
        >
          {/* Modal header with title and close button */}
          <div className="sticky top-0 flex items-center justify-between border-b border-gray-700 border-opacity-20 bg-opacity-95 p-5 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
            <button
              onClick={handleClose}
              className="flex h-8 min-h-[32px] w-8 min-w-[32px] items-center justify-center rounded-full bg-white text-lg font-bold text-gray-800 transition-all duration-300 hover:bg-gray-100 hover:text-gray-600 hover:shadow-md"
              aria-label="Close modal"
            >
              ×
            </button>
          </div>

          {/* Modal content with proper padding and formatting */}
          <div className="p-5">
            <div className="prose prose-sm max-w-none text-gray-800">
              {content.split("\n\n").map((paragraph, idx) => (
                <React.Fragment key={idx}>
                  {paragraph.startsWith("•") ? (
                    <ul className="my-3 list-disc pl-5">
                      {paragraph.split("\n").map((item, i) => (
                        <li key={i} className="my-1">
                          {item.replace("•", "").trim()}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="my-3">{paragraph}</p>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Modal footer with close button */}
          <div className="sticky bottom-0 flex justify-end border-t border-gray-700 border-opacity-20 bg-opacity-95 p-5 backdrop-blur-sm">
            <a href="/get-in-touch">
              <button
                className="rounded bg-gradient-to-r from-sky-500 to-blue-500 px-6 py-2 text-sm font-medium text-white shadow transition-all duration-300 hover:from-sky-500 hover:to-blue-600 hover:px-7 hover:shadow-md"
                onClick={() => {}}
              >
                Get in touch
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
