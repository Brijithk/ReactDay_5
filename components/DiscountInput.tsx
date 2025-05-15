import { useState,useContext } from "react";
import { UserContext } from "./CreateContext";
import '../css/DisccountInput.css'

const DiscountInput: React.FC = () => {

    const { setDiscount } = useContext(UserContext);
  const [inputValue, setInputValue] = useState(0);

 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(Number(e.target.value));  // update local input state only
  };

  const handleApplyDiscount = () => {
    setDiscount(inputValue);
  
  };

  return (
   <div className="discount-container">
  <label className="discount-label">Discount % :</label>
  <input
    type="number"
  value={inputValue}
    onChange={handleChange}
    placeholder="0"
    className="discount-input"
  />
  <br></br>
  <button className="discount-button" onClick={handleApplyDiscount}>
    Apply Discount
  </button>
</div>
  );
};

export default DiscountInput;