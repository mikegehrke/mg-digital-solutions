import { useState, useEffect } from 'react'
import './App.css'
import { LanguageProvider } from './context/LanguageContext'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import PricingBuilder from './components/PricingBuilder'
import ROICalculator from './components/ROICalculator'
import EfficiencyComparison from './components/EfficiencyComparison'
import Demos from './components/Demos'
import WhyMe from './components/WhyMe'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Imprint from './components/Imprint'
import Privacy from './components/Privacy'
import WhatsAppButton from './components/WhatsAppButton'
import WebCheckCTA from './components/WebCheckCTA'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  useEffect(() => {
    // Handle hash routing
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1)
      if (hash === 'impressum' || hash === 'imprint') {
        setCurrentPage('imprint')
        window.scrollTo(0, 0)
      } else if (hash === 'datenschutz' || hash === 'privacy') {
        setCurrentPage('privacy')
        window.scrollTo(0, 0)
      } else if (hash === '' || hash === 'home') {
        setCurrentPage('home')
      }
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const goToHome = () => {
    window.location.hash = ''
    setCurrentPage('home')
    window.scrollTo(0, 0)
  }

  return (
    <LanguageProvider>
      <Header />
      {currentPage === 'home' && (
        <main>
          <Hero />
          <Services />
          <WebCheckCTA />
          <PricingBuilder />
          <ROICalculator />
          <EfficiencyComparison />
          <Demos />
          <WhyMe />
          <Testimonials />
          <Process />
          <Contact />
        </main>
      )}
      {currentPage === 'imprint' && <Imprint onBack={goToHome} />}
      {currentPage === 'privacy' && <Privacy onBack={goToHome} />}
      <Footer />
      <WhatsAppButton />
    </LanguageProvider>
  )
}

export default App
