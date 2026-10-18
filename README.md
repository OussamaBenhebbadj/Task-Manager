# Task Manager

A responsive task management application built with **React, TypeScript, and Tailwind CSS**.

The goal of this project is to build a clean, maintainable frontend application while practicing modern React development, TypeScript fundamentals, component architecture, and Git-based collaboration workflows.

## Overview

Task Manager is a web application designed to help users organize their work, track progress, and manage tasks through a simple and intuitive interface.

The project is being developed incrementally, from the initial application setup to reusable components, task management features, and persistent local storage.

## Planned Features

- [ ] Create, edit, and delete tasks
- [ ] Assign a status to each task: To Do, In Progress, or Done
- [ ] Filter tasks by status
- [ ] Search tasks by title
- [ ] Display task statistics
- [ ] Persist tasks using browser local storage
- [ ] Build a responsive interface for desktop and mobile
- [ ] Improve accessibility and user experience
- [ ] Add tests for important application logic

## Tech Stack

| Technology   | Purpose                                  |
| ------------ | ---------------------------------------- |
| React        | Component-based user interface           |
| TypeScript   | Static typing and safer code             |
| Vite         | Development server and build tooling     |
| Tailwind CSS | Responsive styling and UI design         |
| Git          | Version control                          |
| GitHub       | Source code hosting and project tracking |

## Project Architecture

The application follows a feature-oriented structure to keep task-related logic separate from reusable UI components.

```text
src/
├── components/       # Shared UI components
├── features/
│   └── tasks/
│       ├── components/
│       ├── hooks/
│       ├── types/
│       └── utils/
├── lib/              # Shared utilities and configuration
├── App.tsx            # Main application component
├── main.tsx           # React entry point
└── index.css          # Tailwind CSS entry point
```

The architecture will evolve as new features are implemented.

---

**Built as a practical project to strengthen React, TypeScript, and frontend engineering skills.**
