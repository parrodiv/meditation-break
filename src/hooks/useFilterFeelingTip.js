import { feelingTips } from '../constants/feelingTips'

const useFilterFeelingTip = (feeling) => {
  const feelingTipsFiltered = feelingTips.filter((tip) => tip.type === feeling)

  const tip =
    feelingTipsFiltered[Math.floor(Math.random() * feelingTipsFiltered.length)]
      ?.text

  return { feelingTipsFiltered, tip }
}

export default useFilterFeelingTip
