import { useState } from 'react';
import './App.css';
import Pointer from "../src/assets/pointer.svg";

function App() {
  const [showResultCard, setShowResultCard] = useState(false);
  const [result, setResult] = useState(null);

  const container = document.querySelector(".container");
  const btn = document.getElementById("spin");
  let number = Math.ceil(Math.random() * 10000);

  const flash = document.querySelector(".container div");

  btn.onclick = function () {
    const newResult = Math.ceil(Math.random() * 7); // สุ่มเลขจาก 1 ถึง 7

    // หมุนล้อโดยอ้างอิงที่เรียกตำแหน่งของผลลัพท์
    container.style.transform = "rotate(" + (number + 360 * newResult) + "deg)";
    number += Math.ceil(Math.random() * 10000);

    // กำหนดผลลัพท์และแสดงการ์ดผลลัพท์
    setResult(newResult);
    setShowResultCard(true);
  };

  const closeResultCard = () => {
    setShowResultCard(false);
    setResult(null);
  };

  return (
    <>
      <body>
        <div className="container">
          <div className="one">Apple Watch &#128512;</div>
          <div className="two">Thank you &#128523;</div>
          <div className="three">Thank you &#128591;</div>
          <div className="four">Vacuum cleaner &#129529;</div>
          <div className="five">Money &#128184;</div>
          <div className="six">Thank you &#128561;</div>
          <div className="seven">Thank you &#128064;</div>
        </div>
        <span className="mid"><img src={Pointer} alt="Pointer" /></span>
        <button id="spin">Spinnnn!</button>

        {showResultCard && (
          <div className="result-card">
            <p>You have won:</p>
            <p>{result === 1 ? "Apple Watch 🍏⌚" : result === 4 ? "Vacuum cleaner 🧹" : "Thank you 😃"}</p>
            <button onClick={closeResultCard}>Close</button>
          </div>
        )}
      </body>
    </>
  );
}

export default App;
