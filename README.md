# 🎬 Catálogo de Filmes

Projeto de portfólio Full Stack com foco em backend Node.js e frontend em React (em construção). O sistema permite gerenciar uma lista personalizada de filmes e séries, com status, avaliações e informações adicionais, tudo em um só lugar.

## 🚀 Objetivo

* Centralizar e organizar filmes e séries assistidos ou a assistir.
* Evitar a fragmentação entre diferentes serviços de streaming.
* Permitir avaliações, classificações por gênero, duração e mais.
* Servir como base para recomendações inteligentes via IA (em breve).
* Aplicar práticas reais de desenvolvimento: API REST, TDD, boas práticas com Git e arquitetura escalável.

---

## 🤪 Tecnologias Utilizadas

### Backend

* [Node.js](https://nodejs.org/)
* [Express](https://expressjs.com/)
* [MongoDB + Mongoose](https://mongoosejs.com/)
* [dotenv](https://github.com/motdotla/dotenv)
* [Jest](https://jestjs.io/) + [Supertest](https://github.com/ladjs/supertest) (para testes)

### (Em breve)

* Frontend com React
* Integração com TMDb API para dados automáticos
* Sistema de recomendações por IA

---

## 📂 Estrutura do Projeto

```
film-catalog/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── config/
│   │   └── tests/
│   ├── server.js
│   └── .env
└── frontend/ (em breve)
```

---

## ✅ Funcionalidades Implementadas

* [x] Criar, visualizar, editar e deletar filmes
* [x] Campos personalizados:

  * Título
  * Status: "Assistido" ou "Quero Assistir"
  * Avaliação: Gostei / Não Gostei
  * Gênros (vários)
  * Duração
  * Plataforma de streaming
* [x] Testes automatizados com TDD (Jest + Supertest)
* [x] Separação de responsabilidades (model, controller, rotas)
* [x] Conexão com MongoDB
* [x] Boas práticas com Git e mensagens de commit

---

## 📬 Rotas da API

> Base URL: `http://localhost:3000/api/movies`

| Método | Rota   | Descrição                 |
| ------ | ------ | ------------------------- |
| GET    | `/`    | Listar todos os filmes    |
| GET    | `/:id` | Detalhes de um filme      |
| POST   | `/`    | Criar novo filme          |
| PUT    | `/:id` | Atualizar filme existente |
| DELETE | `/:id` | Deletar um filme          |

### Exemplo de `POST` (JSON):

```json
{
  "title": "Interstellar",
  "status": "Assistido",
  "liked": true,
  "genres": ["Ficção Científica", "Drama"],
  "streamingService": "Netflix",
  "duration": "2h49min",
  "director": "Christopher Nolan",
  "releaseYear": 2014
}
```

---

## 🤪 Rodando os Testes

```bash
npm test
```

> Os testes estão localizados em `src/tests/`

---

## 🛠️ Como Rodar o Projeto

```bash
# Clone o repositório
git clone https://github.com/Gui-Anacleto/film-catalog

# Acesse a pasta do backend
cd film-catalog/backend

# Instale as dependências
npm install

# Crie o arquivo .env com:
MONGO_URI=mongodb://localhost:27017/film_catalog

# Rode o servidor
npm run dev
```

---

## 📌 Próximos Passos

* [ ] Implementar autenticação JWT e cadastro de usuários
* [ ] Associar conteúdos por usuário
* [ ] Criar frontend em React
* [ ] Integração com API externa (TMDb)
* [ ] Sistema de recomendações por IA
* [ ] Deploy (Render, Vercel, Railway, etc.)

---

## 👨‍💻 Autor

Desenvolvido por [Guilherme Anacleto](https://github.com/Gui-Anacleto) 👋
Projeto criado para fins de estudo, prática e portfólio.
