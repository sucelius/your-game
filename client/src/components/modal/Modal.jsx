import React, { useState } from 'react';
import {Button, Modal} from 'react-bootstrap';
import { useSelector } from 'react-redux';

export default function Question(question) {
  const [show, setShow] = useState(false);
  const [answer, setAnswer] = useState('');
  const handleClose = () => setShow(false);
  const gameBoard = useSelector((state)=> state.games)

  const user = JSON.parse(useSelector((state) => state.user))
  const state = gameBoard.filter(el=> el.questionId === question.question.id)[0].isTouch

  const start = () => { 
    setShow(true);
    // const timer = setTimeout(async () =>{
    //   await fetch('http://localhost:3001/check/endTimer', {
    //     method: 'POST',
    //     headers: {'Content-Type': 'application/json'},
    //     credentials: 'include',
    //     body: JSON.stringify({questionId: question.question.id, userId: user.id})
    // })
    // }, 1000)
    
  }

function hendleAnswer(){
 if( question.question.answer.toLowerCase() === answer.toLowerCase()) {

 }
};
// console.log(answer);
function hendleChange(event){
  setAnswer(event.target.value)
}

  return (
    <div >
      {state ? 
      <Button style={{width: '100%', borderRadius:'0', border: '1px solid rgb(255 255 0)'}} type='button' variant="primary" onClick={start} disabled  >
        {question.question.points}
      </Button> 
      : 
      <Button style={{width: '100%', borderRadius:'0', border: '1px solid rgb(255 255 0)'}} type='button' variant="primary" onClick={start}  >
        {question.question.points}
      </Button> }
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{question.question.question}</Modal.Title>
        </Modal.Header>
        <div className='d-flex justify-content-center'>
        <input style={{width: "69%"}} onChange={hendleChange} type='text' value={answer} />
        </div>
        <Modal.Footer>
          <Button onClick={hendleAnswer} variant="primary">OK</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

