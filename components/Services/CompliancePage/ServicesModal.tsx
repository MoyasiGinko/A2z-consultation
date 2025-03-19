"use client";
import React, { useState, useRef, useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
  bgColor: string;
}

const customStyles = `
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
`;

// Improved Modal Component
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
    }, 300);
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

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen && !isClosing) return null;

  return (
    <>
      <style>{customStyles}</style>
      {/* Backdrop with smooth fade */}
      <div
        className="fixed inset-0 bg-black transition-opacity duration-300"
        style={{
          zIndex: 9999,
          opacity: isClosing ? 0 : 0.6,
        }}
        onClick={handleClose}
      />

      {/* Modal container */}
      <div
        className="fixed left-0 top-0 flex h-full w-full items-center justify-center overflow-hidden p-4 sm:p-6"
        style={{ zIndex: 10000 }}
      >
        {/* Modal content with dynamic sizing */}
        <div
          ref={modalRef}
          className={`${bgColor} scrollbar-hide max-h-[90vh] overflow-auto rounded-lg shadow-2xl`}
          style={{
            animation: isClosing
              ? "modalFadeOut 0.3s ease forwards"
              : "modalFadeIn 0.3s ease forwards",
            width: "95%",
            maxWidth: "550px",
            transform: `scale(${isClosing ? 0.95 : 1})`,
            transition: "transform 0.3s ease",
          }}
        >
          {/* Modal header with title and close button */}
          <div className="sticky top-0 flex items-center justify-between border-b border-gray-700 border-opacity-20 bg-opacity-95 p-5 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
            <button
              onClick={handleClose}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg font-bold text-gray-800 transition-all duration-300 hover:bg-gray-100 hover:text-gray-600 hover:shadow-md"
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
            <button
              onClick={handleClose}
              className={`rounded ${bgColor.replace("bg-", "bg-").replace("100", "300").replace("200", "400")} px-6 py-2 text-sm font-medium text-gray-800 shadow transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg`}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
