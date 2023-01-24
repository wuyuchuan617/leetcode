// https://leetcode.com/problems/maximize-the-topmost-element-after-k-moves/
// 2202. Maximize the Topmost Element After K Moves

// 1. 移動 k 步後，return index 0 可以的最大值


// ------------------------- Jacob -------------------------
// Runtime.66% Memory.66%
function maximumTop(nums: number[], k: number): number {
  const isKOdd = k % 2 === 1;
  let biggest = -1;

  //極端個案，nums一個且操作只能奇數
  if (isKOdd && nums.length === 1) {
    return biggest;
  }

  //極端個案，k小於2
  if (k <= 1) {
    return nums[k];
  }

  //通常個案，檢查所有 k-1 內數字，第k個只能被移除，跳過。k>nums.length時，直接用全陣列尋找即可
  for (let i = 0; i < (k > nums.length ? nums.length : k - 1); i++) {
    biggest = Math.max(biggest, nums[i]);
  }

  //極端個案，全部移除不加入時，查看第一個是否最大
  if (Boolean(nums[k])) {
    biggest = Math.max(biggest, nums[k]);
  }
  return biggest;
}

// ------------------------- Eva -------------------------

// ------------------------- Jay -------------------------

// ------------------------- Grace -------------------------

// ------------------------- Yu Chuan -------------------------
// Runtime 70 ms Beats 100% / Memory 53.8 MB Beats 50%

function maximumTop(nums: number[], k: number): number {
  // k = 0 移動 0 步，回傳第 0 個
  if (k === 0) return nums[0];

  //  k = 0 移動 0 步，回傳第 1 個
  if (k === 1 && nums.length > 1) return nums[1];

  // nums 長度為 1，且 k 不等於 0，移動偶數回傳第 0 個，移動基數回傳 -1
  if (nums.length === 1 && k > 0) return k % 2 == 0 ? nums[0] : -1;

  // k 大於 nums.length 回傳 nums 中最大值
  if (k > nums.length) return Math.max(...nums);

  // 把 nums 由大到小 sort
  const sortNums = [...nums].sort((a, b) => b - a);

  const topMost = sortNums.find((item) => {

    // 從最大的開始去找他在原本 nums 中的 index，找到第一個符合 indexAtNums < k - 1 
    // k -1 步是因為最後一步要把這個元素加回來
    const indexAtNums = nums.findIndex((element) => element === item);
    return indexAtNums < k - 1;
  });

  // 如果 nums[k] > topMost 代表全部都是移除動作無需加回
  if (nums[k] > topMost) return nums[k];

  return topMost;
}
