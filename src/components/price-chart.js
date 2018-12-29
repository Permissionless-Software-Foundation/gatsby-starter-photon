import React from 'react'
import { Line } from 'react-chartjs-2'
import initChartData from './init-chart-data.js'

const initialState = {
  labels: initChartData.xData,
  datasets: [
    {
      type: 'line',
      label: 'BCH/Token Exchange Rate',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      //data: [65, 59, 80, 81, 56, 55, 40],
      data: initChartData.yData1,
      yAxisID: 'A',
    },
    {
      type: 'line',
      label: '$/Token Exchange Rate',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      //data: [65, 59, 80, 81, 56, 55, 40],
      data: initChartData.yData2,
      yAxisID: 'B',
    },
    {
      type: 'scatter',
      label: 'Current Price',
      data: [
        {
          x: 10000,
          y: 1,
        },
      ],
      fill: false,
      borderColor: 'red',
      backgroundColor: 'red',
      yAxisID: 'B',
      //xAxisID: 'deltaToken'
      pointRadius: 5,
    },
  ],
}

const options = {
  scales: {
    title: {
      text: 'Change in app token balance',
    },
    xAxes: [
      {
        id: 'deltaToken',
        scaleLabel: {
          labelString: 'Token Balance',
          display: true,
        },
      },
    ],
    yAxes: [
      {
        id: 'B',
        type: 'linear',
        position: 'left',
        scaleLabel: {
          labelString: '$/Token',
          display: true,
        },
      },
      {
        id: 'A',
        type: 'linear',
        position: 'right',
        scaleLabel: {
          labelString: 'BCH Balance',
          display: true,
        },
      },
    ],
    responseive: true,
    tooltips: {
      position: 'nearest',
      mode: 'index',
      intersect: false,
    },
  },
  legend: {
    display: false,
  },
}

class PriceChart extends React.Component {
  //displayName: 'Graph',

  componentWillMount() {
    //this.setState(initialState)
    this.setState(prevState => ({
      chartData: initialState,
      chartOptions: options
    }))
  }

  componentDidMount() {
    var _this = this

    setInterval(function() {
      var oldDataSet = _this.state.chartData.datasets[0]
      var newData = []

      //const newIndex = Math.floor(Math.abs(Math.random()*10))
      //let newX = initChartData.xData[newIndex]
      //let newY = initChartData.yData2[newIndex]

      for (var x = 0; x < _this.state.chartData.labels.length; x++) {
        newData.push(Math.floor(Math.random() * 100))
      }
      let newState = _this.state.chartData
      newState.datasets[0].data = newData

      //var newDataSet = {
      //  ...oldDataSet,
      //}

      //newDataSet.data = newData

      //var newState = {
      //  ...initialState,
      //  datasets: [newDataSet],
      //}
      //let newState = _this.state.chartData
      //newState.datasets[2].data[0].x = newX
      //newState.datasets[2].data[0].y = newY
      //newState.datasets[0].data[0] = newX
      //newState.datasets[0].data[0] = newY

      //_this.setState(newState)

      _this.setState(prevState => ({
        chartData: newState
      }))

      window.tempdata = _this.state
      //window.tempdata.chartData.datasets[2].data[0]
    }, 5000)
  }

  render() {
    return <Line data={this.state.chartData} options={this.state.chartOptions} />
  }
}

export default PriceChart
