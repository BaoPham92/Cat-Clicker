document.addEventListener('DOMContentLoaded', function () {

    // Objects.

    // Obj with some common use of dom interactions.
    const domHelper = {
        // For targets.
        query: (data) => { return document.querySelector(data) },
        queryAll: (data) => { return document.querySelectorAll(data) },

        // Element creation.
        creatEl: (data) => { return document.createElement(data) }
    }

    // Modal
    const modal = {
        image: undefined,
        imageObj:
            [
                { name: 'One', image: 'images/cat1.jpg', clicks: 0 },
                { name: 'Two', image: 'images/cat2.jpg', clicks: 0 },
                { name: 'Three', image: 'images/cat3.jpg', clicks: 0 },
                { name: 'Four', image: 'images/cat4.jpg', clicks: 0 },
                { name: 'Five', image: 'images/cat5.jpg', clicks: 0 }
            ],
    };

    // Connector
    const connector = {
        init: () => {

            // Current image is now the first index.
            modal.image = modal.imageObj[0];

            viewList.init();
            viewImage.init();
        },

        getListImg: (target, i) => {

            let obj = modal.imageObj[i]

            // Conditional to retreive and set images according to clicks.
            target.getAttributeNode('name').value === obj.name
                ? domHelper.query('#image').setAttribute('src', obj.image)
                : console.log('Incorrect match.');

            modal.image = obj // Set current image upon click selection.
        },

        getCurrentImg: () => {
            return modal.image;
        },

        incrementClicks: () => {
            modal.image.clicks++;
            console.log(modal.image.clicks)
            viewImage.render();
        }
    };

    // View containing list of clickable options.
    const viewList = {
        init: () => {
            let list = domHelper.query('#image-list');

            for (let i = 0; i < modal.imageObj.length; i++) {
                li = domHelper.creatEl('li');
                li.textContent = i + 1;
                li.setAttribute('name', modal.imageObj[i].name);
                list.appendChild(li);

                li.addEventListener('click', (e) => {
                    let target = e.target;

                    connector.getListImg(target, i);
                })
            }
            console.log(list)
        },
    };

    // View containing information and stats.
    const viewImage = {
        init: () => {

            // Query and create elements.
            this.container = domHelper.query('#images'),
                this.img = domHelper.creatEl('img'),
                this.h2 = domHelper.creatEl('h2'),
                this.span = domHelper.creatEl('span');


            // Set attr and append elements to container.
            this.img.setAttribute('id', 'image'),
                this.h2.setAttribute('id', 'image-name'),
                this.span.setAttribute('id', 'image-clicks');

            this.container.appendChild(this.img);
            this.container.appendChild(this.h2);
            this.container.appendChild(this.span);

            this.img.addEventListener('click', (e) => {
                let target = e.target;

                connector.incrementClicks();
                console.log(target === this.img);
            })
            console.log(this.imgQ, this.h2Q, this.h2Q); // Console.log for confirmination.
        },

        render: () => {

            // Query new appended elements.
            this.imgQ = domHelper.query('#image'),
                this.h2Q = domHelper.query('#image-name'),
                this.spanQ = domHelper.query('#image-clicks');

            // Adjust stats for image.
            let currentImg = connector.getCurrentImg();
            this.h2Q.textContent = currentImg.name;
            this.spanQ.textContent = currentImg.clicks;
            this.imgQ.src = currentImg.image;
        }
    }

    connector.init();

})