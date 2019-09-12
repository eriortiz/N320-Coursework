var posts = [
    { user: "XX", content: "XX" },
    { user: "YY", content: "YY" },
    { user: "ZZ", content: "ZZ" }
];


class Posts {
    displayList() {
        showUserPosts(postData);
    }
}

function showUserPosts(posts) {
    posts.forEach((post) => {
        var newDiv = document.createElement("div");
        newDiv.innerHTML = post.content;
        document.body.appendChild(newDiv);
    })
}

class Drop {
    constructor() {
        this.x = Math.random() * 400;
        this.y = 0;
    }

    update() {
        this.y ++;
        RainManager.hitground;
        fill(0,0,200);
        circle(this.x, this.y, 5);
    }
}

class RainManager {
    constructor() {
        this.drops = [];
    }

    hitGround() {
        for(var d=0; d<this.drops.length;d++){
            if (this.drops[d].y >= g.y){
                this.drops.splice(d,1);
                g.b++;
            }
        }
    }

    createDrop() {
        //make a new drop
        var newDrop = new Drop();
        
        //add this drop to our collection of drops
        this.drops.push(newDrop);
    }

    update() {
        for(var i = 0; i < this.drops.length; i++) {
            this.drops[i].update();
        }
    }
}

class Ground {
    //constructor
        //set the starting color
        //start the drop hit count

    //update - draws the rectangle to the screen

    //drop hit - called when a rain drop gets low enough (how do you inform it?)
        //change the color for every ten rain drops hit

        constructor(){
            this.x = 5;
            this.y = 250;
            this.b = 100;
        }
        update() {
            fill(0,0,this.b);
            rect(this.x, this.y, 400, 50);
        }

}

//global variables
var rainManager = new RainManager();
var g = new Ground();

//Run once before the application starts
function setup() {
    createCanvas(400,300);
}

//runs 60 times a second, or so
function draw() {

    //clear out background
    background(255);

    //create a new drop on a 1% chance
    if(Math.random() < .05) {
        rainManager.createDrop();
    }

    rainManager.update();

    g.update();
}

/*
class Drop {
    constructor(){
        this.x = 40;
        this.y = 0;
    }

    update() {
        this.y ++;
        fill(0,0,200);
        circle(this.x, this.y, 5);
    }
}

class Ground {
    constructor(){
        this.x = 5;
        this.y = 250;
    }
    update() {
        fill(0,0,200);
        rect(this.x, this.y, 400, 50);
    }

}


var g = new Ground();
function setup(){
    createCanvas(400,300)
}

var rm = new RainManager();


//runs 60 times a second, or so
function draw() {
    background(255);
    g.update();
    rm.createDrops();

    console.log(rm.drops);
    for(var d=0; d<rm.drops.length;d++){
        rm.drops[d].update();
    }

}

class RainManager {
    constructor() {
        this.drops = [];
    }

    createDrops() {
        //stub
        //To Do: Complete 
        this.drops.push(new Drop);
    }
}
*/
