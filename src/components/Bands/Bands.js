import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons'
import { faAddressBook ,faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Bands.css';
import Rating from 'react-rating';
const Bands = (props) => {
    const {image, name, type, country, cost, rating}=props.band;
    const icon1 = <FontAwesomeIcon icon={faShare} />
    const icon2 = <FontAwesomeIcon icon={faAddressBook} />
    const icon3 = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="band">
            <img src={image} alt="" />
            <h4>Name : {name}</h4>
            <h4>Band-Type : {type}</h4>
            <h4>Origin : {country}</h4>
            <h4>Salary : {cost}</h4>
            <h4>Rating : <Rating 
            initialRating={rating}
            emptySymbol="far fa-star"
            fullSymbol="fas fa-star"
            readonly></Rating></h4>
            <button className="add-to-cart-btn">{icon3} Add to Cart</button>
            <br />
            <br />

            <div>
               
            {icon1}   {icon2} 
           
           </div>
        </div>
    );
};

export default Bands;