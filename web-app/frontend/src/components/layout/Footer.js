import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

import './Footer.css';


/**
 * Footer of our website. Bar on the bottom with some information about the page
 */

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <p>
              ToyFy: Learn and Earn! 
            </p>
          </MDBCol>
          <MDBCol md="6 text-md-right">
            <h5 className="title"></h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">About Us</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Contact</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">FAQ</a>
              </li>
          </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center">
      <i className="fa fa-facebook"></i> &nbsp;
      <i className="fa fa-twitter"></i> &nbsp;
      <i className="fa fa-google"></i>
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com">toyfy.com</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;