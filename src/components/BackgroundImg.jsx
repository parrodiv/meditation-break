import { useContext } from 'react'
import { MeditationContext } from '../context/context'

const BackgroundImg = () => {
  const { imgSrc } = useContext(MeditationContext)


  return (
    <div className='img-background fixed top-0 left-0 right-0 bottom-0 w-full -z-10'>
      <img
        src={imgSrc}
        alt='backgroundImg'
        className='w-full h-full object-cover'
      />
    </div>
  )
}

export default BackgroundImg
