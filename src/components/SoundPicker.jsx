import { useContext } from 'react'
import { MeditationContext } from '../context/context'

import rainSound from '../components/assets/audio/rain.mp3'
import parkSound from '../components/assets/audio/park.mp3'
import seaSound from '../components/assets/audio/sea.mp3'
import fireSound from '../components/assets/audio/fire.mp3'

import rainImg from '../components/assets/img/rain.jpg'
import parkImg from '../components/assets/img/park.jpg'
import seaImg from '../components/assets/img/waves.jpg'
import fireImg from '../components/assets/img/fire.jpeg'

import { FaMusic } from 'react-icons/fa'

const buttonsSoundImg = [
  {
    dataSound: rainSound,
    dataImg: rainImg,
    text: 'Rain',
  },
  {
    dataSound: parkSound,
    dataImg: parkImg,
    text: 'Park',
  },
  {
    dataSound: seaSound,
    dataImg: seaImg,
    text: 'Sea',
  },
  {
    dataSound: fireSound,
    dataImg: fireImg,
    text: 'Fire',
  },
]

const SoundPicker = () => {
  const { dispatch } = useContext(MeditationContext)

  const onSetSoundAndImg = (e) => {
    console.log(e.target)
    const { img, sound } = e.target.dataset

    dispatch({
      type: 'SET_SOUND_&_IMG',
      payload: { img, sound },
    })
    console.log(img)

    dispatch({ type: 'PAUSE' })
  }

  return (
    <div className='sound-picker flex gap-2 md:flex-col md:gap-5 overflow-x-hidden'>
      {buttonsSoundImg.map(({ dataSound, dataImg, text }, index) => (
        <button
          key={index + text}
          data-sound={dataSound}
          data-img={dataImg}
          className='btn btn-sm md:btn-lg opacity-80'
          onClick={(e) => onSetSoundAndImg(e)}
        >
          <FaMusic className='pointer-events-none mr-1' />
          {text}
        </button>
      ))}
    </div>
  )
}

export default SoundPicker
