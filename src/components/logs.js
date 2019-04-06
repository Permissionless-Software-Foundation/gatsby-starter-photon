/*
  Add a $1 badger button.
*/

import React from 'react'
import styled from 'styled-components'
import fetch from 'isomorphic-fetch'

const SERVER = 'https://psfoundation.co/test'

const TextArea = styled.textarea`
  font-size: 14px;
  height: 600px;
`
// Flag to indicate if component has had it's first render.
let renderCnt = 0

class Logs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      logStr: "Loading logs..."
    }
/*
    // Update the logs periodically.
    setInterval(() => {
      this.getLogs()
    }, 15000)
*/
    // Initialize the logs
    //this.getLogs()
  }

  render() {
    renderCnt++
    return <TextArea id="logTextArea" readOnly value={this.state.logStr}>
    </TextArea>
  }
/*
  // Retrieves logs from the server and updates the state.
  async getLogs() {
    try {
      const resp = await fetch(`${SERVER}/logs`)
      const body = await resp.json()

      const logAry = body.logs.split('\n')

      // Parse the raw logs.
      let logStr = ""
      for(let i=0; i < logAry.length; i++) {
        const thisLog = logAry[i]
        try {
          // Convert the log JSON string to an object.
          const parsedLog = JSON.parse(thisLog)

          // Only display the 'info' level of logs.
          if(parsedLog.level === "info")
            logStr += `${parsedLog.message}\n`
        } catch(err) {
          //console.log(`Error parsing at index ${i}: `, err)
          //console.log(`logAry[i]: ${logAry[i]}`)
          continue
        }
      }

      // Update the state which displays new logs.
      this.setState(prevState => ({
        logStr: logStr
      }))

      if(renderCnt < 3) this.scrollToBottom()
    } catch(err) {
      console.log(`Error in getLogs: `, err)
    }
  }
*/
  // Scrolls the textarea to the bottom, most recent logs.
  scrollToBottom() {
    // The below syntax fixes a bug in 'npm build':
    // https://github.com/gatsbyjs/gatsby/issues/309

    if(typeof document !== 'undefined') {
      const textarea = document.getElementById('logTextArea');
      textarea.scrollTop = textarea.scrollHeight;
    }

  }
}

export default Logs
