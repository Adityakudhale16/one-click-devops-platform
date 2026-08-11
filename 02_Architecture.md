# System Architecture

## Project Title

One-Click DevOps Deployment Platform

## Introduction

The One-Click DevOps Deployment Platform follows a modular frontend-backend architecture.

The frontend provides a simple interface where the user enters a GitHub repository URL and initiates the deployment process.

The backend, developed using Node.js and Express.js, receives the deployment request and coordinates the deployment workflow through separate services for Git operations, Docker operations, and deployment management.

This architecture keeps the application organized into independent components and makes it easier to maintain, debug, and extend the platform.

## High-Level Architecture

```text
                    USER
                      |
                      v
              +---------------+
              | React + Vite  |
              |   Frontend    |
              +-------+-------+
                      |
                      | Axios
                      | POST /api/deploy
                      v
              +---------------+
              | Node.js +     |
              | Express.js    |
              | Backend       |
              +-------+-------+
                      |
                      v
             +------------------+
             | Deployment       |
             | Controller       |
             +--------+---------+
                      |
                      v
             +------------------+
             | Deployment       |
             | Service          |
             +---+----------+---+
                 |          |
                 v          v
        +-------------+  +-------------+
        | Git Service |  | Docker      |
        |             |  | Service     |
        +------+------+  +------+------+
               |                |
               v                v
          GitHub Repo      Docker Engine
                                |
                                v
                         Running Container
                                |
                                v
                       Deployed Application

Architecture Components

The platform is divided into the following major components:

1. Frontend


2. Backend API


3. Deployment Controller


4. Deployment Service


5. Git Service


6. Docker Service


7. Shell Utility


8. Deployment Workspace



1. Frontend

The frontend is developed using React and Vite.

Main Responsibilities

Provide the user interface.

Accept the GitHub repository URL.

Provide the Deploy action.

Send deployment requests to the backend.

Display deployment status.

Display deployment information returned by the backend.


Frontend Structure

frontend/
│
├── src/
│   ├── assets/
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.css
│   └── main.jsx
│
├── public/
├── index.html
└── package.json

2. Backend API

The backend is developed using Node.js and Express.js.

The backend acts as the main processing layer of the platform.

Main Responsibilities

Receive API requests from the frontend.

Process the GitHub repository URL.

Start the deployment workflow.

Coordinate Git and Docker services.

Execute required shell commands.

Return deployment information to the frontend.

Serve deployed application files.


Backend Structure

backend/
│
├── src/
│   ├── controllers/
│   │   └── deployment.controller.js
│   │
│   ├── routes/
│   │   └── deployment.routes.js
│   │
│   ├── services/
│   │   ├── deployment.service.js
│   │   ├── docker.service.js
│   │   └── git.service.js
│   │
│   ├── utils/
│   │   └── shell.js
│   │
│   ├── app.js
│   └── server.js
│
├── deployments/
├── package.json
└── package-lock.json

3. Deployment Controller

The deployment.controller.js file handles the deployment API request at the controller layer.

Its responsibility is to:

Receive the request.

Read the repository information.

Call the deployment service.

Return the deployment result or error response.


The controller acts as the connection between the API route and the deployment business logic.

4. Deployment Routes

The deployment.routes.js file defines the deployment API endpoint.

The main deployment endpoint is:

POST /api/deploy

The route forwards the request to the deployment controller.

5. Deployment Service

The deployment.service.js file coordinates the main deployment workflow.

It acts as the orchestration layer between the controller and supporting services.

The general workflow is:

Deployment Request
       |
       v
Deployment Service
       |
       +----> Git Service
       |
       +----> Docker Service
       |
       +----> Deployment Workspace
       |
       v
Deployment Result

6. Git Service

The git.service.js file handles Git-related operations.

Its main purpose is to work with the GitHub repository provided by the user and prepare the repository for deployment.

The general process is:

GitHub Repository URL
        |
        v
Repository Processing
        |
        v
Git Clone
        |
        v
Local Deployment Workspace

7. Docker Service

The docker.service.js file handles Docker-related deployment operations.

The Docker workflow is:

Application Source Code
        |
        v
Docker Build
        |
        v
Docker Image
        |
        v
Docker Container
        |
        v
Running Application

Docker provides an isolated and repeatable environment for running the deployed application.

8. Shell Utility

The utils/shell.js file provides reusable shell command execution functionality.

This utility allows the backend services to execute required system commands without duplicating command-execution logic throughout the project.

The architecture can therefore follow:

Service
   |
   v
Shell Utility
   |
   v
Operating System Command
   |
   v
Command Result

9. Deployment Workspace

The backend contains a deployments directory used to store deployment-related application files.

Example:

backend/
└── deployments/
    └── firstrepo-<deployment-id>/
        └── index.html

The deployment identifier is generated for the deployment and can be used as part of the deployment path.

Complete Deployment Flow

The complete current workflow can be represented as:

USER
                           |
                           v
                  GitHub Repository URL
                           |
                           v
                  +-------------------+
                  | React Frontend    |
                  |      + Vite       |
                  +---------+---------+
                            |
                            | Axios
                            v
                  +-------------------+
                  | Express REST API  |
                  +---------+---------+
                            |
                            v
                  +-------------------+
                  | Deployment        |
                  | Controller        |
                  +---------+---------+
                            |
                            v
                  +-------------------+
                  | Deployment        |
                  | Service           |
                  +----+---------+----+
                       |         |
                       v         v
                +----------+ +----------+
                |   Git    | |  Docker  |
                | Service  | | Service  |
                +----+-----+ +----+-----+
                     |            |
                     v            v
                  GitHub      Docker Engine
                                  |
                                  v
                            Container
                                  |
                                  v
                         Deployed Website
                                  |
                                  v
                         Deployment URL

Request Flow

When the user clicks the Deploy button:

Step 1 — User Input

The user provides a GitHub repository URL through the frontend.

Step 2 — API Request

The frontend sends the repository information to:

POST /api/deploy

using Axios.

Step 3 — Route Handling

Express receives the request through the deployment route.

Step 4 — Controller

The deployment controller processes the incoming request.

Step 5 — Deployment Service

The deployment service coordinates the required deployment operations.

Step 6 — Git Operation

The Git service handles repository cloning.

Step 7 — Docker Operation

The Docker service performs the Docker-related deployment operations.

Step 8 — Deployment

The application is started in the deployment environment.

Step 9 — Response

The backend returns deployment information to the frontend.

Step 10 — User Access

The frontend displays the deployment result and the user can access the deployed application.

Architectural Principles

The project follows several important software engineering principles.

Modularity

Git, Docker, deployment orchestration, and shell command execution are separated into different modules.

Separation of Responsibilities

Each module has a specific responsibility instead of putting the complete deployment logic into a single file.

Reusability

Common operations such as shell command execution are placed into reusable utilities.

Maintainability

The modular structure makes it easier to debug and add new deployment capabilities.

Extensibility

The architecture can be extended in the future with:

Nginx

Automatic port allocation

CI/CD

Jenkins

Terraform

AWS EC2

Route 53

CloudWatch

Kubernetes


Future Cloud Architecture

The current project can later be extended to a cloud-based architecture.

USER
                         |
                         v
                  React Frontend
                         |
                         v
                    EC2 Server
                         |
                 +-------+-------+
                 |               |
                 v               v
              Backend         Nginx
                 |
        +--------+--------+
        |                 |
        v                 v
      GitHub           Docker
                          |
                          v
                    Application
                          |
                          v
                     Public URL

Future infrastructure automation can be implemented using Terraform, while CI/CD can be added using Jenkins.

Architecture Summary

The One-Click DevOps Deployment Platform uses a modular architecture in which the React frontend communicates with a Node.js/Express backend.

The backend separates deployment responsibilities across controllers, routes, services, and utilities. Git and Docker are integrated as independent services within the deployment workflow.

This architecture provides a clean foundation for transforming the current educational deployment platform into a more advanced cloud-based DevOps platform.

Next Document

Continue with:

📄 03_Project_Structure.md

