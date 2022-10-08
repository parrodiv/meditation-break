import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import MeditationPage from './pages/MeditationPage'


function App() {
  return (
    <>
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
    </>
  )
}

export default App
