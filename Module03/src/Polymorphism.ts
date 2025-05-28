{
    // polymorphism 

    class People {
        getSleep(){
            console.log('I am sleeping for 8 hours');
        }
    }
    class Student extends People{
        getSleep(){
            console.log('I am sleeping for 7 hours');
        }
    }
    class Developer extends People{
        getSleep(){
            console.log('I am sleeping for 6 hours');
        }
    }

    const getSleepingHours = (params: People) =>{
        params.getSleep()
    }

    const person1 = new People();
    const person2 = new Student();
    const person3 = new Developer();

    getSleepingHours(person1);
    getSleepingHours(person2);
    getSleepingHours(person3);

    class Shape {
        getResult(){
            return 0;
        }
    }
    class Rectangle extends Shape {
        radius : number;

        constructor (radius : number){
            super()
            this.radius = radius
        }
        getResult(){
            return Math.PI * this.radius * this.radius;
        }
    }
    class Area extends Shape {
        radius : number;

        constructor (radius : number){
            super()
            this.radius = radius
        }
        getResult(){
            return 2* Math.PI * this.radius;
        }
    }

    const getResultOfSHape = (param : Shape)=>{
        console.log(param.getResult());
    }
    

    const res1 = new Shape();
    const res2 = new Rectangle(12);
    const res3 = new Area(4);

    getResultOfSHape(res1);
    getResultOfSHape(res2);
    getResultOfSHape(res3);

}