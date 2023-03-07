import React, {useEffect,useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import ActionTypes from "../../store/types";


import {Question} from '../index'

export function GameBoard() {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions);
  const user = useSelector((state) => state.user)
  const [points, setPoints] = useState(user.totalPoints)

  useEffect(() => {
    fetch("/questions", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      credentials: "include",
      body: JSON.stringify(user)
    })
      .then(response => response.json()).then(result => dispatch({
      type: ActionTypes.SERVER_QUESTION_DATA,
      payload: result,
    }))
      .catch((error) => console.log(error))
  }, []);


  return (
    
    <div className="flex justify-content-center mt-5">
      {points}
      <div className="d-grid" style={{gridTemplateRows: "1fr 1fr 1fr ", width: '60%'}}>
        <div className="d-grid" style={{gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr"}}>
          <div>Марвел:</div>

          {questions.map((question) => {
            if (question.category === "Марвел") {
              return (
                <div key={question.id}>
                  <Question setPoints={setPoints} question={question}>{question.points}</Question>
                </div>
              );
            }
          })}
        </div>
        <div className="d-grid" style={{gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr"}}>
          <div>Гарри Поттер:</div>
          {questions.map((question) => {
            if (question.category === "Гарри Поттер") {
              return (
                <div key={question.id}>
                  <Question question={question}>{question.points}</Question>
                </div>
              );
            }
          })}
        </div>
        <div className="d-grid" style={{gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr"}}>
          <div>Пиво:</div>

          {questions.map((question) => {
            if (question.category === "Пиво") {
              return (
                <div key={question.id}>
                  <Question question={question}>{question.points}</Question>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
