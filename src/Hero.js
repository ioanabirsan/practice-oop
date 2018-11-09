class Hero {
    constructor(name, image) {
        this.name = name;
        this.life = 100;
        this.image = image;

        this.weapons = [];
    }

    getWeapons() {
        return this.weapons;
    }

    getWeapon(weaponId) {
        return this.weapons.find(weapon => weapon.getId() === Number(weaponId));
    }

    getStats() {
        return {
            name: this.name,
            life: this.life,
            image: this.image
        }
    }

    registerWeapon(weapon) {
        if (weapon instanceof Weapon) {
            this.weapons.push(weapon);
        }
    }

    wasAttacked(weapon) {
        this.life -= weapon.getDamage();
    }

}