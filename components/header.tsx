import React from "react";
import '../css/header.css'
import CartItems from "./CartItems";
import { FoodItem } from "./FoodData";
import { useState } from "react";

type HeaderProps = {
  title: string;
   cartItems: FoodItem[];
};

const Header: React.FC<HeaderProps> = ({ title, cartItems }) => {
    const [showCart, setShowCart] = useState(false);
        
    
     
      const toggleCart = () => {
  setShowCart(!showCart);
};
  return (
    <>
     <header className="header">
      <h1 className="title">{title}</h1>
      <div className="cart" onClick={toggleCart}>
        🛒 Cart
      </div>
    </header>
     {showCart && <CartItems  items={cartItems} />}
 </>
  );
};

export default Header;
