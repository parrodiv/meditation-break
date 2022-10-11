import { useReducer, createContext } from "react";
import contextReducer from "./contextReducer";

import rainImg from '../components/assets/img/rain.jpg'

const initialState = {
  timer: '00:00',
  timeSelected: '',
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
