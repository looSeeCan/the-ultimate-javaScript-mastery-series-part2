//key: ///ALL CAPS = name of the lesson, ///Name of the parts of the lesson, //regular comments
document.title = "The Ultimate JavaScript Mastery Series";


///OBJECTS

///2. Object literal syntax
    //a simple way to defihe objects
const circle = {
    radius: 1,//key: value, here the key is radius. the value is 1
    location: {//here the key is location and the value is an object
        x: 1,
        y: 1,
    },

    draw: function() {//key = draw, value = function. but in objects, functions are refered to as methods
        console.log("draw");
        return "draw";
    }
};

console.log(circle.radius, circle.location, circle.draw());

//the object above has 3 members: radius, location and draw. draw is a method. radius and location are properties. Properties are used to hold values. Methods are used
//to define some logic.

/////////////////

///3. Factories
    //Object literal syntax is not good way to create an object and duplicate it if the object has at least one method. If an object has one or more methods, we say that 
    //that object has behavior. like a person that can do many things. if there is no method, then its ok to create objects, it is only an issue when they have behavior.
    //the sulution to this is; factory functions or Constructor functions (classes)

    //Factory Function
    (() => {
        const createCircle =(radius) => {
            return{//if we return an object, we refer to this as a factory function
                // radius: radius,
                radius, //short hand^. 
                draw: function() {
                    console.log("draw");
                }
            };
        };
        const circle1 = createCircle(1);
        console.log(circle1);
    })();

///4. Constructor Function
    (() => {
        // const Circle = (radius) => {//if I use an arrow function here. TypeError: Circle is not a constructor
        function Circle (radius) {
            // console.log("this:",this);//by default this points to the global object    
            this.radius = radius;
            this.draw = function() {
                return("draw");
            }
        };
        const circle1 = new Circle(1);//the "new" operator will create an empty object. then it will set "this" to point to that object.
        //and finally it will return that object from the Circle function. No need to have an explicit "return".
        //By default "this" points to the global object. we don't want to define global variables. It's bad practice to do so, because it is possible that one function or another will modify the vlaue
        //of these variables accidently and create a bug in our application.
        console.log("circle1:", circle1);
    })();

///5. Constructor property
    (() => {//same factory function and constructor functions from above

        const createCircle = (radius) => {
            return{//if we return an object, we refer to this as a factory function
                // radius: radius,
                radius, //short hand^. 
                draw: function() {
                    console.log("draw");
                }
            };
        };
        const createCircle1 = createCircle(1);
        // console.log(createCircle1);
        console.log(createCircle1.constructor);

        function Circle (radius) {
            this.radius = radius;
            this.draw = function() {
                return("draw");
            }
        };
        const circle1 = new Circle(1);
        // console.log("circle1:", circle);
        console.log(circle1.constructor);
        
    })();








