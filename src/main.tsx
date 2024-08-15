import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { CartContextProvider } from './context/CartContextProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartContextProvider>
    <App />
    </CartContextProvider>
  </StrictMode>,
)
