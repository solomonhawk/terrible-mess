export default function (video) {
  let canvas = document.createElement('canvas')
  let ctx    = canvas.getContext('2d')

  canvas.width  = video.videoWidth
  canvas.height = video.videoHeight

  ctx.drawImage(video, 0, 0)

  return canvas.toDataURL()
}
