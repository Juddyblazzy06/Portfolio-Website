import React, { useState, useRef, useEffect } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from '@emailjs/browser';
import AnimatedSection from "../../components/AnimatedSection";
import ModernCard from "../../components/ModernCard";
import { FaEnvelope, FaPhone, FaTwitter, FaSpinner } from "react-icons/fa";
import Footer from "../../components/Footer";
import "./styles.scss";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [validationErrors, setValidationErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Set document title for contact page
  useEffect(() => {
    document.title = "Jude - Contact Me";
  }, []);

  // Contact information with clickable links
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "dev.jude@gmail.com",
      link: "mailto:dev.jude@gmail.com"
    },
    {
      icon: <FaPhone />,
      label: "Phone",
      value: "+2348085852828",
      link: "tel:+2348085852828"
    },
    {
      icon: <FaTwitter />,
      label: "Twitter",
      value: "@JudeAmienghemhen",
      link: "https://twitter.com/judeamienghemhen"
    }
  ];

  // Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }
    
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear validation error when user starts typing
    if (validationErrors[name]) {
      setValidationErrors({
        ...validationErrors,
        [name]: ''
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);
    
    // Validate form before submission
    const errors = validateForm();
    setValidationErrors(errors);
    
    if (Object.keys(errors).length > 0) {
      return; // Don't submit if there are validation errors
    }
    
    setIsSubmitting(true);

    try {
      // Check if EmailJS environment variables are configured
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing. Please check your environment variables.');
      }

      // EmailJS credentials from environment variables for security
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        form.current,
        publicKey
      );
      
      console.log('Email sent successfully:', result.text);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setValidationErrors({});
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Error Message Component
  const ErrorMessage = ({ error }) => {
    if (!error) return null;
    
    return (
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="field-error"
        role="alert"
        aria-live="polite"
      >
        {error}
      </motion.div>
    );
  };

  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="/contacts"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact__content">
        {/* Centered Header Section */}
        <AnimatedSection direction="up" delay={0.2}>
          <div className="contact__header">
            <h3 className="contact__header-title">Want to reach out?</h3>
            <p className="contact__header-message">
              <strong>I'm interested in working on ambitious projects with positive people and goal-oriented companies. If you have another request or question, don't hesitate to contact me.</strong>
            </p>
          </div>
        </AnimatedSection>
        
        {/* Contact Info and Form Grid */}
        <div className="contact__grid">
          <AnimatedSection direction="left" delay={0.4}>
            <ModernCard className="contact__info-card" glassmorphism={true}>
              <h4>Message me</h4>
              <div className="contact__info-list">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="contact__info-item"
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="contact__info-icon">
                      {info.icon}
                    </div>
                    <div className="contact__info-content">
                      <span className="contact__info-label">{info.label}</span>
                      <span className="contact__info-value">{info.value}</span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </ModernCard>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.6}>
            <ModernCard className="contact__form-card">
              <h4>Send me a message</h4>
              <form ref={form} onSubmit={handleSubmit} className="contact__content__form">
                <div className="contact__content__form__controlswrapper">
                  <div className="form-group">
                    <motion.label 
                      htmlFor="name" 
                      className="nameLabel"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                    >
                      Name *
                    </motion.label>
                    <input
                      id="name"
                      required
                      name="name"
                      className={`inputName ${validationErrors.name ? 'error' : ''}`}
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      aria-label="Full name"
                      aria-describedby={validationErrors.name ? "name-error" : undefined}
                      aria-invalid={!!validationErrors.name}
                    />
                    <AnimatePresence>
                      {validationErrors.name && (
                        <ErrorMessage error={validationErrors.name} />
                      )}
                    </AnimatePresence>
                  </div>
                  <div className="form-group">
                    <motion.label 
                      htmlFor="email" 
                      className="emailLabel"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.0 }}
                    >
                      Email *
                    </motion.label>
                    <input
                      id="email"
                      required
                      name="email"
                      className={`inputEmail ${validationErrors.email ? 'error' : ''}`}
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      aria-label="Email address"
                      aria-describedby={validationErrors.email ? "email-error" : undefined}
                      aria-invalid={!!validationErrors.email}
                    />
                    <AnimatePresence>
                      {validationErrors.email && (
                        <ErrorMessage error={validationErrors.email} />
                      )}
                    </AnimatePresence>
                  </div>
                  <div className="form-group full-width">
                    <motion.label 
                      htmlFor="message" 
                      className="descriptionLabel"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.2 }}
                    >
                      Message *
                    </motion.label>
                    <textarea
                      id="message"
                      required
                      name="message"
                      className={`inputDescription ${validationErrors.message ? 'error' : ''}`}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or question..."
                      aria-label="Your message"
                      aria-describedby={validationErrors.message ? "message-error" : undefined}
                      aria-invalid={!!validationErrors.message}
                      minLength="10"
                      style={{ height: '190px', minHeight: '190px' }}
                    />
                    <AnimatePresence>
                      {validationErrors.message && (
                        <ErrorMessage error={validationErrors.message} />
                      )}
                    </AnimatePresence>
                  </div>
                </div>
                
                {/* Status Messages Container - Fixed Height */}
                <div className="status-messages-container">
                  <AnimatePresence>
                    {submitStatus === 'success' && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.9 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="success-message"
                        role="alert"
                        aria-live="polite"
                      >
                        ✅ Thank you! Your message has been sent successfully.
                      </motion.div>
                    )}
                    
                    {submitStatus === 'error' && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.9 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="error-message"
                        role="alert"
                        aria-live="polite"
                      >
                        ⚠️ Sorry, there was an error sending your message. Please try again.
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <motion.button 
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={!isSubmitting ? { 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(255, 221, 64, 0.4)",
                    transition: { duration: 0.2 }
                  } : {}}
                  whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                  className={`contact__submit-button ${isSubmitting ? 'submitting' : ''}`}
                  aria-describedby="submit-status"
                >
                  {isSubmitting ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="button-content"
                    >
                      <FaSpinner className="spinner" />
                      Sending...
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="button-content"
                    >
                      Send Message
                    </motion.div>
                  )}
                </motion.button>
              </form>
            </ModernCard>
          </AnimatedSection>
        </div>
      </div>
      
      <Footer />
    </section>
  );
};
export default Contact;
