import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import './FormDemo.css'

function FormDemo() {
  const [step, setStep] = useState(1)
  const [theme, setTheme] = useState('light')
  const { translations: t } = useLanguage()
  const d = t.demoForm || {}
  
  const [formData, setFormData] = useState({
    projectType: '',
    budget: '',
    timeline: '',
    name: '',
    email: '',
    phone: '',
    description: ''
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const projectTypes = [
    { id: 'website', label: d.website || 'Website', icon: '🌐' },
    { id: 'webapp', label: d.webapp || 'Web-App', icon: '💻' },
    { id: 'app', label: d.mobileApp || 'Mobile App', icon: '📱' },
    { id: 'automation', label: d.automation || 'Automatisierung', icon: '⚙️' }
  ]

  const budgets = [
    { id: 'small', label: d.budgetSmall || '< 2.000 €' },
    { id: 'medium', label: d.budgetMedium || '2.000 - 5.000 €' },
    { id: 'large', label: d.budgetLarge || '5.000 - 10.000 €' },
    { id: 'enterprise', label: d.budgetEnterprise || '> 10.000 €' }
  ]

  const timelines = [
    { id: 'asap', label: d.timelineAsap || 'So schnell wie möglich' },
    { id: '1month', label: d.timeline1Month || 'Innerhalb 1 Monat' },
    { id: '3months', label: d.timeline3Months || 'Innerhalb 3 Monate' },
    { id: 'flexible', label: d.timelineFlexible || 'Flexibel' }
  ]

  const validateStep = (stepNum) => {
    const newErrors = {}
    
    if (stepNum === 1 && !formData.projectType) {
      newErrors.projectType = d.selectProjectError || 'Bitte wählen Sie einen Projekttyp'
    }
    if (stepNum === 2 && !formData.budget) {
      newErrors.budget = d.selectBudgetError || 'Bitte wählen Sie ein Budget'
    }
    if (stepNum === 2 && !formData.timeline) {
      newErrors.timeline = d.selectTimelineError || 'Bitte wählen Sie einen Zeitrahmen'
    }
    if (stepNum === 3) {
      if (!formData.name) newErrors.name = d.nameRequired || 'Name ist erforderlich'
      if (!formData.email) newErrors.email = d.emailRequired || 'E-Mail ist erforderlich'
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = d.emailInvalid || 'Ungültige E-Mail-Adresse'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1)
    }
  }

  const handleBack = () => {
    setStep(step - 1)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateStep(3)) {
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <div className={`form-demo ${theme}`}>
        <button className="form-theme-toggle" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
        <div className="form-success-state">
          <div className="success-icon">✓</div>
          <h2>{d.successTitle || 'Anfrage erfolgreich gesendet!'}</h2>
          <p>{d.successText || 'Vielen Dank für Ihre Anfrage. Ich melde mich innerhalb von 24 Stunden bei Ihnen.'}</p>
          <div className="success-summary">
            <h4>{d.yourDetails || 'Ihre Angaben:'}</h4>
            <p><strong>{d.project || 'Projekt'}:</strong> {projectTypes.find(p => p.id === formData.projectType)?.label}</p>
            <p><strong>{d.budget || 'Budget'}:</strong> {budgets.find(b => b.id === formData.budget)?.label}</p>
            <p><strong>{d.name || 'Name'}:</strong> {formData.name}</p>
            <p><strong>{d.email || 'E-Mail'}:</strong> {formData.email}</p>
          </div>
          <button className="form-btn-primary" onClick={() => {
            setSubmitted(false)
            setStep(1)
            setFormData({ projectType: '', budget: '', timeline: '', name: '', email: '', phone: '', description: '' })
          }}>
            {d.newRequest || 'Neue Anfrage'}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={`form-demo ${theme}`}>
      <button className="form-theme-toggle" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
      <div className="form-container">
        {/* Progress Bar */}
        <div className="form-progress">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${(step / 3) * 100}%` }}></div>
          </div>
          <div className="progress-steps">
            <span className={step >= 1 ? 'active' : ''}>{d.projectType || 'Projekttyp'}</span>
            <span className={step >= 2 ? 'active' : ''}>{d.details || 'Details'}</span>
            <span className={step >= 3 ? 'active' : ''}>{d.contactInfo || 'Kontakt'}</span>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Step 1: Project Type */}
          {step === 1 && (
            <div className="form-step">
              <h2>{d.step1Title || 'Was möchten Sie umsetzen?'}</h2>
              <p className="step-description">{d.step1Desc || 'Wählen Sie den Typ Ihres Projekts'}</p>
              
              <div className="project-types">
                {projectTypes.map(type => (
                  <button
                    key={type.id}
                    type="button"
                    className={`project-type-btn ${formData.projectType === type.id ? 'selected' : ''}`}
                    onClick={() => setFormData({ ...formData, projectType: type.id })}
                  >
                    <span className="type-icon">{type.icon}</span>
                    <span className="type-label">{type.label}</span>
                  </button>
                ))}
              </div>
              {errors.projectType && <span className="error-message">{errors.projectType}</span>}
            </div>
          )}

          {/* Step 2: Budget & Timeline */}
          {step === 2 && (
            <div className="form-step">
              <h2>{d.step2Title || 'Budget & Zeitrahmen'}</h2>
              <p className="step-description">{d.step2Desc || 'Helfen Sie mir, Ihr Projekt besser einzuschätzen'}</p>
              
              <div className="form-section">
                <label>{d.plannedBudget || 'Geplantes Budget'}</label>
                <div className="radio-group">
                  {budgets.map(budget => (
                    <label key={budget.id} className={`radio-option ${formData.budget === budget.id ? 'selected' : ''}`}>
                      <input
                        type="radio"
                        name="budget"
                        value={budget.id}
                        checked={formData.budget === budget.id}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      />
                      <span className="radio-label">{budget.label}</span>
                    </label>
                  ))}
                </div>
                {errors.budget && <span className="error-message">{errors.budget}</span>}
              </div>

              <div className="form-section">
                <label>{d.timeline || 'Zeitrahmen'}</label>
                <div className="radio-group">
                  {timelines.map(timeline => (
                    <label key={timeline.id} className={`radio-option ${formData.timeline === timeline.id ? 'selected' : ''}`}>
                      <input
                        type="radio"
                        name="timeline"
                        value={timeline.id}
                        checked={formData.timeline === timeline.id}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      />
                      <span className="radio-label">{timeline.label}</span>
                    </label>
                  ))}
                </div>
                {errors.timeline && <span className="error-message">{errors.timeline}</span>}
              </div>
            </div>
          )}

          {/* Step 3: Contact Info */}
          {step === 3 && (
            <div className="form-step">
              <h2>{d.step3Title || 'Ihre Kontaktdaten'}</h2>
              <p className="step-description">{d.step3Desc || 'Wie kann ich Sie erreichen?'}</p>
              
              <div className="form-fields">
                <div className="form-field">
                  <label htmlFor="name">{d.name || 'Name'} *</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ihr vollständiger Name"
                    className={errors.name ? 'error' : ''}
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>

                <div className="form-field">
                  <label htmlFor="email">{d.email || 'E-Mail'} *</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ihre@email.de"
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                <div className="form-field">
                  <label htmlFor="phone">{d.phone || 'Telefon'} (optional)</label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+49 123 456789"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="description">{d.projectDescription || 'Projektbeschreibung'} (optional)</label>
                  <textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder={d.descriptionPlaceholder || 'Beschreiben Sie kurz Ihr Projekt...'}
                    rows="3"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="form-navigation">
            {step > 1 && (
              <button type="button" className="form-btn-secondary" onClick={handleBack}>
                {d.back || 'Zurück'}
              </button>
            )}
            {step < 3 ? (
              <button type="button" className="form-btn-primary" onClick={handleNext}>
                {d.next || 'Weiter'}
              </button>
            ) : (
              <button type="submit" className="form-btn-primary">
                {d.submit || 'Anfrage senden'}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default FormDemo
