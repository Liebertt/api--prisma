# API de Produtos e Categorias

Uma API RESTful desenvolvida com Node.js, Express e Prisma para gerenciar produtos e categorias.

## 🎯 Sobre o Projeto

Esta é uma API robusta para gerenciamento de produtos e categorias, construída com tecnologias modernas e boas práticas de desenvolvimento. A API oferece endpoints para realizar operações CRUD (Create, Read, Update, Delete) em categorias e produtos, com relacionamentos bem definidos.

## 🚀 Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **Prisma** - ORM para TypeScript/JavaScript
- **PostgreSQL** - Banco de dados
- **CORS** - Compartilhamento de recursos entre origens
- **Dotenv** - Gerenciamento de variáveis de ambiente
- **Nodemon** - Reload automático durante desenvolvimento

## 📋 Requisitos

- Node.js 18+ 
- npm ou yarn
- PostgreSQL 12+

## 📦 Instalação

1. **Clone o repositório:**
```bash
git clone https://github.com/Liebertt/api--prisma.git
cd api--prisma
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Configure o banco de dados:**
Crie um arquivo `.env` na raiz do projeto com as variáveis necessárias (veja [Variáveis de Ambiente](#-variáveis-de-ambiente))

4. **Execute as migrações do Prisma:**
```bash
npx prisma migrate deploy
```

## 🔑 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
# Banco de dados
DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_banco"
DIRECT_URL="postgresql://usuario:senha@localhost:5432/nome_banco"

# Porta da aplicação (opcional)
PORT=3000
```

## 🏃 Como Executar

### Modo Desenvolvimento
```bash
npm run dev
```
A API estará disponível em `http://localhost:3000`

### Modo Produção
```bash
node src/server.js
```

## 📁 Estrutura do Projeto

```
├── src/
│   ├── server.js                 # Configuração da aplicação Express
│   ├── config/
│   │   └── prisma.js            # Configuração do cliente Prisma
│   ├── controllers/
│   │   ├── categoriaController.js # Lógica de categorias
│   │   └── produtoController.js   # Lógica de produtos
│   ├── services/
│   │   ├── categoriaService.js   # Serviços de categorias
│   │   └── produtoService.js     # Serviços de produtos
│   ├── routes/
│   │   ├── categoriaRoutes.js    # Rotas de categorias
│   │   └── produtoRoutes.js      # Rotas de produtos
│   └── middlewares/
│       └── validarId.js          # Middleware de validação
├── prisma/
│   ├── schema.prisma             # Schema do banco de dados
│   └── migrations/               # Histórico de migrações
├── generated/                    # Código gerado pelo Prisma
├── package.json
└── README.md
```

## 🔌 Endpoints da API

### Base URL
```
http://localhost:3000
```

### Health Check
```
GET /
```
Verifica se a API está funcionando.

**Response (200 OK):**
```
API de produtos funcionando
```

---

### Categorias

#### Listar todas as categorias
```
GET /categorias
```

**Response (200 OK):**
```json
[
  {
    "id": 1,
    "nome": "Eletrônicos"
  },
  {
    "id": 2,
    "nome": "Livros"
  }
]
```

#### Buscar categoria por ID
```
GET /categorias/:id
```

**Response (200 OK):**
```json
{
  "id": 1,
  "nome": "Eletrônicos",
  "produtos": []
}
```

#### Criar nova categoria
```
POST /categorias
```

**Body:**
```json
{
  "nome": "Roupas"
}
```

**Response (201 Created):**
```json
{
  "id": 3,
  "nome": "Roupas"
}
```

#### Atualizar categoria
```
PUT /categorias/:id
```

**Body:**
```json
{
  "nome": "Eletrônicos Diversos"
}
```

**Response (200 OK):**
```json
{
  "id": 1,
  "nome": "Eletrônicos Diversos"
}
```

#### Deletar categoria
```
DELETE /categorias/:id
```

**Response (200 OK):**
```json
{
  "mensagem": "Categoria deletada com sucesso"
}
```

---

### Produtos

#### Listar todos os produtos
```
GET /produtos
```

**Response (200 OK):**
```json
[
  {
    "id": 1,
    "nome": "Notebook",
    "descricao": "Notebook Intel i7",
    "preco": 3500.00,
    "quantidade": 5,
    "categoriaId": 1
  }
]
```

#### Buscar produto por ID
```
GET /produtos/:id
```

**Response (200 OK):**
```json
{
  "id": 1,
  "nome": "Notebook",
  "descricao": "Notebook Intel i7",
  "preco": 3500.00,
  "quantidade": 5,
  "categoriaId": 1,
  "categoria": {
    "id": 1,
    "nome": "Eletrônicos"
  }
}
```

#### Criar novo produto
```
POST /produtos
```

**Body:**
```json
{
  "nome": "Mouse sem fio",
  "descricao": "Mouse Logitech",
  "preco": 150.00,
  "quantidade": 20,
  "categoriaId": 1
}
```

**Response (201 Created):**
```json
{
  "id": 2,
  "nome": "Mouse sem fio",
  "descricao": "Mouse Logitech",
  "preco": 150.00,
  "quantidade": 20,
  "categoriaId": 1
}
```

#### Atualizar produto
```
PUT /produtos/:id
```

**Body:**
```json
{
  "nome": "Mouse sem fio Logitech",
  "preco": 145.00,
  "quantidade": 18
}
```

**Response (200 OK):**
```json
{
  "id": 2,
  "nome": "Mouse sem fio Logitech",
  "descricao": "Mouse Logitech",
  "preco": 145.00,
  "quantidade": 18,
  "categoriaId": 1
}
```

#### Deletar produto
```
DELETE /produtos/:id
```

**Response (200 OK):**
```json
{
  "mensagem": "Produto deletado com sucesso"
}
```

---

## 📊 Modelo de Dados

### Categoria
```prisma
model Categoria {
  id       Int       @id @default(autoincrement())
  nome     String
  produtos Produto[]
}
```

### Produto
```prisma
model Produto {
  id          Int        @id @default(autoincrement())
  nome        String
  descricao   String?
  preco       Float
  quantidade  Int
  categoriaId Int?
  categoria   Categoria? @relation(fields: [categoriaId], references: [id])
}
```

## 🧪 Testando a API

Você pode testar os endpoints usando:

- **cURL** (linha de comando)
- **Postman** (ferramenta gráfica)
- **Insomnia** (ferramenta gráfica)
- **Apidog** (ferramenta gráfica online) usei esta pela facilidade de ser online
- **Thunder Client** (extensão do VS Code)

  Observação: *na documentação usei como referência o Insomnia, por ser uma ferramenta de comum uso.*

Consulte o arquivo [API_TEST_GUIDE.md](./API_TEST_GUIDE.md) para exemplos detalhados de requisições.

## 🔍 Validação

- IDs devem ser números válidos
- Nomes de categorias e produtos são obrigatórios
- Preços e quantidades devem ser números válidos
- A busca por IDs inválidos retorna erro 400 (Bad Request)
- A busca por IDs inexistentes retorna erro 404 (Not Found)

## 📝 Principais Features

✅ CRUD completo para Categorias  
✅ CRUD completo para Produtos  
✅ Relacionamento entre Produto e Categoria  
✅ Validação de dados  
✅ Tratamento de erros robusto  
✅ CORS habilitado  
✅ Migrations automáticas com Prisma  

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a Licença ISC - veja o arquivo [package.json](./package.json) para detalhes.

## 👤 Autor

**Liebertt**

- GitHub: [@Liebertt](https://github.com/Liebertt)
- Repositório: [api--prisma](https://github.com/Liebertt/api--prisma)

## 📞 Suporte

Se você tiver dúvidas ou encontrar problemas, abra uma [issue](https://github.com/Liebertt/api--prisma/issues) no GitHub.

## 🎓 Recursos Úteis

- [Documentação Express.js](https://expressjs.com/)
- [Documentação Prisma](https://www.prisma.io/docs/)
- [Documentação PostgreSQL](https://www.postgresql.org/docs/)
- [REST API Best Practices](https://restfulapi.net/)
