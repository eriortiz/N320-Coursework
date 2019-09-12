class Scare{ 
    constructor() {
        this.ghosts = [];
    }

addGhost(ghost) {
this.ghosts.push(ghost);
    }

alert() {
this.ghosts.forEach(function(ghost) {
ghost.boo();
        })
    }
 }

 class Ghost {
boo() {
console.log("Boo!");
    }
}

var scare = new Scare();
scare.addGhost(new Ghost());
scare.alert();