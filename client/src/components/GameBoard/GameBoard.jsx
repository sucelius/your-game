import React, {useEffect,useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import ATypes from "../../store/types";


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
      type: ATypes.SERVER_QUESTION_DATA,
      payload: result,
    }))
      .catch((error) => console.log(error))
  }, []);


  return (

    <div className="flex flex-col container mt-5">
      <div className="my-4">Итого очков: {points>=0 ? <span className="font-bold text-green-600">{points}</span> : <span className="font-bold text-red-600">{points}</span>}</div>

      <div className="w-full" style={{gridTemplateRows: "1fr 1fr 1fr ", width: '100%'}}>
        <div className="d-grid" style={{gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr"}}>
          <div className="bg-amber-300 pt-2">Марвел:</div>
          {questions.map((question) => {
            if (question.category === "Марвел") {
              return (
                <div className="bg-green-700" key={question.id}>
                  <Question setPoints={setPoints} question={question}>{question.points}</Question>
                </div>
              );
            }
          })}
        </div>
        <div className="d-grid" style={{gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr"}}>
          <div className="bg-amber-200 pt-2">Гарри Поттер:</div>
          {questions.map((question) => {
            if (question.category === "Гарри Поттер") {
              return (
                <div className="bg-green-600" key={question.id}>
                  <Question setPoints={setPoints} question={question}>{question.points}</Question>
                </div>
              );
            }
          })}
        </div>
        <div className="d-grid" style={{gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr"}}>
          <div className="bg-amber-300 pt-2">Пиво:</div>

          {questions.map((question) => {
            if (question.category === "Пиво") {
              return (
                <div className="bg-green-700" key={question.id}>
                  <Question setPoints={setPoints} question={question}>{question.points}</Question>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
