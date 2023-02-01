// https://leetcode.com/problems/removing-stars-from-a-string/
// 2390. Removing Stars From a String

// ------------------------- Jacob -------------------------
// Runtime.86% Memory.86%
function removeStars(s: string): string {
  const stringArray = [...s];
  let answer = "";
  let starCount = 0;
  //只跑一次陣列迴圈，從最後一個檢查，如果是＊則starCount＋1，如果starCount不為0才組回去字串中
  for (let i = 0; i < stringArray.length; i++) {
    const lastOne = stringArray.pop();
    if (lastOne === "*") {
      starCount++;
    } else {
      if (starCount < 1) {
        answer = lastOne + answer;
      } else {
        starCount--;
      }
    }
    //每移除一個符號i要-1
    i--;
  }
  return answer;
}

// ------------------------- Eva -------------------------
// Runtime 117 ms Beats 55.65% Memory 57 MB Beats 23.48%

var removeStars = function (s) {
  st = [];
  for (const i of s) {
    if (i == "*") st.pop();
    else st.push(i);
  }
  return st.join("");
};

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
