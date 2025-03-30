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
  {
    question: "What happens if a Sponsor Licence is suspended?",
    answer: (
      <div className="space-y-3">
        <div className="flex rounded-lg border border-amber-200 bg-amber-50 p-4">
          <div className="mr-4 flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-10 w-10 text-amber-500"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>
            <h4 className="mb-2 text-lg font-medium text-amber-800">
              Suspension Process
            </h4>
            <p className="text-amber-700">
              The sponsor will receive a notification via email, with 20 working
              days to respond in writing. During suspension, the sponsor cannot
              assign any Certificates of Sponsorship (CoS) and will be removed
              temporarily from the public register.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    question: "Can a 5-year CoS lead to a 3-year visa?",
    answer: (
      <div className="space-y-3">
        <div className="overflow-hidden rounded-xl bg-white shadow-md">
          <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-600"></div>
          <div className="p-5">
            <div className="mb-3 flex items-center">
              <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-blue-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h4 className="font-medium text-gray-800">
                CoS and Visa Duration
              </h4>
            </div>
            <p className="mb-3 text-gray-600">
              <span className="font-semibold text-blue-600">Yes</span>, the
              duration of the visa granted can vary from the CoS duration based
              on Home Office discretion. If a 5-year CoS results in a 3-year
              visa, the sponsor may be eligible for a partial refund of the
              Immigration Skills Charge (ISC) for the unused period.
            </p>
            <div className="rounded-md bg-blue-50 p-3 text-sm text-blue-700">
              <span className="font-medium">Important: </span>
              This must be noted in the sponsor note on the Sponsor Management
              System (SMS) and the refund will be processed accordingly by the
              Home Office.
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    question: "Can someone self-sponsor?",
    answer: (
      <div className="space-y-3">
        <div className="relative pl-7 before:absolute before:bottom-0 before:left-0 before:top-0 before:w-1 before:rounded-full before:bg-gradient-to-b before:from-green-400 before:to-teal-500">
          <h4 className="mb-2 text-lg font-semibold text-teal-700">
            Self-Sponsorship
          </h4>
          <p className="mb-3 text-gray-700">
            <span className="font-bold text-teal-600">Yes</span>, it is possible
            to self-sponsor under the Skilled Worker visa route, provided the
            applicant establishes or already owns a UK-registered business that
            holds a valid sponsor licence.
          </p>

          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <h5 className="mb-2 font-medium text-gray-800">Requirements:</h5>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-teal-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>The business must be actively trading</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-teal-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Genuine need for the role must exist</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-teal-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  All sponsor duties and compliance requirements must be met
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-3 rounded-md border border-yellow-200 bg-yellow-50 p-3 text-sm text-yellow-800">
            <span className="font-medium">Important note: </span>
            The individual cannot directly assign the Certificate of Sponsorship
            (CoS) to themselves, but another designated person within the
            business (such as an Authorising Officer or Level 1 user) can assign
            the CoS on behalf of the company.
          </div>
        </div>
      </div>
    ),
  },
  {
    question: "What are the roles of an Authorising Officer (AO)?",
    answer: (
      <div className="space-y-3">
        <div className="rounded-lg bg-white p-6 shadow-md">
          <div className="mb-4 flex items-center">
            <div className="mr-4 rounded-md bg-indigo-600 p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6 text-white"
              >
                <path
                  fillRule="evenodd"
                  d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z"
                  clipRule="evenodd"
                />
                <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-gray-800">
              Authorising Officer Responsibilities
            </h4>
          </div>

          <p className="mb-4 text-gray-700">
            The Authorising Officer (AO) is the most senior person within the
            organisation responsible for the sponsor licence. Their duties
            include:
          </p>

          <div className="mb-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-md bg-gray-50 p-3">
              <div className="flex">
                <div className="mr-2 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5 text-indigo-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.75.75 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span>Ensuring compliance with all sponsor obligations</span>
              </div>
            </div>

            <div className="rounded-md bg-gray-50 p-3">
              <div className="flex">
                <div className="mr-2 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5 text-indigo-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.75.75 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span>
                  Overseeing recruitment and monitoring of sponsored workers
                </span>
              </div>
            </div>

            <div className="rounded-md bg-gray-50 p-3">
              <div className="flex">
                <div className="mr-2 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5 text-indigo-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.75.75 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span>
                  Maintaining up-to-date knowledge of UK immigration rules
                </span>
              </div>
            </div>

            <div className="rounded-md bg-gray-50 p-3">
              <div className="flex">
                <div className="mr-2 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5 text-indigo-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.75.75 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span>
                  Ensuring key personnel are competent and trustworthy
                </span>
              </div>
            </div>

            <div className="rounded-md bg-gray-50 p-3">
              <div className="flex">
                <div className="mr-2 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5 text-indigo-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.75.75 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span>Being accountable for staff actions on the SMS</span>
              </div>
            </div>

            <div className="rounded-md bg-gray-50 p-3">
              <div className="flex">
                <div className="mr-2 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5 text-indigo-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.75.75 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span>
                  Ensuring timely reporting of changes in circumstances
                </span>
              </div>
            </div>
          </div>

          <div className="mb-4 rounded-lg border border-indigo-100 bg-indigo-50 p-4">
            <p className="font-medium text-indigo-800">
              The AO must be permanently based in the UK and cannot be a
              contractor or temporary staff member.
            </p>
          </div>

          <h5 className="mb-3 font-semibold text-gray-800">
            Additional Required Roles:
          </h5>
          <div className="space-y-3">
            <div className="flex items-start">
              <div className="mr-2 mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-600">
                KC
              </div>
              <div>
                <p className="font-medium">Key Contact</p>
                <p className="text-sm text-gray-600">
                  Serves as the main point of contact between the organisation
                  and UKVI
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-2 mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-600">
                L1
              </div>
              <div>
                <p className="font-medium">Level 1 User</p>
                <p className="text-sm text-gray-600">
                  Manages the Sponsor Management System (SMS) daily (including
                  assigning CoS, updating sponsor details, and reporting
                  changes)
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-lg border border-green-200 bg-green-50 p-3">
            <div className="flex">
              <div className="mr-2 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-green-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-sm text-green-700">
                <span className="font-semibold">Pro tip:</span> We can act as
                your <span className="font-semibold">Level 1 User</span> to help
                you efficiently manage your sponsor licence and stay compliant
                with all Home Office requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    question: "What financial health checks does UKVI perform on businesses?",
    answer: (
      <div className="space-y-4">
        <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-lg">
          <div className="bg-gradient-to-r from-slate-700 to-slate-900 p-5">
            <h4 className="flex items-center text-xl font-bold text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-2 h-6 w-6"
              >
                <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991-.29.219-.621.37-.921.42z" />
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a3.833 3.833 0 001.719-.756c.712-.566 1.112-1.35 1.112-2.178 0-.829-.4-1.612-1.113-2.178-.502-.4-1.102-.647-1.719-.756V8.334c.29.085.54.18.75.321l.879.66a.75.75 0 00.9-1.2l-.879-.66c-.533-.4-1.169-.645-1.821-.75V6z"
                  clipRule="evenodd"
                />
              </svg>
              Financial Health Checks by UKVI
            </h4>
          </div>

          <div className="p-5">
            <p className="mb-4 text-gray-700">
              UKVI compliance officers conduct financial and operational checks
              to ensure a business is genuine, active, and capable of fulfilling
              sponsor duties. These checks often occur during compliance visits,
              which can be scheduled or unannounced.
            </p>

            <div className="mb-5">
              <h5 className="mb-3 flex items-center font-semibold text-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-2 h-5 w-5 text-slate-700"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm4.5 7.5a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25a.75.75 0 01.75-.75zm3.75-1.5a.75.75 0 00-1.5 0v4.5a.75.75 0 001.5 0V12zm2.25-3a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0V9.75A.75.75 0 0113.5 9zm3.75-1.5a.75.75 0 00-1.5 0v9a.75.75 0 001.5 0v-9z"
                    clipRule="evenodd"
                  />
                </svg>
                Assessment Areas
              </h5>

              <div className="grid gap-3 md:grid-cols-2">
                <div className="flex rounded-lg border border-slate-100 bg-slate-50 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-slate-600"
                  >
                    <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z" />
                    <path
                      fillRule="evenodd"
                      d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <p className="font-medium text-slate-800">
                      Financial Records
                    </p>
                    <p className="text-sm text-slate-600">
                      Business bank statements, audited accounts, cash flow
                      evidence
                    </p>
                  </div>
                </div>

                <div className="flex rounded-lg border border-slate-100 bg-slate-50 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-slate-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zM6 12a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V12zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 15a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V15zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 18a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V18zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <p className="font-medium text-slate-800">Tax Compliance</p>
                    <p className="text-sm text-slate-600">
                      HMRC registrations and history of tax submissions
                    </p>
                  </div>
                </div>

                <div className="flex rounded-lg border border-slate-100 bg-slate-50 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-slate-600"
                  >
                    <path d="M19.006 3.705a.75.75 0 00-.512-1.41L6 6.838V3a.75.75 0 00-.75-.75h-1.5A.75.75 0 003 3v4.93l-1.006.365a.75.75 0 00.512 1.41l16.5-6z" />
                    <path
                      fillRule="evenodd"
                      d="M3.019 11.115L18 5.667V9.09l4.006 1.456a.75.75 0 11-.512 1.41l-.494-.18v8.475h.75a.75.75 0 010 1.5H2.25a.75.75 0 010-1.5H3v-9.129l.019-.006zM18 20.25v-9.565l1.5.545v9.02H18zm-9-6a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <p className="font-medium text-slate-800">
                      Business Premises
                    </p>
                    <p className="text-sm text-slate-600">
                      Physical or virtual premises, lease terms, and locations
                      of workers
                    </p>
                  </div>
                </div>

                <div className="flex rounded-lg border border-slate-100 bg-slate-50 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-slate-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z"
                      clipRule="evenodd"
                    />
                    <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
                  </svg>
                  <div>
                    <p className="font-medium text-slate-800">
                      Company Structure
                    </p>
                    <p className="text-sm text-slate-600">
                      Staffing levels, size classification, and organizational
                      hierarchy
                    </p>
                  </div>
                </div>

                <div className="flex rounded-lg border border-slate-100 bg-slate-50 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-slate-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2.25a.75.75 0 01.75.75v.756a49.106 49.106 0 019.152 1 .75.75 0 01-.152 1.485h-1.918l2.474 10.605a.75.75 0 01-.731.895h-6.75a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V18a.75.75 0 01-.75.75H4.574a.75.75 0 01-.73-.896L6.318 7.5H4.25a.75.75 0 01-.152-1.485 49.105 49.105 0 019.152-1V3a.75.75 0 01.75-.75zm4.878 13.775l1.872-8.025h-6.75v4.5a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75v-4.5H6.122l-1.872 8.025h12.628z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <p className="font-medium text-slate-800">
                      Employment Practices
                    </p>
                    <p className="text-sm text-slate-600">
                      Contracts, pay practices, salary consistency with CoS
                      declarations
                    </p>
                  </div>
                </div>

                <div className="flex rounded-lg border border-slate-100 bg-slate-50 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-slate-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.25 2.25a3 3 0 00-3 3v4.318a3 3 0 00.879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 005.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 00-2.122-.879H5.25zM6.375 7.5a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <p className="font-medium text-slate-800">
                      Regulatory Compliance
                    </p>
                    <p className="text-sm text-slate-600">
                      Mandatory accreditations or regulatory approvals if
                      applicable
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-4 rounded-lg border border-yellow-200 bg-yellow-50 p-4">
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-2 h-6 w-6 flex-shrink-0 text-yellow-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <p className="mb-1 font-medium text-yellow-800">
                    Additional Assessment Methods
                  </p>
                  <p className="text-sm text-yellow-700">
                    UKVI may also interview key personnel, assess the
                    organisation's HR systems, and examine how absences, visa
                    expiries, and salaries are tracked. Sponsors must be able to
                    justify their CoS allocation and recruitment practices.
                  </p>
                </div>
              </div>
            </div>

            <h5 className="mb-3 font-semibold text-gray-800">
              Key Documentation Required:
            </h5>
            <ul className="mb-4 space-y-2">
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-slate-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Business bank statements and cash flow</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-slate-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>HMRC registration and tax records</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-slate-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Audited or certified accounts</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-slate-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  Evidence of trading activity (e.g., invoices, contracts)
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-slate-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Number of employees and payroll data</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-slate-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Office premises and operational presence</span>
              </li>
            </ul>

            <div className="rounded-lg border border-red-200 bg-red-50 p-4">
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-2 h-6 w-6 flex-shrink-0 text-red-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-red-800">
                  If UKVI finds insufficient evidence of financial health or
                  legitimate business activity, it can refuse a sponsor licence
                  application or take enforcement action against existing
                  sponsors. Businesses must ensure transparency and be prepared
                  to present this information during compliance visits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    question: "Can sponsors expedite visa applications?",
    answer: (
      <div className="space-y-4">
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="overflow-hidden rounded-lg bg-white shadow-md md:w-1/2">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-3">
              <h4 className="flex items-center font-bold text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-2 h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
                    clipRule="evenodd"
                  />
                </svg>
                Priority Service (5 Days)
              </h4>
            </div>
            <div className="p-4">
              <div className="mb-3 flex items-center">
                <div className="mr-2 rounded-full bg-green-100 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4 text-green-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-sm text-gray-700">
                  Decision by end of next working day
                </p>
              </div>
              <div className="mb-3 flex items-center">
                <div className="mr-2 rounded-full bg-purple-100 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4 text-purple-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-sm text-gray-700">
                  Premium fee (significantly higher than Priority)
                </p>
              </div>
              <div className="flex items-center">
                <div className="mr-2 rounded-full bg-purple-100 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4 text-purple-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-sm text-gray-700">
                  Limited availability by location and visa type
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border-t-4 border-blue-500 bg-white p-4 shadow-md">
          <h4 className="mb-3 flex items-center font-semibold text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mr-2 h-5 w-5 text-blue-500"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clipRule="evenodd"
              />
            </svg>
            Important Considerations
          </h4>
          <ul className="space-y-2">
            <li className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-blue-500"
              >
                <path
                  fillRule="evenodd"
                  d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-gray-700">
                Availability varies by country and visa application center
              </p>
            </li>
            <li className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-blue-500"
              >
                <path
                  fillRule="evenodd"
                  d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-gray-700">
                Expedited services are not guaranteed to meet stated timeframes
                in all cases
              </p>
            </li>
            <li className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-blue-500"
              >
                <path
                  fillRule="evenodd"
                  d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-gray-700">
                Service fees are non-refundable, even if the application is
                refused
              </p>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
];

export default faqItems;
