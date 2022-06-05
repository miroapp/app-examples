import { Rect, StickyNote } from "@mirohq/websdk-types";

const { board } = window.miro;

const spaceBetweenStickies = 210;
export const numberOfChances = 6;
const numberOfLetters = 5;

export const stickyIdsTable = [
  ["string", "string", "string", "string", "string"],
  ["string", "string", "string", "string", "string"],
  ["string", "string", "string", "string", "string"],
  ["string", "string", "string", "string", "string"],
  ["string", "string", "string", "string", "string"],
  ["string", "string", "string", "string", "string"],
];

let sticky;

// Add black sticky notes
export const createWordle = async (viewport: Rect) => {
  // Generate Wordle
  for (let i = 0; i < numberOfLetters; i++) {
    for (let j = 0; j < numberOfChances; j++) {
      sticky = await board.createStickyNote({
        style: {
          fillColor: "black",
        },
        x: viewport.x + 0.5 * viewport.height + i * spaceBetweenStickies,
        y: viewport.y + 0.3 * viewport.width + j * spaceBetweenStickies,
      });
      // Store each sticky note id for future updates
      stickyIdsTable[i][j] = sticky.id;
    }
  }
};

// Helper to change the color and the text of a sticky note by its id
export const setStickyColorAndText = async (
  id: string,
  newColor: string,
  newText: string
) => {
  // Retrieve the sticky note by its id
  const sticky = await board.getById(id);
  sticky.content = newText;
  sticky.style.fillColor = newColor;
  // Sync the changes
  await sticky.sync();
};

export const deleteStickyNotes = async () => {
  stickyIdsTable.forEach((stickyIds) => {
    stickyIds.forEach(async (stickyId) => {
      const sticky = await board.getById(stickyId);
      board.remove(sticky);
    });
  });
};
