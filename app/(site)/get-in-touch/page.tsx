import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get In Touch - A2Z",
  description: "A2Z Immigrants",
  // other metadataa
};

const GetInTouchPage = () => {
  return (
    <div className="pb-20 pt-40">
      <Contact
        serviceId="service_yj3nlrh"
        templateId="template_nastr37"
        publicKey="8seFmYH7EcPOmhmGg"
      />
    </div>
  );
};

export default GetInTouchPage;
