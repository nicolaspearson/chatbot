# Chatbot

---

**PROJECT UNDER CONSTRUCTION**

---

A chatbot app that provides bi-directional chat functionality. The backend uses NodeJS to serve a gRPC API. The frontend uses ReactJS and Ant Design. The frontend and backend have both been written in Typescript.

The reason for this project is simply to experiment with building distributed applications using bleeding-edge technology.

## Getting started

- Install VS Code
- Install Node, e.g. `brew install node`
- Clone the repository
- Install Docker

## Docker

This project was built with containerization in mind, therefore bringing up the entire project is extremely straight forward, simply run `docker-compose up` and go to: http://localhost:8080.

TODO: Host docker images on docker-hub.

## Frontend

The frontend was built using ReactJS. See the `README` in the frontend directory.

### Running the project

1. Navigate into the `frontend` directory, i.e. `cd frontend`.
2. `npm install`
3. `npm build` to compile the source code into the build dir, i.e. to create a production build.
4. `npm start` to run the application in dev mode.
5. `npm run prettier` to prettify the code.
