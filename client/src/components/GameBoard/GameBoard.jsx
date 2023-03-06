import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ActionTypes from "../../store/types";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export function GameBoard() {
  const dispatch = useDispatch();
//   const questions = useSelector((state) => state.questions);
    const [questions, setQuestions] = useState([])
 


  useEffect(() => {
    async function serverQuestiondata() {
        try {
          const response = await fetch("http://localhost:3001/questions", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
          });
    
          const result = await response.json();
          setQuestions(result)

          
  
        } catch (error) {
          console.log(error);
        }
      }
      serverQuestiondata()
  }, []);

        dispatch({
            type: ActionTypes.SERVER_QUESTION_DATA,
            payload: questions,
          });


  return (
    <Container>
      <Row>
        Марвел:
        {questions.map((question) => {
          if (question.category === "Марвел") {
            return (
              <Col key={question.id}>
                <Button>{question.points}</Button>
              </Col>
            );
          }
        })}
      </Row>
      <Row>
        Гарри Поттер:
        {questions.map((question) => {
          if (question.category === "Гарри Поттер") {
            return (
              <Col key={question.id}>
                <Button>{question.points}</Button>
              </Col>
            );
          }
        })}
      </Row>
      <Row>
        Пиво:
        {questions.map((question) => {
          if (question.category === "Пиво") {
            return (
              <Col key={question.id}>
                <Button>{question.points}</Button>
              </Col>
            );
          }
        })}
      </Row>
    </Container>
  );
}
