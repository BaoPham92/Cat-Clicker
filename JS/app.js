// Here will lay the version 2 of the revisions.

var variable = [];

// Objects.
    // Modal
    const modal = {
        set: (name, data) => { localStorage.setItem(name, data)},

        get: (variable) => { console.log(variable) }
    };

    // Connector
    const connector = {};

    // View
    const view = {};

    modal.set('Notes', 'Chapter one: Testing this might have worked.');
    console.log(localStorage.getItem('Notes'));