import React from "react";
import { Metadata } from "next";
import FreeStuff from "@/components/FreeStuff";

export const metadata: Metadata = {
  title: "Free Stuff - A2Z",
  description: "A2Z Immigrants",
  // other metadata
};

const FreeStuffPage = () => {
  return (
    <div>
      <FreeStuff publicKey="8seFmYH7EcPOmhmGg" />
    </div>
  );
};

export default FreeStuffPage;
