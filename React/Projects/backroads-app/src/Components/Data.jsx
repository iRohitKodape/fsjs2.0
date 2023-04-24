import tour1 from "../images/tour-1.jpeg";
import tour2 from "../images/tour-2.jpeg";
import tour3 from "../images/tour-3.jpeg";
import tour4 from "../images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#Home", text: "Home" },
  { id: 2, href: "#About", text: "About" },
  { id: 3, href: "#Services", text: "Services" },
  { id: 4, href: "#Tours", text: "Tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 2, href: "https://www.facebook.com", icon: " fab fa-facebook" },
  {
    id: 3,
    href: "https://www.squarespace.com",
    icon: "fab fa-squarespace",
  },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
];

export const tours = [
  {
    id: 1,
    img: tour1,
    date: "august 26th, 2020",
    titles: "Tibet Adventure",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    location: "china",
    duration: "6 days",
    cost: "from $2100",
  },
  {
    id: 2,
    img: tour2,
    date: "october 1th, 2020",
    titles: "best of java",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    location: "indonesia",
    duration: "11 days",
    cost: "from $1400",
  },
  {
    id: 3,
    img: tour3,

    date: "september 15th, 2020",
    titles: "explore hong kong",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    location: "hong kong",
    duration: "8 days",
    cost: "from $5000",
  },
  {
    id: 4,
    img: tour4,
    date: "december 5th, 2019",
    titles: "kenya highlights",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    location: "Kenya",
    duration: "20 days",
    cost: "from $3300",
  },
];
