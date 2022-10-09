import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import MeditationPage from './pages/MeditationPage'

import { MeditationProvider } from './context/context'


function App() {
  return (
    <>
      <MeditationProvider>
        <Router>
          <main>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/:status' element={<MeditationPage />} />
              <Route path='/:status' element={<MeditationPage />} />
              <Route path='/:status' element={<MeditationPage />} />
            </Routes>
          </main>
        </Router>
      </MeditationProvider>
    </>
  )
}

export default App
