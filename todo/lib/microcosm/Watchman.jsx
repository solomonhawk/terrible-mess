import Pure  from 'react-immutable-render-mixin'
import React from 'react/addons'

let Watchman = React.createClass({

  mixins: [ Pure ],

  propTypes: {
    flux   : React.PropTypes.object.isRequired,
    stores : React.PropTypes.array.isRequired
  },

  getInitialState() {
    return this.getState()
  },

  getState() {
    return this.props.stores.reduce((memo, key) => {
      memo[key] = this.props.flux.stores[key].state
      return memo
    }, {})
  },

  updateState() {
    this.setState(this.getState())
  },

  componentDidMount() {
    this.props.flux.listen(this.updateState)
  },

  componentWillUnmount() {
    this.props.flux.ignore(this.updateState)
  },

  render() {
    let children = React.Children.map(this.props.children, (Component, i) => {
      return React.addons.cloneWithProps(Component, this.state)
    })

    return <span>{ children }</span>
  }
})

export default Watchman
