/* learn callback function */

function greet(name:string,msg:(message:string)=>void){
    console.log(name);
    msg("Welccome");
}

function showMessage(message:string){
    console.log(message);
}

greet("Vijay",showMessage)

// callback
function displayResult(result:number):void{
    console.log(result);
}

function sum(a:number,b:number,callback:(result:number)=>void){
    let result=a+b;
    callback(result)
}

sum(100,3,displayResult)