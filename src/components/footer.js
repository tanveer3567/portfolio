import React from 'react';
import { MDBContainer, MDBFooter } from "mdbreact";

function footer() {

    return (
        <MDBFooter color="blue" className="font-small pt-4 mt-4">
          <div className="footer-copyright text-center py-3" bg="dark" variant="dark" expand="lg">
            <MDBContainer fluid>
            Developed using React &copy;  {new Date().getFullYear()} Copyright: Tanveer 
            </MDBContainer>
          </div>
        </MDBFooter>
      );
}

export default footer;