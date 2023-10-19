import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = ({ activeOption, setActiveOption }) => {
  const navigationItems = [
    {
      name:'Word Counter',
      icon: 'wordCounter',
      iconClass:'fa-light fa-file-word',
      tooltip: 'wordCounter',
    },
    {
      name:'Json Lint',
      icon: 'jsonLint',
      tooltip: 'jsonLint',
    },
  ];

  const handleOptionClick = (option) => {
    setActiveOption(option);
    // Add functionality to switch between Word Counter and JSON Lint
    // For now, we'll just log the selected option
    console.log("Selected option:", option);
  };
  return (
    <div className={styles.sidebar}>
      <ul style={{padding:"10px"}}>
        {navigationItems.map((item, index) => (
          <li key={index}>
            <a onClick={() => handleOptionClick(item.icon)} className={`${item.icon === activeOption ? styles.active :''} ${styles.navigationItem}`}
            >
              <i className={`${styles.icon}`}>{item.name}</i>
              <span className={styles.tooltip}>{item.tooltip}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;