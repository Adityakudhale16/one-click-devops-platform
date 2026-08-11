# API Prompt Guide

## Introduction

Artificial Intelligence (AI) tools such as ChatGPT, Claude, GitHub Copilot, and Gemini can significantly improve productivity during software development.

However, AI tools should be used as learning assistants and development support tools, not as replacements for understanding programming, software engineering, DevOps, and Cloud concepts.

The objective of this guide is to help students use AI effectively while developing the One-Click DevOps Deployment Platform.

The focus should always remain on understanding the architecture, implementation, debugging process, and deployment workflow.

---

# AI Usage Policy

Students are encouraged to use AI tools for:

- Understanding technical concepts.
- Learning new technologies.
- Debugging errors.
- Writing clean and maintainable code.
- Improving documentation.
- Learning software engineering best practices.
- Understanding DevOps and Cloud concepts.
- Reviewing code.
- Improving project architecture.

Students should **NOT** use AI to generate the complete project in a single prompt.

The purpose of this project is to understand the architecture and implementation, not simply copy and paste AI-generated code.

---

# Recommended AI Tools

The following AI tools can be used as development assistants:

- ChatGPT
- Claude
- GitHub Copilot
- Gemini

The choice of AI tool is left to the developer.

---

# General Rules

## Good Practice

Generate and understand **one module at a time**.

### Example

```text
Generate Git Service only.

This allows the developer to understand, test, and debug each module independently.


---

Bad Practice

Build my complete project.

This can produce a large amount of code that may be difficult to:

Understand.

Debug.

Test.

Maintain.

Integrate with the existing project.



---

Development Workflow

Always follow the following development process:

Read Requirement
       ↓
Understand Problem
       ↓
Design Solution
       ↓
Ask AI for One Module
       ↓
Understand Generated Code
       ↓
Implement
       ↓
Test
       ↓
Commit to GitHub
       ↓
Move to Next Module

This workflow ensures that AI supports the learning process instead of replacing it.


---

Golden Rules

Rule 1

Never ask AI to generate the entire project.

Rule 2

Generate only one file or module at a time.

Rule 3

Understand every important part of the generated code before using it.

Rule 4

Test every module before moving forward.

Rule 5

Do not modify code that you do not understand.

Rule 6

Always verify AI-generated code against the actual project structure.

Rule 7

Never expose passwords, API keys, private keys, or other secrets to AI tools.


---

Recommended Prompt

The following prompt can be used whenever development assistance is required.

You are a Senior Software Engineer and DevOps Architect.

I am building a project called "One-Click DevOps Deployment Platform."

The goal is to create a deployment platform similar to modern deployment platforms such as Render or Railway.

Technology Stack

Frontend
- React
- JavaScript
- HTML
- CSS
- Axios

Backend
- Node.js
- Express

DevOps
- Git
- Docker
- Jenkins
- Nginx
- Terraform

Cloud
- AWS EC2
- Route53
- IAM

Architecture

Browser
   ↓
React
   ↓
Express API
   ↓
Controller
   ↓
Deployment Service
   ↓
Git Service
   ↓
Shell Utility
   ↓
Git Clone

Rules

1. Follow SOLID principles.
2. Use clean and maintainable code.
3. Follow one responsibility per file.
4. Controllers should not contain business logic.
5. Services should contain business logic.
6. shell.js should be the centralized utility for shell command execution.
7. Use async/await where appropriate.
8. Handle errors properly.
9. Explain the purpose of the requested file before generating code.
10. Generate production-oriented code suitable for this project.
11. Follow the existing project structure.
12. Do not modify unrelated files.

Generate ONLY the requested file or module.

Do not generate the complete project.


---

Example Prompts

Generate Express Server

Create a clean Express server for this project.

Requirements:

- server.js
- app.js
- Environment Variables
- Error Handling
- Clean Code
- CORS configuration

Follow the existing project architecture.

Generate only the requested files.
Do not generate the complete project.


---

Generate Git Service

Generate only git.service.js.

Responsibilities:

- Validate GitHub URL.
- Create deployment folder.
- Clone repository.
- Return workspace path.
- Handle Git errors.

Use async/await.

Do not generate any other files.

Explain the responsibility of the service before generating the code.


---

Generate Docker Service

Generate only docker.service.js.

Responsibilities:

- Validate Dockerfile availability.
- Build Docker image.
- Run Docker container.
- Handle container execution.
- Stop container when required.
- Remove container when required.
- Handle Docker errors.

Use async/await.

Do not generate unrelated files.


---

Generate Controller

Generate deployment.controller.js.

Requirements:

- Receive HTTP request.
- Read repositoryUrl.
- Validate required input.
- Call Deployment Service.
- Return JSON response.
- Handle errors.

Do not include Git or Docker business logic inside the controller.

Generate only the controller file.


---

Generate React Component

Generate Deploy.jsx for the One-Click DevOps Deployment Platform.

Requirements:

- GitHub repository URL input.
- Deploy button.
- Axios API call.
- Loading state.
- Error handling.
- Deployment result display.

Keep API communication separate from the UI component where possible.

Generate only the requested component.


---

Debugging Prompt

Instead of asking:

Fix my code.

Use:

Explain why this code is failing.

Do not rewrite the complete file.

Identify the root cause.

Suggest the smallest possible fix.

Explain why the fix works.

Do not modify unrelated code.

This approach improves understanding and reduces unnecessary changes.


---

Refactoring Prompt

Review my code like a Senior Software Engineer.

Check for:

- Code quality
- Readability
- Naming conventions
- SOLID principles
- Separation of concerns
- Performance
- Error handling
- Security
- Maintainability
- Best practices

Do not rewrite the entire project.

Only identify problems and suggest targeted improvements.


---

Documentation Prompt

Generate professional Markdown documentation for this module.

Include:

- Overview
- Purpose
- Responsibilities
- Architecture
- Workflow
- Inputs
- Outputs
- Dependencies
- Example
- Error handling

Document only the functionality that is actually implemented.

Clearly mark planned features as future enhancements.


---

Security Prompt

Review this backend code for security vulnerabilities.

Check for:

- Command Injection
- SQL Injection
- Path Traversal
- Hardcoded Secrets
- Input Validation
- Unsafe Shell Commands
- Authentication
- Authorization
- Error Handling
- Sensitive Information Exposure

Suggest secure alternatives.

Do not provide methods for bypassing security controls.


---

Docker Prompt

Review my Dockerfile.

Check:

- Image size
- Security
- Layers
- Build performance
- Runtime configuration
- Dependency management
- Best practices

Explain each improvement.

Do not rewrite unrelated project files.


---

AWS Prompt

Review my AWS architecture for the One-Click DevOps Deployment Platform.

Check:

- IAM permissions
- Security Groups
- EC2 configuration
- Networking
- Availability
- Security
- Cost optimization
- Monitoring
- AWS best practices

Suggest improvements.

Clearly separate current implementation from planned improvements.


---

Git Prompt

Use AI to generate meaningful Git commit messages.

Suggest meaningful Git commit messages for my changes.

Use Conventional Commits.

Examples:

feat:
fix:
refactor:
docs:
test:
chore:

Example

feat: add GitHub repository deployment API

fix: resolve Docker container startup issue

docs: add API documentation


---

Things You Should Never Ask AI

Avoid asking AI to:

❌ Build the complete project in one prompt.

❌ Generate hundreds of files without understanding them.

❌ Write code without explanation.

❌ Ignore error handling.

❌ Skip security considerations.

❌ Skip testing.

❌ Skip documentation.

❌ Generate insecure code.

❌ Expose passwords or secret keys.

❌ Modify the complete project when only one file has an issue.


---

AI is a Mentor, Not a Replacement

Think of AI as a senior engineer assisting you during development.

Good Workflow

You
 ↓
Think
 ↓
Design
 ↓
Ask AI
 ↓
Understand
 ↓
Implement
 ↓
Test
 ↓
Improve

Bad Workflow

You
 ↓
Ask AI
 ↓
Copy
 ↓
Paste
 ↓
Submit

The first workflow builds technical skills.

The second workflow creates dependency without developing a proper understanding of the project.


---

Project-Specific AI Strategy

For the One-Click DevOps Deployment Platform, development should progress incrementally.

Recommended development order:

Frontend
   ↓
Backend API
   ↓
Git Service
   ↓
Docker Service
   ↓
Port Service
   ↓
Health Service
   ↓
Socket.IO
   ↓
Nginx
   ↓
Jenkins
   ↓
Terraform
   ↓
AWS

Each module should be:

Designed
   ↓
Implemented
   ↓
Tested
   ↓
Documented
   ↓
Committed

Do not jump to later milestones before understanding and testing the earlier modules.


---

API Development Prompt Strategy

When working specifically on APIs, follow this sequence:

API Requirement
      ↓
Endpoint Design
      ↓
Request Structure
      ↓
Response Structure
      ↓
Route
      ↓
Controller
      ↓
Service
      ↓
Validation
      ↓
Error Handling
      ↓
Testing
      ↓
Documentation

For example:

POST /api/deploy

should be understood in terms of:

HTTP method.

Endpoint.

Request body.

Validation.

Controller.

Deployment service.

Response.

Error handling.

Testing.



---

Best Practices

Follow these practices when using AI:

Ask one question at a time.

Keep prompts specific.

Provide only relevant code.

Provide the actual error message.

Mention the actual project structure.

Read AI responses carefully.

Understand generated code.

Test everything locally.

Use Git for version control.

Commit after completing a milestone.

Update documentation regularly.

Review security-sensitive code manually.



---

AI-Assisted Debugging Process

When an error occurs:

Error Occurs
     ↓
Read Error Message
     ↓
Identify Affected File
     ↓
Provide Relevant Code to AI
     ↓
Ask for Root Cause
     ↓
Understand Suggested Fix
     ↓
Apply Minimal Change
     ↓
Test
     ↓
Commit Fix

This prevents unnecessary modifications to working parts of the project.


---

AI and GitHub Workflow

AI-assisted development should still follow proper version control.

Development
    ↓
Test
    ↓
Review
    ↓
Git Status
    ↓
Git Add
    ↓
Git Commit
    ↓
Git Push
    ↓
GitHub

A meaningful commit should represent a specific change.

Examples:

feat: add deployment API

fix: handle invalid GitHub repository URL

docs: add project architecture documentation


---

Final Advice

The goal of this project is not to see how quickly AI can generate code.

The goal is to understand how a real-world deployment platform is:

Designed.

Developed.

Tested.

Debugged.

Containerized.

Deployed.

Documented.

Maintained.


Use AI to learn, improve, debug, and solve problems — not to skip the learning process.

The developer should always remain responsible for understanding and validating the final implementation.


---

Conclusion

AI can be a powerful development assistant when used correctly.

By following a modular development process, developers can use AI to improve productivity while still developing strong software engineering, DevOps, and Cloud skills.

The recommended approach is:

Understand
   ↓
Design
   ↓
Ask AI
   ↓
Review
   ↓
Implement
   ↓
Test
   ↓
Document
   ↓
Commit

This approach ensures that AI supports the development of the One-Click DevOps Deployment Platform without replacing the developer's understanding of the system.


---

Next Document

Continue with:

📄 07_Submission_Guidelines.md
