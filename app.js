//key: ///ALL CAPS = name of the lesson, ///Name of the parts of the lesson, //regular comments
document.title = "The Ultimate JavaScript Mastery Series";

// const div = document.createElement("div");
// div.id = 'parentDiv';
// const h1 = document.createElement("h1");
// h1.innerHTML = "The Ultimate JavaScript Mastery Series Part2";
// div.appendChild(h1);
// document.body.prepend(div);

function Html () {
    this.append = function(id, text) {
        this.div =  document.createElement("div");
        this.div.id = id;
        this.h1 = document.createElement("h1");
        this.h1.innerHTML = text;
        this.div.appendChild(this.h1);
        document.body.prepend(this.div);
    };
};
const appendDiv2 = new Html();
appendDiv2.append("test", "This is a test");

const appendDiv = new Html(); 
appendDiv.append("parentDiv", "The Ultimate JavaScript Mastery Series Part2");




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
        console.log(createCircle1.constructor);//Every object has a constructor property, and that references the function that was used to create that object.

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

///6. Functions are objects
    (() => {
        function Circle(radius) {
            this.radius = radius;
            this.draw = function() {
                return "draw";
            };
            
        };
        //log the function to see that it is also a function
        console.log(Circle.name);//if we use dot notation, we can see all the members of the object. the purple icons are meethods and the blue icons are properties
        console.log(Circle.length);//logs the amount of arguments. in this case, just 1, which is "radius".
        

        const circle1 = new Circle;
        console.log(circle1);

    })();

///7. Values vs Reference Types
    //Value Types: number, string, boolean, symbol, undefined, null. 
    //Reference Types: Object, Function, Array.
    
    //value Type (primitives)
    (() => {
        let x = 10;// two primitive variables. x and y are 2 independent variables
        console.log("x:", x);
        let y = x;
        console.log("y:", y);
        x =20;//change  value of x to 20.

        console.log("x after reasignnment:", x);
        console.log("y after reasignment of x:", y);// y does not change to 20 when x was reasigned, because they are completely independent of each other
    })();
    

    //refernce type (object)
    (() => {
        let x = {
            value: 10,
        };
        
        console.log("x:", x.value);
        let y = x;
        console.log("y:", y);
        
        x.value = 20;
        console.log("x after reasignment:", x.value);
        console.log("y after reasignment:", y);//the y value changes

        //when we use the object "x", that object is not stored in x. that object is stored somewhere else in the memory. x = the memory location (the reference)
        //when we say; "let y = x;", its the address or the reference that is copied. In other words, both x and y are pointing to the same object in memory. So when 
        //changes are made using both x and y, changes are imediately visible to the other variable
        //Primitives are copied by value, Reference types or objects are copied by their reference.

        //here is another example:
        (() => {
            let number = 10;
            
            const increase = number => {//we are passing in a "number" argument
                number++;//we iterate it
            };
            increase(number);//call the function and pass in an argument of "10"
            console.log(number);//when we log it here. it will log still as "10". this is because the "number" is in the scope of the  function. when I log it here, i am 
            //essentially logging the same value as from when I declared it above. The "number++", after the function was done executing, it eventually fell out of scope.
            //I would need to return it and assign the return to a variable to retrieve that value.
        })();

        //change it to an object
        (() => {
            let number = {value: 10};

            const increase = number => {
                number.value++
            };
            increase(number);
            console.log(number);//here the value changes, because the value is passed by its reference. we are not dealing with two independent copies. we 
            //have two variables that are pointing to the same object.
        })();

    })();

///8. Adding or removing properties
    //objects are dynamic, meaning, we can add and delete properties
    (() => {
        function Circle (radius) {
            this.radius = radius;
            this.draw = function() {
                console.log('draw');
            };
        };

        const circle = new Circle(10);
        console.log(circle);

        //add a location property
        
        // circle["location 1"] = { x: 1};//bracket notation. use when names are not valid identifiers. such as names with spaces or characters; example: "location-1"
        circle.location = { x: 1 };
        console.log(circle);

        //delete
        delete circle.location;
        console.log(circle);
    })();

///9. Enumerating Properties    







