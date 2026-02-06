import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiDownload, FiGithub, FiAward, FiExternalLink, FiX, FiLayers, FiFolder, FiMail, FiMapPin, FiLinkedin, FiPhone } from "react-icons/fi";
import { FaJava, FaPython, FaReact, FaNodeJs, FaDocker, FaAws, FaGitAlt, FaCss3Alt, FaGraduationCap } from "react-icons/fa";
import { SiCplusplus, SiSpringboot, SiTailwindcss, SiFirebase, SiMongodb, SiMysql, SiPytorch, SiHuggingface } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { IoLogoHtml5 } from "react-icons/io";

// --- ASSETS ---
import profileImg from './assets/image_0.png';
import resumePdf from './assets/Elangovan_Resume.pdf';

// --- PROJECT SCREENSHOTS ---
import melo1 from './assets/Melo/1.png';
import melo2 from './assets/Melo/1.jpg';
import melo3 from './assets/Melo/2.jpg';
import melo4 from './assets/Melo/3.jpg';
import melo5 from './assets/Melo/4.jpg';
import melo6 from './assets/Melo/5.jpg';

import agri0 from './assets/AgriGPT/0.png';
import agri1 from './assets/AgriGPT/1.jpg';
import agri2 from './assets/AgriGPT/2.jpg';
import agri3 from './assets/AgriGPT/3.jpg';
import agri4 from './assets/AgriGPT/4.jpg';
import agri5 from './assets/AgriGPT/5.jpg';
import agri6 from './assets/AgriGPT/6.jpg';
import agri7 from './assets/AgriGPT/7.jpg';
import agri8 from './assets/AgriGPT/8.jpg';
import agri9 from './assets/AgriGPT/9.jpg';
import agri10 from './assets/AgriGPT/10.jpg';

import comuno0 from './assets/Comuno/0.png';
import comuno1 from './assets/Comuno/1.jpg';
import comuno2 from './assets/Comuno/2.jpg';
import comuno3 from './assets/Comuno/3.jpg';
import comuno4 from './assets/Comuno/4.jpg';
import comuno5 from './assets/Comuno/5.jpg';
import comuno6 from './assets/Comuno/6.jpg';
import comuno7 from './assets/Comuno/7.jpg';
import comuno8 from './assets/Comuno/8.jpg';
import comuno9 from './assets/Comuno/9.jpg';
import comuno10 from './assets/Comuno/10.jpg';
import comuno11 from './assets/Comuno/11.jpg';

import plate0 from './assets/PlateStream/0.png';
import plate1 from './assets/PlateStream/1.png';
import plate2 from './assets/PlateStream/2.png';
import plate3 from './assets/PlateStream/3.png';
import plate4 from './assets/PlateStream/4.png';
import plate5 from './assets/PlateStream/5.png';
import plate6 from './assets/PlateStream/6.png';
import plate7 from './assets/PlateStream/7.png';
import plate8 from './assets/PlateStream/8.png';
import plate9 from './assets/PlateStream/9.png';
import plate10 from './assets/PlateStream/10.png';
import plate11 from './assets/PlateStream/11.png';
import plate12 from './assets/PlateStream/12.png';
import plate13 from './assets/PlateStream/13.png';
import plate14 from './assets/PlateStream/14.png';
import plate15 from './assets/PlateStream/15.png';
import plate16 from './assets/PlateStream/16.png';
import plate17 from './assets/PlateStream/17.png';
import plate18 from './assets/PlateStream/18.png';
import plate19 from './assets/PlateStream/19.png';
import plate20 from './assets/PlateStream/20.png';
import plate21 from './assets/PlateStream/21.png';
import plate22 from './assets/PlateStream/22.png';
import plate23 from './assets/PlateStream/23.png';
import plate24 from './assets/PlateStream/24.png';
import plate25 from './assets/PlateStream/25.png';
import plate26 from './assets/PlateStream/26.png';
import plate27 from './assets/PlateStream/27.png';
import plate28 from './assets/PlateStream/28.png';
import plate29 from './assets/PlateStream/29.png';
import plate30 from './assets/PlateStream/30.png';
import plate31 from './assets/PlateStream/31.png';
import plate32 from './assets/PlateStream/32.png';
import plate33 from './assets/PlateStream/33.png';

import feedback1 from './assets/College Feedback System/1.png';
import feedback2 from './assets/College Feedback System/2.png';
import feedback3 from './assets/College Feedback System/3.png';
import feedback4 from './assets/College Feedback System/4.png';
import feedback5 from './assets/College Feedback System/5.png';
import feedback6 from './assets/College Feedback System/6.png';
import feedback7 from './assets/College Feedback System/7.png';
import feedback8 from './assets/College Feedback System/8.png';
import feedback9 from './assets/College Feedback System/9.png';
import feedback10 from './assets/College Feedback System/10.png';
import feedback11 from './assets/College Feedback System/11.png';
import feedback12 from './assets/College Feedback System/12.png';
import feedback13 from './assets/College Feedback System/13.png';
import feedback14 from './assets/College Feedback System/14.png';

import phi1 from './assets/Phi 3 mini/Amadeuslogo.png';

// --- DATA: TECH STACK ---
const TECH_STACK = [
  { name: "Java", icon: <FaJava /> },
  { name: "Python", icon: <FaPython /> },
  { name: "C++", icon: <SiCplusplus /> },
  { name: "React", icon: <FaReact /> },
  { name: "Spring Boot", icon: <SiSpringboot /> },
  { name: "HTML", icon: <IoLogoHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "Azure", icon: <VscAzure /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "PyTorch", icon: <SiPytorch /> },
  { name: "Hugging Face", icon: <SiHuggingface /> },
];

// --- DATA: EDUCATION ---
const EDUCATION = [
  {
    degree: "B.Tech - AI & Data Science",
    school: "Sri Krishna College of Technology",
    year: "2023 - 2027",
    desc: "Specializing in Intelligent Systems and Algorithms."
  },
  {
    degree: "HSC (State Board)",
    school: "Government Model School, Coimbatore",
    year: "2023",
    desc: "Focus on Mathematics, Physics, Chemistry and Biology."
  }
];

// --- DATA: CERTIFICATIONS ---
const CERTIFICATIONS = [
  { name: "Azure Fundamentals (AZ-900)", issuer: "Microsoft" },
  { name: "Generative AI", issuer: "NPTEL" },
  { name: "React Web Developer", issuer: "Infosys Springboard" },
  { name: "Data Mining", issuer: "NPTEL" }
];

// --- DATA: PROJECTS ---
const PROJECTS = [
  {
    id: 1,
    title: "Melo Music App",
    category: "Mobile App",
    images: [melo1, melo2, melo3, melo4, melo5, melo6],
    tech: ["React Native", "Express.js", "Azure", "Puppeteer", "Firebase"],
    desc: "A scalable music streaming application featuring automated data scraping and cloud deployment for seamless playback.",
    github: "https://github.com/Elangovan2006M/Melo"
  },
  {
    id: 2,
    title: "Phi-3 Mini Finetune",
    category: "Generative AI",
    images: [phi1],
    tech: ["Python", "Unsloth", "Colab"],
    desc: "Fine-tuned Microsoft's Phi-3 Mini model to create a high-fidelity anime persona with optimized inference performance.",
    github: "https://github.com/Elangovan2006M/Steins-Gate-Amadeus"
  },
  {
    id: 3,
    title: "AgriGPT",
    category: "AI & Web",
    images: [agri0, agri1, agri2, agri3, agri4, agri5, agri6, agri7, agri8, agri9, agri10],
    tech: ["React", "Python", "Firebase", "PWA"],
    desc: "An AI-powered consultant PWA for farmers offering real-time crop diagnosis and advisory services.",
    github: "https://github.com/Elangovan2006M/Agri-Gpt"
  },
  {
    id: 4,
    title: "Comuno",
    category: "Social Media",
    images: [comuno0, comuno1, comuno2, comuno3, comuno4, comuno5, comuno6, comuno7, comuno8, comuno9, comuno10, comuno11],
    tech: ["React", "Firebase", "Cloudinary"],
    desc: "A dedicated student community platform with real-time messaging, dynamic feeds, and PWA capabilities.",
    github: "https://github.com/Elangovan2006M/Comuno"
  },
  {
    id: 5,
    title: "PlateStream",
    category: "Full Stack",
    images: [plate0, plate1, plate2, plate3, plate4, plate5, plate6, plate7, plate8, plate9, plate10, plate11, plate12, plate13, plate14, plate15, plate16, plate17, plate18, plate19, plate20, plate21, plate22, plate23, plate24, plate25, plate26, plate27, plate28, plate29, plate30, plate31, plate32, plate33],
    tech: ["Spring Boot", "React", "MySQL", "REST APIs"],
    desc: "A comprehensive culinary platform for recipe management, user engagement, and content administration.",
    github: "https://github.com/Elangovan2006M/Food-Recipes"
  },
  {
    id: 6,
    title: "College Feedback System",
    category: "Web App",
    images: [feedback1, feedback2, feedback3, feedback4, feedback5, feedback6, feedback7, feedback8, feedback9, feedback10, feedback11, feedback12, feedback13, feedback14],
    tech: ["React", "Spring Boot", "MySQL", "REST APIs"],
    desc: "An automated feedback collection system streamlining the evaluation process for students and faculty.",
    github: "https://github.com/Elangovan2006M/College_Feedback_Portal"
  }
];

// --- REUSABLE WATERMARK COMPONENT ---
const Watermark = ({ className }) => (
  <div className={`absolute pointer-events-none select-none z-0 flex items-center justify-center opacity-30 ${className}`}>
    <h1 className="text-[12vw] font-black text-white/[0.03] tracking-tighter uppercase whitespace-nowrap leading-none">
      Elangovan M
    </h1>
  </div>
);

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen w-full bg-zinc-950 relative overflow-x-hidden flex flex-col font-sans selection:bg-purple-500/30">
      
      {/* ==================== NAVIGATION BAR ==================== */}
      <nav className="fixed top-0 left-0 w-full z-50 px-3 py-3 md:px-12 flex justify-between items-center bg-zinc-950/50 backdrop-blur-md border-b border-white/5">
        <a href="https://github.com/Elangovan2006M" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 group">
          <div className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all">
            <FiGithub className="text-xl" />
          </div>
          <span className="font-mono text-sm hidden md:block opacity-70 group-hover:opacity-100">@Elangovan2006M</span>
        </a>
        <ul className="flex items-center gap-6 md:gap-8">
          {['Home', 'Education', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="relative text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300 group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-red-500 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* ==================== HERO SECTION ==================== */}
      <section id="home" className="min-h-screen flex flex-col justify-center relative pt-20 overflow-hidden">
        {/* Watermark: Centered */}
        <Watermark className="inset-0" />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-5 gap-8 md:gap-12 items-center">
          <div className="md:col-span-3 text-center md:text-left order-2 md:order-1">
            <p className="text-gray-400 text-sm md:text-base font-mono tracking-widest mb-4 uppercase">Full Stack • Generative AI • Data Science</p>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight text-white">
              Hello, I'm <br className="md:hidden"/>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-orange-400 via-pink-500 to-purple-600 pb-2 inline-block">Elangovan</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-xl mx-auto md:mx-0 mb-10">
              I combine <span className="text-white font-semibold">Full Stack Development</span> with <span className="text-white font-semibold">AI & Data Science</span> to build smart, scalable software.
            </p>
            <div className="flex justify-center md:justify-start">
              <a href={resumePdf} download="Elangovan_Resume.pdf" className="group relative inline-flex items-center justify-center px-8 py-3.5 font-bold text-white rounded-full bg-zinc-900 border-2 border-white/10 overflow-hidden transition-all hover:scale-105 active:scale-95">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500"></span>
                <span className="relative z-10 flex items-center gap-2">Download Resume <FiDownload className="text-lg"/></span>
              </a>
            </div>
          </div>
          <div className="md:col-span-2 flex justify-center md:justify-end order-1 md:order-2 mb-8 md:mb-0 md:mt-12">
            <div className="relative w-64 h-80 md:w-full md:max-w-md md:h-[450px] rounded-[2rem] p-1 bg-gradient-to-br from-red-500/30 via-purple-500/30 to-blue-500/30">
              <img src={profileImg} alt="Elangovan M" className="w-full h-full object-cover object-top rounded-[1.8rem] border-2 border-white/5 relative z-10 shadow-2xl shadow-purple-500/10" />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TECH STACK ==================== */}
      <section id="tech-stack" className="py-4 bg-zinc-950 relative overflow-hidden">
        {/* Watermark: Angled Left */}
        <Watermark className="-left-20 top-0 -rotate-6 opacity-20" />

        <div className="relative z-10 flex w-full overflow-hidden mask-gradient"> 
           <motion.div className="flex gap-12 md:gap-20 px-12" animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, ease: "linear", duration: 25 }} whileHover={{ animationPlayState: "paused" }} style={{ width: "fit-content" }}>
             {[...TECH_STACK, ...TECH_STACK].map((tech, index) => (
               <div key={index} className="group flex flex-col items-center gap-3 cursor-pointer min-w-[80px]">
                 <div className="text-4xl md:text-5xl text-gray-400 transition-all duration-300 group-hover:text-white group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">{tech.icon}</div>
                 <span className="text-sm font-medium text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{tech.name}</span>
               </div>
             ))}
           </motion.div>
        </div>
      </section>

      {/* ==================== EDUCATION & CERTIFICATIONS ==================== */}
      <section id="education" className="py-20 bg-zinc-950 relative overflow-hidden">
        {/* Watermark: Angled Right */}
        <Watermark className="-right-40 bottom-0 rotate-12 opacity-20" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3"><FaGraduationCap className="text-purple-500" /> Education</h2>
              <div className="relative border-l-2 border-white/10 ml-3 space-y-12">
                {EDUCATION.map((edu, index) => (
                  <div key={index} className="relative pl-8 group">
                    <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-zinc-900 border-2 border-purple-500 group-hover:bg-purple-500 group-hover:scale-125 transition-all duration-300 shadow-[0_0_10px_rgba(168,85,247,0.4)]"></div>
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-mono text-purple-400">{edu.year}</span>
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">{edu.degree}</h3>
                      <p className="text-gray-400 text-sm">{edu.school}</p>
                      <p className="text-gray-500 text-sm mt-3 leading-relaxed">{edu.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* MULTICOLOR CERTIFICATIONS */}
            <div>
               <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3"><FiAward className="text-blue-500" /> Certifications</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CERTIFICATIONS.map((cert, index) => (
                  <div key={index} className="p-5 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-white/10 hover:bg-zinc-900 transition-all duration-300 group">
                    {/* Updated to Multicolor Gradient */}
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 via-pink-500 to-purple-600 flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform">
                      <FiAward className="text-lg" />
                    </div>
                    <h4 className="text-white font-bold mb-1 group-hover:text-purple-300 transition-colors">{cert.name}</h4>
                    <p className="text-sm text-gray-500">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PROJECTS SECTION ==================== */}
      <section id="projects" className="py-20 bg-zinc-950 relative border-white/5 overflow-hidden">
        {/* Watermark: Vertical Bottom Left */}
        <Watermark className="-left-20 bottom-10 rotate-90 opacity-20 text-[8vw]" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
          
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-gray-400 max-w-2xl">A collection of my work in Full Stack Development and Generative AI.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project) => (
              <div 
                key={project.id}
                className="group p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-white/20 hover:bg-zinc-900 transition-all duration-300 cursor-pointer flex flex-col h-full"
                onClick={() => setSelectedProject(project)}
              >
                {/* ICON & CATEGORY */}
                <div className="flex justify-between items-start mb-6">
                  {/* Updated Icon Background to Gradient */}
                  <div className="p-3 rounded-full bg-gradient-to-br from-red-500/20 via-pink-500/20 to-purple-600/20 text-white group-hover:bg-gradient-to-br group-hover:from-red-500 group-hover:via-pink-500 group-hover:to-purple-600 transition-all duration-300 border border-white/5">
                    <FiFolder className="text-xl" />
                  </div>
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-wider border border-white/10 px-2 py-1 rounded-md">{project.category}</span>
                </div>

                {/* TITLE & DESC */}
                {/* Updated Hover Color to Gradient Text */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:via-pink-500 group-hover:to-purple-500 transition-all">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{project.desc}</p>

                {/* TECH PILLS */}
                <div className="flex flex-wrap gap-2 mt-auto">
                   {project.tech.slice(0, 3).map((t, i) => (
                      <span key={i} className="text-xs text-gray-500 font-mono">#{t}</span>
                   ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==================== PROJECT MODAL ==================== */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-zinc-900 border border-white/10 rounded-3xl w-full max-w-6xl max-h-[85vh] overflow-hidden flex flex-col md:flex-row shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* CLOSE BUTTON */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-white hover:text-black transition-all z-20"
              >
                <FiX className="text-xl" />
              </button>

              {/* LEFT SIDE: SCROLLABLE IMAGES */}
              <div className="w-full md:w-[60%] h-[300px] md:h-auto bg-zinc-950 overflow-y-auto custom-scrollbar border-b md:border-b-0 md:border-r border-white/5">
                {selectedProject.images && selectedProject.images.length > 0 ? (
                  <div className="flex flex-col gap-4 p-4 md:p-6">
                    {selectedProject.images.map((img, idx) => (
                      <img key={idx} src={img} alt={`Screenshot ${idx + 1}`} className="w-full rounded-xl border border-white/5 shadow-lg" />
                    ))}
                  </div>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-10 text-gray-600">
                    <FiLayers className="text-6xl mb-4 opacity-20" />
                    <p>No screenshots available.</p>
                  </div>
                )}
              </div>

              {/* RIGHT SIDE: DETAILS */}
              <div className="w-full md:w-[40%] p-8 md:p-10 flex flex-col bg-zinc-900 h-full overflow-y-auto">
                <div>
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-500 font-mono text-sm tracking-widest uppercase mb-2 block">{selectedProject.category}</span>
                   <h2 className="text-3xl font-bold text-white mb-6">{selectedProject.title}</h2>
                   <p className="text-gray-300 leading-relaxed mb-8 text-sm md:text-base">{selectedProject.desc}</p>
                </div>
                <div className="mb-8">
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs text-gray-300 font-mono">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="mt-auto pt-6 border-t border-white/5">
                  <a href={selectedProject.github} target="_blank" rel="noreferrer" className="flex w-full items-center justify-center gap-3 px-6 py-4 rounded-xl bg-white text-black font-bold hover:bg-gray-200 transition-all transform hover:scale-[1.02]">
                    <FiGithub className="text-xl" /> <span>View Source Code</span>
                  </a>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ==================== CONTACT FOOTER ==================== */}
      <section id="contact" className="py-20 bg-zinc-950 border-t border-white/5 relative overflow-hidden">
        {/* Watermark: Top Right */}
        <Watermark className="top-10 right-0 -rotate-12 opacity-20" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Let's Build Something <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-600">Extraordinary</span></h2>
          <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
            <a href="mailto:elangovan.ai.m@gmail.com" className="flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-bold hover:scale-105 transition-transform">
              <FiMail className="text-xl" /> elangovan.ai.m@gmail.com
            </a>
            <div className="flex gap-4">
              <a href="https://linkedin.com/in/elangovanai" target="_blank" rel="noreferrer" className="p-4 rounded-full bg-zinc-900 border border-white/10 text-white hover:bg-blue-600 hover:border-blue-600 transition-all">
                <FiLinkedin className="text-xl" />
              </a>
              <a href="https://github.com/Elangovan2006M" target="_blank" rel="noreferrer" className="p-4 rounded-full bg-zinc-900 border border-white/10 text-white hover:bg-gray-700 hover:border-gray-700 transition-all">
                <FiGithub className="text-xl" />
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-white/5 text-gray-500 text-sm">
             <div className="flex items-center gap-2 mb-4 md:mb-0">
               <FiMapPin /> Coimbatore, Tamil Nadu
             </div>
             <p>© 2026 Elangovan M. All rights reserved.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
