import NavBar  from '../Navbar/Navbar';
import './Homepage.css';
import herbalimage from  '../../images/home images/image.png'
import herbalmodule from '../../images/home images/herbalmodule.png'
import HomeopathicTreatment from '../../images/home images/Group 1321315292.png';
import HomeopathicTreatment2  from '../../images/home images/Group 1321315292 (1).png';
import image1 from '../../images/home images/Image (1).png';
import image2 from '../../images/home images/Image (2).png';
import image3 from '../../images/home images/Image (3).png';
import image4 from '../../images/home images/Image (4).png';
import image5 from '../../images/home images/Image (5).png';
import container_header from '../../images/home images/BG Wave.png'
import container_footer from '../../images/home images/BG Wave (1).png'
import profile from '../../images/home images/Avatar.png'
import arrowleft from '../../images/home images/Icon.png'
import arrowright from '../../images/home images/Icon (1).png'
import CardSlider from './CardSlider';
import TestimonialCard from './TestimonialCard';
import FAQAccordion from './F&Q';
import FAQComponent from './F&Q';
import Footer from '../Footer/Footer';

const Home = ()=>{
    return (
        
       
        <>
             <NavBar/>
        <section className="hero-section d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          {/* Text Section */}
        <div className="col-12  col-md-6 text-section text-center text-md-start">
            <h1 className="responsive-heading">Healing Naturally, <br />Caring Holistically</h1>
            <p className="responsive-text">
                Experience the power of natural healing with our
                comprehensive homeopathic treatments.
  </p>

    <button className="btn1">Book a Consultation</button>
    <button className="btn2">Learn more →</button>
  
</div>
          {/* Image Section */}
          <div className="col-12 col-md-6 text-center image-section">
            <img src={herbalimage} alt="Herbal Medicine" className="hero-image img-fluid" />
          </div>
        </div>
      </div>
    </section>


    <div className="container mt-5">
      {/* Heading Section */}
      <div className="text-center">
        <h1 className="main-heading mt-5">
          Welcome to Herbal Homeo Wellness LLC – Your Trusted Partner in Natural Healing
        </h1>
        
        <p className="sub-heading mainsubheading">
          At Herbal Homeo Wellness LLC, we are committed to providing holistic, natural, and personalized 
          healthcare through the power of homeopathy and herbal medicine. Our mission is to help individuals 
          achieve optimal health by addressing the root causes of illness rather than just managing symptoms.
        </p>
        </div>
      

      {/* Content Section */}
      <div className="row align-items-center mt-4">
        {/* Image Section */}
        <div className="col-12 col-md-4 text-center">
          <img 
            src={herbalmodule}
            alt="Dr. Asma Khan" 
            className="img-fluid rounded shadow"
          />
        </div>

        {/* Text Section */}
        <div className="col-12 col-md-8">
          <h2 className="why-heading">Why we chose us?</h2>
          <p className="sub-heading">
            Hi. At Herbal Homeo Wellness LLC, we are committed to providing holistic, natural, and 
            personalized healthcare through the power of homeopathy and herbal medicine. Our mission 
            is to help individuals achieve optimal health by addressing the root causes of illness 
            rather than just managing symptoms.
          </p>

          {/* Features Section */}
          <div className="row mt-3">
            <div className="col-md-6">
              <h3 className="feature-title">Natural & Safe Healing</h3>
              <p className="feature-text">No side effects or harsh chemicals</p>
            </div>
            <div className="col-md-6">
              <h3 className="feature-title">Personalized Approach</h3>
              <p className="feature-text">Customized treatment plans based on your unique needs</p>
            </div>
            <div className="col-md-6">
              <h3 className="feature-title">Whole-Body Wellness</h3>
              <p className="feature-text">Treating physical, emotional, and mental well-being holistically</p>
            </div>
            <div className="col-md-6">
              <h3 className="feature-title">Experienced & Compassionate Care</h3>
              <p className="feature-text">Led by Dr. "Asma Khan", an expert in homeopathy and natural medicine</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-4">
        <p className="sub-heading">
          Whether you're looking for relief from chronic illness, support for acute conditions, or preventive healthcare, 
          we are here to guide you on your journey to natural healing and wellness.
        </p>
        <a 
          href="#" 
          className="cta-link"
        >
          Visit our website to learn more and book your consultation today!
        </a>
      </div>
    </div>



    <div className="container py-5 shadowcontainer">
      {/* Heading Section */}
      <div className="text-center circle-shadow">
        <h1 className="main-heading">Welcome to Herbal Home Wellness</h1>
        <p className="sub-heading">
          We searched high and low, but couldn't find what you're looking for. <br />
          Let’s find a better place for you to go.
        </p>
      </div>

      {/* First Section */}
      <div className="row align-items-center my-5">
        <div className="col-12 col-md-5 text-center">
          <div className="image-wrapper">
            <img 
              src={HomeopathicTreatment} 
              alt="Homeopathic Consultations" 
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
        <div className="col-12 col-md-7">
          <h2 className="section-title">Homeopathic Consultations</h2>
          <p className="section-text">
            Homeopathic Consultations offer personalized, holistic healthcare solutions using natural remedies
            to support the body’s self-healing process. Expert practitioners assess your symptoms, lifestyle, 
            and medical history to provide tailored treatments for various acute and chronic conditions. 
            Safe, gentle, and effective for all ages. 🌿✨
          </p>
          <a href="#" className="cta-link2">Dive in to learn all about our services</a>
          <br />
          <button className=" start-learning-button">Start Learning →</button>
        </div>
      </div>

      {/* Second Section */}
      <div className="row align-items-center my-5 flex-md-row-reverse">
        <div className="col-12 col-md-5 text-center">
          <div className="image-wrapper">
            <img 
              src={HomeopathicTreatment2} 
              alt="Natural Remedies" 
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
        <div className="col-12 col-md-7">
          <h2 className="section-title">Natural Remedies</h2>
          <p className="section-text">
            Homeopathic Consultations offer personalized, holistic healthcare solutions using natural remedies
            to support the body’s self-healing process. Expert practitioners assess your symptoms, lifestyle, 
            and medical history to provide tailored treatments for various acute and chronic conditions. 
            Safe, gentle, and effective for all ages. 🌿✨
          </p>
          <a href="#" className="cta-link2">Dive in to learn all about our product</a>
          <br />
          <button className="start-learning-button">View latest posts →</button>
        </div>
      </div>
    </div>


    <img src={container_header} className='img-fluid'/>
    <div className="testimonial-container">
       
      <div className="testimonial-content container">
        {/* Left Content */}
        <div className="testimonial-text">
          <div className="stars">★★★★★</div>
          <p className="quote">
            We’ve really sped up our workflow using Untitled and haven’t looked back.
          </p>
          
         

            <div className="profile">
    <img src={profile} alt="Katherine Moss" className="profile-img" />
    <div className="profile-text">
      <h4>Katherine Moss</h4>
      <p>Project Manager, Layers</p>
    </div>



            
            
                <div className="button-container">
              <button className="arrow-button">
                <img src={arrowleft} alt="Left Arrow" />
              </button>

              <button className="arrow-button">
                <img src={arrowright} alt="Right Arrow" />
              </button>
            </div>
          
          </div>
          
        </div>

        {/* Right Content (Image Grid) */}
        <div className="image-grid">
        <img src={image5} alt="Person 5" className="grid-item bottom-right Person5 img-fluid" />
          <img src={image1} alt="Person 1" className="grid-item top-right Person1" />
          <img src={image2} alt="Person 2" className="grid-item center-left Person2" />
          <img src={image3} alt="Person 3" className="grid-item center-right Person3" />
          <img src={image4} alt="Person 4" className="grid-item bottom-right Person4" />
         
        </div>
      </div>
      
    </div>
    <img src={container_footer} className='img-fluid'/>


  
      <CardSlider/>
      <TestimonialCard/>
      <FAQComponent/>
      <Footer/>


        </>

        
    )
}

export default  Home;