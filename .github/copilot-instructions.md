# TripMate – GitHub Copilot Instructions

## Project Overview

TripMate is a personal travel planner web application that helps users organize trips, destinations, travel dates, and activities.

## Technology Stack

- Next.js 16 with App Router
- React 19
- TypeScript 5 with strict mode
- Tailwind CSS 4
- Prisma ORM 7
- SQLite for local database persistence
- ESLint
- Prettier

## Project Architecture

- Use the Next.js App Router.
- Keep application pages and layouts inside the `app/` directory.
- Build reusable React components.
- Separate database access and business logic from UI components.
- Use TypeScript interfaces and types for application data.
- Follow the existing project structure and conventions.

## Core Data Model

The planned database includes these entities:

### User

- id
- name
- email (unique)
- passwordHash
- createdAt

### Trip

- id
- userId (relationship with User)
- name
- destination
- startDate
- endDate
- createdAt
- updatedAt

### Activity

- id
- tripId (relationship with Trip)
- name
- description (optional)
- date
- location (optional)
- createdAt

### Relationships

- A User can have multiple Trips.
- Each Trip belongs to one User.
- A Trip can have multiple Activities.
- Each Activity belongs to one Trip.

## Core Features

- User registration and login.
- Create, view, edit, and delete trips.
- Manage activities associated with trips.
- Display trip details, destinations, and travel dates.
- Responsive design for desktop, tablet, and mobile devices.

## Coding Standards

- Use TypeScript for application code.
- Prefer functional React components.
- Keep components small and reusable.
- Use clear and descriptive names.
- Validate user input.
- Handle errors appropriately.
- Use asynchronous operations correctly.
- Follow ESLint and Prettier rules.
- Avoid duplicating code.

## Security

- Never store passwords as plain text.
- Hash passwords securely before storing them.
- Protect routes and user-specific trip data.
- Never expose environment variables or secrets.
- Never commit `.env` files.

## Database Guidelines

- Use Prisma for database access.
- Use SQLite as the current database provider.
- Keep the Prisma schema consistent with the application data models.
- Maintain relationships and referential integrity.
- Do not change the database provider without team approval.

## Design Guidelines

- Use Tailwind CSS for styling.
- Maintain consistent colors, typography, and spacing.
- Create a clean and intuitive travel-planning experience.
- Ensure all pages are responsive and accessible.

