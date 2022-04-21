// layout.js
import React from 'react';
import { safeCredentials, handleErrors } from '@utils/fetchHelper';

// Importing FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAirbnb, faTwitter, faInstagram, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faChevronDown, faCircle } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

import './home.scss';

class Layout extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {
      authenticated: false,
      username: '',
      showHostingMenu: false,
    }
  }

  componentDidMount() {
    fetch('/api/authenticated')
      .then(handleErrors)
      .then(data => {
        // console.log(data)
        this.setState({
          authenticated: data.authenticated,
          username: data.username,
        })
      })
  }

  showHostingMenuFunc = () => {
    // const inputEl = document.querySelector('.btn-hosting-menu')
    // if (!this.state.showHostingMenu) {
    //   inputEl.classList.add('dropdown')
    // } else {
    //   inputEl.classList.remove('dropdown')
    // }
    this.setState({ showHostingMenu: !this.state.showHostingMenu })
  }

  logout = (e) => {
    e.preventDefault();

    fetch('/api/sessions', safeCredentials({
      method: 'DELETE',
    }))
      .then(handleErrors)
      .then(data => {
        // console.log('data', data)
        if (data.success) {
          this.setState({
            authenticated: false,
          })
          const params = new URLSearchParams(window.location.search);
          const redirect_url = params.get('redirect_url') || '/';
          window.location = redirect_url;
        }
      })
      .catch(error => {
        this.setState({
          error: 'Could not sign out.',
        })
      })
  }

  render () {
    const { authenticated, username, showHostingMenu } = this.state;

    return (
      <React.Fragment>
        <div className="container">
          <nav className="navbar navbar-expand d-flex justify-content-between" id="navbar">

            {(authenticated)
              ? <>
                <a className="navbar-brand text-danger" href="/">
                  <FontAwesomeIcon icon={faAirbnb} size="lg"/>
                  <b className="pl-2" >airbnb</b>
                </a>
                <div>
                  <a className="btn btn-my-bookings p-2 mx-2" role="button" href="/bookings">My bookings</a>
                  <button type="submit" className="btn btn-hosting-menu p-2 mx-2" onClick={this.showHostingMenuFunc}>Hosting<span className="ml-2"> <FontAwesomeIcon icon={faChevronDown} /></span>
                  
                  {(showHostingMenu)
                    ? (<div className="hosting-menu">
                        <ul className="list-unstyled">
                          <li><a href="/listings">Properties</a></li>
                          <li><a href="#">Reservations</a></li>
                          <li><a href="/add-property">Add a new property</a></li>
                          <div className="divider"></div>
                          <li><a href="#">Guidebooks</a></li>
                          <li><a href="#">Transaction history</a></li>
                          <li><a href="#">Explore hosting resources</a></li>
                          <li><a href="#">Visit our community forum</a></li>
                        </ul>
                      </div>)
                    : (<div></div>)
                  }
                  </button>
                </div>
            
                <button type="submit" className="btn btn-outline-danger btn-logout" onClick={this.logout}>Log out @{username}</button>
                </>
              
              
                
              : <div className="d-none d-md-flex flex-grow-1" id="mdNavbar">
                  <a className="navbar-brand text-danger" href="/">
                    {/* <img src="./images/airbnb-logo.png" width="35" className="d-inline-block align-center" alt=""> */}
                    <b>airbnb</b>
                  </a> 
                  <ul className="navbar-nav ml-auto align-items-center">
                    <li className="nav-item pl-4"><a className="nav-link text-dark" href="/login">Login</a></li>
                  </ul>
                </div>
            }
          </nav>
        </div>

        <div className="content">
          {this.props.children}
        </div>
      
        {/* Footer */}
        <footer className="container-fluid">
        <div className="row no-gutters mt-5 pt-5 pt-xl-5">
          <div className="col-12 col-xl-3 footerColumn_wrap">
            <h5 className="footerColumn_title my-0"><b>Support</b></h5>
            <ul className="footerColumn list-unstyled d-md-flex flex-wrap d-xl-block">
              <li className="mt-3"><a href="#" className="text-dark my-0">Help Center</a></li>
              <li className="mt-3"><a href="#" className="text-dark">Safety information</a></li>
              <li className="mt-3"><a href="#" className="text-dark">Cancellation options</a></li>
              <li className="mt-3"><a href="#" className="text-dark">Our COVID-19 Response</a></li>
              <li className="mt-3"><a href="#" className="text-dark">Supporting people with disabilities</a></li>
              <li className="mt-3"><a href="#" className="text-dark">Report a neighborhood concern</a></li>
            </ul>
          </div>
          <div className="col-12 col-xl-3 footerColumn_wrap">
            <h5 className="footerColumn_title my-0"><b>Community</b></h5>
            <ul className="footerColumn list-unstyled d-md-flex flex-wrap d-xl-block">
              <li className="mt-3"><a href="#" className="text-dark">Airbnb.org: disaster relief housing</a></li>
              <li className="mt-3"><a href="#" className="text-dark">Support Afghan refugees</a></li>
              <li className="mt-3"><a href="#" className="text-dark">Combating discrimination</a></li>
            </ul>
          </div>
          <div className="col-12 col-xl-3 footerColumn_wrap">
            <h5 className="footerColumn_title my-0"><b>Hosting</b></h5>
            <ul className="footerColumn list-unstyled d-md-flex flex-wrap d-xl-block">
              <li className="mt-3"><a href="#" className="text-dark">Try hosting</a></li>
              <li className="mt-3"><a href="#" className="text-dark">AirCover: protection for Hosts</a></li>
              <li className="mt-3"><a href="#" className="text-dark">Explore hosting resources</a></li>
              <li className="mt-3"><a href="#" className="text-dark">Visit our community forum</a></li>
              <li className="mt-3"><a href="#" className="text-dark">How to host responsibly</a></li>
            </ul>
          </div>
          <div className="col-12 col-xl-3 footerColumn_wrap">
            <h5 className="footerColumn_title my-0"><b>About</b></h5>
            <ul className="footerColumn list-unstyled d-md-flex flex-wrap d-xl-block">
              <li className="mt-3"><a href="#" className="text-dark">Newsroom</a></li>
              <li className="mt-3"><a href="#" className="text-dark">Learn about new features</a></li>
              <li className="mt-3"><a href="#" className="text-dark">Letter from our founders</a></li>
              <li className="mt-3"><a href="#" className="text-dark">Careers</a></li>
              <li className="mt-3"><a href="#" className="text-dark">Investors</a></li>
              <li className="mt-3"><a href="#" className="text-dark">Airbnb Luxe</a></li>
            </ul>
          </div>
        </div>

        <div className="row no-gutters justify-content-between py-4 footerBar">
          <div className="col-12 col-xl-auto order-2 order-xl-1">
              <div className="d-xl-flex text-left text-md-center">
                <span className="d-block">© 2022 Airbnb, Inc. All rights reserved</span>
                <ul className="list-unstyled d-inline-flex align-items-center p-0 m-0">
                  <li><span className="d-none d-xl-inline px-2"> · </span><a href="#" className="text-dark">Privacy</a></li>
                  <li><span className="px-2"> · </span><a href="#" className="text-dark">Terms</a></li>
                  <li><span className="px-2"> · </span><a href="#" className="text-dark">Sitemap</a></li>
                </ul>
              </div>
          </div>
          <div className="col-12 col-xl-auto order-1 order-xl-2">
            <div className="text-left text-md-center">
              <a href="#" className="text-body"><FontAwesomeIcon icon={faTwitter} size="lg" className="ml-2" /></a>
              <a href="#" className="text-body"><FontAwesomeIcon icon={faInstagram} size="lg" className="ml-2" /></a>
              <a href="#" className="text-body"><FontAwesomeIcon icon={faLinkedin} size="lg" className="ml-2" /></a>
              <a href="#" className="text-body"><FontAwesomeIcon icon={faFacebook} size="lg" className="ml-2" /></a>
            </div>
          </div>
        </div>

        </footer>
      </React.Fragment>
    );
  }
}

export default Layout;