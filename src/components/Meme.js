import memesData from '../memesData';
import React, { useState, useEffect } from 'react';

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "to God",
    bottomText: "be the glory",
    randomImage: "https://i.imgflip.com/30b1gx.jpg"
  });
  const [allMeme, setAllMeme] = React.useState([]);
  function getMemeImage(){
    const randomNum = Math.floor(Math.random()*allMeme.length);
    const url = allMeme[randomNum].url;
    setMeme(prevObj => ({...prevObj, randomImage: url}))
  }

  useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
    .then(resp => resp.json())
    .then(data => setAllMeme(data.data.memes))
  }, [])

  const [windw, setWindw] = useState(window.innerWidth);
  useEffect(()=>{
    function watchWidth(){setWindw(window.innerWidth)}
    window.addEventListener("resize", watchWidth)
    return function (){
      window.removeEventListener("resize", watchWidth)
    }
  }, []);
  

  const [memeText, setMemeText] = React.useState({bottomT: "", topT: ""})
  function handleChange (event){
    const {name, value} = event.target
    setMemeText(prevText => ({
      ...prevText, [name]: value
    }))
  }
  return (
    <main className="meme">
      <div className="form">
        <input type="text" placeholder="top quoate" value={memeText.topT} name="topT" onChange={handleChange}/>
        <input type="text" placeholder="bottom quoate" value={memeText.bottomT} name="bottomT" onChange={handleChange}/>
        <button onClick={getMemeImage}>Get a new meme image 🔥</button>
      </div>
      <div className="memeImage">
          <span className="topText">{memeText.topT}</span>
          <span className="bottomText">{memeText.bottomT}</span>
          <img src={meme.randomImage} alt='memeImage'/>
      </div>
    </main>
  )
}

export default Meme

/*<h1>
{windw}
</h1>*/