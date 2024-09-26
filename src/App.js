import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';  

function App() {
  const [cartItems, setCartItems] = useState([]); 

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]); 
  };

  return (
    <div className="App">
      <Header />
      <ProductList addToCart={addToCart} /> {/* Pass addToCart to ProductList */}
      <Cart cartItems={cartItems} /> {/* Show Cart component */}
      <Footer />
    </div>
  );
}

export default App;
