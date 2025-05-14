# React 19 (Vite) + TypeScript Template

personal, modern, feature-rich template for building React applications with TypeScript, TailwindCSS, Framer Motion, and Ant Design. This template leverages the latest features of React 19 for improved performance and developer experience.

## Features

- ⚡️ **React 19** — The latest version with improved features and performance
- 🚀 **Vite** — Lightning-fast development server and build tool
- 🔷 **TypeScript** — Type-safe code for better developer experience
- 🎨 **TailwindCSS** — Utility-first CSS framework
- 🧩 **Ant Design** — Beautiful and accessible UI components
- 🎭 **Framer Motion** — Animation library for React
- 🌙 **Dark Mode** — Built-in dark mode support with theme toggle
- 🎯 **ESLint** — Linting for better code quality
- 📦 **Component Library** — Reusable UI components with consistent styling
- 🔍 **Type-checked** — Fully typed components, props, and hooks

## What's New in React 19

This template leverages several new features from React 19:

- **`ref` as a prop** - Components now receive refs as props, making code simpler and more readable
- **`use` API** - New API to read resources in render, including Promises and Context
- **Context as a Provider** - Render Context directly as a provider instead of using Context.Provider
- **Improved Error Handling** - Better error reporting with clear error messages
- **Improved SSR** - Better server-side rendering capabilities

## Getting Started

### Prerequisites

- Node.js 18+ (Personally used v20.9.0 to cook the template/boilerplate )
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/eimaam/react-vite-typescript-tailwind-antd.git

# Navigate to the project
cd react-vite-typescript-tailwind-andt

# Install dependencies
npm install
# or
yarn install

# Start the development server
npm run dev
# or
yarn dev
```

## Project Structure

```
/
├── public/          # Static files
├── src/
│   ├── components/  
│   │   ├── ui/      # Reusable UI components
│   │   └── layout/  # Layout components
│   ├── utils/       # Utility functions
│   ├── App.tsx      # Main app component
│   ├── main.tsx     # Entry point
│   └── index.css    # Global styles
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## UI Components

The template includes several ready-to-use UI components:

- `Button` - Flexible button component with multiple variants using Ant Design
- `Card` - Multi-purpose card component with various parts using Ant Design
- `ThemeToggle` - Dark/light mode toggle with animation using Framer Motion
- `Layout` - Page layout with Header and Footer components

## Customization

### Tailwind Theme

The TailwindCSS theme can be customized in `tailwind.config.js`. The template includes a comprehensive color palette with semantic color names and dark mode support.

### Ant Design Theme

Ant Design theming can be customized in the `App.tsx` file using the `ConfigProvider` component. The template demonstrates this with a custom theme.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## License

[MIT](LICENSE) 

## Author

[eimaam.dev](https://eimaam.dev) 