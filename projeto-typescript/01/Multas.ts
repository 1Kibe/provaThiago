import { Util } from "./util.ts";

export class Multas {
    private _descrisao:string = ''
    private _valor: number = 0

    public get descrisao() {
        return this._descrisao
    }
    public get valor(){
        return this._valor
    }

    constructor(velocidade: number, velocidadeMaxima: number) {
        const velocidadeMinima = velocidadeMaxima / 2;

        if (velocidade > velocidadeMaxima) {
            this._descrisao = "EXCESSO DE VELOCIDADE";
            this._valor = 200
        } else if (velocidade < velocidadeMinima) {
            this._descrisao = "VELOCIDADE MINIMA DE SEGURANCA";
            this._valor = 200
        } else {
            this._descrisao = "SEM MULTA";
            this._valor = 0;
        }
    }

    status(): string {
        return (
            "\nDESCRISAO: " + this._descrisao +
            "\nVALOR: " + this._valor.toFixed(2) 
        );
    }
}