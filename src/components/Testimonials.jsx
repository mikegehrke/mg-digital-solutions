import { useLanguage } from '../context/LanguageContext'
import './Testimonials.css'

function Testimonials() {
  const { language } = useLanguage()

  const testimonials = [
    {
      name: 'Sarah M.',
      role: language === 'de' ? 'Inhaberin, Friseursalon' : 'Owner, Hair Salon',
      text: language === 'de' 
        ? 'Endlich eine moderne Website, die wirklich Kunden bringt. Mike hat alles schnell und professionell umgesetzt – und das zu einem fairen Preis.'
        : 'Finally a modern website that actually brings customers. Mike implemented everything quickly and professionally – at a fair price.',
      rating: 5,
    },
    {
      name: 'Thomas K.',
      role: language === 'de' ? 'Geschäftsführer, Handwerksbetrieb' : 'Managing Director, Craft Business',
      text: language === 'de'
        ? 'Die automatisierte Terminbuchung spart uns täglich Zeit. Sehr empfehlenswert für alle, die sich auf ihr Kerngeschäft konzentrieren wollen.'
        : 'The automated appointment booking saves us time every day. Highly recommended for anyone who wants to focus on their core business.',
      rating: 5,
    },
    {
      name: 'Lisa B.',
      role: language === 'de' ? 'Freiberuflerin, Beratung' : 'Freelancer, Consulting',
      text: language === 'de'
        ? 'Schnelle Kommunikation, klare Absprachen, tolles Ergebnis. So stelle ich mir Zusammenarbeit vor!'
        : 'Fast communication, clear agreements, great result. This is how I envision collaboration!',
      rating: 5,
    },
  ]

  const stats = [
    {
      value: '50+',
      label: language === 'de' ? 'Projekte' : 'Projects',
    },
    {
      value: '10+',
      label: language === 'de' ? 'Jahre Erfahrung' : 'Years Experience',
    },
    {
      value: '100%',
      label: language === 'de' ? 'Zufriedenheit' : 'Satisfaction',
    },
    {
      value: '<24h',
      label: language === 'de' ? 'Reaktionszeit' : 'Response Time',
    },
  ]

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">
            {language === 'de' ? '⭐ Kundenstimmen' : '⭐ Testimonials'}
          </span>
          <h2 className="section-title">
            {language === 'de' ? 'Was Kunden sagen' : 'What Clients Say'}
          </h2>
          <p className="section-subtitle">
            {language === 'de' 
              ? 'Echte Erfahrungen von zufriedenen Kunden'
              : 'Real experiences from satisfied clients'}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="testimonials-stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="author-info">
                  <span className="author-name">{testimonial.name}</span>
                  <span className="author-role">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="trust-badges">
          <div className="trust-badge">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <path d="M9 12l2 2 4-4"/>
            </svg>
            <span>{language === 'de' ? 'DSGVO-konform' : 'GDPR Compliant'}</span>
          </div>
          <div className="trust-badge">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
            <span>{language === 'de' ? 'SSL-verschlüsselt' : 'SSL Encrypted'}</span>
          </div>
          <div className="trust-badge">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            <span>{language === 'de' ? 'Persönliche Betreuung' : 'Personal Support'}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
