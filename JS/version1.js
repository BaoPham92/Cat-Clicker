class Player {
    constructor() {

        // Obtain images from HTML.
        this.images = document.querySelectorAll('.cat-image');
        this.amountOfImages = {};

        // Property for whether elements are hidden.
        this.isHidden = Array.from(document.querySelectorAll('.hidden'));

        // Helper object.
        this.dataHelper = {
            generator: function* (imageObj) {
                for (let i = 0; i < imageObj; i++) {
                    console.log(i);
                    yield i;
                }
            },

            mapIterator: function* (iterator, mapping) {
                while (true) {
                    let result = iterator.next();

                    if (result.done) {
                        break;
                    }

                    yield mapping(result.value);
                }
            }
        };
    }

    // Update when the image is clicked.
    imageClicks() {

        this.howMany(); // Create var === number of images to contain/store info.

        let imageObj = Object.keys(this.amountOfImages).length;

        for (const image of this.images) {

            // Declarations
            let addHeader = document.createElement("h4"),
                text = document.createTextNode('The number of times you have clicked:'),
                headerContainer = [];

            addHeader.appendChild(text);

            // Conditionals / Comparisons.
            let compareSrc = image.attributes.getNamedItem('src'),
                ifcontainsH4 = Array.from(image.parentElement.childNodes).includes('h4');

            // Image click listener for scores.
            image.addEventListener('click', (e) => {

                let clickedTarget = e.target; // Event delegation.

                // Conditional for checking / inserting h4 element containing click data.
                (compareSrc === compareSrc) && !ifcontainsH4 ? image.parentElement.insertBefore(addHeader, image.parentElement.children[1])
                    : console.log('Parent element contains a h4 tag.');

                // Push elements to container if container !have element.
                Array.from(document.querySelectorAll('h4')).forEach((index) => {
                    !headerContainer.includes(index.nextElementSibling)
                        ? headerContainer.push(index.nextElementSibling)
                        : console.log('error');
                })

                // Declaration / and generators that trigger for clicks based on clicked target element.
                let values = this.dataHelper.generator(imageObj), mapped = this.dataHelper.mapIterator(values, (i) => {

                    // Conditional.
                    const result =
                        this.amountOfImages[i].element === clickedTarget ?
                            (this.amountOfImages[i].clicks++ , headerContainer.filter(header => header === clickedTarget)[0]
                                .previousElementSibling.textContent = `The number of times you have clicked: ` + this.amountOfImages[i].clicks)
                            : console.log('error');

                    console.log(headerContainer.filter(header => header === clickedTarget)[0], this.amountOfImages);

                    return result;
                });

                // next() function calls from generators.
                console.log(mapped.next()); console.log(mapped.next()); console.log(mapped.next()); console.log(mapped.next()); console.log(mapped.next());

            })
        }
    }

    // Method for list of images
    imageList() {

        // li tags.
        const list = Array.from(document.querySelectorAll('#cat-list li'));

        // li tag conditional for revealing images.
        list.forEach((element, index) => {

            element.addEventListener('click', (e) => {
                const clickedTarget = e.target; // Event delegation;

                clickedTarget === element && this.isHidden.filter((element, indexOfHidden) => { indexOfHidden === index;}) ? this.isHidden[index].classList.toggle('hidden') : console.log('error');
            })

        })
    }

    // Declaration creator for future image additions to be clicked on.
    howMany() {

        // Creates the amount of variables for the amount of images.
        for (let i = 0; i < this.images.length; i++) {

            // Future images with class of 'cat-image' is now stored in their own variables in a array.
            this.amountOfImages[i] = {};
            this.amountOfImages[i].element = this.images[i];
            this.amountOfImages[i].clicks = 0;
        }
    }

    consoleLog() {
        console.log(this.images);
    }
}

// Instance of class Player.
const player = new Player();
// player.consoleLog();

// Loop for event listeners that are apart of a class.
(function loop() {
    player.imageClicks();
    player.imageList();
})(this)