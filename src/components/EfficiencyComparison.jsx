import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'
import './EfficiencyComparison.css'

function useScrollAnimation() {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(element)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return [ref, isVisible]
}

function EfficiencyComparison() {
  const { language } = useLanguage()
  const [activeView, setActiveView] = useState('manual')
  const [headerRef, headerVisible] = useScrollAnimation()
  const [contentRef, contentVisible] = useScrollAnimation()

  const t = {
    de: {
      label: 'PROZESSVERGLEICH',
      title: 'Manuelle vs. automatisierte Abläufe',
      description: 'Ein typisches Beispiel aus der Praxis.',
      manual: 'Manuell',
      automated: 'Automatisiert',
      manualTime: 'mehrere Std.',
      autoTime: 'Minuten',
      manualItems: ['Lead manuell erfassen', 'CRM Dateneingabe', 'E-Mail schreiben', 'Nachfassen planen', 'Angebot erstellen'],
      autoItems: ['Automatische Erfassung', 'Daten-Sync', 'Vorlagen-E-Mail', 'Geplante Follow-ups', 'Schnelle Angebotserstellung'],
      savings: 'Potenzielle Zeitersparnis',
      savingsValue: 'erheblich',
      cta: 'Kostenloses Erstgespräch'
    },
    en: {
      label: 'PROCESS COMPARISON',
      title: 'Manual vs. Automated Workflows',
      description: 'A typical real-world example.',
      manual: 'Manual',
      automated: 'Automated',
      manualTime: 'several hrs',
      autoTime: 'minutes',
      manualItems: ['Manual lead capture', 'CRM data entry', 'Write emails', 'Plan follow-ups', 'Create quotes'],
      autoItems: ['Automatic capture', 'Data sync', 'Template emails', 'Scheduled follow-ups', 'Quick quote creation'],
      savings: 'Potential Time Savings',
      savingsValue: 'significant',
      cta: 'Free Consultation'
    }
  }

  const text = t[language] || t.de

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="section efficiency-comparison" id="efficiency">
      <div className="container">
        <div 
          ref={headerRef}
          className={`section-header animate-on-scroll ${headerVisible ? 'visible' : ''}`}
        >
          <span className="section-label">{text.label}</span>
          <h2 className="section-title efficiency-title">{text.title}</h2>
          <p className="section-description">{text.description}</p>
        </div>

        <div 
          ref={contentRef}
          className={`efficiency-content animate-on-scroll ${contentVisible ? 'visible' : ''}`}
        >
          {/* Toggle Buttons */}
          <div className="efficiency-toggle">
            <button 
              className={`toggle-btn ${activeView === 'manual' ? 'active manual-active' : ''}`}
              onClick={() => setActiveView('manual')}
            >
              <span className="toggle-icon">⏱️</span>
              <span>{text.manual}</span>
              <span className="toggle-time manual-time">{text.manualTime}</span>
            </button>
            <button 
              className={`toggle-btn ${activeView === 'automated' ? 'active auto-active' : ''}`}
              onClick={() => setActiveView('automated')}
            >
              <span className="toggle-icon">⚡</span>
              <span>{text.automated}</span>
              <span className="toggle-time auto-time">{text.autoTime}</span>
            </button>
          </div>

          {/* Animated Display */}
          <div className={`efficiency-display ${activeView}`}>
            <div className="display-content">
              {activeView === 'manual' ? (
                <div className="items-grid manual-grid">
                  {text.manualItems.map((item, i) => (
                    <div key={i} className="efficiency-item manual-item" style={{ animationDelay: `${i * 0.1}s` }}>
                      <span className="item-icon">❌</span>
                      <span>{item}</span>
                    </div>
                  ))}
                  <div className="time-indicator manual-indicator">
                    <div className="time-bar">
                      <div className="time-fill manual-fill"></div>
                    </div>
                    <span>{text.manualTime}</span>
                  </div>
                </div>
              ) : (
                <div className="items-grid auto-grid">
                  {text.autoItems.map((item, i) => (
                    <div key={i} className="efficiency-item auto-item" style={{ animationDelay: `${i * 0.1}s` }}>
                      <span className="item-icon">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                  <div className="time-indicator auto-indicator">
                    <div className="time-bar">
                      <div className="time-fill auto-fill"></div>
                    </div>
                    <span>{text.autoTime}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Savings Badge */}
            <div className={`savings-badge ${activeView === 'automated' ? 'show' : ''}`}>
              <span className="savings-label">{text.savings}</span>
              <span className="savings-value">{text.savingsValue}</span>
            </div>
          </div>

          <button className="btn btn-primary efficiency-cta" onClick={scrollToContact}>
            {text.cta}
          </button>
        </div>
      </div>
    </section>
  )
}

export default EfficiencyComparison
