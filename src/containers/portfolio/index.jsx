import React, { useEffect } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import ImageOne from "../../images/image1.jpg";
import ImageTwo from "../../images/image2.jpg";
import ImageThree from "../../images/image3.jpg";
import ImageFour from "../../images/image4.jpg";
import ImageFive from "../../images/image5.jpg";
import AnimatedSection from "../../components/AnimatedSection";
import Footer from "../../components/Footer";
import ModernCard from "../../components/ModernCard";
import "./styles.scss";
import { useState } from "react";

const portfolioData = [
  // Frontend Projects - Reduced to 3
  {
    id: 1,
    name: "E-commerce Platform",
    description: "A modern e-commerce platform with secure payment processing, real-time inventory management, and responsive design for optimal shopping experience.",
    image: ImageOne,
    codeLink: "https://github.com/judeamienghemhen/ecommerce-platform",
    liveLink: "https://ecommerce-demo.judeamienghemhen.com",
    tags: ["React", "Redux", "SCSS", "Stripe"],
    category: "frontend"
  },
  {
    id: 2,
    name: "Portfolio Website",
    description: "A personal portfolio website showcasing my work and journey as a software engineer with smooth animations and modern design principles.",
    image: ImageTwo,
    codeLink: "https://github.com/judeamienghemhen/portfolio-v2",
    liveLink: "https://judeamienghemhen.com",
    tags: ["React", "Framer Motion", "SCSS"],
    category: "frontend"
  },
  {
    id: 3,
    name: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: ImageThree,
    codeLink: "https://github.com/judeamienghemhen/task-manager",
    liveLink: "https://tasks.judeamienghemhen.com",
    tags: ["Vue.js", "Vuex", "TailwindCSS"],
    category: "frontend"
  },

  // API Projects - Keep 6 as requested
  {
    id: 4,
    name: "REST API for Blog Platform",
    description: "A comprehensive RESTful API for blog platforms with user authentication, CRUD operations, and advanced search functionality.",
    image: ImageTwo,
    codeLink: "https://github.com/judeamienghemhen/blog-api",
    liveLink: "https://api.blog.judeamienghemhen.com/docs",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    category: "api"
  },
  {
    id: 5,
    name: "GraphQL User Management API",
    description: "A modern GraphQL API for user management with real-time subscriptions, complex queries, and efficient data fetching.",
    image: ImageThree,
    codeLink: "https://github.com/judeamienghemhen/graphql-user-api",
    liveLink: "https://graphql.judeamienghemhen.com/playground",
    tags: ["GraphQL", "Apollo Server", "PostgreSQL"],
    category: "api"
  },
  {
    id: 6,
    name: "E-commerce API",
    description: "Scalable e-commerce API with inventory management, order processing, payment integration, and automated email notifications.",
    image: ImageFour,
    codeLink: "https://github.com/judeamienghemhen/ecommerce-api",
    liveLink: "https://api.store.judeamienghemhen.com/docs",
    tags: ["Node.js", "Express", "Sequelize", "Redis"],
    category: "api"
  },
  {
    id: 7,
    name: "Real-time Chat API",
    description: "Real-time messaging API with WebSocket connections, message encryption, file sharing, and multi-room support.",
    image: ImageFive,
    codeLink: "https://github.com/judeamienghemhen/chat-api",
    liveLink: "https://chat-api.judeamienghemhen.com",
    tags: ["Socket.io", "Node.js", "Redis", "MongoDB"],
    category: "api"
  },
  {
    id: 8,
    name: "Payment Gateway API",
    description: "Secure payment processing API with multiple provider support, webhook handling, and PCI compliance standards.",
    image: ImageOne,
    codeLink: "https://github.com/judeamienghemhen/payment-api",
    liveLink: "https://payments.judeamienghemhen.com/docs",
    tags: ["Node.js", "Stripe", "PayPal", "Webhook"],
    category: "api"
  },
  {
    id: 9,
    name: "Analytics API",
    description: "Advanced analytics API with real-time data processing, custom metrics, dashboard integration, and automated reporting.",
    image: ImageTwo,
    codeLink: "https://github.com/judeamienghemhen/analytics-api",
    liveLink: "https://analytics.judeamienghemhen.com",
    tags: ["Node.js", "Express", "Chart.js", "Redis"],
    category: "api"
  },

  // Fullstack Projects - Reduced to 3
  {
    id: 10,
    name: "Social Learning Platform",
    description: "A comprehensive e-learning platform with live video sessions, interactive quizzes, progress tracking, and collaborative study groups.",
    image: ImageThree,
    codeLink: "https://github.com/judeamienghemhen/learning-platform",
    liveLink: "https://learn.judeamienghemhen.com",
    tags: ["MERN Stack", "Socket.io", "AWS S3", "Stripe"],
    category: "fullstack"
  },
  {
    id: 11,
    name: "Project Management Tool",
    description: "Advanced project management solution with team collaboration, time tracking, Gantt charts, and automated workflow management.",
    image: ImageFour,
    codeLink: "https://github.com/judeamienghemhen/project-manager",
    liveLink: "https://projects.judeamienghemhen.com",
    tags: ["Next.js", "Prisma", "PostgreSQL", "NextAuth"],
    category: "fullstack"
  },
  {
    id: 12,
    name: "Real Estate Platform",
    description: "Modern real estate platform with property listings, virtual tours, mortgage calculators, and agent management system.",
    image: ImageFive,
    codeLink: "https://github.com/judeamienghemhen/real-estate",
    liveLink: "https://realestate.judeamienghemhen.com",
    tags: ["Vue.js", "Laravel", "MySQL", "Cloudinary"],
    category: "fullstack"
  },

  // AI Projects - Reduced to 3
  {
    id: 13,
    name: "AI Chatbot Assistant",
    description: "Intelligent conversational AI with natural language processing, context awareness, and multi-language support for customer service.",
    image: ImageFour,
    codeLink: "https://github.com/judeamienghemhen/ai-chatbot",
    liveLink: "https://chatbot.judeamienghemhen.com",
    tags: ["Node.js", "OpenAI", "Express", "NLP"],
    category: "ai"
  },
  {
    id: 14,
    name: "Image Classification App",
    description: "Advanced computer vision application with deep learning models for accurate image recognition and automated tagging system.",
    image: ImageFive,
    codeLink: "https://github.com/judeamienghemhen/image-classifier",
    liveLink: "https://classify.judeamienghemhen.com",
    tags: ["TensorFlow", "Python", "React", "CNN"],
    category: "ai"
  },
  {
    id: 15,
    name: "Sentiment Analysis Tool",
    description: "Real-time sentiment analysis platform for social media monitoring, customer feedback processing, and market research insights.",
    image: ImageOne,
    codeLink: "https://github.com/judeamienghemhen/sentiment-analysis",
    liveLink: "https://sentiment.judeamienghemhen.com",
    tags: ["Node.js", "Natural", "Express", "NLP"],
    category: "ai"
  }
];

const filterData = [
  {
    filterId: 1,
    label: "All",
    category: "all"
  },
  {
    filterId: 2,
    label: "Frontend",
    category: "frontend"
  },
  {
    filterId: 3,
    label: "API",
    category: "api"
  },
  {
    filterId: 4,
    label: "Fullstack",
    category: "fullstack"
  },
  {
    filterId: 5,
    label: "AI",
    category: "ai"
  },
];

const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  // Set document title for portfolio page
  useEffect(() => {
    document.title = "Jude - Projects";
  }, []);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  console.log("====================================");
  console.log(hoveredValue);
  console.log("====================================");

  const filteredItems = filteredvalue === 1
      ? portfolioData
    : portfolioData.filter((item) => {
        const selectedFilter = filterData.find(filter => filter.filterId === filteredvalue);
        return selectedFilter && item.category === selectedFilter.category;
      });

  console.log(filteredItems);

  return (
    <section id="works" className="portfolio">
      <PageHeaderContent
        headerText="/my-works"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <AnimatedSection direction="up" delay={0.2}>
          <div className="portfolio__filter-container">
            <ul className="portfolio__content__filter">
              {filterData.map((item) => (
                <motion.li
                  key={item.filterId}
                  className={item.filterId === filteredvalue ? "active" : ""}
                  onClick={() => handleFilter(item.filterId)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
        
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <AnimatedSection 
              key={`cardItem${item.name.trim()}`}
              direction="up" 
              delay={index * 0.1}
            >
              <ModernCard className="portfolio__card">
                <motion.div
                  className="portfolio__content__cards__item"
                  onMouseEnter={() => handleHover(index)}
                  onMouseLeave={() => handleHover(null)}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="portfolio__content__cards__item__img-wrapper">
                    <img alt={item.name} src={item.image} />
                  </div>
                  <motion.div 
                    className="overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: index === hoveredValue ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="overlay__content">
                      <h3>{item.name}</h3>
                      <p className="overlay__description">{item.description}</p>
                      <div className="overlay__tags">
                        {item.tags?.map((t) => (
                          <span key={t} className="tag-chip">{t}</span>
                        ))}
                      </div>
                      <div className="overlay__actions">
                        <motion.a
                          href={item.codeLink}
                          target="_blank"
                          rel="noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="btn btn-outline"
                        >
                          Code {">="}
                        </motion.a>
                        <motion.a
                          href={item.liveLink}
                          target="_blank"
                          rel="noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="btn btn-solid"
                        >
                          Live {"<~>"}
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </ModernCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
};
export default Portfolio;
