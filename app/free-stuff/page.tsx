import React from "react";
import { Metadata } from "next";
import BoosterCard from "@/components/Boosters";

export const metadata: Metadata = {
  title: "Free Stuff - A2Z",
  description: "A2Z Immigrants",
  // other metadata
};

const FreeStuffPage = () => {
  return (
    <div className="pb-20 pt-40">
      <BoosterCard />
    </div>
  );
};

export default FreeStuffPage;
