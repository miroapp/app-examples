import { useState, StrictMode } from "react";
import ReactDOM from "react-dom";
import {
  stickyIdsTable,
  createWordle,
  setStickyColorAndText,
  numberOfChances,
  deleteStickyNotes,
} from "./lib/board";
import { isWordInWordList, getRandomWord, isRightWord } from "./lib/word";

function App() {
  const [label, setLabel] = useState("");
  const [isFirstGame, setIsFirstGame] = useState(1);
  const [guess, setGuess] = useState("");
  const [startGameButtonText, setStartButtonText] = useState("Start new game");
  const [randomWord, setRandomWord] = useState("");
  const [tries, setTries] = useState(0);
  interface Solution {
    color?: string;
    letter?: string;
    isUsed?: boolean;
  }
  const solution = new Array<Solution>(randomWord.length);

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGuess(e.target.value.toUpperCase());
  };

  // When user clicks on "start a new game"
  const handleNewGame = async () => {
    if (!isFirstGame) {
      // Delete sticky notes from previous game
      deleteStickyNotes();
    }
    const viewport = await miro.board.viewport.get();
    setLabel("");
    setRandomWord(getRandomWord());
    // Create new Wordle
    createWordle(viewport);
    setTries(0);
    setIsFirstGame(0);
  };

  // When user clicks on "Check"
  const handleCheckWord = () => {
    setLabel("");
    console.log(randomWord);
    // Check if the word is in word list
    if (!isWordInWordList(guess)) {
      // If not, let the user know that the word doesn't exist
      setLabel("Word doesn't exist");
    }
    // Check if it the user's guess is the right word
    else if (isRightWord(randomWord, guess)) {
      // Change the color of the line of sticky to green and add the corresponding letters to them
      for (let i = 0; i < guess.length; i++) {
        setStickyColorAndText(stickyIdsTable[i][tries], "green", guess[i]);
      }
      setLabel("You won!");
    } else {
      // Mark all the right letters in the word with green label
      guess.split("").forEach((letter, i) => {
        if (letter === randomWord[i]) {
          solution[i] = { color: "green", letter: letter, isUsed: true };
        }
      });
      // Mark all the wrong letters in the word with black label
      guess.split("").forEach((letter, i) => {
        // If the letter is already marked, don't mark it again
        if (solution[i] && typeof solution[i].letter != "undefined") return;

        // If the letter is wrong, set the color as black
        if (!randomWord.includes(letter)) {
          solution[i] = { color: "black", letter: letter, isUsed: false };
        }
      });
      guess.split("").forEach((letter, i) => {
        // If the letter is already marked, don't mark it again
        if (solution[i] && typeof solution[i].letter != "undefined") return;

        // Check if the letter is somewhere else in the word and if this letter has not already been marked as yellow
        // findIndex() method returns the index of the first element in the array that satisfies the provided testing function.
        // Otherwise, it returns -1
        const charIndex = randomWord
          .split("")
          .findIndex(
            (x, index) =>
              x === letter &&
              (typeof solution[index] == "undefined" ||
                typeof solution[index].isUsed == "undefined" ||
                !solution[index].isUsed)
          );
        if (charIndex > -1) {
          // Mark the letter as yellow
          solution[i] = { color: "yellow", letter: letter, isUsed: false };
          // Marked the corresponding letter as used
          solution[charIndex] = { ...solution[charIndex], isUsed: true };
          return;
        } else {
          solution[i] = { color: "black", letter: letter };
          return;
        }
      });

      // Update the sticky notes
      solution.forEach((sol, i) => {
        setStickyColorAndText(stickyIdsTable[i][tries], sol.color, sol.letter);
      });

      // The user has 6 tries
      if (tries == numberOfChances - 1) {
        setLabel('You lost! the word was "' + randomWord + '"');
        setTries(0);
      }
      setTries(tries + 1);
    }
  };
  return (
    <div className="grid" style={{ height: "auto", width: "100%" }}>
      <div className="cs1 ce12"></div>
      <div className="cs1 ce12">
        {label !== "" && (
          <span className="label label-warning" id="info-text">
            {label}
          </span>
        )}
        <div className="form-group">
          <input
            className="input"
            maxLength={5}
            id="wordGuess"
            type="text"
            placeholder="Enter your word"
            onChange={handleInputChange}
            autoComplete="off"
          />
        </div>
      </div>
      <div className="cs1 ce12">
        <button
          id="checkWord"
          className="button button-primary"
          onClick={handleCheckWord}
        >
          Check
        </button>
        <button
          id="startGame"
          className="button button-primary"
          onClick={handleNewGame}
        >
          {startGameButtonText}
        </button>
      </div>
    </div>
  );
}

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
