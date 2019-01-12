import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Layout from '../components/layout'
import PriceChart from '../components/price-chart'
import Logs from '../components/logs'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import qrcode from '../assets/images/testnet-addr.png'

const BchAddress = styled.p`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`

const BizPlanButton = styled.a`
  margin-bottom: 25px;
`

class Homepage extends React.Component {
  render() {
    const siteTitle = 'Testnet | Permissionless Software Foundation'

    return (
      <div className={`body`}>
        <Helmet title={siteTitle} />

        <section id="two" className="main style2">
          <div className="grid-wrapper">
            <div className="col-8">
              <center><h2>Testnet</h2></center>
              <PriceChart />
            </div>

            <div className="col-4">
              <center>
                <span className="image">
                  <img src={qrcode} alt="" />
                </span>
                <BchAddress>
                  bchtest:qq8wqgxq0uu4y6k92pw9f7s6hxzfp9umsvtg39pzqf
                </BchAddress>
                <p>
                  Send testnet BCH to the address above and you'll recieve testnet
                  Wormhole tokens. Send tokens to the address above and you'll
                  recieved testnet BCH. Watch the logs below to see the inner
                  workings of the liquidity app.
                </p>
                <p><b>
                  You can <a href="https://developer.bitcoin.com/faucets/bch" target="_blank">
                    get tesnet BCH here
                  </a>.
                </b></p>
              </center>
            </div>

          </div>
        </section>

        <section id="three" className="main style1 special">
          <div className="grid-wrapper">
            <div className="col-12">
              <header className="major">
                <h2>Logs</h2>
              </header>
              <Logs />
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Homepage
