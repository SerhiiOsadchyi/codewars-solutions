/*
The Supermarket Queue
https://www.codewars.com/kata/57b06f90e298a7b53d000a86

There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

input
customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.
output
The function should return an integer, the total time required.

Important
Please look at the examples and clarifications below, to ensure you understand the task correctly :)

Examples
queueTime([5,3,4], 1)
// should return 12
// because when there is 1 till, the total time is just the sum of the times

queueTime([10,2,3,3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the 
// queue finish before the 1st person has finished.

queueTime([2,3,10], 2)
// should return 12
Clarifications
There is only ONE queue serving many tills, and
The order of the queue NEVER changes, and
The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.
N.B. You should assume that all the test input will be valid, as specified above.

P.S. The situation in this kata can be likened to the more-computer-science-related idea of a thread pool,
with relation to running multiple processes at the same time: https://en.wikipedia.org/wiki/Thread_pool
*/

function queueTime(customers, n) {
    console.log(`***  customers = ${customers} |  n = ${n}  ***`)

    if (n === 1) {
        let sum = 0

        for (const customer of customers) {
            sum += customer
        }

        return sum
    }

    let cashboxes = []
    let tempMin = 0
    let cashboxMin = 0
    let maxTime = 0
    let arrLength
    customers.length < n ? arrLength = customers.length : arrLength = n

    for (let cashbox = 0; cashbox < arrLength; cashbox++) {
        cashboxes[cashbox] = 0
    }

    for (const customer of customers) {
        tempMin += customer

        tempMin = customer + cashboxes[0]

        for (let cashbox = 0; cashbox < arrLength; cashbox++) {
            if (cashboxes[cashbox] + customer <= tempMin) {
                tempMin = cashboxes[cashbox] + customer
                cashboxMin = cashbox
            }
        }

        cashboxes[cashboxMin] += customer
    }

    for (const cashbox of cashboxes) {
        if (cashbox > maxTime) {
            maxTime = cashbox
        }
    }

    return maxTime
}

//console.log(queueTime( [], 1 ) )
//console.log(queueTime( [1,2,3,4], 1 ) )
console.log(queueTime( [2,2,3,3,4,4], 2 ) )
//console.log(queueTime( [1,2,3,4,5], 100 ) )
console.log(queueTime( [6,29,5,26,20,26,24,21,7,30,4,30,49,12,46,32,43,25,24,19] , 2 ) )
