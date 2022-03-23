/*
IP Address to Number
https://www.codewars.com/kata/541a354c39c5efa5fa001372

An IPv4 address is a 32-bit number that identifies a device on the internet.

While computers read and write IP addresses as a 32-bit number, we prefer to read them in dotted-decimal notation, which is basically the number split into 4 chunks of 8 bits, converted to decimal, and delmited by a dot.

In this kata, you will create the function ipToNum that takes an ip address and converts it to a number, as well as the function numToIp that takes a number and converts it to an IP address string. Input will always be valid.

Conversion Example
//original IP address
192.168.1.1

//breaks down into 4 binary octets
11000000 . 10101000 . 00000001 . 00000001

//which are merged together (unsigned 32-bit binary)
11000000101010000000000100000001

//and finally converted to base 10
3232235777
Note that the binary octets are unsigned (so we can't have negative numbers).

Be careful: JavaScript does bitwise arithmetic on signed 32-bits integers.

Code Examples
ipToNum
ipToNum('192.168.1.1') //returns 3232235777
ipToNum('10.0.0.0') //returns 167772160
ipToNum('176.16.0.1') //returns 2953838593
numToIp
numToIp(3232235777) //returns '192.168.1.1'
numToIp(167772160) //returns '10.0.0.0'
numToIp(2953838593) //returns '176.16.0.1'
nested
numToIp(ipToNum('192.168.1.1')) //returns '192.168.1.1'
ipToNum(numToIp(3232235777)) //returns 3232235777

*/

function ipToNum(ip) {
    const ipArr = ip.split('.')
    let bitsStr = ''

    for (const num of ipArr) {
        bitsStr += numToBits(num, 7)
    }

    return bitsToNum(bitsStr)
}

function numToIp(num) {
    const bits = numToBits(num, 31)
    const bitsArr = bits.split('')
    const ip = `${bitsToNum(bitsArr.slice(0, 8).join(''))}.${bitsToNum(bitsArr.slice(8, 16).join(''))}.${bitsToNum(bitsArr.slice(16, 24).join(''))}.${bitsToNum(bitsArr.slice(-8).join(''))}`
    return ip
}

function numToBits(num, length) {
    let rest = num
    let bits = ''

    let i = length
    while (i >= 0) {
        const iPow = Math.pow(2, i)

        if (num >= iPow) {
            bits += 1
            num = num - iPow
        } else {
            bits += 0
        }

        i--
    }

    return bits
}

function bitsToNum(bitsStr) {
    let bitsArr = bitsStr.split('')
    bitsArr.reverse()
    let num = Number(bitsArr[0])

    for (let i = 1; i < bitsArr.length; i++) {
        num += bitsArr[i] * Math.pow(2, i)
    }

    return num
}

const num1 = '192.168.1.1'
const num2 = '10.0.0.0'
const num3 = '176.16.0.1'

const num11 = 3232235777
const num12 = 167772160
const num13 = 2953838593

console.log(`ipToNum = ${ipToNum(num1)}  (3232235777)`)
console.log(`ipToNum = ${ipToNum(num2)}  (167772160)`)
console.log(`ipToNum = ${ipToNum(num3)}  (2953838593)`)

console.log(`numToIp = ${numToIp(num11)} => 192.168.1.1`)
console.log(`numToIp = ${numToIp(num12)} => 10.0.0.0`)
console.log(`numToIp = ${numToIp(num13)} => 176.16.0.1`)

