# practice-oop
Put your OOP skills to the test by building a player-v-player game!

## Phase #1: Heroes & Weapons

### Hero class

* name
* life
* image
* weapons: Array<Weapon>

* getWeapons: fn()
* getWeapon: fn(weaponId)
* getStats: fn() - return Object({name, life, image})
* registerWeapon: fn(Weapon)
* wasAttacked: fn(Weapon)

### Weapon class

* name
* id
* damage
* getName, getId, getDamage: fn()

<br/>
<br/>

## Phase 2: SuperHeroes & SuperPowers

### SuperHero class - inherits from Hero

* superPowers: Array<SuperPower>
* getSuperPowers: fn()
* registerSuperPower: fn(SuperPower)
* activate: fn(superPowerId)

### SuperPower class

* name
* id
* getId, getName: fn()
* apply: fn(SuperHero)