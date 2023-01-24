// https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/
// 1893. Check if All the Integers in a Range Are Covered

// ------------------------- Jacob -------------------------
function isCovered(ranges: number[][], left: number, right: number): boolean {
  for (let i = left; i < right + 1; i++) {
    let isThisNumberIncludeInAny = false;
    for (let k = 0; k < ranges.length; k++) {
      const [start, end] = ranges[k];
      if (i >= start && i <= end) {
        isThisNumberIncludeInAny = true;
      }
    }
    if (!isThisNumberIncludeInAny) {
      return false;
    }
  }
  return true;
}

// ------------------------- Eva -------------------------
var isCovered = function (ranges, left, right) {
  //討論在範圍內的結果
  for (let i = left; i <= right; i++) {
    let flag = true;
    for (let range of ranges) {
      //討論的範圍內的i都有包含在某個 或不同interval
      if (i >= range[0] && i <= range[1]) {
        flag = false;
        break;
      }
    }
    if (flag) return false;
  }
  return true;
};

// ------------------------- Jay -------------------------

// ------------------------- Grace -------------------------
function isCovered(ranges: number[][], left: number, right: number): boolean {
  for (let i = left; i < right + 1; i++) {
    let res: boolean = false;
    for (let j = 0; j < ranges.length; j++) {
      if (i >= ranges[j][0] && i <= ranges[j][1]) res = true;
    }
    if (!res) return false;
  }
  return true;
}

// ------------------------- Yu Chuan -------------------------
function isCovered(ranges: number[][], left: number, right: number): boolean {
  // number left right to array range
  const leftRightRange: number[] = [];
  for (let i = left; i <= right; i++) {
    leftRightRange.push(i);
  }

  const isCovered: boolean = leftRightRange.every((item) => {
    return ranges.some((range) => item >= range[0] && item <= range[1]);
  });

  return isCovered;
}
