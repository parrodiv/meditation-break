import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useRef } from 'react'

import formatTime from '../utils/formatTime'

import rainSound from '../components/assets/audio/rain.mp3'
import parkSound from '../components/assets/audio/park.mp3'
import seaSound from '../components/assets/audio/sea.mp3'

import rainImg from '../components/assets/img/rain.jpg'
import parkImg from '../components/assets/img/park.jpg'
import seaImg from '../components/assets/img/waves.jpg'

const initialState = {
  timer: '00:00',
  timeSelected: '',
  audioSrc: null,
  imgSrc: rainImg,
}

const MeditationPage = () => {
  const { status } = useParams()
  const songRef = useRef(null)

  const [state, setState] = useState(initialState)

  const { timer, audioSrc, imgSrc, timeSelected } = state

  const onSetTime = (e) => {
    const duration = e.target.dataset.time
    const time = formatTime(duration)

    setState({
      ...state,
      timer: time,
      timeSelected: duration
    })
  }

  const onSetSoundAndImg = (e) => {
    const { img, sound } = e.target.dataset

    console.log({ img, sound })

    setState({
      ...state,
      audioSrc: sound,
      imgSrc: img,
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
    let currentTime = songRef.current.currentTime
    const elapsedTime = timeSelected - currentTime
    
    setState({
      ...state,
      timer: formatTime(elapsedTime),
    })

    if (currentTime >= timeSelected) {
      songRef.current.pause()
      currentTime = 0
    }
  }


  return (
    <div className='app min-h-full min-w-full h-screen w-screen flex justify-evenly items-center'>
      <div className='img-background fixed top-0 left-0 right-0 bottom-0 w-full -z-10'>
        <img src={imgSrc} alt='backgroundImg' className='w-full h-full' />
      </div>

      <div className='time-select flex flex-col gap-5'>
        <button data-time='120' className='btn' onClick={(e) => onSetTime(e)}>
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
