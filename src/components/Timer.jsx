import { useContext } from 'react'
import { MeditationContext } from '../context/context'

const Timer = () => {
  const { timer } = useContext(MeditationContext)

  const minutes = timer.split(':')[0]
  const seconds = timer.split(':')[1]

  return (
    <h3 className='countdown font-mono text-white text-5xl lg:text-6xl flex justify-center items-center block mb-9'>
      <span style={{ '--value': minutes }}></span>:
      <span style={{ '--value': seconds }}></span>
    </h3>
  )
}

export default Timer
