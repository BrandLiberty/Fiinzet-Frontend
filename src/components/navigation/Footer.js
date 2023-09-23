import React from "react";
import { CDBBtn, CDBIcon, CDBBox } from "cdbreact";
import "../assets/css/footer.css";

const Footer = () => {

  function handleCall() {
    const phoneNumber = '+918087333493'; // Replace with the phone number you want to call
    window.location.href = `tel:${phoneNumber}`;
  }

  return (
    <div className="footerCSS">
      {/* .........used footer....... */}
      <hr className="featurette-divider" />

      <footer className="my-3 pt-3 text-body-secondary text-center text-small  bottom-0 w-100 fCSS">
        <p className="mb-1">&copy; @2023 FIINZET</p>
        <p>
          All rights reserved
          <br />
          Fiinzet and the Fiinzet.com logo are registered trademarks of Fiinzet
          Captech Pvt Ltd.
        </p>
        <ul className="list-inline">

          <li className="list-inline-item">
            <a href="/">T&C Apply</a>
          </li>
        </ul>
        <div className="iconsCSS">
          <CDBBox display="flex">
            <CDBBtn
              flat
              color="success"
              className="p-2"
              style={{ backgroundColor: "#b3d33e" }}
            >
              <a
                href="https://www.facebook.com/profile.php?id=100095689624817&mibextid=ZbWKwL"
                style={{ color: "#fff" }}
              >
                <CDBIcon fab icon="facebook" size="lg" />
              </a>
            </CDBBtn>
            <CDBBtn
              flat
              color="success"
              className=" p-2"
              style={{ backgroundColor: "#b3d33e" }}
            >
              <a
                href="https://www.linkedin.com/company/97927759/admin/feed/posts/?feedType=following#:~:text=View%20as-,member,-Feed"
                style={{ color: "#fff" }}
              >
                <CDBIcon fab icon="linkedin" size="lg" />
              </a>
            </CDBBtn>
            <CDBBtn
              flat
              color="success"
              className="p-2"
              style={{ backgroundColor: "#b3d33e" }}
            >
              <a
                href="https://www.instagram.com/invites/contact/?i=bikrybtch826&utm_content=s5te2p5"
                style={{ color: "#fff" }}
              >
                <CDBIcon fab icon="instagram" size="lg" />
              </a>
            </CDBBtn>
            <CDBBtn
              flat
              color="success"
              className="p-2"
              style={{ backgroundColor: "#b3d33e" }}
            >
              <a href="https://fiinzet.com/" style={{ color: "#fff" }}>
                <CDBIcon fab icon="google" size="lg" />
              </a>
            </CDBBtn>
          </CDBBox>
        </div>

        <div>
          {/* Whatsapp Integration */}
          <div className="elfsight-app-12a24646-5e89-4fe3-a429-892f2bb32143"></div>
          <div className="call-btn" onClick={handleCall}>Call Us</div>
          {/*<div className="elfsight-app-1a18ad62-adb8-43a5-9f98-01f69cfb4515"></div>*/}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
