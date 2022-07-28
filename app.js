document.title = "The Ultimate JavaScript Mastery Series";

// 4 pillars of OOP:
    // Encapsulation, Abstraction, Inheritance, Polymorphism.

    // -Encapsulation
        // So in OOP we group related variables and functions that operate on them into objects. We refer to these varables as properties, and the functions as methods. This is what we call Encapsulation.

        // example:
            // procedural:

            let baseSalary = 30_000;
            let overTime = 10;
            let rate = 20;

            function getWage(baseSalary, overtime, rate) {
                return baseSalary + (overTime * rate);
            };

            //we refer to this kind of implementation as procedural, se we have variables on one side, and functions on the other side, they are hard to decouple.

            // OOP:

            let employee = {
                baseSalary: 30_000,
                overTime: 10,
                rate: 20,

                getWage: function() {
                    return this.baseSalary + (this.overTime * this.rate);
                }
            };

            const emp = employee.getWage();
            console.log(emp);