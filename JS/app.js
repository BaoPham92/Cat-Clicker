document.addEventListener('DOMContentLoaded', function () {

    // Objects.

    // Obj with some common use of dom interactions.
    const domHelper = {
        // For targets.
        query: (data) => { return document.querySelector(data) },
        queryAll: (data) => { return document.querySelectorAll(data) },

        // Element creation.
        creatEl: (data) => { return document.createElement(data)}
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
    };

    // View
    const viewList = {
        init: () => {
            let list = domHelper.query('#image-list');
            
            for(let i = 0; i < modal.imageObj.length; i++) {
                li = domHelper.creatEl('li');
                li.textContent = i + 1;
                list.appendChild(li);
            }
            console.log(list)
        },
    };

    const viewImage = {
        init: () => {

            // Query and create elements.
            let container = domHelper.query('#images'), 
            img = domHelper.creatEl('img'), 
            h2 = domHelper.creatEl('h2'), 
            span = domHelper.creatEl('span');
            
            // Set attr and append elements to container.
            img.setAttribute('id', 'image'), h2.setAttribute('id', 'image-name'), span.setAttribute('id', 'click');
            container.appendChild(img);
            container.appendChild(h2);
            container.appendChild(span);

            console.log(img,h2,h2); // Console.log for confirmination.
        }
    }

    connector.init();

})