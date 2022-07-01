let getBody = document.body;

let createElement = document.createElement("h4");
let createTextMsg;

let date = new Date();
let currentHour = date.getHours();
let timeDate = date.getDate(); 

if(currentHour > 4 && currentHour < 10){
    createTextMsg = "Good Morning Boy!";
}else if(currentHour => 12 && currentHour < 18){
    createTextMsg = "Good Afternoon My Boy!";
}else if(currentHour > 18 && currentHour < 22){
    createTextMsg = "Good Evening Boy!";
}else if(currentHour > 22 && currentHour < 24){
    createTextMsg = "Good Night Boy!";
}else{
    createTextMsg = "You are still Younging My Boy!";
}

let newElement = document.createTextNode(createTextMsg);
createElement.appendChild(newElement);
getBody.appendChild(createElement);

createElement.setAttribute("class", "text-center");
createElement.style.cssText = 
"text-align: center; font-family: sans-serif; font-size: 60px;"


