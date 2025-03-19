import NavBar from "../Navbar/Navbar"
import icon1 from '../../images/services/image (2).png';
import icon2 from '../../images/services/image (1).png';
import icon3 from '../../images/services/image.png';
import icon4 from '../../images/services/image (3).png';
import icon5 from '../../images/services/image (4).png';
import icon6 from '../../images/services/image (5).png';
import icon7 from '../../images/services/image mind.png';
import  './Services.css'
import ReviewCard from "./ReviewCard";
import Footer from "../Footer/Footer";


const Services =  ()=>{
    const services = [
        {
          id: 1,
          title: "Custom Herbal Formulations",
          description:
            "Herbal Homeo Wellness LLC, we believe that every individual's health needs are unique. We create personalized herbal blends tailored to your body's needs.",
          icon: icon1,
          button: "Book a Consultation",
          hasBackground: true,
        },
        {
          id: 2,
          title: "Acute Illness Treatment with Homeopathy",
          description:
            "Homeopathy works by stimulating your immune system, promoting a quicker and more balanced recovery.",
          icon: icon2,
          button: "Book a Consultation",
          hasBackground: false,
        },
        {
          id: 3,
          title: "Chronic Disease Management with Homeopathy",
          description:
            "Whether you suffer from digestive issues, hormonal imbalances, allergies, or chronic pain, our personalized approach ensures safe and effective relief.",
          icon: icon3,
          button: "Book a Consultation",
          hasBackground: true,
        },
        {
          id: 4,
          title: "Constitutional Homeopathy",
          description:
            "This approach is highly effective for chronic diseases, hormonal imbalances, and mental health concerns like anxiety and depression.",
          icon: icon4,
          button: "Book a Consultation",
          hasBackground: false,
        },
        {
          id: 5,
          title: "Pediatric Homeopathy",
          description:
            "Pediatric homeopathy provides gentle & natural care for children who are sensitive and respond well to holistic treatment.",
          icon: icon5,
          button: "Book a Consultation",
          hasBackground: false,
        },
        {
          id: 6,
          title: "Women's Health Solutions",
          description:
            "We offer natural, holistic solutions for a wide range of women's health concerns, promoting overall well-being.",
          icon: icon6,
          button: "Book a Consultation",
          hasBackground: false,
        },
        {
            id: 7,
            title: "Women's Health Solutions",
            description:
              "We offer natural, holistic solutions for a wide range of women's health concerns, promoting overall well-being.",
            icon: icon7,
            button: "Book a Consultation",
            hasBackground: false,
          },
      ];
    return(
        <>
        <NavBar/>
        <div className="services-section">
      <h2 className="services-title">Our Services</h2>
      <p className="services-description">
      We offer a range of holistic and natural wellness services designed to support your health and well-being. Our expert practitioners use homeopathic and herbal approaches to help you achieve balance and vitality.
      </p>

      <div className="container">
        <div className="row justify-content-center">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="service-card">
                <div className="icon-wrapper">
                  <img src={service.icon} alt="service icon" />
                </div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
                <button className=" btn-success1">{service.button}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ReviewCard/>
    </div>

   
    <Footer/>
        </>
    )
}

export default  Services