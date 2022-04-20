// bookings.jsx
import React from 'react';
import Layout from '@src/layout';
import { handleErrors } from '@utils/fetchHelper';
import './listings.scss';

class Listings extends React.Component {
  

  render () {


    return (
      <Layout>
        <div className="container py-4">
          <h4 className="mb-4">My listings</h4>
        </div>
      </Layout>
    );

  }
}

export default Listings