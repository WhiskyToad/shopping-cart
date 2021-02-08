import React, {useState} from "react";
import Popup from 'reactjs-popup';
import {useSelector, useDispatch} from 'react-redux'
import Basket from '../Images/basket.png'
import {removeBasket, memeDisplay} from '../Actions';


const BasketPopup = () => {
  const dispatch = useDispatch();
  const memeValue = useSelector(state => state.memeDisplay);
  const basketItems = useSelector(state => state.basket.arr);
  let total = 0
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    function changeBasket(choice){
      dispatch(removeBasket(choice))
    }
    
    let basketCreator = basketItems.map((item, id) => {
        total += item.price;
        return <div className = 'basket-item' key = {id}>
          <div>
            <img src ={item.src} alt = {item.name}></img>
            </div>
            <div className ='basket-column'>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <button className = 'basket-button' onClick ={() => changeBasket(id)}>Remove</button>
          </div>
          <div className ='basket-column'>
            <h2>Price</h2>
            <h3>{item.price}</h3>
          </div>
          </div>
    });

    function openBasket(){
      if (memeValue){
        dispatch(memeDisplay('HIDE-MEME'))
      }
      setOpen(o => !o);
    }

    return (
    <div>
      <img src = {Basket} alt = 'basket'onClick={() => openBasket()}></img>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
      <div id = 'basket-container'>
              {basketCreator}
              <div id = 'checkout-container'>
                <button className = 'basket-button' onClick={closeModal}>Cancel</button>
                <button className = 'basket-button' onClick={closeModal}>Checkout</button>
                <h2>Total: £{total.toFixed(2)}</h2>
              </div>
            </div>
      </Popup>
    </div>

    )
    
  }

  export default BasketPopup