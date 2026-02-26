# Installation and Configure
## 1. create new React project via Vite inside the cloned repo with command:
```npm create vite@latest .```

## 2. select the React Libriary 

## 3. remove unused code from App.jsx file and unused file App.css

## 4. open the [Tailwind Documentaion](https://tailwindcss.com/) and install it with command from docs:
```npm install tailwindcss @tailwindcss/vite```

## 5. configure the Vite plugin
```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // <=

export default defineConfig({
  plugins: [
    tailwindcss(), // <=
    react()
  ],
})

```

## 6. import Tailwind CSS into main index.css file
```@import "tailwindcss";```

## 7. Install the Tailwind CSS IntelliSense snippet into your code redactor
