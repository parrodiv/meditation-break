import { useReducer, createContext } from "react";
import contextReducer from "./contextReducer";

import rainImg from '../components/assets/img/rain.jpg'

const initialState = {
  timer: null,
  timeSelected: 0,
  audioSrc: null,
  imgSrc: rainImg,
}

export const MeditationContext = createContext(initialState)

export const MeditationProvider = ({children}) => {
  const [state, dispatch] = useReducer(contextReducer, initialState)

  //Actions

  return (
    <MeditationContext.Provider value={{
      ...state, dispatch
    }}>
      {children}
    </MeditationContext.Provider>
  )
}
