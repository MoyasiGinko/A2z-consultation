import React from "react";
import { Metadata } from "next";

import Calculator from "@/components/Calculator";

export const metadata: Metadata = {
  title: "Calculator - A2Z",
  description: "A2Z Immigrants Calculator",
};

const CalculatorPage = () => {
  return <Calculator />;
};

export default CalculatorPage;
