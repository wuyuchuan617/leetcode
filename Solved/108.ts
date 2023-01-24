// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/description/
// 108. Convert Sorted Array to Binary Search Tree

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// ------------------------- Jacob -------------------------
function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (nums.length == 0) return null;
  if (nums.length == 1) return new TreeNode(nums[0]);
  let mid = Math.floor(nums.length * 0.5);
  var node = new TreeNode(nums[mid]);
  node.left = sortedArrayToBST(nums.slice(0, mid));
  node.right = sortedArrayToBST(nums.splice(mid + 1));
  return node;
}

// ------------------------- Eva -------------------------
var sortedArrayToBST = function (nums, left = 0, right = nums.length - 1) {
  if (left > right) return null;

  let mid = Math.floor((left + right) / 2);
  let root = new TreeNode(nums[mid]);

  root.left = sortedArrayToBST(nums, left, mid - 1);
  root.right = sortedArrayToBST(nums, mid + 1, right);

  return root;
};

// ------------------------- Jay -------------------------

// ------------------------- Grace -------------------------

// ------------------------- Yu Chuan -------------------------
function sortedArrayToBST(nums: number[]): TreeNode | null {
  const toBST = (left: number, right: number): TreeNode | null => {
    // 如果左邊大於右邊代表 array 已經空了，回傳 null
    if (left > right) return null;

    // 找到 array 中間值 index
    let middle = left + Math.floor((right - left) / 2);

    // 找到 array 中間值當 root
    let root = new TreeNode(nums[middle]);

    root.left = toBST(left, middle - 1);
    root.right = toBST(middle + 1, right);

    return root;
  };
  return toBST(0, nums.length - 1);
}
