import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import ProfileImage from "../utils/images/Profile1.jpeg";
import Resume from "../utils/Resume.pdf"

function About() {
  return (
    <div>
      
      <Container style={{ marginTop: 30}}>

        <Row>
          <Col size="md-4">

            <div className="card" style = {{ textAlign: "center", height: "380px"}}>
              <div className = "text-center">
                <img src= {ProfileImage} class= "img-fluid" alt="..."  style = {{height: "200px"}}/>
              </div>
              <div id = "badge" class="card-body">
                <h3 className="card-title">Mira Thakkar</h3>
                <p className="card-text">Full Stack Developer</p>
              </div>
              <button className = "profileButton">
                <a className = "resume" target="-blank" href= {Resume}>
                  <i className = "fa fa-download"></i> Download Resume
                </a>
              </button>
            </div>
          </Col>

        
          <Col size="md-8">

            <h6>
                I have Bachelor's Degree in Computer Applcations and
                I have been learning Full Stack Development from UConn since past year. My passion for coding grew 
                after working on a few projects as Business Analyst.
              </h6>
              <br /> 
              <p>
                I am proficient in buiding mobile first web applications in HTML, CSS, Javascript/JQuery and server side apps in NodeJS using RESTful APIs, AJAX, SQL/MySQL and MongoDB.
                Check out few of my apps on my profile page.
              </p>

              <p> 
                As being a personal who prefers challenges than comfort, I was always inclined
                towards the opportunities which inforced me to keep myself in ever learning state. I am self-driven, self-challenged individual and a great team player.
              </p>
              <p>
                I have passion to cook so that I can bring something exciting at dinner table for my family. For selfcare I love to travel new places and I adore coffee dates with my girl friends!
              </p>

          
          </Col>
        </Row>
      </Container>
    </div>  
  );
}

export default About;
