import React from "react";
import './CSS/Footer.css';
import Insta from '../Images/insta-icon.png';
import Facebook from '../Images/facebook-icon.png';
import Twitter from '../Images/twitter-icon.png';
import Visa from '../Images/visa.png';
import Mastercard from '../Images/mastercard.png';
import Paypal from '../Images/paypal.png';



const Footer = () => {
  return (
    <div id = 'footer'>
        <div id = 'icon-container'>
            <div id = 'left-icon-container'>
                <img src = {Facebook} alt = 'facebook'></img>
                <img src = {Twitter} alt = 'twitter'></img>
                <img src = {Insta} alt = 'instagram'></img>
            </div>
            <div id = 'right-icon-container'>
                <img src = {Visa} alt = 'Visa'></img>
                <img src = {Mastercard} alt = 'mastercard'></img>
                <img src = {Paypal} alt = 'paypal'></img>
            </div>
        </div>
        <div id = 'links-container'>
          <div id = 'left-footer'>
              <h1>About</h1>
              <ul className = 'footer-links'>
                <li>About us</li>
                <li>Careers</li>
                <li>T's and C's</li>
                <li>Privacy</li>
              </ul>
          </div>
          <div id = 'centre-footer'>
            <p id = 'signature'>c 2021 Lartsy | Designed by Whisky Toad</p>
          </div>
          <div id = 'right-footer'>
            <h1>Help</h1>
            <ul className = 'footer-links'>
              <li>Help</li>
              <li>Track Order</li>
              <li>Returns</li>
              <li>Lartsy Club</li>
            </ul>
          </div>
        </div>
    </div>
  );
};

export default Footer;