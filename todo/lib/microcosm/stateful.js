import Pure          from 'react-immutable-render-mixin'
import { PropTypes } from 'react'

let Stateful = {

  mixins: [ Pure ],

  propTypes: {
    flux: PropTypes.object.isRequired
  },

  getInitialState() {
    if (!this.getState) {
      throw new Error("Stateful mixin requires `getState` implementation.")
    }

    return this.getState()
  },

  _updateState() {
    this.setState(this.getState())
  },

  componentDidMount() {
    this.props.flux.listen(this._updateState)
  },

  componentWillUnmount() {
    this.props.flux.ignore(this._updateState)
  },

  componentWillReceiveProps() {
    this._updateState()
  }

}

export default Stateful
