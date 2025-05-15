// Menu.tsx
import React from "react";
import { foodMenu } from "./FoodData";
import "../css/Menu.css";
import { FoodItem } from "./FoodData";
import { useState,useContext } from "react";
import { UserContext } from "./CreateContext";

type MenuProps = {
  cartItems: FoodItem[];
  setCartItems: React.Dispatch<React.SetStateAction<FoodItem[]>>;
};


const Menu: React.FC<MenuProps> = ({ cartItems, setCartItems }) => {
    const { discount } = useContext(UserContext);
     const calculateDiscountedPrice = (price: number) => {
    return price - price * (discount / 100);
  };
  const handleAddToCart = (item: FoodItem) => {
    setCartItems([...cartItems, item]);
  };
  return (
    <div className="menu-container">
      {foodMenu.map((item) => (
       <div key={item.id} className="food-card" onClick={() => handleAddToCart(item)}>
  <img src={item.imageSrc} alt={item.name} className="food-image" />
  <h3 className="food-name">{item.name}</h3>
 <p className="food-price">
            ₹{calculateDiscountedPrice(item.price).toFixed(2)}
          </p>
</div>
      ))}
    </div>
  );
};

export default Menu;
