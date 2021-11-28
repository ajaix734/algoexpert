// [2,7,11,15], target = 9
// Output: [0,1]

// Input: nums = [3,2,4], target = 6
// Output: [1,2]


// Input: nums = [3,3], target = 6
// Output: [0,1]

/* Brute Force Solution
O(n^2) T
O(1) S
*/

function bruteForce2Sum(arr, target) {
    let len = arr.length
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (i === j) continue
            if (arr[i] + arr[j] === target) return [i, j]
        }
    }
    return []
}



// console.log(bruteForce2Sum([2, 7, 11, 15], 9))
// console.log(bruteForce2Sum([3, 2, 4], 6))
// console.log(bruteForce2Sum([3, 3], 6))


/* 
Using object/map time can be reduced but space increases
O(n) T
O(n) S
*/
function map2Sum(arr, target) {
    let hash = new Map()
    for (let i = 0; i < arr.length; i++) {
        let required = target - arr[i]
        let val = hash.has(required)
        if (val) return [i, hash.get(required)]
        else hash.set(arr[i], i)
    }
    return []
}

// console.log(map2Sum([2, 7, 11, 15], 9))
// console.log(map2Sum([3, 2, 4], 6))
// console.log(map2Sum([3, 3], 6))


/* 
sort the array and use two pointers.Will not work if index has to be returned since sosrting changes the index valuex.
O(nlgn) T sort
O(1) S
*/
function twoPtr2Sum(arr, target) {
    arr.sort((a, b) => a - b) // in-place sort
    let start = 0
    let end = arr.length - 1
    while (start < end) {
        let currSum = arr[start] + arr[end]
        if (currSum === target) return [start, end]
        else if (currSum < target) end -= 1
        else if(currSum > target) start += 1
    }
    return []
}

console.log(twoPtr2Sum([2, 7, 11, 15], 9))
console.log(twoPtr2Sum([3, 2, 4], 6))
console.log(twoPtr2Sum([3, 3], 6))