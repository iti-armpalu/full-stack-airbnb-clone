import React from 'react'
import ReactDOM from 'react-dom'
import Listings from './listings'

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('params');
  const data = JSON.parse(node.getAttribute('data-params'));

  ReactDOM.render(
    <Listings data={data}/>,
    document.body.appendChild(document.createElement('div')),
  )
})