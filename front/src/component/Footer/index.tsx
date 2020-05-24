import React, { FC } from "react";
import "./Footer.scss";
import "./Link.scss";
import "./Copyright.scss";
import store from "../../store";

const currentLang = store.getState().lang;

const Footer: FC = () => {
  const { lang } = window;
  return (
    <footer className="Footer">
      <div className="Footer_Content">
        <div className="Link">
          <a className="Link_ATag" href="/#">{lang.Footer.Support}</a>
          <a className="Link_ATag" href="/#">{lang.Footer.Learning}</a>
          <a className="Link_ATag" 
            href={currentLang === 'ru' ? "/en" : "/ru"}
          >
            {lang.Footer.lang}</a>
        </div>
        <div className="Copyright">
          <p className="Copyright_Text">{lang.Footer.Copyright}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;