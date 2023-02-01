// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// 26. Remove Duplicates from Sorted Array

// ------------------------- Jacob -------------------------
function removeDuplicates(nums: number[]): number {
    let answer:number = 0;
    for(let i=0; i<nums.length;i++){
        // 開始跑每個成員，查看每個成員出現第一次的位置
        // nums[i]同值他會給我第一個出現的位置，後面相同成員進入不影響
        // 不用管 k 之後的排序
        // 所以用 answer 當作指向，紀錄下一個有換值的數字
        if( nums.indexOf(nums[i]) === i){
           nums[answer] = nums[i];
           answer++;
           };
    };
    return answer;
};

// ------------------------- Eva -------------------------
var removeDuplicates = function(nums) {

    //極端值~
    if(nums.length == 1) return 1;


    for(let i = 0; i < nums.length; i++){
        if(nums[i] == nums[i+1]){
         nums.splice(i, 1);
            
        //nums被slice一個，index縮小一位
         i--
        }
    }

    return  nums.length
};

// ------------------------- Jay -------------------------

// ------------------------- Grace -------------------------
function removeDuplicates(nums: number[]): number {
    let k:number = 0
    for(let i=1;i<nums.length;i++){
        if(nums[k] !== nums[i]){
            k++
            nums[k] = nums[i]
        }
    }
    return k+1
};

// ------------------------- Yu Chuan -------------------------
function removeDuplicates(nums: number[]): number{
    let pointer = 0;
    for(let i = 1; i< nums.length; i++){
        // 如果跟下一個不一樣
        if( nums[pointer] !== nums[i]){
            pointer ++;
            nums[pointer] = nums[i]
        }
    }
    return pointer + 1;
};