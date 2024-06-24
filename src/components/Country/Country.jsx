import { useState } from 'react';
import './Country.css'
const Country = ({country}) => {
    console.log(country);
    const {name,flags,population,area}=country;

    const [visited,setVisited]=useState(false);

    const handleClick=()=>{
        setVisited(!visited);
    }
    
    return (
        <div className='country'>
            <h3>Name:{name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population:{population}</p>
            <p>Area:{area}</p>
            <button onClick={handleClick} type="button">{visited ? "Visited" : "Going"}</button>
            
            {visited?'Visited':'Not Visited'}

        </div>
    );
};

export default Country;