import React, { useState } from "react";
import './BulbJSX.css';

export default function BulbJSX() {
// hook condition
  const [bulbState, setBulbState] = useState("https://previews.123rf.com/images/phive2015/phive20151606/phive2015160600006/60182097-glowing-light-bulb-isolated-on-white-background.jpg");
//  for red light
  const redLight = () => setBulbState("https://www.feit.com/cdn/shop/files/A19-TR-LED-2024-06-10-main_2000x.jpg?v=1717996206");
  // for green light
  const greenLight = () => setBulbState("https://i5.walmartimages.com/asr/525a08d0-10e3-4309-b811-5740436aa1f7.79df417aeeb04f7ec019116f8e520181.jpeg");
 
  return (
    <div className="main-container">
      <h1>Bulb</h1>
      {/* image of bulb */}
      <img id="myImage" src={bulbState} alt="Lightbulb" />
      <div className="button-div">
        <button onClick={redLight}>Red Light</button>
        <button onClick={greenLight}>Green Light</button>
      </div>
    </div>
  )
}
