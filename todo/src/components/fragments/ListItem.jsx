import DeleteIcon from 'icons/delete'
import Icon       from 'fragments/Icon'
import React      from 'react'
import contrast   from 'contrast'
import { Link }   from 'react-router'

let ListItem = React.createClass({
  propTypes: {
    list: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return {
      style: {}
    }
  },

  render() {
    let { color:background, name, id, items } = this.props.list
    let color = contrast(background)

    return (
      <li className='list__item flex flex-align-center' style={this.state.style}>
        <Link className="list__item__link flex" to="list" params={{ id }}>
          <span className="list__item__counter" style={{ background, color }}>
            { items.length }
          </span>
          <span className="flex-grow">{ name }</span>
        </Link>
        <Icon className="margin-2" src={ DeleteIcon } onClick={ this._onRemoveItem }>Delete</Icon>
      </li>
    )
  },

  _onRemoveItem() {
    this.props.onDelete(this.props.list.id)
  }

})

export default ListItem
