import axios from "axios";

//De esta forma podemos hacer que la instancia de una clase pueda usar cualquier objeto que sea de tipo de la interface
// por ejemplo en lugar de hacer que sea de tipo PokeapiAdapter, lo ponemos que sea de tipo de la HttpAdapter
export interface HttpAdapter {
  get<T>(url: string): Promise<T>;
}

//Fetch
export class PokeapiFetchAdapter implements HttpAdapter {
  async get<T>(url: string): Promise<T> {
    const resp = await fetch(url);
    const data: T = await resp.json();
    return data;
  }
}

//Axios
export class PokeapiAdapter implements HttpAdapter {
  private readonly axios = axios;

  async get<T>(url: string): Promise<T> {
    const { data } = await this.axios.get<T>(url);
    return data;
  }

  async post(url: string, data: any) {
    return;
  }

  async patch(url: string, data: any) {
    return;
  }

  async delete(url: string) {
    return;
  }
}
