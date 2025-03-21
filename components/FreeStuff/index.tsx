"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";
import Image from "next/image";

type Resource = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  fileUrl: string;
};

const FreeStuff: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedResource, setSelectedResource] = useState<Resource | null>(
    null,
  );
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const resources: Resource[] = [
    {
      id: "visa-guide",
      title: "Complete Visa Application Guide",
      description:
        "Step-by-step instructions to complete your visa application successfully with expert tips and common pitfalls to avoid.",
      imageUrl: "/images/resources/visa-guide.jpg",
      fileUrl: "/downloads/visa-application-guide.pdf",
    },
    {
      id: "document-checklist",
      title: "Essential Immigration Document Checklist",
      description:
        "A comprehensive checklist of all documents needed for various immigration processes, organized by visa type.",
      imageUrl: "/images/resources/document-checklist.jpg",
      fileUrl: "/downloads/immigration-document-checklist.pdf",
    },
    {
      id: "settlement-guide",
      title: "New Arrival Settlement Guide",
      description:
        "Everything you need to know about settling in your new country - from housing to healthcare, education and employment.",
      imageUrl: "/images/resources/settlement-guide.jpg",
      fileUrl: "/downloads/settlement-guide.pdf",
    },
    {
      id: "interview-prep",
      title: "Immigration Interview Preparation Guide",
      description:
        "Prepare confidently for your immigration interview with sample questions, recommended responses, and helpful tips.",
      imageUrl: "/images/resources/interview-guide.jpg",
      fileUrl: "/downloads/interview-preparation-guide.pdf",
    },
  ];

  const handleDownloadClick = (resource: Resource) => {
    setSelectedResource(resource);
    setIsModalOpen(true);
    setEmail("");
    setEmailError("");
    setIsSuccess(false);
  };

  const validateEmail = (email: string): boolean => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = () => {
    if (!email.trim()) {
      setEmailError("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    setEmailError("");
    setIsLoading(true);

    // Simulate API call to validate email and process download
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);

      // In a real implementation, you would:
      // 1. Send the email to your backend
      // 2. Add the email to your newsletter list
      // 3. Track the download

      // Automatically download file after 1.5 seconds of showing success message
      setTimeout(() => {
        if (selectedResource) {
          const link = document.createElement("a");
          link.href = selectedResource.fileUrl;
          link.download =
            selectedResource.fileUrl.split("/").pop() || "download";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      }, 1500);
    }, 1000);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedResource(null);
  };

  return (
    <>
      <Head>
        <title>Free Immigration Resources | A2Z Immigrants</title>
        <meta
          name="description"
          content="Access free immigration guides, checklists, and templates to help with your immigration journey."
        />
      </Head>

      {/* Hero Section */}
      <motion.section
        className="relative h-96 w-full bg-sky-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-500 to-sky-500 opacity-90" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
          <motion.h1
            className="mb-4 text-4xl font-bold md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Free Immigration Resources
          </motion.h1>
          <motion.p
            className="max-w-3xl text-xl md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Download our expert guides to help navigate your immigration journey
          </motion.p>
        </div>
      </motion.section>

      {/* Introduction Section */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-8">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-3xl font-bold text-sky-500">
            Essential Resources for Immigrants
          </h2>
          <p className="mx-auto max-w-3xl text-gray-700">
            We've created these comprehensive guides to help you navigate the
            complex immigration process with confidence. Each resource is
            created by our expert team with years of experience helping
            thousands of immigrants achieve their goals.
          </p>
        </motion.div>
      </section>

      {/* Resources Grid */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-8">
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {resources.map((resource) => (
            <motion.div
              key={resource.id}
              className="flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-md"
              variants={fadeIn}
            >
              <div className="relative h-52 w-full">
                <Image
                  src={resource.imageUrl}
                  alt={resource.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="flex-grow p-6">
                <h3 className="mb-2 text-xl font-bold text-sky-500">
                  {resource.title}
                </h3>
                <p className="mb-4 text-gray-700">{resource.description}</p>
              </div>
              <div className="px-6 pb-6">
                <button
                  onClick={() => handleDownloadClick(resource)}
                  className="inline-block w-full rounded-md bg-sky-500 px-4 py-2 text-center font-medium text-white transition duration-300 hover:bg-sky-700"
                >
                  Download Free Guide
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Call to Action Section */}
      <motion.div
        className="mt-24 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="mb-6 text-3xl font-bold text-gray-800">
          Ready to join our success stories?
        </h2>
        <a href="/get-in-touch">
          <motion.button
            className="rounded-full bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 px-8 py-3 font-bold text-white shadow-lg  hover:shadow-xl"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Book a Consultation
          </motion.button>
        </a>
      </motion.div>

      {/* Email Collection Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-full max-w-md overflow-hidden rounded-lg bg-white shadow-xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <div className="p-6">
                <div className="mb-4 flex items-start justify-between">
                  <h3 className="text-xl font-bold text-sky-500">
                    {isSuccess ? "Thank You!" : "Download Your Free Guide"}
                  </h3>
                  <button
                    onClick={closeModal}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </button>
                </div>

                {isSuccess ? (
                  <div className="py-4 text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                      <svg
                        className="h-8 w-8 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <p className="mb-2 text-gray-700">
                      Your download is starting automatically...
                    </p>
                    <p className="text-sm text-gray-600">
                      We've also added you to our newsletter. Check your inbox
                      for a confirmation email.
                    </p>
                  </div>
                ) : (
                  <>
                    <p className="mb-6 text-gray-700">
                      Enter your email address to get instant access to
                      <span className="font-semibold">
                        {" "}
                        {selectedResource?.title}
                      </span>
                    </p>

                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="mb-1 block text-sm font-medium text-gray-700"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="your@email.com"
                        className={`w-full border p-3 ${emailError ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500`}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {emailError && (
                        <p className="mt-1 text-sm text-red-600">
                          {emailError}
                        </p>
                      )}
                    </div>

                    <div className="mb-6 text-sm text-gray-600">
                      By downloading this resource, you agree to receive our
                      newsletter with immigration tips and updates. We respect
                      your privacy and you can unsubscribe at any time.
                    </div>

                    <button
                      onClick={handleSubmit}
                      className="flex w-full items-center justify-center rounded-md bg-sky-500 px-4 py-3 font-medium text-white transition duration-300 hover:bg-sky-700"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <svg
                            className="-ml-1 mr-2 h-5 w-5 animate-spin text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        "Get Your Free Guide Now"
                      )}
                    </button>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FreeStuff;
