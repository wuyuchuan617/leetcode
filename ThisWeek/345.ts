// https://leetcode.com/problems/reverse-vowels-of-a-string/
// 345. Reverse Vowels of a String

// ------------------------- Jacob -------------------------

// ------------------------- Eva -------------------------

// ------------------------- Jay -------------------------

// ------------------------- Grace -------------------------

//345 : Runtime 97 ms Beats 60.95% / Memory 54.9 MB Beats 8.57%
function reverseVowels(s: string): string {
    const _string = [...s]
    let vowelChar = []
    for(let i=0;i<s.length;i++){
        if((/^[aeiou]$/i).test(s[i])){
            vowelChar.push(s[i]);
        }  
    }
    const newString = _string.map((e:string)=>{
        return (/^[aeiou]$/i).test(e) ? vowelChar.pop() : e
    }).join('')
    return newString

};

// ------------------------- Yu Chuan -------------------------