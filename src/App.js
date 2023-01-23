import './App.css';
import Header from './components/Header';
import Meme from './components/Meme';
import boxes from './components/boxes';
import Box from './components/Box';
import {useState, useEffect} from 'react';
import React from 'react'

function App() {
//Toggle boxes begins
  const [squares, setSquares] = useState(boxes);

  function toggle(id){
    setSquares(prev => 
        prev.map(p => 
        p.id === id ? {...p, on: !p.on} : p
       )
    )
  }

  const squareElements = squares.map(square => <Box key={square.id} 
    on={square.on}
    handleClick={()=>toggle(square.id)}
  />)
//end

//Form begins
const [formData, setFormData] = React.useState({email:"", password:"",
 confirmPassword:"", newsletter: false, employment: ""})

function handleChange(event){
  const {type, name, checked, value}= event.target
  setFormData(prevData => ({
    ...prevData, [name]: type === "checkbox" ? checked : value
   //...prevData, [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
  }))
  }
function handleSubmit(event){
  event.preventDefault();
  console.log(formData)
  if(formData.password === formData.confirmPassword && formData.password !== ""){
    console.log("Successfully signed up")
    if(formData.newsletter){
      console.log("Thanks for signing up for our newsletter")
    }
  }else{
    console.log("Invalid Password")
  }
}


  function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

let myPromise = new Promise(function(myResolve, myReject) {
  let x = 0;
  let y = 0;
  let fun = y===0?"Yes":"NO";
// some code (try to change x to 5)

  if (x === 0) {
    myResolve(fun);
  } else {
    myReject("Error");
    console.log(myReject);
  }
});

myPromise.then(
  function(z) {myDisplayer(z);},
  function(z) {myDisplayer(z);}
);
//ends

const [show, setShow] = useState(true)
  function toggleWidth(){
    setShow(prev => !prev)
  }

  return (
    <div className="memeContainer">
      <Header />
      <div>
      {show && <Meme />}
      </div>
    </div>
  );
}

export default App;

//<button onClick={toggleWidth}>toggle meme</button>

/*<h2 id="demo"></h2>
{squareElements}
<form onSubmit={handleSubmit}>
<input 
  type="email"
  placeholder="Email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  />
  <input 
  type="password"
  placeholder="password"
  name="password"
  value={formData.password}
  onChange={handleChange}
  />
  <input 
  type="password"
  placeholder="confirm password"
  name="confirmPassword"
  value={formData.confirmPassword}
  onChange={handleChange}
  />
  <input 
  type="checkbox"
  name="newsletter"
  checked={formData.newsletter}
  onChange={handleChange}
  id="checkbox"
  />
  <label htmlFor="checkbox">I want to join the newsletter</label>
  <button>Sign up</button>
  <fieldset>
    <legend>current employment status</legend>
    <input type="radio" 
    id="Unemployed" 
    name="employment" 
    onChange={handleChange} 
    value="Unemployed" 
    checked={formData.employment === "Unemployed"}
    />
    <label htmlFor="Unemployed">Unemployed</label>
    <br />
    <input type="radio" 
    id="Part-time" 
    name="employment" 
    onChange={handleChange} 
    value="Part-time" 
    checked={formData.employment === "Part-time"}
    />
    <label htmlFor="Part-time">Part-time</label>
    <br />
    <input type="radio" 
    id="Full-time" 
    name="employment" 
    onChange={handleChange} 
    value="Full-time" 
    checked={formData.employment === "Full-time"}
    />
    <label htmlFor="Full-time">Full-time</label>
  </fieldset>
</form>*/