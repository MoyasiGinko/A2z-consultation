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
  const [hideOnScroll, setHideOnScroll] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hoverDropdown, setHoverDropdown] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const pathUrl = usePathname();

  // Handle dropdown toggle with specific menu ID (for clicks)
  const handleDropdownToggle = (menuId: number) => {
    setActiveDropdown(activeDropdown === menuId ? null : menuId);
  };

  // Handle mouseenter for a dropdown
  const handleMouseEnter = (menuId: number) => {
    setHoverDropdown(menuId);
  };

  // Handle mouseleave for a dropdown
  const handleMouseLeave = () => {
    setHoverDropdown(null);
  };

  // Close mobile menu and dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Close mobile menu if clicking outside
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node) &&
        navigationOpen
      ) {
        setNavigationOpen(false);
      }

      // Close dropdowns if clicking outside
      if (activeDropdown !== null) {
        const clickedDropdown = Object.entries(dropdownRefs.current).find(
          ([id, ref]) =>
            ref &&
            ref.contains(event.target as Node) &&
            Number(id) === activeDropdown,
        );

        if (!clickedDropdown) {
          setActiveDropdown(null);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [navigationOpen, activeDropdown]);

  // Close mobile menu on path change
  useEffect(() => {
    setNavigationOpen(false);
    setActiveDropdown(null);
    setHoverDropdown(null);
  }, [pathUrl]);

  // Optimized scroll handler using requestAnimationFrame for better performance
  useEffect(() => {
    let ticking = false;
    let lastKnownScrollY = window.scrollY;

    const handleScroll = () => {
      lastKnownScrollY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Apply hide logic only when scrolling down significantly
          setHideOnScroll(
            lastKnownScrollY > lastScrollY + 5 && lastKnownScrollY > 100,
          );

          // Apply sticky styles
          setStickyMenu(lastKnownScrollY >= 80);

          // Update last scroll position
          setLastScrollY(lastKnownScrollY);
          ticking = false;
        });

        ticking = true;
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [lastScrollY]);

  // Animation variants with optimized durations
  const navVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, height: 0, overflow: "hidden" },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.2 },
    },
  };

  // Check if dropdown should be shown (either by hover or by click)
  const isDropdownVisible = (menuId: number) =>
    hoverDropdown === menuId || activeDropdown === menuId;

  return (
    <motion.header
      ref={headerRef}
      // className="fixed left-0 top-0 z-50 w-full py-4"
      className={`fixed left-0 top-0 z-50 w-full py-4 ${!isMounted ? "opacity-0" : ""}`}
      initial={{
        y: 0,
        backgroundColor: "transparent",
        boxShadow: "none",
      }}
      animate={{
        backgroundColor: stickyMenu ? "rgba(255,255,255,0.98)" : "transparent",
        boxShadow: stickyMenu ? "0 4px 12px rgba(0,0,0,0.05)" : "none",
      }}
    >
      <div className="relative mx-auto max-w-c-1390 items-center justify-between px-4 md:px-8 xl:flex 2xl:px-0">
        <div className="flex w-full items-center justify-between xl:w-1/4">
          <Link href="/" className="block">
            <Image
              src="/images/logo/logo-dark.png"
              alt="logo"
              width={200}
              height={50}
              className="hidden h-9 w-56 transition-opacity duration-300 hover:opacity-90 dark:block"
              priority
            />
            <Image
              src="/images/logo/logo-dark.png"
              alt="logo"
              width={200}
              height={50}
              className="h-9 w-56 transition-opacity duration-300 hover:opacity-90 dark:hidden"
              priority
            />
          </Link>

          {/* Hamburger Toggle Button */}
          <button
            aria-label="Menu Toggle"
            className="flex h-10 w-10 items-center justify-center rounded-md focus:outline-none xl:hidden"
            onClick={() => setNavigationOpen(!navigationOpen)}
          >
            <div className="relative h-5 w-6">
              <motion.span
                className="absolute h-0.5 w-6 rounded-full bg-black dark:bg-white"
                animate={{
                  top: navigationOpen ? "50%" : "0%",
                  transform: navigationOpen ? "rotate(45deg)" : "rotate(0deg)",
                  y: navigationOpen ? "-50%" : "0%",
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="absolute top-1/2 h-0.5 w-6 rounded-full bg-black dark:bg-white"
                animate={{
                  opacity: navigationOpen ? 0 : 1,
                  x: navigationOpen ? 20 : 0,
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="absolute h-0.5 w-6 rounded-full bg-black dark:bg-white"
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

        {/* Desktop Navigation Menu with both hover and click functionality */}
        <div className="hidden xl:flex xl:w-4/6 xl:items-center xl:justify-between">
          <nav className="w-full">
            <ul className="flex flex-row items-center gap-10 font-semibold text-black">
              {menuData.map((menuItem) => (
                <li
                  key={menuItem.id}
                  className={`${menuItem.submenu ? "relative" : ""}`}
                  onMouseEnter={() =>
                    menuItem.submenu && handleMouseEnter(menuItem.id)
                  }
                  onMouseLeave={handleMouseLeave}
                  ref={(el) => {
                    if (menuItem.submenu) {
                      dropdownRefs.current[menuItem.id] = el;
                    }
                  }}
                >
                  {menuItem.submenu ? (
                    <>
                      <button
                        onClick={() => handleDropdownToggle(menuItem.id)}
                        className="flex items-center gap-2 transition-colors duration-200 hover:text-primary"
                      >
                        <span>{menuItem.title}</span>
                        <motion.span
                          animate={{
                            rotate: isDropdownVisible(menuItem.id) ? 180 : 0,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <svg
                            className="h-3 w-3 fill-waterloo group-hover:fill-primary"
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
                            className="absolute left-0 top-full z-50 min-w-[200px] rounded-md bg-white p-4 shadow-lg dark:bg-blacksection"
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={dropdownVariants}
                          >
                            {menuItem.submenu.map((subItem) => (
                              <li key={subItem.id} className="py-1">
                                <Link
                                  href={subItem.path || "#"}
                                  className={`block transition-colors duration-200 hover:text-primary ${
                                    pathUrl === subItem.path
                                      ? "text-primary"
                                      : ""
                                  }`}
                                  prefetch={true}
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
                      className={`block transition-colors duration-200 hover:text-primary ${
                        pathUrl === menuItem.path ? "text-primary" : ""
                      }`}
                      prefetch={true}
                    >
                      {menuItem.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <a
              href="/get-in-touch"
              className="flex h-10 w-36 items-center justify-center rounded-md bg-gradient-to-r from-[#06A2D9] via-[#07A2D9] to-[#08A2D9] text-sm text-white transition-all duration-300 ease-in-out hover:shadow-lg hover:brightness-110"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {navigationOpen && (
            <motion.div
              className="absolute left-0 right-0 top-full mx-4 mt-4 rounded-lg bg-white p-5 shadow-lg dark:bg-blacksection xl:hidden"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={navVariants}
            >
              <nav className="w-full">
                <ul className="flex flex-col gap-4 font-semibold text-black">
                  {menuData.map((menuItem) => (
                    <li
                      key={menuItem.id}
                      className="py-2"
                      ref={(el) => {
                        if (menuItem.submenu) {
                          dropdownRefs.current[menuItem.id] = el;
                        }
                      }}
                    >
                      {menuItem.submenu ? (
                        <>
                          <button
                            onClick={() => handleDropdownToggle(menuItem.id)}
                            className="flex w-full items-center justify-between gap-2 text-left transition-colors duration-200 hover:text-primary"
                          >
                            <span>{menuItem.title}</span>
                            <motion.span
                              animate={{
                                rotate:
                                  activeDropdown === menuItem.id ? 180 : 0,
                              }}
                              transition={{ duration: 0.2 }}
                            >
                              <svg
                                className="h-3 w-3 fill-waterloo"
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
                                {menuItem.submenu.map((subItem) => (
                                  <li key={subItem.id} className="py-1">
                                    <Link
                                      href={subItem.path || "#"}
                                      className={`block transition-colors duration-200 hover:text-primary ${
                                        pathUrl === subItem.path
                                          ? "text-primary"
                                          : ""
                                      }`}
                                      prefetch={true}
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
                          className={`block transition-colors duration-200 hover:text-primary ${
                            pathUrl === menuItem.path ? "text-primary" : ""
                          }`}
                          prefetch={true}
                        >
                          {menuItem.title}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-6">
                <a
                  href="/get-in-touch"
                  className="flex h-10 w-36 items-center justify-center rounded-md bg-gradient-to-r from-[#06A2D9] via-[#07A2D9] to-[#08A2D9] text-sm text-white transition-all duration-300 ease-in-out hover:shadow-lg hover:brightness-110"
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
