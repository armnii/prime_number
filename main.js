const util = require("./myUtils.js");
const reader = require("readline-sync");
console.log("***** Hi! I will ask for two numbers and let you know the prime numbers in between :) *****");


const number1 = reader.questionInt("Please insert a number = ")
const number2 = reader.questionInt("Please insert another number but greater = ")

if (number1 > number2) {

    console.log("Your first number must be smaller than your second number, as it is a range!");    
    return
}

let primes = []

let numberInBetween = number1

while (numberInBetween <= number2) {

    if (util.isPrime(numberInBetween)){
        primes.push(numberInBetween)
    }
    numberInBetween ++
}

util.printPrimes(primes)


