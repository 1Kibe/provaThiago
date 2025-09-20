# Projeto TypeScript

Este repositório contém exercícios desenvolvidos em **TypeScript** com foco em **POO (Programação Orientada a Objetos)** e interação com o **console**.  
Cada pasta (`01`, `02`, …) contém um exercício separado.

## 📂 Estrutura do projeto
.
├── 01/ # Exercício 1
├── 02/ # Exercício 2 (Aluno e notas)
├── package.json
├── tsconfig.json
└── README.md # Este arquivo (explicação geral)

## ▶️ Como rodar os exercícios

Este projeto usa o **ts-node** para executar arquivos `.ts` diretamente, sem precisar compilar manualmente.

### 1. Instalar dependências
Se ainda não instalou:
```bash
npm install
2. Rodar um exercício
Use o seguinte comando no terminal:

node --loader ts-node/esm <pasta>/<arquivo>

Exemplo para rodar o exercício da pasta 02:
node --loader ts-node/esm 02/main.ts
