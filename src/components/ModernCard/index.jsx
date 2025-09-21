import React from 'react';
import { motion } from 'framer-motion';
import './styles.scss';

const ModernCard = ({ 
  children, 
  className = '', 
  hover = true,
  glassmorphism = true,
  ...props 
}) => {
  return (
    <motion.div
      className={`modern-card ${glassmorphism ? 'glassmorphism' : ''} ${className}`}
      whileHover={hover ? { 
        y: -5, 
        scale: 1.02,
        transition: { duration: 0.2 }
      } : {}}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ModernCard;
