

///PROTOTYPES
const prototypes = () => {
    ///1. Inheritance
        //essentially we have 2 types of inheritance, classical and prototypical. It is one of the topics for interview questions
    
    ///2. Prototypes and Prototypical
        //prototype is essentially the parent of another object. It has members (methods and properties) that a child object can inherit. Terminology for the parent
        //and child object can differ: parent/base/super, child/derived/sub. Every object has a prototype or a parent, except thr root object.

    ///3. Multilevel Inheritance
        //Objects created by a given constructor will have the same protoype

    ///4. Property Descriptors
    (() => {
        let person = {name: "Lucycan"};
        console.log(person);

        //let iterate thru this object to see the members
        for(let key in person) {
            console.log(key, person[key]);//how come none of the methods and properties are visible here. They should of been logged when I iterated thru them here
        };

        console.log(Object.keys(person));//also the same thing? why?
        //The reason why; is because in js, our properties have attributes attached to them, some of which by default will not let us enumerate thru them.
        
    })();

    (() => {
        //lets look at at the property descriptor of the toString method in the same person object
        let person = {name: "Lucycan"};
        let parentObject = Object.getPrototypeOf(person);
        console.log(parentObject);
        const descriptor = Object.getOwnPropertyDescriptor(parentObject, "toString");//im looking at the parent object here. it gives me undefined if I look at the "person" object. idk why
        console.log(descriptor);

        Object.defineProperty(person, "name", {
            writable: true,
            enumerable: true,
            configurable: true,//these attributes are true by default
        });
        console.log(descriptor);
        person.name = "Sheng";//change the name
        console.log("check to see if the name changed:", person.name);
        // delete person.name;
        console.log(person.name);
        console.log(person);

        Object.defineProperty(person, "toString", {
            enumerable: true,
        });

        for(let key in person) {
            console.log(key);
        };
    })();

    ///5. Constructor Prototypes
    (() => {
        
    })();

    ///6. Prototype vs Instance Members
    (() => {
        function Circle(radius) {
            this.radius = radius;

            this.draw = function() {//so the way we have this implemented here. we just have 2 instances below, but if we have 1000 or so instancesm, we have 1000 draw
                //methods. That is alot of wasted memory. we need to make a single instance of this method.
                console.log("draw");
            };
        };
        const circle1 = new Circle(1);
        console.log(circle1);
        const circle2 = new Circle(1);
        console.log(circle2);
        console.log("Circle constructor function:", Circle.prototype);
    })();
    
    (() => {
        function Circle(radius) {
            this.radius = radius;
            
        };
        
        //every constructor has a protoype property. it is === to the circle objects that we create from that constructor
        Circle.prototype.draw = function() {//what we did here, is take the "this.draw" method and placed it in its prototype object 
            console.log("draw");
        };
        
        const circle1 = new Circle(1);
        console.log(circle1);
        const circle2 = new Circle(1);
        console.log(circle2);//now we can see in the console that the draw method is no longer copied in each and every one of the instances. instead it is just in the
        console.log("Circle constructor function:", Circle.prototype);//prototype.
        console.log(Circle.prototype === circle1.__proto__);//compare the properties.
        //we can access it from everyone of our circle instances
        circle1.draw();//this draw will log on the console from line 89
        circle2.draw();//^
    })();
    
    (() => {
        function Circle(radius) {
            //we have two kinds of properties and methods or two kinds of memebers
            this.radius = radius; //instance members
        };

        Circle.prototype.draw = function() {//prototype members
            console.log("draw");
        };
        
        const circle1 = new Circle(1);
        console.log(circle1.toString());//chech the .toString of the circle object
        
        console.log(".toString:", Circle.prototype.toString());//check the .toString method of the parent object

        Circle.prototype.toString = function() {//assign a different vaule to the .toString method
            return `Circle with radius ${this.radius}`;
        };

        console.log(".toString:", Circle.prototype.toString());//after assignment
        console.log(circle1.toString());
    })();

    (() => {
        function Circle(radius) {
            this.radius = radius;

            this.move = function() {
                console.log("move");
            };
        };

        Circle.prototype.draw = function draw() {
            console.log("draw");
            this.move();//this method is an instance memeber. We can reference in both directions. 
        };

        const circle1 = new Circle(1);
        circle1.draw();
    })();

    ///7. Iterating Instance and Prototype Members
    (() => {
        function Circle(radius) {
            this.radius = radius;

            this.move = function() {
                console.log('move')
            };
        };

        Circle.prototype.draw = function draw() {
            console.log('draw');
        };

        const circle1 = new Circle;
    })();

    (() => {
        
    })();

    (() => {
        
    })();

    (() => {
        
    })();
    
    
    
    
    
    
    
    
};






export {prototypes};