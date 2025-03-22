"use client";
import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  service?: {
    title: string;
    whyItMatters: string;
    howWeHelp: {
      intro: string;
      points: string[];
    };
    conclusion: string;
    bgColor: string;
  };
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, service }) => {
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

  if ((!isOpen && !isClosing) || !service) return null;

  return (
    <AnimatePresence>
      {(isOpen || isClosing) && (
        <>
          {/* Backdrop */}
          <div
            className="pointer-events-auto fixed inset-0 bg-black/60 backdrop-blur-sm"
            style={{
              zIndex: 9999,
              opacity: isClosing ? 0 : 1,
              transition: isClosing
                ? "opacity 0.2s ease-out"
                : "opacity 0.3s ease-in",
            }}
            onClick={handleClose}
          />

          {/* Modal container */}
          <div
            className="pointer-events-none fixed left-0 top-0 flex h-full w-full items-center justify-center p-4 sm:p-6"
            style={{ zIndex: 10000 }}
          >
            {/* Modal content */}
            <div
              ref={modalRef}
              className={`${service.bgColor} modal-scrollbar-hide pointer-events-auto max-h-[90vh] w-full max-w-3xl overflow-auto rounded-xl shadow-2xl`}
              style={{
                opacity: isClosing ? 0 : 1,
                transform: isClosing
                  ? "scale(0.95) translateY(10px)"
                  : "scale(1) translateY(0)",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {/* Header */}
              <div className="sticky top-0 border-b border-gray-200 bg-white/95 p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                  <button
                    onClick={handleClose}
                    className="rounded-full bg-gray-100 p-2 text-gray-600 transition-all hover:bg-gray-200"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Why It Matters Section */}
                <div className="mb-8">
                  <h4 className="mb-3 text-lg font-semibold text-gray-900">
                    Why It Matters
                  </h4>
                  <div className="rounded-lg bg-blue-50 p-4 text-blue-800">
                    {service.whyItMatters}
                  </div>
                </div>

                {/* How We Help Section */}
                <div className="mb-8">
                  <h4 className="mb-3 text-lg font-semibold text-gray-900">
                    How We Help
                  </h4>
                  <p className="mb-4 text-gray-700">
                    {service.howWeHelp.intro}
                  </p>
                  <div className="space-y-3">
                    {service.howWeHelp.points.map((point, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 rounded-lg bg-white p-3 shadow-sm"
                      >
                        <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p className="text-sm text-gray-700">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Conclusion Section */}
                <div className="rounded-lg bg-gray-50 p-4">
                  <p className="text-gray-700">{service.conclusion}</p>
                </div>
              </div>

              {/* Footer */}
              <div className="sticky bottom-0 border-t border-gray-200 bg-white/95 p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <button
                    onClick={handleClose}
                    className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:bg-gray-50"
                  >
                    Close
                  </button>
                  <a
                    href="/get-in-touch"
                    className="rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-2 text-sm font-medium text-white shadow-sm transition-all hover:shadow-md hover:brightness-110"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
