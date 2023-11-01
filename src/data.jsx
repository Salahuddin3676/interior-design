import person1 from "../src/assets/images/person7.jpg";
import person2 from "../src/assets/images/person2.jpg";
import person3 from "../src/assets/images/person3.jpg";
import person4 from "../src/assets/images/person4.jpg";
import person5 from "../src/assets/images/person5.jpg";
import person6 from "../src/assets/images/person6.jpg";
import person7 from "../src/assets/images/person1.jpg";
import person8 from "../src/assets/images/person8.jpg";
import person9 from "../src/assets/images/person9.jpg";
import person10 from "../src/assets/images/person10.jpg";
import img1 from "../src/assets/images/kitchen/kitchen1.jpg";
import img2 from "../src/assets/images/commercial/cr1.jpg";
import img3 from "../src/assets/images/living room/lr1.jpg";
import img4 from "../src/assets/images/kitchen/kitchen9.jpg";
import img5 from "../src/assets/images/living room/lr7.jpg";
import img6 from "../src/assets/images/commercial/cr9.jpg";
import { BsFillBuildingsFill, BsRocketFill } from "react-icons/bs";
import { MdDesignServices } from "react-icons/md";
import { HiCube } from "react-icons/hi2";
import { TbBulbFilled } from "react-icons/tb";
import { BiLogoFacebook, BiLogoInstagram, BiLogoBehance } from "react-icons/bi";

export const navLinks = [
  {
    id: 1,
    title: "Home",
    url: "#home",
  },
  {
    id: 2,
    title: "About",
    url: "#about",
  },
  {
    id: 3,
    title: "Services",
    url: "#services",
  },
  {
    id: 4,
    title: "Portfolio",
    url: "#portfolio",
  },
  {
    id: 5,
    title: "Contact",
    url: "#contact",
  },
];

export const designers = [
  {
    id: 1,
    name: "Aliza Jane",
    url: person1,
  },
  {
    id: 2,
    name: "Sam Bills",
    url: person3,
  },
  {
    id: 3,
    name: "Melissa Thomas",
    url: person2,
  },
  {
    id: 4,
    name: "Curtis Jones",
    url: person4,
  },
  {
    id: 5,
    name: "Elizabeth Paul",
    url: person5,
  },
  {
    id: 6,
    name: "Dwayne Jackson",
    url: person6,
  },
];

export const services = [
  {
    id: 1,
    title: "Concept",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    icon: <HiCube />,
  },
  {
    id: 2,
    title: "Plan",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    icon: <TbBulbFilled />,
  },
  {
    id: 3,
    title: "Design",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    icon: <MdDesignServices />,
  },
  {
    id: 4,
    title: "Build",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    icon: <BsFillBuildingsFill />,
  },
  {
    id: 5,
    title: "Launch",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    icon: <BsRocketFill />,
  },
];

export const portfolio = [
  {
    id: 1,
    no: 10,
    phoneImg: img1,
    pcImg: img4,
    url: "",
    title: "Kitchen",
  },
  {
    id: 2,
    no: 11,
    phoneImg: img2,
    pcImg: img5,
    url: "",
    title: "Living Room",
  },
  {
    id: 3,
    no: 10,
    phoneImg: img3,
    pcImg: img6,
    url: "",
    title: "Commercial",
  },
];

export const reviews = [
  {
    id: 1,
    name: "Jane McLarr",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem aperiam natus, sunt accusantium provident",
    url: person7,
    company: "Minecraft",
    rating: 5,
  },
  {
    id: 2,
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem aperiam natus, sunt accusantium provident",
    name: "Ana Sinznka",
    url: person8,
    company: "Microsoft",
    rating: 4,
  },
  {
    id: 3,
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem aperiam natus, sunt accusantium provident",
    name: "Josh Calister",
    url: person9,
    company: "Deloitte",
    rating: 4,
  },
  // {
  //   id: 4,
  //   review:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem aperiam natus, sunt accusantium provident",
  //   name: "Kane Takez",
  //   url: person10,
  //   company: "Apex Legends",
  //   rating: 5,
  // },
];

export const socialLinks = [
  {
    id: 1,
    title: "Behance",
    url: "#home",
    icon: <BiLogoBehance />,
  },
  {
    id: 2,
    title: "Instagram",
    url: "#home",
    icon: <BiLogoInstagram />,
  },
  {
    id: 3,
    title: "Facebook",
    url: "#home",
    icon: <BiLogoFacebook />,
  },
];

export const category = [
  {
    id: 1,
    title: "Decor",
    url: "#home",
  },
  {
    id: 2,
    title: "Furniture",
    url: "#home",
  },
  {
    id: 3,
    title: "Lighting",
    url: "#home",
  },
  {
    id: 4,
    title: "Interior design",
    url: "#home",
  },
  {
    id: 5,
    title: "Architecture design",
    url: "#home",
  },
  {
    id: 6,
    title: "Commercial design",
    url: "#home",
  },
];
