import React, { useEffect } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import AnimatedSection from "../../components/AnimatedSection";
import ModernCard from "../../components/ModernCard";
import Footer from "../../components/Footer";
import "./styles.scss";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase, FaReact, FaNodeJs, FaJs, FaMicrosoft, FaMobile, FaCloud, FaRobot, FaCode, FaServer, FaLaptopCode } from "react-icons/fa";
import { SiTensorflow, SiMongodb, SiPostgresql, SiCsharp, SiDotnet } from "react-icons/si";

const personalDetails = [
  { label: "Name", value: "Jude Amienghemhen" },
  { label: "Location", value: "Nigeria" },
  { label: "Email", value: "amiensjude@gmail.com" },
];

const jobSummary =
  "Hello, I'm Jude! I'm a Full-Stack Software Engineer located in Nigeria with over 5 years of experience crafting exceptional digital experiences. I have a great passion for UI creation, effects, animation and dynamic user experiences that not only look stunning but also deliver outstanding performance.";

const additionalContent =
  "I specialize in modern web technologies including React, Node.js, and C# development, with a strong focus on creating scalable, maintainable, and user-centric applications. My expertise spans across frontend frameworks, backend architecture, database design, and emerging AI technologies. I keep up with security best practices, performance optimization, and I'm always eager to learn new technologies and tackle challenging projects that push the boundaries of what's possible.";

const servicesData = [
  {
    icon: <FaReact size={40} />,
    title: "Frontend Development",
    description: "Modern React, Vue.js & responsive web applications"
  },
  {
    icon: <FaServer size={40} />,
    title: "Backend Development", 
    description: "Node.js APIs, microservices & server architecture"
  },
  {
    icon: <FaLaptopCode size={40} />,
    title: "Full-Stack Solutions",
    description: "End-to-end web applications with modern tech stacks"
  },
  {
    icon: <FaRobot size={40} />,
    title: "AI Integration",
    description: "Machine learning models & AI-powered applications"
  },
  {
    icon: <FaDatabase size={40} />,
    title: "Database Design",
    description: "Optimized database architecture & data modeling"
  },
  {
    icon: <SiCsharp size={40} />,
    title: "C# Development",
    description: ".NET applications & enterprise software solutions"
  }
];

const skillsData = [
  {
    category: "Frontend Skills",
    icon: <FaReact size={24} />,
    skills: [
      { name: "React/Next.js", percentage: 95 },
      { name: "Vue.js", percentage: 85 },
      { name: "JavaScript/TypeScript", percentage: 92 },
      { name: "HTML/CSS/SCSS", percentage: 96 },
      { name: "Responsive Design", percentage: 90 }
    ]
  },
  {
    category: "Backend Skills (Node.js)",
    icon: <FaNodeJs size={24} />,
    skills: [
      { name: "Node.js/Express", percentage: 90 },
      { name: "RESTful APIs", percentage: 88 },
      { name: "GraphQL", percentage: 80 },
      { name: "Authentication/JWT", percentage: 85 },
      { name: "Microservices", percentage: 75 }
    ]
  },
  {
    category: "Fullstack Skills",
    icon: <FaDev size={24} />,
    skills: [
      { name: "MERN Stack", percentage: 92 },
      { name: "MEAN Stack", percentage: 85 },
      { name: "Server Deployment", percentage: 82 },
      { name: "CI/CD Pipelines", percentage: 78 },
      { name: "Docker/Containers", percentage: 80 }
    ]
  },
  {
    category: "AI Skills",
    icon: <SiTensorflow size={24} />,
    skills: [
      { name: "TensorFlow.js", percentage: 75 },
      { name: "OpenAI Integration", percentage: 85 },
      { name: "Natural Language Processing", percentage: 70 },
      { name: "Machine Learning", percentage: 72 },
      { name: "Computer Vision", percentage: 68 }
    ]
  },
  {
    category: "Database Skills",
    icon: <FaDatabase size={24} />,
    skills: [
      { name: "MongoDB", percentage: 88 },
      { name: "PostgreSQL", percentage: 85 },
      { name: "MySQL", percentage: 82 },
      { name: "Redis", percentage: 78 },
      { name: "Database Design", percentage: 85 }
    ]
  },
  {
    category: "C# Software Development",
    icon: <SiCsharp size={24} />,
    skills: [
      { name: "C# Programming", percentage: 87 },
      { name: ".NET Framework/.NET Core", percentage: 82 },
      { name: "ASP.NET MVC/Web API", percentage: 80 },
      { name: "Entity Framework", percentage: 78 },
      { name: "LINQ & SQL Server", percentage: 83 }
    ]
  }
];

const funFacts = [
  "I often go to the gym with my friends",
  "My first computer bug was an actual bug",
  "I like watching TV shows/series",
  "I use Linux with GNOME while waiting for COSMIC OS",
  "I support Barcelona FC",
  "Linux runs on 100% of the world's top 500 supercomputers",
  "My favourite game is FIFA",
  "I once spent 3 hours debugging a missing semicolon",
  "I'm a bit of a perfectionist",
];

const About = () => {
  // Set document title for about page
  useEffect(() => {
    document.title = "Jude - About Me";
  }, []);

  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="/about-me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        {/* Full-width Hello section */}
        <AnimatedSection direction="up" delay={0.2}>
          <ModernCard className="about__hello-card">
            <h3>Hello, I'm Jude!</h3>
            <p className="about__hello-intro">{jobSummary}</p>
            <p className="about__hello-details">{additionalContent}</p>
          </ModernCard>
        </AnimatedSection>

        {/* Personal Information section */}
        <AnimatedSection direction="up" delay={0.4}>
          <ModernCard className="about__personal-info-card">
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </ModernCard>
        </AnimatedSection>

        {/* Full-width Professional Services section */}
        <AnimatedSection direction="up" delay={0.6}>
          <ModernCard className="about__services-card" glassmorphism={true}>
            <h3>Professional Services</h3>
            <div className="about__services-grid">
              {servicesData.map((service, index) => (
                <div 
                  key={index} 
                  className="about__service-item"
                >
                  <div className="about__service-icon">
                    {service.icon}
                  </div>
                  <div className="about__service-content">
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </ModernCard>
        </AnimatedSection>

        {/* Skills Section */}
        <AnimatedSection direction="up" delay={0.8}>
          <ModernCard className="about__skills-card" glassmorphism={true}>
            <h3>Technical Skills</h3>
            <div className="about__skills-grid">
              {skillsData.map((skillCategory, categoryIndex) => (
                <div key={categoryIndex} className="about__skill-category">
                  <div className="about__skill-category-header">
                    <span className="about__skill-category-icon">
                      {skillCategory.icon}
                    </span>
                    <h4>{skillCategory.category}</h4>
                  </div>
                  <div className="about__skills-list">
                    {skillCategory.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="about__skill-item">
                        <div className="about__skill-info">
                          <span className="about__skill-name">{skill.name}</span>
                          <span className="about__skill-percentage">{skill.percentage}%</span>
                        </div>
                        <div className="about__skill-progress-bar">
                          <div 
                            className="about__skill-progress-fill"
                            data-percentage={skill.percentage}
                            style={{ 
                              animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`,
                              '--skill-percentage': `${skill.percentage}%`
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
                </div>
          </ModernCard>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={1.0}>
          <ModernCard className="about__fun-facts-card" glassmorphism={true}>
            <h3>Fun Facts About Me</h3>
            <div className="about__fun-facts-grid">
              {funFacts.map((fact, i) => (
                <div key={i} className="about__fun-fact">
                  <span className="about__fun-fact-text">{fact}</span>
                </div>
              ))}
              </div>
            </ModernCard>
          </AnimatedSection>
        </div>
      <Footer />
    </section>
  );
};

export default About;