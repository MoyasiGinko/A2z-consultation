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
              <li>Organize files systematically by worker</li>
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
                  Inadequate or disorganized documentation
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
];

export default faqItems;
