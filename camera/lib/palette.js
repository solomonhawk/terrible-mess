import ColorThief from 'color-thief'

export default function (graphic) {
  let thief = new ColorThief()
  return thief.getPalette(graphic, 8);
}
