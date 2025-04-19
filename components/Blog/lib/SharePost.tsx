"use client";
import React, { useState, useEffect } from "react";

const SharePost = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentPlatform, setCurrentPlatform] = useState("");
  const [copied, setCopied] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");
  const [postTitle, setPostTitle] = useState("Check out this amazing post!"); // Default title for sharing
  const [pageDescription, setPageDescription] = useState(
    "I found this great article that you might enjoy.",
  ); // Default description

  // Get the current URL and page information when component mounts
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
      // Get the page title for a better sharing experience
      if (document.title) {
        setPostTitle(document.title);
      }

      // Try to get meta description for platforms that support it
      const metaDescription = document.querySelector(
        'meta[name="description"]',
      ) as HTMLMetaElement;
      if (metaDescription && metaDescription.content) {
        setPageDescription(metaDescription.content);
      }
    }
  }, []);

  // Function to handle social share clicks
  const handleShareClick = (platform) => {
    setCurrentPlatform(platform);
    setShowModal(true);
    setCopied(false);
  };

  // Function to copy link to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // Function to share directly to platform
  const shareToSocial = () => {
    let shareUrl = "";

    switch (currentPlatform) {
      case "facebook":
        // Facebook has limited direct control - using the Feed Dialog which requires app_id
        // but FB's reliable sharing method (which will show the URL as a preview card)
        shareUrl = `https://www.facebook.com/dialog/feed?app_id=966242223397117&link=${encodeURIComponent(currentUrl)}&quote=${encodeURIComponent(postTitle)}&hashtag=${encodeURIComponent(currentUrl)}`;
        // Fallback to basic sharing if concerned about app_id
        // shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
        break;
      case "twitter":
        // Twitter provides the best direct control over content - text appears in the post body
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(postTitle)}&url=${encodeURIComponent(currentUrl)}`;
        break;
      case "linkedin":
        // Use LinkedIn's shareArticle endpoint instead of share-offsite for better content control
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(postTitle)}&summary=${encodeURIComponent(pageDescription)}`;
        break;
      case "behance":
        // Since Behance doesn't have a direct sharing API with parameters, we'll just open their site
        // For Behance, users typically need to upload/share work through their dashboard
        shareUrl = "https://www.behance.net/";
        break;
      default:
        break;
    }

    if (shareUrl) {
      // Open in a new tab instead of a new window by removing the window dimensions
      window.open(shareUrl, "_blank");
      setShowModal(false);
    }
  };

  // Modal component
  const ShareModal = () => {
    if (!showModal) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 backdrop-blur-sm">
        <div className="relative w-full max-w-md transform overflow-hidden rounded-3xl bg-white p-8 shadow-2xl transition-all duration-300 ease-in-out">
          {/* Close button with hover animation */}
          <button
            onClick={() => setShowModal(false)}
            className="absolute right-4 top-4 rounded-full p-2 text-gray-400 transition-all duration-200 hover:rotate-90 hover:bg-gray-100 hover:text-gray-700"
            aria-label="Close modal"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Social platform icon display */}
          <div className="mb-8 text-center">
            <div className="mb-4 flex justify-center">
              <div className="rounded-full bg-gray-50 p-3">
                {currentPlatform === "facebook" && (
                  <svg
                    className="h-8 w-8 fill-blue-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z" />
                  </svg>
                )}
                {currentPlatform === "twitter" && (
                  <svg
                    className="h-8 w-8 fill-gray-900"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                )}
                {currentPlatform === "linkedin" && (
                  <svg
                    className="h-8 w-8 fill-blue-700"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6.94 5.00002C6.93974 5.53046 6.72877 6.03906 6.35351 6.41394C5.97825 6.78883 5.46944 6.99929 4.939 6.99902C4.40857 6.99876 3.89997 6.78779 3.52508 6.41253C3.1502 6.03727 2.93974 5.52846 2.94 4.99802C2.94027 4.46759 3.15124 3.95899 3.5265 3.5841C3.90176 3.20922 4.41057 2.99876 4.941 2.99902C5.47144 2.99929 5.98004 3.21026 6.35492 3.58552C6.72981 3.96078 6.94027 4.46959 6.94 5.00002ZM7 8.48002H3V21H7V8.48002ZM13.32 8.48002H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.90002 14.94 7.13002 13.28 10.16L13.32 8.48002Z" />
                  </svg>
                )}
                {currentPlatform === "behance" && (
                  <svg
                    className="h-8 w-8 fill-blue-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7.443 5.3501C8.082 5.3501 8.673 5.4001 9.213 5.5481C9.70301 5.63814 10.1708 5.82293 10.59 6.0921C10.984 6.3391 11.279 6.6861 11.475 7.1311C11.672 7.5761 11.77 8.1211 11.77 8.7141C11.77 9.4071 11.623 10.0001 11.279 10.4451C10.984 10.8911 10.492 11.2861 9.902 11.5831C10.738 11.8311 11.377 12.2761 11.77 12.8691C12.164 13.4631 12.41 14.2051 12.41 15.0461C12.41 15.7391 12.262 16.3321 12.016 16.8271C11.77 17.3221 11.377 17.7671 10.934 18.0641C10.4528 18.3825 9.92084 18.6165 9.361 18.7561C8.771 18.9051 8.181 19.0041 7.591 19.0041H1V5.3501H7.443ZM7.049 10.8901C7.59 10.8901 8.033 10.7421 8.377 10.4951C8.721 10.2481 8.869 9.8021 8.869 9.2581C8.869 8.9611 8.819 8.6641 8.721 8.4671C8.623 8.2691 8.475 8.1201 8.279 7.9721C8.082 7.8731 7.885 7.7741 7.639 7.7251C7.393 7.6751 7.148 7.6751 6.852 7.6751H4V10.8911H7.05L7.049 10.8901ZM7.197 16.7281C7.492 16.7281 7.787 16.6781 8.033 16.6291C8.28138 16.5819 8.51628 16.4805 8.721 16.3321C8.92139 16.1873 9.08903 16.002 9.213 15.7881C9.311 15.5411 9.41 15.2441 9.41 14.8981C9.41 14.2051 9.213 13.7101 8.82 13.3641C8.426 13.0671 7.885 12.9191 7.246 12.9191H4V16.7291H7.197V16.7281ZM16.689 16.6781C17.082 17.0741 17.672 17.2721 18.459 17.2721C19 17.2721 19.492 17.1241 19.885 16.8771C20.279 16.5801 20.525 16.2831 20.623 15.9861H23.033C22.639 17.1731 22.049 18.0141 21.263 18.5581C20.475 19.0531 19.541 19.3501 18.41 19.3501C17.6864 19.3523 16.9688 19.2179 16.295 18.9541C15.6887 18.7266 15.148 18.3529 14.721 17.8661C14.2643 17.4107 13.9267 16.8498 13.738 16.2331C13.492 15.5901 13.393 14.8981 13.393 14.1061C13.393 13.3641 13.492 12.6721 13.738 12.0281C13.9745 11.4082 14.3245 10.8378 14.77 10.3461C15.213 9.9011 15.754 9.5061 16.344 9.2581C17.0007 8.99416 17.7022 8.85969 18.41 8.8621C19.246 8.8621 19.984 9.0111 20.623 9.3571C21.263 9.7031 21.754 10.0991 22.148 10.6931C22.5499 11.2636 22.8494 11.8998 23.033 12.5731C23.131 13.2651 23.18 13.9581 23.131 14.7491H16C16 15.5411 16.295 16.2831 16.689 16.6791V16.6781ZM19.787 11.4841C19.443 11.1381 18.902 10.9401 18.262 10.9401C17.82 10.9401 17.475 11.0391 17.18 11.1871C16.885 11.3361 16.689 11.5341 16.492 11.7321C16.311 11.9234 16.1912 12.1643 16.148 12.4241C16.098 12.6721 16.049 12.8691 16.049 13.0671H20.475C20.377 12.3251 20.131 11.8311 19.787 11.4841V11.4841ZM15.459 6.2901H20.967V7.6261H15.46V6.2901H15.459Z" />
                  </svg>
                )}
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              Share to{" "}
              {currentPlatform === "twitter"
                ? "X"
                : currentPlatform.charAt(0).toUpperCase() +
                  currentPlatform.slice(1)}
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Share this amazing content with your network
            </p>
          </div>

          {/* URL input with gradient border */}
          <div className="mb-8">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Link to share
            </label>
            <div className="group relative flex items-center overflow-hidden rounded-xl border border-gray-200 bg-gray-50 p-3 transition-all duration-300 focus-within:border-transparent">
              <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 transition-opacity duration-300 group-focus-within:opacity-100"></div>
              <div className="absolute inset-[1px] z-0 rounded-[11px] bg-gray-50"></div>
              <input
                type="text"
                readOnly
                value={currentUrl}
                className="relative z-10 flex-grow border-none bg-transparent px-2 py-1 text-sm outline-none"
              />
              <button
                onClick={copyToClipboard}
                className={`relative z-10 ml-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  copied
                    ? "bg-green-500 text-white hover:bg-green-600"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {copied ? (
                  <span className="flex items-center">
                    <svg
                      className="mr-1.5 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Copied!
                  </span>
                ) : (
                  <span className="flex items-center">
                    <svg
                      className="mr-1.5 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                      />
                    </svg>
                    Copy
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Action buttons with gradients */}
          <div className="flex justify-end space-x-3">
            <button
              onClick={() => setShowModal(false)}
              className="rounded-xl border border-gray-300 bg-white px-6 py-2.5 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              Cancel
            </button>
            <button
              onClick={shareToSocial}
              className="relative overflow-hidden rounded-xl px-6 py-2.5 text-sm font-medium text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
              <span className="relative">Share Now</span>
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="mt-11 flex flex-wrap gap-4 md:items-center md:justify-between md:gap-0">
        <ul className="flex items-center gap-6">
          <li>
            <p className="font-medium text-gray-700">Share On:</p>
          </li>
          {/* Consistent social icons with uniform size and hover effects */}
          <li>
            <a
              href="#"
              aria-label="Share on Facebook"
              onClick={(e) => {
                e.preventDefault();
                handleShareClick("facebook");
              }}
              className="group"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600">
                <svg
                  className="h-5 w-5 fill-gray-600 transition-colors duration-300 group-hover:fill-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z" />
                </svg>
              </div>
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-label="Share on X"
              onClick={(e) => {
                e.preventDefault();
                handleShareClick("twitter");
              }}
              className="group"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-gray-900">
                <svg
                  className="h-5 w-5 fill-gray-600 transition-colors duration-300 group-hover:fill-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-label="Share on LinkedIn"
              onClick={(e) => {
                e.preventDefault();
                handleShareClick("linkedin");
              }}
              className="group"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-700">
                <svg
                  className="h-5 w-5 fill-gray-600 transition-colors duration-300 group-hover:fill-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6.94 5.00002C6.93974 5.53046 6.72877 6.03906 6.35351 6.41394C5.97825 6.78883 5.46944 6.99929 4.939 6.99902C4.40857 6.99876 3.89997 6.78779 3.52508 6.41253C3.1502 6.03727 2.93974 5.52846 2.94 4.99802C2.94027 4.46759 3.15124 3.95899 3.5265 3.5841C3.90176 3.20922 4.41057 2.99876 4.941 2.99902C5.47144 2.99929 5.98004 3.21026 6.35492 3.58552C6.72981 3.96078 6.94027 4.46959 6.94 5.00002ZM7 8.48002H3V21H7V8.48002ZM13.32 8.48002H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.90002 14.94 7.13002 13.28 10.16L13.32 8.48002Z" />
                </svg>
              </div>
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-label="Share on Behance"
              onClick={(e) => {
                e.preventDefault();
                handleShareClick("behance");
              }}
              className="group"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-500">
                <svg
                  className="h-5 w-5 fill-gray-600 transition-colors duration-300 group-hover:fill-white"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.443 5.3501C8.082 5.3501 8.673 5.4001 9.213 5.5481C9.70301 5.63814 10.1708 5.82293 10.59 6.0921C10.984 6.3391 11.279 6.6861 11.475 7.1311C11.672 7.5761 11.77 8.1211 11.77 8.7141C11.77 9.4071 11.623 10.0001 11.279 10.4451C10.984 10.8911 10.492 11.2861 9.902 11.5831C10.738 11.8311 11.377 12.2761 11.77 12.8691C12.164 13.4631 12.41 14.2051 12.41 15.0461C12.41 15.7391 12.262 16.3321 12.016 16.8271C11.77 17.3221 11.377 17.7671 10.934 18.0641C10.4528 18.3825 9.92084 18.6165 9.361 18.7561C8.771 18.9051 8.181 19.0041 7.591 19.0041H1V5.3501H7.443ZM7.049 10.8901C7.59 10.8901 8.033 10.7421 8.377 10.4951C8.721 10.2481 8.869 9.8021 8.869 9.2581C8.869 8.9611 8.819 8.6641 8.721 8.4671C8.623 8.2691 8.475 8.1201 8.279 7.9721C8.082 7.8731 7.885 7.7741 7.639 7.7251C7.393 7.6751 7.148 7.6751 6.852 7.6751H4V10.8911H7.05L7.049 10.8901ZM7.197 16.7281C7.492 16.7281 7.787 16.6781 8.033 16.6291C8.28138 16.5819 8.51628 16.4805 8.721 16.3321C8.92139 16.1873 9.08903 16.002 9.213 15.7881C9.311 15.5411 9.41 15.2441 9.41 14.8981C9.41 14.2051 9.213 13.7101 8.82 13.3641C8.426 13.0671 7.885 12.9191 7.246 12.9191H4V16.7291H7.197V16.7281ZM16.689 16.6781C17.082 17.0741 17.672 17.2721 18.459 17.2721C19 17.2721 19.492 17.1241 19.885 16.8771C20.279 16.5801 20.525 16.2831 20.623 15.9861H23.033C22.639 17.1731 22.049 18.0141 21.263 18.5581C20.475 19.0531 19.541 19.3501 18.41 19.3501C17.6864 19.3523 16.9688 19.2179 16.295 18.9541C15.6887 18.7266 15.148 18.3529 14.721 17.8661C14.2643 17.4107 13.9267 16.8498 13.738 16.2331C13.492 15.5901 13.393 14.8981 13.393 14.1061C13.393 13.3641 13.492 12.6721 13.738 12.0281C13.9745 11.4082 14.3245 10.8378 14.77 10.3461C15.213 9.9011 15.754 9.5061 16.344 9.2581C17.0007 8.99416 17.7022 8.85969 18.41 8.8621C19.246 8.8621 19.984 9.0111 20.623 9.3571C21.263 9.7031 21.754 10.0991 22.148 10.6931C22.5499 11.2636 22.8494 11.8998 23.033 12.5731C23.131 13.2651 23.18 13.9581 23.131 14.7491H16C16 15.5411 16.295 16.2831 16.689 16.6791V16.6781ZM19.787 11.4841C19.443 11.1381 18.902 10.9401 18.262 10.9401C17.82 10.9401 17.475 11.0391 17.18 11.1871C16.885 11.3361 16.689 11.5341 16.492 11.7321C16.311 11.9234 16.1912 12.1643 16.148 12.4241C16.098 12.6721 16.049 12.8691 16.049 13.0671H20.475C20.377 12.3251 20.131 11.8311 19.787 11.4841V11.4841ZM15.459 6.2901H20.967V7.6261H15.46V6.2901H15.459Z" />
                </svg>
              </div>
            </a>
          </li>
        </ul>
      </div>

      {/* Share Modal */}
      <ShareModal />
    </>
  );
};

export default SharePost;
