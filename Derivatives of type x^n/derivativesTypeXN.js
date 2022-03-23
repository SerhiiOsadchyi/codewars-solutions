/*
Derivatives of type x^n
https://www.codewars.com/kata/55e2de13b668981d3300003d

You are provided with a function of the form f(x) = axⁿ, that consists of a single term only and 'a' and 'n' are integers, e.g f(x) = 3x², f(x) = 5 etc.

Your task is to create a function that takes f(x) as the argument and returns the result of differentiating the function, that is, the derivative.

If f(x)=axn f(x) = ax^nf(x)=ax 
n
 , then f′(x)=naxn−1 f^{\prime}(x) = nax^{n-1}f 
′
 (x)=nax 
n−1
 

Input is a string, for example "5x^4". The function f(x) consists of a single term only. Variable is denoted by x.
Output should be a string, for example "20x^3".

"3x^2"  => "6x"
"-5x^3" => "-15x^2"
"6x^-2" => "-12x^-3"
"5x"    => "5"
"-x"    => "-1"
"42"    => "0"

*/

function differentiate(f) {
    const arrF = f.split('')
    const indexX = arrF.indexOf('x')

    if (indexX === -1) {
        return 0
    }

    const arrBeforeX = arrF.slice(0, indexX)
    let multiplier = null

    if (arrBeforeX.length === 1 && arrBeforeX[0] === '-'){
        multiplier = -1
    } else {
        multiplier = sumArr(arrBeforeX)
    }

    if (arrF.indexOf('^') === -1) {
        return `${multiplier}`
    }

    const arrPower = arrF.slice(arrF.indexOf('^') + 1)
    const power = sumArr(arrPower)

    if (sumArr(arrPower) === 2) {
        return `${multiplier * 2}x`
    } else if (multiplier * power === -1) {
        return `-x^${sumArr(arrPower) - 1}`
    } else if (multiplier * power === 1) {
        return `x^${sumArr(arrPower) - 1}`
    }

    return `${multiplier * power}x^${sumArr(arrPower) - 1}`

}

function sumArr(arr) {
    let sum = ''

    if (!arr.length) {
        return 1
    }

    for (const arg of arr) {
        sum += arg
    }

    if (arr[0] === '-1') {
        return Number(sum) * -1
    }

    return Number(sum)
}


console.log(`"3x^2" => ${differentiate("3x^2")}`)
console.log(`"-5x^3" => ${differentiate("-5x^3")}`)
console.log(`"6x^-2" => ${differentiate("6x^-2")}`)
console.log(`"-x" => ${differentiate("-x")}`)
console.log(`"42" => ${differentiate("42")}`)


