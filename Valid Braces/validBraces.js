/*
Valid Braces
https://www.codewars.com/kata/5277c8a221e209d3f6000b56/javascript

Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.

Examples
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False
*/

const squareBraces = ['[', ']']
const curlyBraces = ['{', '}']
const parenthesis = ['(', ')']

function validBraces(braces){
    let bracesArray = braces.split('')
    let count = 0
    const target = bracesArray.length / 2

    if (bracesArray.length % 2 !== 0) {
        return false
    }

    while (bracesArray.length > 0) {
        const bracesTypeArray = getBracesTypeArray(bracesArray[0])
        const closeBracesIndex = getCloseBracesIndex(bracesTypeArray, bracesArray)
        bracesArrayCheck = bracesArray.slice(1, closeBracesIndex)

        if (bracesArrayCheck.length % 2 !== 0 || closeBracesIndex === 0) {
            console.log(`bracesArray.length = ${bracesArray.length}`)
            break
        }

        bracesArray.splice(0, 1)
        // deleted 1 element from bracesArray before
        bracesArray.splice(closeBracesIndex - 1, 1)
        count++
    }

    return count === target ? true : false
}

function getCloseBracesIndex(bracesTypeArray, inputBracesArray) {
    for (let j = 1 ; j < inputBracesArray.length; j++) {
        if (bracesTypeArray[1] === inputBracesArray[j]) {
            return j
        }
    }

    return 0
}

function getBracesTypeArray(inputBraces) {
    switch (inputBraces) {
        case squareBraces[0]:
            return squareBraces
        case curlyBraces[0]:
            return curlyBraces
        case parenthesis[0]:
            return parenthesis
        default:
            return false
    }
}

console.log(validBraces("(){}[]"))


