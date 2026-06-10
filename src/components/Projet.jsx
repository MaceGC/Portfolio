import React, { useState, useRef, useEffect } from 'react'
import atosLogo from '../../ressource/image/atos-logo-png_seeklogo-257485.png'

export default function Projet(){
  const [openId, setOpenId] = useState(null)
  const detailsRefs = useRef({})

  // keep component state minimal: only expansion refs

  const getThumb = (id, title)=>{
    if(id === 4) return atosLogo
    const initials = (title||'').split(' ').slice(0,2).map(s=>s[0]).join('').toUpperCase() || 'PR'
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='160' height='100'><rect width='100%' height='100%' rx='8' fill='%23eef2ff'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Arial, Helvetica, sans-serif' font-size='32' fill='%230b1720'>${initials}</text></svg>`
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
  }

  function toggle(id){
    const next = openId === id ? null : id
    setOpenId(next)
    const el = detailsRefs.current[id]
    if(!el) return
    if(next === id){
      el.style.maxHeight = el.scrollHeight + 12 + 'px'
    } else {
      el.style.maxHeight = '0px'
    }
  }

  useEffect(()=>{
    if(openId){
      const el = detailsRefs.current[openId]
      if(el) el.style.maxHeight = el.scrollHeight + 12 + 'px'
    }
  },[openId])

  return (
    <div className="projects-wrapper">
      <h1 className="accent-yellow left-title">Projets</h1>
      <div className="projects-container">

      <div className="project-card">
        <div className="project-header">
          <div style={{display:'flex',alignItems:'center',gap:12}}>
            <div className="project-thumb"><img src={getThumb(1,'Classification automatique')} alt="thumb"/></div>
            <div>
              <h3 className="project-title">Classification automatique</h3>
              <div className="project-meta">Algorithmes • Java • Git</div>
            </div>
          </div>
          <div style={{display:'flex',gap:8,alignItems:'center'}}>
            <button className="toggle-btn" onClick={()=>toggle(1)} aria-expanded={openId===1}>{openId===1? '−' : '+'}</button>
          </div>
        </div>
        <div ref={el=>detailsRefs.current[1]=el} className={`project-details ${openId===1? 'open':''}`} style={{maxHeight:'0px'}}>
          <div className="project-body">
            <p>Création et comparaisons de différents algorithmes ayant pour but de trier des dépêches.</p>
            <strong>Notions :</strong>
            <ul>
              <li>Implémenter des conceptions simples</li>
              <li>Faire des essais et évaluer leurs résultats en regard des spécifications</li>
              <li>Comparer des algorithmes pour des problèmes classiques</li>
              <li>Analyser un problème avec méthode</li>
            </ul>
            <strong>Compétences techniques :</strong>
            <ul>
              <li>Java (IntelliJ)</li>
              <li>Git</li>
            </ul>
            <p className="project-footer">Équipe de 2 — rôle : méthode des K plus proches voisins et outillage des fonctions pour comparaison</p>
          </div>
        </div>
      </div>

      <div className="project-card">
        <div className="project-header">
          <div style={{display:'flex',alignItems:'center',gap:12}}>
            <div className="project-thumb"><img src={getThumb(2,'Installation d’un poste pour le développement')} alt="thumb"/></div>
            <div>
              <h3 className="project-title">Installation d’un poste pour le développement</h3>
              <div className="project-meta">Debian 12 • KDE • Bash</div>
            </div>
          </div>
          <div style={{display:'flex',gap:8,alignItems:'center'}}>
            <button className="toggle-btn" onClick={()=>toggle(2)} aria-expanded={openId===2}>{openId===2? '−' : '+'}</button>
          </div>
        </div>
        <div ref={el=>detailsRefs.current[2]=el} className={`project-details ${openId===2? 'open':''}`} style={{maxHeight:'0px'}}>
          <div className="project-body">
            <p>Installation d’un système d’exploitation Debian 12 et configuration dans le cadre du développement informatique.</p>
            <strong>Notions :</strong>
            <ul>
              <li>Identifier les différents composants d'un système numérique</li>
              <li>Utiliser les fonctionnalités de base d'un système d'exploitation</li>
              <li>Installer et configurer un système d'exploitation et des outils de développement</li>
            </ul>
            <strong>Compétences techniques :</strong>
            <ul>
              <li>Bash</li>
              <li>Mindmeister (carte mentale)</li>
            </ul>
            <p className="project-footer">Projet individuel — installation, configuration KDE/Plasma, création d'un super-utilisateur et mise en place d'outils de développement.</p>
          </div>
        </div>
      </div>

      <div className="project-card">
        <div className="project-header">
          <div style={{display:'flex',alignItems:'center',gap:12}}>
            <div className="project-thumb"><img src={getThumb(3,'Création de la base de donnée d\'un bowling')} alt="thumb"/></div>
            <div>
              <h3 className="project-title">Création de la base de donnée d'un bowling</h3>
              <div className="project-meta">BDD • SQL • Contraintes</div>
            </div>
          </div>
          <div style={{display:'flex',gap:8,alignItems:'center'}}>
            <button className="toggle-btn" onClick={()=>toggle(3)} aria-expanded={openId===3}>{openId===3? '−' : '+'}</button>
          </div>
        </div>
        <div ref={el=>detailsRefs.current[3]=el} className={`project-details ${openId===3? 'open':''}`} style={{maxHeight:'0px'}}>
          <div className="project-body">
            <p>Création d'une base de données relationnelle pour un bowling fictif, en respectant contraintes (réservations, stocks, horaires, âge).</p>
            <strong>Notions :</strong>
            <ul>
              <li>Concevoir et interroger une base de données relationnelle à partir d'un cahier des charges</li>
            </ul>
            <strong>Compétences techniques :</strong>
            <ul>
              <li>SQL</li>
            </ul>
            <p className="project-footer">Équipe de 2 — mise en place des tables, contraintes et requêtes pour réservation, gestion de pistes et stocks.</p>
          </div>
        </div>
      </div>

      <div className="project-card">
        <div className="project-header">
          <div style={{display:'flex',alignItems:'center',gap:12}}>
            <div className="project-thumb"><img src={getThumb(4,'Création s\'un site web à destination de Troisième')} alt="thumb"/></div>
            <div>
              <h3 className="project-title">Création s'un site web à destination de Troisième</h3>
              <div className="project-meta">HTML • Mockup • Vulgarisation</div>
            </div>
          </div>
          <div style={{display:'flex',gap:8,alignItems:'center'}}>
            <button className="toggle-btn" onClick={()=>toggle(4)} aria-expanded={openId===4}>{openId===4? '−' : '+'}</button>
          </div>
        </div>
        <div ref={el=>detailsRefs.current[4]=el} className={`project-details ${openId===4? 'open':''}`} style={{maxHeight:'0px'}}>
          <div className="project-body">
            <p>Création d’un site web informatif pour l’ESN Atos, visant à vulgariser les informations nécessaires pour une demande de stage.</p>
            <strong>Notions :</strong>
            <ul>
              <li>Appréhender les besoins du client et de l’utilisateur</li>
              <li>Phases d’un cycle de développement</li>
              <li>Rédaction d’un recueil de besoins</li>
            </ul>
            <strong>Compétences techniques :</strong>
            <ul>
              <li>HTML / CSS</li>
              <li>Mockup (Whimsical)</li>
            </ul>
            <p className="project-footer">Équipe de 4 — rôle : recueil et mise en forme des informations, participation à la page d'accueil.</p>
          </div>
        </div>
      </div>

      <div className="project-card">
        <div className="project-header">
          <div style={{display:'flex',alignItems:'center',gap:12}}>
            <div className="project-thumb"><img src={getThumb(5,'Conception et développement d\'un outil d\'aide à l\'organisation d\'événements')} alt="thumb"/></div>
            <div>
              <h3 className="project-title">Conception et développement d'un outil d’aide à l’organisation d’événements</h3>
              <div className="project-meta">UML • Java • Gestion de projet</div>
            </div>
          </div>
          <div style={{display:'flex',gap:8,alignItems:'center'}}>
            <button className="toggle-btn" onClick={()=>toggle(5)} aria-expanded={openId===5}>{openId===5? '−' : '+'}</button>
          </div>
        </div>
        <div ref={el=>detailsRefs.current[5]=el} className={`project-details ${openId===5? 'open':''}`} style={{maxHeight:'0px'}}>
          <div className="project-body">
            <p>Conception et développement d'un outil d’aide à l’organisation d’événements — analyses, conception, réalisation du logiciel et livrables (3 dossiers).</p>
            <strong>Notions :</strong>
            <ul>
              <li>Conception, tests et interfaces utilisateur</li>
              <li>Gestion de projet et travail en équipe</li>
              <li>Formaliser des outils mathématiques pour l'informatique</li>
            </ul>
            <strong>Compétences techniques :</strong>
            <ul>
              <li>UML (draw.io)</li>
              <li>Java / JavaFX</li>
              <li>LaTeX / R Markdown / SceneBuilder</li>
            </ul>
            <p className="project-footer">Équipe de 6 — rôle : chef de projet, coordination et implication sur les rendus mathématiques et l'interface.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
      )
}



