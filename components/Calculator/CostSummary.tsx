import React, { useState } from "react";
import { CalculatorState, Costs } from "./index";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  costs: Costs;
  state: CalculatorState;
}

const CostSummary: React.FC<Props> = ({ costs, state }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const formatGBP = (num: number) =>
    new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      maximumFractionDigits: 0,
    }).format(num);

  const SummaryContent = () => (
    <div className="flex flex-col gap-5 text-sm">
      <div className="pb-4 border-b border-stroke dark:border-strokedark">
        <h4 className="font-semibold text-black dark:text-white mb-3 text-base">
          Sponsor Costs
        </h4>
        <div className="flex justify-between mb-2 text-waterloo">
          <span>Licence Fee</span>
          <span className="font-medium text-black dark:text-white">
            {formatGBP(costs.sponsorLicence)}
          </span>
        </div>
        {costs.licencePriority > 0 && (
          <div className="flex justify-between mb-2 text-waterloo">
            <span>Licence Priority</span>
            <span className="font-medium text-black dark:text-white">
              {formatGBP(costs.licencePriority)}
            </span>
          </div>
        )}
        <div className="flex justify-between mb-2 text-waterloo">
          <span>Certificate of Sponsorship (CoS)</span>
          <span className="font-medium text-black dark:text-white">
            {formatGBP(costs.cos)}
          </span>
        </div>
        <div className="flex justify-between text-waterloo">
          <span>Immigration Skills Charge (ISC)</span>
          <span className="font-medium text-black dark:text-white">
            {formatGBP(costs.isc)}
          </span>
        </div>
      </div>

      <div className="pb-4 border-b border-stroke dark:border-strokedark">
        <h4 className="font-semibold text-black dark:text-white mb-3 text-base">
          Applicant Costs (Visa + IHS)
        </h4>
        <div className="flex justify-between mb-2 text-waterloo">
          <span>Visa Application Fees</span>
          <span className="font-medium text-black dark:text-white">
            {formatGBP(costs.visaApplication)}
          </span>
        </div>
        <div className="flex justify-between mb-2 text-waterloo">
          <span>Immigration Health Surcharge</span>
          <span className="font-medium text-black dark:text-white">
            {formatGBP(costs.ihs)}
          </span>
        </div>
        {costs.visaPriority > 0 && (
          <div className="flex justify-between text-waterloo">
            <span>Visa Priority Service</span>
            <span className="font-medium text-black dark:text-white">
              {formatGBP(costs.visaPriority)}
            </span>
          </div>
        )}
      </div>

      <div className="pt-2">
        <div className="flex justify-between mb-2">
          <span className="font-medium text-black dark:text-white">
            Subtotal: Sponsor
          </span>
          <span className="font-semibold text-primary">
            {formatGBP(costs.totalSponsor)}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-black dark:text-white">
            Subtotal: Applicant
          </span>
          <span className="font-semibold text-primary">
            {formatGBP(costs.totalApplicant)}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop / Tablet View (Standard Card) */}
      <div className="hidden lg:block rounded-xl border-t-4 border-primary bg-white p-6 shadow-solid-5 dark:bg-blacksection">
        <h3 className="mb-6 text-2xl font-bold text-black dark:text-white">
          Cost Breakdown
        </h3>
        <SummaryContent />
        <div className="mt-6 rounded-lg bg-zumthor p-4 dark:bg-strokedark flex justify-between items-center">
          <span className="text-lg font-bold text-black dark:text-white">Total</span>
          <span className="text-2xl font-bold text-primary">
            {formatGBP(costs.grandTotal)}
          </span>
        </div>
      </div>

      {/* Mobile Sticky Footer */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-blacksection shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.1)] dark:shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.5)] border-t border-stroke dark:border-strokedark pb-safe">
        
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden bg-white dark:bg-blacksection"
            >
              <div className="p-5 max-h-[60vh] overflow-y-auto">
                <SummaryContent />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div 
          className="p-4 flex items-center justify-between cursor-pointer active:bg-gray-50 dark:active:bg-strokedark transition-colors"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div>
            <p className="text-xs text-waterloo font-medium mb-1">Estimated Total Cost</p>
            <p className="text-xl font-bold text-primary">{formatGBP(costs.grandTotal)}</p>
          </div>
          <button className="flex items-center justify-center w-10 h-10 rounded-full bg-zumthor dark:bg-strokedark text-primary">
            <svg
              className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Spacer for mobile to prevent content from being hidden behind sticky footer */}
      <div className="h-24 lg:hidden" />
    </>
  );
};

export default CostSummary;
