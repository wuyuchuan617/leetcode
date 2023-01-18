// https://leetcode.com/problems/reverse-vowels-of-a-string/
// 345. Reverse Vowels of a String

// ------------------------- Jacob -------------------------

// ------------------------- Eva -------------------------

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

// ------------------------- Yu Chuan -------------------------
