export const site = {
  name: "Abishkar Rai",
  role: "Software Engineer",
  location: "Sydney, NSW",
  email: "raiabishkar0.5@gmail.com",
  phone: "0416 881 277",
  phoneHref: "tel:+61416881277",
  github: "https://github.com/abishkar123",
  linkedin: "https://www.linkedin.com/in/abishkar-rai",
  resume: "/assets/resume.pdf",
  tagline:
    "Software Engineer based in Sydney building high-performance web applications with modern JavaScript frameworks, microservices, and cloud-based solutions — with a strong focus on AI agents, RAG workflows, and LLM integrations.",
};

export const typedPhrases = [
  "full-stack applications.",
  "cloud-native solutions.",
  "AI agents & RAG apps.",
  "fast, modern UIs.",
];

export const experience = [
  {
    role: "Software Engineer",
    company: "Mortgage House",
    location: "Sydney, NSW",
    period: "Current",
    points: [
      "Building full-stack and cloud applications with TypeScript and C#.",
      "Developing AI-assisted features and automating CI/CD pipelines with GitHub Actions.",
      "Deploying and operating services on Azure and Vercel.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "BizVision",
    location: "Sydney, NSW",
    period: "Sep 2023 — 2025",
    points: [
      "Built responsive real estate UIs with TypeScript, React, Next.js, Redux, and Tailwind CSS.",
      "Optimized Node.js/Express REST APIs handling thousands of daily requests with pagination, caching, and rate limiting, secured with JWT and OAuth.",
      "Created an AI-powered customer service agent with LangChain, AWS, vector DB, and Gemini LLMs.",
      "Deployed apps on AWS (S3, Lambda, Elastic Beanstalk, CodePipeline, IAM) with CI/CD.",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Rebb Teach",
    location: "Sydney, NSW",
    period: "Mar 2023 — Aug 2023",
    points: [
      "Delivered EdTech features using PHP, Laravel, React, and MySQL to enhance platform usability.",
      "Participated in the full SDLC from planning through testing and deployment.",
      "Integrated Google Analytics for data-driven marketing and campaign analysis.",
    ],
  },
];

export const skills = [
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript ES6+", "C#", "Python", "HTML", "CSS / SASS"],
  },
  {
    group: "Frontend",
    items: ["React", "Next.js", "Redux", "Tailwind CSS", "React Bootstrap"],
  },
  {
    group: "Backend & AI",
    items: ["Node.js", "Express", "RESTful APIs", "LangChain", "RAG", "AI Agents", "API Gateway"],
  },
  {
    group: "Databases",
    items: ["MongoDB", "MySQL", "Redis", "Firebase", "Vector DBs"],
  },
  {
    group: "Cloud & DevOps",
    items: ["AWS (S3, Lambda, IAM)", "Azure", "Docker", "CodePipeline", "GitHub Actions", "Vercel"],
  },
  {
    group: "Testing & Tools",
    items: ["Jest", "React Testing Library", "Git", "Webpack", "Cursor AI"],
  },
];

export const projects = [
  {
    title: "Resume Optimization AI",
    description:
      "AI-powered application that optimizes resumes using custom prompts and real data references. Built with React, Node.js, LangChain, OpenAI models, and AWS S3.",
    image: "/assets/project-1.png",
    tags: ["React", "Node.js", "LangChain", "AWS"],
    links: [
      { label: "Frontend", href: "https://github.com/abishkar123/resume-optimizaton-client" },
      { label: "API", href: "https://github.com/abishkar123/Resume-optimization-api" },
    ],
  },
  {
    title: "AI Image-to-Text Agent",
    description:
      "An AI agent that extracts and converts text from images using LLMs, LangChain, and AWS — exposed as a clean API with a simple frontend.",
    image: "/assets/project-2.png",
    tags: ["JavaScript", "LangChain", "AWS", "AI"],
    links: [
      { label: "API", href: "https://github.com/abishkar123/image-to-text.ai-api" },
      { label: "Frontend", href: "https://github.com/abishkar123/-Image-Text-AI" },
    ],
  },
  {
    title: "DSA Solutions",
    description:
      "A growing collection of data structures and algorithms solutions in JavaScript — a practice ground for problem solving and interview prep.",
    image: "/assets/project-3.png",
    tags: ["JavaScript", "Algorithms", "Data Structures"],
    links: [{ label: "GitHub", href: "https://github.com/abishkar123/DSA-solutions" }],
  },
];
