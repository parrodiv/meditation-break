import { useContext } from 'react'
import { MeditationContext } from '../context/context'

import formatTime from '../utils/formatTime'

const buttonsTime = [
  {
    dataTime: '120',
    className: 'btn',
    text: '2 min',
  },
  {
    dataTime: '300',
    className: 'btn',
    text: '5 min',
  },
  {
    dataTime: '600',
    className: 'btn',
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
    <div className='time-select flex flex-col gap-5'>
      {buttonsTime.map(({ dataTime, className, text }, index) => (
        <button
          key={index + text}
          data-time={dataTime}
          className={className}
          onClick={(e) => onSetTime(e)}
        >
          {' '}
          {text}
        </button>
      ))}
    </div>
  )
}

export default TimeSelect
