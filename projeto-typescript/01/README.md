## 📝 Explicação dos arquivos

### `Carro.ts`
- Contém a **classe `Carro`**.
- Representa um veículo com placa, cor, marca, modelo, quilometragem e proprietário.
- Métodos principais:
  - `status()` → mostra detalhes completos do carro.
  - `statusMinimo()` → mostra informações resumidas do carro.

---

### `Pessoa.ts`
- Contém a **classe `Pessoa`**.
- Representa o proprietário do carro, com nome e CPF gerado aleatoriamente.
- Método principal:
  - `status()` → exibe nome e CPF.

---

### `Radar.ts`
- Contém a **classe `Radar`**.
- Simula um radar de trânsito, registrando velocidades e multas.
- Principais métodos:
  - `registrarVelocidade(carro: Carro)` → verifica a velocidade do carro e registra multa se necessário.
  - `status()` → mostra informações do radar e lista de carros multados.

---

### `Multas.ts`
- Contém a **classe `Multas`**.
- Calcula e armazena informações sobre multas (descrição e valor) com base na velocidade.
- Método principal:
  - `status()` → exibe descrição e valor da multa.

---

### `Simulacao.ts`
- Contém a **classe `Simulacao`**.
- Gerencia o menu interativo da simulação.
- Principais métodos:
  - `Menu()` → exibe opções para iniciar tráfego, ver status do radar, ver multas e sair.
  - `processarCarros()` → simula passagem de carros pelo radar em loop.

---

### `tipoVia.ts`
- Define o **enum `TipoVia`**.
- Tipos de via: Rodovia, Urbana, Rural.

---

### `util.ts`
- Contém a **classe `Util`**.
- Funções utilitárias para geração aleatória de placas, CPFs, entidades e velocidades.

---

### `main.ts`
- Arquivo principal do programa.
- Faz a **orquestração**:
  1. Cria um radar.
  2. Inicia o menu interativo da simulação.

---

## ▶️ Exemplo de execução

```bash
node --loader ts-node/esm 01/main.ts
```

**Menu interativo:**
- `1 - Trafego`: Inicia simulação de carros passando pelo radar.
- `2 - Ver status do radar`: Mostra informações do radar e multas registradas.
- `3 - Ver multas`: Lista todos os carros multados e detalhes das multas.
- `0 - Sair`: Encerra o programa.
