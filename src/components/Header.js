import React from 'react'
import { Line } from 'react-chartjs-2'

const xData = [
  -25000,
  -20000,
  -15000,
  -10000,
  -5000,
  -4500,
  -4000,
  -3500,
  -3000,
  -2500,
  -2000,
  -1500,
  -1000,
  -500,
  0,
  500,
  1000,
  1500,
  2000,
  2500,
  3000,
  3500,
  4000,
  4500,
  5000,
  5500,
  6500,
  7500,
  8500,
  9500,
  10000,
  12500,
  15000,
  20000,
]

const yData = [
  0.168448674977137,
  0.457890972218354,
  1.2446767091966,
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
  304.562349017587,
  502.138423079692,
  1364.95375082861,
]

const data = {
  //labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  labels: xData,
  datasets: [
    {
      label: 'My First dataset',
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
      data: yData
    },
  ],
}

class Header extends React.Component {
  render() {
    return (
      <section id="header">
        <div className="grid-wrapper">
          <div className="col-5" />
          <div className="col-7">
            <div>
              <h2>Line Example</h2>
              <Line data={data} />
            </div>
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
}

export default Header
