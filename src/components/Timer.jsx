import { useContext } from 'react'
import { MeditationContext } from '../context/context'

import { GiReturnArrow } from 'react-icons/gi'

const Timer = () => {
  const { timer, songRef, dispatch } = useContext(MeditationContext)

  const minutes = timer.split(':')[0]
  const seconds = timer.split(':')[1]

  const resetTimer = () => {
    dispatch({
      type: 'SET_TIME',
      payload: [0, '00:00']
    })
    songRef.current.currentTime = 0;
  }

  return (
    <div className='mb-7'>
      <span onClick={() => resetTimer()}>
        <GiReturnArrow className='mx-auto w-[30px] h-[30px] text-black hover:text-white cursor-pointer' />
      </span>
      <h3 className='countdown font-mono text-white text-5xl lg:text-6xl flex justify-center items-center block'>
        <span style={{ '--value': minutes }}></span>:
        <span style={{ '--value': seconds }}></span>
      </h3>
    </div>
  )
}

export default Timer
