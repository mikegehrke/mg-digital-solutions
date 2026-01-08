import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'
import './ROICalculator.css'

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

function ROICalculator() {
  const { language } = useLanguage()
  const [teamSize, setTeamSize] = useState(5)
  const [manualHours, setManualHours] = useState(20)
  const [hourlyRate, setHourlyRate] = useState(45)
  const [headerRef, headerVisible] = useScrollAnimation()
  const [contentRef, contentVisible] = useScrollAnimation()

  // Calculations
  const weeklyLoss = teamSize * manualHours * hourlyRate
  const monthlyLoss = weeklyLoss * 4
  const yearlyLoss = monthlyLoss * 12
  const threeYearLoss = yearlyLoss * 3

  // With automation (70% reduction assumed)
  const automationSavings = 0.70
  const yearlySavings = yearlyLoss * automationSavings
  const threeYearSavings = threeYearLoss * automationSavings

  const t = {
    de: {
      label: 'KOSTENRECHNER',
      title: 'Potenziale erkennen.',
      description: 'Schätzen Sie, welche Kosten durch manuelle Prozesse entstehen könnten.',
      teamSize: 'Teamgröße',
      teamSizeDesc: 'Mitarbeiter mit manuellen Aufgaben',
      manualHours: 'Manuelle Stunden',
      manualHoursDesc: 'Stunden pro Woche für repetitive Aufgaben',
      hourlyRate: 'Stundensatz',
      hourlyRateDesc: 'Durchschnittliche Kosten pro Stunde',
      currentDrain: 'Geschätzte Kosten',
      weekly: 'Wöchentlich',
      monthly: 'Monatlich',
      yearly: 'Jährlich',
      recovery: 'Einspar-Potenzial',
      automationSaves: 'Bei ca. 70% Automatisierung',
      threeYear: '3-Jahres-Potenzial',
      cta: 'Kostenloses Erstgespräch',
      disclaimer: 'Schätzungen basieren auf typischen Annahmen. Tatsächliche Ergebnisse variieren je nach Unternehmensgröße, Prozessen und Umsetzung.'
    },
    en: {
      label: 'COST CALCULATOR',
      title: 'Recognize Potential.',
      description: 'Estimate what costs manual processes could cause in your business.',
      teamSize: 'Team Size',
      teamSizeDesc: 'Employees doing manual tasks',
      manualHours: 'Manual Hours',
      manualHoursDesc: 'Hours per week on repetitive tasks',
      hourlyRate: 'Hourly Rate',
      hourlyRateDesc: 'Average cost per hour',
      currentDrain: 'Estimated Costs',
      weekly: 'Weekly',
      monthly: 'Monthly',
      yearly: 'Yearly',
      recovery: 'Savings Potential',
      automationSaves: 'With approx. 70% automation',
      threeYear: '3-Year Potential',
      cta: 'Free Consultation',
      disclaimer: 'Estimates based on typical assumptions. Actual results may vary depending on business size, processes and implementation.'
    }
  }

  const text = t[language] || t.de

  const formatCurrency = (value) => {
    return '€' + value.toLocaleString('de-DE')
  }

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="section roi-calculator" id="roi">
      <div className="container">
        <div 
          ref={headerRef}
          className={`section-header animate-on-scroll ${headerVisible ? 'visible' : ''}`}
        >
          <span className="section-label">{text.label}</span>
          <h2 className="section-title roi-title">{text.title}</h2>
          <p className="section-description">{text.description}</p>
        </div>

        <div 
          ref={contentRef}
          className={`roi-content animate-on-scroll ${contentVisible ? 'visible' : ''}`}
        >
          {/* Sliders */}
          <div className="roi-sliders">
            <div className="slider-group">
              <div className="slider-header">
                <div className="slider-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <div className="slider-info">
                  <label>{text.teamSize}</label>
                  <span className="slider-desc">{text.teamSizeDesc}</span>
                </div>
                <span className="slider-value">{teamSize}</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="50" 
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="slider"
              />
            </div>

            <div className="slider-group">
              <div className="slider-header">
                <div className="slider-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div className="slider-info">
                  <label>{text.manualHours}</label>
                  <span className="slider-desc">{text.manualHoursDesc}</span>
                </div>
                <span className="slider-value">{manualHours}h</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="40" 
                value={manualHours}
                onChange={(e) => setManualHours(Number(e.target.value))}
                className="slider"
              />
            </div>

            <div className="slider-group">
              <div className="slider-header">
                <div className="slider-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="1" x2="12" y2="23"/>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                </div>
                <div className="slider-info">
                  <label>{text.hourlyRate}</label>
                  <span className="slider-desc">{text.hourlyRateDesc}</span>
                </div>
                <span className="slider-value">€{hourlyRate}</span>
              </div>
              <input 
                type="range" 
                min="15" 
                max="150" 
                step="5"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                className="slider"
              />
            </div>
          </div>

          {/* Results */}
          <div className="roi-results">
            <div className="result-card drain">
              <div className="result-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <h4>{text.currentDrain}</h4>
              <div className="result-values">
                <div className="result-row">
                  <span>{text.weekly}</span>
                  <span className="loss">{formatCurrency(weeklyLoss)}</span>
                </div>
                <div className="result-row">
                  <span>{text.monthly}</span>
                  <span className="loss">{formatCurrency(monthlyLoss)}</span>
                </div>
                <div className="result-row highlight">
                  <span>{text.yearly}</span>
                  <span className="loss big">{formatCurrency(yearlyLoss)}</span>
                </div>
              </div>
            </div>

            <div className="result-card recovery">
              <div className="result-icon success">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h4>{text.recovery}</h4>
              <p className="result-note">{text.automationSaves}</p>
              <div className="result-values">
                <div className="result-row">
                  <span>{text.yearly}</span>
                  <span className="savings">{formatCurrency(yearlySavings)}</span>
                </div>
                <div className="result-row highlight">
                  <span>{text.threeYear}</span>
                  <span className="savings big">{formatCurrency(threeYearSavings)}</span>
                </div>
              </div>
              <button className="btn btn-primary result-cta" onClick={scrollToContact}>
                {text.cta}
              </button>
            </div>
          </div>
          <p className="roi-disclaimer">{text.disclaimer}</p>
        </div>
      </div>
    </section>
  )
}

export default ROICalculator
