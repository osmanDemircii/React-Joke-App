// src/Comp/CardComp.jsx
import './CssComp/CardCssComp.css';

function CardComp({ jokeData, category, displayLang }) {
  
  const dictionary = {
    TR: {
      waiting: "Şaka bekleniyor...",
      category: "Kategori:",
      typeLabel: "Tur:",
      jokeLabel: "Şaka:",
      setupLabel: "Soru:",
      deliveryLabel: "Cevap:",
      typeSingle: "Tek Parça",
      typeTwo: "Soru-Cevap"
    },
    ENG: {
      waiting: "Waiting for joke...",
      category: "Category:",
      typeLabel: "Type:",
      jokeLabel: "Joke:",
      setupLabel: "Setup:",
      deliveryLabel: "Delivery:",
      typeSingle: "Single",
      typeTwo: "Two-Part"
    }
  };

  const lang = dictionary[displayLang] || dictionary.ENG;

  if (!jokeData) {
    return (
      <div className="card-container empty">
        <div className="card-section joke-section">
          <p className="placeholder-text">{lang.waiting}</p>
        </div>
        <div className="card-section type-section">
          <p className="info-text">{lang.category} {category}</p>
        </div>
      </div>
    );
  }

  const isSingle = jokeData.type === 'single';

  return (
    <div className="card-container">
      
      <div className="card-section joke-section main-content">
        {isSingle ? (
          <div className="joke-content">
            <span className="section-label">{lang.jokeLabel}</span>
            <p className="joke-text">{jokeData.joke}</p>
          </div>
        ) : (
          <div className="joke-content multi">
            <div className="setup-part">
              <span className="section-label">{lang.setupLabel}</span>
              <p className="joke-text">{jokeData.setup}</p>
            </div>
            <div className="delivery-part">
              <span className="section-label">{lang.deliveryLabel}</span>
              <p className="joke-text highlight">{jokeData.delivery}</p>
            </div>
          </div>
        )}
      </div>

      <div className="card-section type-section">
        <span className="category-badge">
          <strong>{lang.category}</strong> {jokeData.category}
        </span>
        
        <span className="type-badge">
          <strong>{lang.typeLabel}</strong> {isSingle ? lang.typeSingle : lang.typeTwo}
        </span>
      </div>
    </div>
  );
}

export default CardComp;