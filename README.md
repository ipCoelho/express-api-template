
# API HelpOngs

API desenhada para alimentar o sistema HelpOngs, aqui será detalhado o procedimento para inicialização e funcionamento da API.
#
# Comandos para iniciar a API:

## 1. Primeiro deve-se mudar para a branch de produção.

### $ **git switch production**

## 2. Em seguida baixar as dependências do ambiente.

### $ **yarn**

## 3. Em seguida migrar o banco de dados para a máquina local.

### $ **yarn migrate**

### $ **yarn clean-migrate --y**

## 4. Em seguida iniciar o servidor da API.

### $ **yarn dev**

## Pronto! A API já está funcional e apta a receber requisições.

#
# Rotas:
## Raiz
### http://localhost:3131/
