export const pokemonIds = [1, 20, 30, 50];

//Interface
export interface Pokemon {
  id: number;
  name: string;
  age?: number;
}

//Con las interface definmo una plantilla para un objeto en js, oobligando que cuando se cree uno cumpla con los requisitos
export const bolbasaur: Pokemon = {
  id: 1,
  name: "Pokemon",
};

export const pokemons: Pokemon[] = [];

pokemons.push(bolbasaur);

export const arreglo: [] = [];
