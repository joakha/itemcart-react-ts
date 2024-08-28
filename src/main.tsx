import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import CartContextProvider from './context/CartContextProvider.tsx'
import ItemContextProvider from './context/InventoryContextProvider.tsx'
import { HashRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <ItemContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </ItemContextProvider>
    </HashRouter>
  </StrictMode>,
)
