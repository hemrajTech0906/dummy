import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Only import useDispatch once
import './carts.css';

import { RootState } from '../Redux/Store';
import { removeItem } from '../Redux/CartSlice';
//import { IUser } from '../models/Userapi';

const Carts:React.FC = () => {
  // const cartItems = useSelector((state) => state.items:);
  // ------------> inside the store name is {items}we have the store data
  const cartItems = useSelector((state: RootState) => state.items);
  const dispatch = useDispatch(); // Keep only one import



// no need to give the IUser becoz sigle data passing as an argument 
//i.e why instead of 
  const removeHandler = (id:number) => {
    dispatch(removeItem( id ));
  };

  //const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="cart-container">
      {/* <h2>Total Quantity: {totalCount}</h2> */}
      <div>
        {cartItems.items.map((item) => (
          <div key={item.id} className="cart-item">
            <img
              src={item.image}
              alt={`img-${item.id}`}
              className="cart-image"
            />
            <div className="cart-details">
              <h5>{item.title}</h5>
              <h5>${item.price}</h5>
              {/* <h1>Quantity: {item.quantity}</h1> */}
              <button className="medium-red-button" onClick={() => removeHandler(item.id)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carts;
