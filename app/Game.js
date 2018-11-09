class Game {
    constructor() {
        this.turn = 0;
        this.players = [];
        this.views = [];
    }

    changeTurn() {
        this.turn++;
        if (this.turn > 1) {
            this.turn = 0;
        }

        this.reRender();
    }

    reRender() {
        this.views.forEach((view, index) => {
            view.render(this.players[index], this.turn === index);
        })
    }

    startGame() {
        this.views[0].setTurn(true);
    }

    registerHero(player) {
        if (!player instanceof Hero) {
            throw new Error(ERRORS.INVALID_PLAYER_TYPE);
        } else if (this.players.length === 2) {
            throw new Error(ERRORS.MAX_PLAYERS);
        } else {
            this.players.push(player);
            this.views.push(new HeroView(document.querySelector("main"), player, this.attack.bind(this), this.usePower.bind(this)));

            if(this.players.length === 2) {
                this.startGame();
            }
        }
    }

    attack(weaponId) {
        let attackWeapon = this.players[this.turn].getWeapon(weaponId);

        this.players.forEach((player, index) => {
            if (index !== this.turn) {
                player.wasAttacked(attackWeapon);
            }
        });

        this.changeTurn();
      
    }

    usePower(powerId) {
        this.players[this.turn].activate(powerId);
        this.changeTurn();
    }
}