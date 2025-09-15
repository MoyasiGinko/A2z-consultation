import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-5 left-8 z-[9999]">
      {isVisible && (
        <div
          onClick={scrollToTop}
          aria-label="scroll to top"
          className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-gradient-to-b from-sky-500 to-sky-600 text-white shadow-lg transition-all duration-300 ease-in-out hover:translate-y-[-2px] hover:bg-opacity-90 hover:shadow-xl"
        >
          <span className="mt-[2px] h-3 w-3 rotate-45 border-l-2 border-t-2 border-white"></span>
          <span className="sr-only">scroll to top</span>
        </div>
      )}
    </div>
  );
}
