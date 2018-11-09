class Weapon {
    constructor(name, damage = 10) {
        this.name = name;
        this.damage = damage;
        this.id = Date.now();
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getDamage() {
        return this.damage;
    }
}