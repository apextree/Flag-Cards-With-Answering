import './App.css';
import { useState  } from 'react';
import flashCardsInformation from './flashCardsInformation.js';

const Card = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [shownIndexes, setShownIndexes] = useState([]);
  const totalCards = flashCardsInformation.length;

  const proceedRight = () => {
    setIsFlipped(false);
    const randomIndex = Math.floor(Math.random() * totalCards);
    setCurrentIndex(randomIndex);
    setShownIndexes([...shownIndexes, randomIndex]);

  }

  const proceedLeft = () => {
    setIsFlipped(false);  
    const lastIndex = shownIndexes[shownIndexes.length - 1];
    if (lastIndex) {
      setCurrentIndex(lastIndex);
      setShownIndexes(shownIndexes.slice(0, -1));
    }
    else {
      setCurrentIndex(0);
      setShownIndexes([]);
    }


  
  };


  const flipCard = () => {
    setIsFlipped(!isFlipped);
  }

  return (
    <div className="Card-Container" style={{opacity: 1}} data-difficulty={flashCardsInformation[currentIndex].difficulty}>
      <div className='difficulty-indicator'>
      <div className={`Flash-Card ${isFlipped ? 'flipped' : ''}`} onClick={flipCard}>
          {isFlipped ? (
            <div className='Flash-Card-Answer'>
              <div className='flag-container'>
                <img className='flag-image' src={flashCardsInformation[currentIndex].flag} alt="flag" />
                <h2> {flashCardsInformation[currentIndex].answer}</h2>
              </div>

            
            </div>
          ) : (
            <div className='Flash-Card-Question'>
              <div className='flag-container'>
                <img className='flag-image' src={flashCardsInformation[currentIndex].flag} alt="flag" />
              </div>
            </div>
          )}
         
         
        </div>
        
        <div className="button-container">
          <button className="previous-button" onClick={proceedLeft}>&larr;</button>
          <button className="next-button" onClick={proceedRight}>&rarr;</button>
        </div>

    </div>
   
      </div>
  )
}

export default Card




