import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
import Select from "./components/Select/Select";

function App() {
  const [laptops, setLaptops] = useState([]);
  const [select, setSelect] = useState([])
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setLaptops(data));
  }, []);

  const handleAddToCart = (laptop) =>{
    const newSelect = [...select, laptop];
    setSelect(newSelect);
}
  return (
    <div>
      <Navbar />
      <div className="shop-container">
        <div className="products-container">
        {
          laptops.map(laptop => (
          <Card laptop={laptop} />))
        }
        </div>
        <div className="cart-container">
          <Select select={select} />
        </div>
      </div>
    </div>
  );
}

export default App;
