import { useEffect, useState } from 'react'
import { GiMeditation } from 'react-icons/gi'
import { useParams } from 'react-router-dom'

import { feelingTips } from '../constants/feelingTips'
import { MdOutlineNextPlan } from 'react-icons/md'

const TextTip = () => {
  const { feeling } = useParams()
  const [state, setState] = useState({
    feelingTipsFiltered: [],
    tip: '',
  })

  useEffect(() => {
    const feelingTipsFiltered = feelingTips.filter(
      (tip) => tip.type === feeling
    )

    setState({
      feelingTipsFiltered,
      //selezione random del tip
      tip: feelingTipsFiltered[
        Math.floor(Math.random() * feelingTipsFiltered.length)
      ]?.text,
    })
  }, [feeling])

  return (
    <div className='relative text-tip p-5 my-5 shadow-xl w-3/4 text-center mx-auto border rounded-xl bg-white min-w-2/4'>
      <span className='absolute -top-10 left-0 text-5xl text-black rotate-5'>
        <GiMeditation />
      </span>
      <span className='absolute -top-10 right-0  text-5xl text-black rotate-5'>
        <GiMeditation />
      </span>
      <h3>{state.tip}</h3>
      <MdOutlineNextPlan className='absolute text-xl cursor-pointer text-black bottom-5 right-5' />
    </div>
  )
}

export default TextTip
