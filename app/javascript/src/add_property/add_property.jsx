// add_property.jsx
import React from 'react';
import Layout from '@src/layout';
import { safeCredentialsFormData, handleErrors } from '@utils/fetchHelper';

// Importing stylesheet
import './add_property.scss';

class AddProperty extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      city: '',
      country: '',
      property_type: '',
      max_guests: '',
      bedrooms: '',
      beds: '',
      baths: '',
      price_per_night: '',
      image: null,
      error: '',
      username: '',
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  // On file select (from the pop up)
  onFileChange = (e) => {
    this.setState({ 
      [e.target.name]: e.target.files[0],
    });
  };

  submitProperty = (e) => {
    e.preventDefault();

    // Create an object of formData
    let formData = new FormData();
    formData.append('property[title]', this.state.title)
    formData.append('property[description]', this.state.description)
    formData.append('property[city]', this.state.city)
    formData.append('property[country]', this.state.country)
    formData.append('property[property_type]', this.state.property_type)
    formData.append('property[max_guests]', this.state.max_guests)
    formData.append('property[bedrooms]', this.state.bedrooms)
    formData.append('property[beds]', this.state.beds)
    formData.append('property[baths]', this.state.baths)
    formData.append('property[price_per_night]', this.state.price_per_night)

    if (this.state.image !== null) {
      formData.append('property[image]', this.state.image, this.state.image.name);
    }

    fetch('/api/properties', safeCredentialsFormData({
      method: 'POST',
      body: formData,
    }))
      .then(handleErrors)
      .then(data => {
        console.log('data', data)
        this.setState({
          username: data.property.user.username,
        })

        const params = new URLSearchParams(window.location.search)
        const redirect_url = params.get('redirect_url') || `/${this.state.username}/listings`
        window.location = redirect_url
      })
      .catch(error => {
        this.setState({
          error: 'Could not post a property.',
        })
      })
  }

  // --- Property form for submitting a new property  ---
  render () {
    const { title, description, city, country, property_type, max_guests, bedrooms, beds, baths, price_per_night, image, error } = this.state;

    return (
      <Layout>
        <div className="container py-4">
          <h4 className="mb-1">Add a new property</h4>
          <p className="mb-4 text-secondary">Please fill in all the fields</p>
          <form className="py-3 form-property" onSubmit={this.submitProperty}>
            <div className="row g-3 align-items-center py-2">
              <div className="col-4">
                <h6>Let's give your place a name</h6>
              </div>
              <div className="col-3">
                <label htmlFor="propertyTitle" className="col-form-label">Create your title</label>
              </div>
              <div className="col-auto">
                <input type="text" id="propertyTitle" className="form-control" name="title" value={title} onChange={this.handleChange} />
              </div>
            </div>
            <div className="row g-3 align-items-center py-2">
              <div className="col-4">
              <h6>Let's describe your place</h6>
              </div>
              <div className="col-3">
                <label htmlFor="propertyDescription" className="col-form-label">Create your description</label>
              </div>
              <div className="col-auto">
                <textarea id="propertyDescription" cols="19" rows="3" className="form-control"  name="description" value={description} onChange={this.handleChange} ></textarea>
              </div>
            </div>
            <div className="divider my-3"></div>
            <div className="row g-3 align-items-center py-2">
              <div className="col-4">
                <h6>Where's your place located?</h6>
              </div>
              <div className="col-3">
                <label htmlFor="propertyCity" className="col-form-label">City</label>
              </div>
              <div className="col-auto">
                <input type="text" id="propertyCity" className="form-control"  name="city" value={city} onChange={this.handleChange} />
              </div>
            </div>
            <div className="row g-3 align-items-center py-2">
              <div className="col-4">
              </div>
              <div className="col-3">
                <label htmlFor="propertyCountry" className="col-form-label">Country</label>
              </div>
              <div className="col-auto">
                <input type="text" id="propertyCountry" className="form-control"  name="country" value={country} onChange={this.handleChange} />
              </div>
            </div>
            <div className="divider my-3"></div>
            <div className="row g-3 align-items-center py-2">
              <div className="col-4">
                <h6>What kind of space will guests have?</h6>
              </div>
              <div className="col-3">
                <label htmlFor="propertyType" className="col-form-label">Property type</label>
              </div>
              <div className="col-auto">
                <input type="text" id="propertyType" className="form-control" name="property_type" value={property_type} onChange={this.handleChange} />
              </div>
            </div>
            <div className="divider my-3"></div>
            <div className="row g-3 align-items-center py-3">
              <div className="col-4">
                <h6>How many guests would you like to welcome?</h6>
              </div>
              <div className="col-3">
                <label htmlFor="propertyMaxGuest" className="col-form-label">Max guests</label>
              </div>
              <div className="col-auto">
                <input type="number" id="propertyMaxGuests" className="form-control" name="max_guests" value={max_guests} onChange={this.handleChange} />
              </div>
            </div>
            <div className="row g-3 align-items-center py-2">
            <div className="col-4">
              </div>
              <div className="col-3">
                <label htmlFor="propertyBedrooms" className="col-form-label">Bedrooms</label>
              </div>
              <div className="col-auto">
                <input type="number" id="propertyBedrooms" className="form-control" name="bedrooms" value={bedrooms} onChange={this.handleChange} />
              </div>
            </div>
            <div className="row g-3 align-items-center py-2">
            <div className="col-4">
              </div>
              <div className="col-3">
                <label htmlFor="propertyBeds" className="col-form-label">Beds</label>
              </div>
              <div className="col-auto">
                <input type="number" id="propertyBeds" className="form-control" name="beds" value={beds} onChange={this.handleChange} />
              </div>
            </div>
            <div className="row g-3 align-items-center py-2">
            <div className="col-4">
              </div>
              <div className="col-3">
                <label htmlFor="propertyBathrooms" className="col-form-label">Bathrooms</label>
              </div>
              <div className="col-auto">
                <input type="number" id="propertyBaths" className="form-control" name="baths" value={baths} onChange={this.handleChange} />
              </div>
            </div>
            <div className="divider my-3"></div>
            <div className="row g-3 align-items-center py-2">
              <div className="col-4">
                <h6>Now for the fun part—set your price</h6>
              </div>
              <div className="col-3">
                <label htmlFor="propertyPricePerNight" className="col-form-label">Price per night (USD)</label>
              </div>
              <div className="col-auto">
                <input type="number" id="propertyPricePerNight" className="form-control" name="price_per_night" value={price_per_night} onChange={this.handleChange} />
              </div>
            </div>
            <div className="divider my-3"></div>
            <div className="row g-3 align-items-center py-2">
              <div className="col-4">
              <h6>Let's add some photos of your place</h6>
              </div>
              <div className="col-3">
                <label htmlFor="propertyImage" className="col-form-label">Upload photos</label>
              </div>
              <div className="col-auto">
                <input className="form-control" id="propertyImage" type="file" name="image" onChange={this.onFileChange} />
              </div>
            </div>
              <div className="d-flex justify-content-center mx-auto my-5">
                < button type="submit" className="btn btn-add-property w-25" disabled={ !title || !description || !city || !country || !property_type || !price_per_night || !max_guests || !bedrooms || !beds || !baths || !image }><b>Submit a new property</b></button>
                {error && <p className="text-danger mt-2">{error}</p>}
              </div>
          </form>
        </div>
      </Layout>
    );
  }
}

export default AddProperty