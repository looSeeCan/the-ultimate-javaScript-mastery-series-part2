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

// const appendDiv3 = new HTml();

//TODO: implement abstraction on this object

function Html1 () {
    this.append = function(id, text) {
        let div = document.createElement("div");
        div.id = id;
        const h1 = document.createElement("h1");
        h1.innerHTML = text;
        div.appendChild(h1);
        document.body.prepend(div);
    };
};

const appendDiv4 = new Html1();



export {title, Html, Html1};
