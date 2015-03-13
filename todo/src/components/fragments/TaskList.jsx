import AddItem      from './AddItem'
import React        from 'react'
import TaskListItem from './TaskListItem'

let TaskList = React.createClass({

  propTypes: {
    list: React.PropTypes.object.isRequired
  },

  getItem(item) {
    return <TaskListItem key={ item.id } item={ item } onDelete={ this.props.flux.actions.lists.removeListItem } />
  },

  render() {
    let { color, id, items, name } = this.props.list

    return (
      <section className="container pad-1-bottom">
        <div className="fill-white shadow-1 radius-2 margin-5-top-reverse margin-2-bottom pad-2-left pad-2-right pad-2-bottom">
          <AddItem onSubmit={ this._onAddItem } />
        </div>

        <div className="fill-white shadow-1 radius-2 relative">
          <ul className="list">
            { items.map(this.getItem) }
          </ul>
        </div>
      </section>
    )
  },

  _onAddItem(name) {
    this.props.flux.actions.lists.appendToList(this.props.list, name)
  }

})

export default TaskList
