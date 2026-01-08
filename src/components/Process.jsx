import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import './Process.css'

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

const stepIcons = [
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>,
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <polyline points="16 18 22 12 16 6"/>
    <polyline points="8 6 2 12 8 18"/>
  </svg>,
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
]

function Process() {
  const { translations } = useLanguage()
  const { process } = translations
  const [headerRef, headerVisible] = useScrollAnimation()
  const [stepsRef, stepsVisible] = useScrollAnimation()

  return (
    <section className="section process" id="process">
      <div className="container">
        <div 
          ref={headerRef}
          className={`section-header animate-on-scroll ${headerVisible ? 'visible' : ''}`}
        >
          <span className="section-label">{process.label}</span>
          <h2 className="section-title">{process.title}</h2>
          <p className="section-description">
            {process.description}
          </p>
        </div>
        
        <div 
          ref={stepsRef}
          className={`process-steps stagger-children ${stepsVisible ? 'visible' : ''}`}
        >
          {process.steps.map((step, index) => (
            <div className="process-step" key={index}>
              <div className="step-icon-wrapper">
                <div className="step-icon">
                  {stepIcons[index]}
                </div>
                {index < process.steps.length - 1 && <div className="step-connector" />}
              </div>
              <div className="step-content">
                <span className="step-number">{step.number}</span>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
