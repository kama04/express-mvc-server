# Express MVC Server with Middlewares

## Project Description

This project is a backend server developed using **Node.js** and
**Express.js** following the **MVC (Model--View--Controller)**
architecture.

The server implements routing for users and articles and integrates
multiple middlewares for:

-   request logging
-   authentication
-   data validation
-   access control
-   session management
-   global error handling

All server responses are returned in **text format** for simplified
debugging and integration.

------------------------------------------------------------------------

## Technologies

-   Node.js
-   Express.js
-   express-session
-   npm / yarn
-   MVC architecture

------------------------------------------------------------------------

## Project Structure

    express-mvc-server/
    │
    ├── src/
    │   ├── app.js
    │   ├── server.js
    │   │
    │   ├── controllers/
    │   │   ├── root.controller.js
    │   │   ├── users.controller.js
    │   │   └── articles.controller.js
    │   │
    │   ├── routes/
    │   │   ├── index.routes.js
    │   │   ├── users.routes.js
    │   │   └── articles.routes.js
    │   │
    │   └── middlewares/
    │       ├── requestLogger.js
    │       ├── basicAuth.js
    │       ├── validateUserPayload.js
    │       ├── validateIdParam.js
    │       ├── articleAccess.js
    │       └── errorHandler.js
    │
    ├── package.json
    └── README.md

------------------------------------------------------------------------

## Installation

### Clone repository

``` bash
git clone <repository-link>
cd express-mvc-server
```

------------------------------------------------------------------------

### Install dependencies

Using npm:

``` bash
npm install
```

or Yarn:

``` bash
yarn
```

------------------------------------------------------------------------

## Run Server

``` bash
npm run start
```

or

``` bash
yarn start
```

Server runs on:

    http://localhost:3000

------------------------------------------------------------------------

## Middleware Integration

### Root Route `/`

Middleware: - Request Logger

Logs every incoming request.

------------------------------------------------------------------------

### Users Routes `/users` and `/users/:userId`

Middlewares: - Basic Authentication - Data Validation - ID Parameter
Validation - Session Management

Authentication checks the presence of an `Authorization` header.

Validation ensures required fields exist in request body.

------------------------------------------------------------------------

### Articles Routes `/articles` and `/articles/:articleId`

Middlewares: - Article Access Control - ID Validation

Access allowed only if request header contains:

    x-article-role: editor

or

    x-article-role: admin

------------------------------------------------------------------------

## API Routes

### Root

    GET /

Response:

    Get root route

------------------------------------------------------------------------

### Users

    GET /users
    POST /users

    GET /users/:userId
    PUT /users/:userId
    DELETE /users/:userId

------------------------------------------------------------------------

### Articles

    GET /articles
    POST /articles

    GET /articles/:articleId
    PUT /articles/:articleId
    DELETE /articles/:articleId

------------------------------------------------------------------------

## Example Requests

### Root

``` bash
curl http://localhost:3000/
```

------------------------------------------------------------------------

### Users (requires Authorization header)

``` bash
curl -H "Authorization: Basic test" http://localhost:3000/users
```

Create user:

``` bash
curl -X POST -H "Authorization: Basic test" -H "Content-Type: application/json" -d "{\"username\":\"admin\",\"password\":\"123\"}" http://localhost:3000/users
```

------------------------------------------------------------------------

### Articles (requires access role)

``` bash
curl -H "x-article-role: editor" http://localhost:3000/articles
```

------------------------------------------------------------------------

## Error Handling

Global error middleware handles unexpected server errors and returns
text responses with appropriate HTTP status codes.