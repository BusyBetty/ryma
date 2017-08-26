import React, { Component } from 'react'
import QrReader from 'react-qr-reader'

class LegacyModeExample extends Component {
  constructor (props) {
    super(props)
    this.state = {
      delay: 100,
      result: 'No result'
    }

    this.handleScan = this.handleScan.bind(this)
    this.openImageDialog = this.openImageDialog.bind(this)
  }
  handleScan (result) {
    if (result) {
      this.setState({ result })
    }
  }
  handleError (err) {
    console.error(err)
  }
  openImageDialog () {
    this.refs.qrReader.openImageDialog()
  }

  render () {
    const previewStyle = {
      height: 240,
      width: 320
    }

    return (
      <div>
                  <p className="header-subtitle">We would like to notify you when your bags arrive in your state room.</p>
    
        <QrReader
          ref='qrReader'
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          legacyMode
        />
        
        <input type='button' value='Submit QR Code' onClick={this.openImageDialog} />
        <p>{this.state.result}</p>
      </div>
    )
  }
}

export default LegacyModeExample
