/*
Descending Order
https://www.codewars.com/kata/5467e4d82edf8bbf40000155/solutions/javascript

Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. 
Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
*/

descendingOrder(1)

function descendingOrder(n){
    const strArray = [...n.toString()]
    let index = 0
    let outputStr = ''

    while (strArray.length > 0) {
        index = getMinNumber(strArray)
        outputStr += strArray[index]
        strArray.splice(index, 1)
    }

    return +outputStr
}

function getMinNumber(numStringArray) {
    let max = +numStringArray[0]
    let index = 0

    for (let i = 1; i < numStringArray.length; i++) {
        if (max < +numStringArray[i]) {
            max = +numStringArray[i]
            index = i
        }
    }

    return index
}