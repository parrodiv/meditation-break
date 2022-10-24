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
    <div className='mb-3 md:mb-5 flex flex-row md:flex-col'>
      <span onClick={() => resetTimer()}>
        <GiReturnArrow className='mr-2 md:mx-auto w-[20px] h-[20px] md:w-[30px] md:h-[30px] text-black hover:text-white cursor-pointer' />
      </span>
      <h3 className='countdown font-mono text-white text-2xl md:text-6xl flex justify-center items-center block'>
        <span style={{ '--value': minutes }}></span>:
        <span style={{ '--value': seconds }}></span>
      </h3>
    </div>
  )
}

export default Timer
