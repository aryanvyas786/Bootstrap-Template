import React from "react";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <img className="footerlogo" src="/footerlogo.png" alt="Img"></img>
          </div>
          <div className="col-3  footerheading">
            <h6>Link</h6>
            <li>Home</li>
            <li>Pricing</li>
            <li>Download</li>
            <li>About</li>
            <li>Service</li>
          </div>
          <div className="col-3  footerheading">
            <h6>Support</h6>
            <li>FAQ</li>
            <li>How it </li>
            <li>Features</li>
            <li>Contact</li>
            <li>Reporting</li>
          </div>
          <div className="col-3  footerheading">
            <h6>Contact Us</h6>
            <li>+880 12345678</li>
            <li>youremail</li>
            <li>Rangpur City</li>
          </div>

          <div className="row">
            <div className="col d-flex gap-4">
              <img className="sociallogo" src="/facebook.png" alt="Img"></img>
              <img className="sociallogo" src="/twitter.png" alt="Img"></img>
              <img className="sociallogo" src="instagram.png" alt="Img"></img>
              <img className="sociallogo" src="/pinterest.png" alt="Img"></img>
            </div>
          </div>

          <div className="row">
            <div className="col-8">
              <p className="copyright">Copyright & Design By @Md Riad Islam</p>
            </div>
            <div className="col-4 d-flex justify-content-end">
              <p className="terms">Terms of use | Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
