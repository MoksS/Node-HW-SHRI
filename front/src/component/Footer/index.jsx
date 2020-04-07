import React from "react";
import "./Footer.scss";
import "./Link.scss";
import "./Copyright.scss";

function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer_Content">
        <div className="Link">
          <a className="Link_ATag" href="/#">Support</a>
          <a className="Link_ATag" href="/#">Learning</a>
        </div>
        <div className="Copyright">
          <p className="Copyright_Text">© 2020 Your Name</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;