import React from "react";
import Header from './Header';
import Footer from './Footer';
import './CSS/Home.css';
import home from '../Images/home.png';


const Home = () => {
  return (
    <div>
      <Header />
      <div id = 'top-ad'>
        <img src = {home} alt = 'cat ad'></img>
        <h1>Lartsy</h1>
        <h2>Because they want to look good too.</h2>
        <div id = 'button-container-ad'>
          <a href ='/shop#cat'><button>Cat Collection</button></a>
          <a href ='/shop#dog'><button>Dog Collection</button></a>
        </div>
      </div>
     <Footer /> 
    </div>
  );
};

export default Home;