import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import './Demos.css'
import BusinessWebsiteDemo from './demos/BusinessWebsiteDemo'
import WebAppDemo from './demos/WebAppDemo'
import AppPrototypeDemo from './demos/AppPrototypeDemo'
import FormDemo from './demos/FormDemo'

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
  
  const ActiveComponent = demoComponents[activeDemo]
  const activeItem = demos.items.find(d => d.id === activeDemo)

  return (
    <section className="section demos" id="demos">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{demos.label}</span>
          <h2 className="section-title">{demos.title}</h2>
          <p className="section-description">
            {demos.description}
          </p>
        </div>
        
        <div className="demos-container">
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
