import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import {useDispatch} from 'react-redux'
import Header from './Header';
import Footer from './Footer';
import {changeMainFilters} from '../Actions'
import './CSS/Home.css';
import home from '../Images/home.png';


const Home = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Header />
      <div id = 'top-ad'>
        <img src = {home} alt = 'cat ad'></img>
        <h1>Lartsy</h1>
        <h2>Because they want to look good too.</h2>
        <div id = 'button-container-ad'>
          <Link to = './shop' onClick = {() => dispatch(changeMainFilters('cat'))}><button>Cat Collection</button></Link>
          <Link to = './shop' onClick = {() => dispatch(changeMainFilters('dog'))}><button>Dog Collection</button></Link>
        </div>
      </div>
     <Footer /> 
    </div>
  );
};

export default Home;