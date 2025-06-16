"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaInstagram, FaYoutube, FaPlay, FaChevronRight } from "react-icons/fa";
import { FC, useState, useEffect } from "react";
import { clientData, ClientInfo } from "./ClientsData"; // Adjust the import path as necessary

// Updated VideoModal component
const VideoModal: FC<{
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  clientName: string;
}> = ({ isOpen, onClose, videoUrl, clientName }) => {
  // Add loading state
  const [isLoading, setIsLoading] = useState(true);

  // Reset loading state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => setIsLoading(true), 300);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Add parameters to ensure highest quality and accessibility
  const enhancedVideoUrl = videoUrl.includes("?")
    ? `${videoUrl}&autoplay=1&rel=0&modestbranding=1`
    : `${videoUrl}?autoplay=1&rel=0&modestbranding=1`;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      <motion.div
        className="relative w-full max-w-4xl rounded-xl bg-black shadow-2xl"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        {/* Loading indicator */}
        {isLoading && (
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-sky-500 border-t-transparent"></div>
          </div>
        )}

        <div className="relative w-full pt-[56.25%]">
          <iframe
            src={enhancedVideoUrl}
            className="absolute inset-0 h-full w-full rounded-t-xl"
            title={`${clientName}'s Testimonial Video`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={() => setIsLoading(false)}
          />
        </div>

        <div className="flex items-center justify-between rounded-b-xl bg-gray-900 p-4">
          <h3 className="text-xl font-medium text-white">
            {clientName}'s Success Story
          </h3>
          <button
            onClick={onClose}
            className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ClientCard: FC<{ client: ClientInfo; index: number }> = ({
  client,
  index,
}) => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <>
      <motion.div
        className="mx-auto mb-32 w-full max-w-6xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
      >
        {/* Client Profile Section */}
        <div
          className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} overflow-hidden rounded-2xl bg-white shadow-xl`}
        >
          {/* Left side - Profile */}
          <div className="relative flex w-full flex-col items-center bg-gradient-to-br from-sky-50 to-indigo-50 p-8 lg:w-1/3">
            <span className="absolute left-4 top-4 rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-800">
              Client #{index + 1}
            </span>

            <motion.div
              className="relative mb-6 h-48 w-48 overflow-hidden rounded-full border-4 border-white shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={client.imageSrc}
                alt={client.name}
                fill
                sizes="(max-width: 768px) 100vw, 192px"
                className="object-cover"
                priority
              />
            </motion.div>

            <h2 className="mb-2 text-3xl font-bold text-gray-800">
              {client.name}
            </h2>
            <p className="mb-4 text-lg font-medium text-sky-600">
              {client.title}
            </p>

            {/* <div className="mb-6 flex space-x-4">
              {client.socialLinks.instagram && (
                <motion.a
                  className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-3 text-white shadow-md"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  href={client.socialLinks.instagram}
                >
                  <FaInstagram size={20} />
                </motion.a>
              )}
              {client.socialLinks.youtube && (
                <motion.a
                  className="rounded-full bg-gradient-to-r from-red-500 to-red-700 p-3 text-white shadow-md"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  href={client.socialLinks.youtube}
                >
                  <FaYoutube size={20} />
                </motion.a>
              )}
            </div> */}

            {/* Services List */}
            <div className="w-full rounded-lg bg-white p-4 shadow-inner">
              <h3 className="mb-3 text-center text-sm font-bold uppercase text-gray-500">
                Services Provided
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {client.services.map((service, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Description */}
          <div className="w-full p-8 lg:w-2/3">
            <h3 className="mb-6 text-xl font-semibold text-gray-800">
              Client Story
            </h3>
            {client.description.map((paragraph, i) => (
              <p key={i} className="mb-4 leading-relaxed text-gray-600">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Testimonial Section with Video */}
        <motion.div
          className="mt-8 overflow-hidden rounded-3xl bg-gradient-to-b from-sky-100/50 via-sky-400/50 to-sky-500/50 p-8 shadow-xl backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 + index * 0.2 }}
        >
          <div
            className={`grid ${
              client.testimonial.videoUrl ? "lg:grid-cols-2" : "grid-cols-1"
            } gap-6`}
          >
            {/* Quote Section */}
            <motion.div
              className="rounded-2xl bg-gradient-to-br from-sky-600/50 to-indigo-700/50 p-8 text-white shadow-lg transition-shadow hover:shadow-xl"
              whileHover={{ translateY: -5 }}
            >
              <svg
                className="mb-4 h-12 w-12 text-sky-300/50"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>

              <p className="mb-6 text-xl font-medium italic leading-relaxed text-white md:text-2xl">
                "{client.testimonial.quote}"
              </p>

              <div className="flex items-center justify-between">
                <p className="font-medium text-sky-100">
                  — {client.testimonial.source}
                </p>
              </div>
            </motion.div>

            {/* Video Section */}
            {client.testimonial.videoUrl && (
              <motion.div
                className="relative overflow-hidden rounded-2xl bg-gray-900 shadow-lg transition-shadow hover:shadow-xl"
                whileHover={{ translateY: -5 }}
              >
                <div className="relative h-full min-h-[300px] w-full">
                  {client.testimonial.videoThumbnail ? (
                    <>
                      <Image
                        src={client.testimonial.videoThumbnail}
                        alt={`${client.name}'s testimonial`}
                        fill
                        className="object-cover opacity-80"
                      />
                      <div className="absolute inset-0 bg-black/50" />
                    </>
                  ) : (
                    <>
                      <div className="relative h-full w-full">
                        <iframe
                          src={`${client.testimonial.videoUrl}?controls=0&showinfo=0&rel=0&modestbranding=1`}
                          title={`${client.name}'s testimonial thumbnail`}
                          allowFullScreen
                          className="absolute inset-0 h-full w-full"
                        />
                        <div
                          className="absolute inset-0 bg-black/50"
                          onClick={(e) => e.preventDefault()}
                        />
                      </div>
                    </>
                  )}

                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.button
                      className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 text-sky-600 shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      onClick={() => setVideoModalOpen(true)}
                      aria-label="Play video"
                    >
                      <FaPlay size={30} className="ml-1" />
                    </motion.button>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 z-10 flex justify-center p-6 lg:hidden">
                    <motion.button
                      className="inline-flex items-center gap-2 rounded-full bg-white/90 px-6 py-3 text-sm font-medium text-sky-700 shadow-md"
                      whileHover={{ scale: 1.05 }}
                      onClick={() => setVideoModalOpen(true)}
                    >
                      <span>Watch Full Story</span>
                      <FaChevronRight size={12} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>

      {/* Video Modal */}
      {client.testimonial.videoUrl && (
        <VideoModal
          isOpen={videoModalOpen}
          onClose={() => setVideoModalOpen(false)}
          videoUrl={client.testimonial.videoUrl}
          clientName={client.name}
        />
      )}
    </>
  );
};

const ClientsPage: FC = () => {
  const industries = [
    "Hospitality & Leisure Businesses",
    "Engineering Firms",
    "Charity & Religious Organisations",
    "IT Firms",
    "Dental Practices",
    "Health & Care Sector",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-16 sm:px-6 lg:px-8">
      <motion.div
        className="mb-20 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-block rounded-full bg-sky-100 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-sky-700">
          Success Stories
        </span>
        <h1 className="mb-6 mt-3 text-3xl font-extrabold text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl">
          See How We've Helped Our Clients
        </h1>
        <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-600">
          Read these real success stories from clients who've transformed their
          businesses with our expert guidance.
        </p>

        {/* Industries Section */}
        <motion.div
          className="mx-auto max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="mb-6 text-lg font-semibold text-gray-700">
            Trusted by Industry Leaders Across
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-full border border-sky-200/50 bg-gradient-to-r from-sky-500/10 to-indigo-500/10 px-6 py-3 shadow-sm transition-all duration-300 hover:shadow-md"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 8px 20px rgba(14, 165, 233, 0.15)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-sky-400/20 to-indigo-400/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="relative text-sm font-medium text-gray-700 transition-colors duration-300 group-hover:text-sky-700">
                  {industry}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <div className="space-y-8">
        {clientData.map((client, index) => (
          <ClientCard key={client.id} client={client} index={index} />
        ))}
      </div>

      <motion.div
        className="mx-auto mt-32 max-w-6xl rounded-2xl bg-gradient-to-r from-sky-600 to-indigo-700 p-12 text-center shadow-xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="mb-6  text-3xl font-bold text-white sm:text-3xl md:text-4xl ">
          Ready to Write Your Success Story?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-sky-100">
          Join our growing list of satisfied clients and take your business to
          the next level with our expert consultation services.
        </p>
        <a href="/get-in-touch">
          <motion.button
            className="text-md min-w-50 rounded-full bg-white px-4 py-4 text-center font-bold leading-tight text-sky-700 shadow-lg transition-all hover:shadow-xl md:px-6 md:text-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 25px rgba(0,0,0,0.2)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            Schedule Your Free Consultation
          </motion.button>
        </a>
      </motion.div>
    </div>
  );
};

export default ClientsPage;
