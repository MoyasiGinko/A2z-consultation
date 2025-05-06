interface PackageFeature {
  text: string;
}

interface PricingPackage {
  name: string;
  tagline: string;
  text: string;
  color: string;
  ring: string;
  shadowColor: string;
  features: PackageFeature[];
  description: string;
  alwaysExpanded?: boolean;
}

const packages: PricingPackage[] = [
  {
    name: "Gold",
    tagline:
      "For employers who need minimal assistance with the visa application process.",
    color: "#08A1DA", // Modified to moderate dark light teal
    ring: "#08A1DA", // Matching ring color
    text: "#fff800",
    shadowColor: "rgba(8, 161, 218, 0.06)", // Updated shadow to match the #08A1DA color
    features: [
      { text: "Initial consultation to assess candidate eligibility" },
      {
        text: "Guidance on required documents for the Skilled Worker Visa application",
      },
      { text: "Step-by-step instructions for completing the application" },
      { text: "General email support for queries" },
      { text: "Guidance on visa application fees and timelines" },
    ],
    description:
      "Our Gold package provides essential guidance and support for employers who need minimal assistance with the Skilled Worker Visa application process, including eligibility assessment and document guidance.",
  },
  {
    name: "Platinum",
    tagline:
      "For employers who require hands-on support in submitting a successful visa application.",
    color: "#7986cb",
    ring: "#7986cb",
    text: "#fff",
    shadowColor: "rgba(121, 134, 203, 0.1)", // RGB version of #7986cb with alpha
    features: [
      { text: "Everything in the Gold Package, plus:" },
      {
        text: "Full preparation and submission of the Skilled Worker Visa application",
      },
      { text: "Review and drafting of supporting documents" },
      {
        text: "Assistance with Certificate of Sponsorship (CoS) allocation and documentation",
      },
      {
        text: "Pre-submission compliance check to ensure all requirements are met",
      },
      { text: "Ongoing support for 3 months post-submission" },
    ],
    description:
      "Our Platinum package offers comprehensive hands-on support throughout the entire Skilled Worker Visa application process, including document preparation, submission assistance, and ongoing support after submission.",
  },
  {
    name: "VIP",
    tagline:
      "For employers who want a fully managed visa application process, including candidate preparation.",
    color: "#ffb900",
    ring: "#ffb900",
    text: "#000",
    shadowColor: "rgba(255, 185, 0, 0.1)", // RGB version of #ffb900 with alpha
    features: [
      { text: "Everything in the Platinum Package, plus:" },
      { text: "Priority handling of the application process" },
      { text: "Direct liaison with the Home Office for complex queries" },
      {
        text: "Candidate preparation for the visa application interview (if applicable)",
      },
      {
        text: "Fast-tracked assistance with additional Skilled Worker Visa applications",
      },
      { text: "Dedicated immigration consultant for 6 months" },
    ],
    description:
      "Our VIP package provides a fully managed service with priority handling, direct Home Office liaison, and dedicated consultant support for employers who want the highest level of assistance with Skilled Worker Visa applications.",
  },
];

export default packages;
