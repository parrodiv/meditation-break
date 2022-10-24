import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import MeditationPage from './pages/MeditationPage'

import { MeditationProvider } from './context/context'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function App() {
  return (
    <div className='font-yeseva'>
      <MeditationProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:feeling' element={<MeditationPage />} />
            <Route path='/:feeling' element={<MeditationPage />} />
            <Route path='/:feeling' element={<MeditationPage />} />
          </Routes>
        </Router>
        <ToastContainer autoClose={3000} position='top-center' theme='dark' />
      </MeditationProvider>
    </div>
  )
}

export default App
