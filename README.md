<h1 align="center">👨‍💼💬  Talker Manager  💼</h1>

<div align='center'>
<img width='300' alt="talkers-img" src="./talkers.jpg">
</div>

## Description
<p>Talker Manager is a REST API built with the Express framework. It allows users to log in, register, and delete talkers. Token validation is performed for API security. In summary, Talker Manager is a complete REST API for managing talker information.</p>

## 💻 Tecnologies used
- Node.JS
- Express
- JavaScript

## 🛠️ Instructions
### 📚 Requirements to run this project:
> [![Node.js][Node.js]][Node.js-url]
[![Git][Git]][Git-url]
[![NPM][NPM]][NPM-url]
[![DOCKER][DOCKER]][DOCKER-url]

### Notes
>This project run in port 3000<br/>
>You can run this API with Docker or Node.JS, you choose!

<br>

<details>
    <summary><strong>🟢 Run with Node.JS ⬢</strong></summary>
    

```bash
# Clone the repo
git clone https://github.com/caiobacode/api-talker-manager.git

# Enter in repo
cd api-talker-manager

# Install dependencies
npm i

# Run App
npm run dev
```

</details><br/>

<details>
    <summary><strong>🐳 Run with Docker 🐳</strong></summary>
    
```bash
# Clone the repo
git clone https://github.com/caiobacode/api-talker-manager.git

# Enter in repo
cd api-talker-manager

# Run DockerCompose
docker-compose up -d
```
</details><br/>

[Node.js]: https://img.shields.io/badge/-Node.js-80BC02?style=for-the-badge&logo=node.js&logoColor=black
[Node.js-url]: https://nodejs.org/en
[Git]: https://img.shields.io/badge/Git-F05033?style=for-the-badge&logo=git&logoColor=white
[Git-url]: https://git-scm.com
[NPM]: https://img.shields.io/badge/NPM-CC3534?style=for-the-badge&logo=npm&logoColor=white
[NPM-url]: https://www.npmjs.com
[DOCKER]: https://img.shields.io/badge/Docker-0db7ed?style=for-the-badge&logo=docker&logoColor=white
[DOCKER-url]: https://www.docker.com

## 🔎 Additional details

<br/>

<details>
    <summary><strong>🌐 API rotes</strong></summary>

>- GET "/talker" - Returns all talkers.<br/>
>- GET "/talker/:id" - Returns the talker that has the id passed by the request.<br/>
>- GET "/talker/search" - Returns all talkers that have the term passed by the request in their names.<br/>
>- POST "/login" - Returns a random token, to use in others endpoints.<br/>
>- POST "/talker" - Register a talker with the properties passed by the request.<br/>
>- PUT "/talker/:id" - Edit a talker properties to new properties passed by the request.<br/>
>- DELETE "/talker/:id" - Delete the talker that has the id passed by the request
  </details><br/>

  <details>
    <summary><strong>✏️ What i learned</strong></summary>

- How to create an API from scratch.
- How to use Express, to create an API REST.
- How to create middlewares to validade the request.
- Hot to validate Tokens.
  
  </details>