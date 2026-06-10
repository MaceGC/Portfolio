import React from 'react'

export default function Competences(){
  return (
    <div>
      <header>
        <h1>Compétences</h1>
      </header>
      <div className="competence-grid">
        <div className="competence-category">
          <h2>Langages</h2>
          <ul>
            <li>JavaScript</li>
            <li>HTML / CSS</li>
          </ul>
        </div>
        <div className="competence-category">
          <h2>Outils</h2>
          <ul>
            <li>Git</li>
            <li>VS Code</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
