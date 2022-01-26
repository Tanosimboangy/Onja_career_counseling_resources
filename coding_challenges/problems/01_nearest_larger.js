 // Write a function, `nearestLarger(arr, i)` which takes an array and an
 // index.  The function should return another index, `j`

 // Index `j` should satisfy two contitions:
 // (a) `arr[i] < arr[j]`, AND
 // (b) there is no other index closer to i than j where `arr[i] < arr[j]`

 // In case of ties (see example below), choose the earliest (left-most)
 // of the two indices. If no number in `arr` is larger than `arr[i]`,
 // return `null`.
 
 let item = 0
 let newIdex = null;
 const nearestLarger = (arr, i) => {
    while(arr[item] > arr[i]) {
        item++;
    }
    return newIdex;
 }
 console.log(nearestLarger([2, 3, 8, 5, 6, 7, 1], 3))
module.exports = nearestLarger;