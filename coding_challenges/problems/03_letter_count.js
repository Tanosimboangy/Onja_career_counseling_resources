// Write a function, `letter_count(str)` that takes a string and
// returns an object mapping each letter to its frequency. Do not include
// spaces.

function letterCount(str) {
  let count = {}
  let newStr = str.toLowerCase().split("");
  let val = newStr.filter((it, ind) => {
      if(it !== " " && newStr.indexOf(it) === ind) {return it}
  })
  function helper(it, arr) {
      let count = 0;
    newStr.forEach(el => {
        if(el === it) {count ++}
    })
    return count;
  }
  val.forEach(item => {
      return count[item] = helper(item, newStr)
  })
return count;
}

Or

function letterCount(str) {
  let count = {}
  str.toLowerCase().split().join('').split().forEach(item => {
          count[char] ? count[char]++ : count[char] = 1
   })
 return count;
 }

module.exports = letterCount;
