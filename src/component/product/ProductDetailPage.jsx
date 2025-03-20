import { useLocation } from 'react-router-dom';
import NavBar from '../Navbar/Navbar';
import './ProductDetailPage.css'
import ReviewCard from '../services/ReviewCard';
import Footer from '../Footer/Footer';
import dose from '../../images/product/dose.png'
import vector from '../../images/product/image 12111.png';
import searchicon from '../../images/product/Vector.png';

const ProductDetailsPage = () => {
    const location = useLocation();
    const product = location.state?.product;

    if (!product) {
        return <h2>Product not found</h2>;
    }


return (
    <>
    <NavBar/>
    <div className=" details-page-container container-fluid bg-light py-4">
      <div className="container">
        {/* Product Header */}
        <h5 className="header-title mb-3">Product Details</h5>
        
        {/* Product Title with Icon */}
        <div className="d-flex align-items-center mb-3">
          <div className="me-2">
            <span className=""><img src={vector}  style={{width:"40px", height:"40px" }}/></span>
          </div>
          <h4 className="card-detial-title mb-0">{product.title}</h4>
        </div>
        
        {/* Product Description */}
        <div className="row mb-4">
          <div className="col-md-9">
            <p className="card-sub-text-description">
           {product.description}
            </p>
          </div>
          <div className="col-md-3 d-flex align-items-center justify-content-end">
  <div className="input-group search-container">
  
    <input 
      type="text" 
      className="detail-page-search-bar" 
      placeholder="Search products..."
    />
    <img src={searchicon} alt="" className='serach-icon'/>
    <button className="search-product-btn">Search</button>
  </div>
</div>
        </div>
        
        {/* Product Image */}
        <div className="mb-4">
          <img 
            src={product.images}
            alt="Weight Loss Drops with pills and leaf" 
            className="img-fluid rounded-4 w-100"
            style={{ maxHeight: '600px', objectFit: 'cover' }}
          />
        </div>
        
        {/* Ingredients Section */}
        <div className="mb-4">
          <h5 className=" Ingredients-heading mb-3">Ingredients</h5>
          {product.details.ingredients.map((ingredient ,index)=>(

          
          <div key = {index} className="ms-2 mb-4">
            <div className="d-flex mb-2">
              <div className="me-2">•</div>
              <div>
                <p className="ingredient-name fw-bold mb-1">{ingredient.name}</p>
                <p className="ingredient-benefit ms-0">{ingredient.benefit}</p>
              </div>
            </div>
            

          </div>
          ))}
          
          {/* Dosage Section */}
          <div className="d-flex align-items-start mb-4">
            <div className="me-2">
              <span className="text-success" style={{ fontSize: '1.2rem' }}><img src={dose}/></span>
            </div>
            <div>
              <h5 className="ingredient-name fw-bold mb-2">Dosage & Usage</h5>
              <p className=" ingredient-benefit mb-0">{product.details.dosage}</p>
            </div>
          </div>
          
          {/* Buy Button and Price */}
          <div className="d-flex align-items-center mb-5">
            <button className="price-button me-3">Buy Now</button>
            <span className="product-price">{product.details.price}</span>
          </div>
        </div>
        
        {/* Related Products Section */}
        
      </div>
    </div>
    <ReviewCard/>
    <Footer/>
    </>
  );
  

};

export default ProductDetailsPage;
