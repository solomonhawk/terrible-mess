let defaults = {
  name : 'No name given, ya fool!'
}

export default function Item (params) {
  if (!params.list) {
    throw Error('Items expect a list property!')
  }

  return { ...defaults, ...params, id: (Math.random() * 99999999 | 0).toString(16) }
}
