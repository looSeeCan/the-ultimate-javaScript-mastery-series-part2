

//PROTOTYPICAL INHERITANCE
const prototypicalInheritance = () => {
    
    (() => {
        function Circle(radius) {
            this.radius = radius;
        };

        Circle.prototype.draw = function() {
            console.log("draw");
        };

        Circle.prototype.duplicate = function() {
            console.log("duplicate");
        };

        //Above we have a Circle constructor. We added to the prototype a draw method and a duplicate method. Let's say the next day, we need a Square object and that
        //Square object should also use the duplicate method. Let's add it below.
        function Square(area) {
            this.area = area;
        };

        Square.prototype.duplicate = function() {
            console.log("duplicate");
        };

        const circleA = new Circle();
        console.log(circleA);

        const squareA = new Square();
        console.log(squareA);

    })();

    //so, above we have 2 constructors Circle and Square. They both have a similiar method called "duplicate" with the same implementation. We don't want to repeat
    //the implementation the way we did above. Instead we want to use inheritance.
    (() => {
        function Shape() {
            
        };

        Shape.prototype.duplicate = function() {
            console.log("duplicate");
        };

        function Circle(radius) {
            this.radius = radius;
        };

        
        Circle.prototype = Object.create(Shape.prototype);//Object.create is a method for creating an object. The argument is the object you want to use as a prototype
        //We are reasigning Circle.prototype to inherit from a new object Shape.prototype.

        Circle.prototype.draw = function() {
            console.log("draw");
        };

        const shapeA = new Shape();
        const circleA = new Circle(1);
        console.log(shapeA);
        console.log(circleA);
        circleA.duplicate();
        // const shapeA = new Shape();
        // console.log(shapeA);
    })();

    (() => {
        
    })();

    (() => {
        
    })();

    (() => {
        
    })();

    (() => {
        
    })();

    (() => {
        
    })();

    (() => {
        
    })();
};


export {prototypicalInheritance};