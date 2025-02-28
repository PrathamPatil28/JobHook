import { IconBriefcase, IconMapPin, IconRecharging, IconSearch } from "@tabler/icons-react";
const dropdownData = [
  { 
      title: "Job Title", 
      icon: IconSearch, 
      options: [
          'Designer', 'Developer', 'Product Manager', 'Marketing Specialist', 'Data Analyst', 'Sales Executive', 
          'Content Writer', 'Customer Support', 'UI/UX Designer', 'Software Engineer', 'Data Scientist', 'SEO Specialist', 
          'DevOps Engineer', 'Database Administrator', 'System Analyst', 'HR Manager', 'Project Manager', 'IT Support Specialist',
          'Technical Writer', 'Mobile App Developer', 'Web Developer', 'Cloud Engineer', 'Network Administrator', 'Business Analyst', 
          'Quality Assurance Engineer', 'Game Developer', 'Machine Learning Engineer', 'AI Specialist', 'Cybersecurity Specialist', 
          'Blockchain Developer', 'Social Media Manager', 'Copywriter', 'Sales Manager', 'Operations Manager', 'Graphic Designer', 
          'Digital Marketing Manager', 'Accountant', 'Financial Analyst', 'Legal Advisor', 'Interior Designer', 'Event Planner', 
          'Logistics Coordinator', 'Biomedical Engineer', 'Research Scientist', 'Statistician', 'Customer Success Manager', 
          'Product Owner', 'Scrum Master', 'AR/VR Developer', 'Robotics Engineer', 'Content Strategist', 'E-commerce Manager', 
          'Video Editor', 'Photographer', 'Animator', 'Technical Recruiter', 'Business Development Executive'
      ] 
  },
  { 
      title: "Location", 
      icon: IconMapPin, 
      options: [
        // India
        'Delhi', 'Mumbai', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 'Ahmedabad', 'Pune', 'Jaipur', 'Lucknow',
        'Kanpur', 'Nagpur', 'Indore', 'Thane', 'Bhopal', 'Visakhapatnam', 'Patna', 'Vadodara', 'Ghaziabad', 'Ludhiana',
        'Agra', 'Nashik', 'Ranchi', 'Meerut', 'Guwahati', 'Rajkot', 'Chandigarh', 'Mysore', 'Kozhikode', 'Thiruvananthapuram',
        'Vijayawada', 'Madurai', 'Jabalpur', 'Varanasi', 'Jodhpur', 'Coimbatore', 'Raipur', 'Kota', 'Guntur', 'Surat',
        'Dhanbad', 'Amritsar', 'Aurangabad', 'Navi Mumbai', 'Allahabad', 'Howrah', 'Hubli', 'Solapur', 'Salem', 'Tiruchirappalli',
        'Gwalior', 'Bareilly', 'Moradabad', 'Mangalore', 'Gaya', 'Jamshedpur', 'Udaipur', 'Kollam', 'Aligarh', 'Rourkela',
        'Tiruppur', 'Thrissur', 'Warangal', 'Cuttack', 'Bhavnagar', 'Dehradun', 'Bikaner', 'Noida', 'Faridabad', 'Jalandhar',
        'Shillong', 'Belgaum', 'Puducherry', 'Kharagpur', 'Bhubaneswar', 'Siliguri', 'Shimla', 'Darjeeling', 'Port Blair',
        'Panaji', 'Aizawl', 'Imphal', 'Gangtok', 'Itanagar', 'Kohima', 'Dibrugarh', 'Tezpur', 'Dimapur', 'Srinagar', 'Leh',
        'Kargil', 'Amravati', 'Satara', 'Kolhapur', 'Ratnagiri', 'Nanded', 'Latur', 'Akola', 'Parbhani', 'Wardha', 'Chandrapur',
        'Palakkad', 'Malappuram', 'Kannur', 'Kasargod', 'Pathanamthitta', 'Alappuzha', 'Kottayam', 'Idukki', 'Chikmagalur',
        'Hassan', 'Tumkur', 'Udupi', 'Gulbarga', 'Bellary', 'Bijapur', 'Davanagere', 'Bidar', 'Mandya', 'Karwar', 'Madikeri',
        // International Cities
        'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'London', 'Manchester', 'Birmingham', 'Glasgow', 'Edinburgh',
        'Toronto', 'Vancouver', 'Montreal', 'Ottawa', 'Calgary', 'Paris', 'Marseille', 'Lyon', 'Toulouse', 'Nice',
        'Berlin', 'Munich', 'Frankfurt', 'Hamburg', 'Cologne', 'Tokyo', 'Osaka', 'Yokohama', 'Nagoya', 'Fukuoka',
        'Shanghai', 'Beijing', 'Shenzhen', 'Guangzhou', 'Chengdu', 'Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide',
        'Dubai', 'Abu Dhabi', 'Sharjah', 'Doha', 'Riyadh', 'Bangkok', 'Phuket', 'Chiang Mai', 'Singapore', 'Kuala Lumpur',
        'Jakarta', 'Surabaya', 'Bali', 'Ho Chi Minh City', 'Hanoi', 'Cape Town', 'Johannesburg', 'Durban', 'Cairo', 'Alexandria',
        'Istanbul', 'Ankara', 'Izmir', 'Moscow', 'Saint Petersburg', 'Rome', 'Milan', 'Florence', 'Naples', 'Venice',
        'Madrid', 'Barcelona', 'Seville', 'Valencia', 'Lisbon', 'Porto', 'Brussels', 'Amsterdam', 'Rotterdam', 'The Hague',
        'Zurich', 'Geneva', 'Bern', 'Vienna', 'Budapest', 'Warsaw', 'Prague', 'Bratislava', 'Copenhagen', 'Stockholm',
        'Oslo', 'Helsinki', 'Reykjavik', 'Mexico City', 'Cancun', 'Guadalajara', 'Monterrey', 'Santiago', 'Buenos Aires',
        'Rio de Janeiro', 'São Paulo', 'Lima', 'Bogota', 'Caracas'
    ]
    
  },
  { 
      title: "Experience", 
      icon: IconBriefcase, 
      options: ['Entry Level', 'Intermediate', 'Expert'] 
  },
  { 
      title: "Job Type", 
      icon: IconRecharging, 
      options: ['Full Time', 'Part Time', 'Contract', 'Freelance', 'Internship'] 
  }
];

const jobList = [
    {
      jobTitle: "Product Designer",
      company: "Meta",
      applicants: 25,
      experience: "Entry Level",
      jobType: "Full-Time",
      location: "New York",
      package: "32 LPA",
      postedDaysAgo: 12,
      description: "Meta is seeking a Product Designer to join our team. You'll be working on designing user-centric interfaces for our blockchain wallet platform. This is an excellent opportunity for entry-level designers to grow their skills in a dynamic environment."
    },
    {
      jobTitle: "Sr. UX Designer",
      company: "Netflix",
      applicants: 14,
      experience: "Expert",
      jobType: "Part-Time",
      location: "San Francisco",
      package: "40 LPA",
      postedDaysAgo: 5,
      description: "Netflix is looking for a Sr. UX Designer to enhance our user experience on streaming platforms. Ideal candidates will have extensive experience in user research and interaction design, helping us to deliver engaging content to our global audience."
    },
    {
      jobTitle: "Product Designer",
      company: "Microsoft",
      applicants: 58,
      experience: "Intermediate",
      jobType: "Full-Time",
      location: "Remote",
      package: "35 LPA",
      postedDaysAgo: 4,
      description: "Join Microsoft as a Product Designer and contribute to our new Lightspeed LA studio. We're looking for designers who can create intuitive and compelling gaming experiences. This is a remote position, offering flexibility and the opportunity to work with a leading technology company."
    },
    {
      jobTitle: "Product Designer",
      company: "Adobe",
      applicants: 23,
      experience: "Expert",
      jobType: "Part-Time",
      location: "Toronto",
      package: "33 LPA",
      postedDaysAgo: 22,
      description: "Adobe is seeking a part-time Product Designer to help us enhance our user experience. You will work closely with our team to design features that make our platform more engaging and user-friendly. This role is perfect for experienced designers looking for flexible work hours."
    },
    {
      jobTitle: "Backend Developer",
      company: "Google",
      applicants: 21,
      experience: "Entry Level",
      jobType: "Full-Time",
      location: "Bangalore",
      package: "38 LPA",
      postedDaysAgo: 8,
      description: "Google is hiring a Backend Developer to join our team in Bangalore. You'll be responsible for developing scalable backend systems that power our services. This role requires strong problem-solving skills and experience with modern backend technologies."
    },
    {
      jobTitle: "SMM Manager",
      company: "Spotify",
      applicants: 73,
      experience: "Intermediate",
      jobType: "Full-Time",
      location: "Delhi",
      package: "34 LPA",
      postedDaysAgo: 8,
      description: "Spotify is looking for an SMM Manager to lead our social media marketing efforts in Delhi. You will create and manage campaigns to promote our music streaming service, engage with our audience, and drive growth. This role is ideal for creative marketers with a passion for music."
    },
    {
      jobTitle: "Frontend Developer",
      company: "Amazon",
      applicants: 50,
      experience: "Intermediate",
      jobType: "Full-Time",
      location: "Seattle",
      package: "36 LPA",
      postedDaysAgo: 10,
      description: "Amazon is looking for a Frontend Developer to build and maintain our customer-facing applications. You will work with a dynamic team to create seamless and responsive web applications."
    },
    {
      jobTitle: "iOS Developer",
      company: "Apple",
      applicants: 30,
      experience: "Expert",
      jobType: "Full-Time",
      location: "Cupertino",
      package: "42 LPA",
      postedDaysAgo: 7,
      description: "Apple is seeking an iOS Developer to join our team in Cupertino. You will work on developing cutting-edge applications for iOS devices, ensuring high performance and an exceptional user experience."
    } ,{
      jobTitle: "Data Scientist",
      company: "Tesla",
      applicants: 18,
      experience: "Intermediate",
      jobType: "Full-Time",
      location: "Palo Alto",
      package: "40 LPA",
      postedDaysAgo: 6,
      description: "Tesla is looking for a Data Scientist to analyze large-scale datasets and improve operational efficiency. This role involves advanced modeling, machine learning, and problem-solving skills."
    },
    {
      jobTitle: "Digital Marketing Specialist",
      company: "Google",
      applicants: 35,
      experience: "Entry Level",
      jobType: "Part-Time",
      location: "Mumbai",
      package: "28 LPA",
      postedDaysAgo: 10,
      description: "Google is seeking a Digital Marketing Specialist to develop and execute strategies for our online advertising campaigns. Perfect for those passionate about analytics and customer engagement."
    },
    {
      jobTitle: "DevOps Engineer",
      company: "IBM",
      applicants: 25,
      experience: "Freshers",
      jobType: "Full-Time",
      location: "Bangalore",
      package: "37 LPA",
      postedDaysAgo: 3,
      description: "IBM is hiring a DevOps Engineer to manage CI/CD pipelines, automate workflows, and ensure seamless delivery of software solutions. Ideal candidates should have strong experience in cloud platforms."
    },
    {
      jobTitle: "Machine Learning Engineer",
      company: "Meta",
      applicants: 20,
      experience: "Expert",
      jobType: "Full-Time",
      location: "Seattle",
      package: "50 LPA",
      postedDaysAgo: 2,
      description: "Facebook is hiring a Machine Learning Engineer to work on cutting-edge AI models. Join our team to create impactful solutions that shape the future of technology."
    },
    {
      jobTitle: "Cloud Solutions Architect",
      company: "AWS",
      applicants: 16,
      experience: "Expert",
      jobType: "Remote",
      location: "Remote",
      package: "55 LPA",
      postedDaysAgo: 15,
      description: "AWS is looking for a Cloud Solutions Architect to design and implement cloud-based solutions for our clients. This remote position requires extensive knowledge of AWS services."
    },
    {
      jobTitle: "Game Developer",
      company: "Unity Technologies",
      applicants: 22,
      experience:"Entry Level",
      jobType: "Full-Time",
      location: "USA",
      package: "45 LPA",
      postedDaysAgo: 11,
      description: "Unity Technologies is seeking a Game Developer to create immersive and innovative games. Proficiency in Unity and experience with C# are required."
    },
    {
      jobTitle: "Graphic Designer",
      company: "Adobe",
      applicants: 40,
      experience: "Entry Level",
      jobType: "Part-Time",
      location: "San Jose",
      package: "30 LPA",
      postedDaysAgo: 9,
      description: "Adobe is looking for a Graphic Designer to design compelling visuals for our software platforms. This is an excellent opportunity for entry-level designers to showcase their creativity."
    },
    {
      jobTitle: "Cybersecurity Analyst",
      company: "Cisco",
      applicants: 19,
      experience: "Intermediate",
      jobType: "Full-Time",
      location: "Remote",
      package: "38 LPA",
      postedDaysAgo: 4,
      description: "Cisco is hiring a Cybersecurity Analyst to identify, monitor, and address security threats. Candidates with experience in penetration testing and risk assessment will excel in this role."
    },
    {
      jobTitle: "Blockchain Developer",
      company: "Coinbase",
      applicants: 14,
      experience: "Expert",
      jobType: "Remote",
      location: "Remote",
      package: "60 LPA",
      postedDaysAgo: 7,
      description: "Coinbase is seeking a Blockchain Developer to build secure and scalable blockchain solutions. This is a remote position for experienced developers with expertise in Solidity and smart contracts."
    },
    {
      jobTitle: "Content Writer",
      company: "HubSpot",
      applicants: 45,
      experience: "Entry Level",
      jobType: "Part-Time",
      location: "Remote",
      package: "25 LPA",
      postedDaysAgo: 12,
      description: "HubSpot is looking for a Content Writer to create engaging blog posts and marketing materials. Ideal for individuals with excellent writing and research skills."
    },
    {
      jobTitle: "Full Stack Developer",
      company: "Oracle",
      applicants: 30,
      experience: "Intermediate",
      jobType: "Full-Time",
      location: "Chennai",
      package: "42 LPA",
      postedDaysAgo: 3,
      description: "Oracle is hiring a Full Stack Developer to design and implement end-to-end software solutions. This position involves working with a talented team to deliver world-class applications."
    },
    {
      jobTitle: "Business Analyst",
      company: "Accenture",
      applicants: 50,
      experience: "Entry Level",
      jobType: "Full-Time",
      location: "Pune",
      package: "35 LPA",
      postedDaysAgo: 6,
      description: "Accenture is looking for a Business Analyst to identify and implement solutions for business challenges. This role requires excellent analytical and communication skills."
    } 
  ];

  export {dropdownData,jobList};