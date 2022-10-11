import { useParams } from 'react-router-dom'

import AudioPlayer from '../components/AudioPlayer'
import BackgroundImg from '../components/BackgroundImg'
import TimeSelect from '../components/TimeSelect'
import SoundPicker from '../components/SoundPicker'

const MeditationPage = () => {
  const { status } = useParams()

  return (
    <div className='app min-h-full min-w-full h-screen w-screen flex justify-evenly items-center'>
      <BackgroundImg />
      <TimeSelect />
      <AudioPlayer />
      <SoundPicker />
    </div>
  )
}

export default MeditationPage
