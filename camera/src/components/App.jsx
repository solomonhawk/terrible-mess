import 'style/app'

import React     from 'react'
import Video     from 'Video'
import getCamera from 'getCamera'

let App = React.createClass({

  getInitialState() {
    return {
      errors : [],
      stream : null
    }
  },

  streamDidConnect(stream) {
    this.setState({ stream })
  },

  streamDidFail(error) {
    console.log(error.stack)
    this.setState({ error })
  },

  getUserMedia() {
    getCamera({ video: true }).then(this.streamDidConnect, this.streamDidFail)
  },

  render() {
    return (
      <main>
        <p>{ this.state.error }</p>
        <p>{ this.state.stream && <Video stream={ this.state.stream } />}</p>
        <button onClick={ this.getUserMedia }>Activate</button>
      </main>
    )
  }

})

export default App
