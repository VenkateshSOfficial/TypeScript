// variable : a container that can hold data

// var, let and const

/* var x:number=10;
//  (or)
var x=20;     
let myName:string="Kaushik"; */

var age = 30;
console.log(`age : ${age}`)

// var vs let vs const

/* 

5 different aspects of difference berween var vs let vs const
=================================================================
1) scope
2) declaration (or) value assignment
3) re-declaration
4) re-initialization
5) Hoisting

var -> we don not use this in mordern JS/TS.Avoid var because it has function scope
and can lead to unexpected issues.

let -> use let when you need a variable that can change

const -> use const when the variable value should not change.

1) scope :
========
scope => accessible area
in JS/TS we have 2 different scopes , [ 1) functional scope ,2) block scope ]

var ==> functional scope
let & const ==> block scope

*/

function varScope() {
    if (true) {
        var msg = "hello world";
    }
    console.log(msg);

}

function letScope(val: number) {

    if (val > 5) {
        let msg = "Babbi"
        console.log(`blocked :${msg}`);
    }
    /* 
    console.log(msg)
    error => Cannot find name 'msg'.
    trying to use the msg variable declared as let outside of the block 
    where it is declared gives the above error 
    */
}

function constScope(val: number) {
    if (val > 5) {
        const msg = "Babbi"
        console.log(`blocked :${msg}`);
    }
    /* 
   console.log(msg)
   error => Cannot find name 'msg'.
   trying to use the msg variable declared as const outside of the block 
   where it is declared gives the above error 
   */
}

function scopeDiff() {
    if (true) {
        var num1 = 10;
        let num2 = 20;
        const num3 = 30;

        console.log(num1);
        console.log(num2);
        console.log(num3);
    }
  /*
    console.log(num1); ==> can be accessed outside of the declared block
    console.log(num2); ==> cannot be accessed as it is blocked scope
    console.log(num3); ==> cannot be accessed as it is blocked scope
    */
}

varScope();
letScope(10);
constScope(20);

/* 2) Declaration or value assignment
=====================================

 */

var x; /* variable declaration */
console.log(`X : ${x}`) /* when value is not initialised then the default initialsied value 
will be "undefined" and the default type of the variable will be "any
" */
x=10; /* variable initilization */
console.log(`X : ${x}`);

let a; /* variable declaration */
console.log(`A : ${a}`)/* when value is not initialised then the default initialsied value 
will be "undefined" and the default type of the variable will be "any
" */
a=10; /* variable initilization */
console.log(`A : ${a}`);

/* const val;  const must be initialised at the time of declaration
error for the above ===>  "'const' declarations must be initialized.*/

const val=100;
console.log(`const val : ${val}`);

/* 

conclusions:
1. var and let can first be declared(without initialization) and then initialized
2. const has to be initialized at the time of declaration only.

*/

/* 
3) re-declaration
===================
var => allows re-declaration
let & const => dosen't allow re-declaration
 */

var city="Chennai";
var city='Trichy'
console.log(`city : ${city}`);

let country="India";

/* 

let country="Russia";
error : Cannot redeclare block-scoped variable 'country'. 
while trying to re-declare the same variable the block scoped type safety is barged

*/

const planet="Earth";
/* 
const planet="venus";
error :Cannot redeclare block-scoped variable 'planet'.
*/

/* 
4) re-initialization / re-assignment
var & let = re-assignment is allowed
const = re-assignment not allowed
*/

var god="vishnu";
god="shiva"
console.log(`Re-initialized God : ${god}`);

let captain="Dhoni";
captain="Kohli"
console.log(`Re-initialized Captain : ${captain}`);

const driver="Ravi";
/* driver="babu"; 
error : Cannot assign to 'driver' because it is a constant. */

/* 
5) hoisting
==============
var supports hoisting and returns "undefined"
let and const supports hoisting but since the blocked scope it enters temporal dead zone
and returns not initialized error
 */
//console.log(`var Hoisted : ${aa}`);
/* Variable 'aa' is used before being assigned. */
var aa=10;
console.log(aa);

/* console.log(`let Hoisted : ${bb}`);
Block-scoped variable 'bb' used before its declaration. */
let bb="kaushik"
console.log(bb);

/* console.log(`const Hoisted : ${cc}`);
Block-scoped variable 'cc' used before its declaration. */
const cc="kaushik"
console.log(cc);




