import { Pessoa } from "./Pessoa.ts";
import { Util } from "./util.ts";

export class Carro {
  private _placa: string = "";
  private _cor: string = "";
  private _quilometragem: number = 0;
  private _marca: string = "";
  private _modelo: string = "";
  private _proprietario?: Pessoa;

  public get placa() {
    return this._placa;
  }

  public get cor() {
    return this._cor;
  }

  public get quilometragem() {
    return this._quilometragem;
  }

  public get marca() {
    return this._marca;
  }

  public get modelo() {
    return this._modelo;
  }

  public set proprietario(proprietario:Pessoa){
    this._proprietario = proprietario
  }

  private cores: string[] = ["AZUL", "VERMELHO", "CINZA", "PRETO", "BRANCO"];
  private marcas: string[] = [
    "Fiat",
    "Chevrolet",
    "Toyota",
    "Volkswagen",
    "Honda",
  ];
  private modelos: string[] = ["Sedan", "SUV", "Hatch", "Pickup", "Coupé"];

  constructor() {
    this._placa = Util.randomizarPlaca();
    this._cor = Util.randomizarString(this.cores);
    this._marca = Util.randomizarString(this.marcas);
    this._modelo = Util.randomizarString(this.modelos);
    this._quilometragem = Util.randomizar(0, 600_000);
  }


  status(): string {
        return (
            "\n"+
            "\nPLACA: " + this._placa +
            "\nMARCA: " + this._marca +
            "\nCOR: " + this._cor +
            "\nMODELO: " + this._modelo +
            "\nQUILOMETRAGEM: " + this._quilometragem.toFixed(3) +
            "\nPROPRIETARIO: " + this._proprietario?.status()
        );
    }

     statusMinimo(): string {
        return (
            "\n"+
            "\nPLACA: " + this._placa +
            "\nMARCA: " + this._marca +
            "\nCOR: " + this._cor +
            "\nMODELO: " + this._modelo 
        );
    }
}
