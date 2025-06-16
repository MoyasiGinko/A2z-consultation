interface PackageFeature {
  text: string;
}

interface PricingPackage {
  name: string;
  tagline: string;
  text: string;
  color: string;
  ring: string;
  shadowColor: string;
  features: PackageFeature[];
  description: string;
  alwaysExpanded?: boolean;
}

const packages: PricingPackage[] = [
  {
    name: "Essential",
    tagline: "Esse magna sunt pariatur culpa quis",
    color: "#3d6582",
    ring: "#3d6582",
    text: "#ffb900",
    shadowColor: "rgba(135, 206, 235, 0.1)", // Sky color with alpha
    features: [
      { text: "Anim magna proident" },
      { text: "Voluptate labore fugiat amet" },
      { text: "Cillum dolore sit cillum" },
      { text: "Veniam aute mollit veniam" },
    ],
    description:
      "Lorem laboris consequat incididunt reprehenderit dolor tempor exercitation ullamco sunt sint cillum occaecat aliquip. Magna commodo et tempor ipsum ut ut ullamco pariatur excepteur mollit tempor. Anim laborum reprehenderit enim duis in minim culpa amet labore veniam fugiat.",
  },
  {
    name: "Enhanced",
    tagline: "Esse magna sunt pariatur culpa quis",
    color: "#7986cb",
    ring: "#7986cb",
    text: "#fff",
    shadowColor: "rgba(121, 134, 203, 0.1)", // RGB version of #7986cb with alpha
    features: [
      { text: "Anim magna proident" },
      { text: "Voluptate labore fugiat amet" },
      { text: "Cillum dolore sit cillum" },
      { text: "Veniam aute mollit veniam" },
    ],
    description:
      "Lorem laboris consequat incididunt reprehenderit dolor tempor exercitation ullamco sunt sint cillum occaecat aliquip. Magna commodo et tempor ipsum ut ut ullamco pariatur excepteur mollit tempor. Anim laborum reprehenderit enim duis in minim culpa amet labore veniam fugiat. Laboris esse qui Lorem in Lorem labore sit magna aliquip consectetur i",
  },
  {
    name: "Premium",
    tagline: "Esse magna sunt pariatur culpa quis",
    color: "#ffb900",
    ring: "#ffb900",
    text: "#000",
    shadowColor: "rgba(255, 185, 0, 0.1)", // RGB version of #ffb900 with alpha
    features: [
      { text: "Anim magna proident" },
      { text: "Voluptate labore fugiat amet" },
      { text: "Cillum dolore sit cillum" },
      { text: "Veniam aute mollit veniam" },
    ],
    description:
      "Lorem laboris consequat incididunt reprehenderit dolor tempor exercitation ullamco sunt sint cillum occaecat aliquip. Magna commodo et tempor ipsum ut ut ullamco pariatur excepteur mollit tempor. Anim laborum reprehenderit enim duis in minim culpa amet labore veniam fugiat.",
  },
];

export default packages;
