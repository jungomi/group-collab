# Group Collab

This is the combined version of the EmberJS front-end and the express
back-end of the group collaboration application for the WebEngineering 2015
project.

Checkout the standalone repositories:
- [Front-end](https://github.com/papagei9/WebEngineering15)
- [Back-end](https://github.com/jungomi/group-collab-api)

## Usage

The back-end requires MongoDB to be installed.
Start front-end and back-end together:

```sh
npm install
npm start
```

Alternatively install or start only one by adding `:backend` or `:frontend`
respectively. `run` **is required**, because these are custom npm scripts.

```sh
npm run install:backend
npm run start:backend

npm run install:frontend
npm run start:frontend
```
