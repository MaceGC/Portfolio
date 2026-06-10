import React, {useState, useRef, useEffect} from 'react'

export default function Home(){
  const [open, setOpen] = useState(false)
  const aboutRef = useRef(null)

  function toggleAbout(){
    const next = !open
    setOpen(next)
    const el = aboutRef.current
    if(!el) return
    if(next){
      // set explicit maxHeight to content height so it doesn't clip
      el.style.maxHeight = el.scrollHeight + 'px'
    } else {
      el.style.maxHeight = '0px'
    }
  }

  useEffect(()=>{
    const el = aboutRef.current
    if(!el) return

    // update function
    const update = ()=>{
      if(open){
        // allow slight extra room
        el.style.maxHeight = el.scrollHeight + 12 + 'px'
      }
    }

    // ResizeObserver to watch content changes
    let ro = null
    if(window.ResizeObserver){
      ro = new ResizeObserver(update)
      ro.observe(el)
      // also observe children to be safer
      Array.from(el.children).forEach(c=> ro.observe(c))
    }

    // window resize fallback
    window.addEventListener('resize', update)

    return ()=>{
      window.removeEventListener('resize', update)
      if(ro){
        try{ ro.disconnect() }catch(e){}
      }
    }
  }, [open])
  return (
    <section className={`section ${open? 'open':''}`}>
      <header>
        <h1>BIENVENUE SUR MON PORTFOLIO</h1>
      </header>

      <div>
        <button className={`toggle-btn ${open? 'open':''}`} onClick={toggleAbout}>
          <span>A Propos de moi</span>
          <span className={`toggle-icon ${open? 'open':''}`} aria-hidden="true">
            <span className="bar horizontal"></span>
            <span className="bar vertical"></span>
          </span>
        </button>
      </div>

      <div id="about" ref={aboutRef} className={`about-content ${open? 'open':''}`}>
        <div className="presentation">
          <div className="presentation-left">
            
            <h3>Macéo GUICHERD-CALLIN</h3>
            <p className="subtitle">Étudiant en 2ème année BUT Informatique — IUT2 Grenoble</p>
            <p className="bio">Etudiant en BUT informatique parcours réalisation d'applications.</p>

             <section>
              <h4>Passions</h4>
              <ul className="passions">
                <li className="passion-item"><i className="fa-solid fa-film" aria-hidden="true"></i> Cinéma</li>
                <li className="passion-item"><i className="fa-solid fa-hiking" aria-hidden="true"></i> Escalade</li>
                <li className="passion-item"><i className="fa-solid fa-book" aria-hidden="true"></i> Littérature</li>
                <li className="passion-item"><i className="fa-solid fa-theater-masks" aria-hidden="true"></i> Théâtre</li>
                <li className="passion-item"><i className="fa-solid fa-gamepad" aria-hidden="true"></i> Jeux‑Vidéo</li>
              </ul>
            </section>
          </div>

          <div className="presentation-right">
            <section>
              <h4>Parcours</h4>
              <ul className="timeline">
                <li>
                    <div className="time-dot" />
                    <div className="time-content">
                      <strong>2026 — Stage Développeur Java</strong>
                      <div className="muted">Softway Medical Lyon— Test d'intégration et développement logiciel</div>
                    </div>
                </li>
                <li>
                  <div className="time-dot" />
                  <div className="time-content">
                    <strong>2024 à Aujourd'hui —  BUT Informatique parcours réalisation d'applications</strong>
                    <div className="muted">IUT2 Grenoble</div>
                  </div>
                </li>
                <li>
                  <div className="time-dot" />
                  <div className="time-content">
                    <strong>2024 — Baccalauréat</strong>
                    <div className="muted">Mathématiques & NSI — Lycée Philibert Delorme</div>
                  </div>
                </li>
              </ul>
            </section>

           
          </div>
        </div>
      </div>
    </section>
  )
}
