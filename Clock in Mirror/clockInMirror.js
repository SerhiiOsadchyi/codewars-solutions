/*
Clock in Mirror

Peter can see a clock in the mirror from the place he sits in the office. When he saw the clock shows 12:22

He knows that the time is 11:38

in the same manner:

05:25 --> 06:35

01:50 --> 10:10

11:58 --> 12:02

12:01 --> 11:59

Please complete the function WhatIsTheTime(timeInMirror), where timeInMirror is the mirrored time (what Peter sees) as string.

Return the real time as a string.

Consider hours to be between 1 <= hour < 13.

So there is no 00:20, instead it is 12:20.

There is no 13:20, instead it is 01:20.
*/

function WhatIsTheTime(timeInMirror) {
    const arr = timeInMirror.split(':')
    let minutes
    let hours

    if (arr[1] === '00') {
        minutes = '00'
    } else {
        minutes = 60 - arr[1]

        if (minutes < 10) {
            minutes = '0' + minutes
        } else {
            minutes = minutes.toString()
        }

    }

    minutes !== '00' ? hours = 11 - arr[0] : hours = 12 - arr[0]

    switch(hours) {
        case 0:
            hours = '12'
            break;
        case -1:
            hours = '11'
            break;
        default:
            hours < 10 ? hours = '0' + hours.toString() : hours = hours.toString() 
            break;
    }

    return `${hours}:${minutes}`

}

console.log(`06:35 => ${WhatIsTheTime("06:35")}`)
console.log(`11:59 => ${WhatIsTheTime("11:59")}`)
console.log(`12:02 => ${WhatIsTheTime("12:02")}`)
console.log(`04:00 => ${WhatIsTheTime("04:00")}`)
console.log(`06:00 => ${WhatIsTheTime("06:00")}`)
console.log(`12:00 => ${WhatIsTheTime("12:00")}`)

