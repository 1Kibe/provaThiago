import { Carro } from "./Carro.ts";
import { Pessoa } from "./Pessoa.ts";

export class Util {
  public static randomizar(inicio: number, fim: number) {
    return inicio + Math.random() * (fim - inicio);
  }

  public static randomizarString(lista: string[]): string {
    const index = Math.floor(Math.random() * lista.length);
    return lista[index] ?? "";
  }

  public static randomizarPlaca(): string {
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeros = "0123456789";

    let placa = "";

    // 3 letra
    for (let i = 0; i < 3; i++) {
      placa += letras.charAt(Math.floor(Math.random() * letras.length));
    }

    // 1 numero
    placa += numeros.charAt(Math.floor(Math.random() * numeros.length));

    // 1 letra
    placa += letras.charAt(Math.floor(Math.random() * letras.length));

    // 2 numero
    for (let i = 0; i < 2; i++) {
      placa += numeros.charAt(Math.floor(Math.random() * numeros.length));
    }

    //aaa1a11
    return placa;
  }

  public static randomizarCpf(): string {
    let numeros: number[] = [];

    for (let i = 0; i < 11; i++) {
      numeros.push(Math.floor(Math.random() * 10));
    }

    // monta no formato XXX.XXX.XXX-YY
    return (
      numeros.slice(0, 3).join("") +
      "." +
      numeros.slice(3, 6).join("") +
      "." +
      numeros.slice(6, 9).join("") +
      "-" +
      numeros.slice(9, 11).join("")
    );
  }

  public static geradorDeEntidades(quantidade: number): Carro[] {
    const listaCarros: Carro[] = [];

    for (let i = 0; i < quantidade; i++) {
      const carro = new Carro();
      const pessoa = new Pessoa();
      carro.proprietario = pessoa;

      listaCarros.push(carro);
    }

    return listaCarros;
  }

  public static gerarVelocidadeCarro(velocidadeMaxima: number): number {

    const velocidadeMinima = velocidadeMaxima / 2; 
    const max = velocidadeMaxima * 1.5;

    return Math.floor(Math.random() * (max - velocidadeMinima) + velocidadeMinima);
  }
}
