import React, { useState } from "react";
import './CSS/Header.css';
import logo from '../Images/Lartsy-01.png';
import Account from '../Images/account-icon.png';
import Basket from '../Images/basket.png';
import Search from '../Images/search.png';


const Header = () => {
  const [displayBasket , setDisplayBasket] = useState(false)
    return (
      <ul id = 'navbar'>
          <div className = 'navbar-segment-left'>
          <a href = '../'><img id = 'logo' src = {logo} alt = 'Lartsy logo'></img></a>
          <a href = './shop'><li>Cats</li></a>
            <a href = './shop'><li>Dogs</li></a>
            <a href = './shop'><li>Shop</li></a>
        </div>
        <div className = 'navbar-segment-right'>
            <input type = 'text' id = "search" placeholder = 'Search'></input>
            <img src = {Search} alt = 'search'></img>
            <img src = {Account} alt = 'account'></img>
            <img src = {Basket} alt = 'basket' onClick = {() => setDisplayBasket(!displayBasket)}></img>
            <div id = 'basket-container' className = {displayBasket ? null : 'hidden'}></div>
        </div>
      </ul>
    );
  };
  
  export default Header;