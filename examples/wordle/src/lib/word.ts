import { WORDS } from "../constants/wordList";
import { VALIDGUESSES } from "../constants/validGuesses";

export const isWordInWordList = (word: string) => {
  return (
    WORDS.includes(word.toLowerCase()) ||
    VALIDGUESSES.includes(word.toLowerCase())
  );
};

export const getRandomWord = () => {
  return WORDS[Math.floor(Math.random() * WORDS.length) + 1].toUpperCase();
};

export const isRightWord = (word: string, guess: string) => {
  return word === guess;
};
