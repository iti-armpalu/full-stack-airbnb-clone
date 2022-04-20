import React from 'react'
import ReactDOM from 'react-dom'
import Bookings from './bookings'

document.addEventListener('DOMContentLoaded', () => {

  ReactDOM.render(
    <Bookings />,
    document.body.appendChild(document.createElement('div')),
  )
})