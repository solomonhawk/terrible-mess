import './style'

import AddList   from 'fragments/AddList'
import ListItem  from 'fragments/ListItem'
import React     from 'react'
import TaskList  from 'fragments/TaskList'
import { Link }  from 'react-router'
import AddIcon   from 'icons/add'
import Icon      from 'fragments/Icon'

import contrast  from 'contrast'

let Home = React.createClass({

  propTypes: {
    lists: React.PropTypes.array.isRequired
  },

  getInitialState() {
    return {
      openCreate: false
    }
  },

  getList(list) {
    let remove = this.props.flux.actions.lists.remove
    return <ListItem key={ list.id } list={ list } onDelete={ remove } />
  },

  render() {
    return (
      <main role="main">
        <header className="fill-primary relative ruled-bottom">
          <Icon className="fab absolute bottom right shadow-1"
                src={ AddIcon }
                onClick={ this._onToggle }/>

          <div className="container pad-9-top pad-7-bottom">
            <h1 className="type-display">ToDoes</h1>
          </div>
        </header>

        <div className="container">
          <div className="fill-white margin-6-top-reverse shadow-1 radius-2 relative">
            <ul className="list">
              { this.props.lists.map(this.getList) }
            </ul>
          </div>
        </div>

        <AddList active={ this.state.openCreate }
                 onExit={ this._onToggle }
                 onCreate={ this._onCreate } />
      </main>
    )
  },

  _onToggle() {
    this.setState({ openCreate: !this.state.openCreate })
  },

  _onCreate(props) {
    this.props.flux.actions.lists.add(props)
  }
})

export default Home
