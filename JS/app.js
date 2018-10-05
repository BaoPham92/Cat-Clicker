class Player {
    constructor() {
        this.currentScore = 0;
        this.defaultScore = document.querySelector('#total-clicks');

        // Obtain images from HTML.
        this.images = document.querySelectorAll('.cat-image');
    }

    // Update when the image is clicked.
    update() {

        for (const image of this.images) {

            // Declarations.
            let addHeader = document.createElement("h4"), text = document.createTextNode('The number of times you have clicked:');
            let newH4 = addHeader.appendChild(text);

            let compareSrc = image.attributes.getNamedItem('src'),
                ifcontainsH4 = Array.from(image.parentElement.childNodes).includes('h4');

            // Image click listener for scores.
            image.addEventListener('click', (e) => {
                let clickedTarget = e.target; // Event delegation.
                console.log(clickedTarget);

                clickedTarget === image ? this.currentScore += 1 : console.log('error');

                (compareSrc === compareSrc) && !ifcontainsH4 ? image.parentElement.insertBefore(newH4, image.parentElement.children[1]) : console.log('Parent element contains a h4 tag.');
                // console.log(compareSrc === compareSrc); // Console.log confirmination message.

                this.defaultScore.innerHTML = `Number of clicks: ${this.currentScore}`;

            })
        }

    }

    consoleLog() {
        console.log(this.defaultScore, this.images, this.currentScore);
    }
}

// Instance of class Player.
const player = new Player();
player.consoleLog();

// Loop for event listeners that are apart of a class.
(function loop() {
    player.update();
})(this)