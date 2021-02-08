/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import {addToBasket, changeMainFilters} from '../Actions'
import {initialState} from '../Reducers/basket'
import Header from './Header';
import Footer from './Footer';
import './CSS/Shop.css';
import Checked from '../Images/checked.png';
import Cat from '../Images/cat.png';
import Dog from '../Images/dog.png';
import Hat from '../Images/hat.png';
import Top from '../Images/top.png';
import Glasses from '../Images/glasses.png'
import Data from './Data'

const Shop = (props) => {
  const mainFilter = useSelector(state => state.mainFilter);
  const subFilter = useSelector(state => state.subFilter);
  const dispatch = useDispatch();

    let Catalogue = Data.map((item, id) => {
      let display ='display-card'
      let pageLink = '/item#' + id;
      console.log(pageLink)
      if (mainFilter !== 'all'){
        if (mainFilter !== item.category){
          display = 'hidden';
        }}
        if (subFilter !== 'allSub'){
          if (subFilter !== item.subCategory){
            display = 'hidden';
          }}
      return  <div className = {display} key = {id}>
      <a href ={pageLink}><img src = {item.src} alt = {item.name}></img></a>
      <div className = 'name-row'>
        <h2>{item.name}</h2>
        <h2 className = 'price'>£{item.price}</h2>
      </div>
      <button onClick = {() => dispatch(addToBasket(item))}>Buy Now</button>
    </div>
    });

    function changeFilter(choice){
      console.log(initialState)
      dispatch(changeMainFilters(choice))
      return Catalogue;
    }

    if (window.location.hash){
      changeFilter(window.location.hash.substr(1))
      window.history.replaceState(null, null, ' ');
    }

  return (
    <div>
      <Header />
      <div id = 'top-background'></div>
        <div id = 'shop-sidebar'>
        <div className = 'filters-container'>
            <h1>Category:</h1>
              <div className = 'filter-line' onClick = { () => changeFilter('all')}>
              <div className = 'filter-img'>
                <img src = {Checked} className = {mainFilter === 'all' ? null : 'hidden'}></img>
                </div>
                <h3>All</h3>
              </div>
              <div className = 'filter-line' onClick = {() => changeFilter('cat')}>
              <div className = 'filter-img'>
                <img src = {Cat} className = {mainFilter === 'cat' ? null : 'hidden'}></img>
                </div>
                <h3>Cat</h3>
              </div>
              <div className = 'filter-line' onClick = {() => changeFilter('dog')}>
              <div className = 'filter-img'>
                <img src = {Dog} className = {mainFilter === 'dog' ? null : 'hidden'}></img>
                </div>
                <h3>Dog</h3>
              </div>
            </div>
            <div className = 'filters-container'>
            <h1>Sub-Category:</h1>
            <div className = 'filter-line' onClick = { () => changeFilter('allSub')}>
              <div className = 'filter-img'>
                <img src = {Checked} className = {subFilter === 'allSub' ? null : 'hidden'}></img>
                </div>
                <h3>All</h3>
              </div>
              <div className = 'filter-line' onClick = { () => changeFilter('hat')}>
              <div className = 'filter-img'>
                <img src = {Hat} className = {subFilter === 'hat' ? null : 'hidden'}></img>
                </div>
                <h3>Hats</h3>
              </div>
              <div className = 'filter-line' onClick = { () => changeFilter('top')}>
              <div className = 'filter-img'>
                <img src = {Top} className = {subFilter === 'top' ? null : 'hidden'}></img>
                </div>
                <h3>Tops</h3>
              </div>
              <div className = 'filter-line' onClick = { () => changeFilter('glasses')}>
              <div className = 'filter-img'>
                <img src = {Glasses} className = {subFilter === 'glasses' ? null : 'hidden'}></img>
                </div>
                <h3>Glasses</h3>
              </div>
            </div>
        </div>
        <div id = 'shop-display'>
          {Catalogue}
        </div>
      <Footer />
    </div>
  );
};

export default Shop;