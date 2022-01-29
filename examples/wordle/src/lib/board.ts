import { StickyNote } from "@mirohq/websdk-types";

const { board } = window.miro;

const spaceBetweenStickies = 120;
const center = 0;
const numberOfChances = 5;
const numberOfLetters = 5;

// export let stickyIds: string[][];
// export let stickyIds: Array<Array<string>>
export const stickyIds = [
  ["string", "string", "string", "string", "string"],
  ["string", "string", "string", "string", "string"],
  ["string", "string", "string", "string", "string"],
  ["string", "string", "string", "string", "string"],
  ["string", "string", "string", "string", "string"],
];
let sticky;
export const createWordle = async () => {
  // Generate Wordle
  for (let i = 0; i < numberOfLetters; i++) {
    for (let j = 0; j < numberOfChances; j++) {
      sticky = await board.createStickyNote({
        style: {
          fillColor: "black",
        },
        x: center + i * spaceBetweenStickies,
        y: center + j * spaceBetweenStickies,
      });
      stickyIds[i][j] = sticky.id;
    }
  }
};

export const setStickyColorAndText = async (
  id: string,
  newColor: string,
  newText: string
) => {
  const sticky = await board.getById(id);
  sticky.content = newText;
  sticky.style.fillColor = newColor;
  await sticky.sync();
};
