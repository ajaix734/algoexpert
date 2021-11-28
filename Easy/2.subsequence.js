// [5,1,22,25,6,-1,8,10] [1,6,-1,10] ===> true
// [5,1,22,25,6,-1,8,10] [1,6,-1, 2, 10] ===> false
// [5,1,22,25,6,-1,2,8,10] [1,6,-1,2, 10] ===> false

/* 
SubSequence- Delete/Omit a value to match the sequence
O(n) T
O(1) S
*/
function validateSubsequence(arr, seq) {
    let seqIdx = 0
    for (let val of arr) {
        if (seqIdx === seq.length) break
        if (val === seq[seqIdx]) seqIdx += 1
    }
    return seqIdx === seq.length
}

console.log(validateSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]))
console.log(validateSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 2, 10]))
console.log(validateSubsequence([5, 1, 22, 25, 6, -1, 2, 8, 10], [1, 6, -1, 2, 10]))