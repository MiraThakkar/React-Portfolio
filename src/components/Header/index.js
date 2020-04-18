import React from "react";
import "./style.css";

function Header() {
  return (
    <div className= "jumbotron header">
      <h1>~Mira Thakkar~</h1>
      <article className="widget_content">  
            <button className = "profile-button">
              <a href="https://www.linkedin.com/in/mira-thakkar-4b9124149/" className ="fa fa-linkedin" />
            </button>
            <button className = "profile-button">
              <a href="https://github.com/MiraThakkar/" className="fa fa-github" /> 
            </button>
      </article>
    </div>
  );
}

export default Header;
