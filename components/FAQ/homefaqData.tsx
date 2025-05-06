interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqItems: FAQItem[] = [
  {
    question: "What are your core services?",
    answer: (
      <p>
        Our core services include sponsor licence applications, visa
        sponsorship, compliance management, and immigration strategy consulting
        for UK businesses looking to hire international talent.
      </p>
    ),
  },
  {
    question: "What industries do you serve?",
    answer: (
      <p>
        We serve a wide range of industries including technology, healthcare,
        education, finance, manufacturing, and hospitality. Our expertise
        extends to businesses of all sizes, from startups to established
        corporations.
      </p>
    ),
  },
  {
    question: "How does the consultation process work?",
    answer: (
      <div>
        <p>Our consultation process involves three simple steps:</p>
        <ul className="mt-2 list-disc pl-5">
          <li>
            Initial assessment: We discuss your specific needs and objectives
          </li>
          <li>Strategy development: We create a customised immigration plan</li>
          <li>
            Implementation: We guide you through the application process with
            ongoing support
          </li>
        </ul>
      </div>
    ),
  },
];

export default faqItems;
