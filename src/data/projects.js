import cafeImg from "../assets/demo-english.png"
import yt from "../assets/DEMO screenshot.PNG"
import cur from "../assets/forEx.jpg"

export const projects = [
  {
    id: 1,
    name: "The Silk Cup Café",
    image: cafeImg,
    description:
      "A modern, responsive café website built using React, Vite, and Tailwind CSS with advanced animations, multilingual support, and interactive features.",
    techStack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
      "i18next"
    ],
    github: "https://github.com/hvsingh28/Cafe-website"
  },
  {
    id: 2,
    name: "Currency Converter",
    image: cur,
    description:
      "A responsive currency converter built with React and Tailwind CSS using real-time exchange rates from FreeCurrencyAPI.",
    techStack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Axios",
      "FreeCurrencyAPI"
    ],
    github: "https://github.com/hvsingh28/currency-convertor"
  },
  {
  id: 3,
  name: "YouTube Homepage Clone",
  image: yt,
  description:
    "A desktop-only clone of the YouTube homepage built using HTML and CSS to practice core web development fundamentals. ",
  techStack: [
    "HTML5",
    "CSS3",
    "Flexbox",
    "CSS Grid"
  ],
  github: "https://github.com/hvsingh28/Youtube_clone"
}

]
