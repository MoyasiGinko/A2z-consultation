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
        id: 51,
        title: "Visa Processing",
        newTab: false,
        path: "/services/visa-processing",
      },
      {
        id: 54,
        title: "Compliance",
        newTab: false,
        path: "/services/compliance",
      },

      {
        id: 56,
        title: "Student Visa",
        newTab: false,
        path: "/services/student-visa",
      },
      {
        id: 57,
        title: "Spouse Visa",
        newTab: false,
        path: "/services/spouse-visa",
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

  {
    id: 6,
    title: "Testimonials",
    newTab: false,
    path: "/testimonials",
  },
];

export default menuData;
