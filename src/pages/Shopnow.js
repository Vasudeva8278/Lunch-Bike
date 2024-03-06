import React from 'react';
import videos from '../Media/Lunch.mp4';
import 'bootstrap/dist/css/bootstrap.min.css';

const Booknow = () => {
  return (
    <div>
      <video autoPlay loop muted className="video-bg" style={{ width: '100%', height: 'auto' }}>
        <source src={videos} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-xl-4 glass-form" style={{ marginTop: '50px', marginBottom: '50px' }}>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label white-text">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="phone" className="form-label white-text">Phone Number:</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="city" className="form-label white-text">City:</label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  name="city"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="pincode" className="form-label white-text">Pincode:</label>
                <input
                  type="text"
                  className="form-control"
                  id="pincode"
                  name="pincode"
                />
              </div>

              <div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Book Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booknow;
