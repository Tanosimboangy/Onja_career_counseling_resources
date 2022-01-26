// Write a function, `noRepeats(yearStart, yearEnd)`, which takes a
// range of years and outputs those years which do not have any
// repeated digits.
//
// Hint: It may be helpful to write a helper function `noRepeat(year)`
// which returns true/false if a single year doesn't have a repeat.

function noRepeats(yearStart, yearEnd) {
    let newArr = [];
  
  	function helper(arr) {
      let splitArr = arr.toString().split("");
      let val = splitArr.filter((num, i) => {
        if(splitArr.indexOf(num) === i) {
          return num
        }
      })
      let ylng = yearStart.toString().split("").length;
      if(val.length === ylng) {
      	return Number(val.join(''))
      }
    }
  
    for(let i = yearStart; i <= yearEnd; i++) {
      if(helper(i) !== undefined) {
      	newArr.push(helper(i))
      }
    }
    return newArr
}

module.exports = noRepeats;
