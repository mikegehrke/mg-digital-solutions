import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import './AppPrototypeDemo.css'

function AppPrototypeDemo() {
  const [activeScreen, setActiveScreen] = useState('home')
  const [theme, setTheme] = useState('dark')
  const { translations: t } = useLanguage()
  const d = t.demoApp || {}
  
  const [workouts] = useState([
    { id: 1, name: d.running || 'Morgen-Lauf', type: d.cardio || 'Cardio', duration: '32 min', calories: 320, date: d.today || 'Heute' },
    { id: 2, name: d.strength || 'Krafttraining', type: d.strength2 || 'Stärke', duration: '45 min', calories: 280, date: d.yesterday || 'Gestern' },
  ])

  const stats = {
    steps: 8432,
    calories: 1840,
    activeMinutes: 65,
    workouts: workouts.length
  }

  return (
    <div className={`app-demo ${theme}`}>
      {/* Theme Toggle */}
      <button className="app-theme-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>

      <div className="phone-frame">
        {/* Status Bar */}
        <div className="phone-status-bar">
          <span>9:41</span>
          <div className="status-icons">
            <span>📶</span>
            <span>🔋</span>
          </div>
        </div>

        {/* Screen Content */}
        <div className="phone-content">
          {activeScreen === 'home' && (
            <div className="screen screen-home">
              <div className="screen-header">
                <div>
                  <span className="greeting">{d.goodMorning || 'Guten Morgen'}</span>
                  <h2>Alex</h2>
                </div>
                <div className="avatar">👤</div>
              </div>

              <div className="daily-goal">
                <div className="goal-ring">
                  <svg viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" className="ring-bg"/>
                    <circle cx="50" cy="50" r="45" className="ring-progress" style={{strokeDashoffset: 70}}/>
                  </svg>
                  <div className="goal-content">
                    <span className="goal-value">75%</span>
                    <span className="goal-label">{d.dailyGoal || 'Tagesziel'}</span>
                  </div>
                </div>
              </div>

              <div className="stats-grid">
                <div className="stat-item">
                  <span className="stat-icon">👟</span>
                  <span className="stat-value">{stats.steps.toLocaleString()}</span>
                  <span className="stat-name">{d.steps || 'Schritte'}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-icon">🔥</span>
                  <span className="stat-value">{stats.calories}</span>
                  <span className="stat-name">{d.calories || 'kcal'}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-icon">⏱️</span>
                  <span className="stat-value">{stats.activeMinutes}</span>
                  <span className="stat-name">{d.minutes || 'Minuten'}</span>
                </div>
              </div>

              <div className="recent-workouts">
                <h3>{d.recentActivities || 'Letzte Aktivitäten'}</h3>
                {workouts.map(workout => (
                  <div className="workout-card" key={workout.id}>
                    <div className="workout-icon">
                      {workout.type === (d.cardio || 'Cardio') ? '🏃' : '💪'}
                    </div>
                    <div className="workout-info">
                      <span className="workout-name">{workout.name}</span>
                      <span className="workout-meta">{workout.duration} · {workout.calories} kcal</span>
                    </div>
                    <span className="workout-date">{workout.date}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeScreen === 'activity' && (
            <div className="screen screen-activity">
              <h2>{d.startActivity || 'Aktivität starten'}</h2>
              
              <div className="activity-types">
                <button className="activity-type">
                  <span>🏃</span>
                  <span>{d.running || 'Laufen'}</span>
                </button>
                <button className="activity-type">
                  <span>🚴</span>
                  <span>{d.cycling || 'Radfahren'}</span>
                </button>
                <button className="activity-type">
                  <span>💪</span>
                  <span>{d.strength || 'Krafttraining'}</span>
                </button>
                <button className="activity-type">
                  <span>🧘</span>
                  <span>{d.yoga || 'Yoga'}</span>
                </button>
                <button className="activity-type">
                  <span>🏊</span>
                  <span>{d.swimming || 'Schwimmen'}</span>
                </button>
                <button className="activity-type">
                  <span>⚽</span>
                  <span>{d.sports || 'Sport'}</span>
                </button>
              </div>

              <button className="start-workout-btn">
                {d.startWorkout || 'Workout starten'}
              </button>
            </div>
          )}

          {activeScreen === 'stats' && (
            <div className="screen screen-stats">
              <h2>{d.statistics || 'Statistiken'}</h2>
              
              <div className="time-filter">
                <button className="active">{d.week || 'Woche'}</button>
                <button>{d.month || 'Monat'}</button>
                <button>{d.year || 'Jahr'}</button>
              </div>

              <div className="chart-container">
                <div className="bar-chart">
                  <div className="bar" style={{height: '60%'}}><span>Mo</span></div>
                  <div className="bar" style={{height: '80%'}}><span>Di</span></div>
                  <div className="bar" style={{height: '45%'}}><span>Mi</span></div>
                  <div className="bar active" style={{height: '90%'}}><span>Do</span></div>
                  <div className="bar" style={{height: '70%'}}><span>Fr</span></div>
                  <div className="bar" style={{height: '55%'}}><span>Sa</span></div>
                  <div className="bar" style={{height: '30%'}}><span>So</span></div>
                </div>
              </div>

              <div className="weekly-summary">
                <div className="summary-item">
                  <span className="summary-label">{d.thisWeek || 'Diese Woche'}</span>
                  <span className="summary-value">5 {d.workouts || 'Workouts'}</span>
                </div>
                <div className="summary-item">
                  <span className="summary-label">{d.burned || 'Verbrannt'}</span>
                  <span className="summary-value">2.340 kcal</span>
                </div>
                <div className="summary-item">
                  <span className="summary-label">{d.activeTime || 'Aktivzeit'}</span>
                  <span className="summary-value">4h 32min</span>
                </div>
              </div>
            </div>
          )}

          {activeScreen === 'profile' && (
            <div className="screen screen-profile">
              <div className="profile-header">
                <div className="profile-avatar">👤</div>
                <h2>Alex Müller</h2>
                <span>{d.premiumMember || 'Premium Mitglied'}</span>
              </div>

              <div className="profile-stats">
                <div className="profile-stat">
                  <span className="stat-num">127</span>
                  <span>{d.workouts || 'Workouts'}</span>
                </div>
                <div className="profile-stat">
                  <span className="stat-num">48</span>
                  <span>{d.streak || 'Streak'}</span>
                </div>
                <div className="profile-stat">
                  <span className="stat-num">12</span>
                  <span>{d.badges || 'Badges'}</span>
                </div>
              </div>

              <div className="profile-menu">
                <button>⚙️ {d.settingsBtn || 'Einstellungen'}</button>
                <button>🎯 {d.adjustGoals || 'Ziele anpassen'}</button>
                <button>🔔 {d.notifications || 'Benachrichtigungen'}</button>
                <button>❓ {d.help || 'Hilfe'}</button>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Navigation */}
        <div className="phone-nav">
          <button 
            className={activeScreen === 'home' ? 'active' : ''} 
            onClick={() => setActiveScreen('home')}
          >
            <span>🏠</span>
            <span>{d.home || 'Home'}</span>
          </button>
          <button 
            className={activeScreen === 'activity' ? 'active' : ''} 
            onClick={() => setActiveScreen('activity')}
          >
            <span>➕</span>
            <span>{d.activity || 'Aktivität'}</span>
          </button>
          <button 
            className={activeScreen === 'stats' ? 'active' : ''} 
            onClick={() => setActiveScreen('stats')}
          >
            <span>📊</span>
            <span>{d.stats || 'Statistik'}</span>
          </button>
          <button 
            className={activeScreen === 'profile' ? 'active' : ''} 
            onClick={() => setActiveScreen('profile')}
          >
            <span>👤</span>
            <span>{d.profile || 'Profil'}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default AppPrototypeDemo
