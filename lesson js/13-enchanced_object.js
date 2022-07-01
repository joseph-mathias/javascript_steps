// Enhanced object syntax


const priceProp = 'PRICE';
const calculator = (name, price)=> {
    return{
        name,
        add: function(x, y){
            return x * y;
        },[priceProp.toLowerCase()] : price
    }
}

const calc = calculator('Kenko')

console.log(calc.name);
console.log(calc.add(50, 2));