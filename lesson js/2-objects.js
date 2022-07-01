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
    }
};

// printing the object
console.log(person);

// grab indivial properties
console.log(person.name);

// prints an Array of the object
console.log(Object.values(person));