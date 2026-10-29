export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  features: string[];
  technologies: string[];
  liveUrl?: string; // only present if confirmed
  githubUrl: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  technicalPoints: string[];
  futureImprovements?: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution?: string;
  duration: string;
  description: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  focus: string;
  description: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
}

export interface AboutDetails {
  paragraphs: string[];
  highlights: {
    label: string;
    value: string;
    detail: string;
  }[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  about: AboutDetails;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  resume: {
    isAvailable: boolean;
    filePath: string;
  };
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  socialLinks: SocialLinks;
  skills: SkillCategory[];
  education: EducationItem[];
  experience: ExperienceItem[];
  projects: Project[];
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Mahmudun Nabin",
    title: "Web Developer",
    bio: "I am a web developer passionate about building modern, responsive, and user-friendly web applications using JavaScript, TypeScript, React, and Next.js. I enjoy learning new technologies and building hands-on personal projects.",
    about: {
      paragraphs: [
        "Hello! I am Mahmudun Nabin, a web developer who loves creating clean, responsive, and intuitive web applications.",
        "I am currently pursuing a Full Stack Web Engineering course at Programming Hero, where I am developing my skills in modern web technologies and programming.",
        "I currently have no professional work experience, but I am actively dedicating my time to hands-on learning and building personal web projects. I work primarily with JavaScript, TypeScript, React, Next.js, and Tailwind CSS to strengthen my frontend and full-stack development skills.",
      ],
      highlights: [
        {
          label: "Professional Status",
          value: "Web Developer",
          detail: "Personal Projects & Learning",
        },
        {
          label: "Technical Focus",
          value: "Modern Web Technologies",
          detail: "React & Next.js Ecosystem",
        },
      ],
    },
    image: {
      src: "/images/prodile.jpeg",
      alt: "Mahmudun Nabin - Web Developer",
      width: 1086,
      height: 1448,
    },
    resume: {
      isAvailable: true,
      filePath: "/resume.pdf",
    },
  },
  socialLinks: {
    github: "https://github.com/nabin-90",
    linkedin: "https://www.linkedin.com/in/mahmudun-nabin/",
    email: "mahmudunnabin90@gmail.com",
  },
  skills: [
    {
      title: "Core Technologies",
      skills: [
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
      ],
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub"],
    },
  ],
  education: [
    {
      id: "edu-1",
      degree: "Full Stack Web Development",
      duration: "Currently Learning",
      description:
        "Currently learning Full Stack Web Development at Programming Hero, gaining hands-on experience with modern web technologies and building practical projects.",
    },
  ],
  experience: [
    {
      id: "exp-1",
      role: "Aspiring Web Developer",
      focus: "Personal Projects & Self-Directed Learning",
      description: [
        "Focusing on self-directed learning and practical projects without prior corporate experience.",
        "Designing and developing responsive user interfaces with React, Next.js, and Tailwind CSS.",
        "Applying modern coding practices, component-driven design, and version control with Git and GitHub.",
      ],
    },
  ],
  projects: [
    {
      slug: "bazar-dor",
      title: "Bazar Dor (বাজার দর)",
      summary:
        "A Bengali-language daily essential market price tracking web application to explore, track, and compare commodity prices across Bangladesh.",
      description:
        "Bazar Dor provides a responsive platform for consumers in Bangladesh to track everyday essential commodity prices (rice, lentils, oil, fish, meat, vegetables, eggs, spices). It features real-time price tickers, minimum/maximum/average market comparisons, category filtering, and secure user authentication using Better Auth with MongoDB to view protected product details.",
      features: [
        "Dynamic category filtering for essential groceries and commodities.",
        "Continuously animated price ticker marquee highlighting latest market prices.",
        "Market-wise price comparison showing minimum, maximum, and average rates.",
        "Bengali numeral formatting for prices and localized user experience.",
        "Secure authentication using Better Auth with email/password and OAuth (Google, GitHub).",
        "Protected product detail routes requiring user sign-in.",
        "Responsive interface with loading skeletons and custom error handling.",
      ],
      technologies: [
        "Next.js (App Router)",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Better Auth",
        "MongoDB",
        "REST API",
        "React Toastify",
        "Vercel",
      ],
      liveUrl: "https://bazardor-self.vercel.app/",
      githubUrl: "https://github.com/nabin-90/bazar-dor",
      image: "/images/projects/bazar-dor.png",
      imageWidth: 315,
      imageHeight: 263,
      technicalPoints: [
        "Configured Better Auth with MongoDB adapter for persistent authentication in Next.js App Router.",
        "Implemented custom utility functions to parse and format English numbers into Bengali script.",
        "Integrated client and server fetching for categorized products and dynamic market comparison cards.",
      ],
      futureImprovements: [
        "Historical price change charts and price trend analytics over 30-day periods.",
        "Crowdsourced price reporting with verification mechanisms.",
      ],
    },
    {
      slug: "fitlog",
      title: "FitLog",
      summary:
        "A fitness and workout tracking web application to discover workout routines, plan daily exercises, and track completion progress.",
      description:
        "FitLog empowers users to maintain their fitness goals by exploring an extensive library of workouts fetched via REST API. Users can view detailed workout specifications (duration, calories burned, rating), add exercises to their daily schedule, bookmark workouts for later, and manage their completed sets with local storage persistence.",
      features: [
        "Browse searchable and filterable workout library fetched from REST API.",
        "Inspect workout details including duration, difficulty, target muscle groups, and calorie estimates.",
        "Add exercises to 'Today's Plan' and mark them as completed.",
        "Bookmark workouts with a 'Save for Later' collection.",
        "Sort workout lists by duration, calories burned, or user rating.",
        "Active counter badges in the navbar for planned and saved workouts.",
        "Client-side persistence using Browser Local Storage across page refreshes.",
        "Instant user feedback via React Hot Toast notifications.",
      ],
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "DaisyUI",
        "React Hot Toast",
        "Local Storage",
        "REST API",
      ],
      liveUrl: "https://my-fitlog-app.vercel.app/",
      githubUrl: "https://github.com/nabin-90/fitlog",
      technicalPoints: [
        "Prevented React hydration mismatches when reading from browser Local Storage in Next.js.",
        "Implemented multi-criteria client-side sorting and filtering for responsive workout exploration.",
        "Managed unified application state for daily plans, bookmarks, and completed workout status.",
      ],
      futureImprovements: [
        "Personalized fitness analytics dashboard tracking weekly calorie expenditure.",
        "Timer integration for guided workout intervals and rest periods.",
      ],
    },
    {
      slug: "dev-stack",
      title: "Dev Stack",
      summary:
        "An interactive technology stack builder and comparison tool designed for developers to explore and organize project technologies.",
      description:
        "Dev Stack is a specialized developer tool to explore frontend, backend, database, and dev tools side by side. It provides a visual platform to assemble an ideal development stack with duplicate selection prevention, live stack counters, and modern React 19 Suspense data handling.",
      features: [
        "Comprehensive technology catalog covering frontend, backend, database, and DevOps tools.",
        "Interactive stack builder: add technologies to a custom project stack with duplicate safeguards.",
        "Dynamic stack management with instant item counters and clear empty-state notifications.",
        "Asynchronous data handling powered by React 19 Suspense with clean fallback states.",
        "Interactive toast feedback for all add and remove actions via React Toastify.",
        "Clean, responsive layout with utility styling using Tailwind CSS v4 and DaisyUI.",
      ],
      technologies: [
        "React 19",
        "TypeScript",
        "Vite",
        "Tailwind CSS v4",
        "DaisyUI",
        "React Toastify",
        "React Icons",
      ],
      liveUrl: "https://devstack-by-nabin.vercel.app/",
      githubUrl: "https://github.com/nabin-90/dev-stack",
      image: "/images/projects/dev-stack.png",
      imageWidth: 526,
      imageHeight: 526,
      technicalPoints: [
        "Utilized React 19 Suspense for declarative loading states during JSON dataset fetching.",
        "Constructed an immutable state management pattern to prevent duplicate entries while tracking category distribution.",
        "Optimized bundle size and fast hot-module replacement using Vite with modern Tailwind CSS v4.",
      ],
      futureImprovements: [
        "Export custom stack configurations as shareable README badges or JSON templates.",
        "Community rating and compatibility checks between chosen frontend and backend tools.",
      ],
    },
  ],
};
