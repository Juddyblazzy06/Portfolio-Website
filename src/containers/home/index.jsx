import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ImageOne from "../../images/image1.jpg";
import ImageTwo from "../../images/image2.jpg";
import ImageThree from "../../images/image3.jpg";
import Footer from "../../components/Footer";
import "./styles.scss";

// Google Drive direct image URL - converted from share link to direct access
const ProfileImage = "https://media.licdn.com/dms/image/v2/D4D03AQEBDO3BkmHt5g/profile-displayphoto-scale_400_400/B4DZlqVDa.IEAg-/0/1758425529152?e=1761177600&v=beta&t=7i2wktwrOhWLu3avqltNGU8nTh89D35VcxZhZZ-3QMY";

const Home = () => {
  const navigate = useNavigate();
  const [currentQuote, setCurrentQuote] = useState(0);
  const [currentTestimonialGroup, setCurrentTestimonialGroup] = useState(0);

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  // Multiple quotes array
  const quotes = [
    {
      text: "Code is like humor. When you have to explain it, it's bad.",
      author: "Cory House"
    },
    {
      text: "First, solve the problem. Then, write the code.",
      author: "John Johnson"
    },
    {
      text: "The best error message is the one that never shows up.",
      author: "Thomas Fuchs"
    },
    {
      text: "Programming isn't about what you know; it's about what you can figure out.",
      author: "Chris Pine"
    },
    {
      text: "Code never lies, comments sometimes do.",
      author: "Ron Jeffries"
    }
  ];

  // Auto-slide quotes every 4 seconds
  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(quoteInterval);
  }, [quotes.length]);

  // Auto-slide testimonials every 6 seconds
  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonialGroup((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
    }, 6000);
    return () => clearInterval(testimonialInterval);
  }, []);

  const testimonials = [
    {
      quote: "Jude is a great collaborator. When working with him he makes you feel calm and interested. He has proven himself as reliable, exceptionally having great attention to detail and his obsession with making great UI transpires through his work. I would recommend Jude for the role of Software Developer and so should you!",
      name: "Michael Mesfin",
      location: "Addis Ababa, Ethiopia"
    },
    {
      quote: "Jude Amienghemhen is one of the most reliable and hardworking developers I've come across. Beyond his technical skills, he is a good team player, takes feedback constructively and uses it to improve both the product and process. If you're looking for a developer who not only meets expectations but often exceeds them, Jude Amienghemhen is your go-to.",
      name: "Sandra Ejiofor",
      location: "Lagos, Nigeria"
    },
    {
      quote: "Jude is an intelligent and deeply creative person. He is thorough and has a great eye for detail. When Jude was working on a project, our error-correction needs were always reduced by half or more thanks to his outstanding diligence and attention to detail. In short, Jude is a delight and an incredible asset to anyone lucky enough to work with him.",
      name: "Aakash Verma",
      location: "Chennai, India"
    },
    {
      quote: "Jude is easy to work with as he keeps time, fulfilled his part of agreements on group projects, well versed with the topics at hand as he did prior research, he is also keen on details which reduced time spent fixing bugs. I enjoyed working with Jude.",
      name: "Sharon Kessio",
      location: "Nairobi, Kenya"
    },
    {
      quote: "Jude Amienghemhen is one of the sharpest frontend engineers I've worked with. He consistently delivers efficient, well-structured solutions that integrate smoothly with any backend setup. Jude is hardworking, brave in tackling challenges, and a strong communicator who collaborates effortlessly with the team. A solid professional and a real asset to any development team.",
      name: "Akolo Kusta",
      location: "Abuja, Nigeria"
    },
    {
      quote: "Working with Jude has been an absolute pleasure. His technical expertise combined with his creative problem-solving approach makes him stand out. He delivered our project ahead of schedule with exceptional quality. His communication skills and professional attitude make him a valuable team member.",
      name: "James Rodriguez",
      location: "Madrid, Spain"
    },
    {
      quote: "Jude transformed our outdated website into a modern, responsive masterpiece. His attention to user experience and performance optimization is remarkable. The site loads faster and looks stunning on all devices. I couldn't be happier with the results!",
      name: "Emily Chen",
      location: "Toronto, Canada"
    },
    {
      quote: "I've worked with many developers, but Jude brings something special to the table. His code is clean, well-documented, and scalable. He's also great at explaining technical concepts to non-technical stakeholders. A true professional who I'd recommend without hesitation.",
      name: "David Thompson",
      location: "London, UK"
    },
    {
      quote: "Jude delivered exactly what we needed for our startup's MVP. His ability to work under tight deadlines while maintaining code quality is impressive. He's proactive in suggesting improvements and always keeps the user experience at the forefront of his decisions.",
      name: "Sarah Williams",
      location: "San Francisco, USA"
    }
  ];

  const featuredProjects = [
    {
      name: "V2Africa Labs",
      description: "V2Africa Labs is the leading platform for African startups and entrepreneurs to connect, collaborate, and scale their businesses.",
      image: ImageOne,
      technologies: ["HTML5", "CSS3", "JavaScript", "JQuery", "Bootstrap"],
      codeLink: "#",
      liveLink: "#"
    },
    {
      name: "Jude's Portfolio",
      description: "Jude's Portfolio is my personal portfolio website where I showcase my work and share my journey as a software engineer.",
      image: ImageTwo,
      technologies: ["NextJS", "TailwindCSS"],
      codeLink: "#",
      liveLink: "#"
    },
    {
      name: "Zride Dashboard",
      description: "Zride Dashboard is a web dashboard that allows users to manage their rides, view their ride history, and save their favorite rides.",
      image: ImageThree,
      technologies: ["ReactJS", "TailwindCSS", "Redux"],
      codeLink: "#",
      liveLink: "#"
    }
  ];


  // Animation variants for smooth, persistent animations
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

  return (
    <div className="home">
      {/* Hero Section */}
      <motion.section
        className="home__hero"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="home__container">
          <div className="home__hero-content">
            <motion.div
              className="home__profile-section"
              variants={fadeInUp}
            >
              <motion.div
                className="home__profile-image-wrapper"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={ProfileImage}
                  alt="Jude Amienghemhen - Full-Stack Developer"
                  className="home__profile-image"
                  onError={(e) => {
                    e.target.onerror = null; // Prevent infinite loop
                    e.target.src = "https://via.placeholder.com/400x400/2c2c2c/ffdd40?text=JA"; // Fallback image
                  }}
                />
              </motion.div>
            </motion.div>

            <div className="home__text-content">
              <motion.h1
                className="home__title"
                variants={fadeInUp}
              >
                Jude is a Full-Stack Software Engineer and Developer
              </motion.h1>

              <motion.p
                className="home__subtitle"
                variants={fadeInUp}
              >
                Detail-oriented full-stack software engineer with a strong passion for creating dynamic, scalable, and visually engaging digital experiences. Skilled in JavaScript and modern frameworks, I build responsive user interfaces with Next.js and React.js, while developing robust, efficient back-end systems using Node.js, Express.js, NestJS, C# and the .NET ecosystem.

                Proficient with both SQL and NoSQL databases — including PostgreSQL, SQL Server, MySQL, and MongoDB. <br />

                With a growing interest in artificial intelligence, I integrate intelligent features and automation into applications, enabling smarter workflows and advanced analytics. My mission is to craft customized software solutions that highlight organizational strengths, efficiency, and drive long-term success.
              </motion.p>

              <motion.button
                onClick={handleNavigateToContactMePage}
                className="home__cta-button"
                variants={fadeInUp}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(255, 221, 64, 0.4)",
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                Contact me!!
              </motion.button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        className="home__projects-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="home__container">
          <motion.div
            className="home__projects-header"
            variants={fadeInUp}
          >
            <h2 className="home__section-title">#projects</h2>
          </motion.div>

          <div className="home__projects">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.name}
                className="home__project"
                variants={cardVariant}
                whileHover={{
                  y: -15,
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="home__project-image">
                  <motion.img
                    src={project.image}
                    alt={project.name}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="home__project-overlay">
                    <div className="home__project-links">
                      <motion.a
                        href={project.codeLink}
                        className="home__project-link"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Code {">="}
                      </motion.a>
                      <motion.a
                        href={project.liveLink}
                        className="home__project-link"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Live {"<~>"}
                      </motion.a>
                    </div>
                  </div>
                </div>
                <div className="home__project-content">
                  <div className="home__project-tags">
                    {project.technologies.map(tech => (
                      <span key={tech} className="home__project-tag">{tech}</span>
                    ))}
                  </div>
                  <h3 className="home__project-title">{project.name}</h3>
                  <p className="home__project-description">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="home__view-all-bottom"
            variants={fadeInUp}
          >
            <Link to="/works" className="home__view-all-link home__view-all-link--large">
              View all projects ~~&gt;
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Quote Section */}
      <motion.section
        className="home__quote-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="home__container">
          <div className="home__quote-wrapper">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuote}
                className="home__quote-content"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
              >
                <blockquote className="home__quote">
                  "{quotes[currentQuote].text}"
                </blockquote>
                <cite className="home__quote-author">— {quotes[currentQuote].author}</cite>
              </motion.div>
            </AnimatePresence>

            {/* Quote indicators */}
            <div className="home__quote-indicators">
              {quotes.map((_, index) => (
                <button
                  key={index}
                  className={`home__quote-indicator ${index === currentQuote ? 'active' : ''}`}
                  onClick={() => setCurrentQuote(index)}
                  aria-label={`Quote ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        className="home__testimonials-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="home__container">
          <motion.div className="home__section-header" variants={fadeInUp}>
            <h2 className="home__section-title">What people say about me</h2>
          </motion.div>

          <div className="home__testimonials-slider">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonialGroup}
                className="home__testimonials"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
              >
                {testimonials
                  .slice(currentTestimonialGroup * 3, (currentTestimonialGroup * 3) + 3)
                  .map((testimonial, index) => (
                    <motion.div
                      key={`${currentTestimonialGroup}-${index}`}
                      className="home__testimonial"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.1,
                        ease: [0.6, -0.05, 0.01, 0.99]
                      }}
                      whileHover={{
                        y: -10,
                        scale: 1.02,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <div className="home__testimonial-content">
                        <blockquote className="home__testimonial-quote">
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="home__testimonial-author">
                          <h4>{testimonial.name}</h4>
                          <p>{testimonial.location}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </motion.div>
            </AnimatePresence>

            {/* Testimonial indicators */}
            <div className="home__testimonial-indicators">
              {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  className={`home__testimonial-indicator ${index === currentTestimonialGroup ? 'active' : ''}`}
                  onClick={() => setCurrentTestimonialGroup(index)}
                  aria-label={`Testimonial group ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Home;