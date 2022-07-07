// object litral

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function(){
        console.log('draw');
    }
}

circle.draw();

// factory function
function create(radius){
    return{
        radius,
        draw: function(){
            console.log('draw');
        }
    };
}
 
const circle2 = create(2);


// Constructor Function
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const another = new Circle(2);