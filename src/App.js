import './App.css';

import { Routes, Route } from "react-router-dom";
import Home from './views/Home';
import Navbar from "./components/Navbar";
import Plans from './views/Plans';
import Cart from './views/Cart';
import { useEffect } from 'react';
import { CartProvider } from './contexts/CartContext';


const initialize_cart = () => {
  localStorage.setItem("cartItems", [])
}

function App() {
  useEffect(() => {
    initialize_cart()
  })

  return (
    <div className="App">
      <CartProvider>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
