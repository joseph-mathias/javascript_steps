// Procedural Programming

let baseSalary = 30_000;
let overtime = 10;
let rate = 30;

function getWage(baseSalary, overtime, rate){
    return baseSalary + (overtime * rate);
}

// OOP

let employee = {
    baseSalary : 30_000,
    overtime : 10,
    rate : 30,
    getWage: function(){
        return this.baseSalary + (this.overtime * this.rate);
    }
}


/**
 * "The best functions are those with no parameters!" Uncle Bob - Robert C Martin
 */