export const portfolioData = {
  personal: {
    name: "Yashwanth V",
    firstName: "Yashwanth",
    initials: "YV",
    greeting: "Hello, I'm",
    roleLine: "ASPIRING DATA SCIENTIST",
    subLine: "AI & Data Science Student | Problem Solver | Creative Developer",
    title: "Aspiring Data Scientist | AI & Data Science Student",
    location: "Oddanchatram, Tamil Nadu, India",
    intro: "I'm a passionate student interested in web development and creative design.",
    careerGoal: "Become a Data Scientist",
    interests: [
      "Data Science",
      "Problem-solving",
      "Logical thinking",
      "AI-related projects",
      "Web development",
      "Creative design"
    ],
    aboutText: [
      "I am an enthusiastic 3rd-year B.E./B.Tech Artificial Intelligence and Data Science student at Christian College of Engineering and Technology. With a strong foundation in logical thinking and analytical reasoning, I am driven by the goal of becoming a professional Data Scientist.",
      "My passion spans exploring AI algorithms, extracting actionable insights from data, and developing responsive, modern web applications with creative design. As an active collaborator, I focus on building practical engineering solutions like the Place Path placement assistance platform and constantly testing my skills in competitive hackathons."
    ],
    profilePhoto: "/images/profile.png",
    resumeUrl: "/resume.pdf"
  },

  heroTypingTexts: [
    "Aspiring Data Scientist",
    "AI & Data Science Student",
    "Problem Solver",
    "Creative Developer"
  ],

  heroStats: [
    {
      id: "stat-1",
      label: "Studying",
      value: "3rd Year B.E./B.Tech",
      iconName: "GraduationCap"
    },
    {
      id: "stat-2",
      label: "Specialized in",
      value: "AI & Data Science",
      iconName: "BrainCircuit"
    },
    {
      id: "stat-3",
      label: "Focus",
      value: "Data Science, Web Dev",
      iconName: "Compass"
    },
    {
      id: "stat-4",
      label: "Languages",
      value: "Tamil, English",
      iconName: "Languages"
    }
  ],

  quote: {
    text: "Curious about data. Building with code."
  },

  contact: {
    email: "yashwanthvinoth031@gmail.com",
    phone: "7418180052",
    displayPhone: "+91 74181 80052",
    location: "Oddanchatram, Tamil Nadu, India",
    socials: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/yashwanth-v-6a5181416",
        iconName: "Linkedin",
        label: "yashwanth-v"
      },
      {
        name: "GitHub",
        url: "https://github.com/yashwanth031",
        iconName: "Github",
        label: "yashwanth031"
      },
      {
        name: "Instagram",
        url: "https://instagram.com/yashwanth031",
        iconName: "Instagram",
        label: "@yashwanth031"
      }
    ]
  },

  projects: [
    {
      id: "01",
      title: "PLACE PATH APP",
      category: "Full-Stack AI Application",
      badge: "Team Project",
      shortDesc: "A student placement assistance application designed to streamline campus recruitment and readiness tracking.",
      fullDesc: "Place Path is a student placement assistance platform engineered to empower engineering candidates during campus placement training. Contributed as a core team member responsible for the AI integration layer and end-to-end frontend and backend service integration.",
      role: "Team Member — AI Integration Layer & Fullstack Integration",
      technologies: ["React", "Node.js", "Ollama with Qwen", "RevenueCat", "Antigravity"],
      githubUrl: "https://github.com/AI-Student-Placement-Team/Place-Path",
      demoUrl: null,
      isPlaceholder: false,
      highlights: [
        "Integrated AI workflows using Ollama with Qwen for automated assistance",
        "Unified React frontend components with Node.js backend pipelines",
        "Incorporated RevenueCat subscription infrastructure",
        "Collaborated in a team development workflow using Git and Antigravity tooling"
      ]
    },
    {
      id: "02",
      title: "AI Code Understanding Extension",
      category: "Developer Tooling",
      badge: "In Active Development",
      shortDesc: "An AI-powered extension built for Visual Studio Code to accelerate codebase comprehension and syntax understanding.",
      fullDesc: "An AI Code Understanding Extension architected for the Visual Studio Code environment to assist developers in deciphering logic, exploring complex architectures, and understanding syntax seamlessly within their editor.",
      role: "Developer",
      technologies: ["Visual Studio Code", "AI", "Developer Tools"],
      githubUrl: null,
      demoUrl: null,
      isPlaceholder: true,
      placeholderMessage: "More details coming soon. Project architecture and functionality are currently being finalized.",
      highlights: [
        "Target environment: Visual Studio Code",
        "Focused on smart syntax and codebase comprehension",
        "Detailed architecture and repo release coming soon"
      ]
    },
    {
      id: "03",
      title: "Campus Management Website",
      category: "Web & Institutional System",
      badge: "Academic Project",
      shortDesc: "A campus management web application designed to coordinate academic operations and student records efficiently.",
      fullDesc: "A campus management web platform structured to organize academic workflows, departmental notices, and administrative student records using classical web foundations and robust Java business logic.",
      role: "Developer",
      technologies: ["HTML", "CSS", "Java"],
      githubUrl: null,
      demoUrl: null,
      isPlaceholder: false,
      highlights: [
        "Structured semantic HTML5 and responsive CSS3 user interfaces",
        "Core backend business logic and record handling using Java",
        "Built to address real campus coordination challenges"
      ]
    }
  ],

  skillsData: {
    programmingLevel: "Intermediate",
    categories: [
      {
        title: "Programming & Technical",
        iconName: "Code2",
        skills: ["Python", "SQL", "Excel", "Power BI", "PowerPoint", "Java", "C", "C++"]
      },
      {
        title: "Development & Data Tools",
        iconName: "Wrench",
        skills: ["Visual Studio Code", "Jupyter Notebook", "Google Colab", "GitHub", "Excel", "Power BI"]
      },
      {
        title: "Professional Soft Skills",
        iconName: "Users",
        skills: ["Problem-solving", "Logical thinking", "Communication", "Teamwork", "Quick learning", "Creativity", "Time management"]
      },
      {
        title: "Languages Spoken",
        iconName: "Globe",
        skills: ["Tamil (Native)", "English (Fluent)"]
      }
    ]
  },

  education: [
    {
      institution: "Christian College of Engineering and Technology",
      degree: "B.E. / B.Tech in Artificial Intelligence and Data Science",
      yearStatus: "3rd Year Undergraduate",
      expectedGraduation: "2028",
      highlights: [
        "Focus on Data Science, Machine Learning fundamentals, and Problem-Solving",
        "Active contributor to departmental technical presentations and symposia",
        "Hands-on project work in AI integration and full-stack web applications"
      ]
    }
  ],

  experience: [
    {
      title: "Student Developer & Project Contributor",
      organization: "Academic & Collaborative Initiatives",
      period: "Ongoing (3rd Year B.E./B.Tech)",
      description: "Actively building practical engineering applications and participating in developer team collaborations without formal corporate employment yet.",
      keyPoints: [
        "Place Path Integration: Implemented the AI integration layer connecting Ollama (Qwen) with frontend React views and Node.js backend services.",
        "Collaborative Workflows: Worked with Git version control, pull requests, and peer reviews within student engineering groups.",
        "Continuous Learning: Expanding practical expertise in Python data processing, SQL database queries, and modern UI engineering."
      ]
    }
  ],

  achievements: {
    certifications: [
      {
        title: "Python Programming Course",
        duration: "6-Month Comprehensive Course Completed",
        description: "In-depth foundation covering data structures, object-oriented concepts, and algorithmic problem solving.",
        status: "Completed (Certificate details can be updated)"
      }
    ],
    awards: [
      {
        title: "Hackathon Winner",
        badge: "Winner",
        description: "Achieved first place for innovative technical problem solving and rapid prototype implementation."
      },
      {
        title: "LectronX26 Technical Symposium",
        badge: "Second Prize",
        description: "Secured 2nd prize at the LectronX26 technical symposium for project and concept execution."
      },
      {
        title: "Department Study Presentation",
        badge: "Third Prize",
        description: "Awarded third prize for an analytical technical presentation within the department."
      },
      {
        title: "PowerPoint Presentation Competition",
        badge: "Winner",
        description: "Won 1st place for compelling technical communication and visual presentation structure."
      }
    ],
    events: [
      {
        title: "IBM Bob Hackathon",
        status: "Completed",
        description: "Participated and successfully completed the IBM Bob Hackathon challenge."
      },
      {
        title: "Ship-a-thon Hackathon",
        status: "Completed",
        description: "Built and completed a product sprint during the Ship-a-thon Hackathon."
      },
      {
        title: "Hacktoberfest",
        status: "Participation",
        description: "Contributed to open-source software and developer community repositories during Hacktoberfest."
      }
    ],
    other: [
      {
        title: "National Cadet Corps (NCC)",
        role: "NCC Volunteer",
        iconName: "Shield",
        description: "Trained in discipline, leadership, and public service as an active NCC volunteer."
      },
      {
        title: "Athletics & Sports",
        role: "District-level Volleyball Player",
        iconName: "Trophy",
        description: "Competed at the district level, demonstrating agility, stamina, and team spirit on the court."
      }
    ]
  },

  botKnowledge: [
    {
      keywords: ["who", "about", "yashwanth", "profile", "bio", "student"],
      response: "Yashwanth V is an aspiring Data Scientist and 3rd-year B.E./B.Tech Artificial Intelligence and Data Science student at Christian College of Engineering and Technology, based in Oddanchatram, Tamil Nadu, India."
    },
    {
      keywords: ["project", "place path", "app", "code", "extension", "campus"],
      response: "Yashwanth's key projects include:\n1. Place Path App (Team member, AI integration layer using Ollama with Qwen, React, Node.js)\n2. AI Code Understanding Extension for VS Code (More details coming soon)\n3. Campus Management Website (HTML, CSS, Java)."
    },
    {
      keywords: ["skill", "python", "tech", "sql", "tools", "languages", "programming"],
      response: "Yashwanth's skills include:\n• Technical: Python, SQL, Excel, Power BI, PowerPoint, Java, C, C++ (Intermediate level)\n• Tools: VS Code, Jupyter, Google Colab, GitHub\n• Languages: Tamil and English."
    },
    {
      keywords: ["education", "college", "degree", "university", "study", "graduate"],
      response: "Yashwanth is currently studying 3rd Year B.E./B.Tech in Artificial Intelligence and Data Science at Christian College of Engineering and Technology, with expected graduation in 2028."
    },
    {
      keywords: ["achievement", "award", "hackathon", "certificate", "prize", "ncc", "volleyball"],
      response: "Yashwanth's achievements include winning a Hackathon, 2nd prize at LectronX26, winning a PPT competition, 3rd prize in department study, completing a 6-month Python certification, participating in IBM Bob Hackathon, Ship-a-thon, and Hacktoberfest, serving as an NCC Volunteer, and playing district-level volleyball."
    },
    {
      keywords: ["contact", "email", "phone", "reach", "hire", "linkedin", "message"],
      response: "You can contact Yashwanth directly via:\n• Email: yashwanthvinoth031@gmail.com\n• Phone: +91 74181 80052\n• LinkedIn: linkedin.com/in/yashwanth-v-6a5181416\n• Or use the contact form below!"
    },
    {
      keywords: ["resume", "cv", "download"],
      response: "You can download Yashwanth's resume by clicking the 'Download Resume' button in the Hero section or Navbar."
    },
    {
      keywords: ["experience", "job", "internship", "work"],
      response: "Yashwanth has no formal corporate employment yet, but possesses rich practical experience through student engineering initiatives, AI integration work on Place Path, open-source participation, and hackathons."
    }
  ]
};
