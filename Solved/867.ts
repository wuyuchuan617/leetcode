// https://leetcode.com/problems/transpose-matrix/
// 867. Transpose Matrix

// ------------------------- Jacob -------------------------
//解一
function transpose(matrix: number[][]): number[][] {
  const answer: number[][] = [];
  matrix.forEach((itemArray: number[]) => {
    itemArray.forEach((num: number, index: number) => {
      answer[index] ? answer[index].push(num) : answer.push([num]);
    });
  });
  return answer;
}
//解二
function transpose(matrix: number[][]): number[][] {
  const answer: number[][] = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let k = 0; k < matrix[i].length; k++) {
      answer[k] ? answer[k].push(matrix[i][k]) : answer.push([matrix[i][k]]);
    }
  }
  return answer;
}

// ------------------------- Eva -------------------------
var transpose = function (matrix) {
  let result = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (result[j] == null) {
        result[j] = [];
      }

      result[j][i] = matrix[i][j];
    }
  }

  return result;
};

// ------------------------- Jay -------------------------

// ------------------------- Grace -------------------------
function transpose(matrix: number[][]): number[][] {
  let res: number[][] = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (res[j]) {
        res[j].push([matrix[i][j]]);
      } else {
        res.push([matrix[i][j]]);
      }
    }
  }
  return res;
}

// ------------------------- Yu Chuan -------------------------
function transpose(matrix: number[][]): number[][] {
  const output: number[][] = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      // 第一個 array 就可以知道總會會有幾個 array 先建空陣列，然後再把每個按照 index 放進去
      if (i === 0) output[j] = [];
      output[j][i] = matrix[i][j];
    }
  }
  return output;
}
