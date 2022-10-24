import { useReducer, createContext, useRef } from "react";
import contextReducer from "./contextReducer";

import Home_Bg from '../components/assets/img/home_bg.gif'

const initialState = {
  timer: '00:00',
  timeSelected: '',
  audioSrc: null,
  imgSrc: Home_Bg,
  isPlaying: false
}

export const MeditationContext = createContext(initialState)

export const MeditationProvider = ({children}) => {
  const [state, dispatch] = useReducer(contextReducer, initialState)

  const songRef = useRef(null)
  const breathTextRef = useRef(null)

  return (
    <MeditationContext.Provider value={{
      ...state, dispatch, songRef, breathTextRef
    }}>
      {children}
    </MeditationContext.Provider>
  )
}
