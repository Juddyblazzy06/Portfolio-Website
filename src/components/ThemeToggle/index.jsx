import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import './styles.scss';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <div className={`theme-toggle__icon ${theme === 'dark' ? 'active' : ''}`}>
        <FaSun className="sun-icon" />
        <FaMoon className="moon-icon" />
      </div>
    </button>
  );
};

export default ThemeToggle;
