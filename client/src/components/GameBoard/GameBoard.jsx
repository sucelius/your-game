import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import ActionTypes from "../../store/types";


import {Question} from '../index'

export function GameBoard() {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions);
  const user = useSelector((state) => state.user)

  useEffect(() => {
    // function serverQuestiondata() {
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


    // serverQuestiondata()
  }, [user]);


  return (
    <div className="flex justify-content-center mt-5">
      <div className="d-grid" style={{gridTemplateRows: "1fr 1fr 1fr ", width: '60%'}}>
        <div className="d-grid" style={{gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr"}}>
          <div className="bg-amber-300">Марвел:</div>

          {questions.map((question) => {
            if (question.category === "Марвел") {
              return (
                <div className="bg-green-700" key={question.id}>
                  <Question question={question}>{question.points}</Question>
                </div>
              );
            }
          })}
        </div>
        <div className="d-grid" style={{gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr"}}>
          <div className="bg-amber-200">Гарри Поттер:</div>
          {questions.map((question) => {
            if (question.category === "Гарри Поттер") {
              return (
                <div className="bg-green-600" key={question.id}>
                  <Question question={question}>{question.points}</Question>
                </div>
              );
            }
          })}
        </div>
        <div className="d-grid" style={{gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr"}}>
          <div className="bg-amber-300">Пиво:</div>

          {questions.map((question) => {
            if (question.category === "Пиво") {
              return (
                <div className="bg-green-700" key={question.id}>
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
