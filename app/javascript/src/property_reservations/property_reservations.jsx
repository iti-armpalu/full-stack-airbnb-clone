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
            <a className="btn btn-my-bookings p-2 mx-2" role="button" href={`/iti100/reservations`}><FontAwesomeIcon icon={ faCalendarDays } className="mr-2" />View all reservations</a>
          </div>

          {(propertyBookings.length != 0)

          ?
          <div>
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
                      <div className="property-image rounded" style={{ backgroundImage: `url(${booking.property.image})` }} ></div>
                    </div>
                    <div className="col-2">
                      <p className="mb-2">{booking.property.title}</p>
                    </div>
                    <div className="col-1">
                      <p className="mb-2">{booking.property.id}</p>
                    </div>
                    <div className="col-1">
                      <p className="mb-2">{booking.start_date}</p>
                    </div>
                    <div className="col-1">
                      <p className="mb-2">{booking.end_date}</p>
                    </div>
                    <div className="col-1">
                      <p className="mb-2">{booking.user.username}</p>
                    </div>

                    {/* If user has paid for the booking, show "paid", if not, show "pending" */}
                    {(booking.is_paid)

                    ? <div className="col-1">
                        <p className="mb-2 text-success">Paid</p>
                      </div>

                    : <div className="col-1">
                        <p className="mb-2 text-danger">Pending</p>
                      </div>
                    }


                    
                    <div className="col-2 d-inline-flex justify-content-center">
                      <button type="button" className="btn btn-danger btn-sm">Message guest</button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          :
          <div className="border border-secondary rounded text-center">
            <p className="py-4 mb-0">Your property doesn't have any active reservations at the moment.</p>
          </div>
          }
        </div>
      </Layout>
    );
  }
}

export default PropertyReservations