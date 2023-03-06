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

export const reducers = (state = initialState, action) => {
    console.log(action)
  switch (action.type) {
    case ATypes.SET_USER:{
      return {...state, user: action.payload};
    }

    case ATypes.SERVER_QUESTION_DATA :
        return {...state, questions:[...action.payload] }

    default:
      return state;
  }
};
