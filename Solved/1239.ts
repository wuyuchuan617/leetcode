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
function maxLength(arr: string[]): number {
  const set = new Set([""]);
  let max = 0;
  let str = "";

  for (let i = 0; i < arr.length; i++) {
    const values = [...set];

    for (let j = 0; j < values.length; j++) {
      // 每次i進來後，values會越來越長
      str = `${values[j]}${arr[i]}`;
      // 每次組合新的字就存回去set內
      set.add(str);
      let newStr = [...new Set(str)].join("");
      if (str === newStr) {
        max = Math.max(str.length, max);
      }
    }
  }

  return max;
}

// ------------------------- Eva -------------------------
var maxLength = function (arr) {
  const set = new Set([""]);
  let max = 0;
  let str;

  for (let i = 0; i < arr.length; i++) {
    const values = [...set.values()];

    for (let j = 0; j < values.length; j++) {
      str = `${values[j]}${arr[i]}`;
      set.add(str);
      let newStr = [...new Set(str).values()].join("");

      if (str === newStr) {
        max = Math.max(str.length, max);
      }
    }
  }

  return max;
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