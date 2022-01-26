// Write a function `fizzBuzz` that takes two numbers and outputs an array
// of strings with one of 3 values: Fizz, Buzz, and FizzBuzz.

// The function should use the two numbers as a range and for any number,
// included in that range, that is divisible by 3 the string Fizz should be
// added to the array, Buzz for numbers divisible by 5 and
// FizzBuzz for numbers divisible by 3 and 5.

// If a number is NOT divisible by 3 and 5, do not include it to the array.

function fizzBuzz(start, end) {
    let newArr = []
    for(let i = start; i <= end; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            newArr.push("FizzBuzz")
        } else if(i % 5 === 0){
            newArr.push("Buzz")
        } else if (i % 3 === 0){
            newArr.push("Fizz")
        }
    }
    return newArr;
}

module.exports = fizzBuzz;
