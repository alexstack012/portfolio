import { Outlet } from 'react-router-dom'
import SiteLayout from './components/SiteLayout'
import './App.css'

function App() {
  return (
    <SiteLayout>
      <Outlet />
    </SiteLayout>
  )
}

export default App
