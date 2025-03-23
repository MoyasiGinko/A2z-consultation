"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  Phone,
  Calendar,
  Mail,
  MapPin,
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

interface ServiceLink {
  id: number;
  name: string;
  href: string;
}

interface ContactInfo {
  id: number;
  icon: React.ReactNode;
  text: string;
  href: string;
}

interface SocialLink {
  id: number;
  icon: React.ReactNode;
  href: string;
}

const serviceLinks: ServiceLink[] = [
  { id: 1, name: "Sponsor Licence", href: "/services/sponsor-licence" },
  { id: 2, name: "Compliance", href: "/services/compliance" },
  { id: 3, name: "Skilled Worker Visa", href: "/services/skilled-worker-visa" },
  { id: 4, name: "Other Support", href: "/services/other-support" },
];

const contactInfo: ContactInfo[] = [
  {
    id: 1,
    icon: <Phone size={16} className="text-blue-500" />,
    text: "+44 7441 398273",
    href: "tel:+447441398273",
  },
  {
    id: 2,
    icon: <Calendar size={16} className="text-blue-500" />,
    text: "Mon-Fri: 9:00 – 17:00",
    href: "/",
  },
  {
    id: 3,
    icon: <Mail size={16} className="text-blue-500" />,
    text: "info@example.com",
    href: "mailto:info@example.com",
  },
  {
    id: 4,
    icon: <MapPin size={16} className="text-blue-500" />,
    text: "123 Street, New York, NY 10012",
    href: "https://maps.google.com",
  },
];

const socialLinks: SocialLink[] = [
  { id: 1, icon: <Facebook size={24} />, href: "https://facebook.com" },
  { id: 2, icon: <Twitter size={24} />, href: "https://twitter.com" },
  { id: 3, icon: <Linkedin size={24} />, href: "https://linkedin.com" },
  { id: 4, icon: <Instagram size={24} />, href: "https://instagram.com" },
];

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);
  const isInView = useInView(footerRef, { once: true, margin: "-100px 0px" });
  const controls = useAnimation();
  const [openSection, setOpenSection] = useState<string | null>(null);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const toggleSection = (section: string) => {
    if (openSection === section) {
      setOpenSection(null);
    } else {
      setOpenSection(section);
    }
  };

  return (
    <motion.footer
      ref={footerRef}
      className="overflow-hidden"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <div className="bg-blue-950 py-6 text-white md:py-10">
        <div className="container mx-auto px-4">
          {/* Mobile View */}
          <div className="flex flex-col md:hidden">
            {/* Logo and Description - Always visible on mobile */}
            <motion.div
              className="mb-6 flex flex-col items-center px-2"
              variants={itemVariants}
            >
              <Link href="/" className="mb-4 block">
                <div className="relative h-10 w-40">
                  <Image
                    src="/images/logo/logo-white.svg"
                    alt="IMMIGRATION"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </Link>

              <p className="mb-6 text-center text-sm">
                Lorem diam sit erat dolor elitr et, diam lorem justo amet clita
                stet eos sit.
              </p>

              {/* Social Media Icons - Centered on mobile */}
              <div className="mb-6 flex justify-center space-x-6">
                {socialLinks.map((socialLink) => (
                  <motion.a
                    key={socialLink.id}
                    href={socialLink.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-blue-900 p-2 text-white transition-all hover:bg-blue-600 hover:text-white"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    {socialLink.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Accordion Sections for Mobile - All expanded by default */}
            <div className="mb-6 w-full space-y-3 px-2">
              {/* Get in Touch Accordion */}
              <motion.div
                className="overflow-hidden rounded-lg border border-blue-700 shadow-md"
                variants={itemVariants}
              >
                <a href="/get-in-touch">
                  <button
                    onClick={() => toggleSection("contact")}
                    className="flex w-full items-center justify-between bg-blue-800 p-3 text-left"
                  >
                    <h2 className="text-base font-bold">Get in touch</h2>
                    <ChevronDown
                      size={18}
                      className={`transform transition-transform ${
                        openSection !== "contact" ? "" : "rotate-180"
                      }`}
                    />
                  </button>
                </a>
                <div
                  className={`${openSection !== "contact" ? "hidden" : "block"} p-3`}
                >
                  <ul className="space-y-3">
                    {contactInfo.map((item) => (
                      <li key={item.id}>
                        <Link
                          href={item.href}
                          className="flex items-center gap-2 text-sm transition-colors hover:text-blue-300"
                        >
                          {item.icon}
                          <span>{item.text}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Services Accordion */}
              <motion.div
                className="overflow-hidden rounded-lg border border-blue-700 shadow-md"
                variants={itemVariants}
              >
                <button
                  onClick={() => toggleSection("services")}
                  className="flex w-full items-center justify-between bg-blue-800 p-3 text-left"
                >
                  <h2 className="text-base font-bold">Services</h2>
                  <ChevronDown
                    size={18}
                    className={`transform transition-transform ${
                      openSection !== "services" ? "" : "rotate-180"
                    }`}
                  />
                </button>
                <div
                  className={`${openSection !== "services" ? "hidden" : "block"} p-3`}
                >
                  <ul className="space-y-3">
                    {serviceLinks.map((service) => (
                      <li key={service.id}>
                        <Link
                          href={service.href}
                          className="flex items-center gap-2 text-sm transition-colors hover:text-blue-300"
                        >
                          <ArrowRight size={16} className="text-blue-500" />
                          <span>{service.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* OISC Information Accordion */}
              <motion.div
                className="overflow-hidden rounded-lg border border-blue-700 shadow-md"
                variants={itemVariants}
              >
                <button
                  onClick={() => toggleSection("oisc")}
                  className="flex w-full items-center justify-between bg-blue-800 p-3 text-left"
                >
                  <h2 className="text-base font-bold">Credentials</h2>
                  <ChevronDown
                    size={18}
                    className={`transform transition-transform ${
                      openSection !== "oisc" ? "" : "rotate-180"
                    }`}
                  />
                </button>
                <div
                  className={`${openSection !== "oisc" ? "hidden" : "block"} p-3`}
                >
                  <div className="flex flex-col items-center">
                    <div className="relative mb-2 h-20 w-20">
                      <Image
                        src="/images/logo/oisc.png"
                        alt="OISC icon"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                    <p className="mb-1 text-center text-sm">OISC Member</p>
                    <p className="mb-4 text-center text-sm">F202100303</p>
                    <p className="text-center text-sm">
                      Registered Company in the UK
                      <br />
                      Company Number SC659958
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Email Signup and Download Button - Always visible on mobile */}
            <motion.div className="mb-4 w-full px-2" variants={itemVariants}>
              <div className="mb-4 flex h-10 w-full overflow-hidden rounded-md shadow-md">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-0 flex-1 px-3 text-gray-800 focus:outline-none"
                />
                <button className="bg-blue-600 px-3 text-white transition-colors hover:bg-blue-700">
                  Sign up
                </button>
              </div>
              <a href="/get-in-touch">
                <motion.button
                  className="w-full rounded-md bg-blue-600 px-4 py-3 text-sm font-medium text-white shadow-md transition-colors hover:bg-blue-700"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Download our guide
                </motion.button>
              </a>
            </motion.div>
          </div>

          {/* Desktop View */}
          <div className="hidden flex-wrap justify-between md:flex">
            {/* 1. Logo and Description Column */}
            <motion.div
              className="mb-8 max-w-[200px] px-2"
              variants={itemVariants}
            >
              <Link href="/" className="mb-4 block">
                <div className="relative h-10 w-40">
                  <Image
                    src="/images/logo/logo-white.svg"
                    alt="IMMIGRATION"
                    layout="fill"
                    objectFit="contain"
                    className="object-left"
                  />
                </div>
              </Link>

              <p className="mb-6 text-sm">
                Lorem diam sit erat dolor elitr et, diam lorem justo amet clita
                stet eos sit. Elitr dolor duo lorem.
              </p>

              <div className="flex h-10 max-w-full">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-0 flex-1 px-2 text-sm text-gray-800 focus:outline-none"
                />
                <button className="bg-blue-600 px-2 text-white transition-colors hover:bg-blue-700">
                  Sign up
                </button>
              </div>
            </motion.div>

            {/* 2. Get in Touch Column */}
            <motion.div
              className="mb-8 max-w-[200px] px-2"
              variants={itemVariants}
            >
              <a href="/get-in-touch">
                <h2 className="mb-4 text-xl font-bold">Get in touch</h2>
              </a>
              <ul className="space-y-3">
                {contactInfo.map((item) => (
                  <motion.li
                    key={item.id}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center gap-2 transition-colors hover:text-blue-300"
                    >
                      {item.icon}
                      <span className="truncate text-sm">{item.text}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* 3. Services Column */}
            <motion.div
              className="mb-8 max-w-[200px] px-2"
              variants={itemVariants}
            >
              <h2 className="mb-4 text-xl font-bold">Services</h2>

              <ul className="space-y-3">
                {serviceLinks.map((service) => (
                  <motion.li
                    key={service.id}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link
                      href={service.href}
                      className="flex items-center gap-2 transition-colors hover:text-blue-300"
                    >
                      <ArrowRight size={16} className="text-blue-500" />
                      <span className="text-sm">{service.name}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* 4. OISC Column */}
            <motion.div
              className="mb-8 max-w-[200px] px-2"
              variants={itemVariants}
            >
              <div className="mb-2 flex items-center">
                <div className="relative mb-2 h-20 w-20">
                  <Image
                    src="/images/logo/oisc.png"
                    alt="OISC icon"
                    layout="fill"
                    objectFit="contain"
                    className="object-left"
                  />
                </div>
              </div>
              <p className="mb-1 text-sm">OISC Member</p>
              <p className="mb-4 text-sm">F202100303</p>
            </motion.div>

            {/* 5. Social Media Column */}
            <motion.div className="max-w-[200px] px-2" variants={itemVariants}>
              <div>
                <div className="mb-3 flex space-x-4">
                  {socialLinks.map((socialLink) => (
                    <motion.a
                      key={socialLink.id}
                      href={socialLink.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white transition-colors hover:text-blue-400"
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    >
                      {socialLink.icon}
                    </motion.a>
                  ))}
                </div>

                <div className="mb-4 text-xs">
                  Registered Company in the UK
                  <br />
                  Company Number SC659958
                </div>
                <a href="/free-stuff">
                  <motion.button
                    className="w-full rounded bg-blue-600 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-700"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Download our guide
                  </motion.button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
