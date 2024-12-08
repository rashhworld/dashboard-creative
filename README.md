# Creative Upaay - Kanban Board Application

A modern Kanban board application built with React, Redux, and Firebase authentication. The application allows users to manage tasks across different stages (Todo, In Progress, Done) with drag-and-drop functionality, filtering capabilities, and activity tracking.

## Features

- **Authentication System**

  - User registration and login using Firebase
  - Protected components and authenticated sessions
  - Profile management

- **Kanban Board**

  - Drag-and-drop task management across columns
  - Task filtering by priority and due date
  - Real-time activity tracking
  - Task creation with priority levels and due dates

- **UI/UX**
  - Modern UI design using Tailwind CSS
  - Interactive components and transitions
  - Activity timeline for task movements
  - User-friendly modals and dropdowns

## Tech Stack

- React 18
- Redux Toolkit for state management
- Firebase Authentication
- React Router DOM for routing
- TailwindCSS for styling
- SortableJS for drag-and-drop functionality
- Vite as build tool

## Prerequisites

- Node.js (v16 or higher)
- Firebase account and project. Can create one on [Firebase Console](https://console.firebase.google.com/).

## Project Structure

`/src`

- `/components` - React components organized by feature
- `/context` - React context for authentication
- `/store` - Redux store configuration and slices
- `/firebase` - Firebase configuration and utilities

## Approach

1. **Component-First Development**

   - Started with building individual UI components (NavItem, TaskCard, etc.)
   - Implemented a modular design pattern for better code reusability
   - Used atomic design principles by breaking down complex components into smaller, manageable pieces

2. **State Management Strategy**

   - Implemented Redux for global state management with two main slices:
     - `tasksSlice`: Manages the Kanban board tasks and their states
     - `activitiesSlice`: Tracks user actions and task movements
   - Used localStorage for persistence to maintain state across page refreshes
   - Implemented real-time activity tracking for task movements between columns

3. **Authentication Flow**

   - Built a secure authentication system using Firebase
   - Created a custom AuthContext for managing user states

4. **UI/UX Considerations**
   - Utilized Tailwind CSS for consistent styling and rapid development
   - Used drag-and-drop functionality for intuitive task management

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rashhworld/dashboard-creative-upaay.git
   ```
2. Navigate to the project directory and install dependencies:
   ```bash
   cd dashboard-creative-upaay
   npm install
   ```
3. Create a `.env` file in the root directory with your Firebase configuration:
   You will find these credentials in your [Firebase console](https://console.firebase.google.com/).

   ```bash
    VITE_FIREBASE_API_KEY=your_api_key
    VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
    VITE_FIREBASE_PROJECT_ID=your_project_id
    VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
    VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
    VITE_FIREBASE_APP_ID=your_app_id
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```
