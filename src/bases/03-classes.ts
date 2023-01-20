import axios from "axios";
//Forma tradicional
// export class Pokemon {
//   public id: number;
//   public name: string;

//   constructor(id: number, name: string) {
//     this.id = id;
//     this.name = name;
//     console.log("Constructor called");
//   }
// }

//Forma corta de hacer una clase
//El readonly hace que no pueda cambiar el dato cuando quiera instaciaar una clase
export class Pokemon {
  //Variables
  //   public id: number;
  //   public name: string;

  //Para valores estaticos se puede usar el getterrs
  get imageUrl(): string {
    return `https://pokemon.com/${this.id}.jpg`;
  }

  //Constructor para inicializar la clase
  constructor(public readonly id: number, public name: string) {}

  //Metodos - pueden ser publicos o privados - Si no especifico si es publica o privada por defecto el metodo es publico
  public scream() {
    console.log(`${this.name.toLocaleLowerCase()}!!!`);
    this.speake();
  }
  private speake() {
    console.log(`${this.name} , ${this.name}`);
  }

  async getMoves() {
    //const moves = 10
    const {
      data: { moves },
    } = await axios.get(`https://pokeapi.co/api/v2/pokemon/4`);

    console.log(moves);

    return moves;
  }
}

export const charmander = new Pokemon(1, "char");
