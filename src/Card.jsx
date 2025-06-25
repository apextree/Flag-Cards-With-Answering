import "./App.css";
import { useState, useEffect } from "react";
import flashCardsInformation from "./flashCardsInformation.js";

const Card = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [leftButtonDisabled, setLeftButtonDisabled] = useState(false);
  const [rightButtonDisabled, setRightButtonDisabled] = useState(false);
  const [setOfFlashCards, setSetOfFlashCards] = useState(flashCardsInformation);

  const currentCard = setOfFlashCards[currentIndex];

  const [answer, setAnswer] = useState("");
  const [answerIndicatorColor, setAnswerIndicatorColor] = useState("");
  const [currentStreak, setCurrentStreak] = useState(0);

  const checkAnswer = () => {
    const userAnswer = answer.toLowerCase().trim();
    const correctAnswer = currentCard.answer.toLowerCase();

    const altNames = {
      "uk": "united kingdom",
      "the united kingdom": "united kingdom",
      "great britain": "united kingdom",
      "gb": "united kingdom",
      "nederlands": "netherlands",
      "holland": "netherlands",
      "slovak republic": "slovakia",
      "french republic": "france",
      "the french republic": "france",
      "the uk": "united kingdom",
      "the united kingdom of great britain and northern ireland": "united kingdom",
      "espana": "spain"
    };

    if (
      userAnswer === correctAnswer ||
      altNames[userAnswer] === correctAnswer
    ) {
      setAnswerIndicatorColor("green");
      setCurrentStreak(currentStreak + 1);
    } else if (
      correctAnswer.includes(userAnswer) ||
      userAnswer.includes(correctAnswer)
    ) {
      setAnswerIndicatorColor("green");
      setCurrentStreak(currentStreak + 1);
    } else {
      setAnswerIndicatorColor("red");
      setCurrentStreak(0);
    }
  };

  useEffect(() => {
    setRightButtonDisabled(currentIndex === setOfFlashCards.length - 1);
    setLeftButtonDisabled(currentIndex === 0);
  }, [currentIndex, setOfFlashCards]);

  const proceedRight = () => {
    setIsFlipped(false);
    setCurrentIndex(currentIndex + 1);
    setAnswerIndicatorColor("");
    setAnswer("");
  };

  const shuffleCards = () => {
    let shuffledCards = [...setOfFlashCards];

    for (let i = shuffledCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledCards[i], shuffledCards[j]] = [
        shuffledCards[j],
        shuffledCards[i],
      ];
    }

    setSetOfFlashCards(shuffledCards);
    setCurrentIndex(0);
    setIsFlipped(false);
    setAnswerIndicatorColor("");
    setAnswer("");
    setCurrentStreak(0);
  };

  const proceedLeft = () => {
    setIsFlipped(false);
    setCurrentIndex(currentIndex - 1);
    setAnswerIndicatorColor("");
    setAnswer("");
  };

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="Card-Container-Wrapper">
      <div
        className="Card-Container"
        style={{ opacity: 1 }}
        data-difficulty={setOfFlashCards[currentIndex].difficulty}
      >
        <div className="difficulty-indicator">
          <div
            className={`Flash-Card ${isFlipped ? "flipped" : ""}`}
            onClick={flipCard}
          >
            {isFlipped ? (
              <div className="Flash-Card-Answer">
                <div className="flag-container">
                  <img
                    className="flag-image"
                    src={setOfFlashCards[currentIndex].flag}
                    alt="flag"
                  />
                  <h2> {setOfFlashCards[currentIndex].answer}</h2>
                </div>
              </div>
            ) : (
              <div className="Flash-Card-Question">
                <div className="flag-container">
                  <img
                    className="flag-image"
                    src={currentCard.flag}
                    alt="flag"
                  />
                </div>
              </div>
            )}
          </div>

          <div className="button-container">
            <button
              className="previous-button"
              disabled={leftButtonDisabled}
              onClick={proceedLeft}
            >
              &larr;
            </button>
            <button
              className="next-button"
              disabled={rightButtonDisabled}
              onClick={proceedRight}
            >
              &rarr;
            </button>
          </div>
        </div>
      </div>

      <div className="Shuffle-Button-Container">
        <button className="shuffle-button" onClick={shuffleCards}>
          Shuffle
        </button>
      </div>

      <div className="Streaks-Container">
        <h2 className="Streaks-Text"> {currentStreak} 🔥</h2>
      </div>

      <div className="Answer-Container">
        <div className="answer-form-text">
          <h2> Enter the name of the country: </h2>
        </div>

        <div className="Answer-form-container">
          <input
            style={{ backgroundColor: answerIndicatorColor }}
            className="answer-form-input-text"
            type="text"
            form="answer-form"
            onChange={(e) => setAnswer(e.target.value)}
            value={answer}
          />
          <button className="answer-form-button" onClick={checkAnswer}>
            Check
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
