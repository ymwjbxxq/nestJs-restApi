## Description

In this project, I play around with a typical scenario that we are facing every day.
Building a rest API. I am coming from the .NET world and I am not used to the free world of Javascript where you have so many libraries to use etc so in this project I have used [TypeScript](https://www.typescriptlang.org/) and [NestJs](https://nestjs.com/) framework.

The structure of the code is easy:
Controller -> CQS Handler -> Repo -> MongoDb

---

## Getting started

* git clone https://DanBranch@bitbucket.org/DanBranch/typescriptrestapi.git
* npm install

---

## MongoDb Setup

1. Open VsCode
2. Right-click on "docker-compse.yml" and select "compose up"
3. List the containers: "docker ps"
4. Connect to the shell: "docker exec -it [containerID] mongo"
5. Create the DB: "use mongoTestDb"

---

## Running test

* npm run test

---

## Running the web API

* npm run start
* GET  http://localhost:3000/peppa
* GET  http://localhost:3000/peppa/:id
* POST http://localhost:3000/peppa (it will return the location in the header)

---
## Debug

Under the .vscode folder there is "lunch.json" which contains three configurations:
1. Attach the process to the NestJs that is running under http://localhost:3000
2. Debug Jest tests.
3. Normal debug (no need it)

---

## Snippets

I wrote some snippets where you can see step by step how I reached this point

1. Setup a basic project template: (https://bitbucket.org/snippets/DanBranch/qedbGR/jetbrain-rider-typescript-configuration)
2. Getting started with TypeScript and Nestjs: (https://bitbucket.org/snippets/DanBranch/Benara/typescript-webapi-with-nestjs-and-nodejs)
3. Persistence in MongoDb: (https://bitbucket.org/snippets/DanBranch/yedBxn/typescript-webapi-with-nestjs-and-nodejs)
4. Let's be SOLID with command and query pattern: (https://bitbucket.org/snippets/DanBranch/LenaxL/solid-with-typescript-webapi-with-nestjs)
5. Final notes: (https://bitbucket.org/snippets/DanBranch/der5gn/final-notes-typescript-webapi-with-nestjs)

---

## Little Note

The name of the service and the rest is not the best. I have written while I was watching PeppaPig with my daughter.
