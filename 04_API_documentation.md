# API Documentation

## Project Title

One-Click DevOps Deployment Platform

## Introduction

The One-Click DevOps Deployment Platform uses a REST API to establish communication between the React frontend and the Node.js/Express backend.

The frontend sends the GitHub repository URL to the backend through an HTTP request. The backend receives the request, processes the deployment workflow, and returns the deployment result to the frontend.

The API layer provides a clean separation between the user interface and backend deployment operations.

## API Architecture

The communication flow between the frontend and backend is:

```text
User
  ↓
React Frontend
  ↓
Axios
  ↓
REST API
  ↓
Express Route
  ↓
Deployment Controller
  ↓
Deployment Service
  ↓
Git / Docker Services
  ↓
Deployment Result
  ↓
Express Response
  ↓
Axios
  ↓
React Frontend

Base URL

During local development, the backend runs on:

http://localhost:5000

Therefore, the API base URL is:

http://localhost:5000/api

When the project is deployed on an AWS EC2 instance, the backend URL can be accessed using the EC2 public IP or a configured domain.

Example:

http://EC2_PUBLIC_IP:5000

> The exact production URL depends on the EC2 and reverse-proxy configuration.




---

API Endpoints

1. Deploy Repository

Endpoint

POST /api/deploy

Full Local URL

http://localhost:5000/api/deploy

Purpose

This endpoint starts the application deployment workflow using the GitHub repository URL provided by the user.

The backend receives the repository URL and passes it to the deployment workflow.

Request Method

POST

Request Headers

The request uses JSON data.

Content-Type: application/json

Request Body

The request body contains the GitHub repository URL.

{
  "repositoryUrl": "https://github.com/username/repository.git"
}

Parameter

Parameter	Type	Required	Description

repositoryUrl	String	Yes	GitHub repository URL that should be deployed


Example Request

POST http://localhost:5000/api/deploy
Content-Type: application/json

{
  "repositoryUrl": "https://github.com/username/repository.git"
}


---

Frontend API Integration

The React frontend communicates with the backend through the API service:

frontend/
└── src/
    └── services/
        └── api.js

The api.js file contains the frontend-side API communication logic.

The general communication flow is:

App.jsx
   ↓
api.js
   ↓
Axios
   ↓
POST /api/deploy
   ↓
Express Backend

Axios Request Flow

The frontend sends the repository URL to the backend.

Conceptually:

axios.post("/api/deploy", {
  repositoryUrl: repositoryUrl
});

The actual implementation should remain synchronized with the current frontend/src/services/api.js file.


---

Backend API Flow

The deployment request passes through multiple backend layers.

POST /api/deploy
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
Deployment Result

Each layer has a specific responsibility.

Route Layer

File:

backend/src/routes/deployment.routes.js

The route defines the deployment endpoint and forwards the request to the deployment controller.

Controller Layer

File:

backend/src/controllers/deployment.controller.js

The controller handles the incoming request and communicates with the deployment service.

Service Layer

File:

backend/src/services/deployment.service.js

The deployment service coordinates the overall deployment process.

Git Service

File:

backend/src/services/git.service.js

The Git service handles GitHub repository-related operations.

Docker Service

File:

backend/src/services/docker.service.js

The Docker service handles Docker-related deployment operations.

Shell Utility

File:

backend/src/utils/shell.js

The shell utility provides reusable functionality for executing required system commands.


---

Deployment API Workflow

When the user clicks the Deploy button, the following process takes place:

1. User enters GitHub repository URL
                ↓
2. User clicks Deploy
                ↓
3. React frontend receives the action
                ↓
4. Axios sends POST request
                ↓
5. Express receives /api/deploy
                ↓
6. Deployment route handles request
                ↓
7. Deployment controller processes request
                ↓
8. Deployment service starts workflow
                ↓
9. Git service handles repository
                ↓
10. Docker service performs Docker operations
                ↓
11. Application deployment is created
                ↓
12. Backend returns deployment information
                ↓
13. Frontend displays deployment result


---

Successful Deployment Response

After a successful deployment, the backend returns deployment information to the frontend.

A conceptual response can contain:

{
  "success": true,
  "message": "Deployment successful",
  "url": "http://localhost:5000/deployments/<deployment-id>/"
}

> The exact response fields must always match the implementation in deployment.controller.js. The example above represents the intended response structure and should not be treated as a fixed API contract if the source code uses different field names.




---

Deployment URL

Deployed application files are served through the backend deployment path.

General format:

http://localhost:5000/deployments/<deployment-id>/

Example:

http://localhost:5000/deployments/firstrepo-<deployment-id>/

The deployment ID is generated for the deployment.

The deployment directory may contain application files such as:

deployments/
└── firstrepo-<deployment-id>/
    └── index.html


---

Error Handling

Deployment operations can fail at different stages.

Possible failure areas include:

Repository Error

Invalid GitHub URL

Git Error

Repository clone failed

Docker Error

Docker image build failed

Container Error

Docker container failed to start

Command Execution Error

Shell command execution failed

The backend should return an appropriate HTTP error response when a deployment operation fails.


---

API Error Flow

API Request
    ↓
Validation / Processing
    ↓
Error?
  /   \
Yes    No
 |      |
 v      v
Error   Deployment
Response Successful
          |
          v
       Response

The frontend can use the returned response to display an appropriate deployment status to the user.


---

API Testing

The deployment endpoint can be tested using PowerShell.

PowerShell Example

Invoke-RestMethod `
  -Uri "http://localhost:5000/api/deploy" `
  -Method Post `
  -ContentType "application/json" `
  -Body '{"repositoryUrl":"https://github.com/username/repository.git"}'

Replace the repository URL with a valid GitHub repository.


---

Testing with Postman

The API can also be tested using Postman.

Method

POST

URL

http://localhost:5000/api/deploy

Header

Content-Type: application/json

Body

Select:

raw → JSON

Then provide:

{
  "repositoryUrl": "https://github.com/username/repository.git"
}

Click:

Send

The response will show the result returned by the backend.


---

API Testing Checklist

Before considering the API ready, verify:

[ ] Backend server is running.

[ ] Frontend can communicate with backend.

[ ] POST /api/deploy is accessible.

[ ] JSON request body is accepted.

[ ] repositoryUrl is received correctly.

[ ] Git repository processing starts.

[ ] Docker deployment operations execute.

[ ] Deployment result is returned.

[ ] Frontend displays the result.

[ ] Deployment URL can be accessed.



---

Local API Example

Frontend
   |
   | POST /api/deploy
   | repositoryUrl
   v
http://localhost:5000
   |
   v
Express Backend
   |
   v
Deployment Workflow
   |
   v
Deployment URL


---

EC2 API Example

When the project is deployed on an AWS EC2 instance, the architecture can become:

User
  |
  v
EC2 Public IP / Domain
  |
  v
React Frontend
  |
  v
Node.js + Express
  |
  v
POST /api/deploy
  |
  v
Git + Docker
  |
  v
Deployed Application

For example:

http://EC2_PUBLIC_IP:5000/api/deploy

For production use, a reverse proxy such as Nginx can later be placed in front of the backend so that users do not need to expose the Node.js port directly.


---

Future API Enhancements

The API can be extended in future versions with additional endpoints.

Deployment History

GET /api/deployments

Deployment Details

GET /api/deployments/:id

Stop Deployment

POST /api/deployments/:id/stop

Restart Deployment

POST /api/deployments/:id/restart

Delete Deployment

DELETE /api/deployments/:id

> These endpoints are planned enhancements and are not part of the current core implementation unless implemented in the source code.




---

API Security Considerations

Future production versions should include:

Strong input validation

Authentication

Authorization

Rate limiting

Request logging

Secure secret management

Repository access control

Container isolation

Resource limits


Sensitive credentials should never be included directly in API requests or committed to the GitHub repository.


---

API Architecture Summary

The API layer provides the communication bridge between the React frontend and the deployment backend.

The current architecture follows:

React
  ↓
Axios
  ↓
Express Route
  ↓
Controller
  ↓
Deployment Service
  ↓
Git + Docker
  ↓
Deployment
  ↓
API Response
  ↓
React

This separation allows the project to evolve from a basic deployment automation application into a more advanced DevOps platform.

Next Document

Continue with:

📄 05_Milestones.md
