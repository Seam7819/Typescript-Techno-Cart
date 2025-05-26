{
    // type guard
    // type of --> type guard
    
    type numberORstring = string| number;
    const addNumbers = (param1 : numberORstring, param2: numberORstring): 
    numberORstring => {
        if(typeof param1 === "number" && typeof param2 === "number"){
            return param1 + param2;
        }else {
            return param1.toString() + param2.toString();
        }
    }
    const result1 = addNumbers("45","34");
    console.log(result1);
    const result2 = addNumbers(2,3);
    console.log(result2);

    // type in guard
    type User = {
        name : string;
    }
    type AdminUser = {
        name : string;
        role : string;
    }
    const getUser = (user : User | AdminUser) => {
        if("role" in user){
            console.log(`My name is ${user.name} and my role is ${user.role}`);
        }else{
            console.log(`My name is ${user.name}`);
        }
    }
    const normalUser: User = {
    name : "Sultan",
}
    const adminsUSer : AdminUser = {
        name : "Sultan vai",
        role : "Developer"
    }
    getUser(normalUser);
    getUser(adminsUSer);
    
}