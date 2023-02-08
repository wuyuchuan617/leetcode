// https://leetcode.com/problems/final-value-of-variable-after-performing-operations/
// 2011. Final Value of Variable After Performing Operations

// ------------------------- Jacob -------------------------
function finalValueAfterOperations(operations: string[]): number {
  return operations.reduce(
    (accumulator: number, currentValue: string) =>
      currentValue.includes("+") ? accumulator + 1 : accumulator - 1,
    0
  );
}

// ------------------------- Eva -------------------------
var finalValueAfterOperations = function(operations) {
    let ans = 0;
    for (let i=0; i<operations.length; i++) {
        if (operations[i] == 'X++' || operations[i] == '++X') {
            ans++;
        } else if (operations[i] == 'X--' || operations[i] == '--X') {
            ans--;
        }
    }
    return ans;
};


// ------------------------- Jay -------------------------

// ------------------------- Grace -------------------------
function finalValueAfterOperations(operations: string[]): number {
  let num: number = 0;
  operations.forEach((e: string) => {
    if (e.includes("-")) {
      num--;
    } else {
      num++;
    }
  });
  return num;
}

// ------------------------- Yu Chuan -------------------------
function finalValueAfterOperations(operations: string[]): number {
  let output: number = 0;
  operations.forEach((item) => {
    // 每個都跑一輪，不是 +1 就是 -1
    item.includes("++") ? (output += 1) : (output -= 1);
  });
  return output;
}
