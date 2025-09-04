import readline from "readline";
import { Radar } from "./Radar.ts";
import { Util } from "./util.ts";

export class Simulacao {
  private radar: Radar;
  private rodandoSimulacao: boolean = false;

  constructor(radar: Radar) {
    this.radar = radar;
  }

  // simulação em loop até pararSimulacao ser chamado
  private async processarCarros(delay: number = 1000) {
    this.rodandoSimulacao = true;
    while (this.rodandoSimulacao) {
      const [carro] = Util.geradorDeEntidades(1);

      if (carro) {
        console.log(carro.status());
        this.radar.registrarVelocidade(carro);
      }

      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }

  public pararSimulacao() {
    this.rodandoSimulacao = false;
  }

  // menu interativo
  public async Menu() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    let rodandoMenu = true;

    while (rodandoMenu) {
      await new Promise<void>((resolve) => {
        rl.question(
          "\n=== MENU ===\n1 - Trafego \n2 - Ver status do radar\n3 - Ver multas\n0 - Sair\nEscolha: ",
          async (escolha: string) => {
            switch (escolha) {
              case "1":
                // roda a simulação em paralelo
                this.processarCarros(1500);

                // espera ENTER para parar e voltar ao menu
                await new Promise<void>((res) => {
                  rl.question("", () => {
                    this.pararSimulacao();
                    res();
                  });
                });
                break;

              case "2":
                console.log(this.radar.status());
                break;

              case "3":
                
                if (this.radar.carrosMultados.length > 0) {
                  console.log("\n=== CARROS MULTADOS ===");
                  this.radar.carrosMultados.forEach((carro, index) => {
                    console.log(`\n#${index + 1}` + carro.status());
                  });
                } else {
                  console.log("\n Nenhum carro multado até agora.");
                }
                console.log(
                  `\n Total de multas: ${this.radar.multasRegistradas}`
                );
                break;

              case "0":
                this.pararSimulacao();
                rodandoMenu = false;
                console.log("Saindo...");
                rl.close();
                break;

              default:
                console.log("Opção inválida!");
                break;
            }
            resolve();
          }
        );
      });
    }
  }
}
