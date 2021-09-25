import React from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGuitar, faHandPeace ,faShoppingCart} from '@fortawesome/free-solid-svg-icons'
const Header = () => {
    const icon1 = <FontAwesomeIcon icon={faGuitar} />
    const icon2 = <FontAwesomeIcon icon={faHandPeace} />
    const icon3 = <FontAwesomeIcon icon={faShoppingCart} />
    return (
       <div className="container">
            <div  className="header-style">
            <div>
            <h1> {icon1} Let's Rock {icon2}</h1>
            <p>Chose bands for your concert</p>
            <h3>Total Budget : 50k</h3>
            </div>
        </div>
          <div className="cart-container">
              <h2>{icon3} Cart</h2>
           <h4>Band added : 0 </h4>  
           <h4>Total Cost : $ <span>0</span></h4>  
        </div>
       </div>
    );
};

export default Header;