# Sistema de Login

Um sistema completo de autenticação desenvolvido com React e Node.js, oferecendo funcionalidades de login e cadastro de usuários com validação de dados.

## Estrutura do Projeto

```
Sistema-de-login/
├── public/                # Arquivos públicos do React
├── src/                   # Código fonte da aplicação
│   ├── Components/        # Componentes reutilizáveis
│   │   ├── Botao/         # Componente de botão customizado
│   │   └── Input/         # Componente de input customizado
│   ├── Pages/             # Páginas da aplicação
│   │   ├── Cadastro/      # Página de cadastro de usuários
│   │   ├── Login/         # Página de login
│   │   └── styles/        # Estilos globais
│   ├── Routes/            # Configuração de rotas
│   ├── Services/          # Serviços de comunicação com API
│   ├── Utils/             # Utilitários (validadores)
│   └── index.js           # Ponto de entrada da aplicação React
├── .env                   # Variáveis de ambiente
├── package.json           # Dependências e scripts
└── server.js              # Servidor backend (API)
```

## Descrição dos Arquivos

### Arquivos Principais

- **server.js**: Servidor Express que fornece as APIs de login e cadastro. Utiliza um array de usuários como banco de dados em memória para simplificar o exemplo.

- **src/index.js**: Ponto de entrada da aplicação React, renderiza o componente principal e aplica os estilos globais.

- **.env**: Contém a variável de ambiente `REACT_APP_API_LOGIN` que define a URL base da API.

### Componentes

- **src/Components/Input/index.js**: Componente reutilizável para campos de entrada, com estilização personalizada.

- **src/Components/Botao/index.js**: Componente reutilizável para botões, com estilização personalizada.

### Páginas

- **src/Pages/Login/index.js**: Página de login com formulário, validação e integração com o serviço de autenticação.

- **src/Pages/Cadastro/index.js**: Página de cadastro com formulário, validação de campos e integração com o serviço de usuários.

- **src/Pages/styles/global.js**: Estilos globais da aplicação usando styled-components.

### Rotas

- **src/Routes/routes.js**: Configuração das rotas da aplicação usando React Router.

- **src/Routes/ProtectedRoutes.js**: Componente para proteger rotas que exigem autenticação.

### Serviços

- **src/Services/UserServices.js**: Serviço que gerencia a comunicação com a API para login, cadastro e autenticação de usuários.

### Utilitários

- **src/Utils/validadores.js**: Funções para validação de campos de formulário (email, senha, nome, telefone).

## Como Utilizar o Projeto

### Pré-requisitos

- Node.js instalado
- NPM ou Yarn instalado

### Configuração

1. Clone o repositório
2. Instale as dependências:
   ```
   npm install
   ```
3. Configure o arquivo `.env` na raiz do projeto:
   ```
   REACT_APP_API_LOGIN=http://localhost:3333
   ```

### Executando o Projeto

1. Inicie o servidor backend:
   ```
   node server.js
   ```
   O servidor será iniciado na porta 3333.

2. Em outro terminal, inicie a aplicação React:
   ```
   npm start
   ```
   A aplicação será iniciada na porta 3000.

3. Acesse a aplicação em seu navegador: http://localhost:3000

### Utilizando a Aplicação

#### Login

- Acesse a página inicial (http://localhost:3000)
- Insira um email e senha válidos
  - Usuário padrão: admin@example.com
  - Senha padrão: 123456
- Clique no botão "Entrar"

#### Cadastro

- Na página de login, clique em "Cadastrar"
- Preencha todos os campos do formulário:
  - Nome (mínimo 3 caracteres)
  - Telefone (mínimo 8 dígitos)
  - Email (deve conter @ e .)
  - Senha (mínimo 7 caracteres)
  - Confirmar senha (deve ser igual à senha)
- Clique no botão "Efetuar Cadastro!"

## Validações

O sistema possui as seguintes validações:

- **Email**: Deve conter @ e .
- **Senha**: Deve ter mais de 6 caracteres
- **Nome**: Deve ter mais de 2 caracteres
- **Telefone**: Deve ter pelo menos 8 dígitos
- **Confirmar Senha**: Deve ser igual à senha informada

## Autenticação

O sistema utiliza um token simples armazenado no localStorage para manter o usuário autenticado. As rotas protegidas verificam a existência deste token antes de permitir o acesso.
