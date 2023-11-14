import React, { useState } from 'react';
import './App.css'; 
import MySpin from '../src/components/MySpin.jsx';
import Swal from 'sweetalert2';

function App() {
  const [selectedItem, setSelectedItem] = useState("");
  const [spinning, setSpinning] = useState(false);

  const [items, setItems] = useState([
    {
      name: "Apple Watch",
      color: "#A73121",
      },
    {
        name: "Thank You",
        color: "#A73121",
    }
]);


// setItems([{
//   name: "ipad",
//   color: "#A73121",
//   },
//   ].concat(items))

  function shuffle(array) {
    var currentIndex = array.length, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  function spin() {
    // wheel.play();

    // Arrays with different prizes or items
    let appleWatch = shuffle([1890, 2250, 2610]);
    let thankYou1 = shuffle([1850, 2210, 2670]);
    let thankYou2 = shuffle([1770, 2130, 2490]);
    let vacuumCleaner = shuffle([1810, 2170, 2530]);
    let money = shuffle([1750, 2110, 2470]);
    let thankYou3 = shuffle([1630, 1990, 2350]);
    let thankYou4 = shuffle([1570, 1930, 2290]);

    // Combining all the shuffled arrays into a single array
    let results = shuffle([
      appleWatch[0],
      thankYou1[0],
      thankYou2[0],
      vacuumCleaner[0],
      money[0],
      thankYou3[0],
      thankYou4[0],
    ]);

    if (results[0] === appleWatch[0]) {
      setSelectedItem("Apple Watch");
      Swal.fire({
        title: "Congratulations!",
        text: "You got Apple Watch",
        imageUrl: "../src/assets/apple.svg",
        imageWidth: 400,
        imageHeight: 200,
        confirmButtonColor: '#000',
        background: '#A73121',
        color: '#fff',
      });
    } else if (results[0] === vacuumCleaner[0]) {
      setSelectedItem("Vacuum Cleaner");
      Swal.fire({
        title: "Congratulations!",
        text: "You got vacuum cleaner",
        imageUrl: "../src/assets/vacuum.svg",
        imageWidth: 400,
        imageHeight: 200,
        confirmButtonColor: '#000',
        background: '#A73121',
        color: '#fff',
      });
    } else if (results[0] === money[0]) {
      setSelectedItem("Money");
      Swal.fire({
        title: "Congratulations!",
        text: "You got 1,111 bath",
        imageUrl: "../src/assets/money.svg",
        imageWidth: 400,
        imageHeight: 200,
        confirmButtonColor: '#000',
        background: '#A73121',
        color: '#fff',
      });
    }
    
  }

  return (<div><MySpin items={items} spinning={spinning}/>
      <button className='button' onClick={spin}>Spinnnn!!!</button>
      {selectedItem && <p>{selectedItem}</p>}</div>
  );
}

export default App;
