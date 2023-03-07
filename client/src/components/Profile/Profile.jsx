import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';

export default function Profile() {
  const user = useSelector((state) => state.user);
  const game = useSelector((state) => state.games)
  console.log(game);
  const rightAnswers = game.map(el => el.isRight).filter(el => el === true).length;
  const wrongAnswers = game.map(el => el.isRight).filter(el => el === false).length;
  console.log(wrongAnswers);

  const[bestPlayer, setBestPlayer] = useState([])

  useEffect(() => {
    fetch('/profile', {
      credentials: 'include',
    }).then(response => response.json())
    // .then(result => setBestPlayer(result));

  })

  // dispatch({
  //   type: ATypes.SERVER_QUESTION_DATA,
  //   payload: result,

  return (
    <div>
      <h1>Profile</h1>
      <div>Here is Your statistic:
        <div>
          <ul>
            <div>
              <li>
                Your total score is: {user.totalPoints}
              </li>
            </div>
            <div>
              <li>
                Total rigth answers: {rightAnswers}
              </li>
            </div>
            <div>
              <li>
                Total wrong answers: {wrongAnswers}
              </li>
            </div>
            <div>
              <li>
                Total answers: {rightAnswers + wrongAnswers}
              </li>
            </div>
            <div>
              <li>
                <ul>
                    {/* List of the best players:
                    {bestPlayer.map(player => 
                      <li>

                      </li>
                      )} */}
                </ul>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}
