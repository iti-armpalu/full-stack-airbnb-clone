import React from 'react'
import ReactDOM from 'react-dom'
import Reservations from './reservations'

document.addEventListener('DOMContentLoaded', () => {

  ReactDOM.render(
    <Reservations  />,
    document.body.appendChild(document.createElement('div')),
  )
})