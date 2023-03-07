import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import ATypes from '../../store/types';

export default function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const game = useSelector((state) => state.games)
  const bestPlayers = useSelector((state) => state.bestPlayers)

  const rightAnswers = game.map(el => el.isRight).filter(el => el === true).length;
  const wrongAnswers = game.map(el => el.isRight).filter(el => el === false).length;

  useEffect(() => {
    fetch('/profile', {
      credentials: 'include',
    }).then(response => response.json()).then(result => dispatch({
      type: ATypes.SET_BEST_PLAYERS,
      payload: result
    }))

  }, [])

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
                <ol>
                    List of the best players:
                    {bestPlayers.map(player => 
                    <li>
                      <p>Player name: {player.name}</p>
                      <p>Total points: {player.totalPoints}</p>
                    </li>
                      )}
                </ol>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}
