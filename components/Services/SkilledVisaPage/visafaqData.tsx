import React from "react";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqItems: FAQItem[] = [
  {
    question:
      "What are the eligibility requirements for a Skilled Worker Visa?",
    answer: (
      <div className="space-y-3">
        <p>Applicants must earn 70 points:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Job offer from a licensed sponsor with a valid Certificate of
            Sponsorship (CoS)
          </li>
          <li>Job at RQF Level 3 or above</li>
          <li>
            Salary meeting thresholds (£38,700 per year, or the job-specific
            going rate, whichever is highest)
          </li>
          <li>English proficiency (CEFR Level B1)</li>
        </ul>
      </div>
    ),
  },
  {
    question: "Can I switch to Skilled Worker from another UK visa?",
    answer: (
      <div className="space-y-2">
        <p>
          <span className="font-medium text-green-600">Yes</span>, except for
          these visa categories:
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
            Visitor
          </span>
          <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
            Short-term Student
          </span>
          <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
            Parent of Child Student
          </span>
          <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
            Seasonal Worker
          </span>
          <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
            Domestic Worker
          </span>
        </div>
      </div>
    ),
  },
  {
    question: "Who qualifies as a 'New Entrant'?",
    answer: (
      <div className="space-y-3">
        <ul className="list-disc space-y-2 pl-5">
          <li>Under 26 years old</li>
          <li>Recent graduates switching from Student or Graduate visas</li>
          <li>Professional trainees and postdoctoral positions</li>
        </ul>
      </div>
    ),
  },
  {
    question: "How long is a Skilled Worker visa valid?",
    answer: (
      <div className="space-y-2">
        <p>
          Initially valid for up to 5 years, renewable indefinitely, with
          eligibility for Indefinite Leave to Remain after 5 continuous years.
        </p>
        <div className="mt-3 rounded border-l-4 border-blue-400 bg-blue-50 p-3 text-blue-800">
          <span className="font-medium">Important:</span> Time spent on the
          Skilled Worker visa counts towards the 5-year qualification period for
          settlement.
        </div>
      </div>
    ),
  },
  {
    question: "What costs are involved with the Skilled Worker Visa?",
    answer: (
      <div className="space-y-4">
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2 font-medium">
                  Application Type
                </th>
                <th className="border border-gray-300 p-2 font-medium">
                  Application Fee
                </th>
                <th className="border border-gray-300 p-2 font-medium">
                  Immigration Health Surcharge (IHS)
                </th>
                <th className="border border-gray-300 p-2 font-medium">
                  CoS Fee (Employer)
                </th>
                <th className="border border-gray-300 p-2 font-medium">
                  ISC (Employer) Small/Charitable
                </th>
                <th className="border border-gray-300 p-2 font-medium">
                  ISC (Employer) Medium/Large
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">
                  Applying from outside the UK (up to 3 years)
                </td>
                <td className="border border-gray-300 p-2">£719 per person</td>
                <td className="border border-gray-300 p-2">£624 per year</td>
                <td className="border border-gray-300 p-2">£199</td>
                <td className="border border-gray-300 p-2">£364 per year</td>
                <td className="border border-gray-300 p-2">£1,000 per year</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-2">
                  Applying from outside the UK (over 3 years)
                </td>
                <td className="border border-gray-300 p-2">
                  £1,420 per person
                </td>
                <td className="border border-gray-300 p-2">£624 per year</td>
                <td className="border border-gray-300 p-2">£199</td>
                <td className="border border-gray-300 p-2">£364 per year</td>
                <td className="border border-gray-300 p-2">£1,000 per year</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">
                  Applying from inside the UK (up to 3 years)
                </td>
                <td className="border border-gray-300 p-2">£827 per person</td>
                <td className="border border-gray-300 p-2">£624 per year</td>
                <td className="border border-gray-300 p-2">£199</td>
                <td className="border border-gray-300 p-2">£364 per year</td>
                <td className="border border-gray-300 p-2">£1,000 per year</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-2">
                  Applying from inside the UK (over 3 years)
                </td>
                <td className="border border-gray-300 p-2">
                  £1,500 per person
                </td>
                <td className="border border-gray-300 p-2">£624 per year</td>
                <td className="border border-gray-300 p-2">£199</td>
                <td className="border border-gray-300 p-2">£364 per year</td>
                <td className="border border-gray-300 p-2">£1,000 per year</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">
                  Applying from outside the UK (5 years)
                </td>
                <td className="border border-gray-300 p-2">
                  £1,420 per person
                </td>
                <td className="border border-gray-300 p-2">
                  £3,120 total (£624 x 5 years)
                </td>
                <td className="border border-gray-300 p-2">£199</td>
                <td className="border border-gray-300 p-2">
                  £1,820 total (£364 x 5 years)
                </td>
                <td className="border border-gray-300 p-2">
                  £5,000 total (£1,000 x 5 years)
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-2">
                  Applying from inside the UK (5 years)
                </td>
                <td className="border border-gray-300 p-2">
                  £1,500 per person
                </td>
                <td className="border border-gray-300 p-2">
                  £3,120 total (£624 x 5 years)
                </td>
                <td className="border border-gray-300 p-2">£199</td>
                <td className="border border-gray-300 p-2">
                  £1,820 total (£364 x 5 years)
                </td>
                <td className="border border-gray-300 p-2">
                  £5,000 total (£1,000 x 5 years)
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <h4 className="mb-2 text-lg font-medium">
              Employer Responsibilities:
            </h4>
            <ul className="list-disc space-y-1 pl-5">
              <li>Sponsor Licence Application Fee</li>
              <li>Certificate of Sponsorship (CoS) Fee</li>
              <li>Immigration Skills Charge (ISC)</li>
              <li>Recruitment and onboarding costs</li>
            </ul>
          </div>

          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <h4 className="mb-2 text-lg font-medium">
              Employee Responsibilities:
            </h4>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                Visa Application Fee (can be paid by employer or employee based
                on contract)
              </li>
              <li>Healthcare Surcharge</li>
              <li>Travel, accommodation, and living expenses</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    question: "Who can be paid less than the usual minimum salary?",
    answer: (
      <div className="space-y-3">
        <ul className="list-disc space-y-2 pl-5">
          <li>Workers aged under 26 or new entrants</li>
          <li>Roles listed as shortage occupations</li>
          <li>Those with relevant PhD-level qualifications</li>
        </ul>
        <div className="mt-2 rounded border-l-4 border-yellow-400 bg-yellow-50 p-3 text-yellow-800">
          <span className="font-medium">Note:</span> Even with these exceptions,
          salaries must never fall below £23,200 per year and 70% of the going
          rate for the occupation.
        </div>
      </div>
    ),
  },
  {
    question: "What are the English language requirements?",
    answer: (
      <div className="space-y-3">
        <p>
          Applicants must demonstrate English proficiency at least at CEFR Level
          B1. Acceptable evidence includes:
        </p>
        <div className="space-y-4">
          <div className="rounded-lg border-l-4 border-blue-400 bg-gray-50 p-3">
            <p className="font-medium">
              Passing an approved Secure English Language Test (SELT)
            </p>
            <p className="mt-1 text-sm">
              Such as IELTS for UKVI, in all four modules (reading, writing,
              speaking, and listening).
            </p>
          </div>

          <div className="rounded-lg border-l-4 border-blue-400 bg-gray-50 p-3">
            <p className="font-medium">
              Holding a degree-level qualification taught in English
            </p>
            <p className="mt-1 text-sm">Verified through Ecctis.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    question: "What is Ecctis and when is it needed?",
    answer: (
      <div className="space-y-3">
        <p>
          Ecctis (formerly UK NARIC) verifies overseas qualifications for their
          equivalence to UK degrees and confirms if the qualification was taught
          in English. This verification is needed for those relying on overseas
          degrees to meet the English language requirement.
        </p>
        <div className="mt-2 flex items-center rounded-lg bg-blue-50 p-3 text-blue-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p>
            Ecctis verification typically takes 10-15 working days and costs
            around £170.
          </p>
        </div>
      </div>
    ),
  },
  {
    question:
      "Are Graduate visa holders exempt from the Immigration Skills Charge (ISC)?",
    answer: (
      <div className="space-y-2">
        <p>
          <span className="font-medium text-red-600">No</span>, Graduate visa
          holders transitioning to Skilled Worker visas are not exempt from ISC.
          Only Student visa holders switching directly to Skilled Worker visas
          are exempt.
        </p>
        <div className="mt-3 rounded-lg border border-gray-200 bg-gray-50 p-3">
          <div className="flex">
            <div className="mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <p className="font-medium">
                Graduate visa → Skilled Worker visa:
              </p>
              <p className="text-sm">ISC applies</p>
            </div>
          </div>
          <div className="mt-3 flex">
            <div className="mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <p className="font-medium">Student visa → Skilled Worker visa:</p>
              <p className="text-sm">ISC exempt</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    question: "Can Graduate visa holders apply for lower salary thresholds?",
    answer: (
      <div className="space-y-2">
        <p>
          <span className="font-medium text-green-600">Yes</span>, Graduate visa
          holders qualify as 'New Entrants' and can benefit from lower salary
          thresholds, applicable for up to 4 years.
        </p>
        <div className="mt-3 rounded border-l-4 border-green-400 bg-green-50 p-3 text-green-800">
          <p>
            This can represent significant savings for employers, with salary
            thresholds reduced by up to 30%.
          </p>
        </div>
      </div>
    ),
  },
  {
    question: "Can Graduate visa holders have dependants?",
    answer: (
      <div className="space-y-3">
        <p>
          <span className="font-medium text-green-600">Yes</span>, Graduate visa
          holders can bring dependants (partners and children) to the UK,
          provided they meet the relevant immigration rules. This benefit is not
          available to Student visa holders.
        </p>
        <div className="mt-2 overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2 font-medium">
                  Visa Type
                </th>
                <th className="border border-gray-300 p-2 font-medium">
                  Can Bring Dependants?
                </th>
                <th className="border border-gray-300 p-2 font-medium">
                  Conditions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2 font-medium">
                  Graduate Visa
                </td>
                <td className="border border-gray-300 p-2 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto h-5 w-5 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </td>
                <td className="border border-gray-300 p-2">
                  Dependants must meet immigration rules
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-2 font-medium">
                  Student Visa
                </td>
                <td className="border border-gray-300 p-2 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto h-5 w-5 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </td>
                <td className="border border-gray-300 p-2">
                  Generally not available (with very limited exceptions)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
];

export default faqItems;
