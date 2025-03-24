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
    tagline: "Essential compliance support",
    color: "#3d6582",
    ring: "#3d6582",
    text: "#ffb900",
    shadowColor: "rgba(135, 206, 235, 0.1)", // Sky color with alpha
    features: [
      { text: "Initial Compliance Consultation & Risk Assessment" },
      { text: "Appoint one of our Technical Consultants as Level 1 User" },
      {
        text: "SMS Portal Management which includes: Reporting Changes, Key Personnel Updates, Licence Renewal",
      },
      {
        text: "Up to 2 CoS Application Annually & Basic Support for Compliance Guidance",
      },
      { text: "General email support for compliance queries from Home Office" },
      { text: "General Advice & Support" },
    ],
    description:
      "Our Gold compliance package provides essential support to help you maintain basic sponsor license compliance, including initial assessment, SMS portal management, and limited CoS application support.",
  },
  {
    name: "Platinum",
    tagline: "Enhanced compliance management",
    color: "#7986cb",
    ring: "#7986cb",
    text: "#fff",
    shadowColor: "rgba(121, 134, 203, 0.1)", // RGB version of #7986cb with alpha
    features: [
      { text: "All Services with Gold" },
      {
        text: "Fully Digital HR Service with Real-time visa expiry and compliance reminders",
      },
      {
        text: "Maintain & Update HR Documentation of all Employees including online & physical RTW checks",
      },
      {
        text: "Home Office audit preparation, including mock audits and document reviews",
      },
      {
        text: "Continuous Maintenance of Compliance with Home Office to avoid penalties.",
      },
      {
        text: "Unlimited CoS Application & Comprehensive Support with HR Compliance",
      },
      { text: "Provide Monthly Update on Remaning CoS" },
      { text: "Provide Monthly Update on Compliance Health Check" },
    ],
    description:
      "Our Platinum compliance package offers comprehensive compliance management with digital HR services, unlimited CoS applications, regular updates, and proactive audit preparation to ensure ongoing compliance.",
  },
  {
    name: "VIP",
    tagline: "Premium compliance and recruitment support",
    color: "#ffb900",
    ring: "#ffb900",
    text: "#000",
    shadowColor: "rgba(255, 185, 0, 0.1)", // RGB version of #ffb900 with alpha
    features: [
      { text: "All With Diamond" }, // Note: There seems to be a typo in the original data; "Diamond" should likely be "Platinum"
      { text: "Priority handling of the CoS Application" },
      { text: "Fast-tracked assistance with the CoS assignments" },
      {
        text: "Assist with Recruitment Process for New Candidates as per Compliance",
      },
      { text: "Unlimited CoS Assign & Cancellation Support" },
      {
        text: "Comprehensive support on Documentation from Finding Candidates up to Assigning CoS.",
      },
      { text: "Direct Home Office liaison support for any queries." },
    ],
    description:
      "Our VIP compliance package delivers the highest level of support including priority CoS handling, recruitment assistance, unlimited CoS support, and direct Home Office liaison to ensure complete compliance and streamlined processes.",
  },
];

export default packages;
