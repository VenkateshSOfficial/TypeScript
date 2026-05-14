let numbers:number[]=[1,2,3,4,5,6,7,8,9,10]
let fruits:string[]=["Apple","Orange","mango","Banana","Papaya"]

console.log(`Values are: ${numbers}`);
console.log(`fruits are: ${fruits}`);

/* length --> array attribute
implementation : .length */

console.log(`Values array length: ${numbers.length}`);
console.log(`Fruits array length: ${fruits.length}`);

/* 
push()
push() method is used to add any element at the end of the array
*/

/* example 1 -> adding only 1 value */
numbers.push(100);
console.log(`After push() --> ${numbers}`);

/* example 2 --> adding multiple elements */
numbers.push(200,300,400);
console.log(`After push("with multiple elements") --> ${numbers}`);

/* 
pop()
will remove the last element from the array
*/

numbers.pop();
console.log(`after removing last element using pop() --> ${numbers}`)
const lastFruit=fruits.pop();
console.log(`after removing the last fruit "${lastFruit}" using pop()--> ${fruits}`);


/* shift()
removes the first element from an array
 */

const firstFruit=fruits.shift();
const firstNum=numbers.shift();
console.log(`after removing the first fruit "${firstFruit}" using shift()--> ${fruits}`);
console.log(`after removing the first number "${firstNum}" using shift()--> ${numbers}`);

/* unshift()
adds element to the beginning of the array
single or multiple elements */

/* adding single element atr the first */
const newLength=fruits.unshift("Apple");
console.log(`Newly added fruit: ${fruits}`)
console.log(`new length of fruits is ${newLength}`);

/* adding multiple elements are the start */
const updatedLength=fruits.unshift("Papaya","Gauva","Kiwi");
console.log(`Multiple fruits added are : ${fruits}`)
console.log(`length after mutiple fruits added : ${updatedLength}`)

/* concat()
combines two or more arrays */

let nums:Array<number>=[10,20,30]
let values:number[]=[1,2,3]
let concatinatedArrays=nums.concat(values);
console.log(`concatinated array : ${concatinatedArrays}`);

/* slice()
slice() will extract a section of an array (or) subset of an array
 */

const slicedFruits=fruits.slice(1,3);
console.log(`sliced array of fruits using slice()---> ${slicedFruits}`);

/* splice()
 splice() adds or removes elements from an array everywhere
 splice(index to remove, number of elements to be removed,new elements to be added )*/

 /* example 1 */
 console.log(`Current fruits : ${fruits}`);
 const splicedFruits=fruits.splice(1,2); /* splice(starting index,no of elements to be removed)
 will return the deleted elements */
 /* 1 => delete from first index
    2 => delete 2 elements from the first index
  */
 console.log(`removed elements using splice() : ${splicedFruits}`)
 console.log(`Current fruits after splice() : ${fruits}`);

 /* example 2 */

 let ipl:string[]=["csk","rcb","lsg","mi","gt","pks","dc"]
 console.log(`IPL before splice()==> ${ipl}`);
 const newlyAddedTeams=ipl.splice(2,2,"ctk","mu");
 console.log(`new teams after splice() : ${newlyAddedTeams}`);
 console.log(`IPL teams after splice() : ${ipl}`);

 /* indexof()
 finds the index of the specific elements */
 
 /* example 1 */
 const gt_index=ipl.indexOf("gt");
 console.log(`index of gt : ${gt_index}`);

 /* example 2 */
 const mi_index=ipl.indexOf("mi")
 console.log(`mi index : ${mi_index}`);

 /* example 3 ==> starting index */
 const fetchIndex=ipl.indexOf('gt',5);
 console.log(`fetched index using the start param : ${fetchIndex}`);

 /* includes()
 valdiate if any element exists in the array or not */

 const result=ipl.includes("csk");
 console.log(`IPL team CSK exists : ${result}`);

 const includesResult=ipl.includes("mi");
 console.log(`IPL team MI exists : ${includesResult}`);

 /* toString()
 will convert array to string format */

 let myArray:string[]=['w','e','l','c','o','m','e'];
 let greet:string=myArray.toString();
 console.log(`The greet msg : ${greet}`);



