import React from "react"
import Helmet from "react-helmet"
import styled from 'styled-components'

import Layout from '../components/layout'
import BadgerButton from '../components/badger-button'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import qrcode from '../assets/images/qrcode.png'

const BchAddress = styled.p`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`

class Homepage extends React.Component {
    render() {
        const siteTitle = "Permissionless Software Foundation";

        return (
            <Layout>
                <Helmet title={siteTitle} />
                <section id="one" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>
                                  Permissionless<br />
                                  &nbsp;Software<br />
                                  &nbsp;&nbsp;Foundation
                                </h2>
                            </header>
                            <p>
                              The mission of the Permissionless Software
                              Foundation is to
                              promote <a href="https://en.wikipedia.org/wiki/Self-ownership" target="_blank">
                                individual sovereignty
                              </a> through
                              the use of software. The Foundation will
                              focus on the development and promotion of software
                              that makes it easy for individuals to protect
                              their privacy, circumvent censorship, and engage
                              in <a href="https://en.wikipedia.org/wiki/Agorism" target="_blank">Agorism</a>.
                            </p>
                        </div>
                        <div className="col-6">
                          <center>
                            <p>
                              The business plan for the Permissionless Softare Foundation
                              and PSF token is still being drafted. You can read the
                              current draft by clicking on the button below. It discusses
                              the unique token economics and mathematics used to create a
                              psudo-stable utility token allowing open source software
                              communities to self-fund without the need for venture capital,
                              corporate sponshorship, or other fiduciary responsibility.
                            </p>
                            <a href="https://docs.google.com/document/d/1UgX_h4TB9CtxxabseC7lRGwQlCsNikPo7DJUlIrNv0k/edit?usp=sharing" target="_blank" className="button special">
                              Read the Business Plan
                            </a>
                          </center>
                        </div>
                    </div>
                </section>

                <section id="two" className="main style2">
                    <div className="grid-wrapper">
                        <div className="col-6">
                          <center>
                            <span className="image">
                              <img src={qrcode} alt="" />
                            </span>
                            <BchAddress>
                              bitcoincash:qzl6k0wvdd5ky99hewghqdgfj2jhcpqnfq8xtct0al
                            </BchAddress>
                            <BadgerButton />
                          </center>
                        </div>
                        <div className="col-6">
                            <header className="major">
                                <h2>
                                  Buy or Sell PSF Tokens
                                </h2>
                            </header>
                            <p>Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.</p>
                            <p>Blandit faucibus proin. Ac aliquam integer adipiscing enim non praesent vis commodo nunc phasellus cubilia ac risus accumsan. Accumsan blandit. Lobortis phasellus non lobortis dit varius mi varius accumsan lobortis. Blandit ante aliquam lacinia lorem lobortis semper morbi col faucibus vitae integer placerat accumsan orci eu mi odio tempus adipiscing adipiscing adipiscing curae consequat feugiat etiam dolore.</p>
                            <p>Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.</p>
                        </div>
                    </div>
                </section>

                <section id="three" className="main style1 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>Adipiscing amet consequat</h2>
                            </header>
                            <p>Ante nunc accumsan et aclacus nascetur ac ante amet sapien sed.</p>
                        </div>

                        <div className="col-4">
                            <span className="image fit"><img src={pic02} alt="" /></span>
                            <h3>Magna feugiat lorem</h3>
                            <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                            <ul className="actions">
                                <li><a href="#" className="button">More</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic03} alt="" /></span>
                            <h3>Magna feugiat lorem</h3>
                            <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                            <ul className="actions">
                                <li><a href="#" className="button">More</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic04} alt="" /></span>
                            <h3>Magna feugiat lorem</h3>
                            <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                            <ul className="actions">
                                <li><a href="#" className="button">More</a></li>
                            </ul>
                        </div>

                    </div>
                </section>

                <section id="four" className="main style2 special">
                    <div className="container">
                        <header className="major">
                            <h2>Ipsum feugiat consequat?</h2>
                        </header>
                        <p>Sed lacus nascetur ac ante amet sapien.</p>
                        <ul className="actions uniform">
                            <li><a href="#" className="button special">Sign Up</a></li>
                            <li><a href="#" className="button">Learn More</a></li>
                        </ul>
                    </div>
                </section>
            </Layout>
        );
    }
}

export default Homepage;
