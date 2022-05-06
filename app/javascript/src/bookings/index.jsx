import React from 'react'
import ReactDOM from 'react-dom'
import Bookings from './bookings'

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('params');
  const data = JSON.parse(node.getAttribute('data-params'));

  ReactDOM.render(
    <Bookings data={data} />,
    document.body.appendChild(document.createElement('div')),
  )
})