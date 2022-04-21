// bookings.jsx
import React from 'react';
import Layout from '@src/layout';
import { safeCredentialsFormData, handleErrors } from '@utils/fetchHelper';
import './add_property.scss';

class EditProperty extends React.Component {
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
      selectedFile: null,
      error: '',
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

    if (this.state.selectedFile !== null) {
      formData.append('property[image]', this.state.selectedFile, this.state.selectedFile.name);
    }

    console.log("Success")

    fetch('/api/properties', safeCredentialsFormData({
      method: 'POST',
      body: formData,
    }))
      .then(handleErrors)
      .then(data => {
        console.log('data', data)
        const params = new URLSearchParams(window.location.search)
        const redirect_url = params.get('redirect_url') || '/listings'
        window.location = redirect_url
      })
      .catch(error => {
        this.setState({
          error: 'Could not post a tweet.',
        })
      })
  }

  // --- Property form for submitting a new property  ---
  render () {
    const { title, description, city, country, property_type, max_guests, bedrooms, beds, baths, price_per_night, selectedFile, error } = this.state;

    return (
      <Layout>
        <div className="container py-4">
          <h4 className="mb-1">Add a new property</h4>
        </div>
      </Layout>
    );

  }
}

export default EditProperty