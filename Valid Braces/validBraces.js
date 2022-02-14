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

    const isBracesValid = parseArray(bracesArray)

    return isBracesValid
}

function parseArray(arr) {
    if (arr.length % 2 !== 0) {
        return false
    }

    while (arr.length > 0) {
        const bracesTypeArray = getBracesTypeArray(arr[0])
        const closeBracesIndex = getCloseBracesIndex(bracesTypeArray, arr)
        bracesArrayCheck = arr.slice(1, closeBracesIndex)

        if (closeBracesIndex < arr.length) {
            const restBracesArray = arr.slice(closeBracesIndex + 1)
            parseArray(restBracesArray)
        }

        if (bracesArrayCheck.length % 2 !== 0 || closeBracesIndex === false) {
            return false
        }

        arr.splice(0, 1)
        arr.splice(closeBracesIndex - 1, 1)  // deleted 1 element from bracesArray before

    }

    return true

}

function getCloseBracesIndex(bracesTypeArray, inputBracesArray) {
    let countOpenBraces = 1
    let countCloseBraces = 0

    for (let i = 1 ; i < inputBracesArray.length; i++) {
        if (bracesTypeArray[0] === inputBracesArray[i]) {
            countOpenBraces++
        }

        if (bracesTypeArray[1] === inputBracesArray[i]) {
            countCloseBraces++
        }

        if (countOpenBraces === countCloseBraces) {
            return i
        }
    }

    return false
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

//console.log(validBraces("([{}])"))
console.log(validBraces("(({{[[]]}}))"))
