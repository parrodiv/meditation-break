import { useParams } from 'react-router-dom'

import AudioPlayer from '../components/AudioPlayer'
import BackgroundImg from '../components/BackgroundImg'
import TimeSelect from '../components/TimeSelect'
import SoundPicker from '../components/SoundPicker'
import Timer from '../components/Timer'

const MeditationPage = () => {
  const { status } = useParams()

  return (
    <div className='app min-h-full min-w-full h-screen w-screen flex justify-evenly items-center'>
      <BackgroundImg />
      <TimeSelect />
      <div className='flex flex-col justify-center imets-center'>
        <AudioPlayer />
        <Timer />
      </div>
      <SoundPicker />
    </div>
  )
}

export default MeditationPage
