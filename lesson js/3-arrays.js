// Arrays 

// var names = ["Moses", "Sharon", "Royd", "Mulonda", {}, 45, undefined];
var names = ["Moses", "Sharon", "Royd", "Mulonda"];

console.log(names);

// indexing 0 -> n = Royd on position 3(index 2)
console.log(names[2]);

// get the size of the array
console.log(names.length);

// looping through the array
for(var n of names){
    console.log(n);
}

console.log("____ForEach Loop____");
names.forEach(function(name, index) {
    console.log(index + " " + name)
});