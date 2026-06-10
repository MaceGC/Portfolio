import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/navBar.css'
import './styles/home.css'
import './styles/projet.css'
import './styles/competences.css'
import './styles/contact.css'
import './styles/footer.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
