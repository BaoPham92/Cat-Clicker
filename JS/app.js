class Player {
    constructor() {
        this.defaultScore = document.querySelector('#total-clicks').innerHTML;
    }

    consoleLog() {
        console.log(this.defaultScore);
    }
}

const player = new Player();
player.consoleLog();