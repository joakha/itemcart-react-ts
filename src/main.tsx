import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { CartContextProvider } from './context/CartContextProvider.tsx'
import { ProductContextProvider } from './context/ProductContextProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProductContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </ProductContextProvider>
  </StrictMode>,
)
