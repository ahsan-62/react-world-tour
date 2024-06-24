import { useState } from "react";
import { useEffect } from "react";
import Country from "../Country/Country";
import './Countries.css'


const Countries = () => {

  const[countries,setCountries]=useState([]);

  const [visitedCountries,setVisitedCountries]=useState([]);

  const [visitedFlags,setVisitedFlags]=useState([]);

  const handleVisitedFlags=(country)=>{
    console.log('clicks');
    const newVisitedFlags=[...visitedFlags,country];
    setVisitedFlags(newVisitedFlags);
  }

  const handleVisitedCountry=(country)=>{
    // console.log('Clicked');
    // console.log(country);
    const newVisitedArray=[...visitedCountries,country];
    setVisitedCountries(newVisitedArray); 
    
}

  
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))   

    },[])
    return (
        <div>
            <h1>Countries:{countries.length}</h1>
            <h4>Visited Countries:{visitedCountries.length}</h4>
            <ul>
                {visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)}
            </ul>
            <div>
                {visitedFlags.map(country =><img className='visited-flag' key={country.cca3} src={country.flags.png} alt="" />)}
                
                

            </div>
           



            <div className='country-container'>
            {
                countries.map(country => 
                <Country handleVisitedCountry={handleVisitedCountry} handleVisitedFlags={handleVisitedFlags}  country={country} key={country.cca3} ></Country>)
            }
            </div>
            
        </div>
    );
};

export default Countries;