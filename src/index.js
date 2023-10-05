const fibonacci = require('./fibonacci')
const factorial = require('./factorial')
const isPrime = require('./isPrime')
const isPowerOfTwo = require('./isPowerOfTwo')
const recursiveFibonacci = require('./recursiveFibonacci')
const recursiveFactorial = require('./recursiveFactorial')

console.log('fibonacci => ')
console.log(fibonacci(2))// [0,1]
console.log(fibonacci(3))// [0,1,1]
console.log(fibonacci(7))// [0,1,1,2,3,5,8]

console.log('factorial => ')
console.log(factorial(0))// 1
console.log(factorial(1))// 1
console.log(factorial(5))// 120

console.log('isPrime => ')
console.log(isPrime(1))// false
console.log(isPrime(5))// true
console.log(isPrime(4))// false

console.log('isPowerOfTwo => ')
console.log(isPowerOfTwo(1))// true
console.log(isPowerOfTwo(2))// true
console.log(isPowerOfTwo(5))// false

console.log('recursiveFibonacci => ')
console.log(recursiveFibonacci(0))// 0
console.log(recursiveFibonacci(1))// 1
console.log(recursiveFibonacci(6))// 8

console.log('recursiveFactorial => ')
console.log(recursiveFactorial(0))// 1
console.log(recursiveFactorial(1))// 1
console.log(recursiveFactorial(5))// 120