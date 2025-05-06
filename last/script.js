const puzzle = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

const solution = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

const sudokuContainer = document.getElementById("sudoku");
const message = document.getElementById("message");

// Generate grid
for (let row = 0; row < 9; row++) {
  for (let col = 0; col < 9; col++) {
    const input = document.createElement("input");
    input.type = "number";
    input.min = 1;
    input.max = 9;
    input.dataset.row = row;
    input.dataset.col = col;

    if (puzzle[row][col] !== 0) {
      input.value = puzzle[row][col];
      input.disabled = true;
      input.classList.add("prefilled");
    }

    // Bold borders for subgrids
    if (col % 3 === 2 && col !== 8) input.style.borderRight = "2px solid black";
    if (row % 3 === 2 && row !== 8) input.style.borderBottom = "2px solid black";

    input.addEventListener("input", (event) => {
      const value = parseInt(event.target.value);
      const row = parseInt(event.target.dataset.row);
      const col = parseInt(event.target.dataset.col);

      if (value === solution[row][col]) {
        message.textContent = "Correct!";
        message.className = "success";
      } else {
        message.textContent = "Incorrect. Keep trying!";
        message.className = "error";
      }
    });

    sudokuContainer.appendChild(input);
  }
}