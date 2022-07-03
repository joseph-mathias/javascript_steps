// Generator

const numbers = function* () {
    yield 1;
    yield 'Hello World!';
    yield true;
    yield {name : 'Chris'};
}

const number = numbers();
// get an object
// console.log(number.next());
// console.log(number.next());
// console.log(number.next());
// console.log(number.next());

// return the value
// console.log(number.next().value);
// console.log(number.next().value);
// console.log(number.next().value);
// console.log(number.next().value);

const getNum = function* (n){
    for (let i = 0; i < n.length; i++) {
        yield n[i];
    }
}

const getNumGen = getNum([1, 4, 566, 3, 2, 65, ,7 ,8 ,96]);

const interval = setInterval(() => {
    const next = getNumGen.next();
    if(next.done){
        console.log('Gen is done');
        clearInterval(interval);
    }else{
        const numValue = next.value;
        console.log(numValue);
    }
}, 1000)