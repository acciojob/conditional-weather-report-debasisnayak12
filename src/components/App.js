
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const [weatherInput, setWeatherInput] = useState({temperature:25,condition:"sunny"});
  const [textColor, setTextColor] = useState("");

  useEffect(() => {
    if(weatherInput.temperature > 20){
      setTextColor("red");
    }else{
      setTextColor("blue");
    }
  },[weatherInput.temperature])


  return (
    <div>
       <span>
        <p style={{color:textColor}}>Temperature: {weatherInput.temperature}</p>
        <p>Weather Conditions: {weatherInput.condition}</p>
       </span>
    </div>
  )
}

export default App
