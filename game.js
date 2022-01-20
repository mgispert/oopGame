class Game {
    start(){
        this.player = new Player(); //create an instance of the Player
        this.player.domElement = this.createDomElm(this.player); //create DOM element for the player
        this.drawDomElm(this.player);
        this.addEventListeners();
    }
    addEventListeners(){
        document.addEventListener("keydown", (event) => {
            if(event.key === "ArrowLeft"){
                this.player.moveLeft();
            } else if (event.key === "ArrowRight"){
                this.player.moveRight();
            }
            this.drawDomElm(this.player);
        });
    }
    createDomElm(instance){
        const htmlTag = document.createElement("div"); // create html element (not added to the dom yet)
        htmlTag.className = instance.className; // add class (so that we can reuse this function to create different types of elements in the dom, eg. player, obstacles....)
        htmlTag.style.width = instance.width + "vw";
        htmlTag.style.height = instance.height + "vh";
        const board = document.getElementById("board"); // get a reference to the parent container
        board.appendChild(htmlTag); // append the element to the dom
        return htmlTag;
    }
    drawDomElm(instance){
        instance.domElement.style.left = instance.positionX + "vw";
        instance.domElement.style.bottom = instance.positionY + "vh";
    }
}

class Player{
    constructor(){
        this.className = "player";
        this.positionX = 0;
        this.positionY = 0;
        this.width = 10;
        this.height = 10;
        this.domElement = null;
    }
    moveLeft(){
        this.positionX -= 10;
        console.log("moving left.... current poistion: " + this.positionX);
    }
    moveRight(){
        this.positionX += 10;
        console.log("moving right.... current poistion: " + this.positionX);
    }
}


const game = new Game();
game.start();




