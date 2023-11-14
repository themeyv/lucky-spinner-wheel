import React from 'react';
// import App from '../App';

function MySpin({ spin, items }) {
  return (
    <div className="mainbox" id="mainbox">
      <div className="box" id="box">
        <div className="box1">
          {items.map((item, index) => {
            return (
              <div key={index} className="item">
                <img alt={item.name} />
              </div>
            );
          })}
        </div>
        <div className="box2">
          <span className="font span1"><h5>Keep going!</h5></span>
          <span className="font span2"><h5>You miss!</h5></span>
          <span className="font span3"><h5>Thank You</h5></span>
          <span className="font span4"><h5>Try Again</h5></span>
          <span className="font span5"><h5>Sorry</h5></span>
        </div>
      </div>
      <img className="spin" src="../src/assets/pointer.svg"/>
      {/* <button className="spin" onClick={spin}>Spinnnn!!!</button> */}
      {/* <audio controls="controls" id="applause" src="" type="audion/mp3"></audio>
      <audio controls="controls" id="wheel" src="" type="audion/mp3"></audio> */}
    </div>
  );
}

export default MySpin;
