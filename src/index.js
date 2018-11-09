let game = new Game();


let hammer = new Weapon("hammer", 15);
let knife = new Weapon("knife", 20);
let pistol = new Weapon("pistol", 30);
let bazooka = new Weapon("bazooka", 50);

let p1 = new Hero("Ursa", "https://firstblood.io/pages/wp-content/uploads/2018/10/ursa-hero-guide-970x570.jpg");
p1.registerWeapon(hammer);
p1.registerWeapon(knife);

let p2 = new Hero("Sniper", "https://firstblood.io/pages/wp-content/uploads/2018/10/ursa-hero-guide-970x570.jpg");
p2.registerWeapon(pistol);
p2.registerWeapon(bazooka);

game.registerHero(p1);
// game.registerHero(p2);





// SuperPowers
let zenPower = new SuperPower("Zen", (superHero) => {
    superHero.life = 100;
});

let olympysBlade = new SuperPower("Olympus Blade", (superHero) => {
    let olympusBlade = new Weapon("Olympus Blade", 1000);

    superHero.registerWeapon(olympusBlade);
});

// SuperHero
let shadowFiend = new SuperHero("Shadow Fiend", "https://d1u5p3l4wpay3k.cloudfront.net/dota2_gamepedia/2/25/Lore_Shadow_Fiend.png?version=ad052d5d8d33aefce74f7f23faee7de7");
shadowFiend.registerSuperPower(olympysBlade);
shadowFiend.registerWeapon(knife);

game.registerHero(shadowFiend);