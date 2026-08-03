import React from "react";
import { CalculatorState } from "./index";

interface Props {
  state: CalculatorState;
  updateState: (key: keyof CalculatorState, value: any) => void;
}

const CalculatorForm: React.FC<Props> = ({ state, updateState }) => {
  return (
    <div className="flex flex-col gap-6">
      {/* 1. Sponsor Details */}
      <div className="rounded-lg border border-stroke bg-white p-6 shadow-solid-5 dark:border-strokedark dark:bg-blacksection">
        <h3 className="mb-5 text-xl font-semibold text-black dark:text-white">
          Sponsor Details
        </h3>
        
        <div className="mb-5">
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Sponsor Size
          </label>
          <div className="flex gap-3">
            {(["small", "large"] as const).map((size) => (
              <button
                key={size}
                onClick={() => updateState("sponsorSize", size)}
                className={`flex-1 rounded-md py-2.5 text-sm font-medium transition-colors ${
                  state.sponsorSize === size
                    ? "bg-primary text-white"
                    : "bg-stroke text-black hover:bg-opacity-80 dark:bg-strokedark dark:text-white"
                }`}
              >
                {size === "small" ? "Small / Charitable" : "Medium / Large"}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-5">
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Sponsor Licence Needs
          </label>
          <select
            value={state.licenceType}
            onChange={(e) => updateState("licenceType", e.target.value)}
            className="w-full rounded-md border border-stroke bg-transparent px-4 py-3 text-black focus:border-primary focus:outline-none dark:border-strokedark dark:text-white"
          >
            <option value="none">I already have a licence (No fee)</option>
            <option value="worker">Worker sponsor licence</option>
            <option value="worker_temp">Worker + Temporary Worker</option>
            <option value="temp_only">Temporary Worker only</option>
            <option value="add_worker">Add Worker to Temporary</option>
            <option value="add_temp">Add Temporary to Worker</option>
          </select>
        </div>

        <div className="mb-0">
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Licence Priority Services (Optional)
          </label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <label className="flex cursor-pointer items-center gap-3">
              <input
                type="checkbox"
                checked={state.preLicencePriority}
                onChange={(e) => updateState("preLicencePriority", e.target.checked)}
                className="h-5 w-5 rounded border-stroke text-primary accent-primary"
              />
              <span className="text-sm">Pre-licence priority</span>
            </label>
            <label className="flex cursor-pointer items-center gap-3">
              <input
                type="checkbox"
                checked={state.postLicencePriority}
                onChange={(e) => updateState("postLicencePriority", e.target.checked)}
                className="h-5 w-5 rounded border-stroke text-primary accent-primary"
              />
              <span className="text-sm">Post-licence priority</span>
            </label>
          </div>
        </div>
      </div>

      {/* 2. Visa Details */}
      <div className="rounded-lg border border-stroke bg-white p-6 shadow-solid-5 dark:border-strokedark dark:bg-blacksection">
        <h3 className="mb-5 text-xl font-semibold text-black dark:text-white">
          Visa Application Details
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <div>
            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
              Application Location
            </label>
            <div className="flex gap-3">
              {(["outside", "inside"] as const).map((loc) => (
                <button
                  key={loc}
                  onClick={() => updateState("location", loc)}
                  className={`flex-1 rounded-md py-2.5 text-sm font-medium transition-colors ${
                    state.location === loc
                      ? "bg-primary text-white"
                      : "bg-stroke text-black hover:bg-opacity-80 dark:bg-strokedark dark:text-white"
                  }`}
                >
                  {loc === "outside" ? "Outside UK" : "Inside UK"}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
              Is job on Salary List?
            </label>
            <div className="flex gap-3">
              {[true, false].map((val) => (
                <button
                  key={val.toString()}
                  onClick={() => updateState("salaryList", val)}
                  className={`flex-1 rounded-md py-2.5 text-sm font-medium transition-colors ${
                    state.salaryList === val
                      ? "bg-meta text-white"
                      : "bg-stroke text-black hover:bg-opacity-80 dark:bg-strokedark dark:text-white"
                  }`}
                >
                  {val ? "Yes (Lower Fee)" : "No"}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-5">
          <label className="mb-3 block text-sm font-medium text-black dark:text-white flex justify-between">
            <span>Visa Duration (Years)</span>
            <span className="text-primary font-bold">{state.visaDuration} Years</span>
          </label>
          <input
            type="range"
            min="1"
            max="5"
            step="1"
            value={state.visaDuration}
            onChange={(e) => updateState("visaDuration", parseInt(e.target.value))}
            className="w-full h-2 bg-stroke rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <div className="flex justify-between text-xs text-waterloo mt-2">
            <span>1 Year</span>
            <span>2 Years</span>
            <span>3 Years</span>
            <span>4 Years</span>
            <span>5 Years</span>
          </div>
        </div>
      </div>

      {/* 3. Applicants */}
      <div className="rounded-lg border border-stroke bg-white p-6 shadow-solid-5 dark:border-strokedark dark:bg-blacksection">
        <h3 className="mb-5 text-xl font-semibold text-black dark:text-white">
          Applicants
        </h3>

        <div className="flex flex-col gap-4 mb-6">
          {[
            { id: "mainApplicants", label: "Main Applicants", min: 1 },
            { id: "adultDependants", label: "Adult Dependants (Partner)", min: 0 },
            { id: "childDependants", label: "Child Dependants (Under 18)", min: 0 },
          ].map((item) => (
            <div key={item.id} className="flex items-center justify-between p-3 rounded bg-alabaster dark:bg-strokedark">
              <span className="text-sm font-medium text-black dark:text-white">
                {item.label}
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => updateState(item.id as any, Math.max(item.min, (state as any)[item.id] - 1))}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-stroke text-black hover:bg-primary hover:text-white transition"
                >
                  -
                </button>
                <span className="w-4 text-center font-semibold text-black dark:text-white">
                  {(state as any)[item.id]}
                </span>
                <button
                  onClick={() => updateState(item.id as any, (state as any)[item.id] + 1)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-stroke text-black hover:bg-primary hover:text-white transition"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-0">
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Visa Priority Service (Optional)
          </label>
          <select
            value={state.visaPriority}
            onChange={(e) => updateState("visaPriority", e.target.value)}
            className="w-full rounded-md border border-stroke bg-transparent px-4 py-3 text-black focus:border-primary focus:outline-none dark:border-strokedark dark:text-white"
          >
            <option value="standard">Standard Service (No extra fee)</option>
            <option value="priority">Priority Service (£500/person)</option>
            <option value="super_priority">Super Priority Service (£1000/person)</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default CalculatorForm;
