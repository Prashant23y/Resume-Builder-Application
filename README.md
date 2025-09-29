# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

*----------------------------------------------------------------------------------------*

# Resume Builder App

A React-based Resume Builder application that allows users to create, preview, and download their resumes in PDF format. The app includes a skill assessment quiz to help users identify relevant skills to add to their resume.

## Features

- **User Authentication:** Secure login system to manage user sessions.
- **One-Click Resume Generation:** Input personal, education, experience, and skills information and instantly generate a formatted resume.
- **Skill Assessment Quiz:** A brief quiz helps users identify their skills and suggests relevant skills to include.
- **Real-time Resume Preview:** See your resume update live as you fill out the form.
- **PDF Download:** Download your completed resume as a professional PDF document.
- **Responsive Design:** Works well on desktops, tablets, and mobile devices.

## Technologies Used

- React 19
- Vite (build tool)
- Firebase (authentication)
- html2pdf.js (PDF generation)
- React Router DOM
- ESLint

## Folder Structure

resume-builder-app/
├── node_modules/
├── public/
├── src/
│   ├── assets/          # Images and static files
│   ├── components/      # React components (PersonalInfo, Education, Experience, Skills, Quiz, etc.)
│   ├── context/         # Auth context provider
│   ├── pages/           # Pages like Dashboard, Login, Signup
│   ├── services/        # Firebase config and API services
│   ├── styles/          # CSS styles
│   ├── App.jsx          # Main app component and routing
│   └── main.jsx         # React entry point
├── .env                 # Environment variables
├── .gitignore
├── package.json
├── vite.config.js
└── README.md            # Project documentation

