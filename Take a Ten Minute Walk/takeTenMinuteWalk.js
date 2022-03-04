/*
Take a Ten Minute Walk

You live in the city of Cartesia where all roads are laid out in a perfect grid. 
You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. 
The city provides its citizens with a Walk Generating App on their phones -- 
everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). 
You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, 
so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) 
and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array (string in COBOL) containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). 
It will never give you an empty array (that's not a walk, that's standing still!).
*/

function isValidWalk(walk) {
    if(walk.length !== 10) {
        return false
    }

    if (checkDirection('n', walk) !== checkDirection('s', walk)) {
        return false
    }

    if (checkDirection('e', walk) !== checkDirection('w', walk)) {
        return false
    }


    return true

}

function checkDirection(letter, arr) {
    let count = 0
    console.log('===  checkDirection  ===')

    for (let arg of arr) {
        if (arg === letter) {
            count++
        }
    }

    return count
}

const arr1 = ['n','s','n','s','n','s','n','s','n','s']
const arr2 = ['w','e','w','e','w','e','w','e','w','e','w','e']
const arr3 = ['w']
const arr4 = ['n','n','n','s','n','s','n','s','n','s']

console.log(`isValidWalk(arr1) = ${isValidWalk(arr1)}`)
console.log(`isValidWalk(arr2) = ${isValidWalk(arr2)}`)
console.log(`isValidWalk(arr3) = ${isValidWalk(arr3)}`)
console.log(`isValidWalk(arr4) = ${isValidWalk(arr4)}`)
