# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
npm run dev         # Start development server on http://localhost:3000

# Build and production
npm run build       # Build for production
npm run start       # Start production server

# Code quality
npm run lint        # Run ESLint
```

## Architecture Overview

This is a Next.js 15 application with TypeScript that serves as the frontend for a job posting platform. It connects to a .NET backend API.

### Key Technologies
- **Next.js 15** with App Router
- **TypeScript** with strict mode enabled
- **React Query (TanStack Query)** for server state management
- **Axios** for API calls with JWT authentication
- **React Hook Form** for form handling
- **Tailwind CSS** for styling
- **React Toastify** for notifications

### Project Structure

- **`/src/api/`**: API layer
  - `api-instance.ts`: Axios instance with JWT interceptor
  - `apiAuth.ts`: Authentication endpoints (login, register)
  - `apiServices.ts`: Job posting CRUD operations

- **`/src/app/`**: Next.js App Router pages
  - `/identity/account/`: Authentication pages (login/register)
  - `/jobPostings/`: Job posting pages (list, create, update, detail views)

- **`/src/hooks/`**: Custom React Query hooks for mutations and queries
  - Each API operation has a dedicated hook (e.g., `useLogin`, `useCreatePost`)

- **`/src/components/`**: Reusable React components
  - `QueryProvider.tsx`: React Query provider wrapper
  - UI components: `Navbar`, `Footer`, `JobPostings`, `Button`

### Authentication Flow
- JWT tokens stored in localStorage
- Axios interceptor automatically attaches Bearer token to requests
- Protected endpoints use `axiosInstance`, public endpoints use plain `axios`

### Environment Variables
- `NEXT_PUBLIC_API_URL`: Backend API base URL

### Path Aliases
- `@/*` maps to `./src/*` for cleaner imports