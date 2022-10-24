import { useContext } from "react"
import { MeditationContext } from "../context/context"


const BreathPointer = ({breathAnimation}) => {
  const { breathTextRef, isPlaying } = useContext(MeditationContext)

  

  return (
    <>
      <div className='h-full w-full  -z-5 bg-[rgba(30,25,10,1] rounded-full absolute top-0 left-0'>
        <p
          className='absolute md:top-10 top-7 left-1/2 -translate-x-1/2 text-m md:text-l font-bold text-white'
          ref={breathTextRef}
        ></p>
      </div>

      <div className={isPlaying ? 'pointer-container' : ''}>
        <span className={isPlaying ? 'pointer' : ''}></span>
      </div>

      <div className='gradient-circle'></div>
    </>
  )
}

export default BreathPointer
