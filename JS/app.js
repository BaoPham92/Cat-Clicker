class Player {
    constructor() {
        this.currentScore = 0;
        this.defaultScore = document.querySelector('#total-clicks');

        // Add elements and content for clicks.
        this.addHeader = document.createElement('h4');
        this.addText = document.createTextNode('The number of times you clicked this image:');

        // Obtain images from HTML.
        this.images = document.querySelectorAll('.cat-image');
    }

    // Update when the image is clicked.
    update() {

        for (const image of this.images) {

            let compareSrc = image.attributes.getNamedItem('src'),
                ifcontainsH4 = Array.from(image.parentElement.childNodes).includes('h4'),
                clickedTarget;

            image.addEventListener('click', (e) => {
                clickedTarget = e.target; // Event delegation.
                console.log(clickedTarget);

                clickedTarget === image ? this.currentScore += 1 : console.log('error');

                (compareSrc === compareSrc) && ifcontainsH4 ? console.log('Parent element contains a h4 tag.') : console.log('error');

                    console.log(compareSrc === compareSrc);

                this.defaultScore.innerHTML = `Number of clicks: ${this.currentScore}`;
                // console.log(this.defaultScore);
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