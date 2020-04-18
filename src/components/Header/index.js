import React from "react";
import "./style.css";

function Header() {
  return (
    <div className= "jumbotron header">
      <h1>-Full-Bio-</h1>
      <article className="widget_content">  
            <button className = "profile-button">
              <a href="https://www.linkedin.com/in/mira-thakkar-4b9124149/" class="fa fa-linkedin"></a> 
            </button>
            <button className = "profile-button">
              <a href="https://github.com/MiraThakkar/" class="fa fa-github"></a>
            </button>
      </article>
    </div>
  );
}

export default Header;
