// bookings.jsx
import React from 'react';
import Layout from '@src/layout';
import { handleErrors } from '@utils/fetchHelper';
import './add_property.scss';

class AddProperty extends React.Component {

  render () {

    return (
      <Layout>
        <div className="container py-4">
          <h4 className="mb-4">Add a new property</h4>
          <form className="py-3 form-property">

            <div className="row g-3 align-items-center py-2">
              <div className="col-4">
                <h6>Let's give your place a name</h6>
              </div>
              <div className="col-3">
                <label for="propertyTitle" className="col-form-label">Create your title</label>
              </div>
              <div className="col-auto">
                <input type="text" id="propertyTitle" className="form-control" />
              </div>
            </div>

            <div className="row g-3 align-items-center py-2">
              <div className="col-4">
              <h6>Let's describe your place</h6>
              </div>
              <div className="col-3">
                <label for="propertyDescription" className="col-form-label">Create your description</label>
              </div>
              <div className="col-auto">
                <textarea name="description" id="propertyDescription" cols="19" rows="3" className="form-control" aria-describedby="descriptionHelpInline" ></textarea>
              </div>
            </div>

            <div className="divider my-3"></div>

            <div className="row g-3 align-items-center py-2">
              <div className="col-4">
                <h6>Where's your place located?</h6>
              </div>
              <div className="col-3">
                <label for="propertyCity" className="col-form-label">City</label>
              </div>
              <div className="col-auto">
                <input type="text" id="propertyCity" className="form-control" aria-describedby="cityHelpInline" />
              </div>
            </div>

            <div className="row g-3 align-items-center py-2">
              <div className="col-4">
              </div>
              <div className="col-3">
                <label for="propertyCountry" className="col-form-label">Country</label>
              </div>
              <div className="col-auto">
                <input type="text" id="propertyCountry" className="form-control" aria-describedby="countryHelpInline" />
              </div>
            </div>

            <div className="divider my-3"></div>
           

            <div className="row g-3 align-items-center py-2">
              <div className="col-4">
                <h6>What kind of space will guests have?</h6>
              </div>
              <div className="col-3">
                <label for="propertyType" className="col-form-label">Property type</label>
              </div>
              <div className="col-auto">
                <input type="text" id="propertyType" className="form-control" aria-describedby="typeHelpInline" />
              </div>
            </div>

            <div className="divider my-3"></div>
           

            <div className="row g-3 align-items-center py-3">
              <div className="col-4">
                <h6>How many guests would you like to welcome?</h6>
              </div>
              <div className="col-3">
                <label for="propertyMaxGuest" className="col-form-label">Max guests</label>
              </div>
              <div className="col-auto">
                <input type="number" id="propertyMaxGuests" className="form-control" aria-describedby="maxGuestsHelpInline" />
              </div>
            </div>

            <div class="row g-3 align-items-center py-2">
            <div className="col-4">
              </div>
              <div class="col-3">
                <label for="propertyBedrooms" class="col-form-label">Bedrooms</label>
              </div>
              <div class="col-auto">
                <input type="number" id="propertyBedrooms" className="form-control" aria-describedby="bedroomsHelpInline" />
              </div>
            </div>

            <div className="row g-3 align-items-center py-2">
            <div className="col-4">
              </div>
              <div className="col-3">
                <label for="propertyBeds" className="col-form-label">Beds</label>
              </div>
              <div className="col-auto">
                <input type="number" id="propertyBeds" className="form-control" aria-describedby="bedsHelpInline" />
              </div>
            </div>

            <div className="row g-3 align-items-center py-2">
            <div className="col-4">
              </div>
              <div className="col-3">
                <label for="propertyBathrooms" className="col-form-label">Bathrooms</label>
              </div>
              <div className="col-auto">
                <input type="number" id="propertyBathrooms" className="form-control" aria-describedby="bathroomsHelpInline" />
              </div>
            </div>

            <div className="divider my-3"></div>

            <div className="row g-3 align-items-center py-2">
              <div className="col-4">
                <h6>Now for the fun part—set your price</h6>
              </div>
              <div className="col-3">
                <label for="propertyPricePerNight" className="col-form-label">Price per night (USD)</label>
              </div>
              <div className="col-auto">
                <input type="number" id="propertyPricePerNight" className="form-control" aria-describedby="PricePerNightHelpInline" />
              </div>
            </div>

            <div className="divider my-3"></div>

            <div className="row g-3 align-items-center py-2">
              <div className="col-4">
              <h6>Let's add some photos of your place</h6>
              </div>
              <div className="col-3">
                <label for="propertyImage" className="col-form-label">Upload photos</label>
              </div>
              <div className="col-auto">
                <input className="form-control" id="propertyImage" type="file" name="selectedFile" onChange={this.onFileChange} />
              </div>
            </div>

          
              <div className="my-5">
                < button type="submit" className="btn btn-add-property"><b>Submit</b></button>
              </div>
              
          </form>
        </div>
      </Layout>
    );

  }
}

export default AddProperty