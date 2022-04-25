import React from 'react'
import ReactDOM from 'react-dom'
import PropertyReservations from './property_reservations'

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('params');
  const data = JSON.parse(node.getAttribute('data-params'));

  ReactDOM.render(
    <PropertyReservations data={data} />,
    document.body.appendChild(document.createElement('div')),
  )
})