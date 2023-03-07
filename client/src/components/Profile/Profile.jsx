import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import {NewChart} from "../NewChart/NewChart";

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
    <div className="container mt-4">
      <h1 className="my-3">Here is Your statistic:</h1>
      <table className="w-1/2 table-auto mx-auto border border-slate-400">
        <thead>
        <tr className="text-left bg-gray-200">
          <th className="border border-slate-300 p-2">Name</th>
          <th className="border border-slate-300 p-2">Points</th>
        </tr>
        </thead>
        <tr className="text-left">
          <td className="border border-slate-300 p-2">Your total score is:</td>
          <td className="border border-slate-300 p-2">{user.totalPoints}</td>
        </tr>
        <tr className="text-left bg-gray-50">
          <td className="border border-slate-300 p-2">Total rigth answers:</td>
          <td className="border border-slate-300 p-2">{rightAnswers}</td>
        </tr>
        <tr className="text-left">
          <td className="border border-slate-300 p-2">Total wrong answers:</td>
          <td className="border border-slate-300 p-2">{wrongAnswers}</td>
        </tr>
        <tr className="text-left bg-gray-50">
          <td className="border border-slate-300 p-2">Total answers:</td>
          <td className="border border-slate-300 p-2">{rightAnswers + wrongAnswers}</td>
        </tr>
      </table>
      <div className="w-1/2 mt-4 mx-auto"><NewChart /></div>
    </div>
  )
}
