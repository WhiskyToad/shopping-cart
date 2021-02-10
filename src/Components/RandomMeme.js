import React, {useState} from "react";
import Search from '../Images/search.png';
import {useSelector, useDispatch} from 'react-redux'
import {memeDisplay} from '../Actions';




  const MemeGenerator = () => {
    const dispatch = useDispatch();
    const memeValue = useSelector(state => state.memeDisplay);
    const [meme, setMeme] = useState({
        item: '',
        src: 'null'
      })
      
      /* Selects a random meme from the list and retrieves it from giphy, it has a delay to showing the meme
      to try and make it smoother */
    function getMeme(key) {
        if (key === 'Enter' || key.key === 'Enter'){
            const list = ['Dragon', 'PokeMon', 'Cat', 'Dog', 'pizza', 'Programmer', 'Coder',
            'Baby', 'RuneScape', 'Bike','Beer', 'League of Legends', 'Dinosaur', 'Peppa', 'Kanye', 'Eminem'];
            let item = list[Math.floor(Math.random() * list.length)];
            fetch(`https://api.giphy.com/v1/gifs/translate?api_key=1IQ12J2Q77SN2XQGlp0mt8373AOCI3pg&s=${item}`, {mode: 'cors'})
            .then(function(response) {
            return response.json();
            })
            .then(function(response){
              dispatch(memeDisplay('HIDE-MEME'))
              return response;
            })
            .then(function(response) {
            setMeme({
                item: item,
                src: response.data.images.original.url
            })
            })
            .then(function(){
              setTimeout(dispatch(memeDisplay('DISPLAY-MEME')), 750)
            });
        }
    }
      
    
  return (
      <div>
    <input type = 'text' id = "search" placeholder = 'Random Meme!' onKeyDown={getMeme}></input>
    <img src = {Search} alt = 'search' onClick ={() => getMeme('Enter')}></img>
    <div id = 'meme-container' className = {memeValue ? null : 'hidden'}>
    <img src = {meme.src} alt = 'random meme'></img>
    <p>I said random!</p>
    <p>Here's a {meme.item} meme!</p>
    <span>
      <button onClick = {() => getMeme('Enter')}>Another!</button>
      <button onClick = {() => dispatch(memeDisplay('HIDE-MEME'))}>Close</button>
    </span>
  </div>
  </div>
  )
}

export default MemeGenerator