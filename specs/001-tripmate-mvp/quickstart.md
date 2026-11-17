# TripMate MVP Quickstart

## Local setup

1. Install project dependencies:
   ```bash
   npm install
   ```
2. Create the database schema for the MVP:
   ```bash
   npx prisma init --datasource-provider sqlite
   ```
   If Prisma is already initialized, skip this step and update the schema with the User, Trip, and Activity models.
3. Apply the schema:
   ```bash
   npx prisma db push
   ```
4. Generate the Prisma client:
   ```bash
   npx prisma generate
   ```
5. Start the app in development mode:
   ```bash
   npm run dev
   ```
6. Open the app at `http://localhost:3000`.

## Primary flows

- Register a new account.
- Log in with the new account.
- Create a trip with a title, destination, and date range.
- Open the trip detail view to add activities.
- Update or delete a trip and its associated activities.
- Verify that unauthorized users cannot access another user’s trip data.

## Validation checks

- Run linting:
  ```bash
  npm run lint
  ```
- Run a production build:
  ```bash
  npm run build
  ```
- Validate auth and access checks with manual browser testing or integration tests for the protected routes.
