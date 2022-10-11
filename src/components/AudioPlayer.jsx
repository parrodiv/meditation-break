import { useRef, useContext, useState } from 'react'
import { MeditationContext } from '../context/context'

import formatTime from '../utils/formatTime'

const AudioPlayer = () => {
  const { timer, audioSrc, timeSelected, dispatch } =
    useContext(MeditationContext)

  const songRef = useRef(null)

  const toggleAudio = () => {
    songRef.current === null
      ? console.log('Audio Component is not loaded yet')
      : songRef.current.paused
      ? songRef.current.play()
      : songRef.current.pause()
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
    <div className='play-container'>
      <button className='btn' onClick={() => toggleAudio()}>
        Play/pause
      </button>
      <audio ref={songRef} src={audioSrc} onTimeUpdate={() => onTimeUpdate()} />
      <h3 className='text-4xl font-bold text-white text-center mt-10'>
        {timer}
      </h3>
    </div>
  )
}

export default AudioPlayer
