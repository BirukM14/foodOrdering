import React from 'react';
import { useCart } from './CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((food) => (
            <li key={food.id}>
              {food.name} - ${food.price.toFixed(2)}
              <button onClick={() => removeFromCart(food.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${cart.reduce((total, food) => total + food.price, 0).toFixed(2)}</h3>
    </div>
  );
};

export default Cart;