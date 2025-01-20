import React, { useState, useEffect } from 'react';

const ThemeToggleButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check the user's preference from localStorage or default to light mode
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Function to toggle the theme
  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button onClick={toggleTheme} className="p-2 bg-gray-200 rounded-full">
      {isDarkMode ? '🌙' : '🌞'}
    </button>
  );
};

export default ThemeToggleButton;
