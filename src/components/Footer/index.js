import React from "react";

import "./style.css";

function Footer() {
  return (

    <div class="footer">
      <h2>Visit</h2>
      
      <article className="widget_content">
        <a href="https://www.linkedin.com/in/mira-thakkar-4b9124149/" > Linked <i class="fa fa-linkedin"></i></a><br/>

        <a href="https://github.com/MiraThakkar/"> Github <i class="fa fa-github"></i></a>
      </article>
      <footer className="card-footer text-center">
        Copyright &copy;2020!
      </footer>
    </div>
  );
}

export default Footer;
