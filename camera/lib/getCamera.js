let getUserMedia = navigator.getUserMedia       ||
                   navigator.webkitGetUserMedia ||
                   navigator.mozGetUserMedia    ||
                   navigator.msGetUserMedia

export default function (options) {
  let fn = getUserMedia.bind(navigator, options)
  return new Promise(fn)
}
