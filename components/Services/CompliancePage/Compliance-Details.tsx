// ServiceCards.tsx
import React from "react";
import Image from "next/image";

interface ServiceCardProps {
  number: number;
  title: string;
  description: string;
  bgColor: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  number,
  title,
  description,
  bgColor,
}) => {
  return (
    <div
      className={`overflow-hidden rounded-lg shadow-md ${bgColor} flex h-full flex-col`}
    >
      <div className="flex-grow p-6">
        <div className="mb-4 flex items-center">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
            {number}
          </div>
          <h3 className="ml-3 text-lg font-bold">{title}</h3>
        </div>
        <p className="text-sm">{description}</p>
      </div>
      <div className="p-4">
        <button className="rounded bg-white px-4 py-2 text-sm font-semibold text-gray-800 shadow hover:bg-gray-100">
          Get in touch
        </button>
      </div>
    </div>
  );
};

const ComplianceDetails: React.FC = () => {
  const services = [
    {
      number: 1,
      title: "Digital HR Services",
      description:
        "Time management is an essential for your business because the human resources in your company will be well informed of work tasks. The performance of each person will be maximized and directed.",
      bgColor: "bg-blue-100",
    },
    {
      number: 2,
      title: "SMS Portal Management",
      description:
        "Being disciplined is a good way to organize your company ecosystem. Systems with tips, all business activities that occur will be well organized.",
      bgColor: "bg-cyan-200",
    },
    {
      number: 3,
      title: "Intensive Interview & Mock session for Audits",
      description:
        "Learning from mistakes is very good because it means the mistakes we make today become lessons for us tomorrow.",
      bgColor: "bg-green-100",
    },
  ];

  return (
    <div className="bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-center text-2xl font-bold text-blue-900 sm:mb-12 sm:text-3xl">
          OUR TOP NOTCH <br />
          SERVICES IN DETAILS
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.number}
              number={service.number}
              title={service.title}
              description={service.description}
              bgColor={service.bgColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComplianceDetails;
