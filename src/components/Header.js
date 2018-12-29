import React from 'react'
import { Line } from 'react-chartjs-2'

const SERVER = 'http://localhost:5000'

const xData = [
  0,
  5000,
  5500,
  6000,
  6500,
  7000,
  7500,
  8000,
  8500,
  9000,
  9500,
  10000,
  10500,
  11000,
  11500,
  12000,
  12500,
  13000,
  13500,
  14000,
  14500,
  15000,
  15500,
  16500,
  17500,
  18500,
  19500,
  20000,
]

const yData1 = [
  3.38338208091532,
  9.19698602928606,
  10.164241493515,
  11.2332241029305,
  12.4146325947852,
  13.7202909023507,
  15.1632664928158,
  16.758001150891,
  18.5204555170429,
  20.4682688269495,
  22.620935450899,
  25,
  27.6292729518912,
  30.5350689540042,
  33.7464701894001,
  37.2956174410318,
  41.2180317675032,
  45.5529700097627,
  50.3438176867619,
  55.6385232123117,
  61.4900777789237,
  67.9570457114761,
  75.1041505986608,
  91.7324166904811,
  112.042226758452,
  136.84868479318,
  167.147361056982,
  184.726402473266,
]

const yData2 = [
  0.135335283236613,
  0.367879441171442,
  0.4065696597406,
  0.44932896411722,
  0.496585303791408,
  0.548811636094028,
  0.606530659712632,
  0.67032004603564,
  0.740818220681716,
  0.81873075307798,
  0.90483741803596,
  1,
  1.10517091807565,
  1.22140275816017,
  1.349858807576,
  1.49182469764127,
  1.64872127070013,
  1.82211880039051,
  2.01375270747048,
  2.22554092849247,
  2.45960311115695,
  2.71828182845904,
  3.00416602394643,
  3.66929666761924,
  4.48168907033808,
  5.4739473917272,
  6.68589444227928,
  7.38905609893064,
]

const point = [1]

const data = {
  //labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  labels: xData,
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
      data: yData1,
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
      data: yData2,
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

/*
const plugins = [{
    afterDraw: (chartInstance, easing) => {
        const ctx = chartInstance.chart.ctx;
        console.log(`ctx: ${JSON.stringify(ctx,null,2)}`)
        window.ctx = ctx
        ctx.fillText("This text drawn by a plugin", 100, 100)
        ctx.fillText("*", 300, 100)
    }
}];
*/

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      usdPerToken: 1.1,
      usdPerBCH: 200,
      bchBalance: 27.6292729518912,
      tokenBalance: 500,
    }
  }

  render() {
    return (
      <section id="header">
        <div className="grid-wrapper">
          <div className="col-7">
            <div>
              <h2>App Exchange Rate & Balances</h2>
              <Line data={data} options={options} />
            </div>
          </div>

          <div className="col-5">
            <p>Price: {this.state.usdPerToken}</p>
          </div>
        </div>
        <div className="inner">
          <ul className="actions">
            <li>
              <a href="#one" className="button scrolly">
                Found Out More!
              </a>
            </li>
          </ul>
        </div>
      </section>
    )
  }

  // React Lifecycle - component has mounted.
  async componentDidMount() {
    // Update the component state with token price from the server.
    await this.getPrice()

    // Get the best chart values to use.
    const {bestX, bestY} = this.getBestChartValues()

    // Update the chart
    console.log(`{x, y}: {${bestX}, ${bestY}}`)
    data.datasets[2].data[0].x = bestX
    data.datasets[2].data[0].y = bestY
  }

  getPrice = async () => {
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
  getBestChartValues = () => {
    // Find the best x value.
    const x = this.state.tokenBalance - 5000
    var curr = xData[0];
    var diff = Math.abs (x - curr);
    for (var val = 0; val < xData.length; val++) {
        var newdiff = Math.abs (x - xData[val])
        if (newdiff < diff) {
            diff = newdiff
            curr = xData[val]
        }
    }
    const bestX = curr
    console.log(`bestX: ${bestX}`)

    // Find the best y value.
    const y = this.state.usdPerToken
    var curr = yData2[0];
    var diff = Math.abs (y - curr);
    for (var val = 0; val < yData2.length; val++) {
        var newdiff = Math.abs (y - yData2[val])
        if (newdiff < diff) {
            diff = newdiff
            curr = yData2[val]
        }
    }
    const bestY = curr
    console.log(`bestY: ${bestY}`)

    return {bestX, bestY}
  }
}

export default Header
