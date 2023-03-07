import { Bar } from "react-chartjs-2";
export const BarChart = ({ chartData }) => {
   console.log('chartData =>',chartData)
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