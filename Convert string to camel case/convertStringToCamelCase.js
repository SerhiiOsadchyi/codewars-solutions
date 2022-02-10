/*
Convert string to camel case
https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript

Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*/

function toCamelCase(str){
    const wordsArray = str.split(/[^A-Za-z0-9]/)
    console.log(`wordsArray = ${wordsArray}`)
    let newStr = wordsArray[0]

    for (let i = 1; i < wordsArray.length; i++) {
        newStr += convertFirstLetterToUpperCase(wordsArray[i])
    }

    console.log(`newStr = ${newStr}`)

    return newStr
}

function convertFirstLetterToUpperCase(word) {
    const lettersArray = word.split('')
    console.log(`lettersArray = ${lettersArray}`)
    let newWord = lettersArray[0].toUpperCase()

    for (let i = 1; i < lettersArray.length; i++) {
        newWord += lettersArray[i]
    }

    return newWord
}

toCamelCase('The_Stealth_Warrior')