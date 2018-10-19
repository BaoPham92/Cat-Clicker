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

        // Image information.
        image: undefined,
        imageObj:
            [
                { name: 'One', image: 'images/cat1.jpg', clicks: 0 },
                { name: 'Two', image: 'images/cat2.jpg', clicks: 0 },
                { name: 'Three', image: 'images/cat3.jpg', clicks: 0 },
                { name: 'Four', image: 'images/cat4.jpg', clicks: 0 },
                { name: 'Five', image: 'images/cat5.jpg', clicks: 0 }
            ],

        // Data init and and methods for data manipulation.
        init: () => {
            !(localStorage.text) ? localStorage.text : console.log('error in modal.init function.');
        },

        add: (obj) => {
            let textContainer = JSON.parse(localStorage.text);
            textContainer.push(obj);
            localStorage.text = JSON.stringify(textContainer);
        },

        showText: () => {
            return JSON.parse(localStorage.text);
        }

    };

    // Connector
    const connector = {
        init: () => {

            // Current image is now the first index.
            modal.image = modal.imageObj[0];

            viewList.init();
            viewImage.init();
            viewButton.init();
        },

        // Methods for modal.imageObj data manipulation.
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
        },

        // Methods for form data (Admin button revealing inputs.)

        addText: (txt) => {
            modal.add({
                content: txt
            })
        },

        getText: () => {
            return modal.showText();
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

            // Click listener incrementing image clicks ct.
            this.img.addEventListener('click', (e) => {
                let target = e.target;

                connector.incrementClicks();
                console.log(target === this.img);
            })
            console.log('Elements created and appended ->', this.img, this.h2, this.h2);
            // Console.log for confirmination.
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

    // Admin button view

    const viewButton = {

        init: () => {

            // Query elements.
            this.saveBtn = domHelper.query('.save-btn'),
                this.cancelBtn = domHelper.query('.cancel-btn'),
                this.form = domHelper.query('#admin-btn-form'),
                this.adminBtn = domHelper.query('.admin-btn'),
                this.adminForm = domHelper.query('#admin-btn-form');

            console.log(this.saveBtn, this.cancelBtn, this.form, this.adminBtn); // Expect defined declarations.

            // Listener to reveal admin button's input forms.
            this.adminBtn.addEventListener('click', (e) => {
                this.cancelBtn.classList.toggle('hidden'), this.saveBtn.classList.toggle('hidden'), this.adminForm.classList.toggle('hidden');
            })

            viewButton.render();
        },

        render: () => {
            let formContainer = [];

            this.adminSrc = domHelper.query('#admin-btn-src'),
            this.adminName = domHelper.query('#admin-btn-name'),
            this.adminClicks = domHelper.query('#admin-btn-clicks');

            formContainer.push(this.adminSrc),
            formContainer.push(this.adminName),
            formContainer.push(this.adminClicks);

            formContainer.forEach((element, index) => {
                element.addEventListener('keypress', (e) => {
                    e.keyCode === 13 ? console.log(this.adminName.value) : console.log('error');
                })
            })

            console.log(formContainer);
        }
    }

    connector.init();

})