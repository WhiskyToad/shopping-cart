/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
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

/* Need to set filter if i click on dog/cat on top menu 
  need to make a filters module to export
  can I change classname on hover?
  img size changing on filter change
*/

const Shop = (props) => {
    const [mainFilters, setMainFilters] = useState('all')
    const [subFilter, setSubFilter] = useState('all');
    const [basket, setBasket] = useState([]);

    let Catalogue = Data.map((item => {
      let display ='display-card'
      if (mainFilters !== 'all'){
        if (mainFilters !== item.category){
          display = 'hidden';
        }}
        if (subFilter !== 'all'){
          if (subFilter !== item.subCategory){
            display = 'hidden';
          }}
      return <div className = {display} key = {item.id}>
      <img src = {item.src} alt = {item.name}></img>
      <div className = 'name-row'>
        <h2>{item.name}</h2>
        <h2 className = 'price'>£{item.price}</h2>
      </div>
      <button onClick = {() => addToBasket(item.id)}>Buy Now</button>
    </div>
    }));

    function changeMainFilter(choice){
      setMainFilters(choice);
      return Catalogue;
    }
    //change to an array to allow for mutiple choices? need some kind of checking
    function changeSubFilter(choice){
      setSubFilter(choice);
      return Catalogue;
    }

    function addToBasket(id){
      setBasket(oldArray => [...oldArray, Data[id]]);
    }

  return (
    <div>
      <Header />
      <div id = 'top-background'></div>
        <div id = 'shop-sidebar'>
        <div className = 'filters-container'>
            <h1>Category:</h1>
              <div className = 'filter-line' onClick = { () => changeMainFilter('all')}>
              <div className = 'filter-img'>
                <img src = {Checked} className = {mainFilters === 'all' ? null : 'hidden'}></img>
                </div>
                <h3>All</h3>
              </div>
              <div className = 'filter-line' onClick = {() => changeMainFilter('cat')}>
              <div className = 'filter-img'>
                <img src = {Cat} className = {mainFilters === 'cat' ? null : 'hidden'}></img>
                </div>
                <h3>Cat</h3>
              </div>
              <div className = 'filter-line' onClick = {() => changeMainFilter('dog')}>
              <div className = 'filter-img'>
                <img src = {Dog} className = {mainFilters === 'dog' ? null : 'hidden'}></img>
                </div>
                <h3>Dog</h3>
              </div>
            </div>
            <div className = 'filters-container'>
            <h1>Sub-Category:</h1>
            <div className = 'filter-line' onClick = { () => changeSubFilter('all')}>
              <div className = 'filter-img'>
                <img src = {Checked} className = {subFilter === 'all' ? null : 'hidden'}></img>
                </div>
                <h3>All</h3>
              </div>
              <div className = 'filter-line' onClick = { () => changeSubFilter('hat')}>
              <div className = 'filter-img'>
                <img src = {Hat} className = {subFilter === 'hat' ? null : 'hidden'}></img>
                </div>
                <h3>Hats</h3>
              </div>
              <div className = 'filter-line' onClick = { () => changeSubFilter('top')}>
              <div className = 'filter-img'>
                <img src = {Top} className = {subFilter === 'top' ? null : 'hidden'}></img>
                </div>
                <h3>Tops</h3>
              </div>
              <div className = 'filter-line' onClick = { () => changeSubFilter('glasses')}>
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