import React     from 'react'
import Router    from 'react-router'
import Routes    from 'components/routes'
import Microcosm from 'microcosm'

class App extends Microcosm {
  constructor() {
    super()

    this.addActions({
      lists: require('actions/lists')
    })

    this.addStores({
      lists: require('stores/lists')
    })
  }
}

let flux = new App()

Router.run(Routes, Router.HistoryLocation, (Handler, config) => {
  React.render(
    (<Handler flux={ flux } { ...config } />),
    document.getElementById('app')
  )
})
