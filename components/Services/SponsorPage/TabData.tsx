// Define interface for tab content
interface TabContent {
  key: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const tabsData: TabContent[] = [
  {
    key: "EXPERT REVIEW",
    title: "EXPERT REVIEW",
    description:
      "Our team of experts will review your eligibility and help you prepare for a successful application.",
    imageSrc: "/images/features/tab-container-01.png",
    imageAlt: "Expert reviewing documents",
  },
  {
    key: "SUBMIT APPLICATION",
    title: "SUBMIT APPLICATION",
    description:
      "We'll guide you through every step of submitting your sponsor licence application.",
    imageSrc: "/images/features/tab-container-02.png",
    imageAlt: "Submitting application documents",
  },
  {
    key: "ONGOING SUPPORT",
    title: "ONGOING SUPPORT",
    description:
      "Our support continues throughout the application process with dedicated assistance.",
    imageSrc: "/images/features/tab-container-03.png",
    imageAlt: "Customer support representative",
  },
  {
    key: "SPONSORSHIP APPROVED",
    title: "SPONSORSHIP APPROVED",
    description:
      "Congratulations on your approved sponsor licence! We'll help you understand your new responsibilities.",
    imageSrc: "/images/features/tab-container-04.png",
    imageAlt: "Approved sponsorship certificate",
  },
];

export default tabsData;
