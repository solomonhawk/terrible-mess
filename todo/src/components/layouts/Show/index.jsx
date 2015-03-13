import './style'

import React      from 'react'
import TaskList   from 'fragments/TaskList'
import Icon       from 'fragments/Icon'
import { Navigation, Link }   from 'react-router'
import contrast   from 'contrast'

import BackIcon   from 'icons/arrow-back'
import DeleteIcon from 'icons/delete'

let Show = React.createClass({
  mixins: [ Navigation ],

  render() {
    let list  = this.props.flux.stores.lists.find(this.props.params.id)
    let color = contrast(list.color)

    return (
      <main role="main">
        <header className="ruled-bottom" style={{ background: list.color, color }}>
          <div className="flex pad-2">
            <div className="flex-grow">
              <Icon src={ BackIcon } element={ Link } to="/" />
            </div>
            <Icon src={ DeleteIcon } onClick={ this._onRemoveList } />
          </div>
          <div className="container pad-2-top pad-8-bottom">
            <h1 className="type-display">{ list.name }</h1>
          </div>
        </header>
        <TaskList list={ list } flux={ this.props.flux } />
      </main>
    )
  },

  _onRemoveList() {
    this.props.flux.stores.lists.remove(this.props.params.id)
    this.transitionTo('/')
  }

})

export default Show
