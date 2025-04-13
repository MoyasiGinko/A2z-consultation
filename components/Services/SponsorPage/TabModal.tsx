"use client";
import React, { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";

interface TabModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: {
    key: string;
    title: string;
    imageSrc: string;
    imageAlt: string;
    modalContent?: {
      detailedTitle?: string;
      detailedDescription?: string;
      detailedCTA?: string;
    };
  };
}

const TabModal: React.FC<TabModalProps> = ({ isOpen, onClose, content }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            ref={modalRef}
            className="relative max-h-full w-full max-w-3xl overflow-hidden rounded-xl bg-white shadow-2xl sm:rounded-2xl"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {/* Modal Scrollable Container with hidden scrollbar */}
            <div
              className="max-h-[90vh] overflow-y-auto"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {/* Custom style to hide scrollbar */}
              <style jsx global>{`
                .modal-content::-webkit-scrollbar {
                  display: none;
                }
              `}</style>

              {/* Header Image - Responsive height */}
              <div className="relative h-48 sm:h-56 md:h-64">
                <Image
                  src={content.imageSrc}
                  alt={content.imageAlt}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute right-3 top-3 z-10 rounded-full bg-white/90 p-1.5 text-gray-800 transition-all hover:bg-white sm:right-4 sm:top-4 sm:p-2"
                  aria-label="Close modal"
                >
                  <FaTimes size={16} className="sm:hidden" />
                  <FaTimes size={20} className="hidden sm:block" />
                </button>

                {/* Header Content */}
                <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
                  <div className="mb-1 sm:mb-2">
                    <span className="inline-block rounded-full bg-blue-600 px-2 py-0.5 text-xs font-medium text-white sm:px-3 sm:py-1 sm:text-sm">
                      {content.key.split(" ")[0] === "EXPERT"
                        ? "Step 1"
                        : content.key.split(" ")[0] === "SUBMIT"
                          ? "Step 2"
                          : content.key.split(" ")[0] === "ONGOING"
                            ? "Step 3"
                            : "Step 4"}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
                    {content.title}
                  </h2>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-2 sm:p-4">
                {/* Detailed Title Section */}
                {content.modalContent?.detailedTitle && (
                  <div className="mb-1 sm:mb-2">
                    <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                      {content.modalContent.detailedTitle}
                    </h3>
                  </div>
                )}

                {/* Detailed Description Section */}
                {content.modalContent?.detailedDescription && (
                  <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none">
                    <p className="text-gray-600">
                      {content.modalContent.detailedDescription}
                    </p>
                  </div>
                )}

                {/* New CTA Section */}
                {content.modalContent?.detailedCTA && (
                  <div className="mt-4 border-gray-100">
                    <div className="mt-4 rounded-lg bg-gradient-to-br from-sky-50 to-blue-50 p-4 sm:rounded-xl sm:p-6">
                      <div className="flex items-start space-x-3 sm:space-x-4">
                        <div className="flex-1">
                          <p className="text-base font-medium text-gray-900 sm:text-lg">
                            {content.modalContent.detailedCTA}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Call to Action */}
                <div className="mt-2 flex justify-end border-t border-gray-100 pt-2">
                  <button
                    onClick={onClose}
                    className="mr-3 rounded-lg border border-gray-300 px-4 py-1.5 text-sm text-gray-600 transition-all hover:bg-gray-50 sm:mr-4 sm:px-6 sm:py-2 sm:text-base"
                  >
                    Close
                  </button>
                  <a href="/get-in-touch">
                    <button className="rounded-lg bg-gradient-to-r from-sky-500 to-sky-800 px-4 py-1.5 text-sm text-white transition-all  hover:brightness-110 sm:px-6 sm:py-2 sm:text-base">
                      Get in touch
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default TabModal;
