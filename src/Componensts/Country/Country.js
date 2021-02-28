import React from 'react';
import './country.css';

const Country = props => {
  // console.log(props.country)
  const { name, population, area, flag } = props.country
  const handleAddCountry = props.handleAddCountry
  return (
    <div className="country">
      <div>
        <img src={flag} alt={flag} />
      </div>
      <div>
        <h3>This is {name}</h3>
        <h3>Area: {area}</h3>
        <h3>Populations: {population}</h3>
        <button onClick={()=>handleAddCountry(props.country)}>Add Country</button>
      </div>
    </div>
  )
}

export default Country
