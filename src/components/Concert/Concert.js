import React, { useEffect, useState } from 'react';
import Bands from '../Bands/Bands';
import './Consert.css';
const Concert = () => {
    const [bands, setBands] = useState([]);
    useEffect(()=>{
        fetch('./bands.JSON')
        .then(res => res.json())
        .then(data =>setBands(data));
    },[]);

    return (
        <div className="band-container">
            {
                bands.map(band =><Bands 
                key={band.name}
                band={band}>
                
                </Bands> )
            }
        </div>
    );
};

export default Concert;