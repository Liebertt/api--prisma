# Guia de Testes - API de Produtos e Categorias

**URL Base:** `http://localhost:3000`

---

## 🏠 Health Check

### GET /
**Descrição:** Verifica se a API está funcionando

**Request:**
```bash
curl -X GET http://localhost:3000/
```

**Response (200 OK):**
```
API de produtos funcionando
```

---

## 📂 Categorias

### 1. Listar todas as categorias

**GET** `/categorias`

**Request:**
```bash
curl -X GET http://localhost:3000/categorias \
  -H "Content-Type: application/json"
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

---

### 2. Buscar categoria por ID

**GET** `/categorias/:id`

**Request:**
```bash
curl -X GET http://localhost:3000/categorias/1 \
  -H "Content-Type: application/json"
```

**Response (200 OK):**
```json
{
  "id": 1,
  "nome": "Eletrônicos",
  "produtos": []
}
```

**Response (400 Bad Request):**
```json
{
  "erro": "ID inválido"
}
```

**Response (404 Not Found):**
```json
{
  "erro": "Categoria não encontrada"
}
```

---

### 3. Criar nova categoria

**POST** `/categorias`

**Request:**
```bash
curl -X POST http://localhost:3000/categorias \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "Roupas"
  }'
```

**Payload:**
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

**Response (400 Bad Request):**
```json
{
  "erro": "Nome da categoria é obrigatório"
}
```

---

### 4. Atualizar categoria

**PUT** `/categorias/:id`

**Request:**
```bash
curl -X PUT http://localhost:3000/categorias/1 \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "Eletrônicos Diversos"
  }'
```

**Payload:**
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

**Response (400 Bad Request):**
```json
{
  "erro": "ID inválido"
}
```

**Response (404 Not Found):**
```json
{
  "erro": "Categoria não encontrada"
}
```

---

### 5. Deletar categoria

**DELETE** `/categorias/:id`

**Request:**
```bash
curl -X DELETE http://localhost:3000/categorias/3 \
  -H "Content-Type: application/json"
```

**Response (200 OK):**
```json
{
  "mensagem": "Categoria deletada com sucesso"
}
```

**Response (400 Bad Request):**
```json
{
  "erro": "ID inválido"
}
```

**Response (404 Not Found):**
```json
{
  "erro": "Categoria não encontrada"
}
```

---

## 📦 Produtos

### 1. Listar todos os produtos

**GET** `/produtos`

**Request:**
```bash
curl -X GET http://localhost:3000/produtos \
  -H "Content-Type: application/json"
```

**Response (200 OK):**
```json
[
  {
    "id": 1,
    "nome": "Notebook",
    "descricao": "Notebook 15 polegadas",
    "preco": 3500.00,
    "quantidade": 10,
    "categoriaId": 1
  },
  {
    "id": 2,
    "nome": "Mouse",
    "descricao": "Mouse sem fio",
    "preco": 50.00,
    "quantidade": 50,
    "categoriaId": 1
  }
]
```

---

### 2. Buscar produto por ID

**GET** `/produtos/:id`

**Request:**
```bash
curl -X GET http://localhost:3000/produtos/1 \
  -H "Content-Type: application/json"
```

**Response (200 OK):**
```json
{
  "id": 1,
  "nome": "Notebook",
  "descricao": "Notebook 15 polegadas",
  "preco": 3500.00,
  "quantidade": 10,
  "categoriaId": 1,
  "categoria": {
    "id": 1,
    "nome": "Eletrônicos"
  }
}
```

**Response (400 Bad Request):**
```json
{
  "erro": "ID inválido"
}
```

**Response (404 Not Found):**
```json
{
  "erro": "Produto não encontrado"
}
```

---

### 3. Criar novo produto

**POST** `/produtos`

**Request:**
```bash
curl -X POST http://localhost:3000/produtos \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "Teclado",
    "descricao": "Teclado mecânico RGB",
    "preco": 350.00,
    "quantidade": 15,
    "categoriaId": 1
  }'
```

**Payload:**
```json
{
  "nome": "Teclado",
  "descricao": "Teclado mecânico RGB",
  "preco": 350.00,
  "quantidade": 15,
  "categoriaId": 1
}
```

**Response (201 Created):**
```json
{
  "id": 3,
  "nome": "Teclado",
  "descricao": "Teclado mecânico RGB",
  "preco": 350.00,
  "quantidade": 15,
  "categoriaId": 1
}
```

**Response (400 Bad Request):**
```json
{
  "erro": "Nome, preço e quantidade são obrigatórios"
}
```

---

### 4. Atualizar produto

**PUT** `/produtos/:id`

**Request:**
```bash
curl -X PUT http://localhost:3000/produtos/1 \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "Notebook Gamer",
    "descricao": "Notebook 15 polegadas para gaming",
    "preco": 4500.00,
    "quantidade": 8,
    "categoriaId": 1
  }'
```

**Payload:**
```json
{
  "nome": "Notebook Gamer",
  "descricao": "Notebook 15 polegadas para gaming",
  "preco": 4500.00,
  "quantidade": 8,
  "categoriaId": 1
}
```

**Response (200 OK):**
```json
{
  "id": 1,
  "nome": "Notebook Gamer",
  "descricao": "Notebook 15 polegadas para gaming",
  "preco": 4500.00,
  "quantidade": 8,
  "categoriaId": 1
}
```

**Response (400 Bad Request):**
```json
{
  "erro": "ID inválido"
}
```

**Response (404 Not Found):**
```json
{
  "erro": "Produto não encontrado"
}
```

---

### 5. Deletar produto

**DELETE** `/produtos/:id`

**Request:**
```bash
curl -X DELETE http://localhost:3000/produtos/3 \
  -H "Content-Type: application/json"
```

**Response (200 OK):**
```json
{
  "mensagem": "Produto deletado com sucesso"
}
```

**Response (400 Bad Request):**
```json
{
  "erro": "ID inválido"
}
```

**Response (404 Not Found):**
```json
{
  "erro": "Produto não encontrado"
}
```

---

## 📋 Modelos de Dados

### Categoria
```json
{
  "id": "int (chave primária)",
  "nome": "string (obrigatório)"
}
```

### Produto
```json
{
  "id": "int (chave primária)",
  "nome": "string (obrigatório)",
  "descricao": "string (opcional)",
  "preco": "float (obrigatório)",
  "quantidade": "int (obrigatório)",
  "categoriaId": "int (opcional - referencia Categoria)"
}
```

---

## 🛠️ Códigos de Status HTTP

| Código | Descrição |
|--------|-----------|
| 200 | OK - Requisição bem-sucedida |
| 201 | Created - Recurso criado com sucesso |
| 400 | Bad Request - Erro na validação dos dados |
| 404 | Not Found - Recurso não encontrado |
| 500 | Internal Server Error - Erro no servidor |

---

## 💡 Dicas para Teste

1. **Usando Postman:** Importe as requisições acima no Postman para testes mais visuais
2. **Usando Thunder Client:** Extensão VSCode para testar APIs diretamente
3. **Usando REST Client:** Extensão VSCode que permite testar via arquivo `.http`
4. **Validação de IDs:** O middleware valida se o ID é um número válido
5. **Cors:** A API aceita requisições de qualquer origem

---
