import {
  PokeapiAdapter,
  HttpAdapter,
  PokeapiFetchAdapter,
} from "../api/pokeApi.adapter";
import {
  Move,
  PokeapiResponse,
} from "../interfaces/Pokeapi-response.interface";

export class Pokemon {
  get imageUrl(): string {
    return `https://pokemon.com/${this.id}.jpg`;
  }

  constructor(
    public readonly id: number,
    public name: string,
    private readonly http: HttpAdapter //Todo: inyectar dependencias //private readonly http: PokeapiAdapter -> es de tipo de una clase
  ) {}

  scream() {
    console.log(`${this.name.toUpperCase()}!!!`);
  }

  speak() {
    console.log(`${this.name}, ${this.name}`);
  }

  async getMoves(): Promise<Move[]> {
    const data = await this.http.get<PokeapiResponse>(
      "https://pokeapi.co/api/v2/pokemon/4"
    );
    console.log(data.moves);

    return data.moves;
  }
}

const pokeFetchApi = new PokeapiFetchAdapter();
const pokeApi = new PokeapiAdapter();
export const charmander = new Pokemon(4, "Charmander", pokeApi);

charmander.getMoves();
