let a: number = 3;
let b: number = 2;

/* arithmetic operators */
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b); /* perform square operation */

/* assignment operators */

console.log(`previous a value : ${a}`)
a = a + b;
console.log(`after ops a value : ${a}`);

/* 
relational operators ==> returns a boolean value 
> , < , >= , <= , == , != , === (strict equality)
*/
console.log("*********** relational operators *****************")
a = 10;
b = 20;

console.log(a > b);
console.log(a < b);
console.log(a <= b);
console.log(a >= b);

/* difference between == & === */

console.log("*********** == & === *****************")
let num1: any = 10;
let num2: any = "10";
console.log(num1 == num2);
console.log(num1 === num2);

/* logical operators */

let b1: boolean = true
let b2: boolean = false

console.log(b1 && b2);
console.log(b1 || b2);

/* 

ternary operator
syntax
exp ? res1 : res2

*/

let x: number = 100;
let y: number = 200;
let result: number = x > y ? x : y
console.log(`ternary ops : ${result}`);
