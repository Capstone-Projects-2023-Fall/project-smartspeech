---
sidebar_position: 4
---

# Development Environment

## Software

### Technologies

#### Development

-   Text Editor / IDE : any, prefer: `VSCode`
    -   Development can be done with any tool including simple text editors like `vim`/`notepad`. _However_, the current repository follows formatting rules defined by Typescript/TSX mode on [prettier](https://prettier.io/) which is why a highly configurable text editor is preferred like `VSCode`
-   JavaScript Package Manager: `npm`
    -   The `npm` or `node package manager` is used to handle the organization of external tooling and packages. It allows us to see which modules are used as defined in the `package.json/package-lock.json`
-   Python Package Manager: `pip`
    -   `pip` is used to manage all backend technologies.

**Frameworks and Langauges**:

-   JavaScript / TypeScript

    -   NextJs 13: ReactJs Wrapper with Server Rendering with API routes
    -   Jest: Testing for React Components used in NextJs pages

-   Python
    -   FastAPI: Backend framework with a modern Python runtime

#### Testing

-   React Component Testing: `jest`
    -   React Component Testing is done via `jest` since it is easy to integrate within the frontend workflow. Tests can be ran with `npm run test`. The `test` command is alias to run a `jest` coverage report on each tested component.

#### Deployment on AWS

Currently[^1], the backend for this application will be hosted on AWS EC2 Virtual Machines as defined by the Terraform (Infrastructure as Code) layout.

## Hardware

There is no hardware used in this project.

[^1]: The plan is to move to a containerized backend to easily trigger CI/CD updates. The current Terraform layout (EC2 VMs) is borrowed from a previous project.
