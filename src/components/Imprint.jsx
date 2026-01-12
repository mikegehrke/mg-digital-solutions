import { useLanguage } from '../context/LanguageContext'
import './LegalPages.css'

function Imprint({ onBack }) {
  const { translations: t } = useLanguage()
  const imprint = t.imprint

  return (
    <div className="legal-page">
      <div className="legal-container">
        <button className="back-button" onClick={onBack}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          {imprint.backToHome}
        </button>

        <h1>{imprint.title}</h1>

        <section className="legal-section">
          <h2>{imprint.according}</h2>
          <p>
            Mike Gehrke<br />
            Digital Solutions<br />
            Adolf-Kalsbach-Straße 40A<br />
            51147 Köln<br />
            Deutschland
          </p>
        </section>

        <section className="legal-section">
          <h2>{imprint.contact}</h2>
          <p>
            {imprint.phone}: <a href="tel:+4922039424878">+49 2203 9424878</a><br />
            {imprint.email}: <a href="mailto:gehrkemike2@gmail.com">hallo@mg-digital-solutions.de</a>
          </p>
        </section>

        <section className="legal-section">
          <h2>{imprint.responsible}</h2>
          <p>
            Mike Gehrke<br />
            Adolf-Kalsbach-Straße 40A<br />
            51147 Köln
          </p>
        </section>

        <section className="legal-section">
          <h2>{imprint.dispute}</h2>
          <p>
            {imprint.disputeText}<br />
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
              https://ec.europa.eu/consumers/odr
            </a>
          </p>
          <p>{imprint.disputeNote}</p>
        </section>

        <section className="legal-section">
          <h2>{imprint.liability}</h2>
          <p>{imprint.liabilityText}</p>
        </section>

        <section className="legal-section">
          <h2>{imprint.links}</h2>
          <p>{imprint.linksText}</p>
        </section>

        <section className="legal-section">
          <h2>{imprint.copyrightTitle}</h2>
          <p>{imprint.copyrightText}</p>
        </section>

        <button className="back-button bottom" onClick={onBack}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          {imprint.backToHome}
        </button>
      </div>
    </div>
  )
}

export default Imprint
