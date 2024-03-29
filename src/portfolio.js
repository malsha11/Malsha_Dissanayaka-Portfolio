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
    "I am an undergraduate of BSc (Hons) in Information Technology from University of Sri Jayewardenepura. As an undergraduate, I study a variety of subjects such as programming, designing, IOT, AR/VR, Mobile Application Development, Cybersecurity, QA, BA, Machine learning, Networking, Software project management and so on. I am a fast learner, always seeking to improve and a responsible team player with on-time deliveries.",
  resumeLink:
    "https://drive.google.com/file/d/1yYU-L81Tkm-s-fz0XV6TvCBSsFHMRggL/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/malsha11",
  linkedin: "https://www.linkedin.com/in/malsha-dissanayaka-482852212",
  gmail: "admalsha11@gmail.com",
  quora:
    "https://www.quora.com/profile/Malsha-Dissanayaka?ch=10&oid=1551460455&share=90288241&srid=uytGLB&target_type=user",
  facebook: "https://www.facebook.com/malsha.dissanayaka.79",
  medium: "https://medium.com/@admalsha11",
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
  subTitle:
    "I possess a deep passion for the realms of programming and design,",
  skills: [
    "⚡ I have gained expertise in cutting-edge front-end technologies such as Javascript, ReactJS, HTML, CSS.",
    "⚡ Currently I'm learning about web development both back-end and front-end.",
    "⚡ I have been involved in the education management domain and am willing to explore new technologies and fields ",
    "⚡ During my university life, I have actively contributed to numerous academic and non-academic projects, showcasing my dedication to both my studies and personal growth.",
    "⚡ As an AIESECer, I have contributed to numerous projects during my involvement with the organization. Throughout my time with AIESECinUSJ, I have actively participated in and made meaningful contributions to various initiatives."
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
    },
    {
      skillName: "Selenium ",
      fontAwesomeClassname: "fas fa-pen-nib"
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
      subHeader: "Web design & Development",
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
      Stack: "Team Work", //Insert stack or technology you have experience in
      progressPercentage: "100%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Communication",
      progressPercentage: "100%"
    },
    {
      Stack: "Problem-Solving",
      progressPercentage: "100%"
    },

    {
      Stack: "Time Management",
      progressPercentage: "100%"
    },
    {
      Stack: "Customer Service",
      progressPercentage: "100%"
    },

    {
      Stack: "Multitasking",
      progressPercentage: "100%"
    },
    {
      Stack: "Creativity",
      progressPercentage: "100%"
    },
    {
      Stack: "Leadership",
      progressPercentage: "100%"
    },

    {
      Stack: "Project Management",
      progressPercentage: "100%"
    },
    {
      Stack: "Quality Assurance",
      progressPercentage: "100%"
    },
    {
      Stack: "Cybersecurity",
      progressPercentage: "100%"
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
      role: "Graphic Designer Intern",
      company: "ServerClub.lk (Pvt) Ltd",
      companylogo: require("./assets/images/serverclub-logo-white.jfif"),
      date: "Mar 2022 – May 2022 ",
      desc: "As an Intern Graphic Designer, I did the following activities: Designing various marketing and promotional materials such as flyers, brochures and social media posts, Assisting with the production of graphics for websites and other digital platforms.",
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
  title: emoji("My Projects"),
  subtitle: "Opern Source Projects that I have done !",
  projects: [
    {
      image: require("./assets/images/googleAssistantLogo.webp"),
      projectName: "ExamNet Exam Management System",
      projectDesc:
        "The system provides a user-friendly interface for administrators, teachers, and students to effectively manage and conduct exams. Technologies: Python and SQl",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/malsha11/Exam-Management-System"
        }
      ]
    },

    {
      image: require("./assets/images/googleAssistantLogo.webp"),
      projectName: "NewsMart Mobile App",
      projectDesc:
        "NewsMart is a cutting-edge news mobile application that aims to revolutionize the way people consume news and stay informed. NewsMart provides an immersive and engaging news reading experience. Technologies: Html,Css,Js,React-native,firebase,NewsApi",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/malsha11/NewsMart-News-Mobile-Application"
        }
      ]
    },

    {
      image: require("./assets/images/googleAssistantLogo.webp"),
      projectName: "FoodSpace Ordering Application (MERN) ",
      projectDesc:
        "This application allows customers to browse menus,place orders,make payments and allows the restaurant employees to manage the site content easily. Technologies: React Js,Mongo DB,Node Js,Express js",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/malsha11/MERN-FoodSpace-Food-Ordering-Web-Application"
        }
      ]
    },

    {
      image: require("./assets/images/EduPlannerWeb.png"),
      projectName: "Edu Planner Web Site",
      projectDesc:
        "Through the EduPlanner website, will help the student to explore courses, learn efficiently by gaining recourses and attending lectures online. Technologies: Html,Css,Js",
      footerLink: [
        {
          name: "View Website",
          url: "https://ya6aaerl3cdig5bempju9g.on.drv.tw/Edu%20Planner%20Institute/"
        },
        {
          name: "View Code",
          url: "https://github.com/malsha11/Edu-Planner-Institute-Website"
        }
      ]
    },

    {
      image: require("./assets/images/LibraryManagementSystem.png"),
      projectName: "LibraGenius Library Management System",
      projectDesc:
        "This Library Management System Create using Java Language and SQl use for Backend Development.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/malsha11/Library_Management_system"
        }
      ]
    },

    {
      image: require("./assets/images/NewsAppUIDesign.png"),
      projectName: "News App UI Design",
      projectDesc:
        "Design a attractive UI Design for News Mobile Application I chose this layout because it helps user to read the content easily following Z -pattern.",
      footerLink: [
        {
          name: "View Project",
          url: "https://www.figma.com/file/kbN4wx3K23Nm80BKzwtA6r/NewsApp?node-id=0%3A1"
        }
      ]
    },

    {
      image: require("./assets/images/CoffeTableBook.png"),
      projectName: "Coffee Table Book",
      projectDesc:
        "This Coffee table book's page content consists of photographs and illustrations with small areas of well-crafted typography, as opposed to long prose.",
      footerLink: [
        {
          name: "View Project",
          url: "https://www.behance.net/gallery/138313341/Coffee-Table-Book-Design"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: "Achievements And Certifications 🏆 ",
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Introduction to Cybersecurity ",
      subtitle:
        ".Cyber Best Practices Cybersecurity, Network Vulnerabilities, Privacy And Data Confidentiality, Threat Detection, impact of cyber attacks on industries, and why cybersecurity is a growing profession,the global implications of cyber threats.",
      image: require("./assets/images/Cetificate01.png"),
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.credly.com/badges/a4a59a09-0d3a-439a-8d3d-0a08fe35d6a6?source/"
        }
      ]
    },
    {
      title: "Arduio",
      subtitle:
        "Basic Introduction to the use of Micro-contollers in Robotics & Electronics, Introduction to Sketch and the C Programming Language, Syntax of Coding in Arduino, Variables in C Language with Arduino and many more.",
      image: require("./assets/images/Cetificate02.png"),
      footerLink: [
        {
          name: "View Certification",
          url: "https://ii.lk/codecamp/"
        }
      ]
    },

    {
      title: "Web Development",
      subtitle:
        "Build a web Application with HTML & CSS Build backend servers & APIs with Node and Express, Work with NoSQL databases like MongoDB, Build full-stack web apps with Facebook's React Framework, Build mobile-friendly websites with Bootstrap 4 & CSS.",
      image: require("./assets/images/Cetificate03.png"),
      footerLink: [
        {
          name: "View Cetification",
          url: "https://www.cert.shapeai.tech/verify/ZVb2b"
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
      url: "https://medium.com/@admalsha11/front-end-developer-roadmap-for-2023-f811d9f80f71",
      title: "Front-End Developer RoadMap for 2023",
      description:
        "If you want to become a frontend developer in 2023  but are unsure about which technologies, tools, frameworks, languages, and libraries to learn. You have come to the right place.."
    },
    {
      url: "https://medium.com/@admalsha11/the-power-of-rest-apis-3e07659978c3",
      title: "The Power of REST APIs",
      description:
        "In the modern digital landscape, software systems are becoming increasingly interconnected and reliant on seamless data exchange. REST APIs (Representational State Transfer Application Programming Interfaces) have emerged as a vital technology, enabling efficient communication and integration between software applications, platforms, and services. "
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
      title: "Hey!. This is my resume.",
      subtitle: "You can Download it here.",
      slides_url:
        "https://drive.google.com/file/d/1yYU-L81Tkm-s-fz0XV6TvCBSsFHMRggL/view?usp=sharing"
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
