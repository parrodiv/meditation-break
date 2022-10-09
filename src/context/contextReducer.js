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
  }
}

export default contextReducer