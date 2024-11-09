import React from 'react';
import { useCart } from './CartContext';

const foodData = [
  { id: 1, name: 'Pizza', price: 12.99 },
  { id: 2, name: 'Burger', price: 8.99 },
  { id: 3, name: 'Pasta', price: 10.99 },
  { id: 4, name: 'Salad', price: 6.99 },
];

const FoodList = () => {
  const { addToCart } = useCart();

  return (
    <div>
      <h2>Food Menu</h2>
      <div className="food-list">
        {foodData.map((food) => (
          <div key={food.id} className="food-item">
            <h3>{food.name}</h3>
            <p>${food.price.toFixed(2)}</p>
            <button onClick={() => addToCart(food)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodList;