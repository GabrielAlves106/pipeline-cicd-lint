# Pipeline CI/CD Lint

Um projeto JavaScript configurado com ferramentas modernas de linting, testes e CI/CD.

## 📋 Descrição

**Pipeline CI/CD Lint** é um repositório que demonstra a configuração de uma pipeline CI/CD completa com:
- ✅ Linting automático com ESLint
- ✅ Testes automatizados com Jest
- ✅ Cobertura de código (mínimo 80%)
- ✅ Verificações de qualidade de código

## 🚀 Tecnologias

- **Node.js** - Runtime JavaScript
- **ESLint** - Linter para JavaScript
- **Jest** - Framework de testes
- **GitHub Actions** - Automação CI/CD

## 📦 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/GabrielAlves106/pipeline-cicd-lint.git
cd pipeline-cicd-lint
```

2. Instale as dependências:
```bash
npm install
```

## 🛠️ Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm test` | Executa os testes com Jest |
| `npm run lint` | Executa o linter ESLint |
| `npm run coverage` | Gera relatório de cobertura de testes |

## ✨ Funcionalidades

### Linting
O projeto utiliza ESLint com configuração moderna para garantir qualidade de código:
```bash
npm run lint
```

### Testes
Testes automatizados com Jest com cobertura mínima de 80%:
```bash
npm test
npm run coverage
```

## 📂 Estrutura do Projeto

```
pipeline-cicd-lint/
├── src/              # Código-fonte da aplicação
├── tests/            # Testes unitários
├── .github/          # Configurações GitHub (Actions, etc)
├── index.js          # Arquivo principal
├── eslint.config.mjs # Configuração ESLint
├── package.json      # Dependências e scripts
└── README.md         # Este arquivo
```

## 🔄 Pipeline CI/CD

Este projeto está configurado para executar automaticamente:
1. **Linting** - Valida o código com ESLint
2. **Testes** - Executa os testes com Jest
3. **Cobertura** - Verifica se a cobertura atinge 80%

## 💡 Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/minhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/minhaFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está licenciado sob a Licença ISC - veja o arquivo [package.json](package.json) para mais detalhes.

## 👤 Autor

**Gabriel Alves**

## 🤝 Suporte

Se tiver dúvidas ou encontrar problemas, abra uma [issue](https://github.com/GabrielAlves106/pipeline-cicd-lint/issues).