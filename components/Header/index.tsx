"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import menuData from "./menuData";

interface MenuItem {
  id: number;
  title: string;
  path?: string;
  submenu?: MenuItem[];
}

const Header = () => {
  // Refs
  const headerRef = useRef<HTMLDivElement>(null);
  const dropdownRefs = useRef<{ [key: number]: HTMLElement | null }>({});

  // State
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [stickyMenu, setStickyMenu] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hoverDropdown, setHoverDropdown] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  const pathUrl = usePathname();

  const isOffersMenu = (title: string) =>
    title.trim().toLowerCase() === "offers";

  // Click/hover handlers
  const handleDropdownToggle = (menuId: number) =>
    setActiveDropdown(activeDropdown === menuId ? null : menuId);
  const handleMouseEnter = (menuId: number) => setHoverDropdown(menuId);
  const handleMouseLeave = () => setHoverDropdown(null);

  // Mount
  useEffect(() => {
    const initialScrollY = window.scrollY;
    setStickyMenu(initialScrollY >= 80);
    setLastScrollY(initialScrollY);
    setIsMounted(true);
  }, []);

  // Click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node) &&
        navigationOpen
      ) {
        setNavigationOpen(false);
      }
      if (activeDropdown !== null) {
        const clickedDropdown = Object.entries(dropdownRefs.current).find(
          ([id, ref]) =>
            ref &&
            ref.contains(event.target as Node) &&
            Number(id) === activeDropdown,
        );
        if (!clickedDropdown) setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [navigationOpen, activeDropdown]);

  // Close on route change
  useEffect(() => {
    setNavigationOpen(false);
    setActiveDropdown(null);
    setHoverDropdown(null);
  }, [pathUrl]);

  // Sticky on scroll (no pop/hide)
  useEffect(() => {
    let ticking = false;
    let lastKnownScrollY = window.scrollY;
    const handleScroll = () => {
      lastKnownScrollY = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setStickyMenu(lastKnownScrollY >= 80);
          setLastScrollY(lastKnownScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Animation variants
  const navVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };
  const dropdownVariants = {
    hidden: { opacity: 0, height: 0, overflow: "hidden" as const },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.2 } },
  };

  const isDropdownVisible = (menuId: number) =>
    hoverDropdown === menuId || activeDropdown === menuId;

  return (
    <motion.header
      ref={headerRef}
      className={`fixed left-0 top-0 z-50 w-full py-4 ${!isMounted ? "invisible" : "visible"}`}
      initial={{
        backgroundColor: stickyMenu ? "rgba(255,255,255,0.98)" : "transparent",
        boxShadow: stickyMenu ? "0 4px 12px rgba(0,0,0,0.05)" : "none",
      }}
      animate={{
        backgroundColor: stickyMenu ? "rgba(255,255,255,0.98)" : "transparent",
        boxShadow: stickyMenu ? "0 4px 12px rgba(0,0,0,0.05)" : "none",
      }}
    >
      {/* Container: original 1280px */}
      <div className="relative mx-auto max-w-[1280px] items-center justify-between px-4 md:px-8 xl:flex min-[1380px]:px-0 2xl:px-0">
        {/* Left: logo — make narrower to pull nav left */}
        <div className="flex w-full items-center justify-between xl:w-[240px]">
          <Link href="/" className="block">
            <Image
              src="/images/logo/logo-dark.svg"
              alt="logo"
              width={200}
              height={50}
              className="block h-full max-h-9 w-full max-w-56 transition-opacity duration-300 hover:opacity-90"
              priority
            />
          </Link>

          {/* Hamburger */}
          <button
            aria-label="Menu Toggle"
            className="flex h-10 w-10 items-center justify-center rounded-md focus:outline-none xl:hidden"
            onClick={() => setNavigationOpen(!navigationOpen)}
          >
            <div className="relative h-5 w-6">
              <motion.span
                className="absolute h-0.5 w-6 rounded-full bg-black"
                animate={{
                  top: navigationOpen ? "50%" : "0%",
                  transform: navigationOpen ? "rotate(45deg)" : "rotate(0deg)",
                  y: navigationOpen ? "-50%" : "0%",
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="absolute top-1/2 h-0.5 w-6 rounded-full bg-black"
                animate={{
                  opacity: navigationOpen ? 0 : 1,
                  x: navigationOpen ? 20 : 0,
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="absolute h-0.5 w-6 rounded-full bg-black"
                animate={{
                  top: navigationOpen ? "50%" : "100%",
                  transform: navigationOpen ? "rotate(-45deg)" : "rotate(0deg)",
                  y: navigationOpen ? "-50%" : "0%",
                }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </button>
        </div>

        {/* Middle+Right: separate nav (fixed 700px) and CTA (auto) so they don't fight for space */}
        <div className="hidden xl:flex xl:items-center xl:gap-6">
          {/* Nav gets a guaranteed 700px and sits closer to the logo */}
          <nav className="w-[700px]">
            <ul className="flex flex-row items-center gap-10 font-semibold text-black">
              {menuData.map((menuItem) => {
                const withSub = !!menuItem.submenu;
                const offers = isOffersMenu(menuItem.title);
                return (
                  <li
                    key={menuItem.id}
                    className={`${withSub ? "relative" : ""}`}
                    onMouseEnter={() =>
                      withSub && handleMouseEnter(menuItem.id)
                    }
                    onMouseLeave={handleMouseLeave}
                    ref={(el) => {
                      if (withSub) dropdownRefs.current[menuItem.id] = el;
                    }}
                  >
                    {withSub ? (
                      <>
                        <button
                          onClick={() => handleDropdownToggle(menuItem.id)}
                          className={`flex items-center gap-2 transition-colors duration-200 ${
                            offers
                              ? "relative rounded-lg px-4 py-2 font-bold text-white hover:text-white"
                              : "hover:text-primary"
                          }`}
                          style={
                            offers
                              ? {
                                  background:
                                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                }
                              : {}
                          }
                        >
                          <span>{menuItem.title}</span>
                          {offers && (
                            <span className="absolute -right-1 -top-1 h-3 w-3">
                              {/* pulse halo */}
                              <span
                                className="absolute inset-0 animate-ping rounded-full"
                                style={{
                                  backgroundColor: "rgba(255,215,0,0.55)",
                                }}
                              />
                              {/* flat gold core */}
                              <span
                                className="relative block h-3 w-3 rounded-full"
                                style={{ backgroundColor: "#FFD700" }}
                              />
                            </span>
                          )}
                          <motion.span
                            animate={{
                              rotate: isDropdownVisible(menuItem.id) ? 180 : 0,
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            <svg
                              className={`h-3 w-3 ${offers ? "fill-white" : "fill-waterloo group-hover:fill-primary"}`}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                            </svg>
                          </motion.span>
                        </button>

                        <AnimatePresence>
                          {isDropdownVisible(menuItem.id) && (
                            <motion.ul
                              className="absolute left-0 top-full z-50 min-w-[200px] rounded-md bg-white p-4 shadow-lg"
                              initial="hidden"
                              animate="visible"
                              exit="hidden"
                              variants={dropdownVariants}
                            >
                              {menuItem.submenu!.map((subItem) => (
                                <li key={subItem.id} className="py-1">
                                  <Link
                                    href={subItem.path || "#"}
                                    className={`block transition-colors duration-200 hover:text-primary ${
                                      pathUrl === subItem.path
                                        ? "text-primary"
                                        : ""
                                    }`}
                                    prefetch
                                  >
                                    {subItem.title}
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={menuItem.path || "#"}
                        className={`block transition-colors duration-200 ${
                          pathUrl === menuItem.path ? "text-primary" : ""
                        } ${
                          offers
                            ? "relative rounded-lg px-4 py-2 font-bold text-white hover:text-white"
                            : "hover:text-primary"
                        }`}
                        prefetch
                        style={
                          offers
                            ? {
                                background:
                                  "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                              }
                            : {}
                        }
                      >
                        {menuItem.title}
                        {offers && (
                          <span className="absolute -right-1 -top-1 h-3 w-3">
                            <span
                              className="absolute inset-0 animate-ping rounded-full"
                              style={{
                                backgroundColor: "rgba(255,215,0,0.55)",
                              }}
                            />
                            <span
                              className="relative block h-3 w-3 rounded-full"
                              style={{ backgroundColor: "#FFD700" }}
                            />
                          </span>
                        )}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* CTA sits outside the 700px nav width, so it never causes wrapping */}
          <motion.a
            href="/get-in-touch"
            className="ml-2 flex h-10 w-36 items-center justify-center rounded-md bg-gradient-to-r from-sky-500 to-sky-800 px-6 text-sm text-white transition-all duration-300 ease-in-out hover:shadow-lg hover:brightness-110"
          >
            Get in Touch
          </motion.a>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {navigationOpen && (
            <motion.div
              className="absolute left-0 right-0 top-full mx-4 mt-4 rounded-lg bg-white p-5 shadow-lg xl:hidden"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={navVariants}
            >
              <nav className="w-full">
                <ul className="flex flex-col gap-4 font-semibold text-black">
                  {menuData.map((menuItem) => {
                    const offers = isOffersMenu(menuItem.title);
                    const withSub = !!menuItem.submenu;
                    return (
                      <li
                        key={menuItem.id}
                        className="py-2"
                        ref={(el) => {
                          if (withSub) dropdownRefs.current[menuItem.id] = el;
                        }}
                      >
                        {withSub ? (
                          <>
                            <button
                              onClick={() => handleDropdownToggle(menuItem.id)}
                              className={`flex w-full items-center justify-between gap-2 text-left transition-colors duration-200 ${
                                offers
                                  ? "relative rounded-lg px-4 py-2 font-bold text-white hover:text-white"
                                  : "hover:text-primary"
                              }`}
                              style={
                                offers
                                  ? {
                                      background:
                                        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                    }
                                  : {}
                              }
                            >
                              <span>{menuItem.title}</span>
                              {offers && (
                                <span className="absolute -right-1 -top-1 h-2 w-2">
                                  <span
                                    className="absolute inset-0 animate-ping rounded-full"
                                    style={{
                                      backgroundColor: "rgba(255,215,0,0.55)",
                                    }}
                                  />
                                  <span
                                    className="relative block h-2 w-2 rounded-full"
                                    style={{ backgroundColor: "#FFD700" }}
                                  />
                                </span>
                              )}
                              <motion.span
                                animate={{
                                  rotate:
                                    activeDropdown === menuItem.id ? 180 : 0,
                                }}
                                transition={{ duration: 0.2 }}
                              >
                                <svg
                                  className={`h-3 w-3 ${offers ? "fill-white" : "fill-waterloo"}`}
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                                </svg>
                              </motion.span>
                            </button>

                            <AnimatePresence>
                              {activeDropdown === menuItem.id && (
                                <motion.ul
                                  className="mt-2 space-y-2 pl-4"
                                  initial="hidden"
                                  animate="visible"
                                  exit="hidden"
                                  variants={dropdownVariants}
                                >
                                  {menuItem.submenu!.map((subItem) => (
                                    <li key={subItem.id} className="py-1">
                                      <Link
                                        href={subItem.path || "#"}
                                        className={`block transition-colors duration-200 hover:text-primary ${
                                          pathUrl === subItem.path
                                            ? "text-primary"
                                            : ""
                                        }`}
                                        prefetch
                                      >
                                        {subItem.title}
                                      </Link>
                                    </li>
                                  ))}
                                </motion.ul>
                              )}
                            </AnimatePresence>
                          </>
                        ) : (
                          <Link
                            href={menuItem.path || "#"}
                            className={`block transition-colors duration-200 ${
                              pathUrl === menuItem.path ? "text-primary" : ""
                            } ${
                              offers
                                ? "relative rounded-lg px-4 py-2 font-bold text-white hover:text-white"
                                : "hover:text-primary"
                            }`}
                            prefetch
                            style={
                              offers
                                ? {
                                    background:
                                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                  }
                                : {}
                            }
                          >
                            {menuItem.title}
                            {offers && (
                              <span className="absolute -right-1 -top-1 h-2 w-2">
                                <span
                                  className="absolute inset-0 animate-ping rounded-full"
                                  style={{
                                    backgroundColor: "rgba(255,215,0,0.55)",
                                  }}
                                />
                                <span
                                  className="relative block h-2 w-2 rounded-full"
                                  style={{ backgroundColor: "#FFD700" }}
                                />
                              </span>
                            )}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="mt-6">
                <a
                  href="/get-in-touch"
                  className="flex h-10 w-36 items-center justify-center rounded-md bg-gradient-to-r from-sky-500 to-sky-800 text-sm text-white transition-all duration-300 ease-in-out hover:shadow-lg hover:brightness-110"
                >
                  Get in Touch
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
