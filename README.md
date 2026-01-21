# 🌆 Neon UI Kit

> **A futuristic, cyberpunk-themed React UI component library built with Atomic Design principles.**



## 📖 About The Project

**Neon UI Kit** is a modular component library designed to demonstrate modern frontend architecture and strict TypeScript patterns. Built using **React**, **Vite**, and the new **Tailwind CSS v3.4.17**, it follows the **Atomic Design** methodology to ensure scalability, maintainability, and code reusability.



## 🚀 Tech Stack & Features

- **Core:** React 19 + Vite
- **Styling:** Tailwind CSS v3.4.17 (Zero-config engine)
- **Language:** TypeScript (Strict Mode)
- **Development Environment:** Storybook 8
- **Architecture:** Atomic Design (Atoms → Molecules → Organisms → Templates → Pages)
- **Utilities:** `clsx`, `tailwind-merge`, `cva` (Class Variance Authority)

## 🏗️ Project Architecture (Atomic Design)

The project structure is organized to reflect the Atomic Design hierarchy, moving from the smallest components to full page views.

```text
src/components/
├── atoms/       # Basic building blocks (Button, Input, Badge, Textarea)
├── molecules/   # Groups of atoms working together (Card, FormField)
├── organisms/   # Complex UI sections (LoginForm, Navbar)
├── templates/   # Page layouts without data (AuthTemplate)
└── pages/       # Final views with data logic (LoginPage)
```

## 📦 Components Status
This project is actively evolving. Below is the current status of the component library:

✅ Implemented
Atoms

Button (Variants: Neon, Solid, Ghost, Hacker)

Input (With Icon support & Glowing focus states)

Badge (Status indicators: Online, Error, etc.)

Textarea (Styled for system logs)

Molecules

Card (Glassmorphism effect with compound components)

Organisms

LoginForm (Composition of Cards, Inputs, and Buttons)

Templates

AuthTemplate (Cyberpunk grid background layout)

Pages

LoginPage (Full authentication view)

## 🚧 Roadmap (Upcoming)

- [ ] Organisms: Navigation Bar, Footer, Car Listing Grid.
- [ ] Templates: Dashboard Layout (Sidebar + Content Area).
- [ ] Pages: Rent-a-Car Listing Page, User Profile Page.
- [ ] Theming: Light/Dark mode toggle integration.

## 🛠️ Getting Started

This project uses Storybook as the primary development environment. You don't need to run the main React app to see the components.

git clone [https://github.com/your-username/neon-ui-kit.git](https://github.com/your-username/neon-ui-kit.git)
cd neon-ui-kit  
npm install
npm run storybook 

🎨 Color Palette
The project uses a custom cyberpunk color configuration defined in Tailwind CSS:
Color Name,Hex Code,Usage
Neon Blue,#00f3ff,"Primary actions, Glows"
Neon Pink,#bc13fe,"Errors, Highlights"
Neon Green,#0aff0a,"Success states, Hacker mode"
Dark Bg,#050505,Main background