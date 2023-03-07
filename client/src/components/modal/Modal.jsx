import React, {useEffect, useState} from 'react';
import {Button, Modal} from 'react-bootstrap';
import {useSelector,useDispatch} from 'react-redux';
import { useResolvedPath } from 'react-router-dom';
import ATypes from '../../store/types';

export default function Question({question, setPoints}) {
  const [show, setShow] = useState(false);
  const [answer, setAnswer] = useState('');
  const dispatch = useDispatch()
  const gameBoard = useSelector((state) => state.games)

  const user = useSelector((state) => state.user)

  const state = gameBoard.filter(el => el.questionId === question.id)[0].isTouch


  const start = () => {
    setShow(true);

  }


  function hendleAnswer() {
    setShow(false)
    if (question.answer.toLowerCase() === answer.toLowerCase()) {
      const checkAnswer =  gameBoard.filter(el => el.questionId === question.id)[0]
      checkAnswer.isTouch = true;
      checkAnswer.isRight = true;
      console.log(checkAnswer);
      dispatch({type: ATypes.SERVER_GAME_DATA, payload:checkAnswer })
      user.totalPoints+=question.points
      dispatch({type: ATypes.SET_USER, payload:user})
      setPoints(user.totalPoints)
    } else {
      // checkAnswer.isTouch = true;
      // checkAnswer.isRight = false; 
    }

  };

  function hendleChange(event) {
    setAnswer(event.target.value)
  }

  return (
    <div>
      {state ?
        <Button style={{width: '100%', borderRadius: '0', border: '1px solid rgb(255 255 0)'}} type='button'
                variant="primary" disabled>
          {question.points}
        </Button>
        :
        <Button style={{width: '100%', borderRadius: '0', border: '1px solid rgb(255 255 0)'}} type='button' onClick={start}
                variant="primary" >
          {question.points}
        </Button>}
      <Modal
        show={show}
        
        backdrop="static"
        keyboard={false}
      >
        <div className="d-flex justify-content-center">
          <h1 className="mx-16 my-12">{question.question}</h1>
        </div>
        <div className='d-flex justify-content-center'>
          <input
            className="mx-[32px] bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={hendleChange} type='text' value={answer}/>
        </div>
        <div className="mx-auto my-4">
          <button className="bg-blue-600 text-white py-2.5 px-5 rounded" onClick={hendleAnswer} variant="primary">Ответить
          </button>
        </div>
      </Modal>
    </div>
  );
}

