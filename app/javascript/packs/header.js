import React, { Component } from 'react'
import V_logo_h_cruises_2x from'./images/V_logo_h_cruises_2x.png'
// import 'bootstrap/dist/css/bootstrap.css'
// import { Col } from 'react-bootstrap'

class Header extends React.Component {


  render () {
    //var image_path = require()
    return (
      <div className='trd-tablet-header-base'>
        <div className='header-base'>
          <div className='trd-header-logo'>
            <img src={V_logo_h_cruises_2x} width="236" />
          </div>
        </div>

        <div className='center'>
          <div className='title cruise-hdr-details'>
            Luggage Tracker
          </div>
        </div>
      </div>

    )
  }
}

export default Header
