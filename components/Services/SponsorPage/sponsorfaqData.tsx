import React from "react";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqItems: FAQItem[] = [
  {
    question: "What is a Sponsor Licence?",
    answer: (
      <div className="space-y-2">
        <p>
          A Sponsor Licence authorizes UK employers to hire non-UK nationals
          requiring a visa, including citizens from the EU, Iceland,
          Liechtenstein, Norway, and Switzerland who arrived after 31 December
          2020. It allows a business to legally sponsor skilled workers under
          visa categories such as the Skilled Worker visa.
        </p>
      </div>
    ),
  },
  {
    question: "Why do I need a Sponsor Licence?",
    answer: (
      <div className="space-y-2">
        <p>
          A Sponsor Licence is required to legally employ foreign nationals in
          the UK, including unpaid roles such as volunteers or interns. Without
          a valid sponsor licence, employers cannot issue Certificates of
          Sponsorship (CoS) or support visa applications.
        </p>
      </div>
    ),
  },
  {
    question: "Who doesn't need a Sponsor Licence?",
    answer: (
      <div className="space-y-2">
        <p>You don't need a licence to employ:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Irish citizens</li>
          <li>
            Individuals with settled or pre-settled status under the EU
            Settlement Scheme
          </li>
          <li>Those with indefinite leave to remain in the UK</li>
        </ul>
      </div>
    ),
  },
  {
    question: "How long is a Sponsor Licence valid?",
    answer: (
      <div className="space-y-2">
        <p>
          From April 2024, sponsor licence renewals have been abolished.
          Licences will remain valid indefinitely, subject to continued
          compliance and active use.
        </p>
      </div>
    ),
  },
  {
    question: "What documents are needed for a Sponsor Licence application?",
    answer: (
      <div className="space-y-3">
        <p>
          Depending on the type of organisation, you'll need to submit at least
          four documents from Appendix A (Home Office list), including:
        </p>
        <ul className="list-disc space-y-2 pl-5 md:space-y-1">
          <li>Latest business bank statement</li>
          <li>Employer's liability insurance (£5 million minimum)</li>
          <li>Certificate of VAT registration</li>
          <li>
            Evidence of PAYE and Accounts Office Reference Number registration
            with HMRC
          </li>
          <li>Audited or unaudited accounts</li>
          <li>
            Evidence of registration with a regulatory body (if applicable)
          </li>
          <li>Lease agreement or proof of business premises</li>
        </ul>
      </div>
    ),
  },
  {
    question: "What are my duties as a sponsor?",
    answer: (
      <div className="space-y-3">
        <ul className="list-disc space-y-2 pl-5 md:space-y-1">
          <li>Maintain accurate HR records and documentation</li>
          <li>Conduct right to work checks</li>
          <li>Use the Sponsor Management System (SMS) to report key events</li>
          <li>
            Monitor and report changes in sponsored workers' circumstances
            within 10 working days
          </li>
          <li>Prevent illegal working and comply with immigration laws</li>
        </ul>
      </div>
    ),
  },
  {
    question: "What happens if I fail to comply with Sponsor Licence duties?",
    answer: (
      <div className="space-y-3">
        <p>
          Your licence can be downgraded, suspended, or revoked. This could lead
          to:
        </p>
        <ul className="list-disc space-y-2 pl-5 md:space-y-1">
          <li>Inability to sponsor new workers</li>
          <li>Cancellation of existing sponsored workers' visas</li>
          <li>Reputational damage and compliance penalties</li>
        </ul>
      </div>
    ),
  },
  {
    question: "What are the types of Sponsor Licences?",
    answer: (
      <div className="space-y-3">
        <p>There are two primary types:</p>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              <tr className="border-b border-gray-300">
                <td className="border-r border-gray-300 bg-gray-50 p-2 font-medium">
                  Worker Licence
                </td>
                <td className="p-2">
                  Skilled Worker, Global Business Mobility, Minister of
                  Religion, etc.
                </td>
              </tr>
              <tr>
                <td className="border-r border-gray-300 bg-gray-50 p-2 font-medium">
                  Temporary Worker Licence
                </td>
                <td className="p-2">
                  Charity Worker, Creative Worker, Seasonal Worker, etc.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    question:
      "What are the eligibility requirements to apply for a Sponsor Licence?",
    answer: (
      <div className="space-y-3">
        <ul className="list-disc space-y-2 pl-5 md:space-y-1">
          <li>
            Your organisation must be genuine and operating lawfully in the UK
          </li>
          <li>You must have suitable HR systems in place</li>
          <li>
            You must not have unspent criminal convictions related to
            immigration offences
          </li>
          <li>
            You must appoint key personnel (Authorising Officer, Key Contact,
            Level 1 User)
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "What is Appendix A and why is it important?",
    answer: (
      <div className="space-y-3">
        <p>
          Appendix A lists the types of evidence required to support a sponsor
          licence application. You must provide at least four specified
          documents to prove legitimacy, such as:
        </p>
        <ul className="list-disc space-y-2 pl-5 md:space-y-1">
          <li>Financial records</li>
          <li>Registration with HMRC and Companies House</li>
          <li>Evidence of trading presence (e.g. contracts, invoices)</li>
          <li>Lease agreement or utility bills</li>
        </ul>
      </div>
    ),
  },
  {
    question: "What is the application process for a Sponsor Licence?",
    answer: (
      <div className="space-y-3">
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            Complete the online sponsor licence application on the UKVI website
          </li>
          <li>
            Pay the application fee:
            <div className="ml-4 mt-2">
              <div className="rounded bg-gray-50 p-2">
                <span className="font-medium">Small/charitable sponsors:</span>{" "}
                £536
              </div>
              <div className="mt-1 rounded bg-gray-50 p-2">
                <span className="font-medium">Medium/large sponsors:</span>{" "}
                £1,476
              </div>
            </div>
          </li>
          <li>Submit supporting documents from Appendix A</li>
          <li>Await a decision—standard processing time is up to 8 weeks</li>
        </ol>
      </div>
    ),
  },
  {
    question: "What is the Sponsorship Management System (SMS)?",
    answer: (
      <div className="space-y-3">
        <p>The SMS is an online portal used by sponsors to:</p>
        <ul className="list-disc space-y-2 pl-5 md:space-y-1">
          <li>Assign and withdraw CoS</li>
          <li>Report changes in migrant employment or circumstances</li>
          <li>Update key personnel and contact details</li>
          <li>Request defined CoS and manage sponsor duties</li>
        </ul>
      </div>
    ),
  },
  {
    question: "What are common reasons for sponsor licence refusal?",
    answer: (
      <div className="space-y-3">
        <ul className="list-disc space-y-2 pl-5 md:space-y-1">
          <li>Insufficient or incorrect documents submitted</li>
          <li>Failure to prove genuine business activity</li>
          <li>Inadequate HR or record-keeping systems</li>
          <li>Non-compliance with previous immigration laws</li>
        </ul>
      </div>
    ),
  },
  {
    question:
      "Can I upgrade from a Temporary Worker licence to a Worker Licence?",
    answer: (
      <div className="space-y-2">
        <p>
          <span className="font-medium text-red-600">No</span>, you must apply
          for a new Worker Sponsor Licence and go through the full application
          process. Each licence type is distinct and assessed separately.
        </p>
      </div>
    ),
  },
  {
    question:
      "Can I apply for a Sponsor Licence if I'm a start-up or new business?",
    answer: (
      <div className="space-y-3">
        <p>
          <span className="font-medium text-green-600">Yes</span>, but you must
          demonstrate:
        </p>
        <ul className="list-disc space-y-2 pl-5 md:space-y-1">
          <li>You are actively trading</li>
          <li>You have an established UK presence</li>
          <li>
            You have appropriate HR systems and genuine roles that meet
            sponsorship criteria
          </li>
        </ul>
      </div>
    ),
  },
  {
    question:
      "Can legal representatives assist with the Sponsor Licence process?",
    answer: (
      <div className="space-y-3">
        <p>
          <span className="font-medium text-green-600">Yes</span>, immigration
          solicitors or specialist firms can:
        </p>
        <ul className="list-disc space-y-2 pl-5 md:space-y-1">
          <li>Help prepare your application</li>
          <li>Ensure compliance with Appendix A</li>
          <li>Act as your Level 1 User or Authorising Officer if required</li>
        </ul>
      </div>
    ),
  },
  {
    question: "Can I assign a Certificate of Sponsorship (CoS) to myself?",
    answer: (
      <div className="space-y-2">
        <p>
          <span className="font-medium text-red-600">No</span>, the CoS must be
          assigned by another person listed as a Level 1 or Level 2 user on the
          SMS. You cannot assign it to yourself if you are the only
          representative.
        </p>
      </div>
    ),
  },
  {
    question: "How do I maintain my Sponsor Licence after approval?",
    answer: (
      <div className="space-y-3">
        <ul className="list-disc space-y-2 pl-5 md:space-y-1">
          <li>Keep records for each sponsored worker as per Appendix D</li>
          <li>Monitor immigration status and visa expiry dates</li>
          <li>
            Report changes via SMS (job role, salary, work location, etc.)
          </li>
          <li>Ensure key personnel are up to date and trained on compliance</li>
        </ul>
      </div>
    ),
  },
  {
    question: "What happens if my key personnel leave the business?",
    answer: (
      <div className="space-y-2">
        <p>
          You must update the SMS within 20 working days to reflect any changes.
          Failing to do so may result in non-compliance action or even licence
          revocation.
        </p>
        <div className="mt-2 rounded border-l-4 border-yellow-400 bg-yellow-50 p-3 text-yellow-800">
          <span className="font-medium">Important:</span> Maintaining up-to-date
          personnel records is critical for compliance.
        </div>
      </div>
    ),
  },
  {
    question: "Can I hold more than one Sponsor Licence?",
    answer: (
      <div className="space-y-2">
        <p>
          <span className="font-medium text-green-600">Yes</span>, if your
          business operates in multiple sectors or has different legal entities
          (e.g. franchisees), you may hold multiple licences provided each
          entity meets the eligibility criteria.
        </p>
      </div>
    ),
  },
  {
    question:
      "Do I need to advertise a job before sponsoring a migrant worker?",
    answer: (
      <div className="space-y-2">
        <p>
          No formal Resident Labour Market Test (RLMT) is required anymore.
          However, the job must be genuine and meet salary and skill-level
          requirements for the relevant occupation code.
        </p>
      </div>
    ),
  },
  {
    question: "What is a mock compliance audit, and do I need one?",
    answer: (
      <div className="space-y-3">
        <p>
          A mock audit is a simulated compliance check to assess readiness for a
          real UKVI visit. It's recommended to:
        </p>
        <ul className="list-disc space-y-2 pl-5 md:space-y-1">
          <li>Identify weaknesses in your HR systems</li>
          <li>Ensure readiness for document inspection</li>
          <li>Train key personnel in SMS usage and compliance reporting</li>
        </ul>
        <div className="mt-2 rounded border-l-4 border-blue-400 bg-blue-50 p-3 text-blue-800">
          <span className="font-medium">Pro tip:</span> Consider scheduling a
          mock audit 3-6 months after obtaining your licence to ensure ongoing
          compliance.
        </div>
      </div>
    ),
  },
];

export default faqItems;
