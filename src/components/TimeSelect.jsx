import { useContext } from 'react'
import { MeditationContext } from '../context/context'

import { FaClock } from 'react-icons/fa'

import formatTime from '../utils/formatTime'

const buttonsTime = [
  {
    dataTime: '120',
    text: '2 min',
  },
  {
    dataTime: '300',
    text: '5 min',
  },
  {
    dataTime: '600',
    text: '10 min',
  },
]

const TimeSelect = () => {
  const { dispatch } = useContext(MeditationContext)

  const onSetTime = (e) => {
    const duration = e.target.dataset.time
    const time = formatTime(duration)

    dispatch({
      type: 'SET_TIME',
      payload: [duration, time],
    })
  }

  return (
    <div className='time-select flex flex-row md:flex-col gap-3 md:gap-5'>
      {buttonsTime.map(({ dataTime, className, text }, index) => (
        <button
          key={index + text}
          data-time={dataTime}
          className="btn btn-sm md:btn-lg opacity-80"
          onClick={(e) => onSetTime(e)}
        >
          <FaClock className='mr-1' />
          {text}
        </button>
      ))}
    </div>
  )
}

export default TimeSelect
