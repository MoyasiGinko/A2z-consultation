import { useState, useEffect } from "react";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consentCookie = localStorage.getItem("cookie-consent");
    if (!consentCookie) {
      // If no consent cookie exists, show the banner with a slight delay for better UX
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const acceptAll = () => {
    // Set consent cookie
    localStorage.setItem("cookie-consent", "accepted");

    // Set performance cookies you need
    localStorage.setItem("cache-control", "public, max-age=86400");
    localStorage.setItem(
      "performance-prefs",
      JSON.stringify({
        imageQuality: "medium",
        animations: true,
        prefetch: true,
      }),
    );

    setShowBanner(false);
  };

  const acceptEssential = () => {
    // Set consent cookie for essential only
    localStorage.setItem("cookie-consent", "essential-only");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="animate-fade-in fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="container mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-lg border border-blue-100 bg-white shadow-xl">
          <div className="flex flex-col items-start justify-between gap-6 p-6 md:flex-row md:items-center">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex-shrink-0 text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"></path>
                  <path d="M12 16v-4"></path>
                  <path d="M12 8h.01"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  This website uses cookies
                </h3>
                <p className="mt-1 max-w-2xl text-gray-600">
                  We use cookies to improve your browsing experience, analyze
                  site traffic, and enhance site performance. You can choose
                  which cookies you're okay with by clicking on the options
                  below.
                </p>
              </div>
            </div>
            <div className="flex w-full flex-col gap-3  md:w-auto">
              <button
                onClick={acceptEssential}
                className="flex-grow rounded-md border border-blue-500 bg-white px-5 py-2 text-sm font-medium text-blue-600 transition-colors hover:bg-blue-50 md:flex-grow-0 md:text-base"
              >
                Essential Only
              </button>
              <button
                onClick={acceptAll}
                className="flex-grow rounded-md bg-blue-600 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 md:flex-grow-0 md:text-base"
              >
                Accept All
              </button>
            </div>
          </div>
          <div className="bg-blue-50 px-6 py-3 text-xs text-blue-800">
            By continuing to browse this site, you agree to our use of cookies
            as described in our{" "}
            <span className="cursor-pointer underline">Cookie Policy</span>.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
