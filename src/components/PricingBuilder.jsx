import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'
import './PricingBuilder.css'

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

const packages = [
  {
    id: 'website',
    icon: '🌐',
    titleDe: 'Unternehmens-Website',
    titleEn: 'Company Website',
    marketPrice: 3000,
    myPrice: 1500
  },
  {
    id: 'cms',
    icon: '📝',
    titleDe: 'CMS-Einrichtung',
    titleEn: 'CMS Setup',
    marketPrice: 2000,
    myPrice: 1000
  },
  {
    id: 'automation',
    icon: '⚡',
    titleDe: 'Prozess-Automatisierung',
    titleEn: 'Process Automation',
    marketPrice: 2500,
    myPrice: 1200
  },
  {
    id: 'webapp',
    icon: '🔐',
    titleDe: 'Custom Web-App',
    titleEn: 'Custom Web App',
    marketPrice: 8000,
    myPrice: 4000
  }
]

function PricingBuilder() {
  const { language } = useLanguage()
  const [selectedPackages, setSelectedPackages] = useState(['website'])
  const [headerRef, headerVisible] = useScrollAnimation()
  const [contentRef, contentVisible] = useScrollAnimation()

  const togglePackage = (id) => {
    setSelectedPackages(prev => 
      prev.includes(id) 
        ? prev.filter(p => p !== id)
        : [...prev, id]
    )
  }

  const totalMarket = selectedPackages.reduce((sum, id) => {
    const pkg = packages.find(p => p.id === id)
    return sum + (pkg?.marketPrice || 0)
  }, 0)

  const totalMy = selectedPackages.reduce((sum, id) => {
    const pkg = packages.find(p => p.id === id)
    return sum + (pkg?.myPrice || 0)
  }, 0)

  const savings = totalMarket - totalMy
  const savingsPercent = totalMarket > 0 ? Math.round((savings / totalMarket) * 100) : 0

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const t = {
    de: {
      label: 'PREISBEISPIELE',
      title: 'Orientierung für Ihr Projekt.',
      description: 'Unverbindliche Beispielpreise – der finale Umfang bestimmt das Angebot.',
      market: 'Markt (Ø)',
      my: 'Mein Richtwert',
      total: 'Beispiel-Summe',
      youSave: 'Mögliche Differenz',
      upTo: 'Bis zu',
      less: 'günstiger',
      cta: 'Kostenloses Erstgespräch',
      disclaimer: '* Alle Preise sind unverbindliche Beispiele. Das finale Angebot richtet sich nach Ihrem individuellen Projektumfang.'
    },
    en: {
      label: 'PRICE EXAMPLES',
      title: 'Guidance for Your Project.',
      description: 'Non-binding example prices – final scope determines the quote.',
      market: 'Market (avg)',
      my: 'My Estimate',
      total: 'Example Sum',
      youSave: 'Potential Difference',
      upTo: 'Up to',
      less: 'difference possible',
      cta: 'Free Consultation',
      disclaimer: '* All prices are non-binding examples. Final quote depends on your individual project scope.'
    }
  }

  const text = t[language] || t.de

  return (
    <section className="section pricing-builder" id="pricing">
      <div className="container">
        <div 
          ref={headerRef}
          className={`section-header animate-on-scroll ${headerVisible ? 'visible' : ''}`}
        >
          <span className="section-label">{text.label}</span>
          <h2 className="section-title pricing-title">{text.title}</h2>
          <p className="section-description">{text.description}</p>
        </div>

        <div 
          ref={contentRef}
          className={`pricing-content animate-on-scroll ${contentVisible ? 'visible' : ''}`}
        >
          {/* Savings Badge - Big and Animated */}
          <div className="savings-highlight">
            <div className="savings-circle">
              <span className="savings-up-to">{text.upTo}</span>
              <span className="savings-percent">50%</span>
              <span className="savings-less">{text.less}</span>
            </div>
          </div>

          {/* Package Selection */}
          <div className="pricing-packages">
            {packages.map((pkg, index) => (
              <div 
                key={pkg.id}
                className={`pricing-package ${selectedPackages.includes(pkg.id) ? 'selected' : ''}`}
                onClick={() => togglePackage(pkg.id)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="package-check">
                  <div className={`checkbox ${selectedPackages.includes(pkg.id) ? 'checked' : ''}`}>
                    {selectedPackages.includes(pkg.id) && <span>✓</span>}
                  </div>
                </div>
                <div className="package-icon">{pkg.icon}</div>
                <div className="package-name">
                  {language === 'de' ? pkg.titleDe : pkg.titleEn}
                </div>
                <div className="package-prices">
                  <div className="price-market">
                    <span className="price-label">{text.market}</span>
                    <span className="price-value strikethrough">€{pkg.marketPrice.toLocaleString()}</span>
                  </div>
                  <div className="price-my">
                    <span className="price-label">{text.my}</span>
                    <span className="price-value highlight">€{pkg.myPrice.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Total Comparison */}
          {selectedPackages.length > 0 && (
            <div className="pricing-total">
              <div className="total-comparison">
                <div className="total-item market">
                  <span className="total-label">{text.market}</span>
                  <span className="total-value">€{totalMarket.toLocaleString()}</span>
                </div>
                <div className="total-arrow">→</div>
                <div className="total-item my">
                  <span className="total-label">{text.my}</span>
                  <span className="total-value">€{totalMy.toLocaleString()}</span>
                </div>
              </div>
              <div className="total-savings">
                <span className="savings-label">{text.youSave}:</span>
                <span className="savings-amount">€{savings.toLocaleString()}</span>
                <span className="savings-badge">-{savingsPercent}%</span>
              </div>
              <button className="btn btn-primary pricing-cta" onClick={scrollToContact}>
                {text.cta}
              </button>
              <p className="pricing-disclaimer">{text.disclaimer}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default PricingBuilder
