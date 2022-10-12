const contextReducer = (state, action) => {

  switch(action.type) {
      case 'SET_TIME':
        return {
          ...state,
          timer: action.payload[1],
          timeSelected: action.payload[0]
        }
      case 'SET_SOUND_&_IMG':
        return {
          ...state,
          audioSrc: action.payload.sound,
          imgSrc: action.payload.img
        }
      case 'ON_TIME_UPDATE':
        return {
          ...state,
          timer: action.payload
        }
      case 'PLAY':
        return {
          ...state,
          isPlaying: true
        }
      case 'PAUSE':
        return {
          ...state,
          isPlaying: false
        }
        break
      default: 
        return state
  }
}

export default contextReducer