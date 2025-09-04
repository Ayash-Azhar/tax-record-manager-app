# Tax Record Manager App

![.NET](https://img.shields.io/badge/.NET-8.0_LTS-512BD4?logo=dotnet&logoColor=white) 

![Angular](https://img.shields.io/badge/Angular-19-red?logo=angular&logoColor=white) 

![Node](https://img.shields.io/badge/Node-22.x-339933?logo=node.js&logoColor=white)

A simple, single-user web application for managing tax records. Built with **ASP.NET Core Web API** (back end) and **Angular** (front end). Create, view, edit, and delete income & deduction records. Data is stored with **EF Core InMemory** and the API is configured with **CORS** for local Angular development.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Repository Layout](#repository-layout)
  - [Backend Setup (.NET)](#backend-setup-net)
  - [Frontend Setup (Angular)](#frontend-setup-angular)
- [Usage](#usage)



## Features

- Light/dark mode toggle
- Live previews
- Fullscreen mode
- Cross platform

## Features
- **View** all tax records on the home page.
- **Add** new records (income, deductions, notes).
- **Edit** existing records (update or cancel).
- **Delete** records.


> Note: The API uses an **in-memory database** for simplicity. Data resets on API restart.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY`

`ANOTHER_API_KEY`


## Tech Stack

**Client:** React, Redux, TailwindCSS

**Server:** Node, Express

## Tech Stack
**Front end**
- Angular **19.2.15**
- Node.js **22.19.0**
- npm **10.9.3**

**Back end**
- ASP.NET Core Web API (**.NET 8.0 LTS**)
- Entity Framework Core (**InMemory** provider)
- Swagger / OpenAPI (Development)
## Architecture
- **Backend** exposes RESTful CRUD endpoints for `TaxRecord`.
- **Frontend** consumes the API with a list view and form view; supports routing.
- **CORS** enabled on the API (or use Angular dev proxy) for local development.

### Backend Setup (.NET)
-cd backend, dotnet restore, dotnet build, dotnet run



### Frontend Setup (Angular)
cd frontend/TaxRecordClient
, npm install
, ng serve -o


## Usage
1. **Home Page** lists all tax records.
2. **Add Record** → click “Add New Record”.
3. **Edit Record** → click a record title or “Edit”; submit or cancel.
4. **Delete Record** → click “Delete”.
