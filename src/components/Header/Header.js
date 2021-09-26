import React, { } from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGuitar, faHandPeace } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
   
    const icon1 = <FontAwesomeIcon icon={faGuitar} />
    const icon2 = <FontAwesomeIcon icon={faHandPeace} />
    
    return (
            <div className="header-style">
              <h1> {icon1} Let's Rock {icon2}</h1>
              <p>Choose bands for  Concert</p>
              <h3>Total Budget : 50k</h3>
            </div>
    );
};

export default Header;