import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemove} from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
import Select from "./components/Select/Select";
import Question from "./components/Question/Question";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');
function App() {

  const [laptops, setLaptops] = useState([]);
  const [select, setSelect] = useState([])
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isDisabled, setDisabled] = useState(false);
  // console.log(select);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setLaptops(data));
  }, []);

  const handleAddToCart = (laptop) =>{
    // console.log(laptop);

    const newSelect = [...select, laptop];
    setSelect(newSelect);
    // console.log(select.length);
    if (select.length === 3) {
      setDisabled(true);
    }
  }
const resetState =()=>{
  setSelect([])
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
           isDisabled ={isDisabled}
          />))
        }
        </div>
        <div className="cart-container">
          <Select select={select}  openModal={openModal} resetState={resetState}/>
        </div>
      </div>
      <Question/>



      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        
      >
      <button onClick={closeModal}><FontAwesomeIcon icon={faRemove}></FontAwesomeIcon></button>
        <h1>Lucky Brand</h1>
        <div className="lucky-cart">
          {
            select.map(lap => (
              <div key={lap.id} className="select-items">
                      <img src={lap.img} alt="" />
                        <h4>{lap.name}</h4>
                    </div>
            ))
          }
        </div>
        </Modal>

    </div>
    
  );
}

export default App;
