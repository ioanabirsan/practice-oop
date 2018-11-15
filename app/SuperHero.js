class SuperHero extends Hero {
    constructor(name, life, image, weapons, superPowers){
        super(name, life, image, weapons);
        this.superPowers = Array.from(superPowers);
    }

    getSuperPowers(){
        return this.superPowers;
    }

    registerSuperPower(SuperPower){
        this.superPowers.push(SuperPower);
    }

    activate(superPowerId){
        let superPower = this.getSuperPowers().find(
            function(superPower){
                return superPower.getId() == superPowerId;
            });

        if(superPower !== undefined){
            superPower.apply(this);
        }
    }
}