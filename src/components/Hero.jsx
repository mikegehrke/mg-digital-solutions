import { useLanguage } from '../context/LanguageContext'
import './Hero.css'

function Hero() {
  const { t } = useLanguage()
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-gradient"></div>
        <div className="hero-grid"></div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            {t('hero.badge')}
          </div>
          
          <h1 className="hero-title">
            {t('hero.title')} <span className="gradient-text">{t('hero.titleHighlight')}</span>
          </h1>
          
          <p className="hero-subtitle">
            {t('hero.subtitle')}
          </p>
          
          <div className="hero-ctas">
            <button className="btn btn-primary btn-lg" onClick={() => scrollToSection('contact')}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              {t('hero.ctaPrimary')}
            </button>
            <button className="btn btn-secondary btn-lg" onClick={() => scrollToSection('demos')}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
              {t('hero.ctaSecondary')}
            </button>
          </div>
          
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-value">{t('hero.stat1Value')}</span>
              <span className="stat-label">{t('hero.stat1Label')}</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-value">{t('hero.stat2Value')}</span>
              <span className="stat-label">{t('hero.stat2Label')}</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-value">{t('hero.stat3Value')}</span>
              <span className="stat-label">{t('hero.stat3Label')}</span>
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="hero-mockups">
            {/* Desktop Mockup */}
            <div className="mockup mockup-desktop">
              <div className="mockup-header">
                <div className="mockup-dots">
                  <span></span><span></span><span></span>
                </div>
                <div className="mockup-url">example-business.de</div>
              </div>
              <div className="mockup-content">
                <div className="mockup-nav"></div>
                <div className="mockup-hero-block">
                  <div className="mockup-title"></div>
                  <div className="mockup-text"></div>
                  <div className="mockup-btn"></div>
                </div>
                <div className="mockup-cards">
                  <div className="mockup-card"></div>
                  <div className="mockup-card"></div>
                  <div className="mockup-card"></div>
                </div>
              </div>
            </div>
            
            {/* Mobile Mockup */}
            <div className="mockup mockup-mobile">
              <div className="mockup-notch"></div>
              <div className="mockup-mobile-content">
                <div className="mockup-app-header"></div>
                <div className="mockup-app-card"></div>
                <div className="mockup-app-card"></div>
                <div className="mockup-app-nav">
                  <span></span><span></span><span></span><span></span>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="floating-card floating-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span>Projekt abgeschlossen</span>
            </div>
            
            <div className="floating-card floating-2">
              <div className="floating-chart">
                <div className="bar" style={{height: '40%'}}></div>
                <div className="bar" style={{height: '70%'}}></div>
                <div className="bar" style={{height: '55%'}}></div>
                <div className="bar" style={{height: '90%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
