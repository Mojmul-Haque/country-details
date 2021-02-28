import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './Componensts/Country/country';

function App() {
  const [countries, setCountries] =useState([])
  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
    .catch(eror => console.log(eror))
  },[])
  return (
    <div className="App">
     <h3>country loaded: {countries.length}</h3>
     
       {
         countries.map(country => <Country>{country.name}</Country>)
       }
     
    </div>
  );
}

export default App;
