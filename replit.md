# Civil Engineering Portfolio

## Overview

This is a professional portfolio website for a civil engineer, designed to showcase projects, credentials, experience, and services. The application follows a hybrid design approach inspired by Behance's project showcases, Apple's product presentation clarity, and Linear's precision typography, with emphasis on large-scale project imagery and professional presentation.

The platform serves as a digital resume and client engagement tool, featuring a contact form for potential clients to reach out with project inquiries. The system is built as a single-page application with smooth scrolling navigation between sections.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React with TypeScript, using Vite as the build tool and development server.

**Routing**: Wouter for lightweight client-side routing (currently single-page with home and 404 routes).

**UI Component Library**: Shadcn UI with Radix UI primitives for accessible, composable components. Uses the "new-york" style variant with neutral base color scheme.

**Styling**: Tailwind CSS with custom design tokens defined in CSS variables. The design system includes:
- Custom color palette for light mode (neutral grays with blue primary)
- Typography system using Inter (primary) and Poppins (secondary/accent)
- Consistent spacing units (4, 6, 8, 12, 16, 20, 24)
- Custom shadow and elevation utilities
- Responsive breakpoints for mobile/tablet/desktop

**State Management**: React Query (TanStack Query) for server state management with infinite stale time and disabled refetching (static portfolio content).

**Form Handling**: React Hook Form with Zod validation for type-safe form schemas.

**Component Structure**:
- Section-based components (Hero, Projects, Credentials, Experience, Services, Contact, Footer)
- Navigation with fixed header and scroll-based transparency
- Full-viewport hero section with background imagery
- Project grid with card-based layout
- Timeline component for career progression
- Service grid for expertise areas
- Contact form with project type selection

### Backend Architecture

**Runtime**: Node.js with Express framework.

**Server Setup**: Dual-mode server configuration:
- Development: Vite middleware integration with HMR support
- Production: Static file serving from dist directory

**API Structure**: RESTful endpoints:
- `POST /api/contact` - Submit contact form messages
- `GET /api/contact` - Retrieve contact messages (admin view)

**Data Validation**: Zod schemas shared between client and server for consistent validation.

**Storage Layer**: In-memory storage implementation (MemStorage class) using Map data structure. Ready for database migration with IStorage interface abstraction.

**Request Logging**: Custom middleware for API request timing and JSON response capture.

### Data Storage Solutions

**Current Implementation**: In-memory storage using JavaScript Map for contact messages. Each message includes:
- Unique UUID identifier
- Contact information (name, email)
- Project details (type, budget)
- Message content
- Timestamp

**Database Schema** (Drizzle ORM ready): PostgreSQL schema defined for contact messages table with:
- UUID primary key with auto-generation
- Text fields for contact and project data
- Timestamp with automatic creation time

**Migration Path**: Drizzle Kit configured for PostgreSQL with migration directory and schema file paths set. Database URL expected via environment variable.

### External Dependencies

**UI Components**: 
- Radix UI primitives (@radix-ui/*) for accessible component foundations
- Lucide React for icons
- React Icons (SiResearchgate) for brand icons

**Database & ORM**:
- Drizzle ORM for type-safe database queries
- @neondatabase/serverless for PostgreSQL connection (configured but not actively used)
- drizzle-zod for schema validation integration

**Utilities**:
- class-variance-authority for component variant management
- clsx and tailwind-merge for className composition
- date-fns for date formatting
- nanoid for unique ID generation

**Development Tools**:
- TypeScript for type safety
- ESBuild for production bundling
- Replit-specific plugins for development experience (cartographer, dev banner, runtime error overlay)

**Fonts**: Google Fonts integration (Inter and Poppins) loaded via HTML link tags.

**Assets**: Generated images stored in attached_assets/generated_images directory for hero background and project showcase images.