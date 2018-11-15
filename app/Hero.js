class Hero {
    constructor(name, life, image, weapons) {
        this.name = name;
        this.life = life;
        this.weapons = Array.from(weapons);
        this.image = image;
    }

    getWeapons() {
        return this.weapons;
    }

    getWeapon(weaponId) {
        return this.weapons.find(function(weapon){
            return weapon.getId() == weaponId;
        });
    }

    getStats() {
        return {"name":this.name, "life":this.life, "image":this.image};
    }

    registerWeapon(Weapon){
        this.weapons.push(Weapon);
    }

    wasAttacked(Weapon){
        this.life -= Weapon.getDamage();
    }
}