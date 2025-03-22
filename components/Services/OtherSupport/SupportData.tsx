type SupportTab = {
  id: number;
  title: string;
  icon: string;
  content: {
    heading: string;
    description: string;
    image: string;
    mainContent?: {
      title: string;
      paragraphs: string[];
    }[];
    features: {
      title: string;
      description: string;
      icon: string;
    }[];
    callToAction?: {
      title: string;
      description: string;
    };
  };
};

export const supportTabs: SupportTab[] = [
  {
    id: 1,
    title: "Visit Visa",
    icon: "/icons/visit-visa.svg",
    content: {
      heading: "Visit Visa Support",
      description:
        "The Visit Visa is designed for individuals who wish to visit the UK for tourism, leisure, business, or to meet family and friends. It allows you to stay in the UK for a limited period, typically up to six months, depending on the purpose of your visit.",
      image: "/images/features/blogs-banner.png",
      mainContent: [
        {
          title: "Types of Visit Visas",
          paragraphs: [
            "Standard Visitor Visa: This visa category is for general tourism, visiting family or friends, or engaging in short-term business-related activities in the UK.",
            "Family Visitor Visa: Designed for individuals who wish to visit close family members residing in the UK.",
            "Business Visitor Visa: For those who need to attend business meetings, conferences, or perform specific business-related activities in the UK.",
            "Marriage Visitor Visa: Intended for individuals planning to get married or enter into a civil partnership in the UK.",
            "Permitted Paid Engagement Visa: This visa allows individuals invited as experts or artists to attend specific events or engagements in the UK.",
          ],
        },
        {
          title: "Key Eligibility Criteria",
          paragraphs: [
            "Valid Purpose: You must have a valid reason for your visit, such as tourism, family visit, business, or other permitted activities.",
            "Temporary Intent: You must demonstrate that your visit is temporary, and you intend to leave the UK at the end of your authorized stay.",
            "Funds for the Trip: You must have sufficient funds to cover your travel and living expenses during your stay in the UK.",
            "Ties to Home Country: You must show strong ties to your home country, such as employment, family, or property, to ensure your return after the visit.",
            "No Intention to Work or Settle: A Visit Visa does not permit work or settlement in the UK. You must not engage in any paid or unpaid work during your visit.",
          ],
        },
      ],
      features: [
        {
          title: "Application Guidance",
          description:
            "Step-by-step assistance with visa application forms and online submission process",
          icon: "/icons/application.svg",
        },
        {
          title: "Document Review",
          description:
            "Thorough review of supporting documentation including travel itinerary and financial evidence",
          icon: "/icons/document.svg",
        },
        {
          title: "Interview Preparation",
          description:
            "Comprehensive preparation for visa interviews with practice sessions and guidance",
          icon: "/icons/interview.svg",
        },
      ],
      callToAction: {
        title: "Start Your UK Visit Journey",
        description:
          "For more information or to start your Visit Visa application, our team is ready to assist you on your journey of exploration and discovery in the UK!",
      },
    },
  },
  {
    id: 2,
    title: "Adult Dependent Relative (ADR) Visa",
    icon: "/icons/adr-visa.svg",
    content: {
      heading: "Adult Dependent Relative (ADR) Visa",
      description:
        "The Adult Dependent Relative Visa is intended for non-EEA (European Economic Area) adult individuals who are dependent on a close family member settled in the UK. This visa allows eligible dependents to join their family members in the UK and receive the care and support they need.",
      image: "/images/features/blogs-banner.png",
      mainContent: [
        {
          title: "Key Eligibility Criteria",
          paragraphs: [
            "Dependency: You must be the parent, grandparent, or relative over the age of 18 and dependent on a close family member who is a British citizen or has settled status in the UK.",
            "Dependency Requirement: You must require long-term personal care and assistance to perform everyday tasks due to a physical or mental health condition.",
            "No Suitable Care in Home Country: It must be proven that the required care is not available or affordable in your home country, and your UK family member can adequately support and provide for your needs.",
            "Financial Requirement: Your sponsoring family member in the UK must meet the minimum income threshold to support you without relying on public funds.",
          ],
        },
        {
          title: "Visa Validity and Extensions",
          paragraphs: [
            "The initial Adult Dependent Relative Visa is usually granted for 30 months. After this period, you can apply for an extension, allowing you to stay in the UK for another 30 months.",
            "After a continuous period of five years in the UK on this visa, you may become eligible to apply for Indefinite Leave to Remain (ILR) and eventually British citizenship.",
          ],
        },
      ],
      features: [
        {
          title: "Eligibility Assessment",
          description:
            "Thorough evaluation of your dependency status and qualification for the ADR visa",
          icon: "/icons/assessment.svg",
        },
        {
          title: "Documentation Support",
          description:
            "Comprehensive assistance with gathering and preparing all required evidence of dependency",
          icon: "/icons/document-support.svg",
        },
        {
          title: "Application Strategy",
          description:
            "Personalized approach to demonstrating the care needs and UK family support arrangements",
          icon: "/icons/strategy.svg",
        },
      ],
      callToAction: {
        title: "Reunite with Your Family in the UK",
        description:
          "If you have any questions or need assistance with your Adult Dependent Relative Visa application, our dedicated team is here to help!",
      },
    },
  },
  {
    id: 3,
    title: "Student Visa",
    icon: "/icons/student-visa.svg",
    content: {
      heading: "Student Visa Services",
      description:
        "The Student visa (previously Tier 4) allows you to study in the UK at an approved educational institution. This visa category is essential for international students planning to pursue their education at UK universities or colleges.",
      image: "/images/features/blogs-banner.png",
      mainContent: [
        {
          title: "Key Requirements",
          paragraphs: [
            "Confirmed Place: You must have an unconditional offer from a licensed UK education provider",
            "English Language Skills: You need to demonstrate English language proficiency",
            "Financial Requirements: Proof of sufficient funds to cover tuition and living costs",
            "Academic Qualifications: Previous academic achievements must meet course requirements",
            "Genuine Student: You must prove you are a genuine student intending to study",
          ],
        },
        {
          title: "Visa Benefits",
          paragraphs: [
            "Study at recognized UK institutions",
            "Possibility to work part-time during term time",
            "Full-time work allowed during holidays",
            "Bring dependents in certain circumstances",
            "Potential pathway to post-study work opportunities",
          ],
        },
      ],
      features: [
        {
          title: "Application Support",
          description:
            "Complete guidance through the Student visa application process",
          icon: "/icons/application.svg",
        },
        {
          title: "Document Preparation",
          description:
            "Assistance with preparing and organizing all required documentation",
          icon: "/icons/document.svg",
        },
        {
          title: "CAS Guidance",
          description:
            "Support with obtaining and understanding your CAS from the institution",
          icon: "/icons/cas.svg",
        },
      ],
      callToAction: {
        title: "Start Your UK Education Journey",
        description:
          "Contact us today to begin your journey towards studying in the UK!",
      },
    },
  },
  {
    id: 4,
    title: "Spouse Visa",
    icon: "/icons/spouse-visa.svg",
    content: {
      heading: "Spouse Visa Support",
      description:
        "The UK Spouse Visa allows married partners of British citizens or those with settled status to live in the UK. This visa is crucial for families wanting to live together in the UK.",
      image: "/images/features/blogs-banner.png",
      mainContent: [
        {
          title: "Eligibility Requirements",
          paragraphs: [
            "Valid Marriage: Must be legally married to a British citizen or person with settled status",
            "Financial Requirement: Combined income of at least £18,600 per year",
            "English Language: Must meet minimum English language requirements",
            "Accommodation: Proof of adequate housing in the UK",
            "Genuine Relationship: Evidence of a genuine and subsisting marriage",
          ],
        },
        {
          title: "Visa Duration and Settlement",
          paragraphs: [
            "Initial visa granted for 2.5 years",
            "Can be extended for another 2.5 years",
            "Eligible for settlement after 5 years continuous residence",
            "Right to work and study in the UK",
            "Access to NHS healthcare",
          ],
        },
      ],
      features: [
        {
          title: "Financial Assessment",
          description:
            "Detailed review of financial requirements and documentation",
          icon: "/icons/financial.svg",
        },
        {
          title: "Document Preparation",
          description:
            "Comprehensive assistance with gathering supporting evidence",
          icon: "/icons/document.svg",
        },
        {
          title: "Application Support",
          description:
            "Full guidance through the application process and requirements",
          icon: "/icons/application.svg",
        },
      ],
      callToAction: {
        title: "Unite Your Family in the UK",
        description:
          "Let us help you bring your spouse to the UK. Contact our expert team today!",
      },
    },
  },
  {
    id: 5,
    title: "Indefinite Leave to Remain (ILR)",
    icon: "/icons/ilr.svg",
    content: {
      heading: "Indefinite Leave to Remain (ILR) Information",
      description:
        "Indefinite Leave to Remain (ILR) is a form of permanent residence in the UK. It allows you to live and work in the UK without any immigration restrictions.",
      image: "/images/features/blogs-banner.png",
      mainContent: [
        {
          title: "Eligibility Requirements",
          paragraphs: [
            "Continuous Residence: Usually 5 years of continuous residence in the UK",
            "No Excessive Absences: Not been outside the UK for more than 180 days in any 12 months",
            "English Language: Pass an approved English language test",
            "Life in the UK Test: Successfully complete the Life in the UK test",
            "Good Character: No serious criminal convictions or immigration violations",
          ],
        },
        {
          title: "Benefits of ILR",
          paragraphs: [
            "Permanent right to live and work in the UK",
            "No more visa extensions needed",
            "Access to all public funds and benefits",
            "Freedom to study without restrictions",
            "Pathway to British citizenship",
          ],
        },
      ],
      features: [
        {
          title: "Eligibility Assessment",
          description: "Comprehensive review of your qualification for ILR",
          icon: "/icons/assessment.svg",
        },
        {
          title: "Documentation Support",
          description:
            "Assistance with gathering and organizing required evidence",
          icon: "/icons/document.svg",
        },
        {
          title: "Application Guidance",
          description: "Expert support throughout the ILR application process",
          icon: "/icons/guidance.svg",
        },
      ],
      callToAction: {
        title: "Secure Your Permanent UK Status",
        description:
          "Ready to apply for ILR? Contact us to start your journey to permanent residence!",
      },
    },
  },
  {
    id: 6,
    title: "General Immigration Advice",
    icon: "/icons/advice.svg",
    content: {
      heading: "General Immigration Advice",
      description:
        "Our comprehensive immigration advice service covers all aspects of UK immigration law, helping you navigate complex visa requirements and procedures.",
      image: "/images/features/blogs-banner.png",
      mainContent: [
        {
          title: "Services Offered",
          paragraphs: [
            "Initial consultation and case assessment",
            "Visa category recommendation",
            "Application strategy planning",
            "Document checklist and preparation",
            "Appeal and administrative review guidance",
          ],
        },
        {
          title: "Areas of Expertise",
          paragraphs: [
            "All types of visa applications",
            "Immigration rule interpretations",
            "Complex case resolution",
            "Emergency and time-sensitive applications",
            "Appeals and judicial reviews",
          ],
        },
      ],
      features: [
        {
          title: "Expert Consultation",
          description:
            "Professional advice from experienced immigration specialists",
          icon: "/icons/consultation.svg",
        },
        {
          title: "Case Assessment",
          description:
            "Thorough evaluation of your immigration situation and options",
          icon: "/icons/assessment.svg",
        },
        {
          title: "Strategic Planning",
          description: "Development of personalized immigration strategy",
          icon: "/icons/planning.svg",
        },
      ],
      callToAction: {
        title: "Get Expert Immigration Advice",
        description:
          "Contact us today for professional guidance on your UK immigration matters!",
      },
    },
  },
];
