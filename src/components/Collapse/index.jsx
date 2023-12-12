import React, { useState } from 'react';
import icon from '../../assets/fleche.svg'
import './collapse.css'

function Collapse({ title, content}) {
  const [activeState, setActiveState] = useState(false);

  const toggleCollapse = () => {
    setActiveState(!activeState);
  };

  return (
    <div className={`collapse ${activeState ? 'active' : ''} `}>
      <div className="collapse-button" onClick={toggleCollapse}>
        {title}
        <img src={icon} className={`collapse-icon ${activeState ? 'rotate' : ''}`} alt="collapse icon" />
      </div>
      <div className={`collapse-content ${activeState ? 'active' : ''}`}>
        {content}
      </div>
    </div>
  );
}

export default Collapse;
