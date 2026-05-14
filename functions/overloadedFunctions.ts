/* overloaded functions */

function getInfo(id:number):number;
function getInfo(name:string):string;

function getInfo(val:number|string):number|string{
    switch(typeof val){
        case "number":
            return val*2;
        case 'string':
            return val.toUpperCase();
    }
}

/* different number of parameters */

function add(a:number,b:number):number;
function add(a:number,b:number,c:number):number;

function add(...inputs:number[]):number{
    let result:number=0;
    for(let input of inputs){
        result+=input;
    }
    return result;
}

/* example 3 different return types */

function processInput(str:string):string;
function processInput(num:number):number;

function processInput(value:number|string):number|string{
    let result:number|string;
     switch(typeof value){
        case "number":
            result=value*2;
            break
        case 'string':
            result=value.toUpperCase();
            break;
    }
    return result;
}

function greet(name:string):string;
function greet(age:number):number;
function greet(isMarried:boolean):string;

function greet(val:string|number|boolean):string|number{
    switch(typeof val){
        case "string":
            return `name: ${val}`;
        case "number":
            return `age: ${val}`;
        case "boolean":
            return val===true?"married":"single";
        default:
            return "unknown";     

    }
}

console.log(getInfo(100));
console.log(getInfo("Venkatesh"));
console.log(`SUM : ${add(2,3)}`);
console.log(`Input : ${processInput(5000)}`)
console.log(greet("C Joseph Vijay"));
console.log(greet(52));
console.log(greet(true));