import React from "react";
import { motion } from "framer-motion";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram, FaCloud } from "react-icons/fa";
import "./styles.scss";

const SocialMediaSection = ({ className = "", showHeader = true }) => {
  // Social media links
  const socialMediaLinks = [
    {
      name: "Twitter/X",
      icon: FaTwitter,
      url: "https://twitter.com/judeamienghemhen",
      color: "#1DA1F2"
    },
    {
      name: "Facebook",
      icon: FaFacebookF,
      url: "https://facebook.com/judeamienghemhen",
      color: "#4267B2"
    },
    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      url: "https://linkedin.com/in/judeamienghemhen",
      color: "#0077B5"
    },
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/judeamienghemhen",
      color: "#333333"
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://instagram.com/judeamienghemhen",
      color: "#E4405F"
    },
    {
      name: "Bluesky",
      icon: FaCloud,
      url: "https://bsky.app/profile/judeamienghemhen",
      color: "#00A8E8"
    }
  ];

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
    }
  };

  return (
    <motion.section 
      className={`social-media-section ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      <div className="social-media-section__container">
        {showHeader && (
          <motion.div className="social-media-section__header" variants={fadeInUp}>
            <h2 className="social-media-section__title">Connect with me</h2>
            <p className="social-media-section__subtitle">Let's stay connected on social media</p>
          </motion.div>
        )}
        
        <motion.div className="social-media-section__links" variants={staggerContainer}>
          {socialMediaLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-media-section__link"
                variants={cardVariant}
                whileHover={{ 
                  y: -8, 
                  scale: 1.1,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
                style={{ '--social-color': social.color }}
              >
                <IconComponent className="social-media-section__icon" />
                <span className="social-media-section__name">{social.name}</span>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SocialMediaSection;
