import * as readline from "readline";
import { Aluno } from "./Aluno.ts";

export class AlunoUtil {
  private rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  private perguntar(pergunta: string): Promise<string> {
    return new Promise((resolve) => this.rl.question(pergunta, resolve));
  }

  async criarAluno(): Promise<Aluno> {
    const nome = await this.perguntar("Digite o nome do aluno: ");
    const aluno = new Aluno(nome);

    const respostaNotas = await this.perguntar("Digite as 4 notas separadas por espaço (ex: 7 8 6 9): ");
    const notas = respostaNotas.split(" ").map(Number);

    notas.forEach((n) => aluno.adicionarNota(n));

    return aluno;
  }

  mostrarResultado(aluno: Aluno) {
    const media = aluno.calcularMedia();
    console.log(`\nAluno: ${aluno.nome}`);
    console.log(`📊 Média final: ${media.toFixed(2)}`);
    console.log(aluno.foiAprovado() ? "✅ Aprovado!" : "❌ Reprovado!");
  }

  fechar() {
    this.rl.close();
  }
}
