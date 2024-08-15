import { ReactElement, useState } from 'react'
import Layout from './components/Layout'

function App(): ReactElement {
  const [showCart, setShowCart] =  useState<boolean>(false);

  return <Layout showCart={showCart} setShowCart={setShowCart}/>;
}

export default App
