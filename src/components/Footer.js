import React from 'react';
import { CDBBox, CDBBtn, CDBIcon } from 'cdbreact';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Footer = () => {
  return (
    <CDBBox className="shadow">
      <div className="container">
        <div className="row py-5">
          <div className="col-md-6 col-lg-3">
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <img alt="logo" src="logo" width="30px" />
              <span className="ms-3 h5 font-weight-bold">Devwares</span>
            </a>
            <p className="my-3" style={{ maxWidth: '250px' }}>
              We are creating High Quality Resources and tools to Aid developers during the
              development of their projects
            </p>
            <div className="d-flex mt-4">
              <CDBBtn flat color="dark">
                <CDBIcon fab icon="facebook-f" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="mx-3">
                <CDBIcon fab icon="twitter" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="p-2">
                <CDBIcon fab icon="instagram" />
              </CDBBtn>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>Devwares</p>
            <div className="d-flex flex-column" style={{ cursor: 'pointer' }}>
              <a href="/">Resources</a>
              <a href="/">About Us</a>
              <a href="/">Contact</a>
              <a href="/">Blog</a>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>Help</p>
            <div className="d-flex flex-column" style={{ cursor: 'pointer' }}>
              <a href="/">Support</a>
              <a href="/">Sign Up</a>
              <a href="/">Sign In</a>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>Products</p>
            <div className="d-flex flex-column" style={{ cursor: 'pointer' }}>
              <a href="/">Windframe</a>
              <a href="/">Loop</a>
              <a href="/">Contrast</a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <small className="text-center">&copy; Devwares, 2020. All rights reserved.</small>
          </div>
        </div>
      </div>
    </CDBBox>
  );
};
