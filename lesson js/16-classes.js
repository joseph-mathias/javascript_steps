//Classes

class Animal {
    constructor(name, age){
        console.log(`${name} is an animal`);
        this.name = name;
        this.age = age;
    }
    eat(){
        console.log(`${this.name} is sleeping`);
    }
    wake(){
        console.log(`${this.name} is waking up`);
    }
    static isStaticMethod(){
        console.log(`Static method!`);
    }
}

class Dog extends Animal{
    constructor(name, age,breed){
        super(name, age);
        this.breed = breed;
    }

    bread(){
        console.log(`${this.age}, ${this.breed}`);
    }
}