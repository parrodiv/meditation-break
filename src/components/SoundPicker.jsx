import { useContext } from 'react'
import { MeditationContext } from '../context/context'

import rainSound from '../components/assets/audio/rain.mp3'
import parkSound from '../components/assets/audio/park.mp3'
import seaSound from '../components/assets/audio/sea.mp3'

import rainImg from '../components/assets/img/rain.jpg'
import parkImg from '../components/assets/img/park.jpg'
import seaImg from '../components/assets/img/waves.jpg'

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
    dataSound: seaSound,
    dataImg: seaImg,
    text: 'Sea',
  },
]

const SoundPicker = () => {
  const { dispatch } = useContext(MeditationContext)

  const onSetSoundAndImg = (e) => {
    const { img, sound } = e.target.dataset

    dispatch({
      type: 'SET_SOUND_&_IMG',
      payload: { img, sound },
    })

    dispatch({type: 'PAUSE'})
  }

  return (
    <div className='sound-picker flex flex-col gap-5'>
      {buttonsSoundImg.map(({ dataSound, dataImg, className, text }, index) => (
        <button
          key={index + text}
          data-sound={dataSound}
          data-img={dataImg}
          className="btn btn-info"
          onClick={(e) => onSetSoundAndImg(e)}
        >
          <FaMusic className='mr-1'/>{text}
        </button>
      ))}
    </div>
  )
}

export default SoundPicker
