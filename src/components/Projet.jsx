import React, { useState, useRef, useEffect } from 'react'
import atosLogo from '../../ressource/image/atos-logo-png_seeklogo-257485.png'
import tri from '../../ressource/image/algoTri.png'
import bowlingLogo from '../../ressource/image/bowlingLogo.jpg'
import debianLogo from '../../ressource/image/debianLogo.png'
import logoSatable from '../../ressource/image/LogoSatable.png'
import postgresLogoRaw from '../../ressource/image/postgresql.svg?raw'
import javaFXLogoRaw from '../../ressource/image/JavaFXLogo.svg?raw'
import junit5 from '../../ressource/image/junit.svg?raw'

export default function Projet(){
  const [openIds, setOpenIds] = useState(new Set())
  const detailsRefs = useRef({})

  // keep component state minimal: only expansion refs

  const getTechIcon = (tech) => {
    const icons = {
      'Java': { class: 'fa-brands', icon: 'fa-java' },
      'Git': { class: 'fa-brands', icon: 'fa-git-alt' },
      'Bash': { class: 'fa-solid', icon: 'fa-terminal' },
      'SQL': { class: 'fa-solid', icon: 'fa-database' },
      'HTML': { class: 'fa-brands', icon: 'fa-html5' },
      'CSS': { class: 'fa-brands', icon: 'fa-css3-alt' },
      'UML': { class: 'fa-solid', icon: 'fa-diagram-project' },
      'JavaFX': { class: 'svg', icon: javaFXLogoRaw },
      'draw.io': { class: 'fa-solid', icon: 'fa-pen-ruler' },
      'Whimsical': { class: 'fa-solid', icon: 'fa-pencil' },
      'IntelliJ': { class: 'fa-solid', icon: 'fa-laptop-code' },
      'Mindmeister': { class: 'fa-solid', icon: 'fa-brain' },
      'R Markdown': { class: 'fa-solid', icon: 'fa-markdown' },
      'SceneBuilder': { class: 'fa-solid', icon: 'fa-cube' },
      'Debian': { class: 'fa-brands', icon: 'fa-linux' },
      'Postgres': { class: 'svg', icon: postgresLogoRaw },
      'Junit5': { class: 'svg', icon: junit5}
    }
    
    return icons[tech] || { class: 'fa-solid', icon: 'fa-gear' }
  }

  const colorizeSvg = (svg, color) => {
    let colored = svg
      .replace(/<svg([^>]*)>/, `<svg$1 style="color:${color}; fill:currentColor; stroke:currentColor; fill-opacity:1; stroke-opacity:1;">`)
      .replace(/fill="(?!none)[^"]*"/g, 'fill="currentColor"')
      .replace(/stroke="(?!none)[^"]*"/g, 'stroke="currentColor"')
    return colored
  }

  const getThumb = (id, title)=>{
    if(id === 1) return tri
    if(id === 2) return debianLogo
    if(id === 3) return bowlingLogo
    if(id === 4) return atosLogo
    if(id === 5) return logoSatable
    const initials = (title||'').split(' ').slice(0,2).map(s=>s[0]).join('').toUpperCase() || 'PR'
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='160' height='100'><rect width='100%' height='100%' rx='8' fill='%23eef2ff'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Arial, Helvetica, sans-serif' font-size='32' fill='%230b1720'>${initials}</text></svg>`
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
  }

  const renderTechBadges = (techs) => {
    const techArray = techs.map(t => t.split(' (')[0].trim())
    return (
      <div style={{display:'flex',flexWrap:'wrap',gap:'14px',marginTop:'12px'}}>
        {techArray.map((tech, idx) => (
          <div key={idx} title={tech} style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            width:'56px',
            height:'56px',
            backgroundColor:'rgba(255,204,0,0.08)',
            border:'1px solid rgba(255,204,0,0.2)',
            borderRadius:'12px',
            cursor:'default',
            transition:'all 0.2s ease',
            textAlign:'center'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255,204,0,0.17)'
            e.currentTarget.style.transform = 'translateY(-1px)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255,204,0,0.08)'
            e.currentTarget.style.transform = 'translateY(0)'
          }}>
            {(() => {
              const iconData = getTechIcon(tech)
              if(iconData.class === 'svg'){
                const svg = colorizeSvg(iconData.icon, '#ffcc00')
                return <span style={{width:'32px',height:'32px', display:'inline-flex'}} dangerouslySetInnerHTML={{__html: svg}} />
              }
              return <i className={`${iconData.class} ${iconData.icon}`} style={{fontSize:'28px',color:'#ffcc00'}}></i>
            })()}
          </div>
        ))}
      </div>
    )
  }

  function toggle(id){
    setOpenIds(prev => {
      const next = new Set(prev)
      if(next.has(id)){
        next.delete(id)
      } else {
        next.add(id)
      }
      
      // Mettre à jour le maxHeight avec le nouvel état
      const el = detailsRefs.current[id]
      if(el) {
        setTimeout(() => {
          if(next.has(id)){
            el.style.maxHeight = el.scrollHeight + 12 + 'px'
          } else {
            el.style.maxHeight = '0px'
          }
        }, 0)
      }
      
      return next
    })
  }

  useEffect(()=>{
    // Mettre à jour tous les maxHeight lors du changement de openIds
    Object.keys(detailsRefs.current).forEach(id => {
      const el = detailsRefs.current[id]
      if(el) {
        if(openIds.has(parseInt(id))){
          el.style.maxHeight = el.scrollHeight + 12 + 'px'
        } else {
          el.style.maxHeight = '0px'
        }
      }
    })
  },[openIds])

  return (
    <div className="projects-wrapper">
      <h1 className="accent-yellow left-title">Projets</h1>
      <div className="projects-container">

      <div className="project-card" onClick={()=>toggle(1)} style={{cursor:'pointer'}}>
        <div className="project-header">
          <div style={{display:'flex',alignItems:'center',gap:12}}>
            <div className="project-thumb"><img src={getThumb(1,'Classification automatique')} alt="thumb"/></div>
            <div>
              <h3 className="project-title">Classification automatique</h3>
            </div>
          </div>
          <div style={{display:'flex',gap:8,alignItems:'center'}}>
            <button className="toggle-btn" onClick={(e)=>{e.stopPropagation(); toggle(1);}} aria-expanded={openIds.has(1)}>{openIds.has(1)? '−' : '+'}</button>
          </div>
        </div>
        <div ref={el=>detailsRefs.current[1]=el} className={`project-details ${openIds.has(1)? 'open':''}`} style={{maxHeight:'0px'}}>
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
            {renderTechBadges(['Java', 'Git'])}
            <p className="project-footer">Équipe de 2 — rôle :Nous avons implémenté et testé différent moyen de trier des dépêches, 
              dans le langage Java. Nous avons dû commencer par créer les algorithmes et 
              d’ensuite calculer leurs coûts algorithmiques ainsi que de les outiller afin de 
              voir leurs temps d'exécution et pouvoir les comparer.
               Un autre critère pour les comparer a été le taux de réussite de chaque méthode.</p>
          </div>
        </div>
      </div>

      <div className="project-card" onClick={()=>toggle(2)} style={{cursor:'pointer'}}>
        <div className="project-header">
          <div style={{display:'flex',alignItems:'center',gap:12}}>
            <div className="project-thumb"><img src={getThumb(2,'Installation d\'un poste pour le développement')} alt="thumb"/></div>
            <div>
              <h3 className="project-title">Installation d'un poste pour le développement</h3>
            </div>
          </div>
          <div style={{display:'flex',gap:8,alignItems:'center'}}>
            <button className="toggle-btn" onClick={(e)=>{e.stopPropagation(); toggle(2);}} aria-expanded={openIds.has(2)}>{openIds.has(2)? '−' : '+'}</button>
          </div>
        </div>
        <div ref={el=>detailsRefs.current[2]=el} className={`project-details ${openIds.has(2)? 'open':''}`} style={{maxHeight:'0px'}}>
          <div className="project-body">
            <p>Installation d’un système d’exploitation Debian 12 et configuration dans le cadre du développement informatique.</p>
            <strong>Notions :</strong>
            <ul>
              <li>Identifier les différents composants d'un système numérique</li>
              <li>Utiliser les fonctionnalités de base d'un système d'exploitation</li>
              <li>Installer et configurer un système d'exploitation et des outils de développement</li>
            </ul>
            <strong>Compétences techniques :</strong>
            {renderTechBadges(['Bash', 'Postgres', 'Debian'])}
            <p className="project-footer">Projet individuel dans laquelle j’ai dû installer et paramétrer un système d’exploitation Linux Debian 12. Une fois fait, j’ai mis en place l’environnement graphique KDE/Plasma.
               Enfin, j’ai créé un super utilisateur afin de pouvoir administrer le système et notamment d’installer d'autres logiciels pour le développement comme IntelliJ à l'aide de package snap, flatpak ou encore apt.
              J’ai également créé une carte mentale des étapes à suivre pour réaliser ce projet en utilisant l’outil Mindmeister.</p>
          </div>
        </div>
      </div>

      <div className="project-card" onClick={()=>toggle(3)} style={{cursor:'pointer'}}>
        <div className="project-header">
          <div style={{display:'flex',alignItems:'center',gap:12}}>
            <div className="project-thumb"><img src={getThumb(3,'Création de la base de donnée d\'un bowling')} alt="thumb"/></div>
            <div>
              <h3 className="project-title">Création de la base de donnée d'un bowling</h3>
            </div>
          </div>
          <div style={{display:'flex',gap:8,alignItems:'center'}}>
            <button className="toggle-btn" onClick={(e)=>{e.stopPropagation(); toggle(3);}} aria-expanded={openIds.has(3)}>{openIds.has(3)? '−' : '+'}</button>
          </div>
        </div>
        <div ref={el=>detailsRefs.current[3]=el} className={`project-details ${openIds.has(3)? 'open':''}`} style={{maxHeight:'0px'}}>
          <div className="project-body">
            <p>Création d'une base de données relationnelle pour un bowling fictif, en respectant contraintes (réservations, stocks, horaires, âge).</p>
            <strong>Notions :</strong>
            <ul>
              <li>Concevoir et interroger une base de données relationnelle à partir d'un cahier des charges</li>
            </ul>
            <strong>Compétences techniques :</strong>
            {renderTechBadges(['SQL'])}
            <p className="project-footer">Équipe de 2 — mise en place des tables, contraintes et requêtes pour réservation, gestion de pistes et stocks.</p>
          </div>
        </div>
      </div>

      <div className="project-card" onClick={()=>toggle(4)} style={{cursor:'pointer'}}>
        <div className="project-header">
          <div style={{display:'flex',alignItems:'center',gap:12}}>
            <div className="project-thumb"><img src={getThumb(4,'Création s\'un site web à destination de Troisième')} alt="thumb"/></div>
            <div>
              <h3 className="project-title">Création s'un site web à destination de Troisième</h3>
            </div>
          </div>
          <div style={{display:'flex',gap:8,alignItems:'center'}}>
            <button className="toggle-btn" onClick={(e)=>{e.stopPropagation(); toggle(4);}} aria-expanded={openIds.has(4)}>{openIds.has(4)? '−' : '+'}</button>
          </div>
        </div>
        <div ref={el=>detailsRefs.current[4]=el} className={`project-details ${openIds.has(4)? 'open':''}`} style={{maxHeight:'0px'}}>
          <div className="project-body">
            <p>Création d’un site web informatif pour l’ESN Atos, visant à vulgariser les informations nécessaires pour une demande de stage.</p>
            <strong>Notions :</strong>
            <ul>
              <li>Appréhender les besoins du client et de l’utilisateur</li>
              <li>Phases d’un cycle de développement</li>
              <li>Rédaction d’un recueil de besoins</li>
            </ul>
            <strong>Compétences techniques :</strong>
            {renderTechBadges(['HTML', 'CSS', 'Git'])}
            <p className="project-footer">Travail en groupe : <br/>
            Nous avons commencé par chercher tous les besoins du site en se basant sur le site officiel d’Atos. 
            Nous avons ensuite rassemblé et vulgarisé ces informations dans un recueil de besoin.
             L’étape suivante a été de créer un mockup du site et enfin de le réaliser. <br/>
            Travail personnelle :<br/>
            Je me suis chargé de rassembler les informations vulgarisées dans le recueil et de la mire en forme de ce dernier. 
            Pour la réalisation du site j’ai principalement participé à la page d'accueil et une parti des pages d’informations.</p>
          </div>
        </div>
      </div>

      <div className="project-card" onClick={()=>toggle(5)} style={{cursor:'pointer'}}>
        <div className="project-header">
          <div style={{display:'flex',alignItems:'center',gap:12}}>
            <div className="project-thumb"><img src={getThumb(5,'Conception et développement d\'un outil d\'aide à l\'organisation d\'événements')} alt="thumb"/></div>
            <div>
              <h3 className="project-title">Conception et développement d'un outil d'aide à l'organisation d'événements</h3>
            </div>
          </div>
          <div style={{display:'flex',gap:8,alignItems:'center'}}>
            <button className="toggle-btn" onClick={(e)=>{e.stopPropagation(); toggle(5);}} aria-expanded={openIds.has(5)}>{openIds.has(5)? '−' : '+'}</button>
          </div>
        </div>
        <div ref={el=>detailsRefs.current[5]=el} className={`project-details ${openIds.has(5)? 'open':''}`} style={{maxHeight:'0px'}}>
          <div className="project-body">
            <p>Conception et développement d'un outil d’aide à l’organisation de banquets — analyses, conception, réalisation du logiciel et livrables (3 dossiers).</p>
            <strong>Notions :</strong>
            <ul>
              <li>implémenter des Conceptions simples</li>
              <li>Élaborer des Conceptions simples</li>
              <li>Faire des essais et évaluer leurs résultats en regard des spécifications</li>
              <li>Développer des interfaces utilisateur</li>
              <li>Analyser un problème avec méthode (découpage éléments algorithmiques simples, structure donnée...).</li>
              <li>Formaliser et mettre en œuvre des outils mathématiques pour l’informatique</li>
              <li>Appréhender les besoins du client et de l'utilisateur</li>
              <li>Mettre en place les outils de gestion de projet</li>
              <li>Identifier les acteurs et les différentes phases d’un cycle de développement</li>
              <li>Identifier les statuts, les fonctions et les rôles de chaque membre d’une équipe </li>
              <li>Acquérir les compétences interpersonnelles pour travailler en équipe</li>
            </ul>
            <strong>Compétences techniques :</strong>
            {renderTechBadges(['UML', 'Java', 'JavaFX','Git','Junit5'])}
            <p className="project-footer">Travail en groupe : <br/>
            Ce projet s’est décomposé en plusieurs étapes, comprenant 3 dossiers à rendre,
             deux analyses de problème mathématique à résoudre dans un premier temps. 
             Et la réalisation du logiciel dans un second temps. Les 3 dossiers comprennent : 
             un dossier sur la gestion du projet, un dossier sur la conception/modélisation et un dossier sur l’interface homme-machine. <br/>
            Travail personnel :<br/>
            J’ai pris le rôle de chef de projet au sein de l'équipe. 
            Mon rôle a donc été de diviser efficacement la charge de travail entre tous les membres de l’équipe ainsi que de rythmer le travail tout au long du projet. 
            Concernant les différents points du projet, je me suis particulièrement impliqué dans les rendus de math ainsi que dans le dossier interface homme-machine.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
      )
}



