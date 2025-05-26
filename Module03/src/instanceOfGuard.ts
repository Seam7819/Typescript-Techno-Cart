{
    // instance of guard

    class Animal {
        name : string;
        species : string;

        constructor(name : string, species : string) {
            this.name = name,
            this.species = species
        }
        makeSound(){
            console.log("I am Making SOund");
        }
    }

    class Dog extends Animal{
        constructor(name: string, species : string){
            super(name,species)
        }
        // methods
        makeBark(){
            console.log("The dog is barking");
        }
    }
    class Cat extends Animal{
        constructor(name: string, species : string){
            super(name,species)
        }
        // methods
        makeMeaw(){
            console.log("The dog is Meawing");
        }
    }

    const getAnimal = (animal : Animal) => {
        if (animal instanceof Dog){
            animal.makeBark()
        }else if(animal instanceof Cat){
            animal.makeMeaw()
        }else{
        animal.makeSound()
        }
    }

    
    const dog = new Dog ("Dog is barking","Dog");
    const cat = new Cat ("Cat is meawing", "cat");
    console.log(dog,cat);
    getAnimal(cat);
    getAnimal(dog);
    
}
