import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './effect.tsx'
import CallBack from './CallBack.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)