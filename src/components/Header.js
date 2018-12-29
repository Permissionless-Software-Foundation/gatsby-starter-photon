import React from 'react'
import { Line } from 'react-chartjs-2'

import PriceChart from "./price-chart"

const SERVER = 'http://localhost:5000'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      usdPerToken: 1.1,
      usdPerBCH: 200,
      bchBalance: 27.6292729518912,
      tokenBalance: 500
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

  // React Lifecycle - component has mounted.
  async componentDidMount() {
    // Update the component state with token price from the server.
    await this.getPrice()

  }

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

}

export default Header
