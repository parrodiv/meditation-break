import React from 'react'
import { FaFrown, FaGrimace, FaGrinAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Logo from '../components/assets/img/logo.png'
import Home_Bg from '../components/assets/img/home_bg.gif'

const Home = () => {
  return (
    <>
      <div
        className='hero min-h-screen text-white'
        style={{
          backgroundImage: `url(${Home_Bg})`,
        }}
      >
        <div className='hero-overlay bg-opacity-60'></div>
        <div className='hero-content text-center text-white-content'>
          <div className='max-w-md'>
            <img
              src={Logo}
              alt=''
              className='mx-auto mb-2 w-[100px] md:w-[200px] animate__animated animate__slideInDown '
            />
            <h1 className='mb-5 text-8xl font-bold font-meditation animate__animated animate__slideInDown'>
              Meditation Break
            </h1>
            <p className='mb-5 text-2xl animate__animated animate__fadeIn'>
              Welcome to your inner world. Take a break and enjoy the
              meditation!
            </p>
            <h3 className='mb-5 text-3xl font-bold animate__animated animate__fadeIn'>
              How do you feel today?
            </h3>
            <div className='animate__animated animate__zoomInUp'>
              <Link to='/sad'>
                <button className='btn mr-2 btn-error text-2xl '>
                  <FaFrown />
                </button>
              </Link>
              <Link to='/angry'>
                <button className='btn mr-2 btn-warning text-2xl '>
                  <FaGrimace />
                </button>
              </Link>
              <Link to='/happy'>
                <button className='btn btn-success text-2xl'>
                  <FaGrinAlt />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
