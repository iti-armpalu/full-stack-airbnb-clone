// property_reservations.jsx
import React from 'react';
import Layout from '@src/layout';
import { safeCredentials, handleErrors } from '@utils/fetchHelper';

// Importing FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

// Importing stylesheet
import './property_reservations.scss';

class PropertyReservations extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      propertyBookings: [],
    }
  }

  componentDidMount() {
    this.getPropertyReservations()
  }

  getPropertyReservations() {
    fetch(`/api/properties/${this.props.data.booking_id}/bookings`)
      .then(handleErrors)
      .then(data => {
        console.log('data', data)
        this.setState({
          propertyBookings: data.bookings,
        })
      })
  }
  
  render () {
    const {propertyBookings} = this.state

    return (
      <Layout>
        <div className="container py-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h4 className="mb-0">Property reservations</h4>
            <a className="btn btn-my-bookings p-2 mx-2" role="button" href="/reservations"><FontAwesomeIcon icon={ faCalendarDays } className="mr-2" />View all reservations</a>
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
              
          {propertyBookings.map(booking => {
            return (
              <div key={booking.id} id={booking.id} className="reservations-wrap p-4 mb-3">
                <div className="row no-gutters d-flex justify-content-between align-items-center text-center">
                  <div className="col-2">
                    <div className="property-image rounded" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2053&q=80)` }} ></div>
                  </div>
                  <div className="col-2">
                    <p className="mb-2">{booking.title}</p>
                  </div>
                  <div className="col-1">
                    <p className="mb-2">{booking.property_id}</p>
                  </div>
                  <div className="col-1">
                    <p className="mb-2">{booking.start_date}</p>
                  </div>
                  <div className="col-1">
                    <p className="mb-2">{booking.end_date}</p>
                  </div>
                  <div className="col-1">
                    <p className="mb-2">Iti</p>
                  </div>
                  <div className="col-1">
                    <p className="mb-2">Pending</p>
                  </div>
                  <div className="col-2 d-inline-flex justify-content-center">
                    <button type="button" className="btn btn-danger btn-sm">Message guest</button>
                  </div>
                </div>
              </div>
            )
          })}

        </div>
      </Layout>
    );
  }
}

export default PropertyReservations