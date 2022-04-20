import React from 'react'
import ReactDOM from 'react-dom'
import Listings from './listings'

document.addEventListener('DOMContentLoaded', () => {

  ReactDOM.render(
    <Listings />,
    document.body.appendChild(document.createElement('div')),
  )
})