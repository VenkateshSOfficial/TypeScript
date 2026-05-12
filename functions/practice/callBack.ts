function getInput(a:number,b:number){
    console.log(`a : ${a} , b : ${b}`)
    return [a,b];
}

function calculation(operation:string,callback:any,...val:number[]){
    let result:number=0;
    switch(operation.toLowerCase()){
        case "addition":
            result=val.reduce((a,b)=>a+b,0);
    }
    callback(result);
    return result;
}

let input:number[]=getInput(2,3);
let sumResult=calculation("addition",(total:number)=>{
    return total;
},...input);
console.log(sumResult);