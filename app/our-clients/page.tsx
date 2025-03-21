import React from "react";
import { Metadata } from "next";
import ClientsPage from "@/components/OurClients";
import ClientsHero from "@/components/OurClients/ClientsHero";

export const metadata: Metadata = {
  title: "Our Clients - A2Z",
  description: "A2Z Immigrants",
  // other metadata
};

const OurClientsPage = () => {
  return (
    <div>
      <ClientsHero />
      <ClientsPage />
    </div>
  );
};

export default OurClientsPage;
