import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import {useSelector, useDispatch} from 'react-redux'
import {changeMainFilters} from '../Actions'
import BasketPopup from './BasketDisplay'
import MemeGenerator from './RandomMeme'
import './CSS/Header.css';
import logo from '../Images/Lartsy-01.png';
import Account from '../Images/account-icon.png';

const Header = (props) => {
  const basketItems = useSelector(state => state.basket.arr);
  const dispatch = useDispatch();
  
      return (
      <div>
      <ul id = 'navbar'>
          <div className = 'navbar-segment-left'>
          <Link to = '../'><img id = 'logo' src = {logo} alt = 'Lartsy logo'></img></Link>
          <Link to = './shop' onClick = {() => dispatch(changeMainFilters('cat'))}><li>Cats</li></Link>
            <Link to = './shop' onClick = {() => dispatch(changeMainFilters('dog'))}><li>Dogs</li></Link>
            <Link to = './shop' onClick = {() => dispatch(changeMainFilters('all'))}><li>Shop</li></Link>
        </div>
        <div className = 'navbar-segment-right'>
            <MemeGenerator />
            <img src = {Account} alt = 'account'></img>
            <div>
              <span id = 'basket-size'>
                <BasketPopup />
                ({basketItems.length})
              </span>
            </div>
        </div>
      </ul>
      </div>
    );
  };

  
  
  export default Header;