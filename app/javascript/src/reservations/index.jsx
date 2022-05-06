import React from 'react'
import ReactDOM from 'react-dom'
import Reservations from './reservations'

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('params');
  const data = JSON.parse(node.getAttribute('data-params'));


  ReactDOM.render(
    <Reservations data={data}  />,
    document.body.appendChild(document.createElement('div')),
  )
})