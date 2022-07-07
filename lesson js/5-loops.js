// Loops

var array = ['Zambia', 'Congo', 'USA', 'SA', 'Eypt']

// for loop
for (var index = 0; index < array.length; index++) {
    console.log(array[index]);
}

//while loop
var i = 0;
while (i < 5) {
    console.log(i);
    i += 1;
} 

// do while
var j = 0;
do {
    j++;
    console.log(j);
} while (j < 9);

/*break -> allowes you to break out of a loop
continue -> allowes you to go back*/

var k = 0;
while (k < 9) {
    console.log(k);
    if (k == 5) {
        break;
    }
    k++;
}