import { TipoLector } from "./TipoLector";

export interface Estacion {
  id: number;
  nombre: string;
  direccion: string
  img: string
  tipoLector: TipoLector;
}
