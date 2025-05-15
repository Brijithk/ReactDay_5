import { FoodItem } from "./FoodData";
import '../css/CartItems.css'
import { useContext } from "react";
import { UserContext } from "./CreateContext";


type CartItemsProps = {
  items: FoodItem[];
};

const CartItems: React.FC<CartItemsProps> = ({ items }) => {
      const { discount } = useContext(UserContext);
     const calculateDiscountedPrice = (price: number) => {
    return price - price * (discount / 100);
  };
  return (
    <div>
      <h2>Cart Items</h2>
      {items.map(item => (
        <div key={item.id} className="food-card" >
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

export default CartItems;

