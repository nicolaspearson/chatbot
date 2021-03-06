# Chatbot

A chatbot app that provides bi-directional chat functionality via gRPC. The backend uses NodeJS and Golang to serve various microservices. The frontend uses ReactJS and Ant Design.

The reason for this project is simply to experiment with building distributed applications using bleeding-edge technologies.

## Getting started

This project was built with containerization in mind, therefore bringing up the entire project is extremely straight forward, simply run `docker-compose up --build` and navigate to: http://localhost:8080.

- Clone the repository
- Download and install [VS Code](https://code.visualstudio.com/)
- Install Docker
- Install Node, e.g. `brew install node`
- Running the system:
  - Execute `docker-compose up` from the project root directory.
  - Using a browser navigate to http://localhost:8080
- Stopping the system:
  - Execute `docker-compose stop` from the project root directory.
- Destroying the system:
  - Execute `docker-compose down` from the project root directory.
  - This will remove the containers that were created

## Envoy

This project uses [Envoy](https://www.envoyproxy.io), an L7 proxy and communication bus designed for large modern service oriented architectures. It wraps all of the microservices as well as the react app. This is the central entrypoint into the application for external consumers.

## Frontend

The frontend was built using ReactJS and written in Typescript. See the `README` in the frontend directory for further details.

## Backend

The backend consists of various microservices and was built using NodeJS and Golang. See the `README` in the backend directory for further details.
