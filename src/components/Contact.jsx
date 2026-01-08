import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import './Contact.css'

function Contact() {
  const { translations: t } = useLanguage()
  const c = t.contact || {}
  const f = c.form || {}
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setStatus('success')
    setLoading(false)
    setFormData({ name: '', email: '', message: '' })
    
    // Reset status after 5 seconds
    setTimeout(() => setStatus(null), 5000)
  }

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-info">
            <span className="section-label">{c.label || 'Kontakt'}</span>
            <h2 className="contact-title">{c.title || 'Lassen Sie uns sprechen'}</h2>
            <p className="contact-description">
              {c.description || 'Beschreiben Sie kurz, was Sie brauchen – ich melde mich zeitnah bei Ihnen.'}
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-item-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <span className="contact-item-label">{c.email || 'E-Mail'}</span>
                  <a href="mailto:mikegehrke@gmx.com" className="contact-item-value">mikegehrke@gmx.com</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-item-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <span className="contact-item-label">{c.phone || 'Telefon'}</span>
                  <a href="tel:+491632670137" className="contact-item-value">+49 163 267 0137</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-item-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <span className="contact-item-label">{c.location || 'Standort'}</span>
                  <span className="contact-item-value">Köln, Deutschland</span>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-item-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div>
                  <span className="contact-item-label">{c.responseTime || 'Reaktionszeit'}</span>
                  <span className="contact-item-value">{c.responseValue || 'Innerhalb von 24 Stunden'}</span>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="contact-map">
              <iframe
                title="Standort Köln"
                src="https://www.openstreetmap.org/export/embed.html?bbox=6.8596%2C50.9013%2C7.0096%2C50.9813&layer=mapnik&marker=50.9413%2C6.9346"
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: '12px' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">{f.name || 'Name'}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={f.namePlaceholder || 'Ihr Name'}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">{f.email || 'E-Mail'}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={f.emailPlaceholder || 'ihre@email.de'}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">{f.message || 'Ihre Nachricht'}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={f.messagePlaceholder || 'Beschreiben Sie kurz Ihr Projekt oder Ihre Anforderungen...'}
                  rows="5"
                  required
                />
              </div>
              
              <button 
                type="submit" 
                className={`btn btn-primary btn-submit ${loading ? 'loading' : ''}`}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="spinner"></span>
                    {f.sending || 'Wird gesendet...'}
                  </>
                ) : (
                  <>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="22" y1="2" x2="11" y2="13"/>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                    {f.submit || 'Nachricht senden'}
                  </>
                )}
              </button>
              
              {status === 'success' && (
                <div className="form-success">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  {f.success || 'Vielen Dank! Ich melde mich in Kürze bei Ihnen.'}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
