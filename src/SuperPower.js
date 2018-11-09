class SuperPower {
    constructor(name, effect) {
        this.name = name;
        this.id = Date.now();

        this.apply = (superHero) => {
            if (!superHero instanceof SuperHero) {
                throw new Error(ERRORS.INVALID_SUPERHORE_TYPE);
            } else {
                effect(superHero);
            }
        }
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }
}