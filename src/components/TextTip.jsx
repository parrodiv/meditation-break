import { useEffect, useState } from 'react'
import { GiMeditation } from 'react-icons/gi'
import { useParams } from 'react-router-dom'

import useFilterFeelingTip from '../hooks/useFilterFeelingTip'

const TextTip = () => {
  const { feeling } = useParams()
  const [state, setState] = useState({
    feelingTipsFiltered: [],
    tip: '',
  })

  const { feelingTipsFiltered, tip } = useFilterFeelingTip(feeling)

  useEffect(() => {
    setState({
      feelingTipsFiltered,
      tip: tip,
    })
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      onChangeTip()
    }, 10000)

    return () => clearInterval(interval)
    // eslint-disable-next-line
  }, [state.tip])

  const onChangeTip = () => {
    const tipsWithoutCurrent = feelingTipsFiltered.filter(
      (tip) => tip.text !== state.tip
    )

    setState({
      ...state,
      tip: tipsWithoutCurrent[
        Math.floor(Math.random() * tipsWithoutCurrent.length)
      ]?.text,
    })
  }

  return (
    <div className='relative opacity-80 text-tip p-5 my-5 shadow-xl w-3/4 text-center mx-auto border rounded-xl bg-white min-w-2/4'>
      <span className='absolute -translate-y-1/2 top-1/2 left-0 text-xl md:text-4xl text-blue-300 rotate-5'>
        <GiMeditation />
      </span>
      <span className='absolute -translate-y-1/2 top-1/2 right-0  text-xl md:text-4xl  text-blue-300 rotate-5'>
        <GiMeditation />
      </span>
      <p
        key={Math.random()}
        className='animate__animated animate__fadeIn font-light text-black text-m md:text-l lg:text-xl'
      >
        {state.tip}
      </p>
    </div>
  )
}

export default TextTip
