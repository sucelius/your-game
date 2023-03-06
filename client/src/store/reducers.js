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
  questions: [{
    id:1,
    question: 'Is it  question????',
    answer: 'Answer is no',
    points: 100,
    category: 'Stupid'

  },
  {
    id:2,
    question: 'What????',
    answer: 'Answer is oops',
    points: 100,
    category: 'Mems'

  },
  {
    id:2,
    question: 'What????',
    answer: 'Answer is oops',
    points: 200,
    category: 'Space'

  },
  {
    id:2,
    question: 'What????',
    answer: 'Answer is oops',
    points: 200,
    category: 'Space'

  },
  {
    id:2,
    question: 'What????',
    answer: 'Answer is oops',
    points: 200,
    category: 'Space'

  }
],
  isLoading: false,
  isAuth: false,
  error: null,
};

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ATypes.SET_USER:{
      return {...state, user: action.payload};
    }
    default:
      return state;
  }
};
