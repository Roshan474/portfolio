import React, { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, Github, ExternalLink, Menu, X, Award, Briefcase, GraduationCap, User, Code, FolderOpen } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Animated background component
const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Floating particles */}
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-20 animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}
        />
      ))}
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-600/10 to-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
    </div>
  );
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [isVisible, setIsVisible] = useState({});

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'education', 'skills', 'experience', 'projects', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const skills = {
    languages: ['Java', 'C', 'JavaScript', 'HTML/CSS'],
    frameworks: ['React.js', 'MongoDB', 'MySQL'],
    tools: ['VS Code', 'Figma', 'UI Path', 'GitHub', 'Canva'],
    os: ['Windows', 'Linux'],
    soft: ['Teamwork', 'Leadership', 'Communication', 'Problem-Solving', 'Adaptability']
  };

  const projects = [
    {
      title: 'Constructive Hives (MERN Stack)',
      description: 'Developed a web app to solve real-world construction challenges, featuring dynamic material cost estimation and engineer project history browsing, Offered solutions for construction pricing and engineer project viewing features.',
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      category: 'Full Stack'
    },
    {
      title: 'Weather Forecasting Web-App',
      description: 'Developed a responsive web application that fetches real-time weather data using the OpenWeather API. Displays temperature, humidity, wind speed, and weather conditions based on user location or search. Implemented interactive UI with dynamic background changes based on the weather.',
      tech: ['HTML', 'CSS', 'JavaScript', 'OpenWeather API'],
      category: 'Frontend'
    },
    {
      title: 'Apartment Management System',
      description: 'Built a full-stack web dashboard for admins to manage tenant and owner records efficiently.Integrated a complaint tracking module for logging and resolving apartment-related issues.Enabled real-time updates and database connectivity using MySQL for smooth management',
      tech: [  'JavaScript','PHP', 'MySQL'],
      category: 'Full Stack'
    },
    {
      title: 'Makeover Website',
      description: 'Created a responsive React + TypeScript site for Reborn Beauty Lounge in Mysuru. Features include Homes, Gallery,Service , Training, About and Contact. Utilized modern web technologies for a sleek user experience.',
      tech: ['React.js', 'TypeScript', 'Responsive Design'],
      link: 'https://sumas-makeover.netlify.app/',
      category: 'Frontend'
    }
  ];

 const achievements = [
  
  {
    text: '🚀 Attended SYMBIOT-2024 Hackathon at Vidyavardhaka College of Engineering, Mysuru.💡 Gained hands-on experience, learned new technologies, and improved team collaboration.',
    images: ['/hack1.png', '/hack2.png'], // Replace with actual image paths
  },
  {
    text: '🌐 Contributed to the Wikimedia Foundation, gaining valuable tech skills and connecting with amazing people.',
    images: ['/wiki.png'], // Replace with actual image paths
  },
  {
    text: 'IEEE Conference – Published paper: "Structured Intelligence: Merging Neural and Symbolic AI"',
    images: ['/ieee.png'], // Replace with actual image paths
  },
  {
    text: '🏆 Winners of Technova 2023, organized by the Algoriz Club, CSE Dept., AIET, Moodbidri.Designed a standout UI/UX prototype using Figma, showcasing teamwork and creativity.',
    images: ['/tech.png', '/tech2.png'], // Replace with actual image paths
  },
];


  const navItems = [
    { id: 'about', label: 'About', icon: User },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'achievements', label: 'Achievements', icon: Award },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <AnimatedBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-sm border-b border-gray-800 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-white animate-pulse">Roshan S</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    activeSection === id
                      ? 'text-blue-400 bg-blue-900/30 shadow-lg shadow-blue-500/20'
                      : 'text-gray-300 hover:text-blue-400 hover:bg-gray-800/50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{label}</span>
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-300 hover:text-blue-400 hover:bg-gray-800/50 transition-all duration-300"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 border-t border-gray-800 animate-slideDown">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-3 w-full px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:scale-105 ${
                    activeSection === id
                      ? 'text-blue-400 bg-blue-900/30'
                      : 'text-gray-300 hover:text-blue-400 hover:bg-gray-800/50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

     {/* Hero Section */}
<section id="about" className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative z-10">
  <div className="max-w-7xl mx-auto">
    <div className="text-center animate-fadeInUp">
      <div className="mb-8">
        {/* Animated Profile Image */}
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto mb-6">
          {/* Outer Animated Gradient Ring */}
          <div className="absolute inset-0 rounded-full p-[3px] bg-[conic-gradient(at_top_right,_#3b82f6,_#8b5cf6,_#ec4899,_#3b82f6)] animate-spin-slow before:absolute before:inset-0 before:rounded-full before:bg-black before:blur-lg before:opacity-70"></div>

          {/* Inner Pulse Layer */}
          <div className="absolute inset-0 rounded-full animate-ping bg-[conic-gradient(at_top_left,_#3b82f6,_#8b5cf6,_#ec4899,_#3b82f6)] opacity-30"></div>

          {/* Profile Image */}
          <div className="relative z-10 w-full h-full rounded-full bg-black p-[2px]">
            <img
              src="/roshan.jpg"
              alt="Roshan S"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 animate-slideInLeft">
          Roshan S
        </h1>

        {/* Bio */}
        <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-slideInRight">
          Computer Science student with hands-on experience in Front-end development and open-source contribution, 
          seeking opportunities to apply technical and problem-solving skills in a dynamic software development role.
        </p>
      </div>

      {/* Contact Links */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <a href="tel:+916363474085" className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-300 hover:text-blue-400 hover:scale-105 border border-gray-700 hover:border-blue-500">
          <Phone className="w-5 h-5" />
          <span>+91 6363474085</span>
        </a>
        <a href="mailto:roshankundar007@gmail.com" className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-300 hover:text-blue-400 hover:scale-105 border border-gray-700 hover:border-blue-500">
          <Mail className="w-5 h-5" />
          <span>roshankundar007@gmail.com</span>
        </a>
        <a href="https://www.linkedin.com/in/roshan-s-501876266/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-300 hover:scale-105 animate-pulse">
          <Linkedin className="w-5 h-5" />
          <span>LinkedIn</span>
        </a>
        <a href="https://github.com/Roshan474" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-gray-800 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-700 transition-all duration-300 hover:scale-105 border border-gray-600 hover:border-gray-500">
          <Github className="w-5 h-5" />
          <span>GitHub</span>
        </a>
      </div>
    <div className="flex flex-col items-center mt-6">
  <a
    href="/roshan_resume.pdf"
    download="Roshan_S_Resume.pdf"
    className="px-6 py-3 flex items-center justify-center rounded-full border-2 border-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white relative shadow-xl hover:scale-105 transition-all duration-500 group"
    style={{
      backgroundClip: 'padding-box',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
    }}
  >
    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-20 animate-pulse blur-md"></div>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 mr-2 relative z-10">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-8m0 8l-4-4m4 4l4-4M4 20h16" />
    </svg>
    <span className="text-base font-semibold relative z-10">Download Resume</span>

    {/* Shine effect */}
    <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition duration-1000 animate-tilt-shine"></span>
  </a>
</div>






    </div>
  </div>
</section>


      {/* Education Section */}
      <section id="education" className={`py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50 backdrop-blur-sm relative z-10 transition-all duration-1000 ${isVisible.education ? 'animate-fadeInUp' : 'opacity-0 translate-y-10'}`}>
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 animate-slideInLeft">Education</h2>
      <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
    </div>

    <div className="max-w-4xl mx-auto space-y-8">
      {/* Engineering */}
      <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 p-8 rounded-2xl shadow-2xl border border-gray-600 backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-blue-500/20">
        <div className="flex items-start space-x-4">
          <div className="bg-blue-600 p-3 rounded-full">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-2">Bachelor of Engineering in Computer Science</h3>
            <p className="text-lg text-blue-600 mb-2">Visvesvaraya Technological University</p>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <span className="text-gray-300 mb-2 sm:mb-0">2022 – 2026</span>
              <div className="flex items-center space-x-2">
                {/* <span className="text-2xl font-bold text-green-600">8.7</span>
                <span className="text-gray-300">/10 CGPA</span> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PUC */}
      <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 p-8 rounded-2xl shadow-2xl border border-gray-600 backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-blue-500/20">
        <div className="flex items-start space-x-4">
          <div className="bg-blue-600 p-3 rounded-full">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-2">Pre-University Education (Science)</h3>
            <p className="text-lg text-blue-600 mb-2">NMKRV PU College</p>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <span className="text-gray-300">Completed in 2022</span>
            </div>
          </div>
        </div>
      </div>

      {/* 10th */}
      <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 p-8 rounded-2xl shadow-2xl border border-gray-600 backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-blue-500/20">
        <div className="flex items-start space-x-4">
          <div className="bg-blue-600 p-3 rounded-full">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-2">Secondary Education</h3>
            <p className="text-lg text-blue-600 mb-2">Vijaya Education Institute Trust</p>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <span className="text-gray-300">Completed in 2020</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


     {/* Skills Section */}
<section id="skills" className={`py-20 px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-1000 ${isVisible.skills ? 'animate-fadeInUp' : 'opacity-0 translate-y-10'}`}>
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 animate-slideInRight">Technical Skills</h2>
      <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
     {/* Languages */}
<div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-gray-700 hover:scale-105 transition-all duration-300 hover:shadow-blue-500/20 animate-slideInLeft">
  <h3 className="text-xl font-bold text-white mb-6 flex items-center justify-center">
    <Code className="w-6 h-6 mr-2 text-blue-600 animate-bounce" />
    Languages
  </h3>

  <div className="flex flex-col items-center space-y-6">
    {/* Highlighted Java and C */}
    <div className="flex space-x-6">
      <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-6 py-3 rounded-full text-xl font-bold shadow-lg animate-pulse transition-transform duration-300 transform hover:scale-110">
        Java
      </span>
      <span className="bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 text-white px-6 py-3 rounded-full text-xl font-bold shadow-lg animate-pulse transition-transform duration-300 transform hover:scale-110">
        C
      </span>
    </div>

    {/* Any other remaining languages, if needed in future */}
    {/* <div className="flex flex-wrap gap-2 justify-center">
      {skills.languages
        .filter(skill => skill !== "JavaScript" && skill !== "HTML/CSS" && skill !== "Java" && skill !== "C")
        .map((skill) => (
          <span key={skill} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
            {skill}
          </span>
      ))}
    </div> */}
  </div>
</div>



  {/* Frameworks & Databases */}
<div className="bg-gray-800/50 backdrop-blur-sm p-10 rounded-2xl shadow-2xl border border-gray-700 hover:scale-105 transition-all duration-500 hover:shadow-green-500/30 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
  <h3 className="text-2xl font-extrabold text-center text-green-400 mb-8 animate-bounce">
    Frameworks & Databases
  </h3>
  <div className="flex justify-center flex-wrap gap-4">
    {skills.frameworks.map((skill) => {
      const isAnimatedSkill = ["React", "React.js", "MongoDB", "MySQL"].includes(skill);
      return (
        <span
          key={skill}
          className={`${
            isAnimatedSkill
              ? "bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white animate-gradient-x"
              : "bg-green-100 text-green-800"
          } px-6 py-3 rounded-full text-base font-semibold shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-300`}
        >
          {skill}
        </span>
      );
    })}
  </div>
</div>



{/* Tools */}
<div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-gray-700 hover:scale-105 transition-all duration-300 hover:shadow-purple-500/20 animate-slideInRight" style={{ animationDelay: '0.4s' }}>
  <h3 className="text-2xl font-extrabold text-center text-purple-400 mb-6 animate-pulse">
    Tools
  </h3>
  <div className="flex justify-center flex-wrap gap-4">
    {skills.tools
      .filter(skill => skill !== "Canva") // ❌ Removed Canva
      .map((skill) => {
        const animatedTools = [
          "VS Code",
          "Postman",
          "Jupyter",
          "Android Studio",
          "Eclipse",
          "Figma",
          "UI Path",
          "GitHub"
        ];
        return (
          <span
            key={skill}
            className={`${
              animatedTools.includes(skill)
                ? "bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white animate-gradient-x"
                : "bg-purple-100 text-purple-800"
            } px-6 py-3 rounded-full text-base font-semibold shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-300`}
          >
            {skill}
          </span>
        );
      })}
  </div>
</div>

      {/* OS */}
      {/* <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-gray-700 hover:scale-105 transition-all duration-300 hover:shadow-orange-500/20 animate-slideInLeft" style={{ animationDelay: '0.6s' }}>
        <h3 className="text-xl font-bold text-white mb-6">Operating Systems</h3>
        <div className="flex flex-wrap gap-2">
          {skills.os.map((skill) => (
            <span key={skill} className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">{skill}</span>
          ))}
        </div>
      </div> */}

      {/* Soft Skills */}
      {/* <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-gray-700 hover:scale-105 transition-all duration-300 hover:shadow-pink-500/20 md:col-span-2 lg:col-span-2 animate-slideInUp" style={{ animationDelay: '0.8s' }}>
        <h3 className="text-xl font-bold text-white mb-6">Soft Skills</h3>
        <div className="flex flex-wrap gap-2">
          {skills.soft.map((skill) => (
            <span key={skill} className="bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-medium">{skill}</span>
          ))}
        </div>
      </div> */}
    </div>

    {/* 🔥 Enhanced Progress Bars Section */}
<div className="mt-20 grid md:grid-cols-2 gap-10">
  {[
    { name: "JavaScript", percent: 90 },
    { name: "React", percent: 80 },
    { name: "Java", percent: 95 },
    { name: "Figma (UI/UX)", percent: 95 },
    { name: "Git/GitHub", percent: 90 },
    { name: "Robotic Process Automation", percent: 90 },
  ].map((skill, idx) => (
    <div
      key={idx}
      className="animate-fadeInUp"
      style={{
        animationDelay: `${0.1 * idx}s`,
        animationFillMode: 'both',
      }}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-semibold text-lg sm:text-xl">{skill.name}</span>
        <span className="text-gray-300 text-base sm:text-lg">{skill.percent}%</span>
      </div>
      <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden shadow-inner">
        <div
          className="h-3 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 transition-all duration-1000 shadow-md animate-pulse"
          style={{ width: `${skill.percent}%` }}
        ></div>
      </div>
    </div>
  ))}
</div>

  </div>
</section>


     {/* Experience Section */}
<section id="experience" className={`py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50 backdrop-blur-sm relative z-10 transition-all duration-1000 ${isVisible.experience ? 'animate-fadeInUp' : 'opacity-0 translate-y-10'}`}>
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 animate-slideInLeft">Experience</h2>
      <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
    </div>

    <div className="max-w-4xl mx-auto">
      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-600 animate-pulse"></div>
        <div className="relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border-l-4 border-blue-600 ml-16 border border-gray-700 hover:scale-105 transition-all duration-300 hover:shadow-blue-500/20">
          <div className="absolute -left-20 top-8 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <Briefcase className="w-4 h-4 text-white" />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Open Source Contributor</h3>
              <p className="text-xl text-blue-600 mb-2">Wikimedia Foundation</p>
            </div>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              Sept 2024 – Feb 2025
            </span>
          </div>
          <p className="text-gray-300 leading-relaxed mb-4">
            Improved Campaign Events via code, worked with large codebases, and gained collaboration experience. 
            Received a Certificate of Appreciation for contributing to the open-source community.
          </p>
          <a
            href="https://certificate.givemycertificate.com/c/51400f3b-d29f-4066-b326-3f708b081ef3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300"
          >
            🎓 View Verified Certificate
          </a>
        </div>
      </div>
    </div>
  </div>
</section>


   {/* Projects Section */}
<section
  id="projects"
  className={`py-20 px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-1000 ${
    isVisible.projects ? 'animate-fadeInUp' : 'opacity-0 translate-y-10'
  }`}
>
  <div className="max-w-7xl mx-auto">
    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 animate-slideInRight">
        Projects
      </h2>
      <div className="w-24 h-1 bg-blue-600 mx-auto animate-pulse"></div>
    </div>

    {/* Project Grid */}
    <div className="grid md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <div
          key={index}
          className={`group bg-gradient-to-br from-gray-800 via-gray-900 to-black/80 backdrop-blur-md p-8 rounded-2xl border border-gray-700 shadow-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-blue-500/30 hover:border-blue-500 animate-fadeInUp`}
          style={{
            animationDelay: `${index * 0.3}s`,
            animationFillMode: 'both',
          }}
        >
          {/* Title + Link */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-transform duration-300 hover:scale-110"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
              <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium mb-3 animate-fadeIn">
                {project.category}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 mb-4 leading-relaxed animate-slideInLeft">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="bg-gray-700 text-gray-300 px-3 py-1 rounded-md text-sm hover:bg-blue-600 hover:text-white transition-colors duration-300 animate-fadeIn"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Achievements Section */}
<section
  id="achievements"
  className={`py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50 backdrop-blur-sm relative z-10 transition-all duration-1000 ${
    isVisible.achievements ? 'animate-fadeInUp' : 'opacity-0 translate-y-10'
  }`}
>
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16 animate-fadeInDown animation-delay-200">
  <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-4 animate-slideInLeft animate-bounce">
    Achievements & Certifications
  </h2>
  <div className="w-24 h-1 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse animate-glow"></div>
</div>


    <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
      {[
        ...achievements,
        {
          text: 'Attended Open Source India (OSI) conference in Bangalore to explore trends in open-source development.',
          images: ['osi2.jpg', 'osi.jpg'],
        },
        {
          text: 'TCS TechBytes: Secured 7th place in the regional-level quiz competition conducted by TCS',
          images: ['tcs.jpg'],
        },
        {
          text: 'Infosys Springboard: Earned certifications in React, DBMS, Computer Networks, and Operating Systems',
        },
        {
          text: 'CodeChef: Completed the Data Structures and Algorithms course with certification',
        },
        {
          text: 'NPTEL: Certified in Theory of Computation (TOC) ',
        },
        {
          text: 'Cyber Security Club: Certified of Completion in CySeck (Cyber Security Karnataka)',
        },
      ].map((achievement, index) => (
        <div
          key={index}
          className="flex flex-col space-y-4 bg-gradient-to-r from-gray-800/50 to-gray-700/50 p-6 rounded-xl border border-gray-700 hover:scale-[1.03] transition-all duration-300 hover:shadow-blue-500/20 animate-slideInUp"
          style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
        >
          <div className="flex items-start space-x-4">
            <div className="bg-blue-600 p-2 rounded-full flex-shrink-0">
              <Award className="w-5 h-5 text-white" />
            </div>
            <div className="text-gray-300 leading-relaxed">
              {achievement.link ? (
                <a
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  {achievement.text}
                </a>
              ) : (
                <p>{achievement.text}</p>
              )}
            </div>
          </div>

          {/* Swiper Image Slider */}
          {achievement.images && (
            <div className="mt-4">
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={16}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                className="rounded-xl overflow-hidden"
              >
                {achievement.images.map((img, i) => (
                  <SwiperSlide key={i}>
                    <div className="w-full h-64 border border-gray-600 shadow-lg rounded-xl overflow-hidden">
                      <img
                        src={img}
                        alt={`achievement-${i}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Contact Section */}
<section
  id="contact"
  className={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm relative z-10 transition-all duration-1000 ${
    isVisible.contact ? 'animate-fadeInUp' : 'opacity-0 translate-y-10'
  }`}
>
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 animate-slideInDown">
      Let's Connect
    </h2>

    <p
      className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto animate-fadeIn"
      style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
    >
      I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and development.
    </p>

    <div className="flex flex-wrap justify-center gap-6 animate-fadeInUp" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
      {/* Email Button */}
      <a
        href="mailto:roshankundar007@gmail.com"
        className="group relative inline-flex items-center space-x-3 bg-white text-black px-8 py-4 rounded-full shadow-2xl hover:shadow-blue-500/40 transition-transform transform hover:scale-110 duration-300"
      >
        <span className="absolute -inset-1 bg-gradient-to-r from-white/20 to-white/10 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-300"></span>
        <Mail className="w-6 h-6 z-10" />
        <span className="font-medium z-10">Email Me</span>
      </a>

      {/* Phone Button */}
      <a
        href="tel:+916363474085"
        className="group relative inline-flex items-center space-x-3 bg-gray-800/60 text-white border border-gray-500 px-8 py-4 rounded-full hover:bg-gray-700/60 transition-transform transform hover:scale-110 duration-300"
      >
        <span className="absolute -inset-1 bg-gradient-to-r from-gray-700 to-gray-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-300"></span>
        <Phone className="w-6 h-6 z-10" />
        <span className="font-medium z-10">Call Me</span>
      </a>

      {/* LinkedIn Button */}
      <a
        href="https://www.linkedin.com/in/roshan-s-501876266/"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex items-center space-x-3 bg-blue-800/80 text-white border border-blue-600 px-8 py-4 rounded-full hover:bg-blue-900/80 transition-transform transform hover:scale-110 duration-300"
      >
        <span className="absolute -inset-1 bg-gradient-to-r from-blue-700 to-purple-700 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-300"></span>
        <Linkedin className="w-6 h-6 z-10" />
        <span className="font-medium z-10">LinkedIn</span>
      </a>

      {/* GitHub Button */}
      <a
        href="https://github.com/Roshan474"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex items-center space-x-3 bg-gray-900/70 text-white border border-gray-600 px-8 py-4 rounded-full hover:bg-gray-800/70 transition-transform transform hover:scale-110 duration-300"
      >
        <span className="absolute -inset-1 bg-gradient-to-r from-gray-700 to-black rounded-full blur opacity-20 group-hover:opacity-40 transition duration-300"></span>
        <Github className="w-6 h-6 z-10" />
        <span className="font-medium z-10">GitHub</span>
      </a>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="bg-black/90 text-center py-8 px-4 border-t border-gray-800 relative z-10">
        <p className="text-gray-400 animate-pulse">© 2025 Roshan S. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;