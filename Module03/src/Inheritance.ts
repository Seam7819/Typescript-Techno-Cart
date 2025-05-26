{
    // OPP inheritance


    // inheritance 
    class Parent {
        name : string;
        age : number ;
        address : string;

        // create a constructor 
        constructor(name : string, age : number, address: string){
            // initial it 
            this.name = name,
            this.age = age,
            this.address = address
        }
        // method
        sleepTime(numberOfHours: number){
            console.log(`${this.name} is sleeping fot ${numberOfHours} hours`);
        }
    }

    // creating a class 
    class Student extends Parent {
        // create a constructor 
        constructor(name : string, age : number, address: string){
            // initial it 
           super(name,age,address);
        }
        // method
        sleepTime(numberOfHours: number){
            console.log(`${this.name} is sleeping fot ${numberOfHours} hours`);
        }
    }
    const student1 = new Student("Fahad", 23, "banasree");
    console.log(student1);
    const student2 = new Student("fahamid", 23, "Rampura");
    student2.sleepTime(23);

    // another class 
    class Teacher extends Parent{
        designation : string;

        // create a constructor 
        constructor(name : string, age : number, address: string, designation: string){
            // initial it 
            super(name,age,address)
            this.designation = designation
        }
        // method
        takeClass(numberOfHours: number){
            console.log(`Mr ${this.name} is taking class for ${numberOfHours} Hours`);
        }
    }
    const teacher1 = new Teacher("Asif",40, "kajla", "Professor");
    console.log(teacher1);
    teacher1.sleepTime(8)
}