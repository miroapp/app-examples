import * as React from "react";
import { stickyIds, createWordle, setStickyColorAndText } from "./lib/board";
import { isWordInWordList, getRandomWord, isRightWord } from "./lib/word";
function App() {
  const { board } = window.miro;

  let inputElement;
  let guess: string;
  let tries: number;
  let randomWord: string;
  const textElement = document.getElementById("info-text");

  const handleNewGame = () => {
    textElement!.textContent = "";
    randomWord = getRandomWord();
    alert(randomWord);
    // Create new Wordle
    createWordle();
    tries = 0;
  };

  const handleCheckWord = () => {
    inputElement = document.getElementById("wordGuess") as HTMLInputElement;
    guess = inputElement.value.toUpperCase();
    textElement!.textContent = "";
    alert(randomWord);

    // Check if word is in word list
    if (!isWordInWordList(guess)) {
      // Let the user know that the word doesn't exist
      textElement!.textContent = "Word doesn't exist";
    }
    // Check if it is a winning word
    else if (isRightWord(randomWord, guess)) {
      // Change colors of the line of sticky
      for (let i = 0; i < guess.length; i++) {
        setStickyColorAndText(stickyIds[i][tries], "green", guess[i]);
      }
      textElement!.textContent = "You won!";
    } else {
      // Check the statuses of the letter and update stickies
      guess.split("").forEach((letter, i) => {
        // if the letter is not in the word, the sticky is gray
        if (!randomWord.includes(letter)) {
          setStickyColorAndText(stickyIds[i][tries], "black", guess[i]);
        }
        // if the letter is right,change sticky color to green
        else if (letter === randomWord[i]) {
          setStickyColorAndText(stickyIds[i][tries], "green", guess[i]);
        }
        // if the letter is in the word, but not right, the status is present
        else {
          setStickyColorAndText(stickyIds[i][tries], "yellow", guess[i]);
        }
      });

      if (tries == 4) {
        textElement!.textContent = "You lost!";
        tries = 0;
      }
      tries++;
    }
  };

  return (
    <div className="grid" style={{ height: "auto", width: "100%" }}>
      <div className="cs1 ce12"></div>
      <div className="cs1 ce12">
        <span className="label label-warning" id="info-text"></span>
        <div className="form-group">
          <input
            className="input"
            maxLength="5"
            id="wordGuess"
            type="text"
            placeholder="Enter your word"
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
