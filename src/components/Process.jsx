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

function Process() {
  const { translations } = useLanguage()
  const { process } = translations
  const [headerRef, headerVisible] = useScrollAnimation()
  const [stepsRef, stepsVisible] = useScrollAnimation()
  const [activeStep, setActiveStep] = useState(0)

  // Auto-advance animation
  useEffect(() => {
    if (!stepsVisible) return
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % 3)
    }, 2500)
    return () => clearInterval(interval)
  }, [stepsVisible])

  const icons = ['💬', '⚡', '✓']

  return (
    <section className="section process" id="process">
      <div className="container">
        <div 
          ref={headerRef}
          className={`section-header animate-on-scroll ${headerVisible ? 'visible' : ''}`}
        >
          <span className="section-label">{process.label}</span>
          <h2 className="section-title process-title">{process.title}</h2>
          <p className="section-description">{process.description}</p>
        </div>
        
        <div 
          ref={stepsRef}
          className={`process-container ${stepsVisible ? 'visible' : ''}`}
        >
          {/* Progress Line */}
          <div className="process-line">
            <div 
              className="process-line-fill" 
              style={{ width: `${((activeStep + 1) / 3) * 100}%` }}
            />
          </div>

          {/* Steps */}
          <div className="process-steps">
            {process.steps.map((step, index) => (
              <div 
                key={index}
                className={`process-step ${index <= activeStep ? 'active' : ''} ${index === activeStep ? 'current' : ''}`}
                onClick={() => setActiveStep(index)}
              >
                <div className="step-icon">
                  <span>{icons[index]}</span>
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
      </div>
    </section>
  )
}

export default Process
