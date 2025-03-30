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
  {
    question: "What are the salaries for new entrants?",
    answer: (
      <div className="rounded-lg border border-sky-100 bg-gradient-to-r from-sky-50 to-indigo-50 p-5">
        <div className="flex">
          <div className="mr-4 flex-shrink-0">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6 text-sky-600"
              >
                <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991-.29.219-.621.37-.921.42z" />
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a3.833 3.833 0 001.719-.756c.712-.566 1.112-1.35 1.112-2.178 0-.829-.4-1.612-1.113-2.178-.502-.4-1.102-.647-1.719-.756V8.334c.29.085.54.18.75.321l.879.66a.75.75 0 00.9-1.2l-.879-.66c-.533-.4-1.169-.645-1.821-.75V6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-gray-800">
              New Entrant Salary Requirements
            </h3>
            <p className="text-gray-600">
              Salaries for new entrants must be at least{" "}
              <span className="font-semibold text-sky-700">70%</span> of the
              experienced worker rate for their occupation, subject to minimum
              thresholds.
            </p>

            <div className="mt-4 rounded-md border border-sky-100 bg-white p-3 shadow-sm">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-2 h-5 w-5 text-sky-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-sm text-gray-600">
                  The salary must never fall below the absolute minimum of
                  £23,200 per year, regardless of occupation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    question: "What is a transitional salary for new employers?",
    answer: (
      <div className="space-y-4">
        <div className="overflow-hidden rounded-xl bg-white shadow-md">
          <div className="h-2 bg-gradient-to-r from-violet-500 to-purple-600"></div>
          <div className="p-5">
            <p className="mb-4 text-gray-700">
              When a Skilled Worker changes jobs to a different occupation code,
              they are treated as a new hire under immigration rules. This means
              they must meet the new minimum salary threshold that applies at
              the time of job change. They cannot rely on transitional salary
              rates unless they are continuing in the same occupation code.
            </p>

            <div className="mb-4 rounded-lg border border-purple-100 bg-purple-50 p-4">
              <h4 className="mb-2 flex items-center font-medium text-purple-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-2 h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M15.22 6.268a.75.75 0 01.44.97l-5.25 15.75a.75.75 0 01-1.41-.47l5.25-15.75a.75.75 0 01.97-.44z"
                    clipRule="evenodd"
                  />
                  <path d="M8.58 7.6l1.669-5.006a.75.75 0 011.41.47L10.07 7.6h5.68a.75.75 0 010 1.5h-6a.75.75 0 01-.71-.97l1.669-5.006L5.745 9.06a.75.75 0 01-1.06.06L1.47 6.97a.75.75 0 01-.06-1.06l3.25-3.5a.75.75 0 011.06-.06l2.86 2.66v2.59z" />
                </svg>
                Transitional Salary Exceptions
              </h4>
              <p className="text-purple-700">
                Transitional salary rates (such as £29,000 per year) may still
                apply to certain workers who:
              </p>
              <ul className="mt-2 space-y-1">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-purple-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-purple-700">
                    Are already sponsored under the Skilled Worker route before
                    4 April 2024
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-purple-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-purple-700">
                    Remain in the same occupation code
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-purple-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-purple-700">
                    Do not have a break in employment or change employer
                  </span>
                </li>
              </ul>
            </div>

            <div className="flex rounded-lg bg-amber-50 p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-6 w-6 flex-shrink-0 text-amber-600"
              >
                <path
                  fillRule="evenodd"
                  d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-amber-800">
                Those who meet these criteria can benefit from the lower
                transitional threshold until the end of the transitional period.
                Anyone changing to a different occupation code or employer must
                meet the new higher salary requirements in effect at the time.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    question: "Do spouses need English IELTS for Skilled Worker visas?",
    answer: (
      <div className="rounded-lg border-l-4 border-green-500 bg-white p-5 shadow-sm">
        <div className="flex">
          <div className="flex-shrink-0">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6 text-green-600"
              >
                <path
                  fillRule="evenodd"
                  d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="ml-4 flex-1">
            <div className="flex items-center">
              <h3 className="mr-2 text-lg font-semibold text-gray-800">
                Language Requirements for Dependants
              </h3>
              <span className="rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                Simplified
              </span>
            </div>
            <p className="mt-1 text-gray-600">
              <span className="font-medium text-green-600">No</span>, spouses do
              not require IELTS unless they apply independently for work-related
              visas.
            </p>
            <div className="mt-3 flex rounded-md bg-gray-50 p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-2 h-5 w-5 text-gray-500"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-sm text-gray-600">
                Dependants (including spouses and children) are exempt from
                English language requirements when applying as dependants of a
                Skilled Worker.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    question: "What is Ecctis?",
    answer: (
      <div className="relative overflow-hidden rounded-xl bg-white shadow-md">
        <div className="absolute right-0 top-0 -mr-4 -mt-4 h-16 w-16 rounded-full bg-teal-100 opacity-30"></div>
        <div className="absolute bottom-0 left-0 -mb-4 -ml-4 h-16 w-16 rounded-full bg-teal-100 opacity-30"></div>

        <div className="relative p-6">
          <div className="mb-4 flex items-start">
            <div className="mr-4 flex-shrink-0">
              <div className="rounded-lg bg-teal-100 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6 text-teal-600"
                >
                  <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                  <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                  <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800">
                Ecctis (formerly UK NARIC)
              </h3>
              <p className="text-sm text-gray-500">
                UK National Qualification Recognition Agency
              </p>
            </div>
          </div>

          <p className="mb-4 text-gray-700">
            Ecctis is the UK national agency responsible for providing official
            information on international qualifications and skills. It evaluates
            overseas academic qualifications to determine their comparability to
            UK degree standards.
          </p>

          <div className="mb-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-gray-100 bg-gray-50 p-3">
              <h4 className="mb-2 flex items-center font-medium text-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-2 h-5 w-5 text-teal-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zm9.586 4.594a.75.75 0 00-1.172-.938l-2.476 3.096-.908-.907a.75.75 0 00-1.06 1.06l1.5 1.5a.75.75 0 001.116-.062l3-3.75z"
                    clipRule="evenodd"
                  />
                </svg>
                Qualification Assessment
              </h4>
              <p className="text-sm text-gray-600">
                Issues a 'Statement of Comparability' to confirm if a
                qualification meets the required level (e.g. UK bachelor's,
                master's, or PhD equivalent).
              </p>
            </div>

            <div className="rounded-lg border border-gray-100 bg-gray-50 p-3">
              <h4 className="mb-2 flex items-center font-medium text-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-2 h-5 w-5 text-teal-500"
                >
                  <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.55a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
                </svg>
                English Language Verification
              </h4>
              <p className="text-sm text-gray-600">
                Confirms if a qualification was taught in English to meet
                language requirements for visa applications.
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-teal-100 bg-teal-50 p-4">
            <h4 className="mb-2 font-medium text-teal-800">
              Immigration Purpose
            </h4>
            <p className="text-sm text-teal-700">
              For immigration purposes, Ecctis assessments are crucial for
              Skilled Worker visas when applicants use their qualifications to:
            </p>
            <ul className="mt-2 space-y-1">
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-teal-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-teal-700">
                  Meet English language requirements (if taught in English)
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-teal-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-teal-700">
                  Prove qualification level for skill requirements
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-teal-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-teal-700">
                  Qualify for tradeable points in the points-based system
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    question: "Who requires a TB certificate?",
    answer: (
      <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-md">
        <div className="flex flex-col gap-4 md:flex-row md:items-start">
          <div className="flex-shrink-0">
            <div className="rounded-full bg-rose-100 p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-8 w-8 text-rose-600"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="mb-3 text-lg font-bold text-gray-800">
              TB Certificate Requirements
            </h3>
            <p className="mb-4 text-gray-700">
              Applicants must provide a tuberculosis (TB) test certificate if
              they are applying to come to the UK for more than 6 months and are
              resident in one of the countries listed by the UK Home Office. The
              test must be conducted at a clinic approved by the UK Home Office.
            </p>

            <div className="mb-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <h4 className="mb-2 flex items-center font-medium text-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-2 h-5 w-5 text-rose-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Validity Period
                </h4>
                <p className="text-sm text-gray-600">
                  A valid TB certificate is required as part of the visa
                  application process and must be dated within 6 months of the
                  application.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <h4 className="mb-2 flex items-center font-medium text-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-2 h-5 w-5 text-rose-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Approved Clinics
                </h4>
                <p className="text-sm text-gray-600">
                  Tests must be conducted at a clinic that's been approved by
                  the UK Home Office. A list is available on the UK government
                  website.
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-rose-100 bg-rose-50 p-4">
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-2 h-6 w-6 flex-shrink-0 text-rose-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <p className="mb-1 font-medium text-rose-800">
                    Important Note
                  </p>
                  <p className="text-sm text-rose-700">
                    Children under 11 years old do not need to take a TB test.
                    Pregnant women may need to take a chest X-ray with
                    appropriate shielding, or they may be able to defer the test
                    until after delivery.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-1 h-4 w-4 text-rose-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
                Check eligible countries
              </span>
              <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-1 h-4 w-4 text-rose-500"
                >
                  <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                </svg>
                Check approved clinics
              </span>
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
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-3">
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
                <div className="mr-2 rounded-full bg-emerald-100 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4 text-emerald-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-sm text-gray-700">
                  Decision within 5 working days
                </p>
              </div>
              <div className="mb-3 flex items-center">
                <div className="mr-2 rounded-full bg-emerald-100 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4 text-emerald-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-sm text-gray-700">
                  Additional fee varies by location
                </p>
              </div>
              <div className="flex items-center">
                <div className="mr-2 rounded-full bg-emerald-100 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4 text-emerald-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-sm text-gray-700">
                  Available for most visa types
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg bg-white shadow-md md:w-1/2">
            <div className="bg-gradient-to-r from-indigo-500 to-violet-600 p-3">
              <h4 className="flex items-center font-bold text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-2 h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                Super Priority Service (1-2 Days)
              </h4>
            </div>
            <div className="p-4">
              <div className="mb-3 flex items-center">
                <div className="mr-2 rounded-full bg-indigo-100 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4 text-indigo-600"
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
                <div className="mr-2 rounded-full bg-indigo-100 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4 text-indigo-600"
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
                <div className="mr-2 rounded-full bg-indigo-100 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4 text-indigo-600"
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
  {
    question:
      "How do I get a refund for the Immigration Health Surcharge (IHS)?",
    answer: (
      <div className="overflow-hidden rounded-xl bg-white shadow-lg">
        <div className="h-2 bg-gradient-to-r from-emerald-400 to-cyan-400"></div>
        <div className="p-6">
          <h3 className="mb-4 flex items-center text-lg font-bold text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mr-2 h-6 w-6 text-emerald-500"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM9 7.5A.75.75 0 009 9h1.5c.98 0 1.813.626 2.122 1.5H9A.75.75 0 009 12h3.622a2.251 2.251 0 01-2.122 1.5H9a.75.75 0 00-.53 1.28l3 3a.75.75 0 101.06-1.06L10.8 14.988A3.752 3.752 0 0014.175 12H15a.75.75 0 000-1.5h-.825A3.733 3.733 0 0013.5 9H15a.75.75 0 000-1.5H9z"
                clipRule="evenodd"
              />
            </svg>
            IHS Refund Eligibility
          </h3>

          <p className="mb-4 text-gray-700">
            Refunds are available for the Immigration Health Surcharge (IHS) in
            specific situations. You may be eligible for a full or partial
            refund if:
          </p>

          <div className="mb-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
              <div className="flex flex-col items-center text-center">
                <div className="mb-3 rounded-full bg-red-100 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6 text-red-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h4 className="font-medium text-gray-800">
                  Application Refused
                </h4>
                <p className="mt-1 text-sm text-gray-600">
                  Your visa application was refused or withdrawn
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
              <div className="flex flex-col items-center text-center">
                <div className="mb-3 rounded-full bg-yellow-100 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6 text-yellow-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h4 className="font-medium text-gray-800">Early Departure</h4>
                <p className="mt-1 text-sm text-gray-600">
                  You left the UK with at least 6 months remaining on your visa
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
              <div className="flex flex-col items-center text-center">
                <div className="mb-3 rounded-full bg-blue-100 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6 text-blue-500"
                  >
                    <path d="M11.625 16.5a1.875 1.875 0 100-3.75 1.875 1.875 0 000 3.75z" />
                    <path
                      fillRule="evenodd"
                      d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zm6 16.5c.66 0 1.277-.19 1.797-.518l1.048 1.048a.75.75 0 001.06-1.06l-1.047-1.048A3.375 3.375 0 1011.625 18z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h4 className="font-medium text-gray-800">Double Payment</h4>
                <p className="mt-1 text-sm text-gray-600">
                  You paid the IHS twice by mistake or for overlapping periods
                </p>
              </div>
            </div>
          </div>

          <div className="mb-6 rounded-lg border border-cyan-100 bg-cyan-50 p-4">
            <h4 className="mb-2 flex items-center font-medium text-cyan-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-2 h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M9.75 6.75h-3a3 3 0 00-3 3v7.5a3 3 0 003 3h7.5a3 3 0 003-3v-7.5a3 3 0 00-3-3h-3V1.5a.75.75 0 00-1.5 0v5.25zm0 0h1.5v5.69l1.72-1.72a.75.75 0 111.06 1.06l-3 3a.75.75 0 01-1.06 0l-3-3a.75.75 0 111.06-1.06l1.72 1.72V6.75z"
                  clipRule="evenodd"
                />
              </svg>
              Refund Process
            </h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="mr-2 mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-cyan-200 text-xs font-bold text-cyan-600">
                  1
                </div>
                <p className="text-sm text-cyan-700">
                  Apply online through the UK Government website using the IHS
                  refund application form
                </p>
              </div>
              <div className="flex items-start">
                <div className="mr-2 mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-cyan-200 text-xs font-bold text-cyan-600">
                  2
                </div>
                <p className="text-sm text-cyan-700">
                  Provide your IHS reference number and supporting evidence
                </p>
              </div>
              <div className="flex items-start">
                <div className="mr-2 mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-cyan-200 text-xs font-bold text-cyan-600">
                  3
                </div>
                <p className="text-sm text-cyan-700">
                  Processing times typically range from 6 weeks to 3 months
                </p>
              </div>
            </div>
          </div>

          <div className="flex rounded-lg border border-amber-100 bg-amber-50 p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mr-3 h-6 w-6 flex-shrink-0 text-amber-500"
            >
              <path
                fillRule="evenodd"
                d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <p className="mb-1 font-medium text-amber-800">Important Note</p>
              <p className="text-sm text-amber-700">
                For early departure refunds, you must apply within 3 months of
                leaving the UK. You'll need to provide evidence of your
                departure date, such as boarding passes or travel tickets.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export default faqItems;
