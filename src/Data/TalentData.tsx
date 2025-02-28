import { IconMapPin, IconRecharging, IconSearch } from "@tabler/icons-react";
const searchFields = [
  {
      title: "Job Title",
      icon: IconSearch,
      options: [
          "Designer", "Developer", "Product Manager", "Marketing Specialist", "Data Analyst", 
          "Sales Executive", "Content Writer", "Customer Support", "Software Engineer", 
          "Project Manager", "UI/UX Designer", "Data Scientist", "Machine Learning Engineer", 
          "AI Specialist", "Blockchain Developer", "Cybersecurity Specialist", 
          "Database Administrator", "Business Analyst", "Cloud Architect", "DevOps Engineer", 
          "Full Stack Developer", "Game Developer", "Network Engineer", "IT Support Specialist", 
          "SEO Specialist", "Web Developer", "Mobile App Developer", "Quality Assurance Engineer", 
          "Technical Writer", "Solutions Architect", "Operations Manager", "IT Consultant", 
          "System Administrator", "HR Specialist", "Digital Marketer", "Video Editor", 
          "Content Strategist", "Social Media Manager", "Product Designer", "E-commerce Specialist", 
          "Financial Analyst", "Logistics Coordinator", "Supply Chain Manager", "Accountant", 
          "Art Director", "Photographer", "Videographer", "Legal Advisor", "Research Analyst", 
          "Chief Technology Officer (CTO)", "Chief Marketing Officer (CMO)", "Chief Product Officer (CPO)", 
          "Product Owner", "Scrum Master", "Automation Engineer", "Embedded Systems Engineer", 
          "Information Security Analyst", "Hardware Engineer", "Technical Recruiter", "Growth Hacker", 
          "Customer Success Manager", "Clinical Data Manager", "ERP Consultant", "Robotics Engineer", 
          "Bioinformatics Specialist", "Renewable Energy Consultant", "Economist", "Statistician"
      ]
  },
  {
      title: "Location",
      icon: IconMapPin,
      options: [
          "Delhi", "New York", "San Francisco", "London", "Berlin", "Tokyo", "Sydney", "Toronto", 
          "Los Angeles", "Chicago", "Paris", "Mumbai", "Bangalore", "Singapore", "Shanghai", 
          "Beijing", "Hong Kong", "Dubai", "Mexico City", "São Paulo", "Cape Town", "Jakarta", 
          "Bangkok", "Istanbul", "Seoul", "Moscow", "Amsterdam", "Madrid", "Rome", "Zurich", 
          "Melbourne", "Kuala Lumpur", "Cairo", "Buenos Aires", "Lisbon", "Vienna", "Warsaw", 
          "Dublin", "Stockholm", "Brussels", "Helsinki", "Oslo", "Prague", "Budapest", "Lagos", 
          "Doha", "Riyadh", "Abu Dhabi", "Athens", "Manila", "Auckland", "Edinburgh", "Vancouver", 
          "Montreal", "Boston", "Houston", "San Diego", "Atlanta", "Miami", "Portland", "Austin", 
          "Las Vegas", "Nairobi", "Kigali", "Accra", "Hanoi", "Ho Chi Minh City", "Karachi", 
          "Lahore", "Colombo", "Dhaka", "Tehran", "Casablanca", "Johannesburg", "Guangzhou", 
          "Chennai", "Hyderabad", "Pune", "Bucharest", "Zagreb", "Sofia", "Tallinn", "Riga", "Vilnius"
      ]
  },
  {
      title: "Skills",
      icon: IconRecharging,
      options: [
          "HTML", "CSS", "JavaScript", "React", "Angular", "Node.js", "Python", "Java", "Ruby", 
          "PHP", "SQL", "MongoDB", "PostgreSQL", "Git", "API Development", "Testing and Debugging", 
          "Agile Methodologies", "DevOps", "AWS", "Azure", "Google Cloud", "Kubernetes", "Docker", 
          "Scala", "Go", "Swift", "Kotlin", "C++", "C#", "Perl", "R", "MATLAB", "SAS", "Power BI", 
          "Tableau", "Data Visualization", "Data Engineering", "ETL Pipelines", "Big Data", "Hadoop", 
          "Spark", "Kafka", "GraphQL", "RESTful APIs", "TDD (Test-Driven Development)", 
          "Continuous Integration", "Jenkins", "Microservices", "Terraform", "Ansible", 
          "Linux Administration", "UI Design", "Wireframing", "Prototyping", "Figma", "Adobe XD", 
          "Sketch", "Bootstrap", "Tailwind CSS", "Web Accessibility", "Performance Optimization", 
          "Penetration Testing", "Digital Forensics", "Network Security", "Cryptography", 
          "Incident Response", "OpenStack", "VMware", "Virtualization", "IoT Development", 
          "Embedded Systems", "Natural Language Processing (NLP)", "Computer Vision", 
          "Reinforcement Learning", "3D Modeling", "Unity3D", "Unreal Engine", "Game Physics", 
          "ITIL Framework", "ServiceNow", "Business Intelligence", "Data Warehousing", "Snowflake", 
          "NoSQL Databases", "ElasticSearch", "Logstash", "Kibana", "Salesforce Development", 
          "Marketing Automation", "Customer Relationship Management (CRM)", "Zabbix", "Prometheus"
      ]
  }
];


const talents = [
  {
      name: "Jarrod Wood",
      role: "Software Engineer",
      company: "Google",
      topSkills: ["React", "SpringBoot", "MongoDB"],
      about: "As a Software Engineer at Google, I specialize in building scalable and high-performance applications. My expertise lies in integrating front-end and back-end technologies to deliver seamless user experiences. My goal is to create impactful software that enhances productivity and meets user needs effectively.",
      expectedCtc: "₹48 - 60LPA",
      location: "New York, United States",
      image: "avatar"
  },
  {
      name: "Alice Johnson",
      role: "Frontend Developer",
      company: "Facebook",
      topSkills: ["HTML", "CSS", "JavaScript"],
      about: "As a Frontend Developer at Facebook, I focus on creating visually appealing and highly interactive web applications. I thrive in collaborative environments where I can contribute to innovative projects and deliver solutions that meet user expectations.",
      expectedCtc: "₹40 - 55LPA",
      location: "San Francisco, United States",
      image: "avatar1"
  },
  {
      name: "Bob Smith",
      role: "Backend Developer",
      company: "Amazon",
      topSkills: ["Node.js", "Express", "MySQL"],
      about: "As a Backend Developer at Amazon, I specialize in server-side development and database management. I am passionate about optimizing backend processes to support high-traffic applications and improve system performance.",
      expectedCtc: "₹50 - 65LPA",
      location: "Seattle, United States",
      image: "avatar"
  },
  {
      name: "Diana Prince",
      role: "UX/UI Designer",
      company: "Adobe",
      topSkills: ["Figma", "Sketch", "InVision"],
      about: "As a UX/UI Designer at Adobe, I craft visually compelling and user-centric designs. My design process involves thorough research, user testing, and iterative design to ensure the highest quality and user satisfaction.",
      expectedCtc: "₹35 - 50LPA",
      location: "Los Angeles, United States",
      image: "avatar2"
  },
  {
      name: "Charlie Brown",
      role: "Full Stack Developer",
      company: "Microsoft",
      topSkills: ["Python", "Django", "React"],
      about: "As a Full Stack Developer at Microsoft, I work on developing end-to-end solutions for web applications. My goal is to deliver comprehensive solutions that meet both user needs and business objectives.",
      expectedCtc: "₹45 - 60LPA",
      location: "Redmond, United States",
      image: "avatar"
  },
  {
      name: "Fiona Gallagher",
      role: "DevOps Engineer",
      company: "Netflix",
      topSkills: ["Docker", "Kubernetes", "AWS"],
      about: "As a DevOps Engineer at Netflix, I focus on automating infrastructure and optimizing deployment processes to support scalable applications. I am dedicated to improving operational efficiency through continuous integration and delivery practices.",
      expectedCtc: "₹50 - 65LPA",
      location: "Los Gatos, United States",
      image: "avatar1"
  },
  {
      name: "Ethan Hunt",
      role: "Data Scientist",
      company: "IBM",
      topSkills: ["Python", "R", "Machine Learning"],
      about: "As a Data Scientist at IBM, I leverage my skills in Python, R, and machine learning to analyze complex datasets and generate actionable insights. My goal is to turn data into valuable information that helps organizations solve problems.",
      expectedCtc: "₹55 - 70LPA",
      location: "Austin, United States",
      image: "avatar"
  },
  {
      name: "Helen Mirren",
      role: "Mobile App Developer",
      company: "Apple",
      topSkills: ["Swift", "iOS", "Xcode"],
      about: "As a Mobile App Developer at Apple, I specialize in creating intuitive and high-performance iOS applications. My role involves collaborating with teams to deliver innovative features and ensure smooth integration with Apple's ecosystem.",
      expectedCtc: "₹55 - 70LPA",
      location: "Cupertino, United States",
      image: "avatar2"
  },
  {
      name: "George Lucas",
      role: "Cybersecurity Analyst",
      company: "Cisco",
      topSkills: ["Penetration Testing", "Network Security"],
      about: "As a Cybersecurity Analyst at Cisco, I focus on safeguarding organizations from cyber threats through proactive security measures. I am dedicated to protecting sensitive data and ensuring compliance with security standards.",
      expectedCtc: "₹60 - 75LPA",
      location: "San Jose, United States",
      image: "avatar"
  },
  {
      name: "Luna Blake",
      role: "AI Engineer",
      company: "OpenAI",
      topSkills: ["Python", "TensorFlow", "PyTorch"],
      about: "As an AI Engineer at OpenAI, I develop and train machine learning models to solve complex problems. I am passionate about AI research and its applications to create smarter and more efficient systems.",
      expectedCtc: "₹60 - 80LPA",
      location: "Palo Alto, United States",
      image: "avatar1"
  },
  {
      name: "Oliver Queen",
      role: "Blockchain Developer",
      company: "Ripple",
      topSkills: ["Solidity", "Ethereum", "Cryptography"],
      about: "As a Blockchain Developer at Ripple, I build decentralized applications and work on smart contract development. My expertise in Solidity and Ethereum helps me drive innovation in the blockchain space.",
      expectedCtc: "₹50 - 70LPA",
      location: "San Francisco, United States",
      image: "avatar2"
  },
  {
      name: "Sophia Turner",
      role: "Machine Learning Engineer",
      company: "DeepMind",
      topSkills: ["Python", "Scikit-learn", "NLP"],
      about: "As a Machine Learning Engineer at DeepMind, I focus on building and deploying ML algorithms for real-world applications. I am passionate about creating intelligent systems that advance AI capabilities.",
      expectedCtc: "₹65 - 85LPA",
      location: "London, United Kingdom",
      image: "avatar"
  },
  {
      name: "William Stone",
      role: "Cloud Architect",
      company: "Amazon Web Services",
      topSkills: ["AWS", "Terraform", "Kubernetes"],
      about: "As a Cloud Architect at AWS, I design and implement cloud solutions that meet enterprise-level requirements. My expertise lies in architecting scalable and cost-effective cloud infrastructures.",
      expectedCtc: "₹70 - 90LPA",
      location: "Seattle, United States",
      image: "avatar1"
  },
  {
      name: "Amelia Grace",
      role: "Product Manager",
      company: "Zoom",
      topSkills: ["Agile Methodologies", "Scrum", "JIRA"],
      about: "As a Product Manager at Zoom, I lead cross-functional teams to deliver innovative products that meet customer needs. I am skilled in roadmap planning, feature prioritization, and user research.",
      expectedCtc: "₹50 - 65LPA",
      location: "San Jose, United States",
      image: "avatar2"
  },
  {
      name: "Daniel Craig",
      role: "Game Developer",
      company: "Electronic Arts",
      topSkills: ["Unity", "C#", "Game Physics"],
      about: "As a Game Developer at EA, I design and develop immersive gaming experiences. My expertise in Unity and C# allows me to create engaging gameplay and interactive worlds.",
      expectedCtc: "₹55 - 75LPA",
      location: "Los Angeles, United States",
      image: "avatar"
  },
  {
      name: "Emma Watson",
      role: "Business Analyst",
      company: "Deloitte",
      topSkills: ["Excel", "Power BI", "SQL"],
      about: "As a Business Analyst at Deloitte, I specialize in analyzing business processes and recommending solutions. My expertise in Excel and Power BI helps drive data-driven decisions.",
      expectedCtc: "₹40 - 55LPA",
      location: "London, United Kingdom",
      image: "avatar1"
  },
  {
      name: "Noah Bennett",
      role: "Digital Marketing Specialist",
      company: "HubSpot",
      topSkills: ["SEO", "Google Ads", "Content Marketing"],
      about: "As a Digital Marketing Specialist at HubSpot, I design and execute marketing campaigns to boost online presence. My expertise in SEO and Google Ads ensures high ROI for clients.",
      expectedCtc: "₹35 - 50LPA",
      location: "Boston, United States",
      image: "avatar2"
  },
  {
      name: "Mia Harper",
      role: "QA Engineer",
      company: "Atlassian",
      topSkills: ["Selenium", "Jenkins", "Automation Testing"],
      about: "As a QA Engineer at Atlassian, I ensure the quality and reliability of software applications. My expertise in automation testing tools like Selenium helps deliver robust products.",
      expectedCtc: "₹45 - 60LPA",
      location: "Sydney, Australia",
      image: "avatar"
  },
  {
      name: "Liam Miller",
      role: "Data Engineer",
      company: "Snowflake",
      topSkills: ["Spark", "SQL", "ETL"],
      about: "As a Data Engineer at Snowflake, I build and maintain data pipelines to support business intelligence and data analytics. I focus on creating efficient and reliable data solutions.",
      expectedCtc: "₹50 - 70LPA",
      location: "San Mateo, United States",
      image: "avatar1"
  },
  {
      name: "Olivia Hayes",
      role: "Network Engineer",
      company: "Juniper Networks",
      topSkills: ["Cisco", "Routing", "Switching"],
      about: "As a Network Engineer at Juniper Networks, I design and manage network infrastructures. I ensure network security, performance, and reliability for critical business operations.",
      expectedCtc: "₹55 - 75LPA",
      location: "Sunnyvale, United States",
      image: "avatar2"
  },
  {
      name: "Jackson Lee",
      role: "Embedded Systems Engineer",
      company: "Texas Instruments",
      topSkills: ["C", "C++", "Microcontrollers"],
      about: "As an Embedded Systems Engineer at Texas Instruments, I develop software for embedded devices and systems. My expertise includes microcontroller programming and hardware integration.",
      expectedCtc: "₹50 - 65LPA",
      location: "Dallas, United States",
      image: "avatar"
  },
  {
      name: "Ava Rodriguez",
      role: "UI/UX Researcher",
      company: "Google",
      topSkills: ["User Testing", "Usability", "Accessibility"],
      about: "As a UI/UX Researcher at Google, I conduct user research to inform design decisions and improve user experiences. I gather insights through testing and analysis to enhance product usability.",
      expectedCtc: "₹45 - 60LPA",
      location: "Mountain View, United States",
      image: "avatar1"
  },
  {
      name: "Lucas Cooper",
      role: "Technical Writer",
      company: "GitHub",
      topSkills: ["Documentation", "API", "Markdown"],
      about: "As a Technical Writer at GitHub, I create clear and concise documentation for developers. My work ensures that software and APIs are well-understood and easily used.",
      expectedCtc: "₹35 - 50LPA",
      location: "San Francisco, United States",
      image: "avatar2"
  },
  {
      name: "Harper Hall",
      role: "Data Visualization Specialist",
      company: "Tableau",
      topSkills: ["Tableau", "Data Storytelling"],
      about: "As a Data Visualization Specialist at Tableau, I transform complex data into engaging visuals that drive decision-making. My expertise helps users understand data insights quickly.",
      expectedCtc: "₹40 - 55LPA",
      location: "Seattle, United States",
      image: "avatar"
  },
  {
    name: "John Carter",
    "role": "Technical Support Engineer",
    "company": "Salesforce",
    "topSkills": ["Troubleshooting", "Customer Service", "Cloud Computing"],
    "about": "As a Technical Support Engineer at Salesforce, I help customers resolve technical issues related to our products and services. I am dedicated to providing excellent customer service and ensuring satisfaction.",
    "expectedCtc": "₹40 - 55LPA",
    "location": "San Francisco, United States",
    "image": "avatar1"
  },
  {
    name: "Ella Green",
    "role": "AI Ethics Consultant",
    "company": "Accenture",
    "topSkills": ["AI Governance", "Bias Detection", "Ethics"],
    "about": "As an AI Ethics Consultant at Accenture, I advise organizations on ethical considerations in AI development and deployment. My goal is to ensure fairness, transparency, and accountability in AI systems.",
    "expectedCtc": "₹65 - 85LPA",
    "location": "Chicago, United States",
    "image": "avatar2"
  },
  {
    name: "Carter Phillips",
    "role": "VR/AR Designer",
    "company": "Meta",
    "topSkills": ["Virtual Reality", "Augmented Reality", "3D Modeling"],
    "about": "As a VR/AR Designer at Meta, I create immersive experiences for virtual and augmented reality environments. My expertise includes 3D modeling and interactive design to create engaging content.",
    "expectedCtc": "₹55 - 70LPA",
    "location": "Menlo Park, United States",
    "image": "avatar"
  },
  {
    name: "Avery Thompson",
    "role": "Database Administrator",
    "company": "Oracle",
    "topSkills": ["SQL Server", "MySQL", "Database Management"],
    "about": "As a Database Administrator at Oracle, I manage and maintain database systems to ensure data integrity and availability. My role includes database tuning, backup, and recovery strategies.",
    "expectedCtc": "₹50 - 65LPA",
    "location": "Redwood Shores, United States",
    "image": "avatar1"
  },
  {
    name: "Jackson Turner",
    "role": "Cloud Security Engineer",
    "company": "Palo Alto Networks",
    "topSkills": ["Cloud Security", "Cybersecurity", "AWS"],
    "about": "As a Cloud Security Engineer at Palo Alto Networks, I protect cloud environments from cyber threats and ensure compliance with security standards. My expertise includes implementing security best practices in AWS.",
    "expectedCtc": "₹70 - 90LPA",
    "location": "Santa Clara, United States",
    "image": "avatar2"
  },
  {
    name: "Lily Reynolds",
    "role": "Quantum Computing Researcher",
    "company": "D-Wave Systems",
    "topSkills": ["Quantum Algorithms", "Quantum Physics", "Python"],
    "about": "As a Quantum Computing Researcher at D-Wave Systems, I explore quantum algorithms and their applications to solve complex problems. My research focuses on quantum physics and advanced computational methods.",
    "expectedCtc": "₹75 - 95LPA",
    "location": "Burnaby, Canada",
    "image": "avatar"
  },
  {
    name: "Grace Simmons",
    "role": "Robotics Engineer",
    "company": "Boston Dynamics",
    "topSkills": ["Robotics", "C++", "ROS"],
    "about": "As a Robotics Engineer at Boston Dynamics, I design and develop advanced robotic systems. My expertise includes programming robots and integrating sensors and actuators.",
    "expectedCtc": "₹60 - 80LPA",
    "location": "Waltham, United States",
    "image": "avatar1"
  },
   {
    "name": "Owen Bennett",
    "role": "Information Architect",
    "company": "Bloomberg",
    "topSkills": ["Information Architecture", "Taxonomy", "Metadata"],
    "about": "As an Information Architect at Bloomberg, I am responsible for organizing and structuring information to improve discoverability and usability. I focus on developing effective content strategies.",
    "expectedCtc": "₹50 - 65LPA",
    "location": "New York, United States",
    "image": "avatar2"
  },
  {
    "name": "Scarlett Reed",
    "role": "Full Stack Javascript Developer",
    "company": "Stripe",
    "topSkills": ["React", "Node.js", "GraphQL"],
    "about": "As a Full Stack Javascript Developer at Stripe, I am dedicated to building comprehensive solutions using modern Javascript frameworks. My passion lies in delivering seamless and intuitive user experiences.",
    "expectedCtc": "₹60 - 80LPA",
    "location": "San Francisco, United States",
    "image": "avatar"
  },
  {
    "name": "Thomas Murphy",
    "role": "Software Architect",
    "company": "IBM",
    "topSkills": ["System Design", "Microservices", "Cloud Architecture"],
    "about": "As a Software Architect at IBM, I design scalable and resilient systems. My expertise includes cloud architecture and microservices design.",
    "expectedCtc": "₹75 - 95LPA",
    "location": "Armonk, United States",
    "image": "avatar1"
  },
  {
    "name": "Aubrey Scott",
    "role": "AR/VR Content Creator",
    "company": "Unity Technologies",
    "topSkills": ["Unity", "C#", "3D Design"],
    "about": "As an AR/VR Content Creator at Unity Technologies, I build immersive experiences using virtual and augmented reality technologies. My passion is crafting interactive and visually stunning content.",
    "expectedCtc": "₹50 - 65LPA",
    "location": "San Francisco, United States",
    "image": "avatar2"
  },
   {
    "name": "Henry Foster",
    "role": "Technical Program Manager",
    "company": "Google",
    "topSkills": ["Program Management", "Agile", "Stakeholder Management"],
    "about": "As a Technical Program Manager at Google, I lead complex projects from inception to completion. I ensure alignment between teams and stakeholders to deliver successful outcomes.",
    "expectedCtc": "₹70 - 90LPA",
    "location": "Mountain View, United States",
    "image": "avatar"
  }
];
  const profile={
    name: "Jarrod Wood",
    role: "Software Engineer",
    company: "Google",
    location: "New York, United States",
    about: "As a Software Engineer at Google, I specialize in building scalable and high-performance applications. My expertise lies in integrating front-end and back-end technologies to deliver seamless user experiences. With a strong foundation in React and SpringBoot, and a focus on MongoDB for database solutions, I am passionate about leveraging the latest technologies to solve complex problems and drive innovation. My goal is to create impactful software that enhances productivity and meets user needs effectively.",
    skills: ["React", "SpringBoot", "MongoDB", "HTML", "CSS", "JavaScript", "Node.js", "Express", "MySQL", "Python", "Django", "Figma", "Sketch", "Docker", "AWS"],
    experience: [
      {
        title: "Software Engineer III",
        company: "Google",
        location: "New York, United States",
        startDate: "Apr 2022",
        endDate: "Present",
        description: "As a Software Engineer at Google, I am responsible for designing, developing, and maintaining scalable software solutions that enhance user experience and improve operational efficiency. My role involves collaborating with cross-functional teams to define project requirements, develop technical specifications, and implement robust applications using cutting-edge technologies. I actively participate in code reviews, ensuring adherence to best practices and coding standards, and contribute to the continuous improvement of the development process."
      },
      {
        title: "Software Engineer",
        company: "Microsoft",
        location: "Seattle, United States",
        startDate: "Jun 2018",
        endDate: "Mar 2022",
        description: "At Microsoft, I worked on developing and optimizing cloud-based applications, focusing on enhancing performance and scalability. I collaborated with product managers and designers to create innovative features that improved user engagement. My responsibilities included writing clean, maintainable code, performing code reviews, and mentoring junior developers. I played a key role in migrating legacy applications to modern cloud infrastructure, resulting in significant cost savings and improved efficiency."
      }
    ],
    certifications: [
      {
        name: "Google Professional Cloud Architect",
        issuer: "Google",
        issueDate: "Aug 2023",
        certificateId: "CB72982GG"
      },
      {
        name: "Microsoft Certified: Azure Solutions Architect Expert",
        issuer: "Microsoft",
        issueDate: "May 2022",
        certificateId: "MS12345AZ"
      }
    ]
  }
  
  
  
export {searchFields, talents, profile};