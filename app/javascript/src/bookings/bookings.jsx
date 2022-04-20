// bookings.jsx
import React from 'react';
import Layout from '@src/layout';
import { handleErrors } from '@utils/fetchHelper';
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
                        <a className="btn btn-danger mt-3" href="#" role="button">Proceed to checkout</a></>

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