// Recursive Fibonacci

module.exports = function recursiveFibonacci (n) {

    if( n < 2) return n

    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)
}

// Big-O = O(n) - Iterative
// O(2^n) - Recursive is not a good aproach to the fibonacci algorithm