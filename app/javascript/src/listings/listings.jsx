// listings.jsx
import React from 'react';
import Layout from '@src/layout';
import { safeCredentials, handleErrors } from '@utils/fetchHelper';

// Importing FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

// Importing stylesheet
import './listings.scss';

class Listings extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userProperties: [],
    }
  }

  componentDidMount() {
    this.getAllUserProperties()
  }

  getAllUserProperties() {
    const username = this.props.data.username;
    console.log(username)

    fetch(`/api/users/${username}/properties`)
      .then(handleErrors)
      .then(data => {
        console.log('data', data)
        this.setState({
          userProperties: data.properties,
        })
      })
  }

  deleteProperty = (e) => {
    e.preventDefault();
    let propertyEl = e.target.closest(".listings-wrap")
    let propertyId = propertyEl.getAttribute('id')

    fetch(`/api/properties/${propertyId}`, safeCredentials({
      method: 'DELETE',
    }))
      .then(handleErrors)
      .then(data => {
        if (data.success) {
          this.getAllUserProperties()
        }
      })
      .catch(error => {
        this.setState({
          error: 'Could not delete property.',
        })
      })
  }

  render () {
    const { userProperties } = this.state;

    return (
      <Layout>
        <div className="container py-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h4 className="mb-0">My listings</h4>
            <a className="btn btn-my-bookings p-2 mx-2" role="button" href={`/${this.props.data.username}/add-property`}><FontAwesomeIcon icon={ faPlus } className="mr-2" />Add a new property</a>
          </div>
          {(userProperties.length != 0)
          
          ?
          <div>
            {userProperties.map(property => {
              return (
                <div key={property.id} id={property.id} className="listings-wrap p-4 mb-3">
                  <div className="row d-flex">
                    <div className="col-4">
                      <div className="property-image rounded" style={{ backgroundImage: `url(${property.image})` }} />
                      </div>
                    <div className="col-8">
                      <div className="row d-flex flex-column px-3">
                        <h5 className="mb-2">{property.title}</h5>
                        <div className="d-flex">
                          <p className="mb-0 pr-1 text-secondary">{property.property_type} in</p>
                          <p className="mb-0 pr-1 text-secondary">{property.city},</p>
                          <p className="mb-0 pr-1 text-secondary">{property.country}</p>
                        </div>
                        <div className="d-flex mb-2">
                          <p className="mb-0 text-secondary">{property.max_guests} guests</p>
                          <p className="mb-0 text-secondary"><span className="px-2">·</span>{property.bedrooms} bedrooms</p>
                          <p className="mb-0 text-secondary"><span className="px-2">·</span>{property.beds} beds</p>
                          <p className="mb-0 text-secondary"><span className="px-2">·</span>{property.baths} baths</p>
                        </div>
                        <p className="description-short mb-2 text-secondary">{property.description}</p>
                        <div className="d-flex mb-2">
                          <p className="mb-0 text-secondary">$ {property.price_per_night} per night</p>
                        </div>
                        <div className="d-flex">
                          <a className="btn btn-danger btn-sm btn-edit mr-2 mt-2" role="button" href={`/property/${property.id}/edit-property`}>Edit property</a>
                          <a className="btn btn-danger btn-sm btn-edit mr-2 mt-2" role="button" href={`/property/${property.id}/reservations`}>View property reservations</a>
                          <button type="submit" className="btn btn-danger btn-sm btn-delete ml-auto mr-2 mt-2" onClick={this.deleteProperty}>Delete property</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          :
          <div className="border border-secondary rounded text-center">
            <p className="py-4 mb-0">You don't have any active listings at the moment.</p>
          </div>
          }
        </div>
      </Layout>
    );
  }
}

export default Listings