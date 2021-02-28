// import logo from './logo.svg'
import './App.css'
import { useEffect, useState } from 'react'
import Country from './Componensts/Country/Country'
import Cart from './Componensts/cart/Cart'

function App () {
  const [countries, setCountries] = useState([])
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setCountries(data))
      .catch(eror => console.log(eror))
  }, [])

  const [cart, setCart] = useState([])

  const handleAddCountry = country => {
    // console.log('clicked me', country);
    const newCart = [...cart, country]
    setCart(newCart)
  }

  return (
    <div className='App'>
      <h3>country loaded: {countries.length}</h3>
      <h3>Country add: {cart.length}</h3>
      <Cart cart={cart}></Cart>
      {countries.map(country => (
        <Country
          country={country}
          handleAddCountry={handleAddCountry}
          key={country.name}
        ></Country>
      ))}
    </div>
  )
}

export default App
