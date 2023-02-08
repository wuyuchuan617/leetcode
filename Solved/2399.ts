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

function checkDistances(s: string, distance: number[]): boolean {
  let answer = true;
  const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
  const testArray = s.split("");
  for (let i = 0; i < 26; i++) {
    const letter = alphabets[i];
    const firstIndex = testArray.indexOf(letter);
    if (firstIndex !== -1) {
      const disItem = distance[i];
      testArray.splice(firstIndex, 1, "");
      const secondIndex = testArray.indexOf(letter);
      if (secondIndex - firstIndex - 1 !== disItem) {
        return (answer = false);
      }
    }
  }
  return answer;
}

// ------------------------- Eva -------------------------

// Runtime 75 ms Beats 75.33% / Memory 42.3 MB Beats 96.82%
var checkDistances = function (s, distance) {
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] === s[j]) {
        if (distance[s[i].charCodeAt() - "a".charCodeAt(0)] !== j - i - 1)
          return false;
        break;
      }
    }
  }
  return true;
};

// ------------------------- Grace -------------------------
function checkDistances(s: string, distance: number[]): boolean {
  let position = {};
  for (let i = 0; i < s.length; i++) {
    if (position[s[i]] !== undefined) {
      position[s[i]] = i - position[s[i]] - 1; //same char distance
      if (position[s[i]] !== distance[s.charCodeAt(i) - "a".charCodeAt(0)])
        return false;
    } else {
      position[s[i]] = i;
    }
  }

  return true;
}

// Runtime: 91 ms Beats 50%, Memory: 46.8 MB Beats 31.25%
function checkDistances(s: string, distance: number[]): boolean {
  let position = {}
  for(let i =0; i<s.length; i++){
      if(position[s[i]] !== undefined){
           position[s[i]] = i - position[s[i]] - 1 //same char distance
          if(position[s[i]] !== distance[s.charCodeAt(i) - 'a'.charCodeAt(0)]) return false
      } else {
          position[s[i]] = i
      }
  }

  return true
};
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
