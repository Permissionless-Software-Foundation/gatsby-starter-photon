/*
  Add a warning to the top of the screen
*/

import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.a`
  margin-bottom: 25px;
`

const MainDiv = styled.section`
  background-color: #ffff00;
`

class WarningDiv extends React.Component {
  render() {
    return (<MainDiv>
        <p>
          <b>Warning:</b> The PSF token should not be considered an investment.
          It's an experimental business model for tracking and rewarding effort
          in open source projects. It's value is intended to be transactional
          in nature,
          and any long-term value is highly speculative.
        </p>
      </MainDiv>
    )
  }

}

export default WarningDiv
