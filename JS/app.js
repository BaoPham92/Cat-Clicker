class Player {
    constructor() {
        this.currentScore = 0;
        this.defaultScore = document.querySelector('#total-clicks').innerHTML;

        this.image = document.getElementById('main-image');
    }

    // Update when the image is clicked.
    update() {

        this.image.addEventListener('click', (e) => {
            let clickedTarget = e.target;

            this.currentScore += 1; // Increment default 0 by 1.
            console.log(`Current number of clicks is ${this.currentScore}`);
            
        })
    }

    consoleLog() {
        console.log(this.defaultScore, this.image, this.currentScore);
    }
}

// Instance of class Player.
const player = new Player();
player.consoleLog();

// Loop for event listeners that are apart of a class.
(function loop() {
    player.update();
})(this)