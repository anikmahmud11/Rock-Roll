import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart,faUser,faDollarSign} from '@fortawesome/free-solid-svg-icons';
import './Cart.css';
// import Bands from '../Bands/Bands';
const Cart = (props) => {
    // console.log(props.cart);
    const icon1 = <FontAwesomeIcon icon={faShoppingCart} />
    const icon2 = <FontAwesomeIcon icon={faUser} />
    const icon3 = <FontAwesomeIcon icon={faDollarSign} />
    const{cart}=props;
    // console.log(props.cart);
    let total = 0 ;
    for(const band of cart){
        total = total+band.cost;       
     }   
     const list=[];
     for(const band of cart){
         list.push(<li>{band.name}</li>)
     }
        
     
    return (
        <div>
             <h2>{icon1} Cart</h2>
           <h4>{icon2} Band added : {props.cart.length} </h4>  
           <h4>{icon3} Total Cost : $ <span>{total}</span></h4>
           <div className="band-names">{list}</div> 
           <p></p>
        </div>
    );
};

export default Cart;