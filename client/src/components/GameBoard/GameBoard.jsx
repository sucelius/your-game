import React from "react";
import { useSelector } from "react-redux";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export function GameBoard() {

  const questions = useSelector((state) => state.questions);



  return (
    <Container>
      <Row>
      Stupid:
        {questions.map((question) => {
            if (question.category === 'Stupid') {
                return(
                    <Col><Button>{question.points}</Button></Col>
                )
            }
        })}
      </Row>
      <Row>
        Mems:
        {questions.map((question) => {
            if (question.category === 'Mems') {
                return(
                    <Col><Button>{question.points}</Button></Col>
                )
            }
        })}
      </Row>
      <Row>
      Space:
      {questions.map((question) => {
            if (question.category === 'Space') {
                return(
                    <Col><Button>{question.points}</Button></Col>
                )
            }
        })}
      </Row>
    </Container>
  );
}
