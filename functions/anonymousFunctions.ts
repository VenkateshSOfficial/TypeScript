/* simple anonymous function */

let welcome=function():string{
    return "hello world";
}

console.log(welcome());

/* anonymous functions with params */

let val=function(a:number,b:number):number{
    return a*b;
}

console.log(`Product : ${val(2,3)}`);