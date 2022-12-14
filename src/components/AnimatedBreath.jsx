import { useContext, useState, useRef, useEffect } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { FaPlay, FaPause } from 'react-icons/fa'
import BreathPointer from './BreathPointer'

import { MeditationContext } from '../context/context'

const AnimatedBreath = ({ toggleAudio, isLoaded }) => {
  const { isPlaying, breathTextRef, songRef, timeSelected } =
    useContext(MeditationContext)

  useEffect(() => {
    toggleAnimation()
    // eslint-disable-next-line
  }, [isPlaying])

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
    if (isPlaying && isLoaded && timeSelected !== '') {
      clearInterval(interval.current)
      breathAnimation()
      interval.current = setInterval(breathAnimation, totalTime)
    } else if (!isPlaying) {
      clearInterval(interval.current)
    } else {
      clearInterval(interval.current)
    }
  }

  return (
    <>
      <div
        className={`${className} w-[190px] h-[190px] md:w-[230px] md:h-[230px] my-5 flex  flex-col items-center justify-center relative`}
      >
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
        className='absolute hidden md:block m-0 top-[45%] right-[50%] translate-x-[50%] -translate-y-[50%]'
        onClick={() => {
          toggleAudio()
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
