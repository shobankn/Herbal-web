import NavBar from "../Navbar/Navbar"
import plant from '../../images/Aboutus/image 12111.png';
import bootlehand from '../../images/Aboutus/Group 1321315260.png';
import mainImage from '../../images/Aboutus/image.png';
import quality from '../../images/Aboutus/Group.png';
import Satisfaction from '../../images/Aboutus/Frame2.png';
import  Innovation from '../../images/Aboutus/Frame.png';
import ourmissionimgae from '../../images/Aboutus/image mission.png';
import lineimage from '../../images/Aboutus/Vector 1.png';
import './AboutUs.css';
import TestimonialCard from "../Home/TestimonialCard";
import Footer from "../Footer/Footer";

const Aboutus = ()=>{
    return(
        <>
        <NavBar/>

        <section className="about-section container-fluid aboutGradient" style={{ paddingTop: "60px" }}>
        <div className="container">
          <div className="text-center mb-4 p-3">
            <h6 className="text-start nicesubtext">Nice to meet you</h6>
            <h2 className="fw-bold text-start">
              <img src={plant} className="plant-icon" alt="Plant" /> <span className="aboutHeading">About Herbal Homeo Wellness LLC</span>
            </h2>

            <p className="text-muted text-start subtext">
              When you need us for improving your business, then come to us to help
              you to <br /> help your business grow. Once you have reached it, you just sit
              and feel that goal.
            </p>
          </div>
          <div className="row justify-content-center mt-4">
            <div className="col-lg-10 col-md-12 text-center">
              <div className="image-container">
                <img src={bootlehand} alt="Herbal Homeo Wellness" className="img-fluid responsive-image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="hrline"></hr>

      <section className="who-we-are container my-5">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-lg-6 text-center">
          <img src={mainImage} alt="Herbal Homeo Wellness" className="img-fluid rounded shadow mainimage" />
        </div>

        {/* Text Content */}
        <div className="col-lg-6">
            <img src={lineimage} className="verticalLine"/>
          <h2 className="who-title">Who We Are</h2>
          <p className="who-text">
            Herbal Homeo Wellness LLC is dedicated to natural healing through homeopathy & holistic care, offering personalized treatments.
          </p>

          {/* Icons Section */}
          <div className="row text-center mt-4">
            <div className="col-md-4">
              <img src={quality} alt="Quality" className="icon-img" />
              <p className="icon-text">Quality</p>
            </div>
            <div className="col-md-4">
              <img src={Satisfaction} alt="Satisfaction" className="icon-img" />
              <p className="icon-text">Satisfaction</p>
            </div>
            <div className="col-md-4">
              <img src={Innovation} alt="Innovation" className="icon-img" />
              <p className="icon-text">Innovation</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <hr className="hrline"></hr>


    <section className="our-mission-section container-fluid">
      <div className="container text-center">
        <h2 className="mission-heading">Our Mission</h2>
        <p className="mission-text">
          To provide safe, effective, and natural healing solutions that restore balance and 
          <br className="d-none d-md-block"/> promote well-being
        </p>
        <div className="mission-image-container">
          <img src={ourmissionimgae} alt="Our Mission" className="img-fluid rounded" />
        </div>
      </div>
    </section>

    <hr className="hrline"></hr>
    <TestimonialCard/>
    <Footer/>
        </>
    )
}

 export default  Aboutus