import { useEffect, useState } from 'react'
import { GiMeditation } from 'react-icons/gi'
import { useParams } from 'react-router-dom'

import { MdOutlineNextPlan } from 'react-icons/md'
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
      tip: tip
    })
  }, [])

  const onChangeTip = () => {
    const tipsWithoutCurrent = feelingTipsFiltered.filter(tip => tip.text !== state.tip)
    setState({
      ...state,
      tip:
        tipsWithoutCurrent[
          Math.floor(Math.random() * tipsWithoutCurrent.length)
        ]?.text,
    })
  }

  return (
    <div className='relative text-tip p-5 my-5 shadow-xl w-3/4 text-center mx-auto border rounded-xl bg-white min-w-2/4'>
      <span className='absolute -top-10 left-0 text-5xl text-black rotate-5'>
        <GiMeditation />
      </span>
      <span className='absolute -top-10 right-0  text-5xl text-black rotate-5'>
        <GiMeditation />
      </span>
      <h3>{state.tip}</h3>
      <MdOutlineNextPlan className='absolute text-xl cursor-pointer text-black bottom-5 right-5' onClick={() => onChangeTip()} />
    </div>
  )
}

export default TextTip
