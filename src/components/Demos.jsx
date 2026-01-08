import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'
import './Demos.css'
import BusinessWebsiteDemo from './demos/BusinessWebsiteDemo'
import WebAppDemo from './demos/WebAppDemo'
import AppPrototypeDemo from './demos/AppPrototypeDemo'
import FormDemo from './demos/FormDemo'

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

const demoComponents = {
  website: BusinessWebsiteDemo,
  webapp: WebAppDemo,
  app: AppPrototypeDemo,
  form: FormDemo
}

function Demos() {
  const [activeDemo, setActiveDemo] = useState('website')
  const { translations } = useLanguage()
  const { demos } = translations
  const [headerRef, headerVisible] = useScrollAnimation()
  const [contentRef, contentVisible] = useScrollAnimation()
  
  const ActiveComponent = demoComponents[activeDemo]
  const activeItem = demos.items.find(d => d.id === activeDemo)

  return (
    <section className="section demos" id="demos">
      <div className="container">
        <div 
          ref={headerRef}
          className={`section-header animate-on-scroll ${headerVisible ? 'visible' : ''}`}
        >
          <span className="section-label">{demos.label}</span>
          <h2 className="section-title">{demos.title}</h2>
          <p className="section-description">
            {demos.description}
          </p>
        </div>
        
        <div 
          ref={contentRef}
          className={`demos-container animate-on-scroll ${contentVisible ? 'visible' : ''}`}
        >
          <div className="demos-tabs">
            {demos.items.map((demo) => (
              <button
                key={demo.id}
                className={`demo-tab ${activeDemo === demo.id ? 'active' : ''}`}
                onClick={() => setActiveDemo(demo.id)}
              >
                <span className="demo-tab-category">{demo.category}</span>
                <span className="demo-tab-title">{demo.title}</span>
              </button>
            ))}
          </div>
          
          <div className="demos-content">
            <div className="demo-info">
              <h3>{activeItem?.title}</h3>
              <p>{activeItem?.description}</p>
              <span className="demo-badge">{demos.badge}</span>
            </div>
            
            <div className="demo-viewport">
              {ActiveComponent && <ActiveComponent />}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Demos
