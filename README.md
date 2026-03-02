# Express MVC Server

Сервер на Node.js + Express.js з модульною структурою (MVC) та текстовими відповідями.

## Технології
- Node.js
- Express.js
- npm або Yarn

## Встановлення
### Варіант 1: npm
```bash
npm install
npm run start
```
Варіант 2: Yarn

```bash
yarn
yarn start
```

Сервер стартує на: http://localhost:3000

Запуск у dev-режимі (Node 18+)
```bash
npm run dev
```
Архітектура

src/routes — маршрути (routing)

src/controllers — контролери (логіка відповідей)

src/app.js — підключення middleware + routes

src/server.js — запуск сервера
Маршрути
Root

GET / -> Get root route

Users

GET /users -> Get users route

POST /users -> Post users route

User by Id

GET /users/:userId -> Get user by Id route: {userId}

PUT /users/:userId -> Put user by Id route: {userId}

DELETE /users/:userId -> Delete user by Id route: {userId}

Articles

GET /articles -> Get articles route

POST /articles -> Post articles route

Article by Id

GET /articles/:articleId -> Get article by Id route: {articleId}

PUT /articles/:articleId -> Put article by Id route: {articleId}

DELETE /articles/:articleId -> Delete article by Id route: {articleId}
Приклади запитів (curl)

```bash
curl http://localhost:3000/
curl http://localhost:3000/users
curl -X POST http://localhost:3000/users
curl http://localhost:3000/users/123

curl http://localhost:3000/articles
curl -X POST http://localhost:3000/articles
curl http://localhost:3000/articles/999
```