class SuperPower {
    constructor(name, id){
        this.name = name;
        this.id = id;
    }

    getId(){
        return this.id;
    }

    getName(){
        return this.name;
    }

    apply(SuperHero){
        SuperHero.registerWeapon(new Weapon("super weapon", 5, 10));
    }
}
