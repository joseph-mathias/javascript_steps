
//defulat paremeters

const calculatePay = (yearSalary, bonus = {teamBonus: 0}) => {
    return yearSalary + bonus.teamBonus;
}

console.log(calculate(499));