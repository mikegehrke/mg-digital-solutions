import { useState, useEffect, lazy, Suspense } from 'react'
import './App.css'
import { LanguageProvider } from './context/LanguageContext'
import Header from './components/Header'
import Hero from './components/Hero'

// Lazy load components below the fold for better performance
const Services = lazy(() => import('./components/Services'))
const PricingBuilder = lazy(() => import('./components/PricingBuilder'))
const ROICalculator = lazy(() => import('./components/ROICalculator'))
const EfficiencyComparison = lazy(() => import('./components/EfficiencyComparison'))
const Demos = lazy(() => import('./components/Demos'))
const WhyMe = lazy(() => import('./components/WhyMe'))
const Process = lazy(() => import('./components/Process'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))
const Imprint = lazy(() => import('./components/Imprint'))
const Privacy = lazy(() => import('./components/Privacy'))
const WhatsAppButton = lazy(() => import('./components/WhatsAppButton'))
const WebCheckCTA = lazy(() => import('./components/WebCheckCTA'))

// Loading fallback
const LoadingFallback = () => <div style={{ minHeight: '100px' }} />

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
      <Suspense fallback={<LoadingFallback />}>
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
      </Suspense>
    </LanguageProvider>
  )
}

export default App
