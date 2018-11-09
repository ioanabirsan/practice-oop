class SuperHero extends Hero {
    constructor(name, image) {
        super(name, image);

        this.superPowers = [];
    }

    registerSuperPower(superPower) {
        if (!superPower instanceof SuperPower) {
            throw new Error(ERRORS.INVALID_POWER_TYPE);
        }
        this.superPowers.push(superPower);
    }

    getSuperPowers() {
        return this.superPowers;
    }

    activate(powerId) {
        this.superPowers.find(power => power.id === Number(powerId)).apply(this);
    }
    
}