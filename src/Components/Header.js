import React from "react";
import {useSelector} from 'react-redux'
import BasketPopup from './BasketDisplay'
import MemeGenerator from './RandomMeme'
import './CSS/Header.css';
import logo from '../Images/Lartsy-01.png';
import Account from '../Images/account-icon.png';

const Header = (props) => {
  const basketItems = useSelector(state => state.basket.arr);
  
      return (
      <div>
      <ul id = 'navbar'>
          <div className = 'navbar-segment-left'>
          <a href = '../'><img id = 'logo' src = {logo} alt = 'Lartsy logo'></img></a>
          <a href = './shop#cat'><li>Cats</li></a>
            <a href = './shop#dog'><li>Dogs</li></a>
            <a href = './shop#all'><li>Shop</li></a>
        </div>
        <div className = 'navbar-segment-right'>
            <MemeGenerator />
            <img src = {Account} alt = 'account'></img>
            <div>
            <span id = 'basket-size'>
              <BasketPopup />
              ({basketItems.length})</span>
            </div>
        </div>
      </ul>
      </div>
    );
  };

  
  
  export default Header;