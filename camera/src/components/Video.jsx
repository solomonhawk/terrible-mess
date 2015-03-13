import React   from 'react'
import capture from 'capture'
//import palette from 'palette'

let Video = React.createClass({

  propTypes: {
    stream: React.PropTypes.any.isRequired
  },

  capturePicture() {
    console.log(palette(this.getDOMNode()))
  },

  render() {
    return <video src={ window.URL.createObjectURL(this.props.stream) }
                  onClick={ this.capturePicture }
                  autoPlay/>
  }

})

export default Video
