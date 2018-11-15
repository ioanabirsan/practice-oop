let scepter = new Weapon("scepter", 1, 5);
let knife = new Weapon("knife", 2, 1);
let sword = new Weapon("sword", 3, 7);
let falchion = new Weapon("falchion", 4, 9);

let weapons = [scepter, knife, sword, falchion];
let kameha = new SuperPower("kameha", 1);
let superPowers = [kameha];

let cell = new Hero("Hero", 100, "img/cell.jpg", weapons);
let goku = new SuperHero("SuperHero", 100, "img/goku.jpg", weapons, superPowers);

let game = new Game();
game.registerHero(cell);
game.registerHero(goku);
