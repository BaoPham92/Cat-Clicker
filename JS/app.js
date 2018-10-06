class Player {
    constructor() {
        this.currentScore = 0;
        this.defaultScore = document.querySelector('#total-clicks');

        // Obtain images from HTML.
        this.images = document.querySelectorAll('.cat-image');
        this.amountOfImages = {name: 'placeholder', age: "placeholder"};
    }

    // Update when the image is clicked.
    update() {

        this.howMany(); // Create var === number of images to contain/store info.

        for (const image of this.images) {

            // Declarations
            let addHeader = document.createElement("h4"), 
                text = document.createTextNode('The number of times you have clicked:');
                addHeader.appendChild(text);

            // Conditionals / Comparisons.
            let compareSrc = image.attributes.getNamedItem('src'),
                ifcontainsH4 = Array.from(image.parentElement.childNodes).includes('h4');

            // Image click listener for scores.
            image.addEventListener('click', (e) => {
                let clickedTarget = e.target; // Event delegation.
                console.log(clickedTarget);

                clickedTarget === image ? this.currentScore += 1 : console.log('error');

                (compareSrc === compareSrc) && !ifcontainsH4 ? image.parentElement.insertBefore(addHeader, image.parentElement.children[1]) : console.log('Parent element contains a h4 tag.');
                // console.log(compareSrc === compareSrc); // Console.log confirmination message.

                this.defaultScore.innerHTML = `Number of clicks: ${this.currentScore}`;

            })
        }

    }

    // Declaration creator for future image additions to be clicked on.
    howMany() {

        // Creates the amount of variables for the amount of images.
        for(let i = 0; i < this.images.length; i++) {

            // Future images with class of 'cat-image' is now stored in their own variables in a array.
            this.amountOfImages[i] = {};
            this.amountOfImages[i].element = this.images[i];
            this.amountOfImages[i].clicks = 0;

        }
        console.log(this.amountOfImages);
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