
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
       <p style={{color:textColor}}>
        <span>Temperature: {weatherInput.temperature}</span>
        <span>Temperature: {weatherInput.condition}</span>
       </p>
    </div>
  )
}

export default App
