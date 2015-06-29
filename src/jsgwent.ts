class JSGwent {

    game: Phaser.Game;

    static STAGE_WIDTH = 1334;
    static STAGE_HEIGHT = 750;

    constructor() {
        this.game = new Phaser.Game(JSGwent.STAGE_WIDTH, JSGwent.STAGE_HEIGHT, Phaser.CANVAS, "body", { preload: this.preload, create: this.create, update: this.update, render: this.render });
    }

    preload = (game: Phaser.Game) => {
        this.loadCards();
    }

    create = (game: Phaser.Game) => {

    }

    update = (game: Phaser.Game) => {

    }

    render = (game: Phaser.Game) => {

    }

    private loadCards() {
       this.game.load.image("cards","cards.jpg");
    }
}

window.onload = function() {
    new JSGwent();
}
