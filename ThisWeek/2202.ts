// https://leetcode.com/problems/maximize-the-topmost-element-after-k-moves/
// 2202. Maximize the Topmost Element After K Moves

// ------------------------- Jacob -------------------------

// ------------------------- Eva -------------------------

// ------------------------- Jay -------------------------

// ------------------------- Grace -------------------------

// 2202 : Runtime 80 ms Beats 88.89% / Memory 53 MB Beats 77.78%
function maximumTop(nums: number[], k: number): number {
    const size = nums.length
    let max = k >=size ? 0 : nums[k]
    
    if(size === 1 && k%2 !== 0 ) return -1
    for(let i=0; i< Math.min(size, k-1); i++){
      max = Math.max(max, nums[i])
    }
    return max
};
// ------------------------- Yu Chuan -------------------------