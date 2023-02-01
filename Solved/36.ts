// https://leetcode.com/problems/valid-sudoku/
// 36. Valid Sudoku

// ------------------------- Jacob -------------------------
function isValidSudoku(board: string[][]): boolean {
  for (let i = 0; i < 9; i++) {
    const row = board[i];
    for (let k = 0; k < 9; k++) {
      const cell = row[k];

      if (Number.isInteger(Number(cell))) {
        // row check
        if (row.filter((item: string) => item === cell).length !== 1)
          return false;

        // line check
        const line = [];
        for (let x = 0; x < 9; x++) {
          line[x] = board[x][k];
        }
        if (line.filter((item: string) => item === cell).length !== 1)
          return false;

        // box check
        const box = [];
        const boxRowIndex = Math.floor(i / 3);
        const boxLineIndex = Math.floor(k / 3);
        for (let y = boxRowIndex * 3; y < boxRowIndex * 3 + 3; y++) {
          for (let z = boxLineIndex * 3; z < boxLineIndex * 3 + 3; z++) {
            board[y][z] && box.push(board[y][z]);
          }
        }
        if (box.filter((item: string) => item === cell).length !== 1)
          return false;
      }
    }
  }
  return true;
}

// ------------------------- Eva -------------------------
var isValidSudoku = function (board) {
  for (let i = 0; i < 9; i++) {
    let row = new Set(),
      col = new Set(),
      box = new Set();

    for (let j = 0; j < 9; j++) {
      let _row = board[i][j];
      let _col = board[j][i];
      let _box =
        board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];

      if (_row != ".") {
        if (row.has(_row)) return false;
        row.add(_row);
      }
      if (_col != ".") {
        if (col.has(_col)) return false;
        col.add(_col);
      }

      if (_box != ".") {
        if (box.has(_box)) return false;
        box.add(_box);
      }
    }
  }
  return true;
};

// ------------------------- Jay -------------------------

// ------------------------- Grace -------------------------
function isValidSudoku(board: string[][]): boolean {
  for (let i = 0; i < 9; i++) {
    let row: string[] = [];
    let column: string[] = [];

    for (let j = 0; j < 9; j++) {
      // row
      if (board[i][j] !== ".") {
        if (row.includes(board[i][j])) {
          return false;
        } else {
          row.push(board[i][j]);
        }
      }
      //column
      if (board[j][i] !== ".") {
        if (column.includes(board[j][i])) {
          return false;
        } else {
          column.push(board[j][i]);
        }
      }
      //box
      if (i % 3 == 0 && j % 3 == 0) {
        let box: string[] = [];
        let idx: number = 0;
        let boxCheck: string[] = [];
        //用迴圈取目前行開始三行的位置
        for (let k = i; k < i + 3; k++) {
          //把用slice抓到的三個值合併到box陣列中
          box = box.concat(board[k].slice(j, j + 3));
        }
        while (idx < 9) {
          if (box[idx] !== ".") {
            if (boxCheck.includes(box[idx])) {
              return false;
            } else {
              boxCheck.push(box[idx]);
            }
          }
          idx++;
        }
      }
    }
  }
  return true;
}

// ------------------------- Yu Chuan -------------------------
function isValidSudoku(board: string[][]): boolean {
  let isValid: boolean = false;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      // 如果沒有數字跳過
      if (board[i][j] === ".") continue;
      if (board[i][j] !== ".") {
        // row 是 board 的 i 組成
        const row: string[] = board[i];

        // col 是每個 row 的第 j 個組成
        const col: string[] = [];
        board[i].map((item, index) => col.push(board[index][j]));

        // square 先找出哪三個 row 再把這三個 row 要哪段 col 切掉
        // 會變成想這樣的格式 [[1,2,3],[4,5,6],[7,8,9]] 再用 flat() 把它變成 [1,2,3,4,5,6,7,8,9]
        let square: string[][] | string[] = [];
        if (i >= 0 && i < 3) {
          square = board.slice(0, 3);
        } else if (i >= 3 && i < 6) {
          square = board.slice(3, 6);
        } else {
          square = board.slice(6, 9);
        }

        square = square.map((squareItem) => {
          if (j >= 0 && j < 3) {
            squareItem = squareItem.slice(0, 3);
          } else if (j >= 3 && j < 6) {
            squareItem = squareItem.slice(3, 6);
          } else {
            squareItem = squareItem.slice(6, 9);
          }
          return squareItem;
        });

        square = square.flat();

        // 如果這個元素在 row, col, square 超過 1 個就代表有重複的，直接 return false
        isValid =
          row.filter((item) => item === board[i][j])?.length > 1 ||
          col.filter((item) => item === board[i][j])?.length > 1 ||
          square.filter((item) => item === board[i][j])?.length > 1;

        if (isValid) return false;
      }
    }
  }
  // 如果全部跑完沒有 return false 就是 return true
  return true;
}
