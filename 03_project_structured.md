# Project Structure

## Project Title

One-Click DevOps Deployment Platform

## Introduction

The One-Click DevOps Deployment Platform is organized into two primary application layers:

- Frontend
- Backend

The frontend is responsible for the user interface and communication with the backend API.

The backend is responsible for deployment processing, GitHub repository handling, Docker operations, deployment management, and serving deployed application files.

The project follows a modular structure so that each component has a clearly defined responsibility.

## Complete Project Structure

```text
one-click-devops-platform/
│
├── backend/
│   │
│   ├── deployments/
│   │   └── firstrepo-<deployment-id>/
│   │       └── index.html
│   │
│   ├── src/
│   │   │
│   │   ├── controllers/
│   │   │   └── deployment.controller.js
│   │   │
│   │   ├── deployments/
│   │   │   └── firstrepo-<deployment-id>/
│   │   │       └── index.html
│   │   │
│   │   ├── routes/
│   │   │   └── deployment.routes.js
│   │   │
│   │   ├── services/
│   │   │   ├── deployment.service.js
│   │   │   ├── docker.service.js
│   │   │   └── git.service.js
│   │   │
│   │   ├── utils/
│   │   │   └── shell.js
│   │   │
│   │   ├── app.js
│   │   └── server.js
│   │
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   │
│   ├── public/
│   │
│   ├── src/
│   │   │
│   │   ├── assets/
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   ├── main.css
│   │   └── main.jsx
│   │
│   ├── dist/
│   │
│   ├── index.html
│   ├── eslint.config.js
│   ├── package.json
│   ├── package-lock.json
│   └── README.md
│
├── documentation/
│   ├── 01_Project_Overview.md
│   ├── 02_Architecture.md
│   ├── 03_Project_Structure.md
│   ├── 04_API_Documentation.md
│   ├── 05_Milestones.md
│   ├── 06_AI_Prompt_Guide.md
│   ├── 07_Submission_Guide.md
│   ├── 08_Future_Enhancements.md
│   └── README.md
│
└── README.md

> node_modules/ directories are intentionally not shown in the documentation because they are generated dependencies and should normally be excluded from GitHub using .gitignore.



1. Backend

The backend directory contains the server-side application responsible for handling deployment requests and performing deployment operations.

backend/
│
├── deployments/
├── src/
├── package.json
└── package-lock.json

Backend Responsibilities

The backend is responsible for:

Handling REST API requests

Processing GitHub repository URLs

Managing deployment workflows

Cloning repositories

Performing Docker operations

Executing shell commands

Managing deployment workspaces

Serving deployed application files



---

Backend Source Structure

2. backend/src

The src directory contains the main backend source code.

backend/src/
│
├── controllers/
├── deployments/
├── routes/
├── services/
├── utils/
├── app.js
└── server.js

The backend source is divided into separate modules according to their responsibilities.


---

3. Controllers

backend/src/controllers/
└── deployment.controller.js

deployment.controller.js

The deployment controller handles deployment-related API requests.

Responsibilities

Receive the API request.

Read the repository URL from the request.

Call the deployment service.

Return the deployment result.

Handle deployment-related errors.


The controller acts as a bridge between the API route and the deployment service.

API Request
     ↓
Controller
     ↓
Deployment Service
     ↓
Response


---

4. Routes

backend/src/routes/
└── deployment.routes.js

deployment.routes.js

This file defines the deployment API route.

The main endpoint is:

POST /api/deploy

The route connects the incoming HTTP request to the deployment controller.

Responsibility

HTTP Request
     ↓
Deployment Route
     ↓
Deployment Controller

Keeping routes separate from business logic makes the backend easier to maintain.


---

5. Services

backend/src/services/
│
├── deployment.service.js
├── docker.service.js
└── git.service.js

The services directory contains the main deployment-related business logic.


---

deployment.service.js

The deployment service coordinates the overall deployment workflow.

Responsibilities

Coordinate deployment operations.

Work with the Git service.

Work with the Docker service.

Manage deployment workflow.

Return deployment information.


The service acts as the main orchestration layer.

Deployment Service
       |
       +----> Git Service
       |
       +----> Docker Service
       |
       +----> Deployment Workspace


---

git.service.js

The Git service handles GitHub repository operations.

Responsibilities

Process the GitHub repository URL.

Validate repository information where required.

Clone the repository.

Prepare the repository for deployment.


General workflow:

GitHub Repository
       ↓
Git Service
       ↓
Clone Repository
       ↓
Deployment Workspace


---

docker.service.js

The Docker service handles Docker-related operations.

Responsibilities

Prepare Docker deployment operations.

Build Docker images.

Run Docker containers.

Support the deployment workflow.


General workflow:

Application Source
       ↓
Docker Service
       ↓
Docker Build
       ↓
Docker Image
       ↓
Docker Container
       ↓
Running Application


---

6. Utils

backend/src/utils/
└── shell.js

shell.js

The shell utility provides reusable functionality for executing system commands from the Node.js backend.

Instead of implementing command execution repeatedly in multiple services, the project centralizes this functionality in the utility module.

Architecture

Backend Service
      ↓
Shell Utility
      ↓
System Command
      ↓
Command Output

This improves code reuse and keeps service files cleaner.


---

7. app.js

backend/src/app.js

app.js is responsible for configuring the Express application.

Typical responsibilities include:

Creating the Express application.

Configuring middleware.

Enabling JSON request handling.

Configuring CORS.

Registering API routes.

Configuring deployment file serving.


The application configuration is separated from the server startup logic.


---

8. server.js

backend/src/server.js

server.js is responsible for starting the Node.js/Express server.

It loads the application configuration and starts listening on the configured port.

The development backend currently uses:

Port: 5000

The general startup flow is:

server.js
   ↓
Express Application
   ↓
Middleware + Routes
   ↓
Server Listening


---

9. Backend Deployment Directory

backend/deployments/

The deployments directory is used for deployment-related application files.

Example:

backend/
└── deployments/
    └── firstrepo-<deployment-id>/
        └── index.html

The deployment identifier is generated for the deployment.

This directory allows the backend to serve deployed application content.


---

10. Frontend

The frontend directory contains the React/Vite application.

frontend/
│
├── public/
├── src/
├── dist/
├── index.html
├── eslint.config.js
├── package.json
├── package-lock.json
└── README.md

Frontend Responsibilities

The frontend is responsible for:

Providing the user interface.

Accepting the GitHub repository URL.

Sending deployment requests.

Displaying deployment status.

Displaying deployment information.



---

11. Frontend src

frontend/src/
│
├── assets/
├── services/
├── App.jsx
├── App.css
├── index.css
├── main.css
└── main.jsx


---

12. Assets

frontend/src/assets/

The assets directory contains frontend assets used by the application.

These may include images and other static resources required by the user interface.


---

13. API Service

frontend/src/services/
└── api.js

api.js

The API service contains the frontend-side communication logic for interacting with the backend.

Axios is used to send HTTP requests from the React application to the Express API.

General flow:

React Component
      ↓
api.js
      ↓
Axios
      ↓
Express Backend

The deployment API is accessed through:

POST /api/deploy


---

14. App.jsx

frontend/src/App.jsx

App.jsx is the main React application component.

Responsibilities

Render the main deployment interface.

Accept the GitHub repository URL.

Trigger the deployment request.

Manage frontend state.

Display deployment results.


The main user interaction happens through this component.


---

15. CSS Files

The project contains multiple CSS files:

App.css
index.css
main.css

These files are responsible for styling the frontend application.

They control aspects such as:

Layout

Typography

Spacing

Buttons

Input fields

Deployment interface

Responsive styling



---

16. main.jsx

frontend/src/main.jsx

main.jsx is the entry point of the React application.

It loads the main React component and connects the application to the browser DOM.

General flow:

main.jsx
   ↓
App.jsx
   ↓
React UI


---

17. public

frontend/public/

The public directory contains static frontend files that can be served directly by the Vite application.


---

18. dist

frontend/dist/

The dist directory contains the production build generated by Vite after running:

npm run build

The contents of this directory are generated files and normally do not need to be manually edited.


---

19. Package Management Files

Both frontend and backend contain:

package.json
package-lock.json

package.json

Defines:

Project metadata

Dependencies

Scripts

Project configuration


package-lock.json

Locks the dependency versions used by the project to provide reproducible installations.


---

20. Documentation

The project documentation is organized into separate Markdown files.

documentation/
│
├── 01_Project_Overview.md
├── 02_Architecture.md
├── 03_Project_Structure.md
├── 04_API_Documentation.md
├── 05_Milestones.md
├── 06_AI_Prompt_Guide.md
├── 07_Submission_Guide.md
├── 08_Future_Enhancements.md
└── README.md

Each document focuses on a specific part of the project.

File	Purpose

01_Project_Overview.md	Project introduction, objectives and technologies
02_Architecture.md	System architecture and component communication
03_Project_Structure.md	Folder and file structure
04_API_Documentation.md	API endpoints and request flow
05_Milestones.md	Development milestones
06_AI_Prompt_Guide.md	AI-assisted development guidance
07_Submission_Guide.md	Testing and submission checklist
08_Future_Enhancements.md	Planned improvements
README.md	Main project documentation



---

21. Overall Code Organization

The complete application can be understood as:

PROJECT
                       |
          +------------+------------+
          |                         |
          v                         v
      FRONTEND                    BACKEND
          |                         |
          |                         +---- Controllers
          |                         |
          |                         +---- Routes
          |                         |
          |                         +---- Services
          |                         |       |
          |                         |       +---- Git
          |                         |       |
          |                         |       +---- Docker
          |                         |
          |                         +---- Utils
          |                         |
          |                         +---- Deployments
          |
          +---- React
          |
          +---- Axios
          |
          +---- CSS

22. Request-to-Code Flow

When a user starts a deployment, the request travels through the following components:

User
 ↓
App.jsx
 ↓
services/api.js
 ↓
Axios
 ↓
deployment.routes.js
 ↓
deployment.controller.js
 ↓
deployment.service.js
 ↓
git.service.js
 ↓
docker.service.js
 ↓
utils/shell.js
 ↓
Deployment Environment
 ↓
Deployment Result
 ↓
Frontend

This flow demonstrates the separation between the user interface, API layer, business logic, infrastructure operations, and deployment output.

23. Design Principles

The project structure follows the following principles:

Modularity

Different responsibilities are divided into separate files and directories.

Separation of Concerns

Frontend, API routes, controllers, services, utilities, and deployment files have separate responsibilities.

Reusability

Common operations such as shell command execution are centralized in utility modules.

Maintainability

A modular structure makes debugging and future development easier.

Extensibility

The current structure can be extended with additional services such as:

Nginx

Jenkins

Terraform

AWS services

Monitoring

Authentication

Kubernetes


24. Recommended GitHub Structure

For the final GitHub repository, the project can be organized as:

one-click-devops-platform/
│
├── backend/
├── frontend/
├── documentation/
├── .gitignore
└── README.md

Generated dependencies such as node_modules should not be committed to GitHub.

Conclusion

The One-Click DevOps Deployment Platform follows a clean and modular project structure.

The frontend focuses on user interaction, while the backend is divided into routes, controllers, services, utilities, and deployment workspaces.

This organization makes the project easier to understand and provides a strong foundation for future DevOps features such as CI/CD, cloud deployment, reverse proxy configuration, monitoring, authentication, and container orchestration.

Next Document

Continue with:

📄 04_API_Documentation.md
