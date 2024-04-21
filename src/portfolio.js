/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Alfonso Rafael Cuezon",
  title: "Hi all, I'm Alfonso",
  subTitle: emoji(
    "A BS Computer Engineering Graduate looking passionate about Software Development, Data Science, and Machine Learning looking to start a career."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1LBx3jZIByKSDOqNgVbc8rvUjNaRta1n_/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/arcuezon",
  linkedin: "https://www.linkedin.com/in/arcuezon/",
  gmail: "arcuezon0103@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "DEVELOPER WITH SOME EXPERIENCE IN MULTIPLE TECH STACKS OPEN TO ALWAYS LEARNING",
  skills: [
    emoji("⚡ Undergraduate on C++ and Python"),
    emoji("⚡ Certificate in Deep Learning Specialization")
    // emoji(
    //   "⚡ Beginner in"
    // )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "c++",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Ateneo de Manila University",
      logo: require("./assets/images/ateneoLogo.png"),
      subHeader: "Bachelor of Science in Computer Engineering",
      duration: "August 2016 - June 2021",
      //desc: "Published undergraduate thesis and active in my home organizaton.",
      descBullets: [
        "First Honors (S.Y. 2020 - 2021) | Dean’s Lister: First Semester (S.Y. 2019 - 2020)",
        "Undergraduate Thesis: Design of an Automatic Temperature Screening System for Elevated Skin Temperature with Information Logging Capability | IEEE Conference Publication",
        "Active member and elected officer of my home organization Ateneo Electronics and Computer Engineering Society (AECES)."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "50%"
    },
    {
      Stack: "Web Development",
      progressPercentage: "40%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Ateneo de Manila University",
      companylogo: require("./assets/images/ateneoLogo.png"),
      date: "July 2021 - April 2023",
      desc: "The Water for Tourism project was a DOST funded project that aimed to create a comprehensive water resource assessment and management plan for the Nabaoy River Watershed and Boracay Island.",
      descBullets: [
        "As SRS, I developed and deployed Groundwater and River monitoring systems in Nabaoy and Boracay Island uding Arduinos and Sensors.",
        "Designed and maintained the project website admuwater.com/wft which displays the data reported by our systems in real-time.",
        "Developed and tested a prototype, locally available Geo-Resistivity device developed with lower cost and locally available components."
      ]
    },
    {
      role: "Research Intern",
      company: "Ateneo Innovation Center",
      companylogo: require("./assets/images/aicLogo.png"),
      date: "July 2020 – August 2020",
      desc: "Part of a team that designed cost-effective alternatives for Neonatal Jaundice Detection and Treatment.",
      descBullets: [
        "As Intern, I utilized Arduino and Processing 3 to test and characterize different color sensors for the purpose of detecting Jaundice through skin color."
      ]
    },
    {
      role: "Intern",
      company: "SparkSoft Solutions, Inc.",
      companylogo: require("./assets/images/sparksoftLogo.png"),
      date: "July 2020 – August 2020",
      desc: "Assisted in Web Application Development and Testing using the Odoo Framework, and Selenium and the Robot Framework. As Intern, I developed and tested a freight company invoice generating website. I was tasked with testing thewebsite after every iteration of the website and corrected any errors."
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
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      //image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      //image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  // subtitle:
  //   "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "DeepLearning.AI Deep Learning Specialization",
      subtitle:
        "I took a Coursera Course on Deep Learning which included courses on Neural Networks and Deep Learning, Convolutional Neural Networks, and Sequence Models",
      image: require("./assets/images/deeplLogo.png"),
      imageAlt: "DeepLearning.AI Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/specialization/93KHWAP7JTB5"
        }
      ]
    },
    {
      title: "Huawei Seeds for the Future Participant",
      subtitle:
        "Invited to participate in an online program attending online sessions about the ICT Industry, Huawei, and Chinese Culture. Aside from the synchronous sessions, a curriculum of online courses was completed about 5G, AI, Cloud Computing, and other ICT and Leadership topics to be able to meet the graduation criteria.",
      image: require("./assets/images/huaweiLogo.png"),
      imageAlt: "Huawei Logo",
      footerLink: [
        {
          name: "Certificate of Completion",
          url: "https://www.linkedin.com/in/arcuezon/overlay/1607405350254/single-media-viewer/?profileId=ACoAADFvqhABOON651VPvh3nRInub0Lx7BhAGb4"
        }
      ]
    },

    {
      title: "Undergraduate Thesis",
      subtitle:
        "Published and Presented Undergraduate Thesis titled Development of an Automatic Temperature Screening System for Elevated Skin Temperature With Information Logging Capability.",
      image: require("./assets/images/ateneoLogo.png"),
      imageAlt: "Ateneo Logo",
      footerLink: [
        {
          name: "Link to Published Paper",
          url: "https://ieeexplore.ieee.org/document/9673511"
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
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  // subtitle:
  //   "Discuss a project or just want to say hi? My Inbox is open for all.",
  //number: "+92-0000000000",
  email_address: "alfonso.cuezon@alumni.ateneo.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
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
  twitterDetails,
  isHireable
};
