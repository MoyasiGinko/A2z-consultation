import AboutUs from "@/components/AboutUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - A2Z",
  description: "A2Z Immgiants",
  // other metadata
};

export default function AboutPage() {
  return <AboutUs />;
}
