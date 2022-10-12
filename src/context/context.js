import { useReducer, createContext, useRef } from "react";
import contextReducer from "./contextReducer";

import rainImg from '../components/assets/img/rain.jpg'

const initialState = {
  timer: '00:00',
  timeSelected: '',
  audioSrc: null,
  imgSrc: rainImg,
  isPlaying: false
}

export const MeditationContext = createContext(initialState)

export const MeditationProvider = ({children}) => {
  const [state, dispatch] = useReducer(contextReducer, initialState)

  const songRef = useRef(null)

  return (
    <MeditationContext.Provider value={{
      ...state, dispatch, songRef
    }}>
      {children}
    </MeditationContext.Provider>
  )
}
