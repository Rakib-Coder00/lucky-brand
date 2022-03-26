import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash} from '@fortawesome/free-solid-svg-icons';
import './Select.css'

const Select = (props) => {
    const {select, openModal, resetState} = props
    // const random = Math.floor(Math.random() * select.length);
    // console.log(select);
    // console.log(select[random]);
    // console.log(random);
    return (
        <div className='cart'>
            <h2>Selected  Brands : {select.length}</h2>
            {
                select.map(laptop => (
                    <div key={laptop.id} className="select-items">
                      <img src={laptop.img} alt="" />
                        <h4>{laptop.name}</h4>
                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                    </div>
                )
                    )
                }
            <div className="select-btn">
            <button onClick={()=>openModal(select)}>Choose 1 for me</button>
            <button onClick={resetState}>Choose Again</button>
            </div>
        </div>
    );
};

export default Select;