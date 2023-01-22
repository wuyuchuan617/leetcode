// https://leetcode.com/problems/removing-stars-from-a-string/
// 2390. Removing Stars From a String

// ------------------------- Jacob -------------------------

// ------------------------- Eva -------------------------

// ------------------------- Jay -------------------------

// ------------------------- Grace -------------------------

// ------------------------- Yu Chuan -------------------------

// Runtime 178 ms Beats 41.18% Memory 60.5 MB Beats 47.6%
function removeStars(s: string): string {
  const result: string[] = [];

  s.split("").map((item) => {
    // 如果這個 item 是 * 把 result 最後一個移除（也就是 ＊ 的上一個）
    // 如果不是 ＊ 就把這個 item push 到 result 最後把 result join('')
    if (item === "*") return result.pop();
    result.push(item);
  });

  return result.join("");
}
