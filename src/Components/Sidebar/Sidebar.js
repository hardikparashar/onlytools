import React from 'react';
import './Sidebar.scss';
var logo = require("../../assets/logo.png")

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
    <div className={'sidebar'}>
              <img src={logo} height="200px" width="200px"/>
      <ul style={{padding:"10px"}}>
        {navigationItems.map((item, index) => (
          <li key={index}>
            <a onClick={() => handleOptionClick(item.icon)} className={`${item.icon === activeOption ? 'active' :''} ${'navigationItem'}`}
            >
              <i className={`${'icon'}`}>{item.name}</i>
              <span className={'tooltip'}>{item.tooltip}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;