import React from 'react'

const skillCategories = [
  {
    title: 'Web et mobile',
    items: ['HTML', 'CSS', 'JavaScript','PHP', 'React','Symfony', 'Android studio']
  },
  {
    title: 'Back-end',
    items: ['Java', 'Python','C','C++', 'PostgreSQL',]
  },
  {
    title: 'Outils de développement et administration',
    items: ['Git', 'VS Code', 'Docker', 'IntelliJ', 'Bash','Linux',]
  },
  {
    title: 'Gestion de projet',
    items: ['UML', 'Tuleap', 'GitLab', 'Notion','Miro']
  },
  {
    title: 'Tests et qualité logicielle',
    items: ['Cypress', 'Junit', 'Mocha']
  }
]

const formationCards = [
  {
    title: "Partir	des	exigences	et	aller	jusqu'à une	application	complète",
    points: [
      'Élaborer	et	implémenter	les	spécifications	fonctionnelles	et	non	fonctionnelles	à	partir	des	exigences',
      'Appliquer	des	principes	d’accessibilité	et	d’ergonomie',
      'Adopter	de	bonnes	pratiques	de	conception	et	de	programmation',
      'Vérifier	et	valider	la	qualité	de l’application	par	les	tests'
    ]
  },
  {
    title: 'Sélectionner	les	algorithmes adéquats	pour	répondre	à	un problème	donné',
    points: [
      'Choisir	des	structures de données complexes	adaptées au problème',
      'Utiliser	des	techniques	algorithmiques	adaptées	pour	des	problèmes	complexes',
      'Comprendre	les	enjeux	et	moyens	de	sécurisation	des	données	et	du	code',
      'Évaluer	l’impact	environnemental	et	sociétal	des	solutions	proposées'
    ]
  },
  {
    title: 'Déployer	des	services	dans	une architecture	réseau',
    points: [
      'Concevoir	et	développer	des	applications	communicantes',
      'Utiliser	des	serveurs	et	des	services	réseaux	virtualisés',
      'Sécuriser	les	services	et	données	d’un	système'
    ]
  },
  {
    title: 'Optimiser	une	base	de	données, interagir	avec	une	application	et mettre	en	œuvre	la	sécurité',
    points: [
      'Optimiser	les	modèles	de	données	de	l’entreprise',
      'Assurer	la	sécurité	des	données',
      'Organiser	la	restitution	de	données	à	travers	la	programmation	et	la	visualisation',
      'Manipuler	des	données	hétérogènes'
    ]
  },
  {
    title: 'Appliquer	une	démarche	de	suivi de	projet	en	fonction	des	besoins métiers	des	clients	et	des utilisateurs',
    points: [
      'Identifier	les	processus	présents	dans	une	organisation	en	vue	d’améliorer	les	systèmes	d’information',
      "Formaliser	les	besoins	du	client	et	de	l'utilisateur",
      'Identifier	les	critères	de	faisabilité	d’un	projet	informatique-	AC25.04	|	Définir	et	mettre	en	œuvre	une	démarche	de	suivi	de	projet',
      'Définir	et	mettre	en	œuvre	une	démarche	de	suivi	de	projet'
    ]
  },
  {
    title: 'Situer	son	rôle	et	ses	missions	au sein	d’une	équipe	informatique',
    points: [
      'Comprendre	la	diversité,	la	structure	et	la	dimension	de	l’informatique	dans	une	organisation',
      'Appliquer	une	démarche	pour	intégrer	une	équipe	informatique	au	sein	d’une	organisation',
      'Mobiliser	les	compétences	interpersonnelles	pour	travailler	dans	une	équipe	informatique',
      'Rendre	compte	de	son	activité	professionnelle'
    ]
  }
]

export default function Competences(){
  return (
    <div className="competences-page">
      <header>
        <h1>Compétences</h1>
        <p className="competences-subtitle"><b>Mes compétences techniques et les savoirs développés pendant ma formation</b></p>
      </header>

      <section className="competences-section technical-section">
        <h2 className="section-title">Compétences techniques</h2>
        <div className="competence-grid">
          {skillCategories.map((category) => (
            <article key={category.title} className="skill-card">
              <h3>{category.title}</h3>
              <ul>
                {category.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="competences-section formation-section">
        <h2 className="section-title">Formation BUT</h2>
        <div className="formation-grid">
          {formationCards.map((card) => (
            <article key={card.title} className="formation-card">
              <h3>{card.title}</h3>
              <ul>
                {card.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
