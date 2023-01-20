import "./style.css";
import { charmander } from "./bases/03-classes";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Hola ${charmander.getMoves()}</h1>
  </div>
`;
