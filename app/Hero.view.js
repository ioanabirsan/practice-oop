class HeroView {
    constructor(parentNode, player, onAttack, onPower) {
        this.wrapper = document.createElement("div");
        this.wrapper.classList.add("player");
        this.wrapper.addEventListener("click", this._onClick.bind(this));
        
        this.onAttack = onAttack;
        this.onPower = onPower;
        
        parentNode.appendChild(this.wrapper);

        if (player instanceof Hero) {
            this.render(player);
        }
    }
    _onClick(e) {
        if(e.target.tagName === "BUTTON") {
            if(e.target.dataset.type === "weapon") {
                this.onAttack(e.target.dataset.id);
            } else {
                this.onPower(e.target.dataset.id);
            }
        }
    }

    setTurn(isTurn) {
        this.wrapper.querySelectorAll("button").forEach(btn => {
            if (isTurn) {
                btn.removeAttribute("disabled");
            } else {
                btn.setAttribute("disabled", true);
            }
        })
    }

    render(player, isTurn = false) {
        const {
            name,
            life,
            image
        } = player.getStats();
        const weapons = player.getWeapons();
        let superPowers = [];

        if(player instanceof SuperHero) {
            superPowers = player.getSuperPowers();
        }

        this.wrapper.innerHTML = null;

        this.wrapper.innerHTML = `
                <div class="player__header">
                    <h2> ${name} </h2>
                    <p class="player__header__life">${life}</p>
                </div>
                <div>
                    <img src="${image}" alt="player photo">
                </div>
                <div class="player__controls">
                    ${weapons.map(weapon => `<button class="btn" data-type="weapon" data-id=${weapon.getId()} ${isTurn ? "" : "disabled"}>${weapon.getName()}</button>`)}
                </div>
                <div class="player__super-controls">
                    ${superPowers.map(power => `<button class="btn" data-type="power" data-id=${power.getId()} ${isTurn ? "" : "disabled"}>${power.getName()}</button>`)}
                </div>
        `;
    }
}