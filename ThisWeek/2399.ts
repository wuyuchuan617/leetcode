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

// ------------------------- Eva -------------------------

// ------------------------- Grace -------------------------
