import productimage from '../../images/product/Group 1321315292.png';
import image1 from '../../images/product/image (2).png';
import image2 from '../../images/product/image (3).png';
import image3 from '../../images/product/image (4).png';
import image4 from '../../images/product/image mind.png';
import image5 from '../../images/product/image.png';
import image6 from '../../images/product/image (2).png';
import detailsimage from '../../images/product/image detials.png'
import detailsimage2 from '../../images/product/pexels-asphotograpy-105028.jpg'
import detailsimage3 from '../../images/product/pexels-kindelmedia-7667731.jpg'
import detailsimage4 from '../../images/product/pexels-pixabay-163186.jpg'
import detailsimage5 from '../../images/product/pexels-pixabay-531446.jpg'
import detailsimage6 from '../../images/product/pexels-tami-arita-173741955-31218402.jpg'
import arrow from '../../images/product/arrow-right.png';

import './Product.css';
import NavBar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import ReviewCard from '../services/ReviewCard';
import { useNavigate } from 'react-router-dom';
const Product = ()=>{
    const navigate = useNavigate();

    const handleProductClick = (product) => {
        navigate(`/product/${product.id}`, { state: { product } });
      };

      const products = [
        {
            id: 1,
            icon: image1,
            title: "Herbal Homeo Wellness Weight Loss Drops",
            images:detailsimage,
            description: "Targets belly fat and bloating, supports appetite control and fat metabolism.",
            bgColor: "#6ab023",
            details: {
                fullDescription: "A powerful blend of natural herbs that aid in digestion and weight reduction while maintaining energy levels.",
                ingredients: [
                    { name: "Garcinia Cambogia", benefit: "Helps reduce appetite and block fat production" },
                    { name: "Green Tea Extract", benefit: "Boosts metabolism and increases fat burning" }
                ],
                dosage: "Take 10 drops in warm water before meals, twice daily",
                price: "$89.99"
            }
        },
        {
            id: 2,
            icon: image2,
            title: "Herbal Homeo Wellness ADHD Drops",
            images:detailsimage2,
            description: "Supports focus, hyperactivity control, and emotional balance in children and adults.",
            bgColor: "#f4a261",
            details: {
                fullDescription: "Formulated to improve concentration, reduce impulsivity, and promote mental clarity.",
                ingredients: [
                    { name: "Bacopa Monnieri", benefit: "Boosts cognitive function and memory" },
                    { name: "Ginkgo Biloba", benefit: "Enhances brain circulation and focus" }
                ],
                dosage: "5-10 drops in water, 2-3 times a day",
                price: "$79.99"
            }
        },
        {
            id: 3,
            icon: image3,
            title: "Herbal Homeo Wellness Menses Drops",
            images:detailsimage3,
            description: "Natural relief for menstrual pain, cramps, and hormonal balance.",
            bgColor: "#e76f51",
            details: {
                fullDescription: "A herbal remedy to ease discomfort during menstruation and support reproductive health.",
                ingredients: [
                    { name: "Dong Quai", benefit: "Regulates menstrual cycles and reduces cramps" },
                    { name: "Chasteberry", benefit: "Balances hormones and reduces PMS symptoms" }
                ],
                dosage: "10 drops in warm water, twice daily during the cycle",
                price: "$69.99"
            }
        },
        {
            id: 4,
            icon: image4,
            title: "Bach Flower Remedies",
            images:detailsimage4,
            description: "A unique blend of flower extracts to promote emotional well-being and stress relief.",
            bgColor: "#2a9d8f",
            details: {
                fullDescription: "A natural solution for managing anxiety, stress, and emotional imbalance.",
                ingredients: [
                    { name: "Rescue Remedy", benefit: "Helps calm nerves and reduce stress" },
                    { name: "Rock Rose", benefit: "Eases panic and promotes emotional stability" }
                ],
                dosage: "4 drops in water, up to 4 times a day",
                price: "$49.99"
            }
        },
        {
            id: 5,
            icon: image5,
            title: "Infants & Kids Immunity Boost Drops",
            images:detailsimage5,
            description: "A gentle, safe formula to strengthen the immune system of infants and young children.",
            bgColor: "#264653",
            details: {
                fullDescription: "Specially designed for young children to protect against seasonal illnesses and strengthen their immune response.",
                ingredients: [
                    { name: "Elderberry", benefit: "Boosts immunity and fights infections" },
                    { name: "Zinc", benefit: "Supports healthy immune function and wound healing" }
                ],
                dosage: "1-5 drops based on age, twice daily",
                price: '$59.99'
            }
        },
        {
            id: 6,
            icon: image6,
            title: "Adult Immunity Booster Drops",
            images:detailsimage6,
            description: "Powerful herbal immunity support for adults to stay strong and active.",
            bgColor: "#8d99ae",
            details: {
                fullDescription: "A high-potency immune-boosting formula to fight infections and improve overall health.",
                ingredients: [
                    { name: "Astragalus Root", benefit: "Enhances the body's defense system and energy levels" },
                    { name: "Reishi Mushroom", benefit: "Supports immune function and longevity" }
                ],
                dosage: "10-15 drops in water, twice daily",
                price: '$74.99'
            }
        }
    ];
    
    return(
        
        <>
        <NavBar/>
      <div className=" main-container row m-0 p-4 p-md-5">
        <div className="col-lg-6 d-flex flex-column justify-content-center">
          <h1 className=" mb-3 product-title" >Transform your Health</h1>
          
          <p className="product-sub-text mb-4">
            Explore a verity of tailored services aimed at enhancing 
            at your overall health and wellness.
          </p>
          
          <div className="d-flex gap-3 mb-5">
            <button className="product-btn">Contact Us</button>
            <button className="product-btn2">Learn more</button>
          </div>
          
          <div className="d-flex flex-wrap">
            <div className=" text-md-start pe-0 ">
              <h2 className="health-review " style={{ fontSize: 'calc(1.4rem + 0.5vw)' }}>13+</h2>
              <p className="product-sub-text">Years of experience</p>
            </div>
            
            <div className="d-none d-md-block" style={{ width: '0.5px', backgroundColor: '#519C0C', margin: '0 20px' }}></div>
            
            <div className="text-center text-md-start ">
              <h2 className="health-review" style={{ fontSize: 'calc(1.4rem + 0.5vw)' }}>3,6M+</h2>
              <p className="product-sub-text ms-3">Trusted by patients</p>
            </div>
            
            <div className="d-none d-md-block" style={{ width: '0.5px', backgroundColor: '#519C0C', margin: '0 20px' }}></div>
            
            <div className="text-center text-md-start ps-0 ps-md-4">
              <h2 className="health-review" style={{ fontSize: 'calc(1.4rem + 0.5vw)' }}>85+</h2>
              <p className="product-sub-text ms-3 ">Professional Doctor</p>
            </div>
          </div>
        </div>
        
        <div className="col-lg-6 mt-4 mt-lg-0">
          <div className="position-relative" style={{ height: '500px' }}>
            <div className="position-absolute top-0 end-0" style={{ width: '100%',height:'auto' }}>
              <img 
                src={productimage} 
                alt="Herbal medicine" 
                className="img-fluid rounded-4 imageshadow"
                style={{ objectFit: 'cover' }}
              />
            </div>
            
          </div>
        </div>
      </div>


      <div className=" container py-5">
      <div className="text-center mb-5">
        <h1 className="product-title mb-3">Discover the Power of our Products</h1>
        <p className="product-sub-text mx-auto" style={{ maxWidth: "600px" }}>
          Explore a variety of tailored product aimed at enhancing your overall health and wellness
        </p>
      </div>

      <div className=" row g-4">
        {products.map((product) => (
          <div key={product.id} className="col-md-6 col-lg-4">
            <div 
              className="card h-100 product-card" 
              style={{ 
            
                overflow: "hidden"
              }}
            >
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <div 
                     className="rounded-circle d-flex align-items-center justify-content-center me-2"
                  >
                    <img 
                    src={product.icon} 
                    alt={product.title} 
                    style={{ width: "60px", height: "60px", objectFit: "contain" }} 
                    />
                  </div>
                </div>
                
                <h5 className='card-title'>
                  {product.title}
                </h5>
                
                <p className='card-sub-text'>
                  {product.description}
                </p>
                
                <div className="mt-auto">
                  <button 
                    className="rounded-pill card-button px-3"  onClick={() => handleProductClick(product)}>
                        
                    See all <span className="ms-1 fs-5 fw-bold">→</span>
                    
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <ReviewCard/>
    <Footer/>
    </>
        
    )
}

export default Product;