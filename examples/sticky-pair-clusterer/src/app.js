const { board } = window.miro;

document.getElementById('createPair').addEventListener('click', async () => {
  const pairId = `pair_${Date.now()}`; // Unique pair identifier based on timestamp


  const frames = await board.get({ type: 'frame' });
  if (frames.length === 0) {
    alert('No frames found on the board. Please create a frame first.');
    return;
  }
  const targetFrame = frames[0]; // Using the first frame found

  const centerX = targetFrame.x;
  const centerY = targetFrame.y;

  const stickyNote1 = await board.createStickyNote({
    content: `Note 1 of ${pairId}`,
    x: centerX - 100,
    y: centerY,
        style: {
      fillColor: "red", // Red color using valid enum value
    },
  });

  const stickyNote2 = await board.createStickyNote({
    content: `Note 2 of ${pairId}`,
    x: centerX + 100,
    y: centerY,
        style: {
      fillColor: "red", // Red color using valid enum value
    },
  });

  // Update first sticky note to reference the second sticky note
  await board.get([{ id: stickyNote1.id, metadata: { myApp: { pairId: pairId, pairedNoteId: stickyNote2.id } } }]);
});

async function doubleStickySizeOnSelect() {
  const originalSizes = new Map(); // Store original sizes for each sticky note

  // Function to double the size of the sticky note
  async function doubleSize(stickyNote) {
    const { width, height } = stickyNote;
    // Save the original size if not already saved
    if (!originalSizes.has(stickyNote.id)) {
      originalSizes.set(stickyNote.id, { width, height });
    }
    // Double the size
    await stickyNote.update({
      width: width * 2,
      height: height * 2,
    });
  }

  // Function to reset the sticky note size to its original size
  async function resetSize(stickyNote) {
    const originalSize = originalSizes.get(stickyNote.id);
    if (originalSize) {
      await stickyNote.update({
        width: originalSize.width,
        height: originalSize.height,
      });
    }
  }

  // Event listener for selection change
  miro.board.ui.on('selection:update', async (event) => {
    const selectedWidgets = event.items;
    const allWidgets = await miro.board.widgets.get();

    // Loop through all sticky notes
    for (const widget of allWidgets) {
      if (widget.type === 'sticky_note') {
        if (selectedWidgets.some((selected) => selected.id === widget.id)) {
          // If the sticky note is selected, double its size
          await doubleSize(widget);
        } else {
          // If the sticky note is unselected, reset its size
          await resetSize(widget);
        }
      }
    }
  });
}
/** When a user clicks and selects multiple board items on a board:
 *  1. The 'selection:update' method logs the selection to the developer console
 *  2. A filter identifies sticky note items in the selection
 *  3. The color of the sticky notes is changed to 'cyan'
 */

// Listen to the 'selection:update' event
miro.board.ui.on('selection:update', async (event) => {
  console.log('Subscribed to selection update event', event);
  console.log(event.items);
  const selectedItems = event.items;

  // Filter sticky notes from the selected items
  const stickyNotes = selectedItems.filter((item) => item.type === 'sticky_note');

  // Change the fill color of the sticky notes
  for (const stickyNote of stickyNotes) {
    stickyNote.style.fillColor = 'yellow';
    await stickyNote.sync();
  }
});
// Initialize the app
