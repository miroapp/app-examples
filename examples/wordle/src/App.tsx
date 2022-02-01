import { useState, useEffect } from "react";
import { stickyIds, createWordle, setStickyColorAndText } from "./lib/board";
import { isWordInWordList, getRandomWord, isRightWord } from "./lib/word";

function App() {
  const [label, setLabel] = useState("")
  const [guess, setGuess] = useState("")
  const [randomWord, setRandomWord] = useState("")
  const [tries, setTries] = useState(0)

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGuess(e.target.value.toUpperCase())
  }

  // When user clicks on "start a new game"
  const handleNewGame = () => {
    setLabel("")
    setRandomWord(getRandomWord())
    // Create new Wordle
    createWordle();
    setTries(0)
  };

  // When user clicks on "Check"
  const handleCheckWord = () => {
    setLabel("")

    // Check if word is in word list
    if (!isWordInWordList(guess)) {
      // If not, let the user know that the word doesn't exist
      setLabel("Word doesn't exist")
    }
    // Check if it the user's guess is the right word
    else if (isRightWord(randomWord, guess)) {
      // Change the color of the line of sticky to green and add the corresponding letters to them
      for (let i = 0; i < guess.length; i++) {
        setStickyColorAndText(stickyIds[i][tries], "green", guess[i]);
      }
      setLabel("You won!")
    } else {
      // Check the statuses of each letter and update stickies
      guess.split("").forEach((letter, i) => {
        // if the letter is not in the word, the sticky note is black
        if (!randomWord.includes(letter)) {
          setStickyColorAndText(stickyIds[i][tries], "black", guess[i]);
        }
        // if the letter is right, the sticky note is green
        else if (letter === randomWord[i]) {
          setStickyColorAndText(stickyIds[i][tries], "green", guess[i]);
        }
        // if the letter is in the word, but not at the right place, the color is yellow
        else {
          setStickyColorAndText(stickyIds[i][tries], "yellow", guess[i]);
        }
      });

      // The user has 5 tries
      if (tries == 4) {
        setLabel("You lost!")
        setTries(0)
      }
      setTries(tries + 1);
    }
  };

  return (
    <div className="grid" style={{ height: "auto", width: "100%" }}>
      <div className="cs1 ce12"></div>
      <div className="cs1 ce12">
        {label !== "" && <span className="label label-warning" id="info-text">{label}</span>}
        <div className="form-group">
          <input
            className="input"
            maxLength={5}
            id="wordGuess"
            type="text"
            placeholder="Enter your word"
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="cs1 ce12">
        <button className="button button-primary" onClick={handleCheckWord}>
          Check
        </button>
        <button className="button button-primary" onClick={handleNewGame}>
          Start a new game
        </button>
      </div>
    </div>
  );
}
export default App;
