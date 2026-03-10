// src/Comp/ToggleBtnComp.jsx
import './CssComp/ToggleBtnCssComp.css'
import { useState } from "react";

function ToggleBtnComp({ options1, options2, onClick }) {

  const [isOn, setIsOn] = useState(false);
  
  // 1. Seçenek 
  const handleOption1 = () => {
    setIsOn(false); // Guncelle
    if (onClick) {
      onClick(options1); // App Gonder
    }
  };

  // 2. Seçenek
  const handleOption2 = () => {
    setIsOn(true); // Guncelle
    if (onClick) {
      onClick(options2); // App Gonder
    }
  };

  return (
    <div className="toggle-container">

      <div 
        className={`toggle-option ${!isOn ? "active" : ""}`}
        onClick={handleOption1}
      >
        {options1}
      </div>

      <div 
        className={`toggle-option ${isOn ? "active" : ""}`}
        onClick={handleOption2}
      >
        {options2}
      </div>

    </div>
  );
}

export default ToggleBtnComp