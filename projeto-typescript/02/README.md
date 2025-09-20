## 📝 Explicação dos arquivos

### `Aluno.ts`
- Contém a **classe `Aluno`**.
- Armazena o nome e as notas do aluno.
- Métodos principais:
  - `adicionarNota(nota: number)` → adiciona uma nota válida (0 a 10).
  - `calcularMedia(): number` → calcula a média das notas.
  - `foiAprovado(): boolean` → retorna `true` se a média for **≥ 6**, caso contrário `false`.

---

### `AlunoUtil.ts`
- Contém a **classe `AlunoUtil`**.
- Responsável pela **interação com o console**.
- Usa o módulo `readline` para:
  - Perguntar o nome do aluno.
  - Perguntar as 4 notas do aluno.
  - Mostrar o resultado (média e situação).
- Principais métodos:
  - `criarAluno(): Promise<Aluno>` → cria um objeto `Aluno` a partir das respostas do usuário.
  - `mostrarResultado(aluno: Aluno)` → mostra no console a média e se foi aprovado ou reprovado.
  - `fechar()` → fecha a interface de leitura (`readline`).

---

### `main.ts`
- Arquivo principal do programa.
- Faz a **orquestração**:
  1. Cria uma instância de `AlunoUtil`.
  2. Usa `AlunoUtil` para cadastrar um aluno.
  3. Exibe o resultado.
  4. Fecha o `readline`.

O `main.ts` fica **limpo**, apenas chamando os métodos prontos.

📊 Exemplo de execução
bash
Copiar código
Digite o nome do aluno: João
Digite as 4 notas separadas por espaço (ex: 7 8 6 9): 8 7 5 9

Aluno: João
📊 Média final: 7.25
✅ Aprovado!