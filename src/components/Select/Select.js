import React from 'react';
import './Select.css'

const Select = ({select}) => {
    // console.log(select);
    // const {name} = select
    // let name = ''
    // for (const laptop of select) {
    //     // console.log(laptop);
    //     name = name + laptop.name
    // }
    return (
        <div className='cart'>
            <h2>Selected  Brands : {select.length}</h2>
            {
                select.map(laptop => (
                    <div className="select-items">
                      <img src={laptop.img} alt="" />
                        <h4>{laptop.name}</h4>
                    </div>
                )
                    )
                }
            <div className="select-btn">
            <button>Choose 1 for me</button>
            <button>Choose Again</button>
            </div>
        </div>
    );
};

export default Select;