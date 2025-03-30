interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqItems: FAQItem[] = [
  {
    question: "What is a sponsor licence, and why do I need one?",
    answer: (
      <p>
        A <span className="text-black">sponsor licence</span> allows UK
        businesses to legally hire skilled workers from outside the UK. Without
        it, you cannot sponsor visas for international employees.
      </p>
    ),
  },
  {
    question: "Can I sponsor an employee who is already in the UK?",
    answer: (
      <p>
        Yes, you can sponsor an employee already in the UK, provided they have
        the right immigration status and meet the eligibility requirements for
        the specific visa category you're sponsoring them under.
      </p>
    ),
  },
  {
    question: "How long does it take to obtain a sponsor licence?",
    answer: (
      <p>
        The standard processing time for a sponsor licence application is
        typically 8 weeks from the date of submission. However, premium
        processing is available for an additional fee, which can reduce the
        processing time to 10 working days.
      </p>
    ),
  },
  {
    question: "What are the costs associated with a sponsor licence?",
    answer: (
      <div>
        <p>The main costs associated with a sponsor licence include:</p>
        <ul className="mt-2 list-disc pl-5">
          <li>
            Application fee: £536 for small businesses or £1,476 for
            medium/large businesses
          </li>
          <li>Certificate of Sponsorship: £199 per worker</li>
          <li>Immigration Skills Charge: £364 to £1,000 per year per worker</li>
          <li>
            Additional legal fees if you use a law firm to assist with the
            application
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "Can I reapply if my application is refused?",
    answer: (
      <p>
        Yes, you can reapply if your sponsor licence application is refused.
        However, it's important to address the reasons for the refusal before
        submitting a new application. There is no cooling-off period, but
        reapplying without addressing the issues will likely result in another
        refusal.
      </p>
    ),
  },
];

export default faqItems;
