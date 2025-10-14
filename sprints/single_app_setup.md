# Single App Portfolio Setup Guide
## Professional Multi-Page React App with Routing

---

## Quick Setup Commands

```bash
# Create project
cd ~/Desktop
mkdir durable-pm-portfolio
cd durable-pm-portfolio

# Create Vite React app
npm create vite@latest . -- --template react

# Install dependencies
npm install
npm install react-router-dom
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install lucide-react
npm install --save-dev gh-pages
```

---

## Project Structure

```
durable-pm-portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── BackButton.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Guardian.jsx
│   │   ├── Local.jsx
│   │   ├── Advisor.jsx
│   │   └── Rationale.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── package.json
└── README.md
```

---

## Configuration Files

### tailwind.config.js
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### src/index.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
```

### vite.config.js
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/durable-pm-portfolio/',
})
```

### package.json (add to scripts)
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

---

## Next Steps

Now I'll create all the component files for you in separate artifacts. Create these files in your project:

1. `src/App.jsx` - Main routing
2. `src/main.jsx` - Entry point
3. `src/components/Header.jsx`
4. `src/components/Footer.jsx`
5. `src/components/BackButton.jsx`
6. `src/pages/Home.jsx`
7. `src/pages/Guardian.jsx`
8. `src/pages/Local.jsx`
9. `src/pages/Advisor.jsx`
10. `src/pages/Rationale.jsx`

Let me create each file now...
