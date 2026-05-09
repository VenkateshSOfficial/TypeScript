/* simple if condition */

let age: number = 21;
if (age >= 18) {
    console.log("voting eligible")
}

/* use else block */

let val: number = 13;
if (val % 2 == 0) {
    console.log(`${val} is even`);
} else {
    console.log(`${val} is odd`);
}

/* nested if - else conditions */

let marks: number = 59;

if (marks >= 90 && marks <= 100) {
    console.log(`${marks} is Grade A`);
} else if (marks >= 75 && marks <= 90) {
    console.log(`${marks} is Grade B`);
} else if (marks >= 60 && marks <= 75) {
    console.log(`${marks} is Grade C`)
} else {
    console.log(`${marks} is Fail`)
}

/* switch case statements */

let day: number = 10;

switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("wrong input");
}