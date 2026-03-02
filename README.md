# Express MVC Server with PUG & EJS Templates

## Project Description

This project is a backend server built using **Node.js** and
**Express.js** following the **MVC (Model--View--Controller)**
architecture.

The application demonstrates:

-   Middleware integration
-   Session management
-   Authentication & access control
-   Server-side rendering using template engines
-   Static CSS styling

The server renders HTML pages using:

-   **PUG** → for Users routes
-   **EJS** → for Articles routes

------------------------------------------------------------------------

## Technologies

-   Node.js
-   Express.js
-   PUG
-   EJS
-   express-session
-   MVC architecture
-   npm / yarn

------------------------------------------------------------------------

## Project Structure

    express-mvc-server/
    │
    ├── src/
    │   ├── app.js
    │   ├── server.js
    │
    │   ├── controllers/
    │   ├── routes/
    │   ├── middlewares/
    │
    │   ├── views/
    │   │   ├── users/
    │   │   │   ├── index.pug
    │   │   │   └── detail.pug
    │   │   └── articles/
    │   │       ├── index.ejs
    │   │       └── detail.ejs
    │
    │   └── public/
    │       └── styles.css
    │
    ├── package.json
    └── README.md

------------------------------------------------------------------------

## Installation

Clone repository:

``` bash
git clone <repository-link>
cd express-mvc-server
```

Install dependencies:

``` bash
npm install
```

or

``` bash
yarn
```

------------------------------------------------------------------------

## Run Server

``` bash
npm run start
```

Server runs at:

    http://localhost:3000

------------------------------------------------------------------------

## Template Engines

### Users Pages (PUG)

Routes rendered using **PUG**:

-   GET `/users` → Users list
-   GET `/users/:userId` → User details

PUG templates:

    views/users/index.pug
    views/users/detail.pug

------------------------------------------------------------------------

### Articles Pages (EJS)

Routes rendered using **EJS**:

-   GET `/articles` → Articles list
-   GET `/articles/:articleId` → Article details

EJS templates:

    views/articles/index.ejs
    views/articles/detail.ejs

------------------------------------------------------------------------

## Middleware Usage

### Logging

Logs all incoming requests.

### Authentication

Applied to protected Users modification routes.

### Validation

Validates request body and route parameters.

### Article Access Control

Checks header:

    x-article-role: editor

or

    x-article-role: admin

### Session Management

Implemented using **express-session**.

### Error Handling

Global error middleware handles unexpected server errors.

------------------------------------------------------------------------

## API Routes

### Root

    GET /

------------------------------------------------------------------------

### Users

    GET /users
    GET /users/:userId
    POST /users
    PUT /users/:userId
    DELETE /users/:userId

------------------------------------------------------------------------

### Articles

    GET /articles
    GET /articles/:articleId
    POST /articles
    PUT /articles/:articleId
    DELETE /articles/:articleId

------------------------------------------------------------------------

## Static Files

CSS styles are served from:

    /public/styles.css

------------------------------------------------------------------------

## Architecture

The project follows MVC:

-   **Routes** → define endpoints
-   **Controllers** → business logic
-   **Views** → PUG & EJS templates
-   **Middlewares** → security & validation