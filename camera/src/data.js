import Firebase from 'firebase'
import Item     from './models/Item'
import List     from './models/List'

import { EventEmitter } from 'events'

let Tube = new Firebase("https://nhunzaker-todo.firebaseio.com/todos");

let records = []

try {
  records = JSON.parse(localStorage.cache)
} catch(x) {
  console.log('Starting from stratch')
}

class Data extends EventEmitter {

  all() {
    return records
  }

  find(id) {
    return records.filter(i => i.id == id)[0]
  }

  addList(params) {
    let record = List(params)
    records = records.concat(record)
    this.emit('change')
  }

  removeList(id) {
    records = records.filter(list => list.id !== id)
    this.emit('change')
  }

  addItemToList(list, name) {
    list.items = list.items.concat(Item({ name, list: list.id }))
    this.emit('change')
  }

  removeItemFromList(item) {
    let list = this.find(item.list)
    list.items = list.items.filter(i => i !== item)
    this.emit('change')
  }

}

let data = new Data()

data.addListener('change', function() {
  Tube.push(records)
})

export default data
