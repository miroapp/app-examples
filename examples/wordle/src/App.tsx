import * as React from "react";
import { stickyIds, createWordle, setStickyColorAndText } from "./lib/board";
import { isWordInWordList, getRandomWord, isRightWord } from "./lib/word";
function App() {
  

  let inputElement;
  let guess: string;
  let tries: number;
  let randomWord: string;
  const textElement = document.getElementById("info-text");

  // When user clicks on "start a new game"
  const handleNewGame = () => {
    textElement!.textContent = "";
    randomWord = getRandomWord();
    // Create new Wordle
    // Used for test to display the word
    alert(randomWord);
    createWordle();
    tries = 0;
  };

  // When user clicks on "Check"
  const handleCheckWord = () => {
    // Get the input value of the user
    inputElement = document.getElementById("wordGuess") as HTMLInputElement;
    guess = inputElement.value.toUpperCase();
    textElement!.textContent = "";

    // Check if word is in word list
    if (!isWordInWordList(guess)) {
      // If not, let the user know that the word doesn't exist
      textElement!.textContent = "Word doesn't exist";
    }
    // Check if it the user's guess is the right word
    else if (isRightWord(randomWord, guess)) {
      // Change the color of the line of sticky to green and add the corresponding letters to them
      for (let i = 0; i < guess.length; i++) {
        setStickyColorAndText(stickyIds[i][tries], "green", guess[i]);
      }
      textElement!.textContent = "You won!";
    } else {
      // Check the statuses of each letter and update stickies
      guess.split("").forEach((letter, i) => {
        // if the letter is not in the word, the sticky note is gray
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
            maxLength={5}
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
