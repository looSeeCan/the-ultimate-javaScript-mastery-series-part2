

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
        let person = {
            name: "Lucycan",
        };
        console.log(person);

        //let iterate thru this object to see the members
        for(let key in person) {
            console.log(key, person[key]);
        };

        console.log(Object.keys(person));
        
    })();

    (() => {
        //lets look at at the property descriptor of the toString method in the same person object
        // let person = {name: "Lucycan"};
        // console.log(person);
        // let parentObject = Object.getPrototypeOf(person);
        // console.log(parentObject);
        // console.log(Object.getPrototypeOf(parentObject));
        // console.log(console);
        // console.log(Object.getPrototypeOf(console));

        function BankAccount(balance) {
            let _balance = balance;
            Object.defineProperty(this, "balance", {
                get: function() {
                    return _balance;
                },
                set: function(amount) {
                    _balance = amount;
                },
                enumerable: true,
                configurable: false
            });
        }
        
        console.log(BankAccount);
        console.log(Object.getPrototypeOf(BankAccount));
        
        const transaction = new BankAccount(12);
        console.log(transaction);

        // const descriptor = Object.getOwnPropertyDescriptor(parentObject, "valueOf");//im looking at the parent object here. it gives me undefined if I look at the "person" object. idk why
        
        // console.log("valueOf:", descriptor);

        // Object.defineProperty(person, "name", {
        //     writable: true,
        //     enumerable: true,
        //     configurable: true,//these attributes are true by default
        // });
        // console.log(descriptor);
        // person.name = "Sheng";//change the name
        // console.log("check to see if the name changed:", person.name);
        // // delete person.name;
        // console.log(person.name);
        // console.log(person);

        // Object.defineProperty(person, "toString", {
        //     enumerable: true,
        // });

        // for(let key in person) {
        //     console.log(key);
        // };
    })();

//     ///5. Constructor Prototypes
//     (() => {
        
//     })();

//     ///6. Prototype vs Instance Members
//     (() => {
//         function Circle(radius) {
//             this.radius = radius;

//             this.draw = function() {//so the way we have this implemented here. we just have 2 instances below, but if we have 1000 or so instancesm, we have 1000 draw
//                 //methods. That is alot of wasted memory. we need to make a single instance of this method.
//                 console.log("draw");
//             };
//         };
//         const circle1 = new Circle(1);
//         console.log(circle1);
//         const circle2 = new Circle(1);
//         console.log(circle2);
//         console.log("Circle constructor function:", Circle.prototype);
//     })();
    
//     (() => {
//         function Circle(radius) {
//             this.radius = radius;
            
//         };
        
//         //every constructor has a protoype property. it is === to the circle objects that we create from that constructor
//         Circle.prototype.draw = function() {//what we did here, is take the "this.draw" method and placed it in its prototype object 
//             console.log("draw");
//         };
        
//         const circle1 = new Circle(1);
//         console.log(circle1);
//         const circle2 = new Circle(1);
//         console.log(circle2);//now we can see in the console that the draw method is no longer copied in each and every one of the instances. instead it is just in the
//         console.log("Circle constructor function:", Circle.prototype);//prototype.
//         console.log(Circle.prototype === circle1.__proto__);//compare the properties.
//         //we can access it from everyone of our circle instances
//         circle1.draw();//this draw will log on the console from line 89
//         circle2.draw();//^
//     })();
    
//     (() => {
//         function Circle(radius) {
//             //we have two kinds of properties and methods or two kinds of memebers
//             this.radius = radius; //instance members
//         };

//         Circle.prototype.draw = function() {//prototype members
//             console.log("draw");
//         };
        
//         const circle1 = new Circle(1);
//         console.log(circle1.toString());//chech the .toString of the circle object
        
//         console.log(".toString:", Circle.prototype.toString());//check the .toString method of the parent object

//         Circle.prototype.toString = function() {//assign a different vaule to the .toString method
//             return `Circle with radius ${this.radius}`;
//         };

//         console.log(".toString:", Circle.prototype.toString());//after assignment
//         console.log(circle1.toString());
//     })();

//     (() => {
//         function Circle(radius) {
//             this.radius = radius;

//             this.move = function() {
//                 console.log("move");
//             };
//         };

//         Circle.prototype.draw = function draw() {
//             console.log("draw");
//             this.move();//this method is an instance memeber. We can reference in both directions. 
//         };

//         const circle1 = new Circle(1);
//         circle1.draw();
//     })();

//     ///7. Iterating Instance and Prototype Members
//     (() => {
//         function Circle(radius) {
//             this.radius = radius;

//             this.move = function() {//we have two instance members here
//                 console.log('move')
//             };
//         };
        
//         const circle1 = new Circle(1);//declaring the object first and then modifying the prototype below
//         console.log(circle1);

//         Circle.prototype.draw = function draw() {//we have one prototype member here.
//             //it does not matter when you change the prototype. we could declare the new object first and then modify the prototype. The draw method will still be available
//             console.log('draw');
//             // return "draw";
//         };

//         circle1.draw();//the draw method will still be available;
        
//         console.log(Object.keys(circle1));//only returns instance members

//         for(let keys in circle1) {//returns all memebers (instance and prototype)
//             console.log(keys);
//         };

//         console.log(circle1.hasOwnProperty("radius"));//.hasOwnProperty is refering to the instance members. this returns true, because "radius" is an instance member
//         console.log(circle1.hasOwnProperty("draw"));//returns false because "draw" is a prototype property

//     })();
        
//     (() => {
//         function StopWatch() {
//             let startTime, endTime, running, duration = 0;

//             //I want access to the variables that I declared above. I can not access them from the prototype functions below
//             Object.defineProperty(this, "duration", {
//                 get: function() {
//                     return duration;
//                 },
//                 set: function (value) {
//                     duration = value;
//                 }
//             });

//             Object.defineProperty(this, 'startTime', {
//                 get: function() {
//                     return startTime;
//                 },
//                 set: function (value) {
//                     startTime = value;
//                 }
//             });

//             Object.defineProperty(this, "endTime",  {
//                 get: function() {
//                     return endTime;
//                 },
//                 set: function (value) {
//                     endTime = value;
//                 }
//             });

//             Object.defineProperty(this, "running", {
//                 get: function() {
//                     return running; 
//                 },
//                 set: function(value) {
//                     running = value;
//                 }
//             });
//         };

//         StopWatch.prototype.start = function start () {
//             if(this.running) throw new Error("StopWatch has already started");
            
//             this.running = true;
//             this.startTime = new Date();
//             console.log(this.startTime);
//         };
        
//         StopWatch.prototype.stop = function() {
//             if(!this.running) throw new Error("Stopwatch is not started");

//             this.running = false;
//             this.endTime = new Date();
//             // console.log(this.endTime);

//             const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
//             this.duration += seconds;
//             console.log(seconds);
//             console.log(this.duration);
//         };

//         StopWatch.prototype.reset = function() {
//             this.startTime = null;
//             this.endTime = null;
//             this.running = false;
//             this.duration = 0;
//         };
        
        
//         const go = new StopWatch();
//         console.log(go);
//         // console.log(go.this.duration);
//         go.start();
//         go.stop();
//     })();

//     (() => {
        
//     })();

//     (() => {
        
//     })();
    
    
    
    
    
    
    
    
};






export {prototypes};