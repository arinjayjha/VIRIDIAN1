import React from "react";
import elderlyCare from "./images/elderly-care.jpg";
import "./bigDiv.css";

const BigDiv = () => {
  return (
    <div className="bigImg">
      <img src={elderlyCare} alt="elderly-care" className="bigImage1" />
      <h1>Welcome to Viridian, A holistic platform made for your healthcare and wealthcare of the elderly</h1>
    </div>
  );
};

export default BigDiv;
