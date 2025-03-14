// ServiceCards.tsx
import React from "react";

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
      className={`${bgColor} relative flex h-full flex-col rounded-lg shadow-md`}
    >
      {/* Diamond badge in top left corner */}
      <div className="absolute -left-2 -top-2">
        <div className="flex h-10 w-10 rotate-45 transform items-center justify-center border-4 border-white bg-blue-600 text-white  outline-none">
          <span className="-rotate-45 text-lg font-bold">{number}</span>
        </div>
      </div>

      <div className="flex-grow px-6 pb-4 pt-12">
        {/* Title at the top */}
        <h3 className="mb-2 text-lg font-bold text-black">{title}</h3>

        {/* Description text */}
        <p className="text-xs leading-relaxed text-black">{description}</p>
      </div>

      {/* Button at the bottom */}
      <div className="px-6 pb-6">
        <button className="rounded bg-white px-4 py-1 text-xs font-medium text-gray-800 shadow hover:bg-gray-50">
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
        "Time management is very good for your business because the human recourses in your company will be well structured so that the performance of each person will be maximized and directed.",
      bgColor: "bg-blue-200",
    },
    {
      number: 2,
      title: "SMS Portal Management",
      description:
        "Being disciplined is a good way to organize your company ecosystem. Systems with tips, all business activities that occur will be well organized.",
      bgColor: "bg-blue-100",
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
    <div className="w-full bg-gray-200 py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center md:flex-row md:items-center">
          {/* Left side - Title */}
          <div className="mb-8 md:mb-0 md:w-1/4 md:pr-8">
            <h2 className="text-2xl font-bold text-blue-900">
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
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplianceDetails;
