import React from "react";

const Navbar = () => {
  return (
    <>
      <section className="nav">
        <div className="container">
          <div className="nav-bar row justify-content-between">
            <div className="col-12 col-sm-4 logo">
              <img className="logo" src="/logo.png" />
            </div>
            <div className="col-12 col-sm-8">
              <div className="row">
                <a className="col nav-link m-3" href="#">
                  Home
                </a>
                <a className="col nav-link m-3" href="#">
                  Service Us
                </a>
                <a className="col nav-link m-3" href="#">
                  Why Us
                </a>
                <button className="col btn btn-light m-2" type="button">
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
