import React, {useEffect, useState} from 'react';
import {Button, Modal} from 'react-bootstrap';
import {useSelector} from 'react-redux';

export default function Question(question) {
  const [show, setShow] = useState(false);
  const [answer, setAnswer] = useState('');
  const handleClose = () => setShow(false);
  const gameBoard = useSelector((state) => state.games)

  const user = useSelector((state) => state.user)
  console.log('gameBoard', gameBoard)
  const state = gameBoard.filter(el => el.questionId === question.question.id)[0].isTouch
  console.log('Quie Id', question.question.id)
  console.log(state)

  const start = () => {
    setShow(true);
    console.log('show')

  }


  function hendleAnswer() {
    if (question.question.answer.toLowerCase() === answer.toLowerCase()) {

    }
  };

// console.log(answer);
  function hendleChange(event) {
    setAnswer(event.target.value)
  }

  return (
    <div>
      {state ?
        <Button style={{width: '100%', borderRadius: '0', border: '1px solid rgb(255 255 0)'}} type='button'
                variant="primary" onClick={start} disabled>
          {question.question.points}
        </Button>
        :
        <Button style={{width: '100%', borderRadius: '0', border: '1px solid rgb(255 255 0)'}} type='button'
                variant="primary" onClick={start}>
          {question.question.points}
        </Button>}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <div className="d-flex justify-content-center">
          <h1 className="mx-16 my-12">{question.question.question}</h1>
        </div>
        <div className='d-flex justify-content-center'>
          <input
            className="mx-[32px] bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={hendleChange} type='text' value={answer}/>
        </div>
        <div className="mx-auto my-4">
          <button className="bg-blue-600 text-white py-2.5 px-5 rounded" onClick={handleClose} variant="primary">Ответить
          </button>
        </div>
      </Modal>
    </div>
  );
}

