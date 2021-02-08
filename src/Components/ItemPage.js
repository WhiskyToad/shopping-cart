import React from "react";
import Header from './Header'
import './CSS/ItemPage.css';
import Data from './Data'
import backImg from '../Images/back.png'
import {useDispatch} from 'react-redux'
import {addToBasket} from '../Actions'

const ItemPage = () => {
    const item = Data[window.location.hash.substr(1)];
    const dispatch = useDispatch();
    
    return (
        <div>
            <Header />
         <div id = 'top-background-item'></div>
         <a href = './shop'><button id ='back-button'><img src = {backImg} alt ='go back'></img><span>Back</span></button></a>
        <div id = 'item-display-container'>
            <img src = {item.src} alt = {item.name}></img>
            <div id = 'info-text'>
                <h1>{item.name}</h1>
                <h2>{item.description}</h2>
                <div id = 'buy-row'>
                    <button onClick= {() => dispatch(addToBasket(item))}>Add to Cart</button>
                    <h2>{item.price}</h2>
                </div>
            </div>
        </div>
        </div>

    )
}

export default ItemPage