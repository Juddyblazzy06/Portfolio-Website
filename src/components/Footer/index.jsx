import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram, FaCloud, FaEnvelope, FaTimes } from "react-icons/fa";
import "./styles.scss";

const Footer = () => {
  // Social media links with updated X icon
  const socialMediaLinks = [
    {
      name: "X (Twitter)",
      icon: FaTimes,
      url: "https://twitter.com/judeamienghemhen",
      color: "#000000"
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

  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="footer__container">
        <div className="footer__content">
          {/* Left side - Email contact */}
          <motion.div 
            className="footer__contact"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FaEnvelope className="footer__email-icon" />
            <a 
              href="mailto:amiensjude@gmail.com" 
              className="footer__email"
            >
              amiensjude@gmail.com
            </a>
          </motion.div>

          {/* Right side - Social icons */}
          <motion.div 
            className="footer__social"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {socialMediaLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  whileHover={{ 
                    scale: 1.2,
                    y: -3,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  style={{ '--social-color': social.color }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
                >
                  <IconComponent className="footer__social-icon" />
                </motion.a>
              );
            })}
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div 
          className="footer__copyright"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p>&copy; {currentYear} Jude Amienghemhen. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
