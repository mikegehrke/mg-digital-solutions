import { createContext, useContext, useState } from 'react'

const translations = {
  de: {
    // Header
    nav: {
      services: 'Leistungen',
      demos: 'Demos',
      process: 'Ablauf',
      contact: 'Kontakt',
      cta: 'Erstgespräch'
    },
    // Hero
    hero: {
      badge: 'Verfügbar für neue Projekte',
      title: 'Individuelle Webseiten, Apps & digitale Tools –',
      titleHighlight: 'schnell umgesetzt.',
      subtitle: 'Für kleine Unternehmen & Selbstständige, die funktionierende Lösungen brauchen – ohne Agenturpreise.',
      ctaPrimary: 'Kostenloses Erstgespräch',
      ctaSecondary: 'Beispiele ansehen',
      stat1Value: '10+',
      stat1Label: 'Jahre Erfahrung',
      stat2Value: '50+',
      stat2Label: 'Projekte',
      stat3Value: '100%',
      stat3Label: 'Zufriedenheit'
    },
    // Services
    services: {
      label: 'Leistungen',
      title: 'Was ich für Sie baue',
      description: 'Digitale Lösungen, die funktionieren – ohne Schnickschnack, ohne Buzzwords.',
      items: [
        {
          title: 'Webseiten & Landingpages',
          description: 'Moderne, schnelle Websites die Besucher zu Kunden machen. Responsive, SEO-optimiert, sofort einsatzbereit.',
          features: ['Responsive Design', 'SEO-Optimiert', 'Schnelle Ladezeiten']
        },
        {
          title: 'Web-Apps & interne Tools',
          description: 'Maßgeschneiderte Anwendungen für Ihre internen Prozesse. Dashboards, Verwaltungstools, Kundenportale.',
          features: ['Individuelle Lösungen', 'Einfache Bedienung', 'Cloud-basiert']
        },
        {
          title: 'App-Prototypen (MVPs)',
          description: 'Von der Idee zum funktionierenden Prototyp. Schnell testen, lernen, verbessern – ohne große Investition.',
          features: ['Schnelle Entwicklung', 'Testbar', 'Erweiterbar']
        },
        {
          title: 'Formulare & Automatisierung',
          description: 'Intelligente Formulare, automatisierte Workflows, Datenverarbeitung. Weniger Handarbeit, mehr Effizienz.',
          features: ['Automatische Validierung', 'E-Mail-Benachrichtigung', 'Datenexport']
        },
        {
          title: '1:1 Umsetzung & Support',
          description: 'Direkte Zusammenarbeit ohne Umwege. Sie erklären, ich setze um. Klar, schnell, unkompliziert.',
          features: ['Persönlicher Kontakt', 'Schnelle Reaktion', 'Faire Preise']
        }
      ]
    },
    // Demos
    demos: {
      label: 'Live Demos',
      title: 'Das kann ich für Sie bauen',
      description: 'Echte, funktionierende Beispiele – nicht nur Mockups. Klicken Sie sich durch.',
      badge: 'So etwas kann ich für Sie bauen',
      items: [
        { id: 'website', title: 'Business Website', description: 'Moderne Firmen-Website mit Kontaktformular und klarem Call-to-Action', category: 'Webseite' },
        { id: 'webapp', title: 'Buchungssystem', description: 'Terminbuchung und Kundenverwaltung mit Dashboard', category: 'Web-App' },
        { id: 'app', title: 'Fitness Tracker', description: 'Mobile App Prototyp mit mehreren Screens', category: 'App-Prototyp' },
        { id: 'form', title: 'Anfrage-Formular', description: 'Intelligentes Formular mit Validierung und Prozesslogik', category: 'Formular' }
      ]
    },
    // Why Me
    whyMe: {
      label: 'Vorteile',
      title: 'Warum mit mir arbeiten?',
      description: 'Kein Agentur-Overhead. Direkte Zusammenarbeit mit einem erfahrenen Entwickler.',
      reasons: [
        { title: 'Direkter Ansprechpartner', description: 'Sie sprechen immer mit mir persönlich – keine Projektmanager, keine Wartezeiten.' },
        { title: 'Schnelle Umsetzung', description: 'Erste Ergebnisse oft innerhalb von Tagen, nicht Wochen oder Monaten.' },
        { title: 'Klare Ergebnisse', description: 'Sie bekommen funktionierende Lösungen, keine endlosen Konzeptpapiere.' },
        { title: 'Keine Bürokratie', description: 'Kurze Wege, schnelle Entscheidungen, keine unnötigen Prozesse.' },
        { title: 'Faire Preise', description: 'Keine versteckten Kosten, keine Agenturaufschläge. Transparente Kalkulation.' },
        { title: 'Fokus auf Funktion', description: 'Ihre Lösung soll funktionieren und Ergebnisse bringen – nicht nur gut aussehen.' }
      ]
    },
    // Process
    process: {
      label: 'Ablauf',
      title: 'So läuft es ab',
      description: 'Einfach, direkt, ohne Umwege. In drei Schritten zur fertigen Lösung.',
      steps: [
        { number: '01', title: 'Kurzes Gespräch', description: 'Sie erklären mir, was Sie brauchen. Ich höre zu, frage nach und mache mir ein klares Bild.' },
        { number: '02', title: 'Umsetzung', description: 'Ich baue Ihre Lösung – schnell, sauber, mit regelmäßigen Updates. Sie sehen den Fortschritt.' },
        { number: '03', title: 'Fertige Lösung', description: 'Sie erhalten ein funktionierendes Produkt, das Sie sofort einsetzen können.' }
      ]
    },
    // Contact
    contact: {
      label: 'Kontakt',
      title: 'Lassen Sie uns sprechen',
      description: 'Beschreiben Sie kurz, was Sie brauchen – ich melde mich zeitnah bei Ihnen.',
      email: 'E-Mail',
      phone: 'Telefon',
      location: 'Standort',
      responseTime: 'Reaktionszeit',
      responseValue: 'Innerhalb von 24 Stunden',
      form: {
        name: 'Name',
        namePlaceholder: 'Ihr Name',
        email: 'E-Mail',
        emailPlaceholder: 'ihre@email.de',
        message: 'Ihre Nachricht',
        messagePlaceholder: 'Beschreiben Sie kurz Ihr Projekt oder Ihre Anforderungen...',
        submit: 'Nachricht senden',
        sending: 'Wird gesendet...',
        success: 'Vielen Dank! Ich melde mich in Kürze bei Ihnen.'
      }
    },
    // Demo Translations
    demoWebsite: {
      nav: { home: 'Start', services: 'Leistungen', projects: 'Projekte', contact: 'Kontakt' },
      cta: 'Angebot anfordern',
      badge: '✓ Über 200 zufriedene Kunden',
      heroTitle: 'Bauprojekte professionell umgesetzt',
      heroText: 'Von der Planung bis zur Fertigstellung – Ihr Partner für Hoch- und Tiefbau in der Region.',
      btnPrimary: 'Kostenlose Beratung',
      btnSecondary: 'Referenzen ansehen',
      servicesTitle: 'Unsere Leistungen',
      service1: { title: 'Hochbau', text: 'Wohn- und Gewerbegebäude nach Ihren Vorstellungen' },
      service2: { title: 'Sanierung', text: 'Modernisierung und Renovierung bestehender Gebäude' },
      service3: { title: 'Wartung', text: 'Regelmäßige Instandhaltung für Ihre Immobilien' },
      contactTitle: 'Jetzt Kontakt aufnehmen',
      contactText: 'Wir melden uns innerhalb von 24 Stunden bei Ihnen.',
      formName: 'Ihr Name',
      formEmail: 'E-Mail Adresse',
      formMessage: 'Ihre Nachricht',
      formSubmit: 'Anfrage senden',
      formSuccess: 'Vielen Dank! Wir melden uns bei Ihnen.'
    },
    demoWebapp: {
      appName: 'BookingPro',
      dashboard: 'Dashboard',
      appointments: 'Termine',
      customers: 'Kunden',
      settings: 'Einstellungen',
      newAppointment: '+ Neuer Termin',
      totalAppointments: 'Termine gesamt',
      confirmed: 'Bestätigt',
      pending: 'Ausstehend',
      nextAppointments: 'Nächste Termine',
      customer: 'Kunde',
      service: 'Service',
      date: 'Datum',
      time: 'Uhrzeit',
      status: 'Status',
      actions: 'Aktionen',
      addAppointmentTitle: 'Neuer Termin',
      customerName: 'Kundenname',
      selectService: 'Service wählen',
      consultation: 'Beratung',
      firstMeeting: 'Ersttermin',
      followUp: 'Follow-up',
      cancel: 'Abbrechen',
      add: 'Hinzufügen'
    },
    demoApp: {
      goodMorning: 'Guten Morgen',
      dailyGoal: 'Tagesziel',
      steps: 'Schritte',
      calories: 'kcal',
      minutes: 'Minuten',
      recentActivities: 'Letzte Aktivitäten',
      today: 'Heute',
      yesterday: 'Gestern',
      startActivity: 'Aktivität starten',
      running: 'Laufen',
      cycling: 'Radfahren',
      strength: 'Krafttraining',
      yoga: 'Yoga',
      swimming: 'Schwimmen',
      sports: 'Sport',
      startWorkout: 'Workout starten',
      statistics: 'Statistiken',
      week: 'Woche',
      month: 'Monat',
      year: 'Jahr',
      thisWeek: 'Diese Woche',
      workouts: 'Workouts',
      burned: 'Verbrannt',
      activeTime: 'Aktivzeit',
      premiumMember: 'Premium Mitglied',
      settingsBtn: 'Einstellungen',
      adjustGoals: 'Ziele anpassen',
      notifications: 'Benachrichtigungen',
      help: 'Hilfe',
      home: 'Home',
      activity: 'Aktivität',
      stats: 'Statistik',
      profile: 'Profil',
      streak: 'Streak',
      badges: 'Badges',
      cardio: 'Cardio',
      strength2: 'Stärke'
    },
    demoForm: {
      successTitle: 'Anfrage erfolgreich gesendet!',
      successText: 'Vielen Dank für Ihre Anfrage. Ich melde mich innerhalb von 24 Stunden bei Ihnen.',
      yourDetails: 'Ihre Angaben:',
      project: 'Projekt',
      budget: 'Budget',
      name: 'Name',
      email: 'E-Mail',
      newRequest: 'Neue Anfrage',
      step1Title: 'Was möchten Sie umsetzen?',
      step1Desc: 'Wählen Sie den Typ Ihres Projekts',
      projectType: 'Projekttyp',
      details: 'Details',
      contactInfo: 'Kontakt',
      website: 'Website',
      webapp: 'Web-App',
      mobileApp: 'Mobile App',
      automation: 'Automatisierung',
      selectProjectError: 'Bitte wählen Sie einen Projekttyp',
      step2Title: 'Budget & Zeitrahmen',
      step2Desc: 'Helfen Sie mir, Ihr Projekt besser einzuschätzen',
      plannedBudget: 'Geplantes Budget',
      timeline: 'Zeitrahmen',
      budgetSmall: '< 2.000 €',
      budgetMedium: '2.000 - 5.000 €',
      budgetLarge: '5.000 - 10.000 €',
      budgetEnterprise: '> 10.000 €',
      timelineAsap: 'So schnell wie möglich',
      timeline1Month: 'Innerhalb 1 Monat',
      timeline3Months: 'Innerhalb 3 Monate',
      timelineFlexible: 'Flexibel',
      selectBudgetError: 'Bitte wählen Sie ein Budget',
      selectTimelineError: 'Bitte wählen Sie einen Zeitrahmen',
      step3Title: 'Ihre Kontaktdaten',
      step3Desc: 'Wie kann ich Sie erreichen?',
      phone: 'Telefon',
      projectDescription: 'Projektbeschreibung',
      descriptionPlaceholder: 'Beschreiben Sie kurz Ihr Projekt...',
      nameRequired: 'Name ist erforderlich',
      emailRequired: 'E-Mail ist erforderlich',
      emailInvalid: 'Ungültige E-Mail-Adresse',
      back: 'Zurück',
      next: 'Weiter',
      submit: 'Anfrage senden'
    },
    // WebCheck360 CTA
    webcheck: {
      badge: 'Neu',
      title: 'Kostenloser Website-Check',
      description: 'Erfahren Sie in 60 Sekunden, wie gut Ihre Website wirklich ist. Vollautomatische Analyse mit konkreten Verbesserungsvorschlägen.',
      feature1: 'Analyse in unter 60 Sekunden',
      feature2: 'Detaillierter Score für 5 Kategorien',
      feature3: 'Konkrete Handlungsempfehlungen',
      cta: 'Jetzt Website prüfen',
      subtext: '100% kostenlos · Keine Registrierung nötig',
      inline: 'Website-Check starten',
      headerBtn: 'Website-Check'
    },
    // Footer
    footer: {
      description: 'Individuelle Webseiten, Apps & digitale Tools für kleine Unternehmen und Selbstständige.',
      services: 'Leistungen',
      websites: 'Webseiten',
      webapps: 'Web-Apps',
      prototypes: 'App-Prototypen',
      automation: 'Automatisierung',
      legal: 'Rechtliches',
      imprint: 'Impressum',
      privacy: 'Datenschutz',
      rights: 'Alle Rechte vorbehalten.',
      copyright: '© {year} Mike Gehrke · Digital Solutions. Alle Rechte vorbehalten.'
    },
    // Imprint
    imprint: {
      title: 'Impressum',
      according: 'Angaben gemäß § 5 TMG',
      contact: 'Kontakt',
      phone: 'Telefon',
      email: 'E-Mail',
      responsible: 'Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV',
      dispute: 'Streitschlichtung',
      disputeText: 'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:',
      disputeNote: 'Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
      liability: 'Haftung für Inhalte',
      liabilityText: 'Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.',
      links: 'Haftung für Links',
      linksText: 'Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.',
      copyrightTitle: 'Urheberrecht',
      copyrightText: 'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.',
      backToHome: 'Zurück zur Startseite'
    },
    // Privacy
    privacy: {
      title: 'Datenschutzerklärung',
      overview: 'Datenschutz auf einen Blick',
      overviewTitle: 'Allgemeine Hinweise',
      overviewText: 'Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.',
      responsible: 'Wer ist verantwortlich für die Datenerfassung auf dieser Website?',
      responsibleText: 'Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.',
      howCollect: 'Wie erfassen wir Ihre Daten?',
      howCollectText: 'Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst.',
      purpose: 'Wofür nutzen wir Ihre Daten?',
      purposeText: 'Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten.',
      rights: 'Welche Rechte haben Sie bezüglich Ihrer Daten?',
      rightsText: 'Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten.',
      hosting: 'Hosting',
      hostingText: 'Wir hosten die Inhalte unserer Website bei einem externen Anbieter.',
      contactForm: 'Kontaktformular',
      contactFormText: 'Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben zwecks Bearbeitung der Anfrage bei uns gespeichert.',
      cookies: 'Cookies',
      cookiesText: 'Diese Website verwendet keine Tracking-Cookies. Es werden lediglich technisch notwendige Cookies verwendet.',
      backToHome: 'Zurück zur Startseite'
    }
  },
  en: {
    // Header
    nav: {
      services: 'Services',
      demos: 'Demos',
      process: 'Process',
      contact: 'Contact',
      cta: 'Free Consultation'
    },
    // Hero
    hero: {
      badge: 'Available for new projects',
      title: 'Custom websites, apps & digital tools –',
      titleHighlight: 'delivered fast.',
      subtitle: 'For small businesses & freelancers who need working solutions – without agency prices.',
      ctaPrimary: 'Free Consultation',
      ctaSecondary: 'View Examples',
      stat1Value: '10+',
      stat1Label: 'Years Experience',
      stat2Value: '50+',
      stat2Label: 'Projects',
      stat3Value: '100%',
      stat3Label: 'Satisfaction'
    },
    // Services
    services: {
      label: 'Services',
      title: 'What I Build For You',
      description: 'Digital solutions that work – no fluff, no buzzwords.',
      items: [
        {
          title: 'Websites & Landing Pages',
          description: 'Modern, fast websites that convert visitors into customers. Responsive, SEO-optimized, ready to deploy.',
          features: ['Responsive Design', 'SEO-Optimized', 'Fast Loading']
        },
        {
          title: 'Web Apps & Internal Tools',
          description: 'Custom applications for your internal processes. Dashboards, management tools, customer portals.',
          features: ['Custom Solutions', 'Easy to Use', 'Cloud-based']
        },
        {
          title: 'App Prototypes (MVPs)',
          description: 'From idea to working prototype. Test fast, learn, improve – without big investment.',
          features: ['Fast Development', 'Testable', 'Scalable']
        },
        {
          title: 'Forms & Automation',
          description: 'Smart forms, automated workflows, data processing. Less manual work, more efficiency.',
          features: ['Auto Validation', 'Email Notifications', 'Data Export']
        },
        {
          title: '1:1 Implementation & Support',
          description: 'Direct collaboration without detours. You explain, I build. Clear, fast, uncomplicated.',
          features: ['Personal Contact', 'Fast Response', 'Fair Prices']
        }
      ]
    },
    // Demos
    demos: {
      label: 'Live Demos',
      title: 'What I Can Build For You',
      description: 'Real, working examples – not just mockups. Click through.',
      badge: 'I can build something like this for you',
      items: [
        { id: 'website', title: 'Business Website', description: 'Modern company website with contact form and clear call-to-action', category: 'Website' },
        { id: 'webapp', title: 'Booking System', description: 'Appointment booking and customer management with dashboard', category: 'Web App' },
        { id: 'app', title: 'Fitness Tracker', description: 'Mobile app prototype with multiple screens', category: 'App Prototype' },
        { id: 'form', title: 'Inquiry Form', description: 'Smart form with validation and process logic', category: 'Form' }
      ]
    },
    // Why Me
    whyMe: {
      label: 'Benefits',
      title: 'Why Work With Me?',
      description: 'No agency overhead. Direct collaboration with an experienced developer.',
      reasons: [
        { title: 'Direct Contact', description: 'You always talk to me personally – no project managers, no waiting times.' },
        { title: 'Fast Delivery', description: 'First results often within days, not weeks or months.' },
        { title: 'Clear Results', description: 'You get working solutions, not endless concept papers.' },
        { title: 'No Bureaucracy', description: 'Short paths, quick decisions, no unnecessary processes.' },
        { title: 'Fair Prices', description: 'No hidden costs, no agency markups. Transparent calculation.' },
        { title: 'Focus on Function', description: 'Your solution should work and deliver results – not just look good.' }
      ]
    },
    // Process
    process: {
      label: 'Process',
      title: 'How It Works',
      description: 'Simple, direct, no detours. Three steps to your finished solution.',
      steps: [
        { number: '01', title: 'Quick Chat', description: 'You tell me what you need. I listen, ask questions, and get a clear picture.' },
        { number: '02', title: 'Implementation', description: 'I build your solution – fast, clean, with regular updates. You see the progress.' },
        { number: '03', title: 'Finished Solution', description: 'You receive a working product that you can use immediately.' }
      ]
    },
    // Contact
    contact: {
      label: 'Contact',
      title: "Let's Talk",
      description: "Briefly describe what you need – I'll get back to you promptly.",
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      responseTime: 'Response Time',
      responseValue: 'Within 24 hours',
      form: {
        name: 'Name',
        namePlaceholder: 'Your name',
        email: 'Email',
        emailPlaceholder: 'your@email.com',
        message: 'Your Message',
        messagePlaceholder: 'Briefly describe your project or requirements...',
        submit: 'Send Message',
        sending: 'Sending...',
        success: "Thank you! I'll get back to you shortly."
      }
    },
    // Demo Translations - English
    demoWebsite: {
      nav: { home: 'Home', services: 'Services', projects: 'Projects', contact: 'Contact' },
      cta: 'Request Quote',
      badge: '✓ Over 200 satisfied customers',
      heroTitle: 'Professional Construction Projects',
      heroText: 'From planning to completion – your partner for construction in the region.',
      btnPrimary: 'Free Consultation',
      btnSecondary: 'View References',
      servicesTitle: 'Our Services',
      service1: { title: 'Construction', text: 'Residential and commercial buildings to your specifications' },
      service2: { title: 'Renovation', text: 'Modernization and renovation of existing buildings' },
      service3: { title: 'Maintenance', text: 'Regular maintenance for your properties' },
      contactTitle: 'Get in Touch Now',
      contactText: 'We will get back to you within 24 hours.',
      formName: 'Your Name',
      formEmail: 'Email Address',
      formMessage: 'Your Message',
      formSubmit: 'Send Request',
      formSuccess: 'Thank you! We will contact you soon.'
    },
    demoWebapp: {
      appName: 'BookingPro',
      dashboard: 'Dashboard',
      appointments: 'Appointments',
      customers: 'Customers',
      settings: 'Settings',
      newAppointment: '+ New Appointment',
      totalAppointments: 'Total Appointments',
      confirmed: 'Confirmed',
      pending: 'Pending',
      nextAppointments: 'Upcoming Appointments',
      customer: 'Customer',
      service: 'Service',
      date: 'Date',
      time: 'Time',
      status: 'Status',
      actions: 'Actions',
      addAppointmentTitle: 'New Appointment',
      customerName: 'Customer Name',
      selectService: 'Select Service',
      consultation: 'Consultation',
      firstMeeting: 'First Meeting',
      followUp: 'Follow-up',
      cancel: 'Cancel',
      add: 'Add'
    },
    demoApp: {
      goodMorning: 'Good Morning',
      dailyGoal: 'Daily Goal',
      steps: 'Steps',
      calories: 'kcal',
      minutes: 'Minutes',
      recentActivities: 'Recent Activities',
      today: 'Today',
      yesterday: 'Yesterday',
      startActivity: 'Start Activity',
      running: 'Running',
      cycling: 'Cycling',
      strength: 'Strength Training',
      yoga: 'Yoga',
      swimming: 'Swimming',
      sports: 'Sports',
      startWorkout: 'Start Workout',
      statistics: 'Statistics',
      week: 'Week',
      month: 'Month',
      year: 'Year',
      thisWeek: 'This Week',
      workouts: 'Workouts',
      burned: 'Burned',
      activeTime: 'Active Time',
      premiumMember: 'Premium Member',
      settingsBtn: 'Settings',
      adjustGoals: 'Adjust Goals',
      notifications: 'Notifications',
      help: 'Help',
      home: 'Home',
      activity: 'Activity',
      stats: 'Stats',
      profile: 'Profile',
      streak: 'Streak',
      badges: 'Badges',
      cardio: 'Cardio',
      strength2: 'Strength'
    },
    demoForm: {
      successTitle: 'Request Successfully Sent!',
      successText: 'Thank you for your inquiry. I will get back to you within 24 hours.',
      yourDetails: 'Your Details:',
      project: 'Project',
      budget: 'Budget',
      name: 'Name',
      email: 'Email',
      newRequest: 'New Request',
      step1Title: 'What would you like to build?',
      step1Desc: 'Select your project type',
      projectType: 'Project Type',
      details: 'Details',
      contactInfo: 'Contact',
      website: 'Website',
      webapp: 'Web App',
      mobileApp: 'Mobile App',
      automation: 'Automation',
      selectProjectError: 'Please select a project type',
      step2Title: 'Budget & Timeline',
      step2Desc: 'Help me better understand your project',
      plannedBudget: 'Planned Budget',
      timeline: 'Timeline',
      budgetSmall: '< €2,000',
      budgetMedium: '€2,000 - €5,000',
      budgetLarge: '€5,000 - €10,000',
      budgetEnterprise: '> €10,000',
      timelineAsap: 'As soon as possible',
      timeline1Month: 'Within 1 month',
      timeline3Months: 'Within 3 months',
      timelineFlexible: 'Flexible',
      selectBudgetError: 'Please select a budget',
      selectTimelineError: 'Please select a timeline',
      step3Title: 'Your Contact Details',
      step3Desc: 'How can I reach you?',
      phone: 'Phone',
      projectDescription: 'Project Description',
      descriptionPlaceholder: 'Briefly describe your project...',
      nameRequired: 'Name is required',
      emailRequired: 'Email is required',
      emailInvalid: 'Invalid email address',
      back: 'Back',
      next: 'Next',
      submit: 'Send Request'
    },
    // WebCheck360 CTA
    webcheck: {
      badge: 'New',
      title: 'Free Website Check',
      description: 'Find out in 60 seconds how good your website really is. Fully automated analysis with specific improvement suggestions.',
      feature1: 'Analysis in under 60 seconds',
      feature2: 'Detailed score for 5 categories',
      feature3: 'Specific action recommendations',
      cta: 'Check Website Now',
      subtext: '100% free · No registration required',
      inline: 'Start Website Check',
      headerBtn: 'Website Check'
    },
    // Footer
    footer: {
      description: 'Custom websites, apps & digital tools for small businesses and freelancers.',
      services: 'Services',
      websites: 'Websites',
      webapps: 'Web Apps',
      prototypes: 'App Prototypes',
      automation: 'Automation',
      legal: 'Legal',
      imprint: 'Imprint',
      privacy: 'Privacy Policy',
      rights: 'All rights reserved.',
      copyright: '© {year} Mike Gehrke · Digital Solutions. All rights reserved.'
    },
    // Imprint
    imprint: {
      title: 'Legal Notice (Imprint)',
      according: 'Information according to § 5 TMG (German law)',
      contact: 'Contact',
      phone: 'Phone',
      email: 'Email',
      responsible: 'Responsible for content according to § 55 Abs. 2 RStV',
      dispute: 'Dispute Resolution',
      disputeText: 'The European Commission provides a platform for online dispute resolution (OS):',
      disputeNote: 'We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.',
      liability: 'Liability for Content',
      liabilityText: 'As a service provider, we are responsible for our own content on these pages in accordance with general laws. However, we are not obligated to monitor transmitted or stored third-party information.',
      links: 'Liability for Links',
      linksText: 'Our offer contains links to external third-party websites over whose content we have no influence. Therefore, we cannot accept any liability for this third-party content.',
      copyrightTitle: 'Copyright',
      copyrightText: 'The content and works created by the site operators on these pages are subject to German copyright law.',
      backToHome: 'Back to Homepage'
    },
    // Privacy
    privacy: {
      title: 'Privacy Policy',
      overview: 'Privacy at a Glance',
      overviewTitle: 'General Information',
      overviewText: 'The following notes provide a simple overview of what happens to your personal data when you visit this website.',
      responsible: 'Who is responsible for data collection on this website?',
      responsibleText: 'Data processing on this website is carried out by the website operator. You can find their contact details in the legal notice.',
      howCollect: 'How do we collect your data?',
      howCollectText: 'Your data is collected when you provide it to us. Other data is automatically collected by our IT systems when you visit the website.',
      purpose: 'What do we use your data for?',
      purposeText: 'Part of the data is collected to ensure the error-free provision of the website.',
      rights: 'What rights do you have regarding your data?',
      rightsText: 'You have the right to receive information about the origin, recipient, and purpose of your stored personal data free of charge at any time.',
      hosting: 'Hosting',
      hostingText: 'We host the content of our website with an external provider.',
      contactForm: 'Contact Form',
      contactFormText: 'If you send us inquiries via the contact form, your information will be stored by us for the purpose of processing the inquiry.',
      cookies: 'Cookies',
      cookiesText: 'This website does not use tracking cookies. Only technically necessary cookies are used.',
      backToHome: 'Back to Homepage'
    }
  }
}

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('de')
  
  const t = (key) => {
    const keys = key.split('.')
    let value = translations[language]
    for (const k of keys) {
      value = value?.[k]
    }
    return value || key
  }

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'de' ? 'en' : 'de')
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t, translations: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
