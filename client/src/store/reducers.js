import ATypes from "./types";

const initialState = {
  user: null,
  games: [{
    id:1,
    userId:'123',
    questionId:1,
    isRight:null,
    isTouch:false,
  }],
  questions: [],
  data : [0, 0, 0],
  bestPlayers: [],
};

console.log(initialState);

export const reducers = (state = initialState, action) => {
    console.log('action-->', action)
  switch (action.type) {
    case ATypes.SET_USER:{
      return {...state, user: action.payload};
    }
    case ATypes.SERVER_QUESTION_DATA :
        return {...state, questions:[...action.payload.questions] ,
           games: [...action.payload.gameBoard]}

    case ATypes.SERVER_GAME_DATA: 
    return {...state, games: state.games.map(el =>{
      if (el.id === action.payload.id) {
      return el=action.payload
    } else { return el;}
  } )}

  case ATypes.CHART_DATA :
    return {...state, data:action.payload.data}

  case ATypes.SET_BEST_PLAYERS:
    return {...state, bestPlayers: action.payload}


    default:
      return state;
  }
};
