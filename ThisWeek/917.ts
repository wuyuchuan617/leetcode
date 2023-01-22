// https://leetcode.com/problems/reverse-only-letters/
// 917. Reverse Only Letters
// 1. 非 a-z or A-Z 的元素固定位置
// 2. 為 a-z or A-Z 的元素要反轉

// ------------------------- Jacob -------------------------

// ------------------------- Eva -------------------------

// ------------------------- Jay -------------------------

// ------------------------- Grace -------------------------

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
