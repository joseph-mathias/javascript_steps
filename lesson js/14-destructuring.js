// Array destructing

const names = ['John', 'Anna', 'Mathias', 'Sam'];

const [john, anna] = names;

console.log(`${a}, ${b}`);


const getUser = () => {
    return {
        name: 'Sam',
        lastname: 'Smith',
        gender: 'male',
        address: {
            country: 'UK',
            city: 'London',
            postcode: 'UK 5043',
            fullAddress: {
                doorNumber: 22,
                street: 'Ldn st'
            }
        },
        age: 29
    }
};

const user = getUser();

// const name = user.name;
// const age = user.age;
// const country = user.addresss.country;
// const doorNumber = user.addresss.fullAddress.doorNumber;

const {name, age, address : {country : theCountry}} = user;
const {address: {fullAddress : {doorNumber : number}}} = user;

console.log(name);
console.log(age);
// console.log(country);
console.log(theCountry);
console.log(number);