import { useContext, useState, useRef } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { FaPlay, FaPause } from 'react-icons/fa'
import BreathPointer from './BreathPointer'

import { MeditationContext } from '../context/context'

const AnimatedBreath = ({ toggleAudio, isLoaded }) => {
  const { isPlaying, breathTextRef, songRef, timeSelected } =
    useContext(MeditationContext)

  const [className, setClassName] = useState('')

  const totalTime = 7500 //ms
  const breathTime = (totalTime / 5) * 2
  const holdTime = totalTime / 5

  const interval = useRef()

  const breathAnimation = () => {
    setClassName('grow')
    breathTextRef.current.innerHTML = 'Breath In!'

    setTimeout(() => {
      breathTextRef.current.innerHTML = 'Hold!'

      setTimeout(() => {
        setClassName('shrink')
        breathTextRef.current.innerHTML = 'Breath Out!'
      }, holdTime)
    }, breathTime)
  }

  const toggleAnimation = () => {
    if (!isPlaying && isLoaded && timeSelected !== '') {
      clearInterval(interval.current)
      breathAnimation()
      interval.current = setInterval(breathAnimation, totalTime)
    } else if (!isLoaded && isPlaying) { 
      clearInterval(interval.current)
    } else {
      clearInterval(interval.current)
    }
  }

  return (
    <>
      <div className={`${className} w-[230px] h-[230px] flex  flex-col items-center justify-center scale-100 relative`}>
        <BreathPointer />

        <CircularProgressbar
          value={songRef?.current?.currentTime}
          maxValue={timeSelected}
          strokeWidth={4}
          styles={buildStyles({
            pathColor: `rgb(0, 0, 0)`,
          })}
        />
      </div>
      <div
        className='absolute m-0 top-[50%] right-[50%] translate-x-[50%] -translate-y-[50%]'
        onClick={() => {
          toggleAudio()
          toggleAnimation()
        }}
      >
        {isPlaying ? (
          <FaPause className='text-4xl text-black cursor-pointer hover:text-white transition' />
        ) : (
          <FaPlay className='text-4xl text-black cursor-pointer hover:text-white transition' />
        )}
      </div>
    </>
  )
}

export default AnimatedBreath
