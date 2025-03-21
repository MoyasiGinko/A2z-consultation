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
      image: "/images/services/visit-visa.jpg",
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
    title: "Adult Dependent Relative Visa",
    icon: "/icons/adr-visa.svg",
    content: {
      heading: "Adult Dependent Relative (ADR) Visa",
      description:
        "The Adult Dependent Relative Visa is intended for non-EEA (European Economic Area) adult individuals who are dependent on a close family member settled in the UK. This visa allows eligible dependents to join their family members in the UK and receive the care and support they need.",
      image: "/images/services/adr-visa.jpg",
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
        "We offer comprehensive services to help aspiring students achieve their academic dreams by providing expert assistance in securing offers from reputable UK universities. We provide full support in securing CAS letters from universities and obtaining student visas from the UKBA.",
      image: "/images/services/student-visa.jpg",
      mainContent: [
        {
          title: "Our University Offer Services",
          paragraphs: [
            "Personalised Course Recommendations: Our experienced team will understand your academic interests, career goals, and preferences to provide personalized course recommendations that align with your aspirations.",
            "Guidance on University Selection: With a vast network of partner universities, we can guide you in choosing the best institutions that match your academic profile and desired course of study.",
            "Essay and Personal Statement Assistance: Crafting a compelling personal statement is essential to stand out in university applications. Our experts will help you create a powerful statement that reflects your unique qualities and motivation.",
            "Confirmation of Acceptance for Studies (CAS): Once you receive an offer, we will guide you through the process of obtaining the Confirmation of Acceptance for Studies (CAS) required for your Student Visa application.",
          ],
        },
        {
          title: "Key Eligibility Criteria",
          paragraphs: [
            "Course Offer: You must have an unconditional offer of a place on a full-time course at a recognized UK educational institution that holds a valid sponsor license.",
            "Confirmation of Acceptance for Studies (CAS): Once you've received an offer, your institution will provide you with a unique CAS reference number for your visa application.",
            "English Language Proficiency: You may need to demonstrate your English language proficiency, depending on the course and institution's requirements.",
            "Financial Capability: You must prove that you can financially support yourself during your studies, covering both tuition fees and living expenses.",
          ],
        },
      ],
      features: [
        {
          title: "CAS Guidance",
          description:
            "Expert assistance with obtaining your Confirmation of Acceptance for Studies from your chosen institution",
          icon: "/icons/cas.svg",
        },
        {
          title: "Financial Requirements",
          description:
            "Complete guidance on preparing and presenting financial evidence to meet visa requirements",
          icon: "/icons/financial.svg",
        },
        {
          title: "Application Support",
          description:
            "End-to-end assistance with the visa application process, biometrics, and document submissions",
          icon: "/icons/application-support.svg",
        },
      ],
      callToAction: {
        title: "Start Your UK Education Journey",
        description:
          "If you have any questions or need assistance with your Student Visa application or university offer process, our dedicated team is here to help!",
      },
    },
  },
  {
    id: 4,
    title: "Graduate Visa",
    icon: "/icons/graduate-visa.svg",
    content: {
      heading: "Graduate Visa Support",
      description:
        "The UK Graduate visa allows international students to remain in the UK for a limited period after completing their studies. This post-study work visa is designed for international students who have successfully finished a course of study at the UK bachelor's degree-level or above with a Home Office-approved higher education provider.",
      image: "/images/services/graduate-visa.jpg",
      mainContent: [
        {
          title: "Key Benefits",
          paragraphs: [
            "No Certificate of Sponsorship (CoS) Required: Unlike other work visas, you don't need a job offer or sponsorship from an employer.",
            "Work Flexibility: This visa may be used to work in any capacity or to stay in the UK while looking for employment.",
            "Earning Potential: The holder of a Graduate Visa will be permitted to work and earn money if the visa is granted.",
            "Pathway to Settlement: This visa provides valuable time to secure sponsored employment that could lead to settlement in the UK.",
          ],
        },
        {
          title: "Eligibility Requirements",
          paragraphs: [
            "Successfully completed a bachelor's degree, postgraduate degree, or other eligible qualification from an approved UK institution.",
            "Current Student visa holder at the time of application.",
            "Studied with a Home Office licensed student sponsor.",
            "Have not previously been granted a Graduate visa.",
            "Can demonstrate that you completed your course during your current period of leave.",
          ],
        },
      ],
      features: [
        {
          title: "Eligibility Verification",
          description:
            "Thorough assessment of your eligibility criteria for the Graduate route visa application",
          icon: "/icons/eligibility.svg",
        },
        {
          title: "Timeline Planning",
          description:
            "Strategic guidance on when to apply to maximize your post-study work period in the UK",
          icon: "/icons/timeline.svg",
        },
        {
          title: "Application Support",
          description:
            "Comprehensive assistance with preparing and submitting your Graduate visa application",
          icon: "/icons/application.svg",
        },
      ],
      callToAction: {
        title: "Extend Your UK Experience",
        description:
          "Contact us today to discuss how we can help you transition from study to work in the UK with our specialized Graduate visa services!",
      },
    },
  },
  {
    id: 5,
    title: "Entrepreneur Extension",
    icon: "/icons/entrepreneur.svg",
    content: {
      heading: "Entrepreneur Extension Information",
      description:
        "Extensions for Entrepreneur Visas have ended. On April 5, 2023, the deadline for Entrepreneur visa extensions passed. Holders of Entrepreneur visas now have until April 5, 2025, to submit an application for UK settlement through this method.",
      image: "/images/services/entrepreneur.jpg",
      mainContent: [
        {
          title: "Important Updates",
          paragraphs: [
            "The Entrepreneur visa route is now closed to new applications.",
            "The Innovator Founder route has replaced the Entrepreneur visa.",
            "Existing Entrepreneur visa holders have until April 5, 2025, to apply for settlement.",
            "Alternative visa options may be available depending on your circumstances.",
          ],
        },
        {
          title: "Next Steps for Entrepreneur Visa Holders",
          paragraphs: [
            "If you currently hold an Entrepreneur visa, you should plan your settlement application well ahead of the 2025 deadline.",
            "Consider if you qualify for other business or work visa categories such as the Innovator Founder visa.",
            "Ensure you meet all the settlement requirements including the investment and job creation criteria.",
            "Gather comprehensive evidence of your business activities during your time on the Entrepreneur visa.",
          ],
        },
      ],
      features: [
        {
          title: "Settlement Guidance",
          description:
            "Expert advice on preparing a successful settlement application before the 2025 deadline",
          icon: "/icons/settlement.svg",
        },
        {
          title: "Alternative Routes",
          description:
            "Assistance with exploring alternative visa options such as the Innovator Founder route",
          icon: "/icons/routes.svg",
        },
        {
          title: "Documentation Support",
          description:
            "Comprehensive help with gathering and presenting evidence of your business activities",
          icon: "/icons/document.svg",
        },
      ],
      callToAction: {
        title: "Secure Your Future in the UK",
        description:
          "Don't wait until the deadline approaches. Contact us now to discuss your settlement options and ensure a smooth transition!",
      },
    },
  },
  {
    id: 6,
    title: "Ukraine Sponsorship Scheme",
    icon: "/icons/ukraine.svg",
    content: {
      heading: "Ukraine Sponsorship Support",
      description:
        "We provide dedicated assistance for Ukrainian nationals and sponsors under the Ukraine Sponsorship Scheme, delivering comprehensive guidance throughout the application process and settlement journey.",
      image: "/images/services/ukraine-scheme.jpg",
      mainContent: [
        {
          title: "Eligibility Criteria",
          paragraphs: [
            "Ukrainian Nationality: Applicants must be Ukrainian nationals or immediate family members of Ukrainian nationals.",
            "Sponsor Requirement: You must have a sponsor in the UK who can provide accommodation for a minimum of 6 months.",
            "Safety Checks: Both applicants and sponsors will undergo security checks as part of the application process.",
            "Accommodation Standards: The accommodation offered by sponsors must meet safety and habitability standards.",
          ],
        },
        {
          title: "Benefits of the Scheme",
          paragraphs: [
            "Right to Live and Work: Successful applicants can live, work, and study in the UK for up to three years.",
            "Access to Services: You'll be able to access healthcare, education, benefits, and employment support.",
            "Community Support: Various community integration programs are available to help you settle in the UK.",
            "Family Reunification: Options to bring eligible family members to join you in the UK.",
          ],
        },
      ],
      features: [
        {
          title: "Sponsor Matching",
          description:
            "Assistance with finding suitable sponsors through our verified sponsor network",
          icon: "/icons/matching.svg",
        },
        {
          title: "Application Processing",
          description:
            "Step-by-step guidance through the entire application and visa process",
          icon: "/icons/processing.svg",
        },
        {
          title: "Settlement Assistance",
          description:
            "Comprehensive support with integration, accommodation, and accessing essential services",
          icon: "/icons/settlement.svg",
        },
      ],
      callToAction: {
        title: "Find Safety and Support in the UK",
        description:
          "Contact our dedicated Ukraine Support Team today to discuss how we can assist you with the sponsorship process and settlement in the UK.",
      },
    },
  },
];
