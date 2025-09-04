import { Radar } from "./Radar.ts";
import { Simulacao } from "./Simulacao.ts";
import { TipoVia } from "./tipoVia.ts";


class Main {
  public static run() {
    const radar = new Radar("Radar Central", "Av. Paulista", TipoVia.RODOVIA);
    const simulacao = new Simulacao(radar);

    simulacao.Menu(); 
  }
}

Main.run(); //node --loader ts-node/esm 01/main.ts
