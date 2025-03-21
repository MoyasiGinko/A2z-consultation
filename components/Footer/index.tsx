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
      className="overflow-hidden"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <div className="bg-blue-950 py-10 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            {/* 1. Logo and Description Column */}
            <motion.div
              className="mb-8 w-full pr-4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
              variants={itemVariants}
            >
              <Link href="/" className="mb-4 block">
                <div className="relative h-10 w-40">
                  <Image
                    src="/images/logo/logo-white.png"
                    alt="IMMIGRATION"
                    layout="fill"
                    objectFit="contain"
                    className="object-left"
                  />
                </div>
              </Link>

              <p className="mb-6 text-sm">
                Lorem diam sit erat dolor elitr et, diam lorem justo amet clita
                stet eos sit. Elitr dolor duo lorem, elitr clita ipsum sea. Diam
                amet erat lorem stet eos. Diam amet et kasd eos duo.
              </p>

              <div className="flex h-10">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-0 flex-1 px-4 text-gray-800 focus:outline-none"
                />
                <button className="bg-blue-600 px-4 text-white transition-colors hover:bg-blue-700">
                  Sign up
                </button>
              </div>
            </motion.div>

            {/* 2. Get in Touch Column */}
            <motion.div
              className="mb-8 w-full px-2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
              variants={itemVariants}
            >
              <h2 className="mb-4 text-xl font-bold">Get in touch</h2>

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
                      <span className="text-sm">{item.text}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* 3. Services Column */}
            <motion.div
              className="mb-8 w-full px-2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
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
              className="mb-8 w-full px-2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
              variants={itemVariants}
            >
              <div className="mb-2 flex items-center">
                <div className="relative mb-2 h-24 w-24">
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
            <motion.div
              className="w-full px-2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
              variants={itemVariants}
            >
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

                <motion.button
                  className="w-full rounded bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Download our guide
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
