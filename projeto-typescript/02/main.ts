import { AlunoUtil } from "./AlunoUtil.ts";

async function main() {
  const util = new AlunoUtil();

  try {
    const aluno = await util.criarAluno();
    util.mostrarResultado(aluno);
  } catch (e: any) {
    console.log("⚠️ Erro: " + e.message);
  } finally {
    util.fechar();
  }
}

main();
