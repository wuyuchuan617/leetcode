// 1239. Maximum Length of a Concatenated String with Unique Characters
// https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/description/



// ------------------------- Yu Chuan -------------------------
// Runtime 108 ms Beats 100% / Memory 49.1 MB Beats 80%

function maxLength(arr: string[]): number {
    let max:number = 0;
  
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

// ------------------------- Eva -------------------------

// ------------------------- Grace -------------------------
