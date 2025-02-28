const fields = [
  { label: "Job Title", placeholder: "Enter Job Title", options: [
      'Designer', 'Developer', 'Product Manager', 'Marketing Specialist', 'Data Analyst', 'Sales Executive', 
      'Content Writer', 'Customer Support', 'Software Engineer', 'UI/UX Designer', 'Business Analyst', 
      'HR Manager', 'Data Scientist', 'DevOps Engineer', 'Machine Learning Engineer', 'Cybersecurity Analyst', 
      'Blockchain Developer', 'Embedded Systems Engineer', 'Game Developer', 'Full Stack Developer', 
      'Cloud Engineer', 'IT Support Specialist', 'Quality Assurance Engineer', 'Network Engineer', 
      'SEO Specialist', 'Digital Marketer', 'Technical Writer', 'Social Media Manager', 'Finance Analyst', 
      'Legal Consultant', 'Public Relations Manager', 'Healthcare Consultant', 'E-commerce Manager', 
      'Supply Chain Manager', 'Operations Manager', 'Database Administrator', 'Artificial Intelligence Engineer', 
      'Scrum Master', 'Risk Analyst', 'Salesforce Developer', 'IoT Engineer', 'Graphic Designer', 
      'Robotics Engineer', 'Biomedical Engineer', 'Customer Success Manager', 'HR Executive', 'Growth Hacker', 
      'Creative Director', 'Video Editor', 'Content Strategist', 'Investment Analyst'
  ]},
  { label: "Company", placeholder: "Enter Company Name", options: [
      'Google', 'Microsoft', 'Meta', 'Netflix', 'Adobe', 'Facebook', 'Amazon', 'Apple', 'Spotify', 'IBM', 
      'Oracle', 'Intel', 'SAP', 'Salesforce', 'LinkedIn', 'Twitter', 'Tesla', 'SpaceX', 'Nvidia', 'Cisco', 
      'Dell', 'HP', 'Samsung', 'Sony', 'Uber', 'Airbnb', 'Dropbox', 'Pinterest', 'TikTok', 'Snapchat', 
      'Reddit', 'Zoom', 'Twitch', 'Slack', 'Shopify', 'PayPal', 'Square', 'Stripe', 'Robinhood', 'Goldman Sachs', 
      'JPMorgan Chase', 'Bank of America', 'Morgan Stanley', 'PWC', 'Deloitte', 'EY', 'KPMG', 'Accenture', 
      'Capgemini', 'TCS', 'Infosys', 'Wipro', 'Cognizant'
  ]},
  { label: "Experience", placeholder: "Enter Experience Level", options: [
      'Entry Level', 'Intermediate', 'Expert', 'Senior', 'Lead', 'Director', 'Intern', 'Junior', 'Mid-level'
  ]},
  { label: "Job Type", placeholder: "Enter Job Type", options: [
      'Full Time', 'Part Time', 'Contract', 'Freelance', 'Internship', 'Remote', 'Temporary', 'Consultant', 
      'Volunteer', 'Apprenticeship'
  ]},
  { label: "Location", placeholder: "Enter Job Location", options: [
      'Delhi', 'New York', 'San Francisco', 'London', 'Berlin', 'Tokyo', 'Sydney', 'Toronto', 'Paris', 
      'Dubai', 'Bangalore', 'Mumbai', 'Los Angeles', 'Chicago', 'Boston', 'Shanghai', 'Singapore', 'Hong Kong', 
      'Madrid', 'Barcelona', 'Stockholm', 'Dublin', 'Zurich', 'Copenhagen', 'Amsterdam', 'Vienna', 'Seoul', 
      'Jakarta', 'Manila', 'Bangkok', 'Moscow', 'Istanbul', 'Melbourne', 'Rome', 'Mexico City', 'São Paulo', 
      'Buenos Aires', 'Johannesburg', 'Cape Town', 'Brussels', 'Helsinki', 'Prague', 'Warsaw', 'Lisbon', 
      'Vancouver', 'Kuala Lumpur', 'Oslo', 'Geneva', 'Athens'
  ]},
  { label: "Salary", placeholder: "Enter Salary", options: [
      '10 LPA', '15 LPA', '20 LPA', '25 LPA', '30 LPA', '35 LPA', '40 LPA', '45 LPA', '50 LPA', '60 LPA', 
      '70 LPA', '80 LPA', '90 LPA', '100 LPA', '5 LPA', '7 LPA', '12 LPA', '18 LPA', '22 LPA', '28 LPA', 
      '33 LPA', '38 LPA', '43 LPA', '55 LPA', '65 LPA', '75 LPA', '85 LPA', '95 LPA', '110 LPA', '120 LPA'
  ]}
];

const content =
  '<h4>About The Job</h4><p>Write description here...</p><h4>Responsibilities</h4><ul><li>Add responsibilities here...</li></ul><h4>Qualifications and Skill Sets</h4><ul><li>Add required qualification and skill set here...</li></ul>';
export  {fields, content};