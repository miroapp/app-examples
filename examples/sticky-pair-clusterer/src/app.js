const { board } = window.miro;

document.getElementById("createPair").addEventListener("click", async () => {
  const pairId = `pair_${Date.now()}`; // Unique pair identifier based on timestamp

  const frames = await board.get({ type: "frame" });
  if (frames.length === 0) {
    alert("No frames found on the board. Please create a frame first.");
    return;
  }

  // Read the number of squares from the input field
  const noOfSquares = parseInt(
    document.getElementById("traitsCount").value,
    10,
  );

  // Validate the input
  if (isNaN(noOfSquares) || noOfSquares < 1 || noOfSquares > 1000) {
    alert("Please enter a valid number of squares between 1 and 1000.");
    return;
  }

  const frame = await findFrameByName("Benefit Template");
  const targetFrame = frame;
  const frameDimensions = await getFrameDimensions(frame);
  const squarePositions = calculateBestSquaresInRectangle(
    frameDimensions.width,
    frameDimensions.height,
    noOfSquares,
  );
  console.log("Square Positions:", squarePositions);

  // Calculate the upper-left corner of the frame
  const frameLeft = targetFrame.x - targetFrame.width / 2;
  const frameTop = targetFrame.y - targetFrame.height / 2;

  // Create sticky notes
  for (let i = 0; i < noOfSquares; i++) {
    const row = Math.floor(i / squarePositions.gridInfo.columns);
    const col = i % squarePositions.gridInfo.columns;
    const position = squarePositions.placement.getSquarePosition(row, col);

    await board.createStickyNote({
      content: `Note ${i + 1} of ${pairId}`,
      x:
        frameLeft +
        position.x +
        squarePositions.gridInfo.effectiveSquareSize / 2,
      y:
        frameTop +
        position.y +
        squarePositions.gridInfo.effectiveSquareSize / 2,
      width: squarePositions.gridInfo.effectiveSquareSize,
      style: {
        fillColor: "light_yellow",
      },
    });
  }

  console.log(`Created ${noOfSquares} sticky notes for pair ${pairId}`);
});

// const originalSizes = new Map(); // Store original sizes for each sticky note
// const resizedStickyNotes = new Set(); // Store the IDs of resized sticky notes

// // Function to double the size of a sticky note
// async function doubleSize(stickyNote) {
//   const { width, height } = stickyNote;
//
//   // Save the original size if not already saved
//   if (!originalSizes.has(stickyNote.id)) {
//     originalSizes.set(stickyNote.id, { width, height });
//   }
//   stickyNote.width = width * 2;
//   stickyNote.sync();
//
//   resizedStickyNotes.add(stickyNote.id); // Track resized sticky note
// }

// // Function to reset the sticky note size to its original size
// async function resetSize(stickyNote) {
//   const originalSize = originalSizes.get(stickyNote.id);
//   if (originalSize) {
//
//   stickyNote.width = originalSize.width;
//   stickyNote.sync();
//   //stickyNote.height= originalSize.height;
//   //stickyNote.sync();
//
//     // Remove from the resized sticky notes set and the original size map
//     resizedStickyNotes.delete(stickyNote.id);
//     originalSizes.delete(stickyNote.id);
//   }
// }

// Event listener for selection changes
// miro.board.ui.on('selection:update', async (event) => {
//   const selectedWidgets = event.items;
//
//   for (const widget of selectedWidgets) {
//     if (widget.type === 'sticky_note') {
//       // Get the metadata of the selected sticky note
//       const metadata = await widget.getMetadata('myApp');
//
//       // Check if the sticky note has a pairId
//       if (metadata && metadata.pairId && metadata.pairedNoteId) {
//         const pairedNoteId = metadata.pairedNoteId;
//
//         // Double the size of the selected sticky note
//         await doubleSize(widget);
//
//         // Find the paired sticky note and double its size
//         const [pairedNote] = await miro.board.widgets.get({ id: pairedNoteId });
//         if (pairedNote) {
//           await doubleSize(pairedNote);
//         }
//       } else {
//         // If the sticky note doesn't have a pair, just resize the selected one
//         await doubleSize(widget);
//       }
//     }
//   }
//
//   // Handle unselected sticky notes by restoring their original size
//   const allStickyNotes = await miro.board.widgets.get({ type: 'sticky_note' });
//   const unselectedStickyNotes = allStickyNotes.filter(
//     (stickyNote) => !selectedWidgets.some((selected) => selected.id === stickyNote.id)
//   );
//
//   for (const stickyNote of unselectedStickyNotes) {
//     if (resizedStickyNotes.has(stickyNote.id)) {
//       await resetSize(stickyNote);
//     }
//   }
// });

// Function to find a frame by name
async function findFrameByName(frameName) {
  const frames = await board.get({ type: "frame" });
  return frames.find((frame) => frame.title === frameName);
}

// New function to get frame dimensions
async function getFrameDimensions(frame) {
  if (!frame) {
    console.error("Frame not found");
    return null;
  }

  return {
    width: frame.width,
    height: frame.height,
    x: frame.x,
    y: frame.y,
  };
}

// Example usage:
// const frame = await findFrameByName('My Frame');
// const dimensions = await getFrameDimensions(frame);
// console.log('Frame dimensions:', dimensions);
function calculateBestSquaresInRectangle(
  rectangleWidth,
  rectangleHeight,
  numSquares,
  margin = 0.1,
) {
  // Compute ratio of the rectangle
  var ratio = rectangleWidth / rectangleHeight;

  // Initial estimates for number of columns and rows
  var ncols_float = Math.sqrt(numSquares * ratio);
  var nrows_float = numSquares / ncols_float;

  // Find the best option for filling the whole height
  var nrows1 = Math.ceil(nrows_float);
  var ncols1 = Math.ceil(numSquares / nrows1);
  while (nrows1 * ratio < ncols1) {
    nrows1++;
    ncols1 = Math.ceil(numSquares / nrows1);
  }
  var cell_size1 = rectangleHeight / nrows1;

  // Find the best option for filling the whole width
  var ncols2 = Math.ceil(ncols_float);
  var nrows2 = Math.ceil(numSquares / ncols2);
  while (ncols2 < nrows2 * ratio) {
    ncols2++;
    nrows2 = Math.ceil(numSquares / ncols2);
  }
  var cell_size2 = rectangleWidth / ncols2;

  // Determine the best configuration
  var nrows, ncols, cell_size;
  if (cell_size1 < cell_size2) {
    nrows = nrows2;
    ncols = ncols2;
    cell_size = cell_size2;
  } else {
    nrows = nrows1;
    ncols = ncols1;
    cell_size = cell_size1;
  }

  // Calculate effective cell size including margin
  const effectiveCellSize = cell_size * (1 - margin);

  // Calculate usable area within the rectangle
  const usableWidth = ncols * effectiveCellSize;
  const usableHeight = nrows * effectiveCellSize;

  // Calculate offset to center the grid in the rectangle
  const offsetX = (rectangleWidth - usableWidth) / 2;
  const offsetY = (rectangleHeight - usableHeight) / 2;

  return {
    gridInfo: {
      columns: ncols,
      rows: nrows,
      squareSize: cell_size,
      margin: margin,
      effectiveSquareSize: effectiveCellSize,
    },
    rectangleInfo: {
      width: rectangleWidth,
      height: rectangleHeight,
      usableWidth: usableWidth,
      usableHeight: usableHeight,
    },
    placement: {
      offsetX: offsetX,
      offsetY: offsetY,
      getSquarePosition: (row, col) => ({
        x: offsetX + col * effectiveCellSize,
        y: offsetY + row * effectiveCellSize,
      }),
    },
    totalSquares: nrows * ncols,
  };
}
