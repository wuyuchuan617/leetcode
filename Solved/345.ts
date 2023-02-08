// https://leetcode.com/problems/reverse-vowels-of-a-string/
// 345. Reverse Vowels of a String
// 1. 把 string 中母音的順序反轉

// ------------------------- Jacob -------------------------
// Runtime.58% Memory. 10%
function reverseVowels(s: string): string {
  const stringArray = [...s];

  //先選出所有字母
  const vowelsArray = stringArray.filter((item: string) => {
    const formatChar = item.toLowerCase();
    return (
      formatChar === "a" ||
      formatChar === "e" ||
      formatChar === "i" ||
      formatChar === "o" ||
      formatChar === "u"
    );
  });

  return stringArray
    .map((item: string) => {
      const formatChar = item.toLowerCase();
      //如果發現是字母，從篩選的陣列最後一個塞入
      return formatChar === "a" ||
        formatChar === "e" ||
        formatChar === "i" ||
        formatChar === "o" ||
        formatChar === "u"
        ? vowelsArray.pop()
        : item;
    })
    .join("");
}

// ------------------------- Eva -------------------------
// Runtime 71 ms Beats 98.12% Memory 47.5 MB Beats 94.1%
const VOWELS = "aeiouAEIOU";
var reverseVowels = function (s) {
  const arr = [...s];

  for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
    //指針左邊端
    while (!VOWELS.includes(arr[i]) && i < j) {
      i++;
    }

    //指針右邊端
    while (!VOWELS.includes(arr[j]) && i < j) {
      j--;
    }

    //如果VOWELS.includes(arr[i])&&VOWELS.includes(arr[j])
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr.join("");
};

// ------------------------- Jay -------------------------
// Runtime 87 ms Beats 84.4% // Memory 48.5 MB Beats 90.43%
function reverseVowels(s: string): string {
  let output = s.split("");
  const vowels = "aeiouAEIOU";
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (vowels.indexOf(output[left]) < 0) {
      left++;
    } else if (vowels.indexOf(output[right]) < 0) {
      right--;
    } else {
      const temp = output[left];
      output[left] = output[right];
      output[right] = temp;
      left++;
      right--;
    }
  }
  return output.join("");
}

// ------------------------- Grace -------------------------
//345 : Runtime 97 ms Beats 60.95% / Memory 54.9 MB Beats 8.57%
function reverseVowels(s: string): string {
  const _string = [...s];
  let vowelChar = [];
  for (let i = 0; i < s.length; i++) {
    if (/^[aeiou]$/i.test(s[i])) {
      vowelChar.push(s[i]);
    }
  }
  const newString = _string
    .map((e: string) => {
      return /^[aeiou]$/i.test(e) ? vowelChar.pop() : e;
    })
    .join("");
  return newString;
}

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
