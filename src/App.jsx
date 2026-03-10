// src/App.jsx
import { useState, useEffect } from 'react';
import './App.css';
import BtnComp from './Comp/BtnComp';
import ToggleBtnComp from './Comp/ToggleBtnComp';
import SelectComp from './Comp/SelectComp';
import CardComp from './Comp/CardComp';

function App() {
  const [category, setCategory] = useState('Any'); 
  const [jokeType, setJokeType] = useState('Tek');
  const [displayLang, setDisplayLang] = useState('TR'); 
  const [jokeData, setJokeData] = useState(null); 
  const [loading, setLoading] = useState(false);
  const [translatedJoke, setTranslatedJoke] = useState(null);

  const texts = {
    TR: {
      btnName: "Yeni Şaka Üret",
      loading: "⏳ Hazırlanıyor...",
      type1: "Tek",
      type2: "Çift"
    },
    ENG: {
      btnName: "Generate New Joke",
      loading: "⏳ Loading...",
      type1: "Single",
      type2: "Double"
    }
  };

  const generateJoke = async () => {
    setLoading(true);
   
    const apiFormatType = (jokeType === 'Tek' || jokeType === 'Single') ? 'single' : 'twopart';
    const apiUrl = `https://v2.jokeapi.dev/joke/${category}?type=${apiFormatType}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setJokeData(data);
    } catch (error) {
      console.error("Hata:", error);
    } finally {
      if (displayLang !== 'TR') {
        setLoading(false);
      }
    }
  };

  const translateText = async (text) => {
    if (!text) return "";
    try {
      const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|tr`);
      const data = await response.json();
      return data.responseData.translatedText || text;
    } catch (error) {
      console.error("Çeviri Hatası:", error);
      return text;
    }
  };

  useEffect(() => {
    const handleTranslation = async () => {
      if (!jokeData) return;

      if (displayLang === 'TR') {
        setLoading(true);
        let newTranslatedJoke = { ...jokeData };
        
        if (jokeData.type === 'single') {
          newTranslatedJoke.joke = await translateText(jokeData.joke);
        } else if (jokeData.type === 'twopart') {
          newTranslatedJoke.setup = await translateText(jokeData.setup);
          newTranslatedJoke.delivery = await translateText(jokeData.delivery);
        }
        
        setTranslatedJoke(newTranslatedJoke);
        setLoading(false);
      } else {
        setTranslatedJoke(null);
      }
    };

    handleTranslation();
  }, [jokeData, displayLang]);

  return (
    <div className="app-container">
      {/* Dil Sec */}
      <div className='headToggle'>
        <ToggleBtnComp 
          options1='TR' 
          options2='ENG' 
          onClick={(val) => setDisplayLang(val)} 
        />
      </div>

      <div className='form-group'>
        <SelectComp 
          displayLang={displayLang} 
          onClick={(val) => setCategory(val)} 
        />
        <ToggleBtnComp 
          options1={texts[displayLang].type1} 
          options2={texts[displayLang].type2} 
          onClick={(val) => setJokeType(val)} 
        />
      </div>

      <CardComp 
        jokeData={displayLang === 'TR' && translatedJoke ? translatedJoke : jokeData} 
        category={category}
        displayLang={displayLang} 
      />

      <div style={{ marginTop: '20px' }}>
        <BtnComp 
          name={loading ? texts[displayLang].loading : texts[displayLang].btnName} 
          onClick={generateJoke} 
          disabled={loading}
        />
      </div>
    </div>
  )
}

export default App;