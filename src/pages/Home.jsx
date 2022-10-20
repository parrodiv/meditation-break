import React from 'react'
import { FaFrown, FaGrimace, FaGrinAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Logo from '../components/assets/img/logo.png'

const Home = () => {
  return (
    <>
      <div
        className='hero min-h-screen'
        style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}
      >
        <div className='hero-overlay bg-opacity-60'></div>
        <div className='hero-content text-center text-white-content'>
          <div className='max-w-md'>
            <img src={Logo} alt="" width={200} height={200} className='mx-auto mb-2'/>
            <h1 className='mb-5 text-8xl font-bold font-meditation'>Meditation Break</h1>
            <p className='mb-5 text-2xl'>
              Welcome to your inner world. Take a break and enjoy the
              meditation!
            </p>
            <h3 className='mb-5 text-3xl font-bold'>How do you feel today?</h3>
            <Link to='/sad'>
              <button className='btn mr-2 btn-error text-2xl'>
                <FaFrown />
              </button>
            </Link>
            <Link to='/normal'>
              <button className='btn mr-2 btn-warning text-2xl'>
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
    </>
  )
}

export default Home
