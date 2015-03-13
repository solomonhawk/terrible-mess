let defaults = {
  color : 'gray',
  items : [],
  name  : 'No name given, ya fool!'
}

export default function List (params) {
  return { ...defaults, ...params, id: (Math.random() * 99999999 | 0).toString(16) }
}
