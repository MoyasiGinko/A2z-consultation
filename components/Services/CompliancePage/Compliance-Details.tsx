"use client";
import React, { useState, useRef, useEffect } from "react";
import Modal from "./DetailsModal";
import services from "./DetailsData";

interface ServiceCardProps {
  number: number;
  title: string;
  description: string;
  bgColor: string;
  fullDetails: string;
  onOpenModal: (serviceNumber: number) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  number,
  title,
  description,
  bgColor,
  fullDetails,
  onOpenModal,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Handle card animations
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(card);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`${bgColor} relative flex h-full min-h-[300px] flex-col rounded-lg shadow-md transition-all duration-500 hover:scale-105 hover:shadow-xl`}
      style={{
        opacity: 0,
        transform: "translateY(20px)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
      }}
    >
      {/* Diamond badge in top left corner */}
      <div className="absolute -left-2 -top-2">
        <div className="flex h-10 w-10 rotate-45 transform items-center justify-center border-4 border-white bg-blue-600 text-white outline-none">
          <span className="-rotate-45 text-lg font-bold">{number}</span>
        </div>
      </div>

      <div className="flex-grow px-6 pb-4 pt-12">
        {/* Title at the top with animation */}
        <h3 className="mb-3 text-lg font-bold text-black transition-all duration-300 ease-in-out hover:translate-x-1">
          {title}
        </h3>

        {/* Description text with more height */}
        <p className="min-h-[100px] text-xs leading-relaxed text-black">
          {description}
        </p>
      </div>

      {/* Buttons at the bottom */}
      <div className="flex justify-center px-6 pb-6">
        <button
          className={`px-4 py-2 text-xs font-medium text-black shadow transition-all duration-300 hover:px-5 hover:text-white hover:shadow-md`}
          style={{
            transition:
              "background-color 0.3s, transform 0.3s, box-shadow 0.3s, padding 0.3s",
            background: `linear-gradient(45deg, #1e90ff, #00bfff)`,
          }}
          onClick={() => onOpenModal(number)}
        >
          More details
        </button>
      </div>
    </div>
  );
};

const ComplianceDetails: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [modalProps, setModalProps] = useState({
    isOpen: false,
    service: {
      title: "",
      whyItMatters: "",
      howWeHelp: {
        intro: "",
        points: [""],
      },
      conclusion: "",
      bgColor: "",
    },
  });

  const openModal = (serviceNumber: number) => {
    const service = services.find((s) => s.number === serviceNumber);
    if (service) {
      setModalProps({
        isOpen: true,
        service: {
          title: service.title,
          whyItMatters: service.whyItMatters,
          howWeHelp: service.howWeHelp,
          conclusion: service.conclusion,
          bgColor: service.bgColor,
        },
      });
    }
  };

  const closeModal = () => {
    setModalProps((prev) => ({ ...prev, isOpen: false }));
  };

  // Title animation
  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            title.style.opacity = "1";
            title.style.transform = "translateX(0)";
          }
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(title);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="w-full bg-gradient-to-b from-slate-50 via-sky-100 to-sky-200 py-12 shadow-[0_1px_2px_rgba(0,0,0,0.05),0_-1px_2px_rgba(0,0,0,0.05),1px_0_2px_rgba(0,0,0,0.05),-1px_0_2px_rgba(0,0,0,0.05)] md:bg-gradient-to-r md:from-slate-50 md:via-sky-100 md:to-sky-200">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col items-center md:flex-row md:items-center">
            {/* Left side - Title with animation */}
            <div className="mb-8 text-center md:mb-0 md:w-1/4 md:pr-8 md:text-left">
              <h2
                ref={titleRef}
                className="bg-gradient-to-r from-sky-600 via-sky-700 to-sky-800 bg-clip-text text-3xl font-bold text-transparent sm:text-3xl md:text-4xl lg:text-5xl"
                style={{
                  opacity: 0,
                  transform: "translateX(-20px)",
                  transition: "opacity 0.8s ease, transform 0.8s ease",
                }}
              >
                OUR TOP NOTCH
                <br />
                SERVICES IN DETAILS
              </h2>
            </div>

            {/* Right side - Cards */}
            <div className="md:w-3/4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {services.map((service) => (
                  <ServiceCard
                    key={service.number}
                    number={service.number}
                    title={service.title}
                    description={service.description}
                    bgColor={service.bgColor}
                    fullDetails={service.fullDetails}
                    onOpenModal={openModal}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal placed at the root level of the component tree */}
      <Modal
        isOpen={modalProps.isOpen}
        onClose={closeModal}
        service={modalProps.service}
      />
    </>
  );
};

export default ComplianceDetails;
