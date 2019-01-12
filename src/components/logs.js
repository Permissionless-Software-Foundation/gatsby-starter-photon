/*
  Add a $1 badger button.
*/

import React from 'react'
import styled from 'styled-components'

const SERVER = 'http://localhost:5100'

const TextArea = styled.textarea`
  font-size: 14px;
  height: 600px;
`

class Logs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      logStr: "Loading logs..."
    }

    /*
    setInterval(() => {
      this.getLogs()
    }, 10000)
    */
    this.getLogs()
  }

  render() {
    return <TextArea readOnly value={this.state.logStr}>
    </TextArea>
  }

  // Retrieves logs from the server and updates the state.
  async getLogs() {
    try {
      const resp = await fetch(`${SERVER}/logs`)
      const body = await resp.json()

      //debugger

      //const logData = JSON.parse(body)
      //console.log(`body: ${JSON.stringify(logData,null,2)}`)

      this.setState(prevState => ({
        logStr: body.logs
      }))
    } catch(err) {
      console.log(`Error in getLogs: `, err)
    }
  }
}

export default Logs
