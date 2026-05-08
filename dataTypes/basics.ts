/* 

number --> datatype
annotation --> : number
type inference --> if no datatype is assigned to the variable, then typescript will 
allocate datatype to the variable based on the value provided.

*/

/* numbers */
let myAge:number=35;
console.log(`Age : ${myAge}`)

let price:number=125.56
console.log(`Age : ${price}`)

/* string */
let firstName:string="John";
let lastName:string='Kennedy';

let fullName:string=(`hello ${firstName} ${lastName}`)
console.log(fullName);

/* boolean */
let isStudent:boolean=true;
console.log(isStudent);

/* null */
let emptyVal=null;
console.log(emptyVal);

/* undefined */
let undefinedValue;
console.log(undefinedValue);

/* any */
let gol:any="welcome";
console.log(typeof gol)

/* void */
function foo():void{
    console.log("foo");
}

foo();

/* adding datatype in function  */
function sum(a:number,b:number):number{
    return a + b;
}

console.log(`SUM : ${sum(2,3)}`)

function totalAddition(a:number[]):number{
    return a.reduce((a,sum)=>a+sum,0);
}

console.log(`Total sum : ${totalAddition([1,2,3,4,5])}`);

function evenNums(val:number[]):number[]{
    return val.filter((x)=>x%2==0);
}

console.log(`The even numbers are : ${evenNums([1,2,4,5,6,8])}`);

/* union type */
function unions(a:number,b:true|false){
    console.log(`${a} ${b}`)
}

unions(10,false);