/**
 * Feature List:
 * -------------
 * 1. Matrix Creation and Management
 *    - Create matrix with specified rows and columns
 *    - Set and update cell values
 *    - Link columns to frames
 *    - Map rows to sticky notes
 *
 * 2. UI Interactions
 *    - Detect selected sticky note and double its size
 *    - Detect deselected sticky note and change its size to normal
 *    - Detect content changes in sticky notes and update correspoding cell values and sticky notes that their content should be the same
 *    - Detect selected sticky note and double the size of its corresponding sticky notes in all other frames
 *    - Detect deselected sticky note and change the updated sticky notes to their normal size
 *
 * 3. Benefit-Trait Matrix Generation
 *    - Create benefit-trait matrix with specified dimensions
 *    - Calculate and populate matrix values
 *
 * 4. Visualization
 *    - Create visual representation of matrix on Miro board
 *    - Position squares within frames
 *
 * 5. Debug and Testing
 *    - Debug button to test matrix creation
 *    - Console logging for various operations
 *
 * 6. Event Handling
 *    - Listen for selection updates
 *    - Listen for content updates
 *
 * TODO: Implement clustering algorithm for sticky note pairs
 * TODO: Add functionality to save and load matrix state
 * TODO: Implement undo/redo functionality for matrix operations
 */

const { board } = window.miro;
// Global definitions
let g_matrix = null;

// Function to save the matrix to the board
async function saveMatrixToBoard(matrix) {
  const matrixData = JSON.stringify({
    rows: matrix.rows,
    columns: matrix.columns,
    data: matrix.matrix,
    columnToFrameMap: Object.fromEntries(matrix.columnToFrameMap),
    rowToStickyNotesMap: Object.fromEntries(matrix.rowToStickyNotesMap),
    rowNames: matrix.rowNames ? Object.fromEntries(matrix.rowNames) : undefined,
    columnNames: matrix.columnNames
      ? Object.fromEntries(matrix.columnNames)
      : undefined,
  });
  await board.setAppData("benefitTraitMatrix", matrixData);
  let matrixStoredData = await board.getAppData("benefitTraitMatrix");
  console.log("Matrix read back from board:", matrixStoredData);
  console.log("Matrix saved to board:", matrixData);
}

// Function to load the matrix from the board
async function loadMatrixFromBoard() {
  const storedMatrixData = await board.getAppData("benefitTraitMatrix");
  if (storedMatrixData) {
    const storedMatrix = JSON.parse(storedMatrixData);
    const matrix = new Matrix(storedMatrix.rows, storedMatrix.columns);
    matrix.matrix = storedMatrix.data;
    matrix.columnToFrameMap = new Map(
      Object.entries(storedMatrix.columnToFrameMap),
    );
    matrix.rowToStickyNotesMap = new Map(
      Object.entries(storedMatrix.rowToStickyNotesMap),
    );
    if (storedMatrix.rowNames) {
      matrix.rowNames = new Map(Object.entries(storedMatrix.rowNames));
    }
    if (storedMatrix.columnNames) {
      matrix.columnNames = new Map(Object.entries(storedMatrix.columnNames));
    }
    g_matrix = matrix;
    return matrix;
  }
  return null;
}

//////////////////////////////////////////////////////////////////////////////////////////////////
class MatrixCell {
  constructor(stickyNoteId) {
    this.stickyNoteId = stickyNoteId; // Reference to a sticky note
  }
}

class Matrix {
  constructor(rows, columns) {
    this.rows = rows; // traits
    this.columns = columns; // benefits
    this.matrix = Array.from({ length: rows }, () => Array(columns).fill(null));
    this.columnToFrameMap = new Map(); // Maps column index to frame ID
    this.rowToStickyNotesMap = new Map(); // Maps row index to an array of sticky note IDs
  }

  setCell(row, col, stickyNoteId) {
    const cell = new MatrixCell(stickyNoteId);
    this.matrix[row][col] = cell;

    // Add sticky note ID to the row map
    if (!this.rowToStickyNotesMap.has(row)) {
      this.rowToStickyNotesMap.set(row, []);
    }
    this.rowToStickyNotesMap.get(row).push(stickyNoteId);
  }

  linkColumnToFrame(col, frameId) {
    this.columnToFrameMap.set(col, frameId);
  }

  getStickyNotesForRow(row) {
    return this.rowToStickyNotesMap.get(row) || [];
  }

  getFrameForColumn(col) {
    return this.columnToFrameMap.get(col);
  }
  // CRUD operations for Matrix

  getCell(row, col) {
    return this.matrix[row][col];
  }

  updateCell(row, col, stickyNoteId) {
    if (row >= 0 && row < this.rows && col >= 0 && col < this.columns) {
      this.setCell(row, col, stickyNoteId);
      return true;
    }
    return false;
  }

  addRow() {
    this.matrix.push(Array(this.columns).fill(null));
    this.rows++;
  }

  removeRow(rowIndex) {
    if (rowIndex >= 0 && rowIndex < this.rows) {
      this.matrix.splice(rowIndex, 1);
      this.rows--;
      this.rowToStickyNotesMap.delete(rowIndex);
      return true;
    }
    return false;
  }
  setRowName(rowIndex, name) {
    if (rowIndex >= 0 && rowIndex < this.rows) {
      if (!this.rowNames) {
        this.rowNames = new Map();
      }
      this.rowNames.set(rowIndex, name);
      return true;
    }
    return false;
  }

  getRowName(rowIndex) {
    if (this.rowNames && rowIndex >= 0 && rowIndex < this.rows) {
      return this.rowNames.get(rowIndex);
    }
    return null;
  }

  setColumnName(colIndex, name) {
    if (colIndex >= 0 && colIndex < this.columns) {
      if (!this.columnNames) {
        this.columnNames = new Map();
      }
      this.columnNames.set(colIndex, name);
      return true;
    }
    return false;
  }

  getColumnName(colIndex) {
    if (this.columnNames && colIndex >= 0 && colIndex < this.columns) {
      return this.columnNames.get(colIndex);
    }
    return null;
  }

  removeColumn(colIndex) {
    if (colIndex >= 0 && colIndex < this.columns) {
      for (let i = 0; i < this.rows; i++) {
        this.matrix[i].splice(colIndex, 1);
      }
      this.columns--;
      this.columnToFrameMap.delete(colIndex);
      return true;
    }
    return false;
  }
  updateRowName(rowIndex, newName) {
    if (rowIndex >= 0 && rowIndex < this.rows) {
      if (!this.rowNames) {
        this.rowNames = new Map();
      }
      this.rowNames.set(rowIndex, newName);
      return true;
    }
    return false;
  }

  updateColumnName(colIndex, newName) {
    if (colIndex >= 0 && colIndex < this.columns) {
      if (!this.columnNames) {
        this.columnNames = new Map();
      }
      this.columnNames.set(colIndex, newName);
      return true;
    }
    return false;
  }

  deleteRowName(rowIndex) {
    if (this.rowNames && rowIndex >= 0 && rowIndex < this.rows) {
      return this.rowNames.delete(rowIndex);
    }
    return false;
  }

  deleteColumnName(colIndex) {
    if (this.columnNames && colIndex >= 0 && colIndex < this.columns) {
      return this.columnNames.delete(colIndex);
    }
    return false;
  }

  getAllRowNames() {
    return this.rowNames ? Object.fromEntries(this.rowNames) : {};
  }

  getAllColumnNames() {
    return this.columnNames ? Object.fromEntries(this.columnNames) : {};
  }

  async addColumn() {
    const newColumnIndex = this.columns;
    this.columns++;

    // Create a new frame for the column
    const frame = await board.createFrame({
      title: `Column ${newColumnIndex}`,
      width: 1920, // 1080p width
      height: 1080, // 1080p height
    });

    // Link the new column to the frame
    this.linkColumnToFrame(newColumnIndex, frame.id);

    // Add a new cell to each row and create a sticky note for it
    for (let i = 0; i < this.rows; i++) {
      if (!this.matrix[i]) {
        this.matrix[i] = [];
      }
      const sticky = await board.createStickyNote({
        content: "",
        x: frame.x,
        y: frame.y + i * 100, // Adjust vertical position for each sticky note
        width: 200,
      });
      this.matrix[i][newColumnIndex] = { value: 0, stickyNoteId: sticky.id };
    }

    // Update column names if necessary
    if (this.columnNames) {
      this.updateColumnName(newColumnIndex, `Column ${newColumnIndex}`);
    }

    return newColumnIndex;
  }

  // Additional methods to manage the matrix, rows, and columns can be added here
  findCellByStickyNoteId(stickyNoteId) {
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.columns; col++) {
        const cell = this.matrix[row][col];
        if (cell && cell.stickyNoteId === stickyNoteId) {
          return { cell, row, col };
        }
      }
    }
    return null;
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// Example usage:
// const matrix = new Matrix(3, 3);
//
// // Set cell values and link sticky notes
// matrix.setCell(0, 0, 5, 'stickyNote1');
// matrix.setCell(0, 1, 3, 'stickyNote2');
// matrix.setCell(1, 0, 2, 'stickyNote3');
// matrix.setCell(2, 2, 4, 'stickyNote4');
//
// // Link columns to frames
// matrix.linkColumnToFrame(0, 'frame1');
// matrix.linkColumnToFrame(1, 'frame2');
// matrix.linkColumnToFrame(2, 'frame3');
//
// // Get sticky notes for a row
// console.log(matrix.getStickyNotesForRow(0)); // ['stickyNote1', 'stickyNote2']
//
// // Get frame for a column
// console.log(matrix.getFrameForColumn(0)); // 'frame1'
//
// // Add a new row
// matrix.addRow();
// console.log(matrix.rows); // 4
//
// // Add a new column
// matrix.addColumn();
// console.log(matrix.columns); // 4
//
// // Update row and column names
// matrix.updateRowName(0, 'First Row');
// matrix.updateColumnName(1, 'Second Column');
//
// // Get all row and column names
// console.log(matrix.getAllRowNames());
// console.log(matrix.getAllColumnNames());
//
// matrix.linkColumnToFrame(0, 'frame1');
//
// console.log(matrix.getStickyNotesForRow(0)); // ['stickyNote1', 'stickyNote2']
// console.log(matrix.getFrameForColumn(0)); // 'frame1'
//////////////////////////////////////////////////////////////////////////////////////////////////

// Example usage:
async function createMatrix() {
  console.log("Create Matrix button clicked");

  // Get the number of rows and columns from the input fields
  const rowsCount = parseInt(document.getElementById("rowsCount").value, 10);
  const columnsCount = parseInt(
    document.getElementById("columnsCount").value,
    10,
  );

  // Validate the input
  if (
    isNaN(rowsCount) ||
    isNaN(columnsCount) ||
    rowsCount < 1 ||
    columnsCount < 1
  ) {
    alert("Please enter valid numbers for rows and columns.");
    return;
  }

  g_matrix = new Matrix(rowsCount, columnsCount);

  // Create frames for each column
  for (let j = 0; j < columnsCount; j++) {
    const frame = await board.createFrame({
      title: `Column ${j + 1}`,
      width: 1920,
      height: 1080,
      x: j * 2000, // Offset each frame horizontally
      y: 0,
      style: {
        fillColor: "#ffffff", // Set background color to white
      },
    });
    g_matrix.linkColumnToFrame(j, frame.id);
  }

  // Create sticky notes for each cell in each column
  for (let j = 0; j < columnsCount; j++) {
    const frameId = g_matrix.getFrameForColumn(j);
    const frame = await board.getById(frameId);
    const squarePositions = calculateBestSquaresInRectangle(
      frame.width,
      frame.height,
      rowsCount,
    );

    const frameLeft = frame.x - frame.width / 2;
    const frameTop = frame.y - frame.height / 2;

    for (let i = 0; i < rowsCount; i++) {
      const row = Math.floor(i / squarePositions.gridInfo.columns);
      const col = i % squarePositions.gridInfo.columns;
      const position = squarePositions.placement.getSquarePosition(row, col);

      const stickyNote = await board.createStickyNote({
        content: `Cell ${i + 1},${j + 1}`,
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
      await frame.add(stickyNote);

      g_matrix.setCell(i, j, stickyNote.id);
    }
  }
  await saveMatrixToBoard(g_matrix);

  console.log("Matrix created and saved:", g_matrix);
}

// Function to check if content of selected sticky note has changed
// async function checkStickyNoteContentChange(item) {
//   if (item.type === "sticky_note") {
//     const currentContent = item.content;
//
//     if (!item.originalContent) {
//       // If it's newly selected, store the original content and print it
//       item.originalContent = currentContent;
//       console.log(`Sticky note ${item.id} selected. Content:`, currentContent);
//     } else {
//       // If it's already selected, check for changes
//       if (currentContent !== item.originalContent) {
//         console.log(`Content changed for sticky note ${item.id}`);
//         console.log(`Original: ${item.originalContent}`);
//         console.log(`New: ${currentContent}`);
//
//         // Update the original content
//         item.originalContent = currentContent;
//       }
//     }
//   }
// }

// Update the selection:update event listener
let previouslySelectedItems = [];
let previouslySelectedContent = { id: null, content: null };
board.ui.on("selection:update", async (event) => {
  if (g_matrix === null) {
    await loadMatrixFromBoard(); // todo: either this or loadmatrixfromboard
    if (g_matrix === null) {
      console.log("Matrix not found");
      return;
    }
    console.log("Matrix loaded from board:", g_matrix);
  }

  // Store the previously selected items for comparison
  // Get the currently selected items

  // Check if only one item is selected and it's a sticky note
  if (event.items.length === 1 && event.items[0].type === "sticky_note") {
    const result = g_matrix.findCellByStickyNoteId(event.items[0].id);
    if (null == result) {
      return;
    }
    // Double the size of all sticky notes in the same row
    for (let col = 0; col < g_matrix.columns; col++) {
      const cell = g_matrix.matrix[result.row][col];
      if (cell && cell.stickyNoteId) {
        let stickyNote = await board.getById(cell.stickyNoteId);
        // Add the sticky note to the previously selected items
        if (stickyNote) {
          previouslySelectedItems.push(stickyNote.id);
          stickyNote.width *= 2;
          await stickyNote.sync();
        }
      }
    }
    previouslySelectedContent = {
      id: event.items[0].id,
      content: event.items[0].content,
    };
  } else {
    // User has either deselected everything or selected something else
    // Restore the size of all previously selected sticky notes
    for (const prevSelectedItemId of previouslySelectedItems) {
      const prevSelectedItem = await board.getById(prevSelectedItemId);
      if (prevSelectedItem) {
        prevSelectedItem.width /= 2;
        await prevSelectedItem.sync();
      }
    }
    if (
      previouslySelectedContent.content !==
      (await board.getById(previouslySelectedContent.id)).content
    ) {
      console.log(
        "Content changed for sticky note:",
        previouslySelectedContent.id,
      );
      const result = g_matrix.findCellByStickyNoteId(
        previouslySelectedContent.id,
      );
      if (result) {
        const newContent = (await board.getById(previouslySelectedContent.id))
          .content;
        for (let col = 0; col < g_matrix.columns; col++) {
          const cell = g_matrix.matrix[result.row][col];
          if (cell && cell.stickyNoteId) {
            let stickyNote = await board.getById(cell.stickyNoteId);
            if (stickyNote) {
              stickyNote.content = newContent;
              await stickyNote.sync();
            }
          }
        }
      }
    }
    // Clear the previouslySelectedItems array
    previouslySelectedItems = [];
  }
});

document.getElementById("createMatrix").addEventListener("click", createMatrix);

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
