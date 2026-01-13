import { useLanguage } from '../context/LanguageContext'
import './WebCheckCTA.css'

function WebCheckCTA({ variant = 'section' }) {
  const { t } = useLanguage()

  const handleClick = () => {
    window.open('https://webcheck360-de.vercel.app', '_blank')
  }

  if (variant === 'inline') {
    return (
      <button className="webcheck-cta-inline" onClick={handleClick}>
        <span className="webcheck-pulse"></span>
        <span className="webcheck-icon">🔍</span>
        <span className="webcheck-text">{t('webcheck.inline')}</span>
        <span className="webcheck-arrow">→</span>
      </button>
    )
  }

  if (variant === 'header') {
    return (
      <button className="webcheck-cta-header" onClick={handleClick}>
        <span className="webcheck-badge">{t('webcheck.badge')}</span>
        <span>{t('webcheck.headerBtn')}</span>
      </button>
    )
  }

  // Section variant (default)
  return (
    <section className="webcheck-section" id="webcheck">
      <div className="webcheck-container">
        <div className="webcheck-content">
          <div className="webcheck-badge-large">{t('webcheck.badge')}</div>
          <h2 className="webcheck-title">{t('webcheck.title')}</h2>
          <p className="webcheck-description">{t('webcheck.description')}</p>
          
          <div className="webcheck-features">
            <div className="webcheck-feature">
              <span className="webcheck-feature-icon">⚡</span>
              <span>{t('webcheck.feature1')}</span>
            </div>
            <div className="webcheck-feature">
              <span className="webcheck-feature-icon">📊</span>
              <span>{t('webcheck.feature2')}</span>
            </div>
            <div className="webcheck-feature">
              <span className="webcheck-feature-icon">🎯</span>
              <span>{t('webcheck.feature3')}</span>
            </div>
          </div>

          <button className="webcheck-cta-button" onClick={handleClick}>
            <span className="webcheck-cta-pulse"></span>
            <span className="webcheck-cta-content">
              <span className="webcheck-cta-icon">🚀</span>
              <span>{t('webcheck.cta')}</span>
            </span>
          </button>

          <p className="webcheck-subtext">{t('webcheck.subtext')}</p>
        </div>

        <div className="webcheck-visual">
          <div className="webcheck-mockup">
            <div className="webcheck-mockup-header">
              <span className="webcheck-mockup-dot"></span>
              <span className="webcheck-mockup-dot"></span>
              <span className="webcheck-mockup-dot"></span>
            </div>
            <div className="webcheck-mockup-content">
              <div className="webcheck-score-circle">
                <svg viewBox="0 0 100 100">
                  <circle className="webcheck-score-bg" cx="50" cy="50" r="45" />
                  <circle className="webcheck-score-progress" cx="50" cy="50" r="45" />
                </svg>
                <span className="webcheck-score-value">85</span>
              </div>
              <div className="webcheck-mockup-bars">
                <div className="webcheck-bar" style={{ width: '90%' }}></div>
                <div className="webcheck-bar" style={{ width: '75%' }}></div>
                <div className="webcheck-bar" style={{ width: '85%' }}></div>
                <div className="webcheck-bar" style={{ width: '80%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WebCheckCTA
