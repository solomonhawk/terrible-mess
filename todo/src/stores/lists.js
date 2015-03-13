import Store from 'microcosm/store'
import List  from 'models/List'
import Item  from 'models/Item'

export default class Lists extends Store {

  getInitialState() {
    return []
  }

  register({ lists }) {
    return {
      [lists.add]            : this.addList,
      [lists.remove]         : this.removeList,
      [lists.appendToList]   : this.addItemToList,
      [lists.removeListItem] : this.removeListItem
    }
  }

  all() {
    return this.state
  }

  find(id) {
    return this.state.filter(i => i.id == id)[0]
  }

  addList(params) {
    let record = List(params)
    this.state = this.state.concat(record)
  }

  removeList(id) {
    this.state = this.state.filter(list => list.id !== id)
  }

  addItemToList({ list, name }) {
    list.items = list.items.concat(Item({ name, list: list.id }))
    this.state = this.state.filter(i => i)
  }

  removeItemFromList(item) {
    let list = this.find(item.list)
    list.items = list.items.filter(i => i !== item)
    this.state = this.state.filter(i => i)
  }

}
