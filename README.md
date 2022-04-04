
# **API HelpOngs**

#### API desenhada para alimentar o sistema HelpOngs, aqui será detalhado o procedimento para inicialização e funcionamento da API.

#### Requisitos:

- **MySQL server funcional e rodando.**
- **GUI para gestão do database, como por exemplo MySQL Workbench.**
#### **Obs: Os requisitos podem sofrer acréscimo durante o tempo de desenvolvimento.**


## **Comandos para iniciar a API:**

### 1. Primeiro deve-se mudar para a branch de produção.

#### **`$ git switch production`**

### 2. Em seguida baixar as dependências do ambiente.

#### **`$ yarn`**

### 3. Em seguida migrar o banco de dados para a máquina local.

#### **`$ yarn migrate`**

#### **`$ yarn clean-migrate --y`**

### 4. Em seguida iniciar o servidor da API.

#### **`$ yarn dev`**

### Pronto! A API já está funcional e apta a receber requisições.

# Rotas:

## Raiz: `http://localhost:3131`

### Endpoints p/ gestão de ONGs:
- `/ong/pre-register` | **POST** | Rota para pré-registro de Ongs | *Params: cnpj, nome, email, senha*
- `/ong/login` | **GET** | Rota para verificar Login de Ongs | *Params: email, senha*
- `/ong/login/:id?`
- `/ong/login/all`

### Endpoints p/ gestão de Usuário:
- `/user/pre-register`| **POST** | Rota para pré-registro de Usuários | *Params: nome, email, senha*
- `/user/login` | **GET** | Rota para verificar Login de Usuários | *Params: email, senha*
- `/user/login/:id?`

#### **Obs: As rotas estão sujeitas a alteração durante o projeto, portanto fique atento.**
