// Recursive Factorial

module.exports = function recursiveFactorial (n) {
    if(n === 0) return 1
    return n * recursiveFactorial(n - 1)
}

// Big-O = O(n)