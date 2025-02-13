import React from 'react'
import usePersistedState from './hooks/usePersistedState'
import './App.css'
import HomePage from './pages/HomePage'
import SettingsPage from './pages/SettingsPage'

function MenuItem({name, icon, onClick, active = false}) {
  return (
    <div className={`menu-item ${active ? 'active' : ''}`} onClick={onClick}>
      {icon}
      {name}
    </div>
  )
} 

function Menu() {
  const [route, setRoute] = usePersistedState('app.route')

  return (
    <div className='menu'>
      <MenuItem active={route==='home'} name='Home' icon='🏠' onClick={() => { setRoute('home') }} />
      <MenuItem active={route==='settings'} name='Settings' icon='⚙️' onClick={() => { setRoute('settings') }} />
    </div>
  )
}

function Content() {
  const [route, setRoute] = usePersistedState('app.route')

  return (
    <div className='content'>
      {route==='home' && <HomePage/> }
      {route==='settings' && <SettingsPage/>}
    </div>
  )
}

function App() {
  const [text, setText] = usePersistedState('app.text')

  return (
    <div className='app'>
      <div className='app-header'>
        <h1>My App</h1>
      </div>
      <div className='app-content'>
        <Menu />
        <Content />
      </div>
    </div>
  )
}

export default App
