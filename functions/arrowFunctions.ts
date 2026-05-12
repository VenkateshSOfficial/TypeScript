/* arrow function with no params and no return type */

let greet = (): void => {
    console.log("hello");
}

greet();

/* arrow function with implicit return type */

const add = (a: number, b: number): number => {
    return a + b;
}

// or

const addOps = (a: number, b: number) => a + b;

/* arrow function with optional prameters */

let optionalAdd = (x: number, y?: number) => (y !== undefined) ? x + y : x;

/* arrow functions with default params */

let cost = (price: number, rate: number = .75) => price * rate;

/* arrow function with rest params */

let aggAdd=(...val:number[]):number=>{
    let sum=0;
    for(let eachVal of val){
        sum+=eachVal;
    }
    return sum;
}

console.log(addOps(10, 20))
console.log(optionalAdd(10, 12));
console.log(cost(1000));
console.log(aggAdd(10,23,21,34));