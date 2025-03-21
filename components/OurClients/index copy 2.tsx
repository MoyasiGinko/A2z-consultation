"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// Define types for our client testimonial data
interface Testimonial {
  id: number;
  name: string;
  company: string;
  industry: string;
  quote: string;
  imageSrc: string;
  stats?: {
    label: string;
    value: string;
  }[];
}

// Sample client data
const clientTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mike Thurston",
    company: "THRST",
    industry: "Fitness",
    quote:
      "For years, my accounts were an absolute mess! Capture sorted out my accounts, and helped me relocate and set up my business in Dubai!",
    imageSrc: "/clients/mike-thurston.jpg",
    stats: [
      { label: "YouTube Subscribers", value: "1.4M+" },
      { label: "Revenue Increase", value: "32%" },
      { label: "Tax Savings", value: "£45K+" },
    ],
  },
  {
    id: 2,
    name: "Sarah Johnson",
    company: "Luminous Creative",
    industry: "Design",
    quote:
      "Working with this team transformed our financial operations. We now have complete clarity on our numbers and can focus on growing our studio.",
    imageSrc: "/clients/sarah-johnson.jpg",
    stats: [
      { label: "Time Saved", value: "20 hrs/week" },
      { label: "Growth Rate", value: "28%" },
      { label: "Profit Margin", value: "+15%" },
    ],
  },
  {
    id: 3,
    name: "David Chen",
    company: "TechNova",
    industry: "SaaS",
    quote:
      "Their expertise in tech industry finances helped us navigate complex international tax regulations during our expansion to Europe.",
    imageSrc: "/clients/david-chen.jpg",
    stats: [
      { label: "Expansion Markets", value: "3" },
      { label: "Compliance Rating", value: "100%" },
      { label: "Cost Reduction", value: "22%" },
    ],
  },
  {
    id: 4,
    name: "Emma Wilson",
    company: "Sustainable Home",
    industry: "E-commerce",
    quote:
      "They didn't just organize our books - they provided strategic advice that helped us secure our Series A funding round.",
    imageSrc: "/clients/emma-wilson.jpg",
    stats: [
      { label: "Funding Secured", value: "£2.4M" },
      { label: "Revenue Growth", value: "47%" },
      { label: "New Hires", value: "12" },
    ],
  },
];

// Animation variants for Framer Motion
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.15,
      duration: 0.5,
    },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const pulseAnimation = {
  scale: [1, 1.02, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    repeatType: "reverse" as const,
  },
};

export default function ClientsPage() {
  const [activeClientId, setActiveClientId] = useState<number>(1);

  return (
    <>
      <Head>
        <title>Our Clients | Financial Excellence</title>
        <meta
          name="description"
          content="Success stories from our valued clients"
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 to-blue-800 text-white">
        <motion.div
          className="container mx-auto px-6 py-24 md:py-32"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1
            className="mb-6 text-4xl font-bold md:text-6xl"
            variants={fadeIn}
            custom={0}
          >
            Our Client Success Stories
          </motion.h1>

          <motion.p
            className="mb-12 max-w-3xl text-xl text-blue-100 md:text-2xl"
            variants={fadeIn}
            custom={1}
          >
            We've helped entrepreneurs and businesses of all sizes take control
            of their finances, reduce tax liabilities, and scale globally.
          </motion.p>

          <motion.div variants={fadeIn} custom={2}>
            <Link href="#featured-clients" className="group">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full bg-white px-8 py-4 text-lg font-bold text-blue-900 shadow-lg transition duration-300 group-hover:bg-blue-100"
              >
                View Success Stories
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            className="absolute bottom-0 right-0 h-1/3 w-1/3 opacity-10"
            animate={{ rotate: 360 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          >
            <div className="h-full w-full rounded-full bg-gradient-to-r from-blue-300 to-purple-300 blur-3xl"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Clients Section */}
      <section id="featured-clients" className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="mb-16 text-center"
          >
            <motion.h2
              className="mb-6 text-3xl font-bold text-gray-800 md:text-5xl"
              variants={fadeIn}
              custom={0}
            >
              Featured Client Stories
            </motion.h2>
            <motion.p
              className="mx-auto max-w-3xl text-lg text-gray-600"
              variants={fadeIn}
              custom={1}
            >
              Discover how we've helped these businesses overcome financial
              challenges and achieve remarkable growth.
            </motion.p>
          </motion.div>

          <div className="mb-20 grid grid-cols-1 gap-8 lg:grid-cols-12">
            <motion.div
              className="overflow-hidden rounded-2xl bg-white shadow-lg lg:col-span-5"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative h-96 w-full">
                <Image
                  src={
                    clientTestimonials.find(
                      (client) => client.id === activeClientId,
                    )?.imageSrc || "/clients/default.jpg"
                  }
                  alt={
                    clientTestimonials.find(
                      (client) => client.id === activeClientId,
                    )?.name || "Client"
                  }
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent">
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white">
                      {
                        clientTestimonials.find(
                          (client) => client.id === activeClientId,
                        )?.name
                      }
                    </h3>
                    <p className="text-blue-200">
                      {
                        clientTestimonials.find(
                          (client) => client.id === activeClientId,
                        )?.company
                      }{" "}
                      •{" "}
                      {
                        clientTestimonials.find(
                          (client) => client.id === activeClientId,
                        )?.industry
                      }
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col justify-center rounded-2xl bg-white p-8 shadow-lg md:p-12 lg:col-span-7"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.div
                key={activeClientId}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-8 text-5xl text-blue-500">"</div>
                <p className="mb-8 text-xl italic text-gray-700 md:text-2xl">
                  {
                    clientTestimonials.find(
                      (client) => client.id === activeClientId,
                    )?.quote
                  }
                </p>
                <div className="flex items-end justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">
                      {
                        clientTestimonials.find(
                          (client) => client.id === activeClientId,
                        )?.name
                      }
                    </h4>
                    <p className="font-medium text-blue-600">
                      {
                        clientTestimonials.find(
                          (client) => client.id === activeClientId,
                        )?.company
                      }
                    </p>
                  </div>
                  <div className="text-5xl text-blue-500">"</div>
                </div>

                {clientTestimonials.find(
                  (client) => client.id === activeClientId,
                )?.stats && (
                  <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
                    {clientTestimonials
                      .find((client) => client.id === activeClientId)
                      ?.stats?.map((stat, index) => (
                        <motion.div
                          key={index}
                          className="rounded-xl bg-blue-50 p-4 text-center"
                          whileHover={pulseAnimation}
                        >
                          <h5 className="text-2xl font-bold text-blue-700 md:text-3xl">
                            {stat.value}
                          </h5>
                          <p className="text-sm text-gray-600">{stat.label}</p>
                        </motion.div>
                      ))}
                  </div>
                )}
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {clientTestimonials.map((client, index) => (
              <motion.button
                key={client.id}
                className={`rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${
                  activeClientId === client.id
                    ? "bg-blue-600 text-white shadow-md"
                    : "border border-gray-200 bg-white text-gray-700 hover:border-blue-300"
                }`}
                onClick={() => setActiveClientId(client.id)}
                variants={fadeIn}
                custom={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {client.name}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Client Grid Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="mb-16 text-center"
          >
            <motion.h2
              className="mb-6 text-3xl font-bold text-gray-800 md:text-5xl"
              variants={fadeIn}
              custom={0}
            >
              Discover All Success Stories
            </motion.h2>
            <motion.p
              className="mx-auto max-w-3xl text-lg text-gray-600"
              variants={fadeIn}
              custom={1}
            >
              Each client has a unique journey. Browse through our collection of
              success stories across industries.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {clientTestimonials.map((client, index) => (
              <motion.div
                key={client.id}
                className="overflow-hidden rounded-xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl"
                variants={fadeIn}
                custom={index}
              >
                <div className="relative h-60">
                  <Image
                    src={client.imageSrc}
                    alt={client.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-gray-800">
                    {client.name}
                  </h3>
                  <p className="mb-4 text-sm font-medium text-blue-600">
                    {client.company} • {client.industry}
                  </p>
                  <p className="mb-6 line-clamp-3 text-gray-600">
                    {client.quote}
                  </p>
                  <motion.button
                    className="group flex items-center font-medium text-blue-600"
                    whileHover={{ x: 5 }}
                  >
                    Read full story
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </motion.button>
                </div>
              </motion.div>
            ))}

            {/* Display more cards to fill the grid */}
            {[1, 2, 3, 4, 5].map((item) => (
              <motion.div
                key={`extra-${item}`}
                className="overflow-hidden rounded-xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl"
                variants={fadeIn}
                custom={clientTestimonials.length + item}
              >
                <div className="relative h-60 bg-gradient-to-r from-gray-100 to-gray-200">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-20 w-20 rounded-full bg-gray-300"></div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-2 h-6 w-1/3 rounded bg-gray-200"></div>
                  <div className="mb-4 h-4 w-2/3 rounded bg-gray-100"></div>
                  <div className="space-y-2">
                    <div className="h-4 w-full rounded bg-gray-100"></div>
                    <div className="h-4 w-full rounded bg-gray-100"></div>
                    <div className="h-4 w-3/4 rounded bg-gray-100"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.button
              className="rounded-full bg-gray-100 px-8 py-3 font-medium text-gray-800 transition duration-300 hover:bg-gray-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Load More Stories
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 py-24 text-white">
        <motion.div
          className="container mx-auto max-w-5xl px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div>
              <motion.h2
                className="mb-6 text-3xl font-bold md:text-4xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Ready to Transform Your Finances?
              </motion.h2>
              <motion.p
                className="mb-8 text-lg text-blue-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Join our growing list of successful clients who have streamlined
                their finances, reduced tax burdens, and scaled their businesses
                globally.
              </motion.p>
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center">
                  <div className="mr-4 rounded-full bg-blue-500/30 p-2">
                    <svg
                      className="h-5 w-5 text-blue-200"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p>Expert financial guidance tailored to your industry</p>
                </div>
                <div className="flex items-center">
                  <div className="mr-4 rounded-full bg-blue-500/30 p-2">
                    <svg
                      className="h-5 w-5 text-blue-200"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p>Strategic tax planning and optimization</p>
                </div>
                <div className="flex items-center">
                  <div className="mr-4 rounded-full bg-blue-500/30 p-2">
                    <svg
                      className="h-5 w-5 text-blue-200"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p>Global business formation and relocation support</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="rounded-2xl bg-white p-8 shadow-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="mb-6 text-2xl font-bold text-gray-800">
                Schedule a Free Consultation
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Business Type
                  </label>
                  <select className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500">
                    <option>Freelancer / Creator</option>
                    <option>Startup</option>
                    <option>Established Business</option>
                    <option>E-commerce</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    className="h-24 w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us about your financial goals..."
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="w-full rounded-lg bg-blue-600 px-6 py-3 font-bold text-white shadow-lg transition duration-300 hover:bg-blue-700"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book Your Free Consultation
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="absolute -bottom-10 left-0 h-20 w-full opacity-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="h-full w-full bg-gradient-to-r from-blue-300 to-indigo-300 blur-2xl"></div>
        </motion.div>
      </section>
    </>
  );
}
