// https://leetcode.com/problems/reverse-vowels-of-a-string/
// 345. Reverse Vowels of a String
// 1. 把 string 中母音的順序反轉

// ------------------------- Jacob -------------------------

// ------------------------- Eva -------------------------

// ------------------------- Jay -------------------------

// ------------------------- Grace -------------------------

// ------------------------- Yu Chuan -------------------------
// Runtime 90 ms Beats 77.66% / Memory 49.1 MB Beats 79.79%

function reverseVowels(s: string): string {
  const vowels: string[] = "aeiouAEIOU".split("");
  const strings: string[] = s.split("");
  const indexs: number[] = [];
  const values: string[] = [];

  strings.map((item, index) => {
    if (vowels.includes(item)) {
      // 紀錄母音原本的 index & value
      indexs.push(index);
      values.push(item);
    }
  });

  // 把 values reverse
  values.reverse();

  indexs.map((element, idx) => {
    // 原本的 index 去 map reverse 後的 value
    strings[element] = values[idx];
  });

  return strings.join("");
}
