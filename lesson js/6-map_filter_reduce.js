//  MAP || FILTER || REDUCE


//map -> transfomations on the array
var map = [2, 7, 9, 0, 6, 5].map(function(i){
    return i * 2;
});


//return a boolean
var filter = [2, 7, 9, 0, 6, 5].filter(function(b){
    return b % 2 == 0;
})

//reduce -> transfomations on the array
var reduce = [2, 7, 9, 0, 6, 5].reduce(function(accumlator, current){
    return accumlator + current;
})

console.log(reduce)