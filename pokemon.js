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
const pokemonList = [new Pokemon("Charizard", 100, 20, 10, "fire"), 
                    new Pokemon("Bulbasaur", 120, 50, 15, "earth"),
                    new Pokemon("Squirtle", 80, 150, 7, "water")];
