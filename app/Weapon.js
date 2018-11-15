class Weapon {
    constructor(name, id, damage){
        this.name = name;
        this.id = id;
        this.damage = damage;
    }

    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getDamage(){
        return this.damage;
    }
}