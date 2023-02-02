// https://leetcode.com/problems/removing-stars-from-a-string/
// 2390. Removing Stars From a String

// ------------------------- Jacob -------------------------

// ------------------------- Eva -------------------------

// ------------------------- Jay -------------------------

// ------------------------- Grace -------------------------

// 2390 : Runtime 209 ms Beats 25% / Memory 63.5 MB Beats 37.5%

function removeStars(s: string): string {
    const _s = [...s]
    let res = []

    _s.forEach((e:string)=>{
        if(e === '*'){
            if(res.length !==0) res.pop()
        } else {
            res.push(e)
        }
    })
    
    return res.join('')
}

// ------------------------- Yu Chuan -------------------------