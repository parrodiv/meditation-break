import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import MeditationPage from './pages/MeditationPage'

import { MeditationProvider } from './context/context'


function App() {
  return (
    <>
      <MeditationProvider>
        <Router>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/:status' element={<MeditationPage />} />
              <Route path='/:status' element={<MeditationPage />} />
              <Route path='/:status' element={<MeditationPage />} />
            </Routes>
        </Router>
      </MeditationProvider>
    </>
  )
}

export default App
