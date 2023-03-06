import ATypes from "./types";

const initialState = {
  user: null,
  games: [{
    id:1,
    userId:'123',
    questionId:1,
    isRight:null,
    isTouch:false
  }],
  questions: [],
  isLoading: false,
  isAuth: false,
  error: null,
};

console.log(initialState);

export const reducers = (state = initialState, action) => {
    console.log(action)
  switch (action.type) {
    case ATypes.SET_USER:{
      // const a = JSON.parse(action.payload)
      return {...state, user: action.payload};
    }

    case ATypes.SERVER_QUESTION_DATA :
        return {...state, questions:[...action.payload.questions] , games: [...action.payload.gameBoard]}


    default:
      return state;
  }
};
