{
    // OPP class 
    class Animal {
        name : string;
        species : string;
        sound : string;

        // create a constructor 
        constructor (name :string, species:string , sound : string){
            // initial it 
            this.name = name;
            this.species = species;
            this.sound = sound;
        }

        // methods
        // when we write a function in objects its called a method 
        makeSound() {
            console.log(`This ${this.name} is always shout like ${this.sound}`);
        }
    }

    // create instance or object 
    const dog = new Animal("German", "Tinku","ghew Ghew");
    const cat = new Animal("Parsian", "Cta", "Meaw");
    console.log({dog,cat});


    // Type 02 
    // if i use any parameters property my code will more shorter and easier 
    class User {
        // parameters properties 
        constructor (public name : string, public contact : string, public age : string){
        }
        UserIdentify(){
            console.log(`This person is ${this.name}.His age is ${this.age}.
                If any query just contact ${this.contact}`);
        }
    }
    // create instance or object 
    const newUser = new User ("Snu","0192734", "25");
    console.log(newUser);
    newUser.UserIdentify()
}