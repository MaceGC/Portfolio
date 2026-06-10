import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar(){
  return (
    <nav>
      <NavLink to="/" className={({isActive})=> isActive? 'nav-link active' :'nav-link'}>Accueil</NavLink>
      <NavLink to="/projets" className={({isActive})=> isActive? 'nav-link active' :'nav-link'}>Projets</NavLink>
      <NavLink to="/competences" className={({isActive})=> isActive? 'nav-link active' :'nav-link'}>Compétences</NavLink>
      <NavLink to="/contact" className={({isActive})=> isActive? 'nav-link active' :'nav-link'}>Contact</NavLink>
    </nav>
  )
}
