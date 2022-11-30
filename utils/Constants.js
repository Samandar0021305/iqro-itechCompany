import Desktop from "../components/assets/png/Desktop.png";
import Desktop2 from "../components/assets/png/Desktop2.png";
import Desktop3 from "../components/assets/png/Desktop3.png";
import Desktop4 from "../components/assets/png/Desktop4.png";
import archer from "../assets/svgIcons/archi.svg";
import auto from "../assets/svgIcons/auto.svg";
import ci from "../assets/svgIcons/ci.svg";
import cloud from "../assets/svgIcons/cloud.svg";
import devops from "../assets/svgIcons/devops.svg";
import load from "../assets/svgIcons/load.svg";
import stres from "../assets/svgIcons/stres.svg";
import frontend from "../assets/svgIcons/frontend.svg";
import mobile from "../assets/svgIcons/mobil.svg";
import qa from "../assets/svgIcons/qa.svg";
import ux from "../assets/svgIcons/ux.svg";
import backend from "../assets/svgIcons/backed.svg";
import cons1 from "../assets/cons1.png";
import cons2 from "../assets/cons2.png";
import cons3 from "../assets/cons3.png";
import Fac from "../assets/facebook.png";
import Youteb from "../assets/youTube.png";
import Twwiter from "../assets/twwiter.png";
import InstataGram from "../assets/instagram.png";
import img1 from "../assets/our1.png";
import img2 from "../assets/our2.png";
import img3 from "../assets/our3.png";
import img4 from "../assets/our4.png";
import img5 from "../assets/our5.png";
import img6 from "../assets/our6.png";
import img7 from "../assets/our7.png";
import img8 from "../assets/our8.png";
import img9 from "../assets/our9.png";
import img10 from "../assets/our10.png";
import img11 from "../assets/our11.png";
import img12 from "../assets/our12.png";
import work1 from "../assets/work1.png";
import work2 from "../assets/work2.png";
import work3 from "../assets/work3.png";
import work4 from "../assets/work4.png";
import work5 from "../assets/work5.png";
import imgI1 from "../assets/ios.png";
import imgI2 from "../assets/andro.png";
import imgI3 from "../assets/bespro.png";
import Dev1 from "../assets/dev.png";
import Dev2 from "../assets/development2.png";
import Dev3 from "../assets/development3.png";

import Robo1 from "../assets/svgRobo/Robo1.svg";
import Robo2 from "../assets/svgRobo/Robo2.svg";
import Robo3 from "../assets/svgRobo/Robo3.svg";
import Robo4 from "../assets/svgRobo/Robo4.svg";
import Robo5 from "../assets/svgRobo/Robo5.svg";
import Robo6 from "../assets/svgRobo/Robo6.svg";

export let Services = [
  {
    post: "Development_of",
    img: Robo1,
    bottom: 0,
    left: 0,
    position: "bottom-0 right-0",
  },
  {
    post: "Development_implementation",
    img: Robo2,
    position: "bottom-0 right-0",
  },
  {
    post: "User_interface",
    img: Robo3,
    position: "bottom-0 right-0",
  },
  {
    post: "Business_It",
    img: Robo4,
    position: "bottom-0 right-0",
  },
  {
    post: "IT_consulting",
    img: Robo5,
    position: "top-0 right-0",
  },
  {
    post: "Information_technology",
    img: Robo6,
    position: "bottom-0 right-0",
  },
];

export const NavbarList = [
  {
    key: "#Direction",
    text: "Direction",
    id: 1,
  },
  {
    key: "#Command",
    text: "Command",
    id: 2,
  },
  {
    key: "#Services",
    text: "Services",
    id: 3,
  },
  {
    key: "#Tools",
    text: "Tools",
    id: 4,
  },
  {
    key: "#Clients",
    text: "Clients",
    id: 5,
  },
  {
    key: "#Portfolio",
    text: "Portfolio",
    id: 6,
  },
];

export const FooterList = [
  {
    text: "IT_consulting",
    key: "IT_consulting",
    id: 7,
  },

  {
    text: "Development_of",
    key: "Development_of",
    id: 8,
  },

  {
    text: "Development_implementation",
    key: "Development_implementation",
    id: 9,
  },
  {
    text: "User_interface",
    key: "User_interface",
    id: 10,
  },

  {
    text: "Business_It",
    key: "Business_It",
    id: 11,
  },
  {
    text: "Information_technology",
    key: "Information_technology",
    id: 12,
  },
];

export const Our = [
  {
    img: img1,
  },
  {
    img: img2,
  },
  {
    img: img3,
  },
  {
    img: img4,
  },
  {
    img: img5,
  },
  {
    img: img6,
  },
  {
    img: img7,
  },
  {
    img: img8,
  },
  {
    img: img9,
  },
  {
    img: img10,
  },
  {
    img: img11,
  },
  {
    img: img12,
  },
];

export const WorkedList = [
  {
    img: work1,
    title: "Contact",
    text: "Send us your project request or project idea.",
  },
  {
    img: work2,
    title: "Analysis",
    text: "We will contact you to clarify your project requirements.",
  },
  {
    img: work3,
    title: "Offer",
    text: "We will provide you with our free, non-binding application.",
  },
  {
    img: work4,
    title: "Team",
    text: "We provide a team for your requirements.",
  },
  {
    img: work5,
    title: "Start",
    text: "You will get to know the team and we'll get started.",
  },
];

export const Development = [
  {
    title: "iOS",
    src: imgI1,
    id: 1,
  },
  {
    title: "Android",
    src: imgI2,
    id: 2,
  },
  {
    title: "Android",
    src: imgI3,
    id: 3,
  },
];

export let Dev = [
  {
    text: "Swift",
    img: Dev1,
  },
  {
    text: "Kotlin",
    img: Dev2,
  },
  {
    text: "Flutter",
    img: Dev3,
  },
];

export const inputs = [
  {
    type: "text",
    placeholder: "Name",
    name: "name",
    style: " pl-3 border-[1px]  border-blackDev mt-[20px] rounded",
  },
  {
    type: "email",
    name: "email",
    placeholder: "Your email",
    style: "  pl-3 border-[1px]  border-blackDev mt-[20px] rounded",
  },
  {
    type: "text",
    name: "number",
    placeholder: "Your number",
    style: " pl-3 border-[1px]  border-blackDev mt-[20px] rounded",
  },
];

export const localization = [
  {
    img: cons1,
    text: "Almalyk city, Tashkent region, Amir Temur-29a",
  },
  {
    img: cons2,
    text: "+998 95 007 70 50",
  },
  {
    img: cons3,
    text: "sardorprogg@gmail.com",
  },
];

export const optimalComponents = [
  {
    id: 1,
    title: "optimization Infrastructures",
    desc: "text2",
    color: "blue",
    image: Desktop,
    flex: "",
    arr: [
      { id: 1, title: "Architecture", img: archer },
      { id: 2, title: "Autotesting", img: auto },
      { id: 3, title: "Stress testing", img: stres },
      { id: 4, title: "Load testing", img: load },
      { id: 5, title: "Devops", img: devops },
      { id: 6, title: "Cloud", img: cloud },
      { id: 7, title: "CI/CD", img: ci },
    ],
  },
  {
    id: 2,
    title: "it consulting",
    desc: "text4",
    color: "white",
    image: Desktop2,
    flex: "flex-row-reverse",
    arr: [
      { id: 1, title: "Architecture", img: archer },
      { id: 2, title: "Devops", img: devops },
      { id: 3, title: "UX/UI", img: ux },
      { id: 4, title: "Backend", img: backend },
      { id: 5, title: "Frontend", img: frontend },
      { id: 6, title: "QA", img: qa },
    ],
  },
  {
    id: 3,
    title: "it education centre",
    desc: "text5",
    color: "blue",
    image: Desktop3,
    flex: "",
    arr: [
      { id: 1, title: "Architecture", img: archer },
      { id: 2, title: "Devops", img: devops },
      { id: 3, title: "UX/UI", img: ux },
      { id: 4, title: "Backend", img: backend },
      { id: 5, title: "Frontend", img: frontend },
      { id: 6, title: "SMM", img: mobile },
    ],
  },
];
export const erpSystems = {
  id: 1,
  title: "erp systems",
  desc: "text3",
  color: "blue",
  image: Desktop4,
  flex: "",
  arr: [
    { id: 1, title: "Architecture", img: archer },
    { id: 2, title: "Devops", img: devops },
    { id: 3, title: "UX/UI", img: ux },
    { id: 4, title: "Backend", img: backend },
    { id: 5, title: "Frontend", img: frontend },
    { id: 6, title: "SMM", img: mobile },
  ],
};

export const radioButtons = [
  { id: 1, label: "Frontend", name: "tool" },
  { id: 2, label: "Backend", name: "tool" },
  { id: 3, label: "Devops", name: "tool" },
  { id: 4, label: "Testing", name: "tool" },
  { id: 5, label: "UX/UI", name: "tool" },
  { id: 6, label: "Infrastructure", name: "tool" },
  { id: 7, label: "Mobile", name: "tool" },
];

export const tools = [
  { id: 1, title: "Promotheus", image: "", status: "Devops" },
  { id: 2, title: "Promotheus", image: "", status: "Devops" },
  { id: 3, title: "Promotheus", image: "", status: "Devops" },
  { id: 4, title: "Promotheus", image: "", status: "Devops" },
  { id: 5, title: "Promotheus", image: "", status: "Devops" },
  { id: 6, title: "Promotheus", image: "", status: "Devops" },
  { id: 7, title: "Promotheus", image: "", status: "Devops" },
  { id: 8, title: "Promotheus", image: "", status: "Backend" },
  { id: 9, title: "Promotheus", image: "", status: "Backend" },
  { id: 10, title: "Promotheus", image: "", status: "Backend" },
  { id: 11, title: "Promotheus", image: "", status: "Backend" },
  { id: 12, title: "Promotheus", image: "", status: "Backend" },
  { id: 13, title: "Promotheus", image: "", status: "Backend" },
  { id: 14, title: "Promotheus", image: "", status: "Backend" },
  { id: 15, title: "Promotheus", image: "", status: "Frontend" },
  { id: 16, title: "Promotheus", image: "", status: "Frontend" },
  { id: 17, title: "Promotheus", image: "", status: "Frontend" },
  { id: 18, title: "Promotheus", image: "", status: "Frontend" },
  { id: 19, title: "Promotheus", image: "", status: "Frontend" },
  { id: 20, title: "Promotheus", image: "", status: "Frontend" },
  { id: 21, title: "Promotheus", image: "", status: "Frontend" },
  { id: 22, title: "Promotheus", image: "", status: "Testing" },
  { id: 23, title: "Promotheus", image: "", status: "Testing" },
  { id: 24, title: "Promotheus", image: "", status: "Testing" },
  { id: 25, title: "Promotheus", image: "", status: "Testing" },
  { id: 26, title: "Promotheus", image: "", status: "Testing" },
  { id: 27, title: "Promotheus", image: "", status: "Testing" },
  { id: 28, title: "Promotheus", image: "", status: "Testing" },
  { id: 29, title: "Promotheus", image: "", status: "UX/UI" },
  { id: 30, title: "Promotheus", image: "", status: "UX/UI" },
  { id: 31, title: "Promotheus", image: "", status: "UX/UI" },
  { id: 32, title: "Promotheus", image: "", status: "UX/UI" },
  { id: 33, title: "Promotheus", image: "", status: "UX/UI" },
  { id: 34, title: "Promotheus", image: "", status: "UX/UI" },
  { id: 35, title: "Promotheus", image: "", status: "UX/UI" },
  { id: 36, title: "Promotheus", image: "", status: "Infrastructure" },
  { id: 37, title: "Promotheus", image: "", status: "Infrastructure" },
  { id: 38, title: "Promotheus", image: "", status: "Infrastructure" },
  { id: 39, title: "Promotheus", image: "", status: "Infrastructure" },
  { id: 40, title: "Promotheus", image: "", status: "Infrastructure" },
  { id: 41, title: "Promotheus", image: "", status: "Infrastructure" },
  { id: 42, title: "Promotheus", image: "", status: "Mobile" },
  { id: 43, title: "Promotheus", image: "", status: "Mobile" },
  { id: 44, title: "Promotheus", image: "", status: "Mobile" },
  { id: 45, title: "Promotheus", image: "", status: "Mobile" },
  { id: 46, title: "Promotheus", image: "", status: "Mobile" },
  { id: 47, title: "Promotheus", image: "", status: "Mobile" },
  { id: 48, title: "Promotheus", image: "", status: "Mobile" },
];

export const logo = [Fac, Youteb, Twwiter, InstataGram];
