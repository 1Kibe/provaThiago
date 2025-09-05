import { Carro } from "./Carro.ts";
import { Multas } from "./Multas.ts";
import { TipoVia } from "./tipoVia.ts";
import { Util } from "./util.ts";

export class Radar {
  private _nome: string;
  private _localizacao: string;
  private _velocidadeMaxima: number;
  private _multasRegistradas: number = 0;
  private _carrosMultados: Carro[] = [];
  private _tipoVia: string;


  //radar.carrosMultados.forEach(carro => console.log(carro));
  public get carrosMultados(): Carro[] {
    return this._carrosMultados;
  }
  
  public get multasRegistradas(): number {
    return this._multasRegistradas;
  }

  constructor(nome: string, localizacao: string, tipoVia: TipoVia) {
    this._nome = nome;
    this._localizacao = localizacao;
    this._tipoVia = tipoVia;

    // Define velocidade máxima de acordo com o tipo de via
    switch (tipoVia) {
      case TipoVia.RODOVIA:
        this._velocidadeMaxima = 110;
        break;
      case TipoVia.URBANA:
        this._velocidadeMaxima = 60;
        break;
      case TipoVia.RURAL:
        this._velocidadeMaxima = 80;
        break;
    }
  }

  //carros.forEach(carro => radar.registrarVelocidade(carro));
  public registrarVelocidade(carro: Carro) {
    const velocidade = Util.gerarVelocidadeCarro(this._velocidadeMaxima);
    const velocidadeMinima = this._velocidadeMaxima / 2;
    const multa = new Multas(velocidade, this._velocidadeMaxima);

    let mensagem =
    "==============================================" +
      "\n Multa registrada: " +
      "\nPLACA: " + carro.placa +
      " - Velocidade: " + velocidade +" km/h" +
      "\nMULTA: " + 
      multa.status() +
    "\n==============================================";

    (carro as any).mensagemMulta = mensagem;

    if (velocidade > this._velocidadeMaxima || velocidade < velocidadeMinima) {
      this._multasRegistradas++;
      console.log(mensagem);
      this._carrosMultados.push(carro);//adiciona o carro multado na lista
    } else {
      console.log(
        "==============================================" +
        "\n  Dentro do limite de velocidade: " + carro.placa + " - Velocidade: " + velocidade + " km/h" +
        "\n=============================================="
      );
    }
  } 

  public status(): string {
    return (
      "\nNOME: " + this._nome +
      "\nLOCALIZAÇÃO: " + this._localizacao +
      "\nTIPO DE VIA: " + this._tipoVia +
      "\nVELOCIDADE MÁXIMA: " + this._velocidadeMaxima + " km/h" +
      "\nVELOCIDADE MINIMA SEGURA: " + (this._velocidadeMaxima / 2) + " km/h" +
      "\nMULTAS REGISTRADAS: " + this._multasRegistradas +
      "\nCARROS MULTADOS: [" + this._carrosMultados.map(carro => carro.placa).join(", ") + "]" + " }"
    );
  }


}
