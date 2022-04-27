// bookings.jsx
import React from 'react';
import Layout from '@src/layout';
import { safeCredentials, handleErrors } from '@utils/fetchHelper';
import './bookings.scss';

class Bookings extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userBookings: [],
    }
  }

  componentDidMount() {
    this.getAllUserBookings()
  }

  getAllUserBookings() {
    const username = this.props.username;
    console.log(username)

    fetch(`/api/users/iti100/bookings`)
      .then(handleErrors)
      .then(data => {
        console.log('data', data)
        this.setState({
          userBookings: data.bookings,
        })
      })
  }

  initiateStripeCheckout = (e) => {
    e.preventDefault();

    console.log("Hello")

    return fetch(`/api/charges?booking_id=24&cancel_url=${window.location.pathname}`, safeCredentials({
      method: 'POST',
    }))
      .then(handleErrors)
      .then(response => {
        const stripe = Stripe(`${process.env.STRIPE_PUBLISHABLE_KEY}`);
        stripe.redirectToCheckout({
          // Make the id field from the Checkout Session creation API response
          // available to this file, so you can provide it as parameter here
          // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
          sessionId: response.charge.checkout_session_id,
        }).then((result) => {
          // If `redirectToCheckout` fails due to a browser or network
          // error, display the localized error message to your customer
          // using `result.error.message`.
        });
      })
      .catch(error => {
        console.log(error);
      })
  }

  render () {
    const { userBookings } = this.state;

    return (
      <Layout>
        <div className="container py-4">
          <h4 className="mb-4">My bookings</h4>

          {userBookings.map(booking => {
            return (
              <div key={booking.id} id={booking.id} className="bookings-wrap p-4 mb-3">
                <div className="row d-flex">
                  <div className="col-3">
                    <div className="property-image" style={{ backgroundImage: `url(${booking.image_url})` }} />
                    </div>
                  <div className="col-5">
                    <div className="row d-flex flex-column px-3">
                      <p className="mb-1 text-secondary">{booking.city}</p>
                      <h6 className="mb-1">{booking.title}</h6>
                      <p className="mb-1 text-secondary">Hosted by {booking.username}</p>
                      <p className="mb-1 text-secondary">{booking.start_date} - {booking.end_date}</p>
                    </div>
                    
                  </div>
                  <div className="col-4">
                    <div className="row d-flex flex-column px-3">
                      <div className="d-flex justify-content-between">
                        <p className="mb-1"><b>Total (USD)</b></p>
                        <p className="mb-1"><b>$5.00</b></p>
                      </div>
                      
                      {/* If user has paid for the booking, show "paid", if not, show "pending" and guide thhe user to the payment page */}
                      {(true)
                      ? <><div className="d-flex justify-content-between">
                        <p className="mb-1">Payment status</p>
                        <p className="mb-1 text-danger">Pending</p>
                      </div>
                        <button type="submit" className="btn btn-danger mt-3" onClick={this.initiateStripeCheckout}>Proceed to checkout</button></>

                      : <div className="d-flex justify-content-between">
                          <p className="mb-1">Payment status</p>
                          <p className="mb-1 text-success">Paid</p>
                        </div>

                      }

                    </div>
                  
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

export default Bookings