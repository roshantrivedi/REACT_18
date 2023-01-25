import {title} from '../constants/constants.js';
import { useSelector } from 'react-redux';

function HeadingComponent() {

  const cartItems = useSelector( (store) => store.cart.value);
  
  const count = cartItems.length;
  return (
    <>
      <h1>{title}</h1>
      <span className='cartItems'>Items in cart: {count}</span>
    </>
      
  );
}

export default HeadingComponent;