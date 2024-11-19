# GitHub TypeScript Repositories Viewer

A simple React application to browse the most popular TypeScript repositories on GitHub. The project uses the GitHub REST API to fetch data and includes features like pagination and loading state management.

## Features
Fetches the top TypeScript repositories from GitHub.
Displays repository details: name, description, stars, and more.
Pagination to navigate through repositories.
Preloader during data fetching.
Error handling and request cancellation using AbortController.

## Stack
React: For building the user interface.
TypeScript: For static type checking.
Styled-Components: For component-level styling.
Axios: For API requests.

## Attention
Create a .env file in the root of the project and add your GitHub token:
VITE_GITHUB_TOKEN=your_github_personal_access_token
