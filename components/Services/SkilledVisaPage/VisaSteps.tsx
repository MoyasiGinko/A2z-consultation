"use client";
import React from "react";
import Image from "next/image";

const VisaSteps: React.FC = () => {
  return (
    <div className="w-full">
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-cyan-500">Steps of Visa</h1>
      </div>

      <div className="bg-sky-200 px-4 py-0">
        <div className="mx-auto flex max-w-4xl flex-col md:flex-row">
          {/* Left side - vertical timeline with image */}
          <div className="flex w-full justify-center md:w-1/4">
            <div className="relative h-full">
              <div className="h-full">
                <Image
                  src="/images/features/steps-pillar.png"
                  alt="Steps timeline"
                  width={100}
                  height={400}
                  className="h-full object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* <div className="hidden w-1/6 md:block"></div> */}

          {/* Right side - steps content */}
          <div className="items-right justify-right mt-8 flex w-full flex-col py-10 md:mt-0 md:w-3/4">
            <h2 className="mb-6 text-center text-lg font-semibold md:text-left">
              STEP BY STEP PROCESS
            </h2>

            <div className="space-y-4">
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <div className="flex items-center">
                  <div className="mr-4">
                    <span className="font-bold text-gray-700">01.</span>
                  </div>
                  <div>
                    <p className="text-sm">
                      Create a business plan that includes the following
                      elements.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white p-4 shadow-sm">
                <div className="flex items-center">
                  <div className="mr-4">
                    <span className="font-bold text-gray-700">02.</span>
                  </div>
                  <div>
                    <p className="text-sm">
                      Develop and implement a marketing/sales action plan
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white p-4 shadow-sm">
                <div className="flex items-center">
                  <div className="mr-4">
                    <span className="font-bold text-gray-700">03.</span>
                  </div>
                  <div>
                    <p className="text-sm">
                      Make it simple for a customer to do business with you
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white p-4 shadow-sm">
                <div className="flex items-center">
                  <div className="mr-4">
                    <span className="font-bold text-gray-700">04.</span>
                  </div>
                  <div>
                    <p className="text-sm">
                      Look for a score mentor to help you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaSteps;
