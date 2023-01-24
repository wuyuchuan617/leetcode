// 1239. Maximum Length of a Concatenated String with Unique Characters
// https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/description/

// ------------------------- Yu Chuan -------------------------
// Runtime 108 ms Beats 100% / Memory 49.1 MB Beats 80%

function maxLength(arr: string[]): number {
  let max: number = 0;

  const backTract = (startIndex: number, string: string) => {
    // 如果 string 本身就有重複字母
    // ab 2/2, aab 3/2
    if (string.length !== new Set([...string]).size) return;

    // Math.max() 找出面最大值
    max = Math.max(max, string.length);

    for (let i = startIndex; i < arr.length; i++) {
      backTract(i + 1, string + arr[i]);
    }
  };

  backTract(0, "");
  return max;
}

// ------------------------- Jacob -------------------------

function checkDistances(s: string, distance: number[]): boolean {
  let answer = true
  const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('')
  const testArray = s.split('')
  for(let i=0;i<26;i++){
      const letter = alphabets[i]
      const firstIndex = testArray.indexOf(letter)
      if(firstIndex !== -1){
          const disItem = distance[i]
          testArray.splice(firstIndex, 1, '');
          const secondIndex = testArray.indexOf(letter)
          if((secondIndex-firstIndex-1) !== disItem){
              return answer = false
          }
      }
  }
  return answer
};

// ------------------------- Eva -------------------------
// Runtime 75 ms Beats 75.33% / Memory 42.3 MB Beats 96.82%
var checkDistances = function (s, distance) {
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] === s[j]) {
        if (distance[s[i].charCodeAt() - "a".charCodeAt(0)] !== j - i - 1)
          return false;
        break;
      }
    }
  }
  return true;
};
// ------------------------- Grace -------------------------

// Runtime 106 ms Beats 100% , Memory 49.5 MB Beats 50%
function maxLength(arr: string[]): number {
  let max = 0
  const check = (idx:number, s:string)=>{

      if(s.length !== new Set([...s]).size) return

      max = Math.max(max, s.length)

      for(let i=idx ; i<arr.length;i++){
          check(i+1, s+arr[i])
      }
  }
  check(0,'')
  return max
};