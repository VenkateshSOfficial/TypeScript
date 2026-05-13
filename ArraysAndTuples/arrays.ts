/* arrays */

/* array declaration */

/* approach 1 : using a literal */
/* array declaration */
let name: string[] = []
name[0] = "MS Dhoni";
name[1] = "Scott";
name[2] = "Peter";
name[3] = "Cal";
name[4] = "Vijay";

/* or */
/* both declaration and initialization */
let allNames: string[] = ["John", "Smith", "Peter", "Scott", "Dave"];
console.log(allNames)


/* approach 2 : using generic way */
/* using array keyword which is also one of type */

let empNames: Array<string> = ["John", "Smith", "Peter", "Scott", "Dave"];

let empIds: Array<number> = [123, 467, 231, 908, 341];

let data: Array<string | number> = ["Babu", "Shyram", 234, 12]

let mixedData: Array<any> = ["cal", null, true, 123, undefined]

/* array operations */
/* print the array */
console.log(empNames);

/* iterate looping statements */
/* classic for loop */
console.log(`length of empNames: ${empNames.length}`)
for (let i = 0; i < empNames.length; i++) {
    console.log(empNames[i]);
}

/* for in loop */
console.log("employee ids....")
for (let id in empIds) {
    console.log(empIds[id]);
}

/* for of loop */
console.log("data.......")

for (let datum of data) {
    console.log(datum);
}

/* function looping */

function search(ele: number, arr: Array<number>): boolean | number {
    /* for(let a of arr){
        if(a===ele){
            return true;
        }
    } */

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ele) {
            return i;
        }
    }
    return false;
}

const result = search(10, [2, 3, 10, 6, 7]);
console.log(`index: ${result}`);

function conversion(str: string[]): string[] {
    let upperCase: string[] = [];
    for (let i = 0; i < str.length; i++) {
        upperCase[i] = str[i].toUpperCase();
    }
    return upperCase;
}

function sum(...val:Array<number>):number{
    let total:number=0;
    for(let v of val){
        total+=v;
    }
    return total;
}

function convertToCapitalLetters(...str:string[]):string[]{
    let toCapital:string[]=[];
    for(let s of str){
        toCapital.push(s.toUpperCase());
    }
    return toCapital;
}

console.log(`Total sum: ${sum(1,2,3,4,5,6)}`);
console.log(`Capital letters conversion: ${convertToCapitalLetters("ramu","ganesh","vinay")}`);
//console.log(conversion(["babbi", "gokul", "gmail", "bannet"]))



