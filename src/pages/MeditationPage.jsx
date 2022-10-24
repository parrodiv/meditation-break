
import AudioPlayer from '../components/AudioPlayer'
import BackgroundImg from '../components/BackgroundImg'
import TimeSelect from '../components/TimeSelect'
import SoundPicker from '../components/SoundPicker'
import Timer from '../components/Timer'
import Title from '../components/Title'
import TextTip from '../components/TextTip'


const MeditationPage = () => {

  return (
    <>
      <BackgroundImg />
      <div className='animate__animated animate__fadeIn w-full h-full min-h-screen p-4 my-auto flex flex-col justify-evenly'>
        <Title />

        <TextTip />

        <div className='flex flex-col md:flex-row justify-evenly items-center gap-4 md:gap-0 '>
          <TimeSelect />
          <div className='flex flex-col justify-center items-center'>
            <Timer />
            <AudioPlayer />
          </div>
          <SoundPicker />
        </div>
      </div>
    </>
  )
}

export default MeditationPage
