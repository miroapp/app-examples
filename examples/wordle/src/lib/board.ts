const { board } = window.miro;

const spaceBetweenStickies = 210;
const center = 0;
const numberOfChances = 5;
const numberOfLetters = 5;

export const stickyIds = [
  ["string", "string", "string", "string", "string"],
  ["string", "string", "string", "string", "string"],
  ["string", "string", "string", "string", "string"],
  ["string", "string", "string", "string", "string"],
  ["string", "string", "string", "string", "string"],
];

let sticky;

// Add black sticky notes 5*5
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
      // Store each sticky note id for future updates
      stickyIds[i][j] = sticky.id;
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
