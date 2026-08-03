"use client";

import React, { useState, useMemo } from "react";
import CalculatorForm from "./CalculatorForm";
import CostSummary from "./CostSummary";

export type CalculatorState = {
  sponsorSize: "small" | "large";
  licenceType:
    | "worker"
    | "worker_temp"
    | "temp_only"
    | "add_worker"
    | "add_temp"
    | "none";
  preLicencePriority: boolean;
  postLicencePriority: boolean;
  location: "inside" | "outside";
  visaDuration: number; // 1 to 5
  salaryList: boolean;
  mainApplicants: number;
  adultDependants: number;
  childDependants: number;
  visaPriority: "standard" | "priority" | "super_priority";
};

export type Costs = {
  sponsorLicence: number;
  licencePriority: number;
  cos: number;
  isc: number;
  visaApplication: number;
  ihs: number;
  visaPriority: number;
  totalSponsor: number;
  totalApplicant: number;
  grandTotal: number;
};

const Calculator = () => {
  const [state, setState] = useState<CalculatorState>({
    sponsorSize: "small",
    licenceType: "none",
    preLicencePriority: false,
    postLicencePriority: false,
    location: "outside",
    visaDuration: 3,
    salaryList: false,
    mainApplicants: 1,
    adultDependants: 0,
    childDependants: 0,
    visaPriority: "standard",
  });

  const costs = useMemo<Costs>(() => {
    // 1. Sponsor Licence
    let sponsorLicence = 0;
    if (state.licenceType !== "none") {
      if (state.sponsorSize === "small") {
        if (["worker", "worker_temp", "temp_only"].includes(state.licenceType)) {
          sponsorLicence = 611;
        }
      } else {
        if (["worker", "worker_temp"].includes(state.licenceType)) {
          sponsorLicence = 1682;
        } else if (state.licenceType === "temp_only") {
          sponsorLicence = 611;
        } else if (state.licenceType === "add_worker") {
          sponsorLicence = 1071;
        }
      }
    }

    // 2. Licence Priority
    const licencePriority =
      (state.preLicencePriority ? 750 : 0) +
      (state.postLicencePriority ? 350 : 0);

    // 3. Visa Application Fee
    let visaPerPerson = 0;
    if (state.salaryList) {
      visaPerPerson = state.visaDuration <= 3 ? 628 : 1235;
    } else {
      if (state.location === "outside") {
        visaPerPerson = state.visaDuration <= 3 ? 819 : 1618;
      } else {
        visaPerPerson = state.visaDuration <= 3 ? 943 : 1865;
      }
    }
    const totalPeople =
      state.mainApplicants + state.adultDependants + state.childDependants;
    const visaApplication = visaPerPerson * totalPeople;

    // 4. IHS Fee
    const ihsAdults = (state.mainApplicants + state.adultDependants) * 1035 * state.visaDuration;
    const ihsChildren = state.childDependants * 776 * state.visaDuration;
    const ihs = ihsAdults + ihsChildren;

    // 5. Visa Priority
    let priorityPerPerson = 0;
    if (state.visaPriority === "priority") priorityPerPerson = 500;
    if (state.visaPriority === "super_priority") priorityPerPerson = 1000;
    const visaPriority = priorityPerPerson * totalPeople;

    // 6. CoS Fee
    const cos = 525 * state.mainApplicants;

    // 7. ISC Fee
    const iscFeePerYear = state.sponsorSize === "small" ? 480 : 1320;
    const isc = iscFeePerYear * state.visaDuration * state.mainApplicants;

    // Totals
    const totalSponsor = sponsorLicence + licencePriority + cos + isc;
    const totalApplicant = visaApplication + ihs + visaPriority;
    const grandTotal = totalSponsor + totalApplicant;

    return {
      sponsorLicence,
      licencePriority,
      cos,
      isc,
      visaApplication,
      ihs,
      visaPriority,
      totalSponsor,
      totalApplicant,
      grandTotal,
    };
  }, [state]);

  const updateState = (key: keyof CalculatorState, value: any) => {
    setState((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <section className="pt-[150px] pb-[120px]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4 text-black dark:text-white md:text-5xl">
            Immigration Fee <span className="text-primary">Calculator</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Estimate your UK Sponsor Licence and Skilled Worker visa fees instantly.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start relative">
          {/* Left Column: Form Inputs */}
          <div className="w-full lg:w-2/3 flex flex-col gap-6">
            <CalculatorForm state={state} updateState={updateState} />
          </div>

          {/* Right Column: Sticky Summary */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-32 z-40">
            <CostSummary costs={costs} state={state} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
