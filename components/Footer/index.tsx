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
} from "lucide-react";

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
  { id: 1, name: "Visit Visa", href: "/services/visit-visa" },
  { id: 2, name: "Skilled Worker Visa", href: "/services/skilled-worker-visa" },
  { id: 3, name: "Graduate Visa", href: "/services/graduate-visa" },
  { id: 4, name: "Student Visa", href: "/services/student-visa" },
  { id: 5, name: "Spouse Visa", href: "/services/spouse-visa" },
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

  return (
    <motion.footer
      ref={footerRef}
      className="mt-20 overflow-hidden"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <div className="bg-blue-950 text-white">
        <div className="container mx-auto grid gap-10 px-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 xl:grid-cols-[1.2fr_1fr_0.67fr_0.5fr_1fr] xl:gap-12">
          <motion.div
            className="bg-transparent p-6 text-white"
            variants={itemVariants}
          >
            <Link href="/" className="mb-2 block py-3">
              <div className="relative h-12 w-40 xl:w-56">
                <Image
                  src="/images/logo/logo-dark.png"
                  alt="A2Z ImmiMigration"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </Link>

            <p className="mb-6 font-medium">
              Lorem diam sit erat dolor elitr et, diam lorem justo amet clita
              stet eos sit. Elitr dolor duo lorem, elitr clita ipsum sea. Diam
              amet erat lorem stet eos. Diam amet et kasd eos duo.
            </p>

            <motion.div
              className="flex h-12"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <input
                type="email"
                placeholder="Your email"
                className="w-0 flex-1 px-4 text-gray-800 focus:outline-none"
              />
              <button className="shrink-0 bg-gray-900 px-4 transition-colors duration-300 hover:bg-black">
                Sign up
              </button>
            </motion.div>
          </motion.div>

          <motion.div className="py-4 lg:py-10" variants={itemVariants}>
            <h2 className="relative mb-6 text-2xl font-bold">
              Get in touch
              <motion.span
                className="absolute -bottom-2 left-0 h-1 bg-blue-500"
                initial={{ width: 0 }}
                animate={{ width: "40px" }}
                transition={{ duration: 0.5, delay: 0.5 }}
              />
            </h2>

            <ul className="space-y-2">
              {contactInfo.map((item) => (
                <motion.li
                  key={item.id}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1.5 transition-colors duration-300 hover:text-blue-300"
                  >
                    {item.icon}
                    <span>{item.text}</span>
                  </Link>
                </motion.li>
              ))}
              <li className="pl-5 pt-1 text-sm text-gray-300">
                Registered Company in the UK – Company Number SC659958
              </li>
            </ul>
          </motion.div>

          <motion.div className="py-4 lg:py-10" variants={itemVariants}>
            <h2 className="relative mb-6 text-2xl font-bold">
              Services
              <motion.span
                className="absolute -bottom-2 left-0 h-1 bg-blue-500"
                initial={{ width: 0 }}
                animate={{ width: "40px" }}
                transition={{ duration: 0.5, delay: 0.6 }}
              />
            </h2>

            <ul className="space-y-2">
              {serviceLinks.map((service) => (
                <motion.li
                  key={service.id}
                  className="transition-transform ease-linear"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={service.href}
                    className="flex items-center gap-1.5 transition-colors duration-300 hover:text-blue-300"
                  >
                    <ArrowRight size={16} className="text-blue-500" />
                    <span>{service.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="py-4 lg:py-10" variants={itemVariants}>
            <div className="relative mx-0 h-28 w-30 items-start xl:w-20">
              <Image
                src="/images/logo/oisc.png"
                alt="OISC icon"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className="mt-1 text-sm">OISC Member</p>
            <p className="text-sm">F202100303</p>
          </motion.div>

          <motion.div className="py-4 lg:py-10 xl:pl-4" variants={itemVariants}>
            <div className="mb-6 flex items-center justify-between gap-2">
              {socialLinks.map((socialLink) => (
                <motion.a
                  key={socialLink.id}
                  href={socialLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-white transition-all duration-300 hover:text-blue-400"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {socialLink.icon}
                </motion.a>
              ))}
            </div>

            {/* <motion.button
              className="w-full rounded bg-blue-600 px-4 py-3 font-bold text-white transition-colors duration-300 hover:bg-blue-700"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              Download our free guide
            </motion.button> */}
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
