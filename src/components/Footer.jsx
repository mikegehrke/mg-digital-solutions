import { useLanguage } from '../context/LanguageContext'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useLanguage()

  const handleLegalClick = (e, hash) => {
    e.preventDefault()
    window.location.hash = hash
    window.scrollTo(0, 0)
  }

  const handleSectionClick = (e, sectionId) => {
    e.preventDefault()
    // Prüfen ob wir auf einer Legal-Seite sind
    const currentHash = window.location.hash
    if (currentHash === '#impressum' || currentHash === '#datenschutz' || 
        currentHash === '#imprint' || currentHash === '#privacy') {
      // Zuerst zur Startseite, dann zum Abschnitt
      window.location.hash = ''
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      // Auf Startseite - direkt scrollen
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-icon">
                <span>MG</span>
              </div>
              <div className="logo-text">
                <span className="logo-name">MIKE GEHRKE</span>
                <span className="logo-tagline">Digital Solutions</span>
              </div>
            </div>
            <p className="footer-description">
              {t('footer.description')}
            </p>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4>{t('footer.services')}</h4>
              <ul>
                <li><a href="#services" onClick={(e) => handleSectionClick(e, 'services')}>{t('footer.websites')}</a></li>
                <li><a href="#services" onClick={(e) => handleSectionClick(e, 'services')}>{t('footer.webapps')}</a></li>
                <li><a href="#demos" onClick={(e) => handleSectionClick(e, 'demos')}>{t('footer.prototypes')}</a></li>
                <li><a href="#services" onClick={(e) => handleSectionClick(e, 'services')}>{t('footer.automation')}</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>{t('footer.legal')}</h4>
              <ul>
                <li><a href="#impressum" onClick={(e) => handleLegalClick(e, 'impressum')}>{t('footer.imprint')}</a></li>
                <li><a href="#datenschutz" onClick={(e) => handleLegalClick(e, 'datenschutz')}>{t('footer.privacy')}</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© {currentYear} Mike Gehrke · Digital Solutions. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
