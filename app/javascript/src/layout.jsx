// layout.js
import React from 'react';
import { handleErrors } from '@utils/fetchHelper';

// Importing FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faChevronDown, faCircle } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

import './home.scss';

class Layout extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {
      authenticated: false,
      username: '',
      showHostingMenu: true,
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
    const inputEl = document.querySelector('.btn-hosting-menu')
    if (!this.state.showHostingMenu) {
      inputEl.classList.add('dropdown')
    } else {
      // inputEl.classList.remove('dropdown')
    }
    this.setState({ showHostingMenu: !this.state.showHostingMenu })
  }

  render () {
    const { authenticated, username } = this.state;

    return (
      <React.Fragment>

      {/* Navigation bar */}
      <div className="container">
      <nav className="navbar navbar-expand d-flex justify-content-between" id="navbar">

          {(authenticated)
            ? 
                // <div className="d-flex justify-content-between w-100" id="mdNavbar">
                  <>
      
              <a className="navbar-brand text-danger" href="/">
                {/* <img src="./images/airbnb-logo.png" width="35" className="d-inline-block align-center" alt=""> */}
                <b>airbnb</b>
              </a><ul className="navbar-nav">
                <li className="nav-item mx-2"><a className="nav-link text-dark" href="/login">My trips</a></li>
                <li className="nav-item mx-2 btn-hosting-menu" onFocus={this.showHostingMenuFunc} onBlur={this.showHostingMenuFunc}><a className="nav-link text-dark" href="#">Hosting
                <span className="ml-2"> <FontAwesomeIcon icon={faChevronDown} /></span></a></li>

                {(this.state.showHostingMenu)
                  ? (<div class="hosting-menu">
                  <ul class="list-unstyled">
                    <li><a href="#">Properties</a></li>
                    <li><a href="#">Reservations</a></li>
                    <li><a href="#">Add a new property</a></li>
                    <div className="divider"></div>
                    <li><a href="#">Guidebooks</a></li>
                    <li><a href="#">Transaction history</a></li>
                    <li><a href="#">Explore hosting resources</a></li>
                    <li><a href="#">Visit our community forum</a></li>
                    
                  </ul>
                </div>)
                  : (<div></div>)
        }

              </ul><div>
                <span className="nav-user p-2">Hello, {username}</span>
                <span className="fa-layers fa-fw fa-2x">
                  <FontAwesomeIcon icon={faCircle} className="circle-grey" />
                  <FontAwesomeIcon icon={faUser} transform="shrink-4" />
                </span>
              </div></>
            
            
              
            : 
                <div className="d-none d-md-flex flex-grow-1" id="mdNavbar">
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
      <div className="row no-gutters pt-5 pt-xl-5">
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