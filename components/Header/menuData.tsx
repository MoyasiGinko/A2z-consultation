import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 55,
        title: "Sponsor Licence",
        newTab: false,
        path: "/services/sponsor-licence",
      },

      {
        id: 54,
        title: "Compliance",
        newTab: false,
        path: "/services/compliance",
      },

      {
        id: 51,
        title: "Skilled Worker Visa",
        newTab: false,
        path: "/services/skilled-worker-visa",
      },
    ],
  },

  {
    id: 5,
    title: "Our Clients",
    newTab: false,
    path: "/our-clients",
  },
  {
    id: 2,
    title: "About Us",
    newTab: false,
    path: "/about-us",
  },
  {
    id: 3,
    title: "Blog",
    newTab: false,
    path: "/blog",
  },
  {
    id: 4,
    title: "Free Stuff",
    newTab: false,
    path: "/free-stuff",
  },
];

export default menuData;
