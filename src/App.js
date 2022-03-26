import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
import Select from "./components/Select/Select";

function App() {
  const [laptops, setLaptops] = useState([]);
  const [select, setSelect] = useState([])
  console.log(select);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setLaptops(data));
  }, []);

  const handleAddToCart = (laptop) =>{
    // console.log(laptop);
    const newSelect = [...select, laptop];
    setSelect(newSelect);
}
  return (
    <div>
      <Navbar />
      <h1>Choose 4 Brands</h1>
      <div className="shop-container">
        <div className="products-container">
        {
          laptops.map(laptop => (
          <Card key={laptop.id}
           laptop={laptop}
           handleAddToCart={handleAddToCart}
          />))
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
