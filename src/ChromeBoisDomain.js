import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    drawChromeBoiAtCoords(event.clientX, event.clientY)
  }

  handleClick = () => {
    toggleCycling()
  }

  handleKeyPress = (event) => {
    let arg = null
    event.key === 'a' ? arg = '+' : null
    event.key === 's' ? arg = '-' : null
    event.key ? resize(arg) : null
  }
  
  render() {
    return (
      <canvas
        onClick={this.handleClick}
        onKeyPress={this.handleKeyPress}
        onMouseMove={this.handleMouseMove}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
