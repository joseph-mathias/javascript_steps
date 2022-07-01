//Spread oparetor

const arr = ["Marian", "Anna", "John"];
const arr_two = ["Said", "Mary", "Paul"];

const concatArray = [...arr, ...arr_two];

concatArray.forEach(function(name){
    // console.log(name);
})


//Objects

const address = {
    city: 'Lusaka',
    country: 'Zambia',
    postCode: '101010'
}

const name = {
    first: 'Joseph',
    last: 'Nchimunya'
}

const person = {...address, ...name};

console.log(person);