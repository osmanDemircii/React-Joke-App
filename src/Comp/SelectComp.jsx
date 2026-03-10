// src/Comp/SelectComp.jsx
import './CssComp/SelectCssComp.css'
import { useState } from "react";

function SelectComp({ onClick, displayLang }) {
  const [categorys, setcategory] = useState("Any");

  const categoryLabels = {
    TR: {
      Any: "Herhangi Biri",
      Misc: "Karışık",
      Programming: "Programlama",
      Dark: "Kara Mizah",
      Pun: "Kelime Oyunu",
      Spooky: "Korkunç",
      Christmas: "Noel"
    },
    ENG: {
      Any: "Any",
      Misc: "Miscellaneous",
      Programming: "Programming",
      Dark: "Dark",
      Pun: "Pun",
      Spooky: "Spooky",
      Christmas: "Christmas"
    }
  };

  const labels = categoryLabels[displayLang] || categoryLabels.ENG;

  const handleChange = (event) => {
    const secilen = event.target.value;
    setcategory(secilen);
    if (onClick) {
      onClick(secilen);
    }
  };

  return (
    <select className="custom-select" value={categorys} onChange={handleChange}>
      <option value="Any">{labels.Any}</option>
      <option value="Misc">{labels.Misc}</option>
      <option value="Programming">{labels.Programming}</option>
      <option value="Dark">{labels.Dark}</option>
      <option value="Pun">{labels.Pun}</option>
      <option value="Spooky">{labels.Spooky}</option>
      <option value="Christmas">{labels.Christmas}</option>
    </select>
  );
}

export default SelectComp;