class Player {
    constructor() {
        this.defaultScore = document.querySelector('#total-clicks').innerHTML;

        this.image = document.getElementById('main-image');
    }

    // Update when the image is clicked.
    update() {

        this.image.addEventListener('click', function(e) {
            let clickedTarget = e.target;

            console.log(clickedTarget);
        })
    }

    consoleLog() {
        console.log(this.defaultScore, this.image);
    }
}

const player = new Player();
player.consoleLog();

// Loop for event listeners that are apart of a class.
(function loop() {
    player.update();
})(this)