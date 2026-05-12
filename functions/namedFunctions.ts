/* named functions */

/* named function with no params and no return type */
function display(): void {
    console.log("Hello world");
}

/* named function with params and return type */
function sum(a: number, b: number): number {
    return a + b;
}

/* named function with rest params */

function addNums(...nums: number[]): number {
    let i;
    let sum: number = 0;

    /* for(const num of nums){
        sum+ num;
    } */
    3
    for (i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum;
}

/* named functions with multiple params of multiple types */

function findElements(...elements: (number | string | boolean)[]) {
    return elements.length;
}

/* named functions with optional params */
function displayDetails(name: string, id: number, email?: string): void {
    console.log(`ID : ${id}`)
    console.log(`ID : ${name}`)
    if(email!==undefined){
        console.log(`ID : ${email}`)
    }
}

/* named function with default params */

function calculateDiscount(price:number,rate:number=0.50):void{
    let discount:number=price * rate;
    console.log(`DISCOUNT : ${discount}`);
}

display()
console.log(`SUM : ${sum(2, 3)}`)

console.log(`ADD NUMS : ${addNums(2, 3, 4, 5, 6, 7, 8)}`)

console.log(`length : ${findElements(1, 3, "kaushik", true)}`);

displayDetails("scott",123,"abc@gmail.com");

calculateDiscount(1000,0.90);