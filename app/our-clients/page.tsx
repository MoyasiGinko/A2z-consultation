import React from "react";
import { Metadata } from "next";
import ClientsPage from "@/components/OurClients";

export const metadata: Metadata = {
  title: "Our Clients - A2Z",
  description: "A2Z Immigrants",
  // other metadata
};

const OurClientsPage = () => {
  return (
    <div className="pb-20 pt-40">
      <ClientsPage />
    </div>
  );
};

export default OurClientsPage;
