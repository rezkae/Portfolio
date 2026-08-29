export const profile = {
  firstName: "Andreas Keazer",
  lastName: "Canlas",
  shortName: "AK",
  fullRole: "Full-Stack Developer & AI/ML Engineer",
  location: "Tarlac, Philippines",
  status: "Available for remote work",
  available: true,
  remote: "Open to remote work",
  focus: "Full-Stack Development, AI/ML",
  tagline: "Engineering software with precision and purpose.",
  intro:
    "A full-stack developer and AI/ML engineer building clinical software and applied machine learning systems.",
  email: "keazercanlas@gmail.com",
  phone: "+63 920-614-5581",
  github: "https://github.com/rezkae",
  githubHandle: "rezkae",
  linkedin: "https://linkedin.com/in/andreas-keazer-canlas-84269b3b9",
  resumeHref: "/Andreas-Canlas-Full_Stack_Developer-CV.pdf",
  // Note: Update this to your actual hosted resume PDF link when ready
};

export const stats = [
  { label: "Role", value: "Full-Stack Developer, AI/ML" },
  { label: "Location", value: "Tarlac, Philippines" },
  { label: "Status", value: "Available for remote work" },
  { label: "Focus", value: "Full-Stack Development, AI/ML" },
];

// Quick stats — Drei-style number tiles (values chosen by the owner)
export const quickStats = [
  { number: "2+", label: "Years of Experience" },
  { number: "∞", label: "All-nighters Survived" },
];

export type ProjectImage = {
  src: string;
  alt: string;
};

export type Project = {
  id: string;
  index: string;
  title: string;
  category: string;
  summary: string;
  detail: string;
  metrics?: { label: string; value: string }[];
  stack: string[];
  year: string;
  repo?: string;
  images: ProjectImage[];
};

export const projects: Project[] = [
  {
    id: "melascan",
    index: "01",
    title: "MELAScan",
    category: "Bachelor's Thesis · Full-Stack + AI/ML",
    summary:
      "A clinic management system that pairs AI-assisted melanoma detection with appointment scheduling, built solo from model to interface.",
    detail:
      "MELAScan is a clinic management system that integrates AI-driven melanoma detection with automated appointment scheduling, aimed at improving diagnostic accuracy and streamlining clinical workflows. The AI pipeline runs YOLOv11 for real-time lesion detection alongside a YOLOv11-cls and EfficientNet-B4 ensemble for classifying lesions as benign, melanoma, or suspicious, with disagreement flagging between models to reduce false negatives. On top of that sits a full-stack platform built with React, Express.js, and PostgreSQL: patient and lesion records, an anatomical body map for tracking scan history, risk-based appointment scheduling, and role-based dashboards for dermatologists and receptionists.",
    stack: ["React", "Node.js", "PostgreSQL", "Python", "FastAPI", "YOLOv11", "EfficientNet-B4"],
    year: "2026",
    repo: "https://github.com/rezkae/Melascan",
    images: [
      { src: "/projects/melascan/lesion-scan.jpg", alt: "MELAScan lesion scanning screen with an AI bounding box over a detected lesion" },
      { src: "/projects/melascan/dashboard.jpg", alt: "MELAScan dermatologist dashboard with scan totals and risk distribution" },
      { src: "/projects/melascan/lesion-suspicious.jpg", alt: "MELAScan classification report flagging a suspicious lesion with ABCDE criteria" },
      { src: "/projects/melascan/patient-records.jpg", alt: "MELAScan patient records screen with scan history" },
      { src: "/projects/melascan/appointments.jpg", alt: "MELAScan appointment scheduling calendar and queue" },
    ],
  },
  {
    id: "exercise-lab",
    index: "02",
    title: "Exercise Lab",
    category: "Case Study · Web Application",
    summary:
      "A responsive fitness website built with a 4-person team, covering the barriers that keep people from working out.",
    detail:
      "Collaborated in a 4-person team to design and build Exercise Lab, a responsive fitness website addressing common barriers like fear of improper form and lack of experience, through accessible instructional content and video demonstrations. Built user authentication and an account dashboard, an interactive BMI calculator with unit toggling between kg/lbs and ft/cm plus a saved BMI history, and a categorized exercise guide spanning six muscle-group and movement categories with video and step-by-step instructions. All 8 core features passed functionality testing, and a 10-respondent user survey rated the tutorials clear and easy to follow.",
    stack: ["HTML", "CSS", "PHP", "MySQL", "Figma"],
    year: "2024",
    images: [
      { src: "/projects/exercise-lab/hero.jpg", alt: "Exercise Lab home page hero section" },
      { src: "/projects/exercise-lab/exercise-demos.jpg", alt: "Exercise Lab categorized exercise demo library" },
      { src: "/projects/exercise-lab/bmi-calculator.jpg", alt: "Exercise Lab BMI calculator with weight and height sliders" },
      { src: "/projects/exercise-lab/login.jpg", alt: "Exercise Lab login screen" },
    ],
  },
  {
    id: "nomvet-clinic",
    index: "03",
    title: "NomVet Clinic",
    category: "Case Study · Admin Platform",
    summary:
      "A landing page and admin dashboard for a veterinary volunteer program, with access control and analytics.",
    detail:
      "Built a landing page paired with an admin dashboard to handle volunteer submissions for a veterinary clinic program. Implemented access control for admin-only actions and a monitoring view for website analytics, so coordinators could track engagement without digging through raw logs.",
    stack: ["Visual Basic"],
    year: "2024",
    repo: "https://github.com/Aron-Arboleda/NomVet",
    images: [
      { src: "/projects/nomvet-clinic/HomePage.png", alt: "NomVet Clinic homepage with navigation and call-to-action buttons" },
      { src: "/projects/nomvet-clinic/LoginPage.png", alt: "NomVet Clinic login page with email and password fields" },
      { src: "/projects/nomvet-clinic/SignupPage.png", alt: "NomVet Clinic signup page with registration form" },
      { src: "/projects/nomvet-clinic/AdminLoginPage.png", alt: "NomVet Clinic admin login page for authorized personnel" },
      { src: "/projects/nomvet-clinic/BookingPage.png", alt: "NomVet Clinic booking page for scheduling appointments" },
      { src: "/projects/nomvet-clinic/PetRegistrationPage.png", alt: "NomVet Clinic pet registration form for new clients" },
      { src: "/projects/nomvet-clinic/ProfilePage.png", alt: "NomVet Clinic user profile page with personal information" },
      { src: "/projects/nomvet-clinic/PricingPage.png", alt: "NomVet Clinic pricing page showing service options" },
    ],
  },
];

export const experience = [
  {
    role: "Operations Associate",
    org: "The Petshop Boys Co.",
    location: "Tarlac, Philippines",
    period: "Apr 2025 to Mar 2026",
    points: [
      "Developed a point-of-sale system with integrated daily financial tracking and automated revenue reporting.",
      "Managed systematic data entry of store expenses, revenues, and inventory logs to keep financial tracking current.",
      "Worked directly with customers to understand their needs and recommend the right products.",
    ],
  },
  {
    role: "Intern",
    org: "Go Baluyot & Adion Law Office",
    location: "Tarlac, Philippines",
    period: "Jun 2025 to Jul 2025",
    points: [
      "Automated the billing pipeline with an Excel-SQL interface that generates client-ready receipts matching the firm's existing designs.",
      "Delivered hands-on IT support, diagnosed hardware issues, and recommended upgrades.",
      "Resolved server capacity limits by implementing a router-based file-sharing system and network printer mapping.",
    ],
  },
];

export const education = {
  school: "Tarlac State University",
  location: "Tarlac, Philippines",
  degree: "Bachelor of Science in Computer Science",
  period: "July 2026",
};

export const certificates = [
  "Cisco CCNAv7: Switching, Routing, and Wireless Essentials (2024)",
  "Cisco CCNAv7: Introduction to Networks (2024)",
];

// Journey / Timeline — vertical list of milestones
export const journey = [
  { year: "2020", title: "First entry into reverse engineering" },
  { year: "2022", title: "Java" },
  { year: "2023", title: "Figma, UI & UX design" },
  { year: "2024", title: "Web development", desc: "HTML, CSS, JavaScript, and SQL (CRUD)." },
  {
    year: "2025–2026",
    title: "Experimenting with local LLMs; started learning web application frameworks/stacks",
    desc: "PERN (PostgreSQL, Express, React, Node.js), the stack used on my thesis, MELAScan.",
  },
];

export const techStack = [
  "TypeScript",
  "JavaScript",
  "React",
  "Node.js",
  "Python",
  "FastAPI",
  "PostgreSQL",
  "SQL",
  "Java",
  "Visual Basic",
  "Figma",
];

// Things I'm actively exploring right now (dashed pills on the About page)
export const currentlyExploring = [
  "AI/ML",
  "Cloud Architecture",
  "CI/CD",
  "Data Science",
];

export const services = [
  {
    index: "01",
    title: "Web Development",
    description:
      "Full-stack web applications built with React, Next.js, and Node.js, from the data layer to the interface.",
    tags: ["Next.js", "React", "TypeScript", "Node.js"],
  },
  {
    index: "02",
    title: "AI/ML Engineering",
    description:
      "Applied machine learning: custom models, inference pipelines, and evaluation that ships with the product.",
    tags: ["Python", "FastAPI", "YOLOv11", "EfficientNet"],
  },
  {
    index: "03",
    title: "Automation & Tooling",
    description:
      "Internal tools and pipelines that remove repetitive work, from billing automation to data entry and reporting.",
    tags: ["SQL", "Excel-SQL", "Scripting"],
  },
  {
    index: "04",
    title: "UI/UX Implementation",
    description:
      "Clean, responsive interfaces implemented to spec, from Figma mockup to production markup.",
    tags: ["Figma", "Tailwind CSS", "Responsive"],
  },
];
