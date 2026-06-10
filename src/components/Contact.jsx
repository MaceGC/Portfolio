import React, {useState} from 'react'

export default function Contact(){
  const [form, setForm] = useState({name:'', email:'', message:''})
  const [status, setStatus] = useState(null)

  async function handleSubmit(e){
    e.preventDefault()
    setStatus('sending')
    try{
      const res = await fetch('https://formspree.io/f/xkoajkqn', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message
        })
      })
      if(res.ok){
        setStatus('sent')
        setForm({name:'', email:'', message:''})
      } else {
        setStatus('error')
      }
    } catch(err){
      setStatus('error')
    }
  }

  return (
    <main>
      <div className="form-container">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <label>Nom</label>
          <input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required />
          <label>Email</label>
          <input type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required />
          <label>Message</label>
          <textarea value={form.message} onChange={e=>setForm({...form, message:e.target.value})} required />
          <button type="submit">Envoyer</button>
        </form>
        {status==='sending' && <p>Envoi en cours…</p>}
        {status==='sent' && <p>Message envoyé — merci !</p>}
        {status==='error' && <p>Erreur lors de l'envoi. Vérifiez l'endpoint.</p>}
      </div>
    </main>
  )
}
