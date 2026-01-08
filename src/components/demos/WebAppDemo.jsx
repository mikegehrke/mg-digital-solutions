import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import './WebAppDemo.css'

const initialAppointments = [
  { id: 1, name: 'Maria Schmidt', service: 'Beratung', date: '2026-01-10', time: '10:00', status: 'confirmed' },
  { id: 2, name: 'Thomas Müller', service: 'Ersttermin', date: '2026-01-10', time: '14:30', status: 'pending' },
  { id: 3, name: 'Anna Weber', service: 'Follow-up', date: '2026-01-11', time: '09:00', status: 'confirmed' },
]

function WebAppDemo() {
  const [appointments, setAppointments] = useState(initialAppointments)
  const [activeTab, setActiveTab] = useState('dashboard')
  const [showModal, setShowModal] = useState(false)
  const [newAppointment, setNewAppointment] = useState({ name: '', service: '', date: '', time: '' })
  const [theme, setTheme] = useState('dark')
  const { translations: t } = useLanguage()
  const d = t.demoWebapp || {}

  const handleAddAppointment = (e) => {
    e.preventDefault()
    const appointment = {
      id: Date.now(),
      ...newAppointment,
      status: 'pending'
    }
    setAppointments([...appointments, appointment])
    setNewAppointment({ name: '', service: '', date: '', time: '' })
    setShowModal(false)
  }

  const handleStatusChange = (id) => {
    setAppointments(appointments.map(apt => 
      apt.id === id 
        ? { ...apt, status: apt.status === 'confirmed' ? 'pending' : 'confirmed' }
        : apt
    ))
  }

  const handleDelete = (id) => {
    setAppointments(appointments.filter(apt => apt.id !== id))
  }

  return (
    <div className={`webapp-demo ${theme}`}>
      {/* Theme Toggle */}
      <button className="webapp-theme-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>

      {/* Sidebar */}
      <aside className="webapp-sidebar">
        <div className="webapp-logo">
          <div className="webapp-logo-icon">📅</div>
          <span>{d.appName || 'BookingPro'}</span>
        </div>
        
        <nav className="webapp-nav">
          <button 
            className={`webapp-nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7"/>
              <rect x="14" y="3" width="7" height="7"/>
              <rect x="14" y="14" width="7" height="7"/>
              <rect x="3" y="14" width="7" height="7"/>
            </svg>
            {d.dashboard || 'Dashboard'}
          </button>
          <button 
            className={`webapp-nav-item ${activeTab === 'appointments' ? 'active' : ''}`}
            onClick={() => setActiveTab('appointments')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            {d.appointments || 'Termine'}
          </button>
          <button className="webapp-nav-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            {d.customers || 'Kunden'}
          </button>
          <button className="webapp-nav-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="3"/>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
            </svg>
            {d.settings || 'Einstellungen'}
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="webapp-main">
        <header className="webapp-header">
          <h1>{activeTab === 'dashboard' ? (d.dashboard || 'Dashboard') : (d.appointments || 'Termine')}</h1>
          <button className="webapp-add-btn" onClick={() => setShowModal(true)}>
            {d.newAppointment || '+ Neuer Termin'}
          </button>
        </header>

        {activeTab === 'dashboard' && (
          <div className="webapp-dashboard">
            <div className="webapp-stats">
              <div className="webapp-stat-card">
                <span className="stat-number">{appointments.length}</span>
                <span className="stat-label">{d.totalAppointments || 'Termine gesamt'}</span>
              </div>
              <div className="webapp-stat-card">
                <span className="stat-number">{appointments.filter(a => a.status === 'confirmed').length}</span>
                <span className="stat-label">{d.confirmed || 'Bestätigt'}</span>
              </div>
              <div className="webapp-stat-card">
                <span className="stat-number">{appointments.filter(a => a.status === 'pending').length}</span>
                <span className="stat-label">{d.pending || 'Ausstehend'}</span>
              </div>
            </div>
            
            <div className="webapp-recent">
              <h3>{d.nextAppointments || 'Nächste Termine'}</h3>
              <div className="webapp-appointments-list">
                {appointments.slice(0, 3).map(apt => (
                  <div className="webapp-appointment-item" key={apt.id}>
                    <div className="apt-info">
                      <span className="apt-name">{apt.name}</span>
                      <span className="apt-service">{apt.service}</span>
                    </div>
                    <div className="apt-time">
                      <span>{apt.date}</span>
                      <span>{apt.time}</span>
                    </div>
                    <span className={`apt-status ${apt.status}`}>
                      {apt.status === 'confirmed' ? (d.confirmed || 'Bestätigt') : (d.pending || 'Ausstehend')}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'appointments' && (
          <div className="webapp-appointments">
            <table className="webapp-table">
              <thead>
                <tr>
                  <th>{d.customer || 'Kunde'}</th>
                  <th>{d.service || 'Service'}</th>
                  <th>{d.date || 'Datum'}</th>
                  <th>{d.time || 'Uhrzeit'}</th>
                  <th>{d.status || 'Status'}</th>
                  <th>{d.actions || 'Aktionen'}</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map(apt => (
                  <tr key={apt.id}>
                    <td>{apt.name}</td>
                    <td>{apt.service}</td>
                    <td>{apt.date}</td>
                    <td>{apt.time}</td>
                    <td>
                      <span className={`apt-status ${apt.status}`}>
                        {apt.status === 'confirmed' ? (d.confirmed || 'Bestätigt') : (d.pending || 'Ausstehend')}
                      </span>
                    </td>
                    <td className="apt-actions">
                      <button onClick={() => handleStatusChange(apt.id)} title="Status ändern">
                        ✓
                      </button>
                      <button onClick={() => handleDelete(apt.id)} title="Löschen">
                        ✕
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>

      {/* Modal */}
      {showModal && (
        <div className="webapp-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="webapp-modal" onClick={e => e.stopPropagation()}>
            <h2>{d.addAppointmentTitle || 'Neuer Termin'}</h2>
            <form onSubmit={handleAddAppointment}>
              <input 
                type="text" 
                placeholder={d.customerName || 'Kundenname'}
                value={newAppointment.name}
                onChange={e => setNewAppointment({...newAppointment, name: e.target.value})}
                required
              />
              <select 
                value={newAppointment.service}
                onChange={e => setNewAppointment({...newAppointment, service: e.target.value})}
                required
              >
                <option value="">{d.selectService || 'Service wählen'}</option>
                <option value="Beratung">{d.consultation || 'Beratung'}</option>
                <option value="Ersttermin">{d.firstMeeting || 'Ersttermin'}</option>
                <option value="Follow-up">{d.followUp || 'Follow-up'}</option>
              </select>
              <input 
                type="date" 
                value={newAppointment.date}
                onChange={e => setNewAppointment({...newAppointment, date: e.target.value})}
                required
              />
              <input 
                type="time" 
                value={newAppointment.time}
                onChange={e => setNewAppointment({...newAppointment, time: e.target.value})}
                required
              />
              <div className="modal-buttons">
                <button type="button" className="btn-cancel" onClick={() => setShowModal(false)}>
                  {d.cancel || 'Abbrechen'}
                </button>
                <button type="submit" className="btn-confirm">
                  {d.add || 'Hinzufügen'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default WebAppDemo
