"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FC } from "react";

interface ClientInfo {
  id: string;
  name: string;
  title: string;
  socialLinks: {
    instagram?: string;
    youtube?: string;
  };
  description: string[];
  services: string[];
  testimonial: {
    quote: string;
    source: string;
  };
  imageSrc: string;
}

const clientData: ClientInfo[] = [
  {
    id: "mike-thurston",
    name: "Mike Thurston",
    title: "Founder of THRST",
    socialLinks: {
      instagram: "https://instagram.com/mikethurston",
      youtube: "https://youtube.com/mikethurston",
    },
    description: [
      "Mike Thurston is a British fitness guru who co-founded the health and fitness company Aurora Athletic. He runs a self-titled YouTube channel where he uploads vlogs and fitness training videos for over 1.3 million subscribers.",
      "Mike approached us as he had outgrown his accountant and was looking for a specialist that could manage the A-Z of his finances and taxes so he could concentrate on building his brand and content creation.",
      "We took over the headache of managing Mike's accounts, bookkeeping and taxes and provided him with just the information he needed to know how his business was performing, what cash he could take from the business and what his tax liabilities were. We also assisted Mike with moving to Dubai, setting up a company there and becoming non-resident for tax purposes in the UK so he could keep more of what he earns.",
    ],
    services: [
      "Financial Management",
      "Tax Planning",
      "Business Relocation",
      "Company Formation",
    ],
    testimonial: {
      quote:
        "For years, my accounts were an absolute mess! Capture sorted out my accounts, and helped me relocate and set up my business in Dubai!",
      source: "Mike Thurston, YouTuber with 1.4M+ subs",
    },
    imageSrc: "/images/user/user-01.png",
  },
  {
    id: "mike-thurston",
    name: "Mike Thurston",
    title: "Founder of THRST",
    socialLinks: {
      instagram: "https://instagram.com/mikethurston",
      youtube: "https://youtube.com/mikethurston",
    },
    description: [
      "Mike Thurston is a British fitness guru who co-founded the health and fitness company Aurora Athletic. He runs a self-titled YouTube channel where he uploads vlogs and fitness training videos for over 1.3 million subscribers.",
      "Mike approached us as he had outgrown his accountant and was looking for a specialist that could manage the A-Z of his finances and taxes so he could concentrate on building his brand and content creation.",
      "We took over the headache of managing Mike's accounts, bookkeeping and taxes and provided him with just the information he needed to know how his business was performing, what cash he could take from the business and what his tax liabilities were. We also assisted Mike with moving to Dubai, setting up a company there and becoming non-resident for tax purposes in the UK so he could keep more of what he earns.",
    ],
    services: [
      "Financial Management",
      "Tax Planning",
      "Business Relocation",
      "Company Formation",
    ],
    testimonial: {
      quote:
        "For years, my accounts were an absolute mess! Capture sorted out my accounts, and helped me relocate and set up my business in Dubai!",
      source: "Mike Thurston, YouTuber with 1.4M+ subs",
    },
    imageSrc: "/images/user/user-01.png",
  },

  {
    id: "mike-thurston",
    name: "Mike Thurston",
    title: "Founder of THRST",
    socialLinks: {
      instagram: "https://instagram.com/mikethurston",
      youtube: "https://youtube.com/mikethurston",
    },
    description: [
      "Mike Thurston is a British fitness guru who co-founded the health and fitness company Aurora Athletic. He runs a self-titled YouTube channel where he uploads vlogs and fitness training videos for over 1.3 million subscribers.",
      "Mike approached us as he had outgrown his accountant and was looking for a specialist that could manage the A-Z of his finances and taxes so he could concentrate on building his brand and content creation.",
      "We took over the headache of managing Mike's accounts, bookkeeping and taxes and provided him with just the information he needed to know how his business was performing, what cash he could take from the business and what his tax liabilities were. We also assisted Mike with moving to Dubai, setting up a company there and becoming non-resident for tax purposes in the UK so he could keep more of what he earns.",
    ],
    services: [
      "Financial Management",
      "Tax Planning",
      "Business Relocation",
      "Company Formation",
    ],
    testimonial: {
      quote:
        "For years, my accounts were an absolute mess! Capture sorted out my accounts, and helped me relocate and set up my business in Dubai!",
      source: "Mike Thurston, YouTuber with 1.4M+ subs",
    },
    imageSrc: "/images/user/user-01.png",
  },
  // Add more clients here following the same structure
];

const ClientCard: FC<{ client: ClientInfo; index: number }> = ({
  client,
  index,
}) => {
  return (
    <motion.div
      className="mx-auto mb-24 w-full max-w-6xl overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-lg md:flex-row">
        <div className="flex w-full flex-col items-center p-8 md:w-1/3">
          <motion.div
            className="relative mb-6 h-40 w-40 overflow-hidden rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={client.imageSrc}
              alt={client.name}
              width={160}
              height={160}
              className="object-cover"
            />
          </motion.div>

          <h2 className="mb-2 text-3xl font-bold text-gray-800">
            {client.name}
          </h2>
          <p className="mb-4 text-lg text-indigo-600">{client.title}</p>

          <div className="mb-6 flex space-x-4">
            {client.socialLinks.instagram && (
              <motion.a
                className="text-gray-600 hover:text-indigo-600"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                href={client.socialLinks.instagram}
              >
                <FaInstagram size={24} />
              </motion.a>
            )}
            {client.socialLinks.youtube && (
              <motion.a
                className="text-gray-600 hover:text-indigo-600"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                href={client.socialLinks.youtube}
              >
                <FaYoutube size={24} />
              </motion.a>
            )}
          </div>
        </div>

        <div className="w-full p-8 md:w-2/3">
          {client.description.map((paragraph, i) => (
            <p key={i} className="mb-4 text-gray-700">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <motion.div
        className="mt-8 rounded-lg bg-indigo-50 p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 + index * 0.2 }}
      >
        <p className="mb-4 text-center text-xl font-medium italic text-indigo-800 md:text-2xl">
          "{client.testimonial.quote}"
        </p>
        <p className="text-right text-gray-600">
          — {client.testimonial.source}
        </p>
      </motion.div>
    </motion.div>
  );
};

const ClientsPage: FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-12 sm:px-6 lg:px-8">
      <motion.div
        className="mb-16 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="mb-6 text-4xl font-extrabold text-gray-900 md:text-5xl">
          Meet Our Success Stories
        </h1>
        <p className="mx-auto max-w-3xl text-xl text-gray-600">
          We work with innovators and industry leaders who trust us with their
          financial success.
        </p>
      </motion.div>

      <div className="space-y-12">
        {clientData.map((client, index) => (
          <ClientCard key={client.id} client={client} index={index} />
        ))}
      </div>

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
        <motion.button
          className="rounded-full bg-blue-600 px-8 py-3 font-bold text-white shadow-lg hover:bg-blue-700"
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          Book a Consultation
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ClientsPage;
