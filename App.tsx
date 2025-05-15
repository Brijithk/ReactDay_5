
import './App.css';
import Header from './components/header';
import Menu from './components/Menu';
import { FoodItem } from './components/FoodData';
import { useState ,useContext} from 'react';
import DiscountInput from './components/DiscountInput';
import ReactDOM from "react-dom/client";
import { UserContext } from './components/CreateContext';
import { useEffect } from 'react';

function App() {
  const [cartItems, setCartItems] = useState<FoodItem[]>([]);
 
   const [discount, setDiscount] = useState(0);
     const [menuKey, setMenuKey] = useState(0);
       const applyDiscount = (value: number) => {
    setDiscount(value);
    setMenuKey(prev => prev + 1); // force re-render of Menu

  };

  return (
    <>
     <UserContext.Provider value={{ discount,setDiscount: applyDiscount }}>
     <Header title="My Restaurant Website" cartItems={cartItems}  />
      <Menu cartItems={cartItems} setCartItems={setCartItems}  key={menuKey}/>
      <DiscountInput />
       </UserContext.Provider>
    </>
  );
}

export default App;
