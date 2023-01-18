// 2399. Check Distances Between Same Letters
// https://leetcode.com/problems/check-distances-between-same-letters/description/

// ------------------------- Yu Chuan -------------------------
// Runtime 86 ms Beats 46.15% / Memory 45.5 MB Beats 46.15%

function checkDistances(s: string, distance: number[]): boolean {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  const isCorrect = distance.every((element, idx) => {
    const singleAlph = alphabet[idx];

    if (!s.includes(singleAlph)) return true;
    const alphIndex = [];
    s.split("").filter((item, index) => {
      if (item === singleAlph) alphIndex.push(index);
    });
    return alphIndex[1] - alphIndex[0] - 1 === distance[idx];
  });

  return isCorrect;
}

// ------------------------- Jacob -------------------------

function maxLength(arr: string[]): number {
  const set = new Set([""]);
  let max = 0;
  let str = "";

  for (let i = 0; i < arr.length; i++) {
    const values = [...set];

    for (let j = 0; j < values.length; j++) {
      // 每次i進來後，values會越來越長
      str = `${values[j]}${arr[i]}`;
      // 每次組合新的字就存回去set內
      set.add(str);
      let newStr = [...new Set(str)].join("");
      if (str === newStr) {
        max = Math.max(str.length, max);
      }
    }
  }

  return max;
}

// ------------------------- Eva -------------------------
var maxLength = function (arr) {
  const set = new Set([""]);
  let max = 0;
  let str;

  for (let i = 0; i < arr.length; i++) {
    const values = [...set.values()];

    for (let j = 0; j < values.length; j++) {
      str = `${values[j]}${arr[i]}`;
      set.add(str);
      let newStr = [...new Set(str).values()].join("");

      if (str === newStr) {
        max = Math.max(str.length, max);
      }
    }
  }

  return max;
};
// ------------------------- Grace -------------------------

// ------------------------- Jay -------------------------
// Runtime: 82ms Beats: 68.75% Memory: 46.9 MB Beats: 31.25%
function checkDistances(s: string, distance: number[]): boolean {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const counter: any = {};
  for (let i = 0; i < s.length; i++) {
    if (counter[s[i]]) {
      counter[s[i]]++;
    } else {
      counter[s[i]] = 1;
    }
  }

  for (let char in counter) {
    let alphIndex = alphabet.indexOf(char);
    let left = s.indexOf(char);
    let right = left + 1;
    if (s[left] !== s[right + distance[alphIndex]]) return false;
  }
  return true;
}
