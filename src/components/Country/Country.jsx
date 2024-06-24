import { useState } from 'react';
import './Country.css'
const Country = ({country,handleVisitedCountry,handleVisitedFlags}) => {
    // console.log(country);
    const {name,flags,population,area}=country;

    const [visited,setVisited]=useState(false);

    const handleClick=()=>{
        setVisited(!visited);
    }

    const handleVisited=()=>{
        handleVisitedCountry(country);
    }
    
    return (
        <div className={`${visited?'country-visited':'country'}`}>
            <h3>Name:{name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population:{population}</p>
            <p>Area:{area}</p>
            <button onClick={handleVisited} type="button">Mark Visited</button>
            <br />
            <button onClick={()=>handleVisitedFlags(country)} type="button">Add Visited Flag</button>
            <button onClick={handleClick} type="button">{visited ? "Visited" : "Going"}</button>
            
            {visited?'Visited':'Not Visited'}

        </div>
    );
};

export default Country;