import 'style/app'

import React    from 'react'
import Router   from 'react-router'
import Watchman from 'Watchman'

let App = React.createClass({

  render() {
    return (
      <Watchman flux={ this.props.flux } stores={[ 'lists' ]}>
        <Router.RouteHandler { ...this.state } { ...this.props } />
      </Watchman>
    )
  }
})

export default App
