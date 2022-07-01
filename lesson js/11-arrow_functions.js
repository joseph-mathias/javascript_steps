//Arrow Fuctions


const hello = () => {
    const cs = 'CS'
    return "Hello, World!"
}

const power = [1,5,8,9].map((n, i) => Math.pow(n, i));

const add = (x, y) => x + y;

const mileToKm = miles => miles * 1.60934

console.log(hello());
console.log(power);
console.log(add(5, 90));
console.log(mileToKm(600));