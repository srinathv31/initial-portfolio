// Creating a class Pokemon to assign it attributes
class Pokemon{
    constructor(name, health, damage, stamina, type) {
        this.name = name;
        this.health = health;
        this.damage = damage;
        this.stamina = stamina;
        this.type = type;
    }

}

// Creating a list of pokemon instances to randomly select one
const pokemonList = [new Pokemon("Charizard", 100, 50, 10, "fire"), 
                    new Pokemon("Bulbasaur", 120, 30, 15, "earth"),
                    new Pokemon("Squirtle", 80, 70, 7, "water")];
