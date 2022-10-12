import { useContext, useState, useEffect } from 'react'
import { MeditationContext } from '../context/context'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { FaPlay, FaPause } from 'react-icons/fa'

import formatTime from '../utils/formatTime'

const AudioPlayer = () => {
  const [isLoaded, setLoaded] = useState(false)



  const { isPlaying, songRef, audioSrc, timeSelected, dispatch } =
    useContext(MeditationContext)


  const toggleAudio = () => {
    isLoaded
      ? isPlaying
        ? songRef.current.pause()
        : songRef.current.play()
      : console.log('Audio has not loaded yet')
  }

  const onTimeUpdate = () => {
    let songCurrentTime = songRef.current.currentTime
    let elapsedTime = timeSelected - songCurrentTime

    dispatch({
      type: 'ON_TIME_UPDATE',
      payload: formatTime(elapsedTime),
    })

    if (songCurrentTime >= timeSelected) {
      songRef.current.pause()
      songCurrentTime = 0

      dispatch({
        type: 'ON_TIME_UPDATE',
        payload: '00:00',
      })
    }
  }

  return (
    <div className='relative'>
      <CircularProgressbar
        value={songRef?.current?.currentTime}
        maxValue={timeSelected}
      />
      <div
        className='absolute m-0 top-[50%] right-[50%] translate-x-[50%] -translate-y-[50%]'
        onClick={() => toggleAudio()}
      >
        {isPlaying ? (
          <FaPause className='text-8xl text-black cursor-pointer hover:text-white transition' />
        ) : (
          <FaPlay className='text-8xl text-black cursor-pointer hover:text-white transition' />
        )}
      </div>
      <audio
        ref={songRef}
        src={audioSrc}
        onLoadedData={() => setLoaded(true)}
        onPlaying={() => dispatch({ type: 'PLAY' })}
        onPause={() => dispatch({ type: 'PAUSE' })}
        onTimeUpdate={() => onTimeUpdate()}
      />
    </div>
  )
}

export default AudioPlayer
