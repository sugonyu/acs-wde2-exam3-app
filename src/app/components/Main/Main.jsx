"use client";

import React, { useState } from "react";
import "../global.css";
import "./Main.css";

function Main() {
  const [btnText, setBtnText] = useState("Click!");
  const [textColor, setTextColor] = useState("yellow");
  const [showMsg, setShowMsg] = useState(false);

  const doIt = () => {
    // Change text
    if (btnText === "Click!") {
      setBtnText("Clicked!");
    } else {
      setBtnText("Click!");
    }

    // Toggle a color
    if (textColor === "yellow") {
      setTextColor("white");
    } else {
      setTextColor("yellow");
    }

    // Reveal a hidden message
    setShowMsg(!showMsg);
  };

  return (
    <main className="global main">
      <h2>My Skills</h2>
      <p>HTML, CSS, React</p>
      
      <a href="https://github.com">My GitHub</a>
      <br /><br />

      <button onClick={doIt} style={{ background: 'black', color: textColor, padding: '10px' }}>
        {btnText}
      </button>
      
      {showMsg && (
        <p id="msg" style={{ color: 'blue' }}>Surprise! Hidden Message.</p>
      )}
    </main>
  );
}

export default Main;