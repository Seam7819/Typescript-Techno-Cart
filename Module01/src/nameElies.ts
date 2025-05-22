{
    // name elies in object 

    // here we declare its type and we can use in every object
    type student ={
        name : string;
        class : number;
        roll : number;
        address : string;
        contactNo : number;
        subject : string;
        favFood? : string
    }

    const student1 : student = {
        name : "Shourav",
        class : 5,
        roll : 15,
        address : "rasulpur",
        contactNo : 1937636444,
        subject : "math",
        favFood : " ice-cream"
    }
    const student2 : student = {
        name : "Shourav",
        class : 5,
        roll : 15,
        address : "rasulpur",
        contactNo : 1937636444,
        subject : "math"
    }

    type userName = string;
    type isDone = boolean;
    const userName : userName = "Programming Hero";
    const isDOne : isDone = true;

    // elies in function 

    type add = (a:number,b: number) => number;

    const add :add = (a,b) => {
        return a + b;
    }

}