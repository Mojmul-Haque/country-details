import React from 'react'

const Cart = props => {
  console.log(props.cart)
  let cart = props.cart
  let totalPopulation = 0
  // for (let i = 0; i < cart.length; i++) {
  //   const country = cart[i]
  //   totalPopulation = totalPopulation+country.population;
  //   console.log(country, 'country in loop')
  //   console.log('totalpopulation =',totalPopulation)
    
  // }

  totalPopulation  =cart.reduce((sum,country)=> sum+country.population,0)

  return (
    <div>
      <h3>TotalPopulation: {totalPopulation}</h3>
    </div>
  )
}

export default Cart
