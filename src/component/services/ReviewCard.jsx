import React, { useEffect, useRef, useState } from "react";
import profile from '../../images/services/Ellipse 2181.png';
import start from '../../images/services/Star 1.png';

import "./ReviewCard.css"; // Custom styles

const testimonials = [
  {
    id: 1,
    name: "Jenna May",
    title: "Business Analyst",
    image: profile,
    review:
      "Their collection of frames is stunning! I found the perfect pair that fits comfortably and looks amazing. The staff was incredibly helpful, and the blue light lenses have been a game-changer for my work.",
    date: "May 8, 2024",
    source: "Google Review",
  },
  {
    id: 2,
    name: "Alex Johnson",
    title: "Software Engineer",
    image: profile,
    review:
      "Their collection of frames is stunning! I found the perfect pair that fits comfortably and looks amazing. The staff was incredibly helpful, and the blue light lenses have been a game-changer for my work.!",
    date: "May 10, 2024",
    source: "Google Review",
  },
  {
    id: 3,
    name: "Sophia Lee",
    title: "UX Designer",
    image: profile,
    review: "Their collection of frames is stunning! I found the perfect pair that fits comfortably and looks amazing. The staff was incredibly helpful, and the blue light lenses have been a game-changer for my work.!",
    date: "May 12, 2024",
    source: "Google Review",
  },
  {
    id: 4,
    name: "Michael Brown",
    title: "Marketing Manager",
    image: profile,
    review: "I was amazed by the variety of styles available. My new glasses are perfect!",
    date: "May 15, 2024",
    source: "Google Review",
  },
  {
    id: 5,
    name: "Emma Wilson",
    title: "Content Creator",
    image: profile,
    review: "Absolutely love my new frames! The process was smooth, and the team was excellent.",
    date: "May 18, 2024",
    source: "Google Review",
  },
];


const ReviewCard = () => {
  const [cardsPerSlide, setCardsPerSlide] = useState(3);
  const [key, setKey] = useState(0); // Forces component to re-render
  const carouselRef = useRef(null);
  const carouselInstanceRef = useRef(null);

  // Function to update the number of cards per slide dynamically
  const updateCardDisplay = () => {
    const width = window.innerWidth;
    let newCardsPerSlide = 3;

    if (width < 768) {
      newCardsPerSlide = 1;
    } else if (width < 992) {
      newCardsPerSlide = 1;
    }

    if (newCardsPerSlide !== cardsPerSlide) {
      setCardsPerSlide(newCardsPerSlide);
      setKey(prevKey => prevKey + 1); // Forces re-render
    }
  };

  useEffect(() => {
    updateCardDisplay();
    window.addEventListener("resize", updateCardDisplay);

    return () => window.removeEventListener("resize", updateCardDisplay);
  }, []);

  useEffect(() => {
    if (carouselInstanceRef.current) {
      carouselInstanceRef.current.dispose(); // Properly destroy previous instance before initializing a new one
    }

    if (carouselRef.current) {
      carouselInstanceRef.current = new window.bootstrap.Carousel(carouselRef.current, { interval: 2000 });
    }
  }, [cardsPerSlide, key]); // Re-initialize carousel when layout changes

  return (
    <div className="container-fluid py-5 my-5">
      <div className="text-center mb-4">
        <h2 className="title">What Our Patients Say</h2>
        <p className="w-50 mx-auto sub-text">
        When you need us for improve your business, then come us to help us to help your then come have reach it, you just sit and feel that goal
        </p>
      </div>

      {/* Bootstrap Carousel */}
      <div id="testimonialCarousel" className="carousel slide" ref={carouselRef} key={key} data-bs-ride="carousel">
        <div className="carousel-inner">
          {testimonials.reduce((acc, _, index) => {
            if (index % cardsPerSlide === 0) {
              acc.push(
                <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                  <div className="d-flex justify-content-center flex-wrap">
                    {testimonials.slice(index, index + cardsPerSlide).map((testimonial) => (
                      <div key={testimonial.id} className="testimonial-wrapper">
                        <div className="testimonial-card">
                          <img src={testimonial.image} className="rounded-circle mx-auto mt-3" alt={testimonial.name} width="80" height="80" />
                          <h5 className="mt-3 review-username">{testimonial.name}</h5>
                          <p className="text-muted">{testimonial.title}</p>
                          <div className="text-warning mb-2">
                            {[...Array(5)].map((_, i) => (
                              <i key={i} className="bi bi-star-fill"><img src={start} width="20" height="20" /></i>
                            ))}
                          </div>
                          <p className="user-review px-3">{testimonial.review}</p>
                          <div className="text-muted small mt-2">
                            <span className="card-footer">
                              <i className="me-5">{testimonial.date}</i> <i className="ms-5">{testimonial.source}</i>
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            }
            return acc;
          }, [])}
        </div>

        {/* Navigation Buttons */}
        <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;
