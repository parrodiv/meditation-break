import { useContext, useState } from 'react'
import { MeditationContext } from '../context/context'

import formatTime from '../utils/formatTime'
import AnimatedBreath from './AnimatedBreath'

  import { toast } from 'react-toastify'

const AudioPlayer = () => {
  const [isLoaded, setLoaded] = useState(false)

  const { isPlaying, songRef, audioSrc, timeSelected, dispatch } =
    useContext(MeditationContext)

  const toggleAudio = () => {
    isLoaded
      ? isPlaying
        ? songRef.current.pause()
        : songRef.current.play()
      : toast.warn('Select audio before to Play!')
    timeSelected === '' && toast.warn('Select time before clicking Play!')
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
    <div className='flex flex-col items-center relative'>
      <AnimatedBreath toggleAudio={toggleAudio} isLoaded={isLoaded} />
      <audio
        ref={songRef}
        src={audioSrc}
        controls={true}
        onLoadedData={() => setLoaded(true)}
        onPlaying={() => {
          dispatch({ type: 'PLAY' })
          toggleAudio()
      }}
        onPause={() => dispatch({ type: 'PAUSE' })}
        onTimeUpdate={() => onTimeUpdate()}
      />
    </div>
  )
}

export default AudioPlayer
