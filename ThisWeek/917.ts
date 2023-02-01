// https://leetcode.com/problems/reverse-only-letters/
// 917. Reverse Only Letters
// 1. 非 a-z or A-Z 的元素固定位置
// 2. 為 a-z or A-Z 的元素要反轉

// ------------------------- Jacob -------------------------
// Runtime.88% Memory.20%
function reverseOnlyLetters(s: string): string {
  const replaceArray = [...s];

  //確認是否為英文字
  const checkIsLetter = (item: string) => {
    const letterDistanceToA =
      item.toLowerCase().charCodeAt(0) - "a".charCodeAt(0);
    const isLetter = letterDistanceToA >= 0 && 26 > letterDistanceToA;
    return isLetter;
  };

  //拿出可以置換的英文字，如果非英文字則遞迴往下拿
  const getReplaceLetter = () => {
    const replaceItem = replaceArray.pop();
    const isReplaceItemLetter = checkIsLetter(replaceItem);
    return isReplaceItemLetter ? replaceItem : getReplaceLetter();
  };

  return [...s]
    .map((item: string) => {
      const isLetter = checkIsLetter(item);
      return isLetter ? getReplaceLetter() : item;
    })
    .join("");
}

// ------------------------- Eva -------------------------
// Runtime 68 ms Beats 60.75% Memory 42.3 MB Beats 47.4%
const regex = /^[a-zA-Z]$/;
var reverseOnlyLetters = function (s) {
  let ans = "";
  let start = 0;
  let end = s.length - 1;

  while (start < s.length) {
    if (!regex.test(s[end]) && end >= 0) {
      end--;
      continue;
    }
    if (regex.test(s[start])) {
      ans += s[end];
      end--;
    } else {
      ans += s[start];
    }
    start++;
  }

  return ans;
};

// ------------------------- Jay -------------------------

// ------------------------- Grace -------------------------
// 917 : Runtime 73 ms Beats 60% / Memory 44.2 MB Beats 73.33%
function reverseOnlyLetters(s: string): string {
  const _s = [...s];
  let newS = "";
  const reg = /[a-zA-Z]/g;
  const letters = s.match(reg);
  _s.forEach((e: string) => {
    newS += /^[a-zA-Z]/g.test(e) ? letters.pop() : e;
  });
  return newS;
}

// ------------------------- Yu Chuan -------------------------
//Runtime 73 ms Beats 60% / Memory 44 MB Beats 73.33%

function reverseOnlyLetters(s: string): string {
  const indexArray: { index: number; item: string }[] = [];
  const stringArray: string[] = [];

  const alphebets =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  s.split("").map((item, index) => {
    // item 如果是 a-z or A-Z 放到 stringArray，如果不是紀錄 item 的 index & value
    if (!alphebets.includes(item)) return indexArray.push({ index, item });
    return stringArray.push(item);
  });

  // 把 stringArray reverse
  stringArray.reverse();

  indexArray.map((element) => {
    // 把固定的 element（非 a-z or A-Z），插入到原本的 index 位置
    stringArray.splice(element.index, 0, element.item);
  });

  return stringArray.join("");
}
