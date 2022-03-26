import React from 'react';
import './Card.css'

const Card = ({laptop}) => {
    console.log(laptop);
    const {name, img, price, ratings} = laptop
    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Ratings: {ratings} stars</small></p>
            </div>
            {/* <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button> */}
        </div>
    );
};

export default Card;