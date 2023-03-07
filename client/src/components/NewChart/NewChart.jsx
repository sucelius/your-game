import { Bar } from "react-chartjs-2";
import React, {useEffect, useState} from 'react';
import {useSelector , useDispatch } from "react-redux";
import { BarChart} from '../index'
import ActionTypes from "../../store/types";


import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);

export function NewChart() {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.games)
  const chartData = useSelector((state) => state.data)
 
  console.log('cardata', chartData)
  



  useEffect(() => {
    dispatch({type:ActionTypes.CHART_DATA, payload:{
      data:[trueAnswers,wrongAnswers,nullAnswers]
    }})
  },[])
 
    const trueAnswers = games.map(el => el.isRight).filter(el => el === true).length;
    const wrongAnswers = games.map(el => el.isRight).filter(el => el === false).length;
    const nullAnswers = games.map(el => el.isRight).filter(el => el === null).length;



  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Твои ответы</h2>
      <Bar
        data = {{
            labels: ['Правильно', 'Неправильно', 'Осталось'],
            datasets: [
              {
                label: 'Popularity of colours',
                data: chartData,
              
                backgroundColor: [
                  'rgb(255 255 0)',
                  'red',
                  'green',
                ],
                borderWidth: 1,
              }
            ] }}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Смотри как клёво"
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
};



