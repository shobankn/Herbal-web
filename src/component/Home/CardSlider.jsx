import React, { useState } from "react";
import imageSlider1  from '../../images/card slider/Image (1).png';
import imageSlider2  from '../../images/card slider/Image (2).png';
import imageSlider3  from '../../images/card slider/Image(4).png';
import imageSlider4  from '../../images/card slider/Image (1).png';
import cardarrowicon from '../../images/card slider/cardarrowicon.png'
import profile from '../../images/home images/Avatar.png'
import rightarrowicon from '../../images/card slider/cardrighticon.png';
import leftarrowicon from '../../images/card slider/cardlefticon.png';

import  './CardSlider.css';


const CardSlider = () => {
    
  // Dummy blog data
  const blogData = [
    {
      id: 1,
      image: imageSlider1,
      title: "UX review presentations",
      category: "Design",
      date: "20 Jan 2022",
      author: "Olivia Rhye",
    },
    {
      id: 2,
      image: imageSlider2,
      title: "Migrating to Linear 101",
      category: "Design",
      date: "19 Jan 2022",
      author: "Olivia Rhye",
    },
    {
      id: 3,
      image: imageSlider4,
      title: "Building your API Stack",
      category: "Development",
      date: "18 Jan 2022",
      author: "Olivia Rhye",
    },
    {
      id: 4,
      image: imageSlider1,
      title: "Bill Payments System",
      category: "Finance",
      date: "17 Jan 2022",
      author: "Olivia Rhye",
    },
    {
      id: 5,
      image: imageSlider2,
      title: "Secure Authentication Strategies",
      category: "Security",
      date: "16 Jan 2022",
      author: "Olivia Rhye",
    },
    {
      id: 6,
      image: imageSlider4,
      title: "Optimizing Frontend Performance",
      category: "Development",
      date: "15 Jan 2022",
      author: "Olivia Rhye",
    },
  ];

  return (
    <div className="container my-5">
        
      <h6 className=" fw-bold" style={{color:"#519C0C",fontFamily:"Roboto"}}>Latest posts</h6>
      <div className="cardheader-btn">
      <h2 className="fw-bold" style={{color:"#18467F", fontFamily: 'Roboto sans-serif'}}>Our Blogs </h2>
    <button className="cardheader-btn">View all posts</button>
      </div>
      <p className="text-muted " style={{fontFamily:"Roboto"}}>
        Interviews, tips, guides, industry best practices, and news.
      </p>
     

      <div
        id="carouselExampleControls"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {blogData
            .reduce((acc, blog, index) => {
              if (index % 3 === 0) acc.push([]);
              acc[acc.length - 1].push(blog);
              return acc;
            }, [])
            .map((group, i) => (
              <div className={`carousel-item ${i === 0 ? "active" : ""}`} key={i}>
                <div className="row justify-content-center">
                  {group.map((blog) => (
                    <BlogCard key={blog.id} {...blog} />
                  ))}
                </div>
              </div>
            ))}
        </div>

        {/* Carousel Controls */}
       {/* Carousel Controls with Fixed Positioning */}
       <div className="carousel-buttons">
  <button className="arrownbtn" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
  <img src={leftarrowicon}/>
  </button>
  
  <button className="arrownbtn1" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
   <img src={rightarrowicon}/>
  </button>
</div>




      </div>
    </div>
  );
};

// Blog Card Component
const BlogCard = ({ image, title, category, date, author }) => {
  return (
    <div className="col-md-4 " style={{position:"relative"}}>
      <div className="card shadow-sm border-0 rounded-4">
        <img src={image} className="card-img-top rounded-top-4" alt={title} />
        <div className="card-body">
          <small className="fw-bold " style={{color:"#519C0C",fontFamily:"Roboto"}}>{category}</small>
          <a href="#" 
   style={{
      textDecoration: "none", 
      fontFamily: "Roboto", 
      color: "#333333", 
      display: "flex", 
      alignItems: "center", 
      gap: "10px", 
      whiteSpace: "nowrap", 
      overflow: "hidden", 
      textOverflow: "ellipsis"
   }}
>
  <h5 style={{
        fontFamily: "Roboto", 
        fontSize: "16px", 
        margin: 0, 
        display: "inline-flex", 
        alignItems: "center", 
        gap: "10px", 
        minWidth: "0", 
        flexGrow: "1", 
        overflow: "hidden", 
        textOverflow: "ellipsis", 
        whiteSpace: "nowrap"
     }}>
    {title} 
  </h5>
  <span style={{
        color: "#174781", 
        display: "flex", 
        alignItems: "center", 
        flexShrink: "0"
     }}>
    <img src={cardarrowicon} style={{ width: "10px", height: "10px", objectFit: "contain"  }} />
  </span>
</a>

          <p className="text-muted" style={{ fontSize: "14px", fontFamily:"Roboto" }}>
            {title}
          </p>
          <div className="d-flex align-items-center">
          <img
              src={profile}
              alt="author"
              className="rounded-circle me-2"
            />

            <div>
              <strong>{author}</strong>
              <br />
              <small className="text-muted" style={{fontFamily:"Roboto",color:"#475467"}}>{date}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSlider;
