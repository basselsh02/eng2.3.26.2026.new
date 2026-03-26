# Engineering System Template Guide

This repository has been cleaned to act as a reusable starter template for new projects.

## Structure

- `Engineering-System-Frontend-main/`: Vite + React template frontend.
- `Engineering-System-Backend-main/`: Express template backend.

## Frontend template behavior

The frontend intentionally keeps only:

- Shared UI component library (`src/components/ui`).
- Layout shell (`MainLayout`) with:
  - top navbar,
  - side navbar.
- Allowed existing page:
  - `Forbidden` page.
- New starter page:
  - `TemplateHome` page as the landing dashboard.

### Current routes

- `/` → `TemplateHome`
- `/forbidden` → `Forbidden`

### How to start a new frontend project from this template

1. Create your feature pages under `src/components/pages/<FeatureName>/`.
2. Register routes in `src/App.jsx`.
3. Add side navigation links in `src/components/ui/Sidebar/Sidebar.jsx`.
4. Reuse components from `src/components/ui/*`.
5. Add redux slices only when needed in `src/features/*` and wire them in `src/app/store.js`.

## Backend template behavior

The backend is reduced to a minimal secure API skeleton with:

- common middleware (helmet, cors, json parser, urlencoded parser, rate limiter),
- root endpoint (`/`),
- health endpoint (`/api/health`),
- 404 handler.

### How to start a new backend project from this template

1. Add route files in `src/routes/`.
2. Mount new routes in `server.js` (for example `app.use('/api/projects', projectsRouter)`).
3. Add service and persistence layers as needed.
4. Keep environment values in `.env` (e.g., `PORT`, `FRONTEND_ORIGIN`).
5. Add tests once domain logic is introduced.

## Recommended new-project workflow

1. Define domain modules and entities.
2. Implement backend routes first.
3. Implement frontend pages and connect API calls.
4. Add auth/permissions only if required by your new project.
5. Keep UI primitives reusable and avoid feature-specific logic in shared components.

## Run commands

### Frontend

```bash
cd Engineering-System-Frontend-main
npm install
npm run dev
```

### Backend

```bash
cd Engineering-System-Backend-main
npm install
npm run dev
```
