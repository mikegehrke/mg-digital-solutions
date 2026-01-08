import { useLanguage } from '../context/LanguageContext'
import './LegalPages.css'

function Privacy({ onBack }) {
  const { translations: t } = useLanguage()
  const privacy = t.privacy

  return (
    <div className="legal-page">
      <div className="legal-container">
        <button className="back-button" onClick={onBack}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          {privacy.backToHome}
        </button>

        <h1>{privacy.title}</h1>

        <section className="legal-section">
          <h2>{privacy.overview}</h2>
          <h3>{privacy.overviewTitle}</h3>
          <p>{privacy.overviewText}</p>
        </section>

        <section className="legal-section">
          <h2>{privacy.responsible}</h2>
          <p>{privacy.responsibleText}</p>
          <div className="info-box">
            <p>
              <strong>Mike Gehrke</strong><br />
              Digital Solutions<br />
              Köln, Deutschland<br />
              E-Mail: <a href="mailto:mikegehrke@gmx.com">mikegehrke@gmx.com</a><br />
              Telefon: <a href="tel:+4901632670137">+49 163 267 0137</a>
            </p>
          </div>
        </section>

        <section className="legal-section">
          <h2>{privacy.howCollect}</h2>
          <p>{privacy.howCollectText}</p>
        </section>

        <section className="legal-section">
          <h2>{privacy.purpose}</h2>
          <p>{privacy.purposeText}</p>
        </section>

        <section className="legal-section">
          <h2>{privacy.rights}</h2>
          <p>{privacy.rightsText}</p>
        </section>

        <section className="legal-section">
          <h2>{privacy.hosting}</h2>
          <p>{privacy.hostingText}</p>
        </section>

        <section className="legal-section">
          <h2>{privacy.contactForm}</h2>
          <p>{privacy.contactFormText}</p>
        </section>

        <section className="legal-section">
          <h2>{privacy.cookies}</h2>
          <p>{privacy.cookiesText}</p>
        </section>

        <button className="back-button bottom" onClick={onBack}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          {privacy.backToHome}
        </button>
      </div>
    </div>
  )
}

export default Privacy
