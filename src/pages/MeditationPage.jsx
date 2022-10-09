import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { useRef } from 'react'

import formatTime from '../utils/formatTime'

import rainSound from '../components/assets/audio/rain.mp3'
import parkSound from '../components/assets/audio/park.mp3'
import seaSound from '../components/assets/audio/sea.mp3'

import rainImg from '../components/assets/img/rain.jpg'
import parkImg from '../components/assets/img/park.jpg'
import seaImg from '../components/assets/img/waves.jpg'

import { MeditationContext } from '../context/context'


const MeditationPage = () => {
  const { timer, audioSrc, imgSrc, timeSelected, dispatch } =
    useContext(MeditationContext)

  const { status } = useParams()
  const songRef = useRef(null)

  

  const onSetTime = (e) => {
    const duration = e.target.dataset.time
    const time = formatTime(duration)

    dispatch({
      type: 'SET_TIME',
      payload: [duration, time]
    })
   
  }

  const onSetSoundAndImg = (e) => {
    const { img, sound } = e.target.dataset

    dispatch({
      type: 'SET_SOUND_&_IMG',
      payload: {img, sound}
    })
  }

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
    console.log(timeSelected);
  

    dispatch({
      type: 'ON_TIME_UPDATE',
      payload: formatTime(elapsedTime)
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
    <div className='app min-h-full min-w-full h-screen w-screen flex justify-evenly items-center'>
      <div className='img-background fixed top-0 left-0 right-0 bottom-0 w-full -z-10'>
        <img src={imgSrc} alt='backgroundImg' className='w-full h-full' />
      </div>

      <div className='time-select flex flex-col gap-5'>
        <button data-time='10' className='btn' onClick={(e) => onSetTime(e)}>
          {' '}
          2 min
        </button>
        <button data-time='300' className='btn' onClick={(e) => onSetTime(e)}>
          {' '}
          5 min
        </button>
        <button data-time='600' className='btn' onClick={(e) => onSetTime(e)}>
          {' '}
          10 min
        </button>
      </div>

      <div className='play-container'>
        <button className='btn' onClick={() => toggleAudio()}>
          Play/pause
        </button>
        <audio
          ref={songRef}
          src={audioSrc}
          onTimeUpdate={() => onTimeUpdate()}
          
        />
        <h3 className='text-4xl font-bold text-white text-center mt-10'>
          {timer}
        </h3>
      </div>

      <div className='sound-picker flex flex-col gap-5'>
        <button
          data-sound={rainSound}
          data-img={rainImg}
          className='btn'
          onClick={(e) => onSetSoundAndImg(e)}
        >
          Rain
        </button>
        <button
          data-sound={parkSound}
          data-img={parkImg}
          className='btn'
          onClick={(e) => onSetSoundAndImg(e)}
        >
          Park
        </button>
        <button
          data-sound={seaSound}
          data-img={seaImg}
          className='btn'
          onClick={(e) => onSetSoundAndImg(e)}
        >
          Sea
        </button>
      </div>
    </div>
  )
}

export default MeditationPage
