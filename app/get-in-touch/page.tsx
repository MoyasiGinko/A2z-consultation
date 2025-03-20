import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get In Touch - A2Z",
  description: "A2Z Immigrants",
  // other metadata
};

const GetInTouchPage = () => {
  return (
    <div className="pb-20 pt-40">
      <Contact />
    </div>
  );
};

export default GetInTouchPage;
