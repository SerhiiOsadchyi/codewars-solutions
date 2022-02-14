/*
(Ready for) Prime Time
https://www.codewars.com/kata/521ef596c106a935c0000519/train/javascript

We need prime numbers and we need them now!

Write a method that takes a maximum bound and returns all primes up to and including the maximum bound.

For example,

11 => [2, 3, 5, 7, 11]
*/

function prime(num) {
    let primeArray = []

    if (num < 2) {
        return primeArray
    }

    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) {
            primeArray.push(i)
        }
    }

    return primeArray
}

function isPrime(inputNum) {
    let d = 2

    while ( (d * d <= inputNum) && (inputNum % d != 0) ) {
        d += 1
    }

    return (d * d > inputNum)
}

console.log(prime(23))

