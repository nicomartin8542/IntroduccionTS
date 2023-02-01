const MyDecorator = () => {
  return (target: Function) => {
    return NewPokemon;
  };
};

class NewPokemon {
  constructor(public readonly id: number, public name: string) {}

  scream() {
    console.log(`otra!!`);
  }

  speake() {
    console.log(`otra !!`);
  }
}

@MyDecorator()
export class Pokemon {
  constructor(public readonly id: number, public name: string) {}

  scream() {
    console.log(`${this.name.toLocaleLowerCase()} !!`);
  }

  speake() {
    console.log(`${this.name.toLocaleLowerCase()} !!`);
  }
}

export const charmander = new Pokemon(1, "charmander");
