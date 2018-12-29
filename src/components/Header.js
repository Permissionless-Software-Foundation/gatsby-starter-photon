import React from 'react'
import { Line } from 'react-chartjs-2'

import PriceChart from "./price-chart"

const SERVER = 'http://localhost:5000'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <section id="header">
        <div className="grid-wrapper">
          <div className="col-7">
            <div>
              <h2>App Exchange Rate & Balances</h2>
              <PriceChart />
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
}

export default Header
