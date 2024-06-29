import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
// import project4 from "../assets/projects/project-4.jpg";
import project4 from "../assets/projects/noteImg.jpg";
import project5 from "../assets/projects/project-5.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications.I have knowledge of variety of technologies, including React, Next.js, Node.js and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges.Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    git_url: "https://github.com/naim-haider/watch-ecommerce2.0",
    vercel_url:
      "https://watch-ecommerce2-0-6962o72pm-naim-haiders-projects.vercel.app/",
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  // {
  //   title: "Chat App",
  //   image: project2,
  //   git_url: "https://github.com/naim-haider/SpoutChat-backend",
  //   vercel_url: "https://spout-chat-frontend.vercel.app/",
  //   description:
  //     "An application for real-time chatting, with features such as personal chat, group chat, user authentication.",
  //   technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB", "Socket.io"],
  // },

  {
    title: "Note App",
    image: project4,
    git_url: "https://github.com/naim-haider/NoteAppWithAuthentication",
    vercel_url: "https://note-app-with-authentication.vercel.app/",
    description:
      "Developed a note-taking app and implemented CRUD operations for creating, editing, and deleting notes.",
    technologies: ["Next.js (frontend)", "MongoDB (backend)"],
  },
  {
    title: "Weather App",
    image: project5,
    git_url: "https://github.com/naim-haider/Weather-App",
    vercel_url: "https://weather-app-gamma-lake.vercel.app/",
    description:
      "A Next.js weather app with efficient SSR data fetching, a modern Material-UI interface, and responsive design for real-time updates across all devices.",
    technologies: ["Next.js", "Material-UI"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    git_url: "https://github.com/naim-haider/MyPortfolio",
    vercel_url: "https://my-portfolio-nine-mauve-91.vercel.app/",
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "TailwindCSS"],
  },
];

export const CONTACT = {
  address: "3/3, G.C.R.C. ghat road shibpur howrah, 711102",
  phoneNo: "7980754229 ",
  email: "naimhaider76@gmail.com",
};
