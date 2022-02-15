/*
Roman Numerals Decoder
https://www.codewars.com/kata/51b6249c4612257ac0000005/train/javascript

Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. 
So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

Example:

solution('XXI'); // should return 21
Help:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
*/

function solution(roman) {
    const symbolArr = [
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000]
    ]
    const romanArr = roman.split('')
    romanArr.reverse()
    let num = 0
    let numArray = []

    for (let i = 0; i < romanArr.length; i++) {
        for (let s = 0; s < symbolArr.length; s++) {

            if (romanArr[i] === symbolArr[s][0]) {
                numArray.push(symbolArr[s][1])

                if (numArray[numArray.length - 2] && numArray[numArray.length - 2] > numArray[numArray.length - 1]) {
                    num -= symbolArr[s][1]
                } else {
                    num += symbolArr[s][1]
                }

            }
        }
    }

    return num
}

console.log(solution("MCMXC"))


// Arabic to Roman
// function handleModulo(minStr, middleStr, maxStr, num) {
//     let strRoman = ''
//     const firstDigit = Number(num.toString().slice(0, 1))
//     const multiplicityFiveModulo = firstDigit % 5

//     if (Math.trunc(firstDigit % 5) === 1) {
//         strRoman += middleStr
//     }

//     if (multiplicityFiveModulo < 4) {
//         strRoman += minStr.repeat(multiplicityFiveModulo)
//     } else {
//         strRoman += (minStr + maxStr)
//     }

//     return strRoman
// }
