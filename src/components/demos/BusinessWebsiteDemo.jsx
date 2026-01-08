import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import './BusinessWebsiteDemo.css'

function BusinessWebsiteDemo() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [activeNav, setActiveNav] = useState('home')
  const [theme, setTheme] = useState('light')
  const { translations: t } = useLanguage()
  const d = t.demoWebsite || {}

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  return (
    <div className={`business-demo ${theme}`}>
      {/* Theme Toggle */}
      <button className="demo-theme-toggle" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        {theme === 'light' ? '🌙' : '☀️'}
      </button>

      {/* Navigation */}
      <nav className="demo-nav">
        <div className="demo-nav-logo">
          <span className="demo-logo-icon">TB</span>
          <span>TechBau GmbH</span>
        </div>
        <div className="demo-nav-links">
          <a href="#" className={activeNav === 'home' ? 'active' : ''} onClick={() => setActiveNav('home')}>{d.nav?.home || 'Start'}</a>
          <a href="#" className={activeNav === 'services' ? 'active' : ''} onClick={() => setActiveNav('services')}>{d.nav?.services || 'Leistungen'}</a>
          <a href="#" className={activeNav === 'projects' ? 'active' : ''} onClick={() => setActiveNav('projects')}>{d.nav?.projects || 'Projekte'}</a>
          <a href="#" className={activeNav === 'contact' ? 'active' : ''} onClick={() => setActiveNav('contact')}>{d.nav?.contact || 'Kontakt'}</a>
        </div>
        <button className="demo-nav-cta">{d.cta || 'Angebot anfordern'}</button>
      </nav>

      {/* Hero */}
      <section className="demo-hero">
        <div className="demo-hero-content">
          <span className="demo-hero-badge">{d.badge || '✓ Über 200 zufriedene Kunden'}</span>
          <h1>{d.heroTitle || 'Bauprojekte professionell umgesetzt'}</h1>
          <p>{d.heroText || 'Von der Planung bis zur Fertigstellung – Ihr Partner für Hoch- und Tiefbau in der Region.'}</p>
          <div className="demo-hero-buttons">
            <button className="demo-btn-primary">{d.btnPrimary || 'Kostenlose Beratung'}</button>
            <button className="demo-btn-secondary">{d.btnSecondary || 'Referenzen ansehen'}</button>
          </div>
        </div>
        <div className="demo-hero-image">
          <div className="demo-image-placeholder">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="demo-services">
        <h2>{d.servicesTitle || 'Unsere Leistungen'}</h2>
        <div className="demo-services-grid">
          <div className="demo-service-card">
            <div className="demo-service-icon">🏗️</div>
            <h3>{d.service1?.title || 'Hochbau'}</h3>
            <p>{d.service1?.text || 'Wohn- und Gewerbegebäude nach Ihren Vorstellungen'}</p>
          </div>
          <div className="demo-service-card">
            <div className="demo-service-icon">🏠</div>
            <h3>{d.service2?.title || 'Sanierung'}</h3>
            <p>{d.service2?.text || 'Modernisierung und Renovierung bestehender Gebäude'}</p>
          </div>
          <div className="demo-service-card">
            <div className="demo-service-icon">🔧</div>
            <h3>{d.service3?.title || 'Wartung'}</h3>
            <p>{d.service3?.text || 'Regelmäßige Instandhaltung für Ihre Immobilien'}</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="demo-contact">
        <div className="demo-contact-content">
          <h2>{d.contactTitle || 'Jetzt Kontakt aufnehmen'}</h2>
          <p>{d.contactText || 'Wir melden uns innerhalb von 24 Stunden bei Ihnen.'}</p>
        </div>
        <form className="demo-contact-form" onSubmit={handleSubmit}>
          {submitted ? (
            <div className="demo-success-message">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              {d.formSuccess || 'Vielen Dank! Wir melden uns bei Ihnen.'}
            </div>
          ) : (
            <>
              <input 
                type="text" 
                placeholder={d.formName || 'Ihr Name'}
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
              <input 
                type="email" 
                placeholder={d.formEmail || 'E-Mail Adresse'}
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
              <textarea 
                placeholder={d.formMessage || 'Ihre Nachricht'}
                rows="3"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
              />
              <button type="submit" className="demo-btn-primary">{d.formSubmit || 'Anfrage senden'}</button>
            </>
          )}
        </form>
      </section>
    </div>
  )
}

export default BusinessWebsiteDemo
