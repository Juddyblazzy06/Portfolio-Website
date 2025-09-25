import React, { useEffect, useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import ImageOne from "../../images/image1.jpg";
import ImageTwo from "../../images/image2.jpg";
import ImageThree from "../../images/image3.jpg";
import ImageFour from "../../images/image4.jpg";
import ImageFive from "../../images/image5.jpg";
import Footer from "../../components/Footer";
import "./styles.scss";

const portfolioData = [
  // Frontend Projects
  {
    id: 1,
    name: "E-commerce Platform",
    description: "A modern e-commerce platform with secure payment processing, real-time inventory management, and responsive design for optimal shopping experience.",
    image: ImageOne,
    codeLink: "https://github.com/judeamienghemhen/ecommerce-platform",
    liveLink: "https://ecommerce-demo.judeamienghemhen.com",
    technologies: ["React", "Redux", "SCSS", "Stripe"],
    category: "frontend"
  },
  {
    id: 2,
    name: "Portfolio Website",
    description: "A personal portfolio website showcasing my work and journey as a software engineer with smooth animations and modern design principles.",
    image: ImageTwo,
    codeLink: "https://github.com/judeamienghemhen/portfolio-v2",
    liveLink: "https://judeamienghemhen.com",
    technologies: ["React", "Framer Motion", "SCSS"],
    category: "frontend"
  },
  {
    id: 3,
    name: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: ImageThree,
    codeLink: "https://github.com/judeamienghemhen/task-manager",
    liveLink: "https://tasks.judeamienghemhen.com",
    technologies: ["Vue.js", "Vuex", "TailwindCSS"],
    category: "frontend"
  },

  // API Projects
  {
    id: 4,
    name: "REST API for Blog Platform",
    description: "A comprehensive RESTful API for blog platforms with user authentication, CRUD operations, and advanced search functionality.",
    image: ImageTwo,
    codeLink: "https://github.com/judeamienghemhen/blog-api",
    liveLink: "https://api.blog.judeamienghemhen.com/docs",
    technologies: ["Node.js", "Express", "MongoDB", "JWT"],
    category: "api"
  },
  {
    id: 5,
    name: "GraphQL User Management API",
    description: "A modern GraphQL API for user management with real-time subscriptions, complex queries, and efficient data fetching.",
    image: ImageThree,
    codeLink: "https://github.com/judeamienghemhen/graphql-user-api",
    liveLink: "https://graphql.judeamienghemhen.com/playground",
    technologies: ["GraphQL", "Apollo Server", "PostgreSQL"],
    category: "api"
  },
  {
    id: 6,
    name: "E-commerce API",
    description: "Scalable e-commerce API with inventory management, order processing, payment integration, and automated email notifications.",
    image: ImageFour,
    codeLink: "https://github.com/judeamienghemhen/ecommerce-api",
    liveLink: "https://api.store.judeamienghemhen.com/docs",
    technologies: ["Node.js", "Express", "Sequelize", "Redis"],
    category: "api"
  },
  {
    id: 7,
    name: "Real-time Chat API",
    description: "Real-time messaging API with WebSocket connections, message encryption, file sharing, and multi-room support.",
    image: ImageFive,
    codeLink: "https://github.com/judeamienghemhen/chat-api",
    liveLink: "https://chat-api.judeamienghemhen.com",
    technologies: ["Socket.io", "Node.js", "Redis", "MongoDB"],
    category: "api"
  },
  {
    id: 8,
    name: "Payment Gateway API",
    description: "Secure payment processing API with multiple provider support, webhook handling, and PCI compliance standards.",
    image: ImageOne,
    codeLink: "https://github.com/judeamienghemhen/payment-api",
    liveLink: "https://payments.judeamienghemhen.com/docs",
    technologies: ["Node.js", "Stripe", "PayPal", "Webhook"],
    category: "api"
  },
  {
    id: 9,
    name: "Analytics API",
    description: "Advanced analytics API with real-time data processing, custom metrics, dashboard integration, and automated reporting.",
    image: ImageTwo,
    codeLink: "https://github.com/judeamienghemhen/analytics-api",
    liveLink: "https://analytics.judeamienghemhen.com",
    technologies: ["Node.js", "Express", "Chart.js", "Redis"],
    category: "api"
  },

  // Fullstack Projects
  {
    id: 10,
    name: "Social Learning Platform",
    description: "A comprehensive e-learning platform with live video sessions, interactive quizzes, progress tracking, and collaborative study groups.",
    image: ImageThree,
    codeLink: "https://github.com/judeamienghemhen/learning-platform",
    liveLink: "https://learn.judeamienghemhen.com",
    technologies: ["MERN Stack", "Socket.io", "AWS S3", "Stripe"],
    category: "fullstack"
  },
  {
    id: 11,
    name: "Project Management Tool",
    description: "Advanced project management solution with team collaboration, time tracking, Gantt charts, and automated workflow management.",
    image: ImageFour,
    codeLink: "https://github.com/judeamienghemhen/project-manager",
    liveLink: "https://projects.judeamienghemhen.com",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "NextAuth"],
    category: "fullstack"
  },
  {
    id: 12,
    name: "Real Estate Platform",
    description: "Modern real estate platform with property listings, virtual tours, mortgage calculators, and agent management system.",
    image: ImageFive,
    codeLink: "https://github.com/judeamienghemhen/real-estate",
    liveLink: "https://realestate.judeamienghemhen.com",
    technologies: ["Vue.js", "Laravel", "MySQL", "Cloudinary"],
    category: "fullstack"
  },

  // AI Projects
  {
    id: 13,
    name: "AI Chatbot Assistant",
    description: "Intelligent conversational AI with natural language processing, context awareness, and multi-language support for customer service.",
    image: ImageFour,
    codeLink: "https://github.com/judeamienghemhen/ai-chatbot",
    liveLink: "https://chatbot.judeamienghemhen.com",
    technologies: ["Node.js", "OpenAI", "Express", "NLP"],
    category: "ai"
  },
  {
    id: 14,
    name: "Image Classification App",
    description: "Advanced computer vision application with deep learning models for accurate image recognition and automated tagging system.",
    image: ImageFive,
    codeLink: "https://github.com/judeamienghemhen/image-classifier",
    liveLink: "https://classify.judeamienghemhen.com",
    technologies: ["TensorFlow", "Python", "React", "CNN"],
    category: "ai"
  },
  {
    id: 15,
    name: "Sentiment Analysis Tool",
    description: "Real-time sentiment analysis platform for social media monitoring, customer feedback processing, and market research insights.",
    image: ImageOne,
    codeLink: "https://github.com/judeamienghemhen/sentiment-analysis",
    liveLink: "https://sentiment.judeamienghemhen.com",
    technologies: ["Node.js", "Natural", "Express", "NLP"],
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

// Animation variants matching the homepage
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const cardVariant = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
  }
};

const Portfolio = () => {
  const [filteredValue, setFilteredValue] = useState(1);

  // Set document title for portfolio page
  useEffect(() => {
    document.title = "Jude - Projects";
  }, []);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  const filteredItems = filteredValue === 1
    ? portfolioData
    : portfolioData.filter((item) => {
        const selectedFilter = filterData.find(filter => filter.filterId === filteredValue);
        return selectedFilter && item.category === selectedFilter.category;
      });

  return (
    <section id="works" className="portfolio">
      <PageHeaderContent
        headerText="/my-works"
        icon={<BsInfoCircleFill size={40} />}
      />
      
      <motion.div 
        className="portfolio__content"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Filter Section */}
        <motion.div className="portfolio__filter-container" variants={fadeInUp}>
          <ul className="portfolio__content__filter">
            {filterData.map((item) => (
              <motion.li
                key={item.filterId}
                className={item.filterId === filteredValue ? "active" : ""}
                onClick={() => handleFilter(item.filterId)}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 221, 64, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                {item.label}
              </motion.li>
            ))}
          </ul>
        </motion.div>
        
        {/* Projects Grid - Matching Homepage Layout */}
        <motion.div 
          className="portfolio__projects-grid"
          variants={staggerContainer}
        >
          <AnimatePresence mode="wait">
            {filteredItems.map((project, index) => (
              <motion.div
                key={project.id}
                className="portfolio__project-card"
                variants={cardVariant}
                initial="hidden"
                animate="visible"
                exit="hidden"
                whileHover={{
                  y: -15,
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="portfolio__project-image">
                  <motion.img
                    src={project.image}
                    alt={project.name}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="portfolio__project-overlay">
                    <div className="portfolio__project-links">
                      <motion.a
                        href={project.codeLink}
                        className="portfolio__project-link"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Code {">="}
                      </motion.a>
                      <motion.a
                        href={project.liveLink}
                        className="portfolio__project-link"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live {"<~>"}
                      </motion.a>
                    </div>
                  </div>
                </div>
                <div className="portfolio__project-content">
                  <div className="portfolio__project-tags">
                    {project.technologies.map(tech => (
                      <span key={tech} className="portfolio__project-tag">{tech}</span>
                    ))}
                  </div>
                  <h3 className="portfolio__project-title">{project.name}</h3>
                  <p className="portfolio__project-description">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
      <Footer />
    </section>
  );
};

export default Portfolio;