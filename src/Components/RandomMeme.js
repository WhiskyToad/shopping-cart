import React, {useState} from "react";
import Search from '../Images/search.png';




  const MemeGenerator = () => {
    const [meme, setMeme] = useState({
        display: false,
        item: '',
        src: 'null'
      })
      
    function getMeme(key) {
        if (key === 'Enter' || key.key === 'Enter'){
            const list = ['Dragon', 'PokeMon', 'Cat', 'Dog', 'pizza', 'Programmer', 'Coder',
            'Baby', 'RuneScape', 'Bike','Beer', 'League of Legends', 'Dinosaur', 'Peppa', 'Kanye', 'Eminem'];
            let item = list[Math.floor(Math.random() * list.length)];
            fetch(`https://api.giphy.com/v1/gifs/translate?api_key=1IQ12J2Q77SN2XQGlp0mt8373AOCI3pg&s=${item}`, {mode: 'cors'})
            .then(function(response) {
            return response.json();
            })
            .then(function(response) {
            setMeme({
                display: true,
                item: item,
                src: response.data.images.original.url
            })
            });
        }
    }
  return (
      <div>
    <input type = 'text' id = "search" placeholder = 'Random Meme!' onKeyDown={getMeme}></input>
    <img src = {Search} alt = 'search' onClick ={() => getMeme('Enter')}></img>
    <div id = 'meme-container' className = {meme.display ? null : 'hidden'}>
    <img src = {meme.src} alt = 'random meme'></img>
    <p>I said random!</p>
    <p>Here's a {meme.item} meme!</p>
    <span>
      <button onClick = {() => getMeme('Enter')}>Another!</button>
      <button onClick = {() => setMeme({
        display: false,
        item: meme.item,
        src: meme.src
      })}>Close</button>
    </span>
  </div>
  </div>
  )
}

export default MemeGenerator