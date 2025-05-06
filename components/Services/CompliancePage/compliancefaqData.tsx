import React from "react";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqItems: FAQItem[] = [
  {
    question: "What happens if a Sponsor Licence is suspended?",
    answer: (
      <div className="space-y-2">
        <p>
          The sponsor will receive a notification via email, with 20 working
          days to respond in writing. During suspension, the sponsor cannot
          assign any Certificates of Sponsorship (CoS) and will be removed
          temporarily from the public register.
        </p>
        <div className="mt-3 rounded border-l-4 border-yellow-400 bg-yellow-50 p-3 text-yellow-800">
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-6 w-6 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <p>
              <span className="font-medium">Important:</span> During suspension,
              all existing sponsored workers can continue their employment, but
              no new workers can be sponsored.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    question: "How can sponsors prepare for a Home Office compliance audit?",
    answer: (
      <div className="space-y-3">
        <p>Sponsors should:</p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded border border-blue-100 bg-blue-50 p-3">
            <p className="font-medium">Documentation Preparation</p>
            <ul className="mt-1 list-disc space-y-1 pl-5 text-sm">
              <li>
                Ensure all records are accurate, up-to-date, and easily
                accessible
              </li>
              <li>Organise files systematically by worker</li>
              <li>Create a document checklist for each sponsored employee</li>
            </ul>
          </div>
          <div className="rounded border border-blue-100 bg-blue-50 p-3">
            <p className="font-medium">Personnel Training</p>
            <ul className="mt-1 list-disc space-y-1 pl-5 text-sm">
              <li>
                Train key personnel on compliance duties and responsibilities
              </li>
              <li>Ensure HR team understands reporting requirements</li>
              <li>
                Prepare staff for potential interviews with compliance officers
              </li>
            </ul>
          </div>
          <div className="rounded border border-blue-100 bg-blue-50 p-3">
            <p className="font-medium">Process Implementation</p>
            <ul className="mt-1 list-disc space-y-1 pl-5 text-sm">
              <li>
                Establish clear internal processes for monitoring and reporting
              </li>
              <li>Create written compliance procedures</li>
              <li>Implement tracking systems for visa expiry dates</li>
            </ul>
          </div>
          <div className="rounded border border-blue-100 bg-blue-50 p-3">
            <p className="font-medium">Proactive Review</p>
            <ul className="mt-1 list-disc space-y-1 pl-5 text-sm">
              <li>
                Conduct regular internal audits to identify and rectify
                potential issues
              </li>
              <li>Consider engaging immigration specialists for mock audits</li>
              <li>Review previous audit findings if applicable</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    question: "What are common compliance pitfalls that sponsors should avoid?",
    answer: (
      <div className="space-y-3">
        <p>Common issues include:</p>
        <div className="mt-2 overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2 font-medium">
                  Compliance Area
                </th>
                <th className="border border-gray-300 p-2 font-medium">
                  Common Mistakes
                </th>
                <th className="border border-gray-300 p-2 font-medium">
                  Best Practices
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2 font-medium">
                  Right-to-Work Checks
                </td>
                <td className="border border-gray-300 p-2">
                  Failure to conduct proper checks or follow the correct
                  procedure
                </td>
                <td className="border border-gray-300 p-2">
                  Use the Home Office online checking service and keep dated
                  records of all checks
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-2 font-medium">
                  Record-keeping
                </td>
                <td className="border border-gray-300 p-2">
                  Inadequate or disorganised documentation
                </td>
                <td className="border border-gray-300 p-2">
                  Maintain a comprehensive digital filing system with regular
                  audits
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-medium">
                  Reporting
                </td>
                <td className="border border-gray-300 p-2">
                  Delayed reporting of changes in worker's circumstances
                </td>
                <td className="border border-gray-300 p-2">
                  Set up calendar reminders and clear responsibilities for SMS
                  reporting
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-2 font-medium">
                  Salary Compliance
                </td>
                <td className="border border-gray-300 p-2">
                  Non-compliance with UK employment laws, such as underpayment
                </td>
                <td className="border border-gray-300 p-2">
                  Regular payroll audits to ensure actual payments match CoS
                  declarations
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    question: "How does non-compliance affect sponsored workers?",
    answer: (
      <div className="space-y-3">
        <p>Non-compliance can lead to:</p>
        <div className="mt-2 grid gap-3 md:grid-cols-3">
          <div className="rounded border border-yellow-100 bg-yellow-50 p-3">
            <div className="mb-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1 h-5 w-5 text-yellow-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="font-medium">Visa Curtailment</p>
            </div>
            <p className="text-sm">
              Worker's visa may be shortened to 60 days, requiring them to find
              a new sponsor or leave the UK
            </p>
          </div>
          <div className="rounded border border-yellow-100 bg-yellow-50 p-3">
            <div className="mb-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1 h-5 w-5 text-yellow-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              <p className="font-medium">Employment Disruption</p>
            </div>
            <p className="text-sm">
              Sudden job loss and disruption to personal and family life
            </p>
          </div>
          <div className="rounded border border-yellow-100 bg-yellow-50 p-3">
            <div className="mb-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1 h-5 w-5 text-yellow-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <p className="font-medium">Potential Exploitation</p>
            </div>
            <p className="text-sm">
              Risk of unfair treatment if sponsor doesn't follow proper
              procedures
            </p>
          </div>
        </div>
        <div className="mt-3 rounded border-l-4 border-blue-400 bg-blue-50 p-3 text-blue-800">
          <p>
            <span className="font-medium">Worker rights:</span> Sponsored
            workers can report compliance concerns to the Home Office if they
            believe their sponsor is not meeting their obligations.
          </p>
        </div>
      </div>
    ),
  },
  {
    question: "Are sponsors responsible for third-party recruitment practices?",
    answer: (
      <div className="space-y-3">
        <p>
          <span className="font-medium text-green-600">Yes</span>, sponsors must
          ensure that any third-party recruiters comply with UK immigration laws
          and do not engage in unethical practices, such as charging workers
          illegal fees. Failure to oversee third-party compliance can result in
          penalties for the sponsor.
        </p>
        <div className="mt-3 rounded-lg border border-gray-200 bg-gray-50 p-4">
          <h4 className="mb-2 text-lg font-medium">
            Third-Party Oversight Responsibilities:
          </h4>
          <div className="space-y-2">
            <div className="flex items-start">
              <div className="mr-2 mt-1 rounded-full bg-red-100 p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-red-600"
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
              </div>
              <p>
                <span className="font-medium">Prohibited:</span> Allowing
                recruiters to charge visa application fees to workers
              </p>
            </div>
            <div className="flex items-start">
              <div className="mr-2 mt-1 rounded-full bg-red-100 p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-red-600"
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
              </div>
              <p>
                <span className="font-medium">Prohibited:</span> Turning a blind
                eye to illegal recruitment fees in other countries
              </p>
            </div>
            <div className="flex items-start">
              <div className="mr-2 mt-1 rounded-full bg-green-100 p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-green-600"
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
              </div>
              <p>
                <span className="font-medium">Required:</span> Documented due
                diligence on recruitment partners
              </p>
            </div>
            <div className="flex items-start">
              <div className="mr-2 mt-1 rounded-full bg-green-100 p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-green-600"
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
              </div>
              <p>
                <span className="font-medium">Required:</span> Clear contractual
                terms prohibiting illegal recruitment practices
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    question: "How can sponsors ensure ongoing compliance?",
    answer: (
      <div className="space-y-4">
        <p className="mb-2 font-medium text-gray-700">Sponsors should:</p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="overflow-hidden rounded-xl bg-blue-50 shadow-sm transition-shadow hover:shadow-md">
            <div className="h-2 bg-gradient-to-r from-blue-500/50 to-cyan-400/50"></div>
            <div className=" p-5">
              <div className="mb-3 flex items-center">
                <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600">
                  1
                </div>
                <h4 className="font-semibold text-gray-800">Stay Updated</h4>
              </div>
              <p className="text-sm text-gray-600">
                Stay updated with changes in immigration laws and sponsor
                guidance through Home Office newsletters and updates
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl bg-blue-50 shadow-sm transition-shadow hover:shadow-md">
            <div className="h-2 bg-gradient-to-r from-teal-500/50 to-emerald-400/50"></div>
            <div className=" p-5">
              <div className="mb-3 flex items-center">
                <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 text-sm font-bold text-teal-600">
                  2
                </div>
                <h4 className="font-semibold text-gray-800">Review Policies</h4>
              </div>
              <p className="text-sm text-gray-600">
                Regularly review and update internal policies and procedures to
                reflect current requirements
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl bg-blue-50 shadow-sm transition-shadow hover:shadow-md">
            <div className="h-2 bg-gradient-to-r from-violet-500/50 to-purple-400/50"></div>
            <div className=" p-5">
              <div className="mb-3 flex items-center">
                <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-violet-100 text-sm font-bold text-violet-600">
                  3
                </div>
                <h4 className="font-semibold text-gray-800">Train Staff</h4>
              </div>
              <p className="text-sm text-gray-600">
                Provide continuous training for staff involved in sponsorship,
                especially after regulatory changes
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl bg-blue-50 shadow-sm transition-shadow hover:shadow-md">
            <div className="h-2 bg-gradient-to-r from-rose-500/50 to-pink-400/50"></div>
            <div className=" p-5">
              <div className="mb-3 flex items-center">
                <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-rose-100 text-sm font-bold text-rose-600">
                  4
                </div>
                <h4 className="font-semibold text-gray-800">Seek Advice</h4>
              </div>
              <p className="text-sm text-gray-600">
                Get legal advice when uncertain about compliance matters or when
                facing complex situations
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-lg border border-green-100 bg-gradient-to-r from-green-50 to-emerald-50 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-3 mt-0.5 h-5 w-5 text-green-700"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-green-800">Pro tip</p>
              <p className="text-sm text-green-700">
                Consider appointing a dedicated compliance officer who takes
                responsibility for all sponsor licence matters.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    question: "Can a sponsor licence be revoked?",
    answer: (
      <div className="space-y-2">
        <p>
          <span className="font-medium text-red-600">Yes</span>, licences can be
          revoked for significant compliance breaches. Upon revocation, the
          company is permanently removed from the sponsor register and cannot
          sponsor new workers.
        </p>
      </div>
    ),
  },
  {
    question: "Can sponsors appeal against a licence revocation?",
    answer: (
      <div className="space-y-2">
        <p>
          There is no right of appeal, but sponsors may seek a judicial review.
        </p>
        <div className="mt-3 rounded border-l-4 border-blue-400 bg-blue-50 p-3 text-blue-800">
          <p>
            <span className="font-medium">Legal Note:</span> Judicial review is
            a legal process that examines how the Home Office made its decision,
            not the merits of the decision itself.
          </p>
        </div>
      </div>
    ),
  },
  {
    question: "Can a company reapply after revocation?",
    answer: (
      <div className="space-y-2">
        <p>
          <span className="font-medium text-green-600">Yes</span>, after a
          12-month cooling-off period from the date of revocation notification.
        </p>
        <div className="mt-3 flex items-center rounded-lg border border-gray-200 bg-gray-50 p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-6 w-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p>
            The 12-month period is strictly enforced and applications submitted
            earlier will be automatically rejected.
          </p>
        </div>
      </div>
    ),
  },
  {
    question: "What happens to sponsored workers if the licence is revoked?",
    answer: (
      <div className="space-y-3">
        <p>
          Sponsored workers usually have their visa permissions shortened to 60
          days, during which they must find new sponsorship, switch visas, or
          leave the UK.
        </p>
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
          <h4 className="mb-2 text-lg font-medium">
            Options for affected workers:
          </h4>
          <div className="grid gap-3 md:grid-cols-3">
            <div className="rounded border border-green-100 bg-green-50 p-3">
              <p className="font-medium">Find new sponsor</p>
              <p className="mt-1 text-sm">
                Secure a new job with another licensed sponsor
              </p>
            </div>
            <div className="rounded border border-blue-100 bg-blue-50 p-3">
              <p className="font-medium">Switch visa category</p>
              <p className="mt-1 text-sm">
                Apply for a different visa type if eligible
              </p>
            </div>
            <div className="rounded border border-red-100 bg-red-50 p-3">
              <p className="font-medium">Leave the UK</p>
              <p className="mt-1 text-sm">
                Depart before visa curtailment deadline
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    question:
      "What does it mean if a sponsor licence is downgraded to a B-rating?",
    answer: (
      <div className="space-y-3">
        <p>
          This means the sponsor must follow an action plan (costing £1,476)
          within three months to regain an A-rating. During this period, new
          sponsorship is restricted.
        </p>
        <div className="mt-2 overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2 font-medium">
                  Rating
                </th>
                <th className="border border-gray-300 p-2 font-medium">
                  Can Sponsor New Workers?
                </th>
                <th className="border border-gray-300 p-2 font-medium">
                  Requirements
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2 font-medium">
                  A-Rating
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
                  Full compliance with sponsor duties
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-2 font-medium">
                  B-Rating
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
                  Must complete action plan within 3 months
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    question: "What key compliance areas must sponsors adhere to?",
    answer: (
      <div className="space-y-3">
        <ul className="list-disc space-y-2 pl-5">
          <li>Preventing illegal working</li>
          <li>Maintaining comprehensive record-keeping</li>
          <li>Fulfilling reporting duties within specified timeframes</li>
          <li>
            Complying with general sponsor duties outlined by the Home Office
          </li>
        </ul>
        <div className="mt-2 rounded-lg border border-blue-100 bg-blue-50 p-3">
          <p className="text-sm">
            Sponsors are expected to actively monitor and manage these
            obligations throughout the duration of their licence.
          </p>
        </div>
      </div>
    ),
  },
  {
    question: "What must sponsors report to the Home Office?",
    answer: (
      <div className="space-y-3">
        <p>
          Sponsors must report changes in employee circumstances, including
          absences of over 10 days without permission, termination of
          employment, significant job changes, or if the sponsored worker
          breaches visa conditions.
        </p>
        <div className="mt-2 rounded border-l-4 border-yellow-400 bg-yellow-50 p-3 text-yellow-800">
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-6 w-6 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p>
              <span className="font-medium">Time-sensitive:</span> Most changes
              must be reported within 10 working days via the Sponsor Management
              System (SMS).
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    question: "What are common compliance pitfalls?",
    answer: (
      <div className="space-y-3">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Failure to report organisational changes or employee circumstances
            timely
          </li>
          <li>Incorrect salary or work hours not matching the CoS details</li>
          <li>Missing or incomplete required documentation</li>
        </ul>
      </div>
    ),
  },
  {
    question: "How should sponsors prepare for a Home Office audit?",
    answer: (
      <div className="space-y-3">
        <p>
          Ensure records are accurate and accessible, key personnel understand
          compliance duties, and establish clear internal processes for
          maintaining compliance.
        </p>
        <div className="mt-2 rounded-lg border border-gray-200 bg-gray-50 p-4">
          <h4 className="mb-2 text-lg font-medium">
            Audit Preparation Checklist:
          </h4>
          <div className="space-y-2">
            <div className="flex items-start">
              <div className="mr-2 mt-1 rounded bg-green-100 p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-green-600"
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
              </div>
              <p>Review all sponsored worker files for completeness</p>
            </div>
            <div className="flex items-start">
              <div className="mr-2 mt-1 rounded bg-green-100 p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-green-600"
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
              </div>
              <p>
                Verify all job descriptions, salaries, and work locations match
                CoS information
              </p>
            </div>
            <div className="flex items-start">
              <div className="mr-2 mt-1 rounded bg-green-100 p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-green-600"
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
              </div>
              <p>
                Confirm all key personnel are properly trained on their
                responsibilities
              </p>
            </div>
            <div className="flex items-start">
              <div className="mr-2 mt-1 rounded bg-green-100 p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-green-600"
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
              </div>
              <p>
                Prepare a list of all sponsored workers with their roles and
                visa expiry dates
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    question: "What are the consequences of non-compliance?",
    answer: (
      <div className="space-y-3">
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2 font-medium">
                  Consequence
                </th>
                <th className="border border-gray-300 p-2 font-medium">
                  Impact
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">
                  Licence suspension
                </td>
                <td className="border border-gray-300 p-2">
                  Temporary inability to sponsor new workers
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-2">
                  Licence revocation
                </td>
                <td className="border border-gray-300 p-2">
                  Permanent removal from sponsor register
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">
                  Downgrade to B-rating
                </td>
                <td className="border border-gray-300 p-2">
                  Required action plan with fee of £1,476
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-2">
                  Financial penalties
                </td>
                <td className="border border-gray-300 p-2">
                  Fines up to £20,000 per illegal worker
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">
                  Criminal prosecution
                </td>
                <td className="border border-gray-300 p-2">
                  For severe violations of immigration laws
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-2">
                  Reputational damage
                </td>
                <td className="border border-gray-300 p-2">
                  Public listing of revoked sponsors
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    question: "Why is compliance with sponsor duties important?",
    answer: (
      <div className="space-y-3">
        <p>
          Compliance ensures that the UK's immigration laws are upheld,
          preventing abuse of the system. It also protects sponsored workers
          from exploitation and safeguards the sponsor's reputation and ability
          to employ international talent.
        </p>
        <div className="mt-3 grid gap-3 md:grid-cols-3">
          <div className="rounded border border-blue-100 bg-blue-50 p-3">
            <p className="font-medium">Legal Protection</p>
            <p className="mt-1 text-sm">
              Prevents violations of immigration law and potential penalties
            </p>
          </div>
          <div className="rounded border border-green-100 bg-green-50 p-3">
            <p className="font-medium">Worker Protection</p>
            <p className="mt-1 text-sm">
              Ensures fair treatment and prevents exploitation
            </p>
          </div>
          <div className="rounded border border-purple-100 bg-purple-50 p-3">
            <p className="font-medium">Business Continuity</p>
            <p className="mt-1 text-sm">
              Maintains ability to recruit and retain global talent
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    question: "What records must a sponsor maintain for each sponsored worker?",
    answer: (
      <div className="space-y-3">
        <p>Sponsors are required to keep copies of:</p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="space-y-2">
            <div className="flex items-start">
              <div className="mr-2 mt-1 rounded-full bg-blue-100 p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <p>
                The worker's passport, including personal details and visa
                endorsements
              </p>
            </div>
            <div className="flex items-start">
              <div className="mr-2 mt-1 rounded-full bg-blue-100 p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <p>Biometric Residence Permit (BRP) or eVisa (from 2025)</p>
            </div>
            <div className="flex items-start">
              <div className="mr-2 mt-1 rounded-full bg-blue-100 p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <p>National Insurance number</p>
            </div>
            <div className="flex items-start">
              <div className="mr-2 mt-1 rounded-full bg-blue-100 p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <p>Employment contract and job description</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-start">
              <div className="mr-2 mt-1 rounded-full bg-blue-100 p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <p>Proof of qualifications and professional accreditations</p>
            </div>
            <div className="flex items-start">
              <div className="mr-2 mt-1 rounded-full bg-blue-100 p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <p>Records of attendance and absences</p>
            </div>
            <div className="flex items-start">
              <div className="mr-2 mt-1 rounded-full bg-blue-100 p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <p>Contact details</p>
            </div>
          </div>
        </div>
        <div className="mt-2 rounded border-l-4 border-yellow-400 bg-yellow-50 p-3 text-yellow-800">
          <p>
            <span className="font-medium">Record retention:</span> These records
            must be maintained throughout employment and for at least one year
            after sponsorship ends.
          </p>
        </div>
      </div>
    ),
  },
  {
    question:
      "How should sponsors monitor and report changes in a sponsored worker's employment?",
    answer: (
      <div className="space-y-3">
        <p>
          Sponsors must use the Sponsorship Management System (SMS) to report
          significant changes within 10-20 working days, including:
        </p>
        <div className="mt-2 overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2 font-medium">
                  Change Type
                </th>
                <th className="border border-gray-300 p-2 font-medium">
                  Reporting Deadline
                </th>
                <th className="border border-gray-300 p-2 font-medium">
                  Details Required
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">
                  Employment status changes
                </td>
                <td className="border border-gray-300 p-2 text-center">
                  10 working days
                </td>
                <td className="border border-gray-300 p-2">
                  Date, reason, any settlement payments
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-2">
                  Job role or salary changes
                </td>
                <td className="border border-gray-300 p-2 text-center">
                  10 working days
                </td>
                <td className="border border-gray-300 p-2">
                  New title, duties, salary, SOC code if applicable
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">
                  Unexplained absences
                </td>
                <td className="border border-gray-300 p-2 text-center">
                  10 working days
                </td>
                <td className="border border-gray-300 p-2">
                  First date of absence, any known information
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-2">
                  Non-commencement of employment
                </td>
                <td className="border border-gray-300 p-2 text-center">
                  10 working days
                </td>
                <td className="border border-gray-300 p-2">
                  Expected start date, reason if known
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">
                  Visa condition breaches
                </td>
                <td className="border border-gray-300 p-2 text-center">
                  Immediately
                </td>
                <td className="border border-gray-300 p-2">
                  Nature of breach, supporting evidence
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
      "What are the potential consequences of non-compliance with sponsor duties?",
    answer: (
      <div className="space-y-3">
        <p>Failure to comply can lead to:</p>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded border border-red-100 bg-red-50 p-3">
            <div className="mb-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1 h-5 w-5 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <p className="font-medium">Licence Actions</p>
            </div>
            <p className="text-sm">
              Suspension or revocation of the sponsor licence
            </p>
          </div>
          <div className="rounded border border-red-100 bg-red-50 p-3">
            <div className="mb-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1 h-5 w-5 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="font-medium">Financial Penalties</p>
            </div>
            <p className="text-sm">Fines up to £20,000 per illegal worker</p>
          </div>
          <div className="rounded border border-red-100 bg-red-50 p-3">
            <div className="mb-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1 h-5 w-5 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <p className="font-medium">Criminal Prosecution</p>
            </div>
            <p className="text-sm">For severe violations of immigration laws</p>
          </div>
          <div className="rounded border border-red-100 bg-red-50 p-3">
            <div className="mb-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1 h-5 w-5 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              <p className="font-medium">Reputational Damage</p>
            </div>
            <p className="text-sm">Public listing of non-compliant sponsors</p>
          </div>
          <div className="rounded border border-red-100 bg-red-50 p-3">
            <div className="mb-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1 h-5 w-5 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                />
              </svg>
              <p className="font-medium">Inability to Sponsor</p>
            </div>
            <p className="text-sm">Cannot sponsor new workers or renewals</p>
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
    question: "What are Online RTW checks?",
    answer: (
      <div className="space-y-2">
        <p>
          Online Right to Work (RTW) checks are digital checks used to verify
          whether an individual has the legal right to work in the UK. Employers
          must conduct these checks before employment begins and during
          continued employment where necessary. From 6 April 2022, online RTW
          checks are mandatory for individuals who hold:
        </p>
        <ul className="list-disc space-y-1 pl-6">
          <li>
            A Biometric Residence Card (BRC), Biometric Residence Permit (BRP)
            or Frontier Worker Permit
          </li>
          <li>A status under the EU Settlement Scheme (EUSS)</li>
          <li>A visa status under the points-based immigration system</li>
        </ul>
        <p>
          To complete an online check, the employee must provide a share code
          and their date of birth. Employers then use the Home Office's online
          service to confirm the individual's eligibility to work.
        </p>
        <p>
          Employers must retain evidence of the RTW check—this includes a PDF or
          screenshot of the status result page showing the employee's name,
          photo, and eligibility to work. Failure to conduct or document RTW
          checks correctly can result in civil penalties or criminal sanctions.
        </p>
      </div>
    ),
  },
  {
    question: "How should employers monitor employee documentation?",
    answer: (
      <div className="space-y-2">
        <p>
          Employers must maintain accurate and up-to-date records for all
          sponsored workers as specified in Appendix D of the sponsor guidance.
          This includes:
        </p>
        <ul className="list-disc space-y-1 pl-6">
          <li>
            Passport and visa/immigration status documents (e.g., BRP or eVisa)
          </li>
          <li>
            Contact details, including UK residential address, email, and phone
            number
          </li>
          <li>Employment contracts and job descriptions</li>
          <li>
            Copies of qualifications or professional accreditations used to
            assess suitability
          </li>
          <li>Right to work checks and visa expiry tracking</li>
          <li>
            Records of absences, annual leave, sick leave, and other unpaid
            leave
          </li>
          <li>
            Evidence of how the employee was recruited, especially for
            non-advertised roles
          </li>
        </ul>
        <p>
          These records should be stored securely (digitally or physically) and
          be readily accessible during a Home Office compliance visit. Employers
          are encouraged to carry out regular internal audits to ensure ongoing
          compliance.
        </p>
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
];

export default faqItems;
