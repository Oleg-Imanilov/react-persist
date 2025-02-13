import React from 'react'
import usePersistedState from './hooks/usePersistedState'
import HomePage from './pages/HomePage'
import SettingsPage from './pages/SettingsPage'

function MenuItem({name, icon, onClick, active = false}) {
  return (
    <div className={`flex rounded-lg justify-between items-center m-4 p-4 cursor-pointer hover:bg-blue-300 ${active ? 'bg-blue-300 text-white' : 'bg-blue-200 text-gray-400'}`} onClick={onClick}>
      {icon}&nbsp;
      {name}
    </div>
  )
} 

function App() {
  const [route, setRoute] = usePersistedState('app.route')

  return (
    <div className="min-h-screen">
      <header className="bg-blue-300 text-white p-2 fixed top-0 left-0 right-0">
        Header
      </header>
      <div className="flex pt-11 pb-11 bg-gray-100 min-h-screen">
        <aside className="w-64 bg-gray-200 rounded-sm p-2 m-1 fixed top-10 bottom-10 overflow-y-auto">
          <MenuItem active={route==='home'} name='Home' icon='🏠' onClick={() => { setRoute('home') }} />
          <MenuItem active={route==='settings'} name='Settings' icon='⚙️' onClick={() => { setRoute('settings') }} />
        </aside>
        <main className="ml-64 flex-1 p-4 overflow-y-auto">
          {route==='home' && <HomePage/> }
          {route==='settings' && <SettingsPage/>}
        </main>
      </div>
      <footer className="bg-blue-300 text-center text-sm text-white p-2 fixed bottom-0 left-0 right-0">
        &copy; 2025 My Company. All rights reserved.
      </footer>
    </div>

  )

}

export default App
