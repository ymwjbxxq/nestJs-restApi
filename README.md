## Description

In this project I play around with a typical scenario that we are facing every day.
Building a rest api. I am coming from .NET world and I am not used to the free world of Javascript where you have so many libraries to use etc so in this project I have used [TypeScript](https://www.typescriptlang.org/) and [NestJs](https://nestjs.com/) framework.

The structure of the code is easy:
Controller -> CQS Handler -> Repo -> MongoDb

---

## Getting started

* git clone https://DanBranch@bitbucket.org/DanBranch/typescriptrestapi.git
* npm install

---

## MongoDb Setup

1. Open VsCode
2. Right click on "docker-compse.yml" and select "compose up"
3. List the containers: "docker ps"
4. Connect to the shell: "docker exec -it [containerID] mongo"
5. Create the db: "use mongoTestDb"

---

## Running test

* npm run test

---

## Running the webapi

* npm run start
* GET  http://localhost:3000/peppa
* GET  http://localhost:3000/peppa/:id
* POST http://localhost:3000/peppa (it will return the location in the header)

---
## Debug

Under .vscode folder there is "lunch.json" which contains three configurations:
1. Attach the process to the NestJs that is running under http://localhost:3000
2. Debug Jest tests.
3. Normal debug (no need it)

---

## Little Note

The name of the service and the rest is not the best. I have written while I was watching PeppaPig with my daughter.
