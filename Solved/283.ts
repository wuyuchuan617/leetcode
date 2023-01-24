// https://leetcode.com/problems/move-zeroes/
// 283. Move Zeroes

// ------------------------- Jacob -------------------------
function moveZeroes(nums: number[]): void {
  let zeroAmount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      zeroAmount++;
      i--;
    }
  }
  for (let k = 0; k < zeroAmount; k++) {
    nums.push(0);
  }
}

// ------------------------- Eva -------------------------
var moveZeroes = function (nums) {
  let num = 0;

  if (nums == [0]) {
    return [0];
  } else {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] == 0) {
        num++;
        nums.splice(i, 1);
        --i;
      }
    }

    if (num > 0) {
      for (let j = 1; j <= num; j++) {
        nums.push(0);
      }
    }
    return nums;
  }
};

// ------------------------- Jay -------------------------

// ------------------------- Grace -------------------------
function moveZeroes(nums: number[]): void {
  let zero: number = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      zero++;
      i--;
    }
  }
  for (let i = 0; i < zero; i++) nums.push(0);
}

// ------------------------- Yu Chuan -------------------------
function moveZeroes(nums: number[]): void {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      // 如果不等於0的話，就把目前index 位置換成這個數字
      // index 往後移一位
      nums[index] = nums[i];
      index += 1;
    }
  }

  // 把 index 後面的都變成 0
  for (let i = index; i < nums.length; i++) {
    nums[i] = 0;
  }
}
