
import React, {useState} from "react";
import "./About.css";
import img from "./images/namitha.jpeg";


// import aboutImg from "./img/about.jpg";
function About() {
  const [show, setShow]=useState(true);
 
  //  Up To Top Btn
    // window.addEventListener("scroll", function(){
    //   const upToTop = document.querySelector("a.bottom__to__top");
    //    upToTop.classList.toggle("active", window.scrollY > 0)
    // });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={img} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                 I'm from Udupi. I'm a fresher I don't have any work expirence in front end and
                 web development. I wanted to be a web developer since my degree days. I did all my projects
                 in front end. My passion for learning new things and creativity in it made me better in 
                 web development.
              </p>
              <p className="about__text p__color">
                I have 6 months (Internship) expirience in Techciti organization PVT LTD as a software Developer.

              </p>
              {/* <p className="about__text p__color">
               
              </p> */}
              <div className="about__button d__flex align__items__center">
              <a href="./namitha_resume.pdf" download>  
              <button className="about btn pointer"> Download Cv</button>
                </a>
                {/* <a href="#">
                  <button className="about btn pointer">Hire Me</button>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default About;

 {/* UP TO TOP BTN */}
      {/* <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-up white"
          viewBox="0 0 16 16"
        > */}
          {/* <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          /> */}
        {/* </svg>
        </a>
      </div> */}