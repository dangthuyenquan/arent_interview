import React, { Component } from 'react';
import Chart from 'chart.js';

class LineChart extends Component {
  componentDidMount() {
    this.createChart();
  }

  createChart() {
    const ctx = this.canvasRef.getContext('2d');

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月', '2月', '3月', '4月', '5月'],
        datasets: [
          {
            label: 'Kcal',
            data: [10, 30, 25, 40, 20, 30, 45, 15, 32, 35, 67, 56],
            borderColor: '#8FE9D0',
            backgroundColor: 'transparent',
            borderWidth: 2,
            tension: 0,
          },
          {
            label: 'Kcal',
            data: [10, 32, 18, 63, 22, 33, 53, 25, 38, 38, 69, 57],
            borderColor: '#FFCC21',
            backgroundColor: 'transparent',
            borderWidth: 2,
            tension: 0,
          }
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        stacked: false,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        legend: {
          display: false, // Hide the legend label
        },
        scales: {
          yAxes: [{
            display: false, // Hide the y-axis labels
          }],
        },
      },
    });
  }

  render() {
    return <canvas ref={(ref) => (this.canvasRef = ref)} />;
  }
}

export default LineChart;