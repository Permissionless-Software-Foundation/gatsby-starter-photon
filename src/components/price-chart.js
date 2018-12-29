import React from 'react'
import { Line } from 'react-chartjs-2'
import initChartData from './init-chart-data.js'

const SERVER = 'http://localhost:5000'

const initialState = {
  labels: initChartData.xData2,
  datasets: [
    {
      type: 'bubble',
      label: 'Current Price',
      data: [
        {
          x: 10000,
          y: 1,
          r: 5
        },
      ],
      fill: false,
      borderColor: 'red',
      backgroundColor: 'red',
      yAxisID: 'B',
      //xAxisID: 'deltaToken'
      //pointRadius: 10,
    },
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
      pointRadius: 0,
      //pointRadius: 1,
      pointHitRadius: 10,
      data: initChartData.yData1,
      yAxisID: 'A',
      showLine: false
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

  async componentDidMount() {
    var _this = this

    // Update the component state with token price from the server.
    await this.getPrice()

    // Get the best chart values to use.
    const {bestX, bestY} = this.getBestChartValues()
    console.log(`{x, y}: {${bestX}, ${bestY}}`)

    //setInterval(function() {
      var oldDataSet = _this.state.chartData.datasets[1]
      var newData = []

      const newIndex = Math.floor(Math.abs(Math.random()*10))
      let newX = initChartData.xData2[newIndex]
      let newY = initChartData.yData2[newIndex]

      for (var x = 0; x < _this.state.chartData.labels.length; x++) {
        newData.push(Math.floor(Math.random() * 100))
      }
      let newState = _this.state.chartData
      newState.datasets[1].data = newData

      //newState.datasets[0].data[0] = {x: newX, y: newY, r: 5}
      newState.datasets[0].data[0] = {x: bestX, y: bestY, r: 5}

      _this.setState(prevState => ({
        chartData: newState
      }))

      window.tempdata = _this.state
      //window.tempdata.chartData.datasets[2].data[0]
    //}, 5000)
  }

  // Get the current price from the server.
  async getPrice () {
    const resp = await fetch(`${SERVER}/price`)
    const body = await resp.json()

    this.setState(prevState => ({
      usdPerToken: body.usdPerToken,
      usdPerBCH: body.usdPerBCH,
      bchBalance: body.bchBalance,
      tokenBalance: body.tokenBalance,
    }))

    console.log(`usdPerToken: ${this.state.usdPerToken}`)
    console.log(`usdPerBCH: ${this.state.usdPerBCH}`)
    console.log(`bchBalance: ${this.state.bchBalance}`)
    console.log(`tokenBalance: ${this.state.tokenBalance}`)
  }

  // Find the best x-y coordinates to use based on the real price.
  getBestChartValues() {
    // Find the best x value.
    const x = -1*this.state.tokenBalance
    var curr = initChartData.xData2[0];
    var diff = Math.abs (x - curr);
    for (var val = 0; val < initChartData.xData2.length; val++) {
        var newdiff = Math.abs (x - initChartData.xData2[val])
        if (newdiff < diff) {
            diff = newdiff
            curr = initChartData.xData2[val]
        }
    }
    const bestX = curr
    console.log(`bestX: ${bestX}`)

    const index = initChartData.xData2.indexOf(bestX)
    const bestY = initChartData.yData2[index]
    console.log(`bestY: ${bestY}`)
/*
    // Find the best y value.
    const y = this.state.usdPerToken
    var curr = initChartData.yData2[0];
    var diff = Math.abs (y - curr);
    for (var val = 0; val < initChartData.yData2.length; val++) {
        var newdiff = Math.abs (y - initChartData.yData2[val])
        if (newdiff < diff) {
            diff = newdiff
            curr = initChartData.yData2[val]
        }
    }
    const bestY = curr
    console.log(`bestY: ${bestY}`)
*/
    return {bestX, bestY}
  }


  render() {
    return <Line data={this.state.chartData} options={this.state.chartOptions} />
  }
}

export default PriceChart
