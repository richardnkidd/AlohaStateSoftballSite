# Overview

This is a React-based web application for the Aloha State Softball League, Hawaii's premier LGBTQ+ inclusive softball community. The application provides information about the league's board of directors, player rating guides, scorekeeping tutorials, and general league information. It features a modern, responsive design with pride-themed styling options and emphasizes inclusivity and community engagement.

## Key Features
- **Intelligent Chatbot**: AI-powered assistant using OpenAI GPT-5 with comprehensive knowledge of all website content, league rules, bylaws, and resources
- **Complete Website Coverage**: Chatbot can answer questions about sponsors, photo galleries, player ratings, scorekeeping, board members, tournament details, and all external resources

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The application uses a **React + TypeScript** single-page application (SPA) architecture built with Vite as the build tool. Key architectural decisions include:

- **Component Structure**: Organized into pages (`/pages`) for main routes, reusable UI components (`/components/ui`) using shadcn/ui design system, and shared components (`/components`)
- **Routing**: Client-side routing implemented with Wouter library for lightweight navigation
- **Styling**: Tailwind CSS for utility-first styling with custom CSS variables for theming, including pride mode functionality
- **State Management**: React Context API for global state (pride mode toggle), React Query for server state management
- **Design System**: shadcn/ui components providing consistent, accessible UI elements

## Backend Architecture

The backend follows a **minimal Express.js** REST API pattern:

- **Server Framework**: Express.js with TypeScript for type safety
- **Development Setup**: Vite integration for hot module replacement and seamless development experience
- **Storage Interface**: Abstracted storage layer with in-memory implementation, designed to be easily replaced with database persistence
- **Error Handling**: Centralized error handling middleware for consistent error responses

## Data Storage

Currently implements **in-memory storage** with a clean interface pattern:

- **Storage Abstraction**: `IStorage` interface defines CRUD operations for easy database integration later
- **User Management**: Basic user schema with username/password fields
- **Database Ready**: Drizzle ORM configured for PostgreSQL with schema definitions and migrations setup

## Authentication and Authorization

The application is prepared for authentication but currently has minimal implementation:

- **Schema Ready**: User table schema defined with Drizzle ORM
- **Storage Interface**: User creation and retrieval methods implemented
- **Frontend Prepared**: React Query setup for authentication state management

## Component Architecture

The UI follows **atomic design principles**:

- **Pages**: High-level route components (Home, Board, Ratings, Scorekeeping)
- **Layout Components**: Navigation and Footer for consistent site structure
- **UI Components**: Comprehensive shadcn/ui component library for forms, dialogs, cards, etc.
- **Custom Components**: Pride mode toggle and specialized softball-related components

## Key Features

- **Pride Mode**: Toggle between standard and pride-themed styling using CSS custom properties
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints
- **Interactive Elements**: Scorekeeping guide with interactive demonstrations
- **Accessibility**: Focus on keyboard navigation and screen reader compatibility through shadcn/ui components
- **Scroll Progress Indicator**: Rainbow-colored progress bar with animated softball emoji that rolls across the screen as users scroll
- **Celebration Animation**: Pride-themed confetti explosion when users complete scrolling to the bottom of the page, featuring multiple bursts with LGBTQ+ colors and softball-themed particles