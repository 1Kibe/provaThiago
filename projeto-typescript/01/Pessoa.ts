import { Util } from "./util.ts"

export class Pessoa{
    private  _nome: string = ''
    private _cpf: string = ''

    public get nome(){
        return this._nome
    }

    public get cpf(){
        return this._cpf
    }

    constructor(){
        this._nome = "_"
        this._cpf = Util.randomizarCpf()
    }

    status(): string {
        return (
            "\nNOME: " + this._nome +
            "\nCPF: " + this._cpf 
        )
    }
}