// 1413. Minimum Value to Get Positive Step by Step Sum
// https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/
// 找到一個 startValue ，然後與 nums裡面的每一個相加，過程中加總任何时候都大於等於 1。

// ------------------------- Jacob -------------------------

// ------------------------- Eva -------------------------

// ------------------------- Jay -------------------------

// ------------------------- Grace -------------------------

// ------------------------- Yu Chuan -------------------------
// Runtime 64 ms Beats 83.93% / Memory 42.9 MB Beats 69.64%
function minStartValue(nums: number[]): number {
  // 用 0 當初始值
  let startValue = 0;

  const reduceResult = nums.reduce((acc: number[], num: number) => {
    const sum = startValue + num;
    acc.push(sum);
    startValue = sum;
    return acc;
  }, []);

  const min = Math.min(...reduceResult);

  // 如果都是正的最小值就是 1
  if (min > 0) return 1;

  // 有負的，就負轉正後加一
  return Math.abs(min) + 1;
}
