// Objects

// Declaretion of objects
var person = {
    name: "Joseph",
    age: 17,
    hasLicence: true,
    address : { //an Object
        email: "nchimunya882@gmail",
        area: "Lusaka",
        country: "Zambia"
    },
    car: ['Mini Cooper', 'Benz'],
    walk: function sayHello (){
        console.log("Hello, World!");
    },
};

// printing the object
console.log(person);

// grab indivial properties
console.log(person.name);
person.walk();
console.log(person.address); // returns an Object
console.log(person.address.email); //returns selected from the 
console.log(person.car); //displays the array
console.log(person.car[1]); //selects an index of


// prints an Array of the object
console.log(Object.values(person));