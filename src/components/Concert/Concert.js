import React, { useEffect, useState } from 'react';

import Bands from '../Bands/Bands';
import './Consert.css';
import Cart from '../Cart/Cart';
const Concert = () => {
    
    const [bands, setBands] = useState([]);
    const[cart, setCart]=useState([]);

    useEffect(()=>{
        fetch('./bands.JSON')
        .then(res => res.json())
        .then(data =>setBands(data));
    },[]);

    const handleAddToCart = (band)=>{
        const newCart =[...cart,band];
        setCart(newCart);
    }

    return (
        <div>
             <div>
        <div className="cart-container">
            <Cart cart={cart}></Cart>
        </div>
        </div>
        <div className="band-container">
            {
                bands.map(band =><Bands 
                key={band.name}
                band={band}
                handleAddToCart={handleAddToCart}
                >
                
                </Bands> )
            }
        </div>
       
        </div>
    );
};

export default Concert;