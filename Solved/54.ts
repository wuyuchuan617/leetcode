// https://leetcode.com/problems/spiral-matrix/
// 54. Spiral Matrix

// ------------------------- Jacob -------------------------
function spiralOrder(matrix: number[][]): number[] {
  let answer = [];

  const makeAnswer = () => {
    // 每次將第一個陣咧放入
    answer.push(...matrix.shift());
    for (let i = 0; i < matrix.length; i++) {
      // 每次將剩餘的列，最後一個放入
      answer = [...answer, matrix[i].pop()];
      if (matrix[i].length > 1) {
        matrix[i] = matrix[i].reverse();
      }
    }
    if (matrix?.[0]?.length > 0) {
      matrix.reverse();
      makeAnswer();
    }
  };

  makeAnswer();

  return answer;
}

// ------------------------- Eva -------------------------
var spiralOrder = function (matrix) {
  const res = [];
  while (matrix.length) {
    //先處理matrix[0]
    const first = matrix.shift();
    res.push(...first);

    for (const m of matrix) {
      //處理每一行的最大數字
      let val = m.pop();
      if (val) res.push(val);
      m.reverse();
    }
    matrix.reverse();
  }
  return res;
};

// ------------------------- Jay -------------------------

// ------------------------- Grace -------------------------

// ------------------------- Yu Chuan -------------------------
function spiralOrder(matrix: number[][]): number[] {
  // x 軸的第一個、最後一個的 index
  let xStart: number = 0;
  let xEnd: number = matrix[0].length - 1;
  // y 軸的第一個、最後一個的 index
  let yStart: number = 0;
  let yEnd: number = matrix.length - 1;

  const result: number[] = [];

  // 當 End >= Start 才會執行迴圈
  while (xEnd >= xStart && yEnd >= yStart) {
    // 1,2,3,4 把第一個 row 的全部元素 push 進去
    for (let i = xStart; i <= xEnd; i++) result.push(matrix[yStart][i]);
    // 8, 12 把第一個到最後一個 row 的最後一個 push 進去
    for (let i = yStart + 1; i <= yEnd; i++) result.push(matrix[i][xEnd]);

    if (xStart < xEnd && yStart < yEnd) {
      // 11, 10 把最後一個 row 從倒數第二個到第二個 push 進去
      for (let i = xEnd - 1; i > xStart; i--) result.push(matrix[yEnd][i]);
      // 9, 5 把第一個 col 的最後一個到第二個 push 進去
      for (let i = yEnd; i > yStart; i--) result.push(matrix[i][xStart]);
    }

    xStart++;
    xEnd--;
    yStart++;
    yEnd--;
  }
  return result;
}
