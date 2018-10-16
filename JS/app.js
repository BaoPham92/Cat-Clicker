document.addEventListener('DOMContentLoaded', function () {

    // Objects.

        // Modal
        const modal = {

            init: () => {},

            imageObj: {
                0: { name: 'One', image: 'images/cat1.jpg', clicks: 0 },
                1: { name: 'Two', image: 'images/cat2.jpg', clicks: 0 },
                2: { name: 'Three', image: 'images/cat3.jpg', clicks: 0 },
                3: { name: 'Four', image: 'images/cat4.jpg', clicks: 0 },
                4: { name: 'Five', image: 'images/cat5.jpg', clicks: 0 }
            },

            set: (name, data) => { localStorage.setItem(name, data) },

            get: (variable) => { localStorage.getItem(variable) }
        };

        // Connector
        const connector = {};

        // View
        const view = {};

        // modal.set('Notes', 'Chapter one: Testing this might have worked.');
        // console.log(localStorage.getItem('Notes'));
        
        console.log('This should log the object of all image information.', modal.imageObj[0].image)
})