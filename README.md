# the-ultimate-javaScript-mastery-series-part2
 
 
// 4 pillars of OOP:
    // Encapsulation, Abstraction, Inheritance, Polymorphism.

    // -Encapsulation
        // So in OOP we group related variables and functions that operate on them into objects. We refer to these varables as properties, and the functions as methods. This is what we call Encapsulation.

        // example:
            // procedural:

            let baseSalary = 30_000;
            let overTime = 10;
            let rate = 20;

            function getWage(baseSalary, overTime, rate) {// 3 parameters. One of the symptoms of procedural code, is functions with so many parameters
                return baseSalary + (overTime * rate);
            };

            //we refer to the above implementation as procedural, so we have variables on one side, and functions on the other side, they are hard to decouple.

            // OOP:
            //why is this better than the procedural implementation above?

            let employee = {
                baseSalary: 30_000,//all the parameters are modeled as properties of this object. All the properties and the getwage function are highly related, so 
                overTime: 10,//they we group them together as part of one unit. An object. When you write your code in an object orented way, your functions end up
                rate: 20,//having fewwer and fewer parameters. The fewer the numbr of parameters, the easire it is to use and maintain that function.

                getWage: function() {//first of all look at this getWage function. It has no parameters. The function in the procedural implementation has 3.
                    return this.baseSalary + (this.overTime * this.rate);
                }
            };

            const emp = employee.getWage();
            console.log(emp);

    //Abstraction:        
            //We can hide some of the properties and methods from the outside, and this gives us a couple of benefits. First is tha we will make the interface of those 
            //objects simpler. Using and understanding an object with a few properties and methods is easier than an object with several properties and methods. The
            //second benefit is that it heps us reduce the impact of change. 
            //With abstraction we reduce the impact of change.

    //Inheritance:
            //a mechanism that allows you to eliminate redundant code

    //Polymorphism: (Poly = many, morphism = form)
            //polymorphism is a technique that allows you to get rid of long if and else or switch and case statements.
            
