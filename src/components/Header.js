import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <header id="banner">
        <div className="bg-image"></div>
        <div className="bg-image2"></div>
        <div className="content-wrap">
          <h1><span className="bold big">FLIPSIDE <span className="ai">AI</span></span></h1>
          <p><span className="nanum">Fully-managed Human-powered Training Data Refinery</span></p>
        </div>
      </header>
    )
  }
}

export default Header
