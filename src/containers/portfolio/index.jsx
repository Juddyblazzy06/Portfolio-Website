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
  // Frontend Projects
  {
    id: 1,
    name: "E-commerce Platform",
    image: ImageOne,
    codeLink: "https://github.com/judeamienghemhen/ecommerce-platform",
    liveLink: "https://ecommerce-demo.judeamienghemhen.com",
    tags: ["React", "Redux", "SCSS", "Stripe"],
    category: "frontend"
  },
  {
    id: 2,
    name: "Portfolio Website",
    image: ImageTwo,
    codeLink: "https://github.com/judeamienghemhen/portfolio-v2",
    liveLink: "https://judeamienghemhen.com",
    tags: ["React", "Framer Motion", "SCSS"],
    category: "frontend"
  },
  {
    id: 3,
    name: "Task Management App",
    image: ImageThree,
    codeLink: "https://github.com/judeamienghemhen/task-manager",
    liveLink: "https://tasks.judeamienghemhen.com",
    tags: ["Vue.js", "Vuex", "TailwindCSS"],
    category: "frontend"
  },
  {
    id: 4,
    name: "Weather Dashboard",
    image: ImageFour,
    codeLink: "https://github.com/judeamienghemhen/weather-app",
    liveLink: "https://weather.judeamienghemhen.com",
    tags: ["React", "Chart.js", "OpenWeather API"],
    category: "frontend"
  },
  {
    id: 5,
    name: "Crypto Tracker",
    image: ImageFive,
    codeLink: "https://github.com/judeamienghemhen/crypto-tracker",
    liveLink: "https://crypto.judeamienghemhen.com",
    tags: ["Next.js", "TypeScript", "CoinGecko API"],
    category: "frontend"
  },
  {
    id: 6,
    name: "Social Media Dashboard",
    image: ImageOne,
    codeLink: "https://github.com/judeamienghemhen/social-dashboard",
    liveLink: "https://social.judeamienghemhen.com",
    tags: ["Angular", "NgRx", "Material UI"],
    category: "frontend"
  },

  // API Projects
  {
    id: 7,
    name: "REST API for Blog Platform",
    image: ImageTwo,
    codeLink: "https://github.com/judeamienghemhen/blog-api",
    liveLink: "https://api.blog.judeamienghemhen.com/docs",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    category: "api"
  },
  {
    id: 8,
    name: "GraphQL User Management API",
    image: ImageThree,
    codeLink: "https://github.com/judeamienghemhen/graphql-user-api",
    liveLink: "https://graphql.judeamienghemhen.com/playground",
    tags: ["GraphQL", "Apollo Server", "PostgreSQL"],
    category: "api"
  },
  {
    id: 9,
    name: "E-commerce API",
    image: ImageFour,
    codeLink: "https://github.com/judeamienghemhen/ecommerce-api",
    liveLink: "https://api.store.judeamienghemhen.com/docs",
    tags: ["Node.js", "Express", "Sequelize", "Redis"],
    category: "api"
  },
  {
    id: 10,
    name: "Real-time Chat API",
    image: ImageFive,
    codeLink: "https://github.com/judeamienghemhen/chat-api",
    liveLink: "https://chat-api.judeamienghemhen.com",
    tags: ["Socket.io", "Node.js", "Redis", "MongoDB"],
    category: "api"
  },
  {
    id: 11,
    name: "Payment Gateway API",
    image: ImageOne,
    codeLink: "https://github.com/judeamienghemhen/payment-api",
    liveLink: "https://payments.judeamienghemhen.com/docs",
    tags: ["Node.js", "Stripe", "PayPal", "Webhook"],
    category: "api"
  },
  {
    id: 12,
    name: "Analytics API",
    image: ImageTwo,
    codeLink: "https://github.com/judeamienghemhen/analytics-api",
    liveLink: "https://analytics.judeamienghemhen.com",
    tags: ["Node.js", "Express", "Chart.js", "Redis"],
    category: "api"
  },

  // Fullstack Projects
  {
    id: 13,
    name: "Social Learning Platform",
    image: ImageThree,
    codeLink: "https://github.com/judeamienghemhen/learning-platform",
    liveLink: "https://learn.judeamienghemhen.com",
    tags: ["MERN Stack", "Socket.io", "AWS S3", "Stripe"],
    category: "fullstack"
  },
  {
    id: 14,
    name: "Project Management Tool",
    image: ImageFour,
    codeLink: "https://github.com/judeamienghemhen/project-manager",
    liveLink: "https://projects.judeamienghemhen.com",
    tags: ["Next.js", "Prisma", "PostgreSQL", "NextAuth"],
    category: "fullstack"
  },
  {
    id: 15,
    name: "Real Estate Platform",
    image: ImageFive,
    codeLink: "https://github.com/judeamienghemhen/real-estate",
    liveLink: "https://realestate.judeamienghemhen.com",
    tags: ["Vue.js", "Laravel", "MySQL", "Cloudinary"],
    category: "fullstack"
  },
  {
    id: 16,
    name: "Inventory Management System",
    image: ImageOne,
    codeLink: "https://github.com/judeamienghemhen/inventory-system",
    liveLink: "https://inventory.judeamienghemhen.com",
    tags: ["React", "Django", "PostgreSQL", "Docker"],
    category: "fullstack"
  },
  {
    id: 17,
    name: "Event Booking Platform",
    image: ImageTwo,
    codeLink: "https://github.com/judeamienghemhen/event-booking",
    liveLink: "https://events.judeamienghemhen.com",
    tags: ["Angular", "NestJS", "MongoDB", "PayPal"],
    category: "fullstack"
  },
  {
    id: 18,
    name: "Food Delivery App",
    image: ImageThree,
    codeLink: "https://github.com/judeamienghemhen/food-delivery",
    liveLink: "https://food.judeamienghemhen.com",
    tags: ["React Native", "Node.js", "MongoDB", "Maps API"],
    category: "fullstack"
  },

  // AI Projects
  {
    id: 19,
    name: "AI Chatbot Assistant",
    image: ImageFour,
    codeLink: "https://github.com/judeamienghemhen/ai-chatbot",
    liveLink: "https://chatbot.judeamienghemhen.com",
    tags: ["Node.js", "OpenAI", "Express", "NLP"],
    category: "ai"
  },
  {
    id: 20,
    name: "Image Classification App",
    image: ImageFive,
    codeLink: "https://github.com/judeamienghemhen/image-classifier",
    liveLink: "https://classify.judeamienghemhen.com",
    tags: ["TensorFlow", "Python", "React", "CNN"],
    category: "ai"
  },
  {
    id: 21,
    name: "Sentiment Analysis Tool",
    image: ImageOne,
    codeLink: "https://github.com/judeamienghemhen/sentiment-analysis",
    liveLink: "https://sentiment.judeamienghemhen.com",
    tags: ["Node.js", "Natural", "Express", "NLP"],
    category: "ai"
  },
  {
    id: 22,
    name: "Recommendation Engine",
    image: ImageTwo,
    codeLink: "https://github.com/judeamienghemhen/recommendation-engine",
    liveLink: "https://recommend.judeamienghemhen.com",
    tags: ["Node.js", "TensorFlow.js", "ML", "Collaborative Filtering"],
    category: "ai"
  },
  {
    id: 23,
    name: "Voice Recognition App",
    image: ImageThree,
    codeLink: "https://github.com/judeamienghemhen/voice-recognition",
    liveLink: "https://voice.judeamienghemhen.com",
    tags: ["Node.js", "Speech Recognition", "React", "Web Audio"],
    category: "ai"
  },
  {
    id: 24,
    name: "Predictive Analytics Dashboard",
    image: ImageFour,
    codeLink: "https://github.com/judeamienghemhen/predictive-analytics",
    liveLink: "https://predict.judeamienghemhen.com",
    tags: ["Node.js", "TensorFlow.js", "Chart.js", "Express"],
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
                      <div className="overlay__actions">
                        <motion.a
                          href={item.codeLink}
                          target="_blank"
                          rel="noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="btn btn-outline"
                        >
                          Code
                        </motion.a>
                        <motion.a
                          href={item.liveLink}
                          target="_blank"
                          rel="noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="btn btn-solid"
                        >
                          Live
                        </motion.a>
                      </div>
                      <div className="overlay__tags">
                        {item.tags?.map((t) => (
                          <span key={t} className="tag-chip">{t}</span>
                        ))}
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
