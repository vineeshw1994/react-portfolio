import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    threejs,
    madura,
    grameen,
    hdfclogo,
    brototype,
    ecommerce,
    logicLense,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Field Officer",
      company_name: "Madura Micro Finance",
      icon: madura,
      iconBg: "#383E56",
      date: "August 2019 - July 2020",
      points: [
        "Good communication with customers.",
        "Collaborating with cross-functional teams including operations, product managers, and other officials to create high-quality products.",
        "Taking responsibilities.",
        "Watching RBI guidelines.",
      ],
    },
    {
      title: "Member Relationship Assosiate",
      company_name: "Grameen Kootta",
      icon: grameen,
      iconBg: "#E6DEDD",
      date: "August 2020 - Feb 2022",
      points: [
        "Assessing and processing loan applications efficiently, ensuring accuracy and compliance with company policies and regulatory requirements.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Conducting field visits to meet with potential borrowers, understand their financial needs, and provide personalized loan recommendations.",
        "Maintaining detailed records of loan transactions, payments, and customer interactions to ensure data integrity and regulatory compliance.",
      ],
    },
    {
      title: "Sales Officer",
      company_name: "HDFC",
      icon: hdfclogo,
      iconBg: "#383E56",
      date: "Feb 2022 - Feb 2023",
      points: [
        "Providing personalized financial advice and solutions to customers, addressing their banking needs and assisting with account management.",
        "Collaborating with various departments within HDFC Bank, including wealth management, loan processing, and customer service, to deliver comprehensive banking solutions.",
        "Ensuring seamless customer experiences by resolving queries, handling complaints, and facilitating transactions across multiple banking channels.",
        "Participating in training sessions and staying updated on banking products, policies, and industry trends to better serve customers and meet their financial goals.",
      ],
    },
    {
      title: "Intern ",
      company_name: "Brototype",
      icon: brototype,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Dec 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  // const testimonials = [
  //   {
  //     testimonial:
  //       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //     name: "Sara Lee",
  //     designation: "CFO",
  //     company: "Acme Co",
  //     image: "https://randomuser.me/api/portraits/women/4.jpg",
  //   },
  //   {
  //     testimonial:
  //       "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //     name: "Chris Brown",
  //     designation: "COO",
  //     company: "DEF Corp",
  //     image: "https://randomuser.me/api/portraits/men/5.jpg",
  //   },
  //   {
  //     testimonial:
  //       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //     name: "Lisa Wang",
  //     designation: "CTO",
  //     company: "456 Enterprises",
  //     image: "https://randomuser.me/api/portraits/women/6.jpg",
  //   },
  // ];
  
  const projects = [
    {
      name: "E-Commerce",
      description:
        "Web-based platform that allows users to search,purchase, and manage orders from various providers, providing a convenient and efficient solution for customers needs.",
      tags: [
        {
          name: "EJS",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "light-white",
        },
        {
          name: "Bootstrap",
          color: "light-white",
        },
      ],
      image: ecommerce,
      source_code_link: "https://github.com/",
    },
    {
      name: "Blog App",
      description:
        "Web application that enables users to search for Technology blog's, and can read articles write comments and like the articles .",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Express",
          color: "pink-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: logicLense,
      source_code_link: "https://github.com/",
    },
    // {
    //   name: "Trip Guide",
    //   description:
    //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    //   tags: [
    //     {
    //       name: "nextjs",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "supabase",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: tripguide,
    //   source_code_link: "https://github.com/",
    // },
  ];
  
  export { services, technologies, experiences, projects };
  