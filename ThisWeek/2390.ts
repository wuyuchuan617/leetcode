// https://leetcode.com/problems/removing-stars-from-a-string/
// 2390. Removing Stars From a String

// ------------------------- Jacob -------------------------

// ------------------------- Eva -------------------------

// ------------------------- Jay -------------------------
// Runtime 123 ms Beats 80% Memory 56.1 MB Beats 86.67%

function removeStars(s: string): string {
  const strArr = s.split("");
  let right = s.length - 1;
  let moveTime = 0;
  while (right >= 0) {
    if (strArr[right] == "*") {
      strArr[right] = "";
      moveTime++;
    } else if (moveTime > 0) {
      strArr[right] = "";
      moveTime--;
    }
    right--;
  }
  return strArr.join("");
}

// ------------------------- Grace -------------------------

// ------------------------- Yu Chuan -------------------------
