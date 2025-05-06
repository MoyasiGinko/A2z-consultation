import { useState, useEffect, useRef } from "react";
import {
  X,
  Info,
  Cookie,
  Shield,
  Check,
  MessageCircle,
  LineChart,
  BarChart,
  CheckSquare,
  Square,
} from "lucide-react";

const AlternativeToggle = ({
  isChecked,
  onChange,
  label,
  disabled = false,
}) => {
  return (
    <button
      onClick={disabled ? undefined : onChange}
      className={`relative inline-flex h-7 items-center rounded-md px-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 ${
        disabled
          ? "cursor-not-allowed bg-blue-500 text-white"
          : isChecked
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-600"
      }`}
      aria-checked={isChecked}
      role="switch"
      aria-label={label}
      disabled={disabled}
    >
      <span className="mr-1.5">
        {isChecked && <Check className="h-3.5 w-3.5" />}
      </span>
      <span className="text-xs font-medium">{isChecked ? "ON" : "OFF"}</span>
    </button>
  );
};

// Checkbox component to replace the toggle switches
const Checkbox = ({ isChecked, onChange, label, disabled = false }) => {
  return (
    <button
      onClick={disabled ? undefined : onChange}
      className={`flex items-center justify-center rounded-md p-1 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
        disabled
          ? "cursor-not-allowed text-blue-600"
          : "text-blue-600 hover:bg-blue-50"
      }`}
      aria-checked={isChecked}
      role="checkbox"
      aria-label={label}
      disabled={disabled}
    >
      {isChecked ? (
        <CheckSquare className="h-6 w-6" />
      ) : (
        <Square className="h-6 w-6" />
      )}
    </button>
  );
};

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [showPolicy, setShowPolicy] = useState(false);
  const [activeTab, setActiveTab] = useState("what");
  const contentRef = useRef<HTMLDivElement>(null);
  const [preferences, setPreferences] = useState({
    essential: true, // Always required
    performance: false,
    analytics: false,
    marketing: false,
  });

  // Reset scroll position when changing views
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [showCustomize, showPolicy, activeTab]);

  useEffect(() => {
    // Check if user has already made a choice
    const checkConsent = () => {
      try {
        // First try localStorage
        const consentCookie = localStorage.getItem("cookie-consent");
        if (consentCookie) {
          try {
            const savedPreferences = JSON.parse(consentCookie);
            setPreferences((prev) => ({
              ...prev,
              ...savedPreferences,
            }));
            return true;
          } catch (e) {
            console.error("Error parsing localStorage consent:", e);
          }
        }

        // If localStorage fails or is empty, try cookies as fallback
        const cookies = document.cookie.split(";");
        const cookieConsent = cookies.find((cookie) =>
          cookie.trim().startsWith("cookie-consent="),
        );

        if (cookieConsent) {
          try {
            const cookieValue = cookieConsent.split("=")[1].trim();
            const savedPreferences = JSON.parse(
              decodeURIComponent(cookieValue),
            );
            setPreferences((prev) => ({
              ...prev,
              ...savedPreferences,
            }));
            return true;
          } catch (e) {
            console.error("Error parsing cookie consent:", e);
          }
        }

        // Check if banner was temporarily dismissed
        const bannerClosed = cookies.find((cookie) =>
          cookie.trim().startsWith("cookie-banner-closed="),
        );

        if (bannerClosed) {
          return true;
        }

        return false;
      } catch (error) {
        console.error("Error checking consent:", error);
        return false;
      }
    };

    const hasConsent = checkConsent();
    if (!hasConsent) {
      // If no consent exists, show the banner with a slight delay for better UX
      setTimeout(() => setShowBanner(true), 1000);
    }

    // Handle resize to adjust max-height
    const handleResize = () => {
      if (contentRef.current) {
        const viewportHeight = window.innerHeight;
        const maxHeight = Math.max(viewportHeight * 0.7, 300); // 70% of viewport or minimum 300px
        contentRef.current.style.maxHeight = `${maxHeight}px`;
      }
    };

    // Initial size setup
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const savePreferences = (prefs) => {
    try {
      // Save preferences in cookie consent storage
      localStorage.setItem("cookie-consent", JSON.stringify(prefs));

      // Set cookies based on permissions
      if (prefs.performance) {
        localStorage.setItem("cache-control", "public, max-age=86400");
        localStorage.setItem(
          "performance-prefs",
          JSON.stringify({
            imageQuality: "medium",
            animations: true,
            prefetch: true,
          }),
        );
      } else {
        localStorage.removeItem("cache-control");
        localStorage.removeItem("performance-prefs");
      }

      if (prefs.analytics) {
        localStorage.setItem(
          "analytics-consent",
          JSON.stringify({
            allowed: true,
            anonymizeIp: true,
          }),
        );
      } else {
        localStorage.removeItem("analytics-consent");
      }

      if (prefs.marketing) {
        localStorage.setItem(
          "marketing-consent",
          JSON.stringify({
            allowed: true,
            personalization: true,
          }),
        );
      } else {
        localStorage.removeItem("marketing-consent");
      }
    } catch (error) {
      console.error("Error saving cookie preferences:", error);
      // Fallback to cookies if localStorage fails
      try {
        const expires = new Date();
        expires.setTime(expires.getTime() + 365 * 24 * 60 * 60 * 1000); // 1 year
        document.cookie = `cookie-consent=${JSON.stringify(prefs)}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
      } catch (cookieError) {
        console.error("Failed to set fallback cookie:", cookieError);
      }
    }
  };

  const acceptAll = () => {
    const allAccepted = {
      essential: true,
      performance: true,
      analytics: true,
      marketing: true,
    };

    savePreferences(allAccepted);
    setPreferences(allAccepted);
    setShowBanner(false);
  };

  const acceptEssential = () => {
    const essentialOnly = {
      essential: true,
      performance: false,
      analytics: false,
      marketing: false,
    };

    savePreferences(essentialOnly);
    setPreferences(essentialOnly);
    setShowBanner(false);
  };

  const saveCustomPreferences = () => {
    savePreferences(preferences);
    setShowBanner(false);
    setShowCustomize(false);
  };

  const cancelConsent = () => {
    try {
      // Just hide the banner without saving preferences
      setShowBanner(false);

      // Set a temporary cookie to prevent the banner from showing again immediately
      // This will expire after 24 hours
      const expires = new Date();
      expires.setTime(expires.getTime() + 24 * 60 * 60 * 1000);
      document.cookie = `cookie-banner-closed=true; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
    } catch (error) {
      console.error("Error setting temporary cookie:", error);
      // Still hide the banner even if cookie setting fails
      setShowBanner(false);
    }
  };

  const handleToggleChange = (key) => {
    if (key === "essential") return; // Can't toggle essential cookies

    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const toggleCustomize = () => {
    setShowCustomize(!showCustomize);
    setShowPolicy(false);
  };

  const togglePolicy = () => {
    setShowPolicy(!showPolicy);
    setShowCustomize(false);
  };

  if (!showBanner) return null;

  // Cookie Policy Content
  const policyContent = {
    what: (
      <div className="prose prose-sm max-w-none">
        <h4 className="text-lg font-medium text-gray-900">What are cookies?</h4>
        <p className="text-gray-600">
          Cookies are small text files stored on your device when you visit
          websites. They serve various purposes, from ensuring basic
          functionality to enhancing your browsing experience.
        </p>
        <p className="text-gray-600">
          We use cookies for essential website functions, improving site
          performance, analyzing how our site is used, and customizing content
          when appropriate. These cookies may be set by us (first-party cookies)
          or by our partners (third-party cookies).
        </p>
      </div>
    ),
    types: (
      <div className="prose prose-sm max-w-none">
        <h4 className="text-lg font-medium text-gray-900">
          Types of cookies we use
        </h4>
        <div className="space-y-4">
          <div>
            <h5 className="font-medium text-gray-800">Essential Cookies</h5>
            <p className="text-gray-600">
              These cookies are necessary for the website to function properly.
              They enable core functionality such as security, network
              management, and account access. You cannot opt out of these
              cookies.
            </p>
            <p className="text-xs text-gray-500">
              Examples: session cookies, authentication cookies
            </p>
          </div>

          <div>
            <h5 className="font-medium text-gray-800">Performance Cookies</h5>
            <p className="text-gray-600">
              These cookies help us improve the performance and functionality of
              our website by collecting information about how you interact with
              our site.
            </p>
            <p className="text-xs text-gray-500">
              Examples: load balancing cookies, site speed optimizations
            </p>
          </div>

          <div>
            <h5 className="font-medium text-gray-800">Analytics Cookies</h5>
            <p className="text-gray-600">
              These cookies collect information about how visitors use our
              website, which pages they visit, and if they experience any
              errors. This data helps us improve our website and your
              experience.
            </p>
            <p className="text-xs text-gray-500">
              Examples: Google Analytics, Hotjar
            </p>
          </div>

          <div>
            <h5 className="font-medium text-gray-800">Marketing Cookies</h5>
            <p className="text-gray-600">
              These cookies are used to track visitors across websites. They are
              set to display targeted advertisements based on your interests and
              online behavior.
            </p>
            <p className="text-xs text-gray-500">
              Examples: Facebook Pixel, Google Ads
            </p>
          </div>
        </div>
      </div>
    ),
    control: (
      <div className="prose prose-sm max-w-none">
        <h4 className="text-lg font-medium text-gray-900">
          How to control cookies
        </h4>
        <p className="text-gray-600">
          You can control cookies in several ways:
        </p>
        <ul className="list-disc pl-5 text-gray-600">
          <li>Use our consent banner to select your cookie preferences</li>
          <li>Adjust your browser settings to block or delete cookies</li>
          <li>Use privacy-focused browser extensions</li>
        </ul>
        <p className="mt-3 text-gray-600">
          Most web browsers allow some control of cookies through browser
          settings:
        </p>
        <ul className="list-disc pl-5 text-gray-600">
          <li>
            <span className="font-medium">Chrome</span> - Settings {">"} Privacy
            and security {">"} Cookies and other site data
          </li>
          <li>
            <span className="font-medium">Firefox</span> - Options {">"} Privacy
            & Security {">"} Cookies and Site Data
          </li>
          <li>
            <span className="font-medium">Safari</span> - Preferences {">"}{" "}
            Privacy {">"} Cookies and website data
          </li>
          <li>
            <span className="font-medium">Edge</span> - Settings {">"} Cookies
            and site permissions
          </li>
        </ul>
        <p className="mt-3 text-gray-600">
          Please note that restricting cookies may impact the functionality of
          our website.
        </p>
      </div>
    ),
    policy: (
      <div className="prose prose-sm max-w-none">
        <h4 className="text-lg font-medium text-gray-900">Our Cookie Policy</h4>
        <p className="text-gray-600">
          This Cookie Policy explains how our website uses cookies and similar
          technologies to recognise you when you visit our website. It explains
          what these technologies are and why we use them, as well as your
          rights to control our use of them.
        </p>
        <p className="mt-2 text-gray-600">
          This policy was last updated on April 24, 2025.
        </p>
        <h5 className="mt-4 font-medium text-gray-800">
          Changes to this Cookie Policy
        </h5>
        <p className="text-gray-600">
          We may update this Cookie Policy from time to time in order to reflect
          changes to the cookies we use or for other operational, legal or
          regulatory reasons. Please revisit this Cookie Policy regularly to
          stay informed about our use of cookies and related technologies.
        </p>
        <h5 className="mt-4 font-medium text-gray-800">Contact Us</h5>
        <p className="text-gray-600">
          If you have any questions about our use of cookies or other
          technologies, please email us at privacy@example.com.
        </p>
      </div>
    ),
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-transparent bg-opacity-5 p-2 sm:p-4">
      <div className="container mx-auto max-w-5xl">
        <div className="flex max-h-[90vh] flex-col overflow-hidden rounded-xl border border-blue-100 bg-white shadow-2xl">
          {/* Header - Always visible */}
          <div className="relative flex-shrink-0 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-3 sm:px-6 sm:py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-3">
                <Cookie className="h-5 w-5 text-blue-600 sm:h-6 sm:w-6" />
                <h3 className="truncate text-base font-semibold text-gray-800 sm:text-lg">
                  {showPolicy
                    ? "Cookie Policy"
                    : showCustomize
                      ? "Customise Cookies"
                      : "Cookie Settings"}
                </h3>
              </div>
              <button
                onClick={cancelConsent}
                className="rounded-full p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600 sm:p-1.5"
                aria-label="Close cookie consent banner"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Main content - Scrollable */}
          <div
            ref={contentRef}
            className="scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent overflow-y-auto p-4 sm:p-6"
          >
            {!showCustomize && !showPolicy ? (
              <div className="flex flex-col items-start justify-between gap-4 sm:gap-6 md:flex-row md:items-center">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="mt-1 flex-shrink-0 text-blue-500">
                    <Info className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="mt-0 max-w-2xl text-sm text-gray-600 sm:mt-1 sm:text-base">
                      We use cookies to improve your browsing experience,
                      analyze site traffic, and enhance site performance. You
                      can choose which cookies you're okay with by clicking on
                      the options below.
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex w-full flex-col gap-2 sm:gap-3 md:mt-0 md:w-auto">
                  <button
                    onClick={toggleCustomize}
                    className="flex-grow rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 sm:px-5 sm:py-2.5 md:flex-grow-0 md:text-base"
                  >
                    Customise
                  </button>
                  <button
                    onClick={acceptEssential}
                    className="flex-grow rounded-md border border-blue-500 bg-white px-4 py-2 text-sm font-medium text-blue-600 transition-colors hover:bg-blue-50 sm:px-5 sm:py-2.5 md:flex-grow-0 md:text-base"
                  >
                    Essential Only
                  </button>
                  <button
                    onClick={acceptAll}
                    className="flex-grow rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 sm:px-5 sm:py-2.5 md:flex-grow-0 md:text-base"
                  >
                    Accept All
                  </button>
                </div>
              </div>
            ) : showPolicy ? (
              <div className="space-y-4 sm:space-y-6">
                {/* Cookie Policy Tabs - Horizontally scrollable */}
                <div className="-mx-4 border-b border-gray-200 px-4 sm:-mx-0 sm:px-0">
                  <nav className="-mb-px flex space-x-4 overflow-x-auto whitespace-nowrap pb-1 sm:space-x-6">
                    {[
                      {
                        id: "what",
                        label: "What are cookies?",
                        icon: <MessageCircle className="h-4 w-4" />,
                      },
                      {
                        id: "types",
                        label: "Types of cookies",
                        icon: <BarChart className="h-4 w-4" />,
                      },
                      {
                        id: "control",
                        label: "How to control",
                        icon: <Shield className="h-4 w-4" />,
                      },
                      {
                        id: "policy",
                        label: "Full policy",
                        icon: <LineChart className="h-4 w-4" />,
                      },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center pb-2 pt-1 text-sm font-medium transition-colors ${
                          activeTab === tab.id
                            ? "border-b-2 border-blue-600 text-blue-600"
                            : "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                        }`}
                      >
                        <span className="mr-1.5 sm:mr-2">{tab.icon}</span>
                        {tab.label}
                      </button>
                    ))}
                  </nav>
                </div>

                {/* Active Tab Content */}
                <div className="min-h-[150px] pt-2">
                  {policyContent[activeTab]}
                </div>
              </div>
            ) : (
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <p className="text-sm text-gray-600 sm:text-base">
                    Customise your cookie preferences. Essential cookies are
                    always enabled as they are necessary for the website to
                    function properly.
                  </p>
                </div>

                {/* Cookie options */}
                <div className="space-y-3 sm:space-y-5">
                  {/* Essential cookies */}
                  <div className="rounded-lg border border-blue-100 bg-blue-50 p-3 transition-all sm:p-4">
                    <div className="flex items-center justify-between">
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <Shield className="h-4 w-4 flex-shrink-0 text-blue-600 sm:h-5 sm:w-5" />
                          <h4 className="truncate font-medium text-gray-900">
                            Essential cookies
                          </h4>
                        </div>
                        <p className="mt-0.5 line-clamp-2 text-xs text-gray-600 sm:mt-1 sm:text-sm">
                          Required for the website to function properly
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-blue-800">
                          Always on
                        </span>
                        <Checkbox
                          isChecked={true}
                          disabled={true}
                          label="Essential cookies"
                          onChange={() => {}}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Performance cookies */}
                  <div
                    className={`rounded-lg border p-3 transition-all sm:p-4 ${preferences.performance ? "border-blue-200 bg-blue-50" : "border-gray-200"}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <LineChart className="h-4 w-4 flex-shrink-0 text-blue-600 sm:h-5 sm:w-5" />
                          <h4 className="truncate font-medium text-gray-900">
                            Performance cookies
                          </h4>
                        </div>
                        <p className="mt-0.5 line-clamp-2 text-xs text-gray-600 sm:mt-1 sm:text-sm">
                          Help us improve site speed and user experience
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-gray-600">
                          {preferences.performance ? "Enabled" : "Disabled"}
                        </span>
                        <Checkbox
                          isChecked={preferences.performance}
                          label="Performance cookies"
                          onChange={() => handleToggleChange("performance")}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Analytics cookies */}
                  <div
                    className={`rounded-lg border p-3 transition-all sm:p-4 ${preferences.analytics ? "border-blue-200 bg-blue-50" : "border-gray-200"}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <BarChart className="h-4 w-4 flex-shrink-0 text-blue-600 sm:h-5 sm:w-5" />
                          <h4 className="truncate font-medium text-gray-900">
                            Analytics cookies
                          </h4>
                        </div>
                        <p className="mt-0.5 line-clamp-2 text-xs text-gray-600 sm:mt-1 sm:text-sm">
                          Help us understand how visitors interact with our site
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-gray-600">
                          {preferences.analytics ? "Enabled" : "Disabled"}
                        </span>
                        <Checkbox
                          isChecked={preferences.analytics}
                          label="Analytics cookies"
                          onChange={() => handleToggleChange("analytics")}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Marketing cookies */}
                  <div
                    className={`rounded-lg border p-3 transition-all sm:p-4 ${preferences.marketing ? "border-blue-200 bg-blue-50" : "border-gray-200"}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <MessageCircle className="h-4 w-4 flex-shrink-0 text-blue-600 sm:h-5 sm:w-5" />
                          <h4 className="truncate font-medium text-gray-900">
                            Marketing cookies
                          </h4>
                        </div>
                        <p className="mt-0.5 line-clamp-2 text-xs text-gray-600 sm:mt-1 sm:text-sm">
                          Used to display personalised ads and content
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-gray-600">
                          {preferences.marketing ? "Enabled" : "Disabled"}
                        </span>
                        <Checkbox
                          isChecked={preferences.marketing}
                          label="Marketing cookies"
                          onChange={() => handleToggleChange("marketing")}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer - Always visible with action buttons */}
          <div className="flex-shrink-0 border-t border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-3 sm:px-6 sm:py-4">
            {showPolicy ? (
              <div className="flex justify-end">
                <button
                  onClick={() => {
                    setShowPolicy(false);
                    setShowCustomize(false);
                  }}
                  className="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700 sm:px-4 sm:py-2"
                >
                  Back to Settings
                </button>
              </div>
            ) : showCustomize ? (
              <div className="flex flex-col space-y-2 sm:flex-row sm:justify-end sm:space-x-3 sm:space-y-0">
                <button
                  onClick={toggleCustomize}
                  className="flex-shrink-0 rounded-md border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 sm:px-5 sm:py-2"
                >
                  Back
                </button>
                <button
                  onClick={saveCustomPreferences}
                  className="flex-shrink-0 rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700 sm:px-5 sm:py-2"
                >
                  Save Preferences
                </button>
              </div>
            ) : (
              <p className="text-xs text-sky-900">
                By continuing to browse this site, you agree to our use of
                cookies as described in our{" "}
                <button
                  onClick={togglePolicy}
                  className="cursor-pointer font-medium text-sky-600 underline transition-colors hover:text-sky-500"
                >
                  Cookie Policy
                </button>
                .
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
