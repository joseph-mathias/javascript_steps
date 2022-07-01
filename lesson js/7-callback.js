//Callback functions

function callbackE(name, callback){
    console.log(callback(name));
}

// function (name) {
//     return "Hello, " + name;
// }

callbackE("Joseph", function(name) {
    return "Hello, " + name;
})