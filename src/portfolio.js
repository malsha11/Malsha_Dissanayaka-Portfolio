/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Malsha Dissnayaka",
  title: "Hi, I'm Malsha Dissanayaka",
  subTitle:
    "Frontend Developer | UI UX Designer | I am an undergraduate of BSc (Hons) in Information Technology from University of Sri Jayewardenepura. I take pride in my ability to create visually appealing and user-friendly interfaces that deliver an exceptional user experience with a focus on frontend development and UI/UX design. I am a fast learner, always seeking to improve and a responsible team player with on-time deliveries.",
  resumeLink:
    "https://drive.google.com/file/d/1EY_qICDjkJYsxRScapx-G92IXh13jG-p/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/MalshaDissanayaka11",
  linkedin: "https://www.linkedin.com/in/malsha-dissanayaka-482852212",
  gmail: "admalsha11@gmail.com",
  quora:
    "https://www.quora.com/profile/Malsha-Dissanayaka?ch=10&oid=1551460455&share=90288241&srid=uytGLB&target_type=user",
  facebook: "https://www.facebook.com/malsha.dissanayaka.79",
  medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/16576845/malsha-dissanayaka",
  instagram: "https://www.instagram.com/malsha.dissanayaka.79",
  twitter: "https://twitter.com/ADMSewwandi1",
  kaggle: "https://www.kaggle.com/malshadissanayaka",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "My Skills",
  subTitle: "I'M PASSIONATE ABOUT PROGRAMMING AND DESIGN.",
  skills: [
    "⚡ I have gained expertise in cutting-edge front-end technologies such as Javascript, ReactJS, HTML, CSS.",
    "⚡ Currently I'm learning about web development both back-end and front-end.",
    "⚡ I have learn many IT-related fields such as programming, designing, IOT, Mobile Application Development, HCI, Cybersecurity, QA, BA, Machine learning, AI, Network, Software project management etc.",
    "⚡ I am an AIESECer and, I have contributed to many projects during my university life."
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Html",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "Css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },

    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },

    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },

    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },

    {
      skillName: "Nodejs",
      fontAwesomeClassname: "fab fa-node"
    },

    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Sql",
      fontAwesomeClassname: "fas fa-database"
    },

    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Photoshop",
      fontAwesomeClassname: "fas fa-pen-nib"
    },

    {
      skillName: "Figma",
      fontAwesomeClassname: "fab fa-figma"
    },

    {
      skillName: "Mongo-db",
      fontAwesomeClassname: "fas fa-database"
    },

    {
      skillName: "Git Hub",
      fontAwesomeClassname: "fab fa-github"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Sri Jayewardenepura",
      logo: require("./assets/images/usjp-logo.png"),
      subHeader: "Bachelor of Science Honours Information Technology",
      duration: "March 2020 - Present",
      desc: "Get excellent knowledge about IT Field.",
      descBullets: [
        "Design.",
        "Programming",
        "Networking and other IT main fields"
      ]
    },
    {
      schoolName: "DevTown",
      logo: require("./assets/images/Devtown.jfif"),
      subHeader: "Web design Development",
      duration: "August 2021 - Present",
      desc: "Knowledge of Web design Development & Other IT related fields.",
      descBullets: [
        "Basic of web development.",
        "Instagram clone using HTML and CSS.",
        "Back-end web development using Javascript, Node. JS & Express.",
        "Cloud computing with AWS."
      ]
    },
    {
      schoolName: "Cisco Network Acadamy",
      logo: require("./assets/images/ciscologo.png"),
      subHeader: "Introduction to Cybersecurity",
      duration: "August 2021 - 2022",
      desc: " introductory knowledge of cybersecurity.",
      descBullets: [
        "The impact of cyber attacks on industries.",
        "Why cybersecurity is a growing profession.",
        "Cisco’s approach to threat detection and defense."
      ]
    },
    {
      schoolName: "Mr/Morawka Keerthi Abeywickrama National School",
      logo: require("./assets/images/School_logo.jfif"),
      subHeader: "Ordinary Level & Advanced Level",
      duration: "August 2011 - 2018",
      descBullets: ["Ordinary Level -2015.", "Advanced Level -2018."]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Html/CSS", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Java Script",
      progressPercentage: "50%"
    },
    {
      Stack: "React",
      progressPercentage: "58%"
    },

    {
      Stack: "Bootstrapt",
      progressPercentage: "50%"
    },
    {
      Stack: "Sql",
      progressPercentage: "70%"
    },

    {
      Stack: "Firebase",
      progressPercentage: "60%"
    },
    {
      Stack: "Python",
      progressPercentage: "85%"
    },
    {
      progressPercentage: "60%"
    },

    {
      Stack: "Figma",
      progressPercentage: "85%"
    },
    {
      Stack: "Photoshop",
      progressPercentage: "65%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "AIESECer",
      company: "AIESEC",
      companylogo: require("./assets/images/AiesecLogo.png"),
      date: "May 2021 – Present",
      desc: "I am an AIESECer- Team Leader Marketing - Jayewardenepura Sales Force at AIESEC Sri Lanka. As well Worked as a Team Member of Business to Business- Outgoing Global Exchange - Business to Customer in AIESECinUSJ Collaboration between entities - entities around the globe for exchange partners to work with projects and achieve the targets within the term.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.credly.com/badges/a4a59a09-0d3a-439a-8d3d-0a08fe35d6a6?source/"
        }
        //  you can add extra buttons here.
      ]
    },

    {
      role: "Graphic Designer",
      company: "Japura FOSS Community",
      companylogo: require("./assets/images/FOSS_Logo.jpg"),
      date: "December 2021 – Present",
      desc: "Created design theme and graphics for marketing and sales. Collaborated with creative team to design and produced.Delivered design solutions under extremely tight deadlines. I have gathered enormous efficiency in various editing tools that are helpful to creating any strong design.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.credly.com/badges/a4a59a09-0d3a-439a-8d3d-0a08fe35d6a6?source/"
        }
        //  you can add extra buttons here.
      ]
    },

    {
      role: "Internship Trainer",
      company: "People's Bank",
      companylogo: require("./assets/images/PeoplesBankLogo.jpg"),
      date: "May 2018 – May 2019",
      desc: "This Traning helped to improve a good amount of experience in the Banking industry as well it Improved my soft skills and personality. I got a chance to connect with industry experts and alumni, and this helped my career and grow my professional network.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.credly.com/badges/a4a59a09-0d3a-439a-8d3d-0a08fe35d6a6?source/"
        }
        //  you can add extra buttons here.
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",
  projects: [
    {
      image: require("./assets/images/Cetificate01.png"),
      projectName: "Introduction to Cybersecurity",
      projectDesc:
        "Cyber Best Practices Cybersecurity, Network Vulnerabilities, Privacy And Data Confidentiality, Threat Detection, impact of cyber attacks on industries, and why cybersecurity is a growing profession,the global implications of cyber threats",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.credly.com/badges/a4a59a09-0d3a-439a-8d3d-0a08fe35d6a6?source/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Cetificate02.png"),
      projectName: "Arduio",
      projectDesc:
        "Basic Introduction to the use of Micro-contollers in Robotics & Electronics, Introduction to Sketch and the C Programming Language, Syntax of Coding in Arduino, Variables in C Language with Arduino and many more..",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://ii.lk/codecamp/"
        }
      ]
    },

    {
      image: require("./assets/images/Cetificate03.png"),
      projectName: "Web Development",
      projectDesc:
        "Build websites with HTML & CSS Build backend servers & APIs with Node and Express, Work with NoSQL databases like MongoDB, Build full-stack web apps with Facebook's React Framework, Build mobile-friendly websites with Bootstrap 4 & CSS",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.cert.shapeai.tech/verify/ZVb2b"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: "My Projects",
  subtitle: "THIS IS MY PROJECTS",

  achievementsCards: [
    {
      title: "Coffee Table Book",
      subtitle:
        "This Coffee table book's page content consists of photographs and illustrations with small areas of well-crafted typography, as opposed to long prose..",
      image: require("./assets/images/CoffeTableBook.png"),
      footerLink: [
        {
          name: "View Project",
          url: "https://www.behance.net/gallery/138313341/Coffee-Table-Book-Design"
        }
      ]
    },
    {
      title: "News App UI Design",
      subtitle:
        "Design a attractive UI Design for News Mobile Application I chose this layout because it helps user to read the content easily following Z -pattern",
      image: require("./assets/images/NewsAppUIDesign.png"),
      footerLink: [
        {
          name: "View Project",
          url: "https://www.figma.com/file/kbN4wx3K23Nm80BKzwtA6r/NewsApp?node-id=0%3A1"
        }
      ]
    },

    {
      title: "Edu Planner Web Site",
      subtitle:
        "This Edu Planner Institue Web Site is usefull for any education institue to easily done daily activites.This website designed using Html,css and JS.",
      image: require("./assets/images/EduPlannerWeb.png"),
      footerLink: [
        {
          name: "View Web Site",
          url: "https://ya6aaerl3cdig5bempju9g-on.drv.tw/Edu%20Planner%20Institute/"
        },

        {
          name: "View Code",
          url: "https://github.com/MalshaDissanayaka11"
        }
      ]
    },

    {
      title: "Library Management System",
      subtitle:
        "This Library Management System Create using Java Language and SQl use for Backend Development.",
      image: require("./assets/images/LibraryManagementSystem.png"),
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/MalshaDissanayaka11"
        }
      ]
    },

    {
      title: "Exam Management System",
      subtitle:
        "This Exam Management System Created using Python and SQl use for Backend Development.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/MalshaDissanayaka11"
        }
      ]
    },

    {
      title: "NewsMart News Mobile App",
      subtitle:
        "This News Mobile Application Created using React-Native, Java Script, NewsApi and Firebase",
      image: require("./assets/images/NewsApp.png"),
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/MalshaDissanayaka11"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://malshadissanayaka.blogspot.com/2022/02/myths-in-it-industry-in-modern-age-we.html",
      title: "Myths in the IT Industry",
      description:
        "In the modern age we live in, technology is used on a daily basis. While we might take technology for granted, such as our smartphones and WiFi, we might, on occasion, stop and wonder how our devices actually work."
    },
    {
      url: "https://malshadissanayaka.blogspot.com/2022/02/of-online-education-online-education-is.html",
      title: "Benefits of online education",
      description:
        "Online education is a flexible instructional delivery system that encompasses any kind of learning that takes place via the Internet."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Sections

const talkSection = {
  title: "Resume",
  subtitle: emoji("I LOVE TO SHARE MY RESUME WITH YOU."),

  talks: [
    {
      title: "This is my resume.",
      subtitle: "You can Downlord it here.",
      slides_url:
        "https://drive.google.com/file/d/1EY_qICDjkJYsxRScapx-G92IXh13jG-p/view?usp=sharing"
      //event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: "Resume",
  subtitle: "This is My resume. You can check it."

  // Please Provide with Your Podcast embeded Link
  /*podcast: [
    "https://drive.google.com/file/d/1EY_qICDjkJYsxRScapx-G92IXh13jG-p/view?usp=sharing"
  ],
  display: true // Set false to hide this section, defaults to true*/
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "just want to say hi? My Inbox is open for all.",
  number: "+94-761898855",
  email_address: "admalsha11@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twittert", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
