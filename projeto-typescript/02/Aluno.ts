export class Aluno {
  nome: string;
  notas: number[];

  constructor(nome: string) {
    this.nome = nome;
    this.notas = [];
  }

  adicionarNota(nota: number) {
    if (nota < 0 || nota > 10) {
      throw new Error("Nota inválida. Digite um valor entre 0 e 10.");
    }
    this.notas.push(nota);
  }

  calcularMedia(): number {
    if (this.notas.length === 0) return 0;
    const soma = this.notas.reduce((a, b) => a + b, 0);
    return soma / this.notas.length;
  }

  foiAprovado(): boolean {
    return this.calcularMedia() >= 6;
  }
}
