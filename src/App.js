import React from 'react';
import { CartProvider } from './CartContext';
import FoodList from './FoodList';
import Cart from './Cart';
import './index.css';

const App = () => {
  return (
    <CartProvider>
      <div className="app">
        <header>
          <h1>Food Ordering App</h1>
          <Cart /> {/* Cart is displayed in the top right */}
        </header>
        <FoodList />
      </div>
    </CartProvider>
  );
};

export default App;