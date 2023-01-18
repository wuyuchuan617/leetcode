// https://leetcode.com/problems/reverse-only-letters/
// 917. Reverse Only Letters

// ------------------------- Jacob -------------------------

// ------------------------- Eva -------------------------

// ------------------------- Jay -------------------------
// Runtime 61 ms Beats 90.63% Memory 44.3 MB Beats 56.25%
function reverseOnlyLetters(s: string): string {
  let output = s.split("");
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (!/^[a-zA-Z]*$/.test(output[left])) {
      left++;
    } else if (!/^[a-zA-Z]*$/.test(output[right])) {
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

// ------------------------- Yu Chuan -------------------------
