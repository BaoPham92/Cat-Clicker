class Player {
    constructor() {
        this.currentScore = 0;
        this.defaultScore = document.querySelector('#total-clicks');

        this.images = document.querySelectorAll('.cat-image');
    }

    // Update when the image is clicked.
    update() {

        for (const image of this.images) {

            image.addEventListener('click', (e) => {
                let clickedTarget = e.target;
                console.log(clickedTarget); // Event delegation.

                this.currentScore += 1; // Increment default 0 by 1.
                // console.log(`Current number of clicks is ${this.currentScore}`);

                this.defaultScore.innerHTML = `Number of clicks: ${this.currentScore}`;
                // console.log(this.defaultScore);
            })
        }

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