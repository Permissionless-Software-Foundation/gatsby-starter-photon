import React from 'react'
import styled from 'styled-components'

const Logo = styled.h1`
  color: #000000;
`

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      usdPerToken: 0,
      usdPerBCH: 0,
      bchBalance: 0,
      tokenBalance: 0,
    }
  }

  render() {

    return (
      <section id="header">
        <div className="grid-wrapper">
          <div className="col-12">
            <div>
              <Logo>Permissionless Software Foundation</Logo>
              <h4>Open Source Incentivized With Tokens</h4>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // React Lifecycle - component has mounted.
  async componentDidMount() {
  }
}

export default Header
