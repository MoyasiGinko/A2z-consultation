// Extended interface to include video
export interface ClientInfo {
  id: string;
  name: string;
  title: string;
  socialLinks: {
    instagram?: string;
    youtube?: string;
  };
  description: string[];
  services: string[];
  testimonial: {
    quote: string;
    source: string;
    videoUrl?: string; // Added video URL
    videoThumbnail?: string; // Added video thumbnail
  };
  imageSrc: string;
}

export const clientData: ClientInfo[] = [
  {
    id: "ga-rd-ltd",
    name: "Yerasimos Angelis",
    title: "Managing Director of GA R&D LTD",
    socialLinks: {
      instagram: "https://instagram.com/yerasimosangelis",
      youtube: "https://youtube.com/yerasimosangelis",
    },
    description: [
      "GA R&D LTD, led by Managing Director Yerasimos Angelis, develops patented energy solutions from their Aberdeen headquarters. Operating across nine countries, this innovative company creates technologies that reduce costs and environmental impact in the global energy sector, addressing critical challenges in both the Oil & Gas and Power Generation industries.",
      "When Mr. Angelis sought our expertise, the company had completely lost access to the Sponsorship Management System (SMS) following the departure of their Authorising Officer. With no portal credentials and gaps in immigration compliance, they were unable to sponsor the skilled workers essential to their expanding technical operations.",
      "Our expert team liaised directly with the Home Office, managing all communications required to retrieve their SMS portal credentials. Following that, we conducted a full compliance audit and continue to maintain their sponsorship system in alignment with Home Office regulations. A2Z Immigration Solution LTD successfully recovered their SMS access, implemented monthly HR management, and secured an undefined Certificate of Sponsorship allocation. We now oversee their ongoing compliance, maintain employee records, and successfully guided their Skilled Worker visa application to approval — enabling GA R&D to focus fully on delivering pioneering energy solutions.",
    ],
    services: [
      "SMS Portal Recovery",
      "Compliance Audit",
      "HR Management",
      "Visa Application Support",
    ],
    testimonial: {
      quote:
        "A huge thank you to Fiyadh and his team for expertly guiding us through the process of maintaining our Sponsor Licence. Their deep expertise in immigration compliance, especially in SMS portal management and HR compliance, has been invaluable in keeping us fully aligned with all regulations.",
      source: "Yerasimos Angelis, Managing Director of GA R&D LTD",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      videoThumbnail: "/images/clients/thumbnail1.png",
      // No thumbnail - will use the iframe itself
    },
    imageSrc: "/images/clients/client1.png",
  },
];
