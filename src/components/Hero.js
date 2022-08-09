import React from "react";

import { useState } from "react";

const Hero = ({ name }) => {
    let fact =0
  const [message, setMessage] = useState("");
  const [f1, setf1] = useState("");

  const handleChange = (event) => {
    
    const number = event.target.value;
    
    // checking if number is negative
    if (number < 0 ) {
        setf1(null)
      console.log("Error! Factorial for negative number does not exist.");
    }

    // if number is 0
    if (number == 0) {
        fact=1
    }

    // if number is positive
    if(number>0) {
     fact = 1;
      for (var i = 1; i <= number; i++) {
        fact *= i;
      }
    }
    setMessage(event.target.value);
    setf1(fact)
  };
  const [message2, setMessage2] = useState("");
  const [f2, setf2] = useState("");

  const handleChange2 = (event) => {
    
    const number = event.target.value;
    console.log(number=='')
    // checking if number is negative
    if (number < 0 ) {
        setf2(null)
    }

    // if number is 0
    if (number == 0) {
        fact=1
    }

    // if number is positive
    if(number>0) {
     fact = 1;
      for (var i = 1; i <= number; i++) {
        fact *= i;
      }
    }
    setMessage2(event.target.value);
    setf2(fact)

  };

  return (
    <div className="hero">
        <h1>Factorial Calculator</h1>
      <input
        type="text"
        id="message"
        name="message"
        onChange={handleChange}
        value={message}
      />

      <h2>Factorial: {f1}</h2>
      <input
        type="text"
        id="message1"
        name="message"
        onChange={handleChange2}
        value={message2}
      />

      <h2>Factorial: {f2}</h2>
    </div>
  );
};

export default Hero;
