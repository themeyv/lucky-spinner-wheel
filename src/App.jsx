import { useState } from 'react'
import './App.css'
import Pointer from "../src/assets/pointer.svg"

function App() {
  let container = document.querySelector(".container");
  let btn = document.getElementById("spin");
  let number = Math.ceil(Math.random() * 1000);
  
  let flash = document.querySelector(".container div");
  
  
  btn.onclick = function () {
    container.style.transform = "rotate(0deg)";
    // container.style.transform = "rotate(" + number + "deg)";
    number += Math.ceil(Math.random() * 1000);
  console.log(number);
  }
  
 
  return (
    <>
      {/* <div className="h1">Which reward you will get?</div>   */}
<body>
	<div className="container"> 
		<div className="one" id="">Apple Watch &#128512;</div>
		<div className="two">Thank you &#128523;</div>
		<div className="three">Thank you &#128591;</div>
		<div className="four">Vacuum cleaner &#129529;</div> 
		<div className="five">Money &#128184;</div>
		<div className="six">Thank you &#128561;</div>
    <div className="seven">Thank you &#128064;</div>
	</div>
		<span className="mid"><img src={Pointer} alt="Pointer"/></span>
		
	<script src="script.js"></script><button id="spin">Spinnnn!</button>




</body>
    </>
  )
  }


export default App