import { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import './Header.css'

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const { language, toggleLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Track active section
      const sections = ['services', 'demos', 'process', 'contact']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
      setActiveSection(id)
    }
  }

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        <a href="#" className="logo" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setActiveSection(''); }}>
          <div className="logo-icon">
            <span>MG</span>
          </div>
          <div className="logo-text">
            <span className="logo-name">MIKE GEHRKE</span>
            <span className="logo-tagline">Digital Solutions</span>
          </div>
        </a>

        <nav className={`nav ${mobileMenuOpen ? 'nav-open' : ''}`}>
          <button className={`nav-link ${activeSection === 'services' ? 'active' : ''}`} onClick={() => scrollToSection('services')}>{t('nav.services')}</button>
          <button className={`nav-link ${activeSection === 'demos' ? 'active' : ''}`} onClick={() => scrollToSection('demos')}>{t('nav.demos')}</button>
          <button className={`nav-link ${activeSection === 'process' ? 'active' : ''}`} onClick={() => scrollToSection('process')}>{t('nav.process')}</button>
          <button className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={() => scrollToSection('contact')}>{t('nav.contact')}</button>
        </nav>

        <div className="header-actions">
          <button className="lang-toggle" onClick={toggleLanguage} title="Switch Language">
            {language === 'de' ? 'EN' : 'DE'}
          </button>
          <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
            {t('nav.cta')}
          </button>
        </div>

        <button 
          className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menü"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header
