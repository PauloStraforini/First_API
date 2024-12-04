# User Management API  

Esta API permite adicionar e listar usuários utilizando os métodos HTTP `GET` e `POST`. O banco de dados utilizado é o **MongoDB**, gerenciado com o **Prisma ORM**.  

## Tecnologias Utilizadas  
- **Node.js**  
- **Express**  
- **Prisma ORM**  
- **MongoDB**  

## Funcionalidades  
1. **Adicionar Usuários**  
   - Endpoint: `POST /users`  
   - Corpo da Requisição (JSON):  
     ```json
     {
       "name": "Nome do Usuário",
       "email": "email@example.com",
       "age": 25
     }
     ```  
   - Retorna: Confirmação do registro ou mensagem de erro.  

2. **Listar Usuários**  
   - Endpoint: `GET /users`  
   - Retorna: Lista de todos os usuários no banco de dados.  

## Instalação e Configuração  

1. Clone este repositório e acesse a pasta do projeto:  
   ```bash
   git clone https://github.com/seu-usuario/user-management-api.git
   cd user-management-api

2. Instale as dependências:

npm install