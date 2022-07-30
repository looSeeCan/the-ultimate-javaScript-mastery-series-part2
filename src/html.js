const title = document.title = "The Ultimate JavaScript Mastery Series";


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





export {title, Html};
