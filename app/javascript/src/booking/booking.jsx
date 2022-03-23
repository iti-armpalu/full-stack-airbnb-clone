// booking.jsx
import React from 'react';
import Layout from '@src/layout';
import { handleErrors } from '@utils/fetchHelper';
import './booking.scss';

class Booking extends React.Component {
  state = {
    booking: {},
    nights_booked: null,
    subtotal: null,
    service_fee: 5,
    total: null,
    loading: true,
  }

  componentDidMount() {
    const booking_id = this.props.booking_id;
    console.log(booking_id);

    fetch(`/api/bookings/${booking_id}`)

      .then(handleErrors)
      .then(data => {
        console.log('data', data)
        let startDate = new Date(data.booking.start_date);
        let endDate = new Date(data.booking.end_date);
        let dateDifference = Math.abs(endDate - startDate)
        let differenceResult = Math.ceil(dateDifference / (1000 * 60 * 60 * 24))
        this.setState({...this.state, nights_booked: differenceResult})

        const getNightVal = this.state.nights_booked
        const subtotal = data.booking.property.price_per_night * getNightVal
        const serviceFee = this.state.service_fee

        this.setState({
          booking: data.booking,
          nights_booked: getNightVal,
          subtotal: subtotal,
          total: serviceFee + subtotal,
          loading: false
        })

        
      })
  }

  render () {
    const { booking, nights_booked, subtotal, service_fee, total, loading } = this.state;

    if (loading) {
      return <p>loading...</p>;
    };
    
    const {
      id, 
      start_date,
      end_date,
      property,
      user,
    } = booking

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-6 my-4">
            <div className="p-4">
              <h2>You-re all set! Now, start preparing for your trip.</h2>
              <p>You have a confirmed reservation with {property.user.username}. We've emailed your itinerary to {user.email}.</p>
              <div className="my-5">
                <h6>Email your itinerary to anyone</h6>
                <input type="email" className="form-control w-75" placeholder="Email" />
                <div className="mt-4">
                  <button type="submit" className="email-itinerary-btn btn btn-primary mb-3">Submit</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 my-4 p-4">
            <div className="booking-border p-4">
              <div>
                <div className="property-image mb-3" style={{ backgroundImage: `url(${property.image_url})` }} />
                <div className="booking-box">
                  <h6><b>{property.title}</b></h6>
                  <p>{property.property_type} in {property.city}</p>
                </div>
                <div className="booking-box">
                  <p>{property.max_guests} guests</p>
                  <p>{start_date} - {end_date}</p>
                </div>
                <div className="booking-box">
                  <div className="d-flex justify-content-between">
                    <p>${property.price_per_night}.00 x {nights_booked} nights</p>
                    <p><b>${subtotal}.00</b></p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p>Service fee</p>
                    <p><b>${service_fee}.00</b></p>
                  </div>
                </div>
                <div className="booking-box d-flex justify-content-between">
                  <p><b>Total (USD)</b></p>
                  <p><b>${total}.00</b></p>
                </div>
                <div className="my-3">
                  <p><b>Strict with grace period - free cancellation</b></p>
                  <p>Cancel within 48 hours of booking to get a full refund.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
    );

  }
}

export default Booking