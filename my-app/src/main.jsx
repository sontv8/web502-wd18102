import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Header, Footer } from './components'

const menus = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Product", path: "/product" }
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Header menus={menus} />
    <main className='abc'></main>
    <Footer />
  </>
)
