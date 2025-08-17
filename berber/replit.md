# Berlin Tour Guide Service

## Overview

A full-stack web application for a Chinese-language tour guide service in Berlin, specializing in historical tours of the Sachsenhausen Concentration Camp. The application features a single-page marketing website with service information, booking functionality, customer testimonials, and FAQ sections. Built with React frontend and Express backend, utilizing PostgreSQL for data persistence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React SPA**: Single-page application built with React 18 and TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design
- **Routing**: Wouter for client-side routing with minimal footprint
- **State Management**: TanStack Query for server state management and data fetching
- **UI Components**: Comprehensive set of accessible UI components using Radix UI primitives
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture  
- **Server Framework**: Express.js with TypeScript for API endpoints
- **Storage Interface**: Abstracted storage layer with in-memory implementation and extensible interface for database integration
- **Development Setup**: Hot module replacement and error overlay for development experience
- **Static Serving**: Serves built React application in production

### Data Storage Solutions
- **Database**: PostgreSQL configured through Drizzle ORM
- **Schema Management**: Type-safe database schema definition with Drizzle
- **Migrations**: Database migration support through Drizzle Kit
- **Development Storage**: In-memory storage implementation for rapid development

### Authentication and Authorization
- **User Management**: Basic user schema with username/password authentication
- **Session Handling**: Express session management with PostgreSQL session store
- **Validation**: Zod schema validation for type-safe data handling

## External Dependencies

### Core Technologies
- **Database**: Neon Database (serverless PostgreSQL)
- **ORM**: Drizzle ORM for type-safe database operations
- **UI Framework**: Radix UI for accessible component primitives
- **Styling**: Tailwind CSS for utility-first styling

### Development Tools
- **Build System**: Vite with React plugin and runtime error modal
- **Code Quality**: TypeScript for type safety across the stack
- **Development Experience**: Replit integration with cartographer plugin

### Production Services
- **Deployment**: Node.js production server with static file serving
- **Fonts**: Google Fonts integration (Inter, DM Sans, Geist Mono)
- **Assets**: External image hosting via Unsplash and Pixabay APIs

### Third-party Integrations
- **Maps and Location**: Ready for Google Maps or similar mapping service integration
- **Communication**: WhatsApp and LINE integration for customer contact
- **Forms**: Google Forms embedding for booking functionality
- **Analytics**: Prepared for analytics service integration