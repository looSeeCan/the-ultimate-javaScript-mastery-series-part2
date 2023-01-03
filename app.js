//key: ///ALL CAPS = name of the lesson, ///Name of the parts of the lesson, //regular comments
// import { Html, Html1 } from "./src/html.js";//I have an issue with debugging when I use "document.getElementbyId". Referencerror: document is not defined
import { objects } from "./src/objects.js";
import { prototypes } from "./src/prototypes.js";
import { prototypicalInheritance } from "./src/prototypical_inheritance.js";

//I couldnt figure out how to fix it. something about the dom and node. This is just a constructor that I was practicing with to create the title on the page

// const appendDiv2 = new Html1();
// appendDiv2.append("div2", "Abstracted version of the Html object");
// console.log(appendDiv2);

// const appendDiv = new Html();//the objec is prepending the div. so the every time i call this append method. it will be appended to the top of the page.
// appendDiv.append("parentDiv", "The Ultimate JavaScript Mastery Series Part2");
// console.log(appendDiv);


//When I need to debug, I just comment the above out, so I do not get the error.

console.groupCollapsed("%cObjects", "font-size: 20px");
    const a = objects();
    console.log(a);
console.groupEnd("Objects");

console.groupCollapsed("%cPrototypes", "font-size: 20px");
    const b = prototypes();
    console.log(b);
console.groupEnd("%cPrototypes");

console.group("%cPrototypical Inheritance", "font-size: 20px");
    const c = prototypicalInheritance();

console.groupEnd();

/// this is a test for merging and pulling
///ok so the comment^ showed up on this laptop when I did the git pull. This is the collaborator laptop. I don't see the changes
    /// when I do the pull on the owner machine. I had gitlens installed on the owner machine. I disabled it, so I'm going to try again
    /// with this statement.

///this is a change from the main branch.