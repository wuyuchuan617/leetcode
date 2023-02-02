// https://leetcode.com/problems/reverse-only-letters/
// 917. Reverse Only Letters

// ------------------------- Jacob -------------------------

// ------------------------- Eva -------------------------

// ------------------------- Jay -------------------------

// ------------------------- Grace -------------------------
// 917 : Runtime 73 ms Beats 60% / Memory 44.2 MB Beats 73.33%
function reverseOnlyLetters(s: string): string {
    const _s = [...s]
    let newS = ''
    const reg = /[a-zA-Z]/g
    const letters: string[] | null = s.match(reg)
    _s.forEach((e:string)=>{
        newS += /^[a-zA-Z]/g.test(e) ? letters?.pop() : e
    })
    return newS
};
// ------------------------- Yu Chuan -------------------------