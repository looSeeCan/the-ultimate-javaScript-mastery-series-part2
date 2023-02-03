

///PROTOTYPES
const prototypes = () => {
    ///1. Inheritance
        //essentially we have 2 types of inheritance, classical and prototypical. It is one of the topics for interview questions
    
    ///2. Prototypes and Prototypical
        //prototype is essentially the parent of another object. It has members (methods and properties) that a child object can inherit. Terminology for the parent
        //and child object can differ: parent/base/super, child/derived/sub. Every object has a prototype or a parent, except thr root object.

    ///3. Multilevel Inheritance
        //Objects created by a given constructor will have the same protoype
    (() => {
        const myArray = [1, 2, 3, 4];
        console.log(myArray);
    })();

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

        

//     ///5. Constructor Prototypes
//     (() => {
        
//     })();

    
    /// 6. Prototype vs Instance Members

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

    (() => {
        function Circle(radius, name) {
            this.radius = radius;
            this.name = name;

            this.draw = function() {//so the way we have this implemented here. we just have 2 instances below, but if we have 1000 or so instancesm, we have 1000 draw
                //methods. That is alot of wasted memory. we need to make a single instance of this method.
                console.log("draw");
            };

            this.walk = function() {
                console.log("walk")
            }
        };

        console.log(Circle);
        const circle1 = new Circle(1);
        console.log("circle1:",circle1);
        const circle2 = new Circle(2);
        console.log("circle2:", circle2);
        console.log("Circle.prototye:", Circle.prototype);
        console.log(circle1.__proto__);
        console.log(circle1.__proto__ === Circle.prototype);
        console.log(circle1.__proto__ === circle2.__proto__);/// both these circles have the same prototype as Circle.prototype
    })();
    
    (() => {
        function Circle(radius) {
            this.radius = radius; /// instance memebers
            this.anotherMember = function() {
                console.log("anotherMember");
            }
        };
        
        //every constructor has a protoype property. it is === to the circle objects that we create from that constructor
            Circle.prototype.draw = function() {//what we did here, is take the "this.draw" method and placed it in its prototype object 
                console.log("draw");
            };
            Circle.prototype.walk = "walk";
            Circle.prototype.talk = function() {/// adding members to the prototype. Prototype members
                return "Say something"; 
            };
            
            console.log(Circle);
            console.log(Circle.prototype);
            console.log(Circle.constructor);
            console.log(Object.getPrototypeOf(Circle));
            const circle1 = new Circle(1);
            console.log("circle1:", circle1);

        /// can I add memebers to the Function.prototype and Object.prototype
        Function.prototype.hello = "Hello Function.prototype";
        Object.prototype.hello = "Hello Object.prototype";

        /// you can refernce other membbers
        Circle.prototype.referenceAnotherMember = function() { /// created a prototype called referencdAnotherMember in the Circle.prototype
                                                                ///and referenced the instance member in circle1
            circle1.anotherMember();
        }
        Circle.prototype.referenceAnotherMember();

        /// lets reverse ^
        circle1.anotherMember2 = function() {
            Circle.prototype.referenceAnotherMember()
        }
        console.log(circle1);
        circle1.anotherMember2(); /// what I did here was I created anotherMember2 in circle1, then I called the method in the prototype

    })();

    ///7. Iterating Instance and Prototype Members
    (() => {
        function Circle(radius) {
            this.radius = radius;

            this.move = function() {//we have two instance members here
                console.log('move')
            };
        };
        console.log(Circle.prototype);

        const circle1 = new Circle(1);//declaring the object first and then modifying the prototype below
        console.log(circle1);

        Circle.prototype.draw = function draw() {//we have one prototype member here.
            //it does not matter when you change the prototype. we could declare the new object first and then modify the prototype. The draw method will still be available
            console.log('draw');
            // return "draw";
        };

        circle1.draw();//the draw method will still be available;
        
        console.log(Object.keys(circle1));//only returns instance members

        for(let keys in circle1) {//returns all memebers (instance and prototype)
            console.log(keys);
        };

        console.log(circle1.hasOwnProperty("radius"));//.hasOwnProperty is refering to the instance members. this returns true, because "radius" is an instance member
        console.log(circle1.hasOwnProperty("draw"));//returns false because "draw" is a prototype property
        
        


    })();
        
    // (() => {
    //     function StopWatch() {
    //         let startTime, endTime, running, duration = 0;

    //         //I want access to the variables that I declared above. I can not access them from the prototype functions below
    //         Object.defineProperty(this, "duration", {
    //             get: function() {
    //                 return duration;
    //             },
    //             set: function (value) {
    //                 duration = value;
    //             }
    //         });

    //         Object.defineProperty(this, 'startTime', {
    //             get: function() {
    //                 return startTime;
    //             },
    //             set: function (value) {
    //                 startTime = value;
    //             }
    //         });

    //         Object.defineProperty(this, "endTime",  {
    //             get: function() {
    //                 return endTime;
    //             },
    //             set: function (value) {
    //                 endTime = value;
    //             }
    //         });

    //         Object.defineProperty(this, "running", {
    //             get: function() {
    //                 return running; 
    //             },
    //             set: function(value) {
    //                 running = value;
    //             }
    //         });
    //     };

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