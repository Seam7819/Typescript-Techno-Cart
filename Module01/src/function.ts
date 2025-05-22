// there are two types of function 
// 1 is normal function 
// another is arrow function 

function add (num1 : number,num2 :number): number {
    return num1+ num2;
}
add(12,2);

// in arrow function 

const addNumber = (a : number,b : number) : number => a + b;
addNumber(12,23);

// if we write a function in object its called a method 

const car = {
    price : 1000000,
    color : "red",
    emi : 0,
    //if we want to access in a function then we have to use "this" 
    // "this" not applicable for arrow function
    function (emi : number) : string {
        return `my balance is ${this.emi+emi}`;
    }
}

const arr : number[] = [12,14,15,15,16,25,98];
arr.map((elm: number) : number => elm*elm); 