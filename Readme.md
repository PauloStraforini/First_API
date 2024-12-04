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

3. Configure o banco de dados criando um arquivo .env na raiz do projeto:

DATABASE_URL="mongodb+srv://<usuario>:<senha>@cluster0.mongodb.net/<nome-do-banco>?retryWrites=true&w=majority"


4. Gere o cliente Prisma e configure o banco:

npx prisma generate
npx prisma db push


5. Inicie a aplicação:

Modo de Desenvolvimento:

npm run dev

Modo de Produção:

npm start




A aplicação estará disponível em: http://localhost:3000

Endpoints

POST /users

Descrição: Adiciona um novo usuário ao banco de dados.
Exemplo de Requisição:

curl -X POST http://localhost:3000/users \
-H "Content-Type: application/json" \
-d '{"name": "John Doe", "email": "john@example.com", "age": 30}'

GET /users

Descrição: Retorna a lista de usuários cadastrados.
Exemplo de Requisição:

curl http://localhost:3000/users
