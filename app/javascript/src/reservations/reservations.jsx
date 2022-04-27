// bookings.jsx
import React from 'react';
import Layout from '@src/layout';
import { safeCredentials, handleErrors } from '@utils/fetchHelper';

import './reservations.scss';

class Reservations extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     propertyBookings: [],
  //   }
  // }

  // componentDidMount() {
  //   this.getPropertyReservations()
  // }

  // getPropertyReservations() {

  //   fetch(`/api/properties/${this.props.data.booking_id}/bookings`)
  //     .then(handleErrors)
  //     .then(data => {
  //       console.log('data', data)
  //       this.setState({
  //         propertyBookings: data.bookings,
  //       })
  //     })
  // }
  

  render () {
    // const {propertyBookings} = this.state

    return (
      <Layout>
        <div className="container py-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
              <h4 className="mb-0">All reservations</h4>
              
          </div>

          <div className="reservations-header-row p-4 mb-1">
            <div className="row no-gutters d-flex justify-content-between align-items-center text-center">

                  <div className="col-2">
                  <p className="mb-2">Property image</p>
                  </div>

                 
                  <div className="col-2">
                  <p className="mb-2">Title</p>
                  </div>
                  <div className="col-1">
                      <p className="mb-2">Property id</p>
                  </div>


                  <div className="col-1">
                  <p className="mb-2">Start date</p>
                  </div>
                  
                  <div className="col-1">
                  <p className="mb-2">End date</p>
                  </div>

                  <div className="col-1">
                    <p className="mb-2">Booked by</p>
                  </div>

                  <div className="col-1">
                    <p className="mb-2">Payment status</p>
                  </div>

                  <div className="col-2">
                    <p className="mb-2"></p>
                  </div>

                </div>
          </div>

        </div>
      </Layout>
    );

  }
}

export default Reservations