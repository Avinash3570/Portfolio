"use client";

import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import { ResponsiveNavbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import LogoLoop from "@/components/LogoLoop";
import { ProjectFollowingPointer } from "@/components/ProjectFollowingPointer";
import { motion } from "framer-motion";
import {
  IconCode,
  IconDatabase,
  IconBrandReact,
  IconBrandNodejs,
  IconBrandPython,
  IconBrandJavascript,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandTailwind,
  IconBrandMongodb,
  IconBrandFirebase,
  IconBrandTypescript,
  IconBrandGit,
  IconDeviceDesktop,
  IconMail,
  IconBrandLinkedin,
  IconBrandGithub,
  IconExternalLink,
  IconDownload,
  IconMapPin,
  IconPhone,
  IconSchool,
  IconCertificate,
  IconCalendar,
  IconTrophy,
  IconApi,
  IconFlask,
  IconBrandRedux,
  IconChartBar,
  IconChartLine,
  IconTerminal,
  IconBrandNextjs,
  IconDatabase as IconPostgreSQL,
  IconBrandSocketIo,
  IconBrandDocker,
  IconBrandStripe,
  IconServer,
  IconWorldWww,
  IconBolt,
  IconLetterC,
  IconBrandCpp,
  IconBrandAws,
  IconBrandAzure,
  IconBrain,
  IconBrandKotlin, // used for Keras
  IconFlame, // used for PyTorch
  IconNetworkOff, // used for RAG
  IconLanguage,
  IconRobot,
  IconTree,
  IconMathFunction,
  IconLeaf as IconBrandSpringboot, // Using IconLeaf for SpringBoot
} from "@tabler/icons-react";
import { Highlighter } from "@/components/ui/highlighter";

export default function Home() {
  // Function to get tech icon and color
  const getTechIconAndColor = (tech) => {
    const techMap = {
      React: { icon: IconBrandReact, color: "text-cyan-400" },
      "Next.js": { icon: IconBrandNextjs, color: "text-white" },
      "Node.js": { icon: IconBrandNodejs, color: "text-green-500" },
      JavaScript: { icon: IconBrandJavascript, color: "text-yellow-400" },
      TypeScript: { icon: IconBrandTypescript, color: "text-blue-500" },
      Python: { icon: IconBrandPython, color: "text-blue-400" },
      "Tailwind CSS": { icon: IconBrandTailwind, color: "text-cyan-400" },
      MongoDB: { icon: IconBrandMongodb, color: "text-green-500" },
      PostgreSQL: { icon: IconPostgreSQL, color: "text-blue-600" },
      Firebase: { icon: IconBrandFirebase, color: "text-yellow-500" },
      "Redux Toolkit": { icon: IconBrandRedux, color: "text-purple-500" },
      "Chart.js": { icon: IconChartBar, color: "text-pink-400" },
      RapidAPI: { icon: IconApi, color: "text-blue-400" },
      "Socket.io": { icon: IconBrandSocketIo, color: "text-white" },
      Prisma: { icon: IconDatabase, color: "text-gray-300" },
      Flask: { icon: IconFlask, color: "text-gray-300" },
      TensorFlow: { icon: IconBolt, color: "text-orange-500" },
      "TensorFlow.js": { icon: IconBolt, color: "text-orange-400" },
      Docker: { icon: IconBrandDocker, color: "text-blue-400" },
      Express: { icon: IconServer, color: "text-gray-300" },
      Stripe: { icon: IconBrandStripe, color: "text-indigo-500" },
      JWT: { icon: IconWorldWww, color: "text-gray-400" },
      OpenAI: { icon: IconBolt, color: "text-green-400" },
      "Framer Motion": { icon: IconBolt, color: "text-pink-500" },
      Pandas: { icon: IconChartBar, color: "text-blue-400" },
      Matplotlib: { icon: IconChartLine, color: "text-green-400" },
      argparse: { icon: IconTerminal, color: "text-gray-400" },
      Streamlit: { icon: IconBolt, color: "text-red-500" },
      LangChain: { icon: IconBolt, color: "text-green-500" },
      Ollama: { icon: IconBolt, color: "text-purple-500" },
    };

    return techMap[tech] || { icon: IconCode, color: "text-gray-400" };
  };
  // Skills data
  const skills = [
    { name: "Frontend Development", icon: IconBrandReact, level: 90 },
    { name: "Backend Development", icon: IconBrandNodejs, level: 85 },
    { name: "Database Management", icon: IconDatabase, level: 80 },
    { name: "Python Programming", icon: IconBrandPython, level: 88 },
    { name: "AI Development", icon: IconBrandJavascript, level: 92 },
    { name: "Data Science", icon: IconDeviceDesktop, level: 90 },
  ];
  // Skill logos data
  const skillLogos = [
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-700/30">
          <IconBrandReact className="text-cyan-400" size={24} />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            React
          </span>
        </div>
      ),
      alt: "React",
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-700/30">
          <IconBrandMongodb className="text-green-500" size={24} />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            MongoDB
          </span>
        </div>
      ),
      alt: "MongoDB",
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-700/30">
          <IconBrandHtml5 className="text-orange-500" size={24} />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            HTML
          </span>
        </div>
      ),
      alt: "HTML",
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-700/30">
          <IconBrandCss3 className="text-blue-500" size={24} />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            CSS
          </span>
        </div>
      ),
      alt: "CSS",
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-700/30">
          <IconBrandTailwind className="text-teal-400" size={24} />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            Tailwind CSS
          </span>
        </div>
      ),
      alt: "Tailwind CSS",
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-700/30">
          <IconBrandNodejs className="text-green-600" size={24} />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            Node.js
          </span>
        </div>
      ),
      alt: "Node.js",
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-700/30">
          <IconCode className="text-gray-400" size={24} />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            Express.js
          </span>
        </div>
      ),
      alt: "Express.js",
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-700/30">
          <IconApi className="text-orange-400" size={24} />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            Postman
          </span>
        </div>
      ),
      alt: "Postman",
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-700/30">
          <IconBrandFirebase className="text-yellow-500" size={24} />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            Firebase
          </span>
        </div>
      ),
      alt: "Firebase",
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-700/30">
          <IconBrandPython className="text-blue-400" size={24} />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            Python
          </span>
        </div>
      ),
      alt: "Python",
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-700/30">
          <IconFlask className="text-gray-300" size={24} />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            Flask
          </span>
        </div>
      ),
      alt: "Flask",
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-700/30">
          <IconBrandJavascript className="text-yellow-400" size={24} />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            JavaScript
          </span>
        </div>
      ),
      alt: "JavaScript",
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-700/30">
          <IconBrandTypescript className="text-blue-600" size={24} />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            TypeScript
          </span>
        </div>
      ),
      alt: "GitHub",
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-700/30">
          <IconBrandGithub className="text-white" size={24} />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            GitHub
          </span>
        </div>
      ),
      alt: "GitHub",
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-700/30">
          <IconBrandGit className="text-red-500" size={24} />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            Git
          </span>
        </div>
      ),
      alt: "Git",
    },
    // Programming Languages
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-700/30">
          <IconLetterC className="text-blue-700" size={24} />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            C
          </span>
        </div>
      ),
      alt: "C",
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-700/30">
          <IconBrandCpp className="text-blue-600" size={24} />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            C++
          </span>
        </div>
      ),
      alt: "C++",
    },
    
    // Data Engineering
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-700/30">
          <IconDatabase className="text-blue-500" size={24} />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            MySQL
          </span>
        </div>
      ),
      alt: "MySQL",
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-700/30">
          <IconBrandAws className="text-orange-400" size={24} />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            AWS
          </span>
        </div>
      ),
      alt: "AWS",
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-700/30">
          <IconBrandAzure className="text-blue-400" size={24} />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            Azure
          </span>
        </div>
      ),
      alt: "Azure",
    },
    // Machine Learning
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-700/30">
          <IconBrain className="text-purple-400" size={24} />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            Neural Networks
          </span>
        </div>
      ),
      alt: "Neural Networks",
    },
   
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-700/30">
          <IconBrandKotlin className="text-red-400" size={24} />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            Keras
          </span>
        </div>
      ),
      alt: "Keras",
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-700/30">
          <IconFlame className="text-orange-600" size={24} />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            PyTorch
          </span>
        </div>
      ),
      alt: "PyTorch",
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-700/30">
          <IconNetworkOff className="text-green-400" size={24} />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            RAG
          </span>
        </div>
      ),
      alt: "RAG",
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-700/30">
          <IconLanguage className="text-blue-400" size={24} />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            NLP
          </span>
        </div>
      ),
      alt: "NLP",
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-700/30">
          <IconRobot className="text-cyan-400" size={24} />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            LLM
          </span>
        </div>
      ),
      alt: "LLM",
    },
    // Software Dev
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-700/30">
          <IconTree className="text-green-500" size={24} />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            Data Structures
          </span>
        </div>
      ),
      alt: "Data Structures",
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-700/30">
          <IconMathFunction className="text-yellow-500" size={24} />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            Algorithms
          </span>
        </div>
      ),
      alt: "Algorithms",
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-700/30">
          <IconCode className="text-green-500" size={24} />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            SpringBoot
          </span>
        </div>
      ),
      alt: "SpringBoot",
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-700/30">
          <IconApi className="text-purple-400" size={24} />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            RESTful API
          </span>
        </div>
      ),
      alt: "RESTful API",
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-700/30">
          <IconBrandDocker className="text-blue-500" size={24} />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            Docker
          </span>
        </div>
      ),
      alt: "Docker",
    },
  ];
  // Projects data
  const projects = [
    {
      title: "LawConnect – Full-Stack Law Management System ⚖️",
      description:
        "• Built a comprehensive law management system that streamlines case management, document storage, and client communication. • Integrated secure user authentication and role-based access control to protect sensitive legal data. • Developed with Java Spring Boot, React, and MySQL, ensuring a robust and scalable solution for legal professionals.",
      image: "/law.png", // Updated to use the actual uploaded image filename
      tech: [
        "Java",
        "Spring Boot",
        "React",
        "Tailwind CSS",
        "MySQL",
        "Node.js",
      ],
      github: "https://github.com/Avinash3570/LawConnect",
      live: "#",
    },
    {
      title: "BikeNet Community Detection in Urban Mobility 🚲",
      description:
        "• Built Python pipelines for mobility data extraction and network analysis with 95%+ data integrity, computing centrality measures and applying community detection to identify top 5% critical transit hubs (92% accuracy). • Prepared interactive dashboards used by 50+ urban planners, enhancing decision-making efficiency by 30% through dynamic exploration of urban network structures.",
      image: "/bike.png", // Using the uploaded AI Thief Detection image
      tech: ["Python", "Jupyter Notebook", "NetworkX", "Pandas", "Matplotlib"],
      github: "https://github.com/Avinash3570/BikeNet-Community-Detection-in-Urban-Mobility",
      live: "#",
    },
    {
      title: "Data Driven Fluid Flow Analysis",
      description:
        "• Processed a 30-s, 40 fps video ( 1,300 frames, 150×400 px), applied POD via SVD to extract modal bases, and analyzed modal energy transfer under Gaussian, speckle, and Poisson noise (magnitudes 20 & 80).• Trained a CNN denoiser on 1.3k noisy/clean image pairs using MSE loss, achieving reproducible results and quantified noise impact on modal energy distributions",
      image: "/fluid.png", // Updated to use the new Weather App screenshot
      tech: ["Python", "OpenFOAM", "ParaView", "Matplotlib"],
      github: "https://github.com/Avinash3570/Fluid-Flow-Analysis",
      live: "#",
    },
  ];
  // Education data
  const education = [
    {
      degree: "B.Tech. in Mechanical Engineering",
      institution: "Indian Institute of Technology, Jodhpur",
      location: "Jodhpur, Rajasthan",
      period: "2022 - 2026",
      grade: "7.13 CGPA",
      icon: IconSchool,
      achievements: [
        "Maintaining excellent academic performance.",
        "Working on various Technical Projects.",
      ],
    },
    {
      degree: "Senior Secondary Education (12th Grade)",
      institution: "Sri Balaji Junior College",
      location: "Warangal, Telangana",
      period: "2020 - 2021",
      grade: "94.4%",
      icon: IconCertificate,
      achievements: [
        "Specialized in Physics, Chemistry, Mathematics.",
        "Achieved outstanding results in board examinations.",
      ],
    },
    {
      degree: "Secondary Education (10th Grade)",
      institution: "British English School",
      location: "Gaya Ji, Bihar",
      period: "2018 - 2019",
      grade: "94.2%",
      icon: IconCertificate,
      achievements: [
        "Specialized in Physics, Chemistry, Mathematics.",
        "Achieved outstanding results in board examinations.",
      ],
    },
  ];
  // Work Experience data
  const experience = [
    {
      title: "AI Developer Intern",
      company: "Coding Jr.",
      location: "Remote",
      period: "June 2025 - Sept 2025",
      icon: IconBolt, // Add this line
      responsibilities: [
        "Designed RAG pipeline for planto.ai integrating LLMs/NLP; raised response relevance 25%, cut query time 40% in tests.",
        "Fine-tuned NLP models for sentiment analysis on feedback; achieved 92% accuracy, boosted satisfaction 15% via surveys.",
        "Optimized RAG preprocessing for 50K+ LLM entries; reduced training time 30%, increased engagement 20%",
      ],
    },
    {
      title: "Research Intern - IIT Jodhpur",
      company: "IIT Jodhpur",
      location: "Jodhpur, Rajasthan",
      period: "May 2025 - July 2025",
      icon: IconBolt, // Add this line
      responsibilities: [
        "Developed a 2D mesh-free topology optimization framework with PINNs, reducing computation cost by 40% vs FEM.",
        "Designed a dual-network model for deformation and material density, achieving 95% volume-constraint satisfaction.",
        "Produced mesh-independent fields with 30% faster convergence and greater versatility to irregular domains.",
      ],
    },
  ];

  return (
    <>
      <ResponsiveNavbar />
      <main className="min-h-screen bg-black">
        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <section id="about" className="py-20 px-4 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,107,53,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(247,147,30,0.1),transparent_50%)]" />

          <div className="container mx-auto max-w-6xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                  Me
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full" />
            </motion.div>
            {/* About Me Content */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-4 sm:space-y-6"
              >
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">
                  Passionate AI Developer
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                    I'm Avinash Kumar, a B.Tech student in Mechanical Engineering at IIT Jodhpur.
                    <strong className="text-white font-bold">Passionate Software and AI developer</strong>,{" "} 
                    with hands-on experience in
                    <strong className="text-white font-bold"> machine learning, NLP, LLM,</strong>,{" "}
                    and building scalable automation pipelines. Skilled in applying ML to real-world problems through
                    internships and projects, including
                    <strong className="text-white font-bold"> RAG pipelines, sentiment analysis, and topology optimization.</strong>,{" "}
                    Proficient in developing full-stack applications, data analysis, and optimizing models for efficiency.
                    </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                  My expertise spans across {" "}
                  <strong className="text-white font-bold">Machine Learning, Neural Networks, Deep Learning, Natural Language Processing, Large Language Models, Trasformers, Data Structures & Algorithms. </strong>
                   I enjoy tackling complex problems with code, from denoising fluid flow data to community detection in networks.
              </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center gap-2 text-orange-400">
                    <IconMapPin size={20} />
                    <span>Jodhpur, India</span>
                  </div>
                  <div className="flex items-center gap-2 text-orange-400">
                    <IconMail size={20} />
                    <span>Available for hire</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
              >
                {[
                  { number: "25+", label: "Projects Completed" },
                  { number: "3+", label: "Years Experience" },
                  { number: "10+", label: "Happy Clients" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center border border-gray-700/30"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h4 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                      {stat.number}
                    </h4>
                    <p className="text-gray-300 mt-2 text-sm sm:text-base">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 px-4 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,107,53,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(247,147,30,0.1),transparent_50%)]" />

          <div className="container mx-auto max-w-6xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                My{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                  Education
                </span>
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                My{" "}
                <Highlighter action="underline" color="#FF9800">
                  academic journey
                </Highlighter>{" "}
                and continuous{" "}
                <Highlighter action="highlight" color="#87CEFA">
                  learning path
                </Highlighter>{" "}
                in technology
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full mt-6" />
            </motion.div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex flex-col lg:flex-row gap-6 lg:gap-8 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Education Card */}
                  <div className="flex-1">
                    <motion.div
                      className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700/30 hover:border-orange-500/30 transition-all duration-300 group"
                      whileHover={{ y: -10, scale: 1.02 }}
                    >
                      <div className="flex items-start gap-4 sm:gap-6">
                        <div className="p-3 sm:p-4 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-xl">
                          <edu.icon
                            size={28}
                            className="text-orange-400 sm:w-8 sm:h-8"
                          />
                        </div>

                        <div className="flex-1">
                          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">
                              {edu.degree}
                            </h3>
                            <div className="flex items-center gap-2 text-orange-400 mt-2 lg:mt-0">
                              <IconCalendar size={18} />
                              <span className="font-medium">{edu.period}</span>
                            </div>
                          </div>

                          <div className="space-y-3 mb-6">
                            <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                              <h4 className="text-base sm:text-lg font-semibold text-gray-200">
                                {edu.institution}
                              </h4>
                              <span className="text-sm sm:text-base text-gray-400">
                                • {edu.location}
                              </span>
                            </div>
                            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-red-600/20 px-4 py-2 rounded-full border border-orange-500/30">
                              <IconTrophy
                                size={16}
                                className="text-orange-400"
                              />
                              <span className="text-orange-300 font-medium">
                                {edu.grade}
                              </span>
                            </div>
                          </div>

                          <div>
                            <h5 className="text-gray-300 font-medium mb-3">
                              Key Achievements:
                            </h5>
                            <ul className="space-y-2">
                              {edu.achievements.map((achievement, i) => (
                                <motion.li
                                  key={i}
                                  className="flex items-center gap-3 text-gray-300"
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{
                                    duration: 0.5,
                                    delay: index * 0.2 + i * 0.1,
                                  }}
                                  viewport={{ once: true }}
                                >
                                  <div className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0" />
                                  <span>{achievement}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Timeline Connector */}
                  <div className="hidden lg:flex flex-col items-center">
                    <motion.div
                      className="w-4 h-4 border-4 border-orange-500 bg-black rounded-full"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    />
                    {index < education.length - 1 && (
                      <motion.div
                        className="w-1 h-32 bg-gradient-to-b from-orange-500 to-transparent"
                        initial={{ height: 0 }}
                        whileInView={{ height: 128 }}
                        transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                        viewport={{ once: true }}
                      />
                    )}
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section id="experience" className="py-20 px-4 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,107,53,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(247,147,30,0.1),transparent_50%)]" />

          <div className="container mx-auto max-w-6xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Work{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                  Experience
                </span>
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                My{" "}
                <Highlighter action="underline" color="#FF9800">
                  career path
                </Highlighter>{" "}
                and practical contributions in{" "}
                <Highlighter action="highlight" color="#87CEFA">
                   driving innovative
                </Highlighter>{" "}
                 tech projects.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full mt-6" />
            </motion.div>

            <div className="space-y-8">
              {experience.map((work, index) => (
                <motion.div
                  key={work.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex flex-col lg:flex-row gap-6 lg:gap-8 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Work Experience Card */}
                  <div className="flex-1">
                    <motion.div
                      className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700/30 hover:border-orange-500/30 transition-all duration-300 group"
                      whileHover={{ y: -10, scale: 1.02 }}
                    >
                      <div className="flex items-start gap-4 sm:gap-6">
                        <div className="p-3 sm:p-4 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-xl">
                          <work.icon
                            size={28}
                            className="text-orange-400 sm:w-8 sm:h-8"
                          />
                        </div>

                        <div className="flex-1">
                          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">
                              {work.title}
                            </h3>
                            <div className="flex items-center gap-2 text-orange-400 mt-2 lg:mt-0">
                              <IconCalendar size={18} />
                              <span className="font-medium">{work.period}</span>
                            </div>
                          </div>

                          <div className="space-y-3 mb-6">
                            <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                              <h4 className="text-base sm:text-lg font-semibold text-gray-200">
                                {work.company}
                              </h4>
                              <span className="text-sm sm:text-base text-gray-400">
                                • {work.location}
                              </span>
                            </div>
                          </div>

                          <div>
                            <h5 className="text-gray-300 font-medium mb-3">
                              Major Contributions:
                            </h5>
                            <ul className="space-y-2">
                              {work.responsibilities.map((responsibility, i) => (
                                <motion.li
                                  key={i}
                                  className="flex items-center gap-3 text-gray-300"
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{
                                    duration: 0.5,
                                    delay: index * 0.2 + i * 0.1,
                                  }}
                                  viewport={{ once: true }}
                                >
                                  <div className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0" />
                                  <span>{responsibility}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Timeline Connector */}
                  <div className="hidden lg:flex flex-col items-center">
                    <motion.div
                      className="w-4 h-4 border-4 border-orange-500 bg-black rounded-full"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    />
                    {index < education.length - 1 && (
                      <motion.div
                        className="w-1 h-32 bg-gradient-to-b from-orange-500 to-transparent"
                        initial={{ height: 0 }}
                        whileInView={{ height: 128 }}
                        transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                        viewport={{ once: true }}
                      />
                    )}
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 relative overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,53,0.1),transparent_50%)]" />

          <div className="container mx-auto max-w-6xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Technical{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                  Skills
                </span>
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
                Here are the{" "}
                <Highlighter action="underline" color="#FF9800">
                  technologies
                </Highlighter>{" "}
                and tools I work with to bring{" "}
                <Highlighter action="highlight" color="#87CEFA">
                  ideas to life
                </Highlighter>
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full" />
            </motion.div>

            {/* LogoLoop Skills Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-12 sm:mb-16"
            >
              {/* Mobile version */}
              <div className="block sm:hidden">
                <LogoLoop
                  logos={skillLogos}
                  speed={40}
                  direction="left"
                  logoHeight={40}
                  gap={24}
                  pauseOnHover={true}
                  fadeOut={true}
                  fadeOutColor="rgba(0, 0, 0, 1)"
                  scaleOnHover={true}
                  ariaLabel="Technical skills"
                  className="py-4"
                />
              </div>
              {/* Desktop version */}
              <div className="hidden sm:block">
                <LogoLoop
                  logos={skillLogos}
                  speed={60}
                  direction="left"
                  logoHeight={60}
                  gap={48}
                  pauseOnHover={true}
                  fadeOut={true}
                  fadeOutColor="rgba(0, 0, 0, 1)"
                  scaleOnHover={true}
                  ariaLabel="Technical skills"
                  className="py-8"
                />
              </div>
            </motion.div>

            {/* Reverse Direction Skills Loop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {/* Mobile version */}
              <div className="block sm:hidden">
                <LogoLoop
                  logos={skillLogos.slice().reverse()}
                  speed={30}
                  direction="right"
                  logoHeight={35}
                  gap={20}
                  pauseOnHover={true}
                  fadeOut={true}
                  fadeOutColor="rgba(0, 0, 0, 1)"
                  scaleOnHover={true}
                  ariaLabel="Technical skills reverse"
                  className="py-3 opacity-75"
                />
              </div>
              {/* Desktop version */}
              <div className="hidden sm:block">
                <LogoLoop
                  logos={skillLogos.slice().reverse()}
                  speed={45}
                  direction="right"
                  logoHeight={50}
                  gap={40}
                  pauseOnHover={true}
                  fadeOut={true}
                  fadeOutColor="rgba(0, 0, 0, 1)"
                  scaleOnHover={true }
                  ariaLabel="Technical skills reverse"
                  className="py-6 opacity-75"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />

          <div className="container mx-auto max-w-7xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Interactive{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                  Project Showcase
                </span>
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-4">
                Explore my{" "}
                <Highlighter action="underline" color="#FF9800">
                  portfolio projects
                </Highlighter>{" "}
                with interactive{" "}
                <Highlighter action="highlight" color="#87CEFA">
                  following pointer effects
                </Highlighter>
              </p>
              <p className="text-gray-400 text-sm">
                Hover over any card to experience the magic ✨
              </p>
            </motion.div>

            {/* Following Pointer Projects */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <ProjectFollowingPointer
                projects={projects}
                getTechIconAndColor={getTechIconAndColor}
              />
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

          <div className="container mx-auto max-w-4xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Let&apos;s{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                  Connect
                </span>
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Ready to bring your{" "}
                <Highlighter action="underline" color="#FF9800">
                  ideas to life
                </Highlighter>
                ? Let&apos;s discuss your{" "}
                <Highlighter action="highlight" color="#87CEFA">
                  next project
                </Highlighter>
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6 sm:space-y-8"
              >
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6">
                    Get in Touch
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 sm:gap-4 text-gray-300">
                      <div className="p-2 sm:p-3 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-lg">
                        <IconMail
                          size={18}
                          className="text-orange-400 sm:w-5 sm:h-5"
                        />
                      </div>
                      <div>
                        <p className="font-medium text-sm sm:text-base">
                          Email
                        </p>
                        <p className="text-orange-400 text-sm sm:text-base break-all">
                          Kravi3570iitj@gmail.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-gray-300">
                      <div className="p-3 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-lg">
                        <IconPhone size={20} className="text-orange-400" />
                      </div>
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-orange-400">+91 9971206834</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-gray-300">
                      <div className="p-3 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-lg">
                        <IconMapPin size={20} className="text-orange-400" />
                      </div>
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-orange-400">
                          Jodhpur, India
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href="https://www.linkedin.com/in/avinash-kumar-66175a295/"
                    target="_blank"
                    className="p-3 bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-lg border border-gray-600/30 hover:border-orange-500/50 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    <IconBrandLinkedin size={24} className="text-orange-400" />
                  </motion.a>
                  <motion.a
                    href="https://github.com/Avinash3570"
                    target="_blank"
                    className="p-3 bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-lg border border-gray-600/30 hover:border-orange-500/50 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    <IconBrandGithub size={24} className="text-orange-400" />
                  </motion.a>
                  <motion.a
                    href="https://drive.google.com/file/d/1Muu2uC_bEadoX9NYFryi0ncls2mhg9d8/view?usp=drive_link"
                    target="_blank"
                    className="p-3 bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-lg border border-gray-600/30 hover:border-orange-500/50 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    <IconDownload size={24} className="text-orange-400" />
                  </motion.a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/30"
              >
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-gray-800">
          <div className="container mx-auto max-w-6xl text-center">
            <p className="text-gray-400">
              © 2025 Avinash Kumar. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
