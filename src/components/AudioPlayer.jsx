import { useRef, useContext, useState } from 'react'
import { MeditationContext } from '../context/context'

import formatTime from '../utils/formatTime'

const AudioPlayer = () => {
  const [status, setStatus] = useState({
    isPlaying: false,
    isLoaded: false, // when I select a song it will be true
  })

  const { timer, audioSrc, timeSelected, dispatch } =
    useContext(MeditationContext)

  const songRef = useRef(null)

  const toggleAudio = () => {
    status.isLoaded
      ? status.isPlaying
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
    <div className='play-container'>
      <button className='btn' onClick={() => toggleAudio()}>
        Play/pause
      </button>
      <audio
        ref={songRef}
        src={audioSrc}
        onLoadedData={() => setStatus({ ...status, isLoaded: true })}
        onPlaying={() => setStatus({ ...status, isPlaying: true })}
        onPause={() => setStatus({...status, isPlaying: false})}
        onTimeUpdate={() => onTimeUpdate()}
      />
      <h3 className='text-4xl font-bold text-white text-center mt-10'>
        {timer}
      </h3>
    </div>
  )
}

export default AudioPlayer
