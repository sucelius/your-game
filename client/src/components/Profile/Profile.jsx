import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {NewChart} from "../NewChart/NewChart";
import ATypes from "../../store/types";

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

  // dispatch({
  //   type: ATypes.SERVER_QUESTION_DATA,
  //   payload: result,

  return (
    <div className="container mt-4">
      <div className="my-3">
        <div className="my-4"><h2>Топ-3</h2></div>
        <table className="w-1/2 mx-auto border border-collapse">
          <thead>
            <tr className="border">
              <th className="border">Имя</th>
              <th className="border">Очки</th>
            </tr>
          </thead>
          {bestPlayers.map(el=><tr><td className="border">{el.name}</td><td className="border">{el.totalPoints}</td></tr>)}
        </table>
      </div>
      <h1 className="my-3">Ваша статистика: </h1>
      <table className="w-1/2 table-auto mx-auto border border-slate-400">
        <thead>
        <tr className="text-left bg-gray-200">
          <th className="border border-slate-300 p-2">Категория</th>
          <th className="border border-slate-300 p-2">Количество</th>
        </tr>
        </thead>
        <tr className="text-left">
          <td className="border border-slate-300 p-2">Итого очков:</td>
          <td className="border border-slate-300 p-2">{user.totalPoints}</td>
        </tr>
        <tr className="text-left bg-gray-50">
          <td className="border border-slate-300 p-2">Правильных ответов:</td>
          <td className="border border-slate-300 p-2">{rightAnswers}</td>
        </tr>
        <tr className="text-left">
          <td className="border border-slate-300 p-2">Неправильных ответов:</td>
          <td className="border border-slate-300 p-2">{wrongAnswers}</td>
        </tr>
        <tr className="text-left bg-gray-50">
          <td className="border border-slate-300 p-2">Всего попыток:</td>
          <td className="border border-slate-300 p-2">{rightAnswers + wrongAnswers}</td>
        </tr>
      </table>
      <div className="w-1/2 mt-4 mx-auto"><NewChart /></div>
    </div>
  )
}
